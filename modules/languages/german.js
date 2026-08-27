// FEARN language module: German
// Contract (see engine.js / schema.js — do not modify those files):
//   FEARN.registerModule({ id, name, icon, render(container), getProgress() })
//
// FEARN.ui.renderJourneyPath(container, opts) real contract (ui-components.js):
//   opts = {
//     units,          // ordered array covering the WHOLE roadmap: [{ id, label, level }]
//     currentUnitId,  // id of the "you are here" unit
//     authoredUpToId, // id of the last unit with real authored content
//     levelLabels,    // { level -> display label }, shown as section headers
//   }
// renderJourneyPath is UNIT-granularity only — it draws the path and stamps each
// node with data-unit-id, but has no lesson concept and no built-in click handling.
// This module attaches its own click listeners to the rendered nodes to open a
// per-unit lesson picker, then the SRS-driven lesson flow, below the path.
(function (global) {
  var FEARN = global.FEARN;
  if (!FEARN) return; // engine.js must load first

  var SUBJECT = 'german';
  var MODULE_ID = 'lang-german';
  var LEVEL_LABELS = {
    "A1": "A1 — Beginner",
    "A2": "A2 — Elementary",
    "B1": "B1 — Intermediate",
    "B2": "B2 — Upper-Intermediate",
    "C1": "C1 — Advanced",
    "C2": "C2 — Goethe-Zertifikat C2: GDS (Großes Deutsches Sprachdiplom)"
  };

  function getCurriculum() {
    return (global.FEARN_CURRICULA && global.FEARN_CURRICULA[SUBJECT]) || { units: [], lessons: {} };
  }
  function getLedger() {
    return (global.FEARN_LEDGERS && global.FEARN_LEDGERS[SUBJECT]) || {
      subject: SUBJECT, fullRoadmapLength: 0, authoredInFull: [], stubOnly: [], lastCompletedLessonId: null, nextToAuthor: null,
    };
  }

  // ---------- per-learner progress (local, not the authoring ledger) ----------
  function getCompletedLessonIds() {
    return FEARN.storage.get('lang:' + SUBJECT + ':completedLessons', []);
  }
  function markLessonComplete(lessonId) {
    var done = getCompletedLessonIds();
    if (done.indexOf(lessonId) === -1) {
      done.push(lessonId);
      FEARN.storage.set('lang:' + SUBJECT + ':completedLessons', done);
    }
    FEARN.streak.log(MODULE_ID);
    FEARN.journey.log();
  }

    function getLessonIdsForUnit(u, curriculum, idx) {
    if (Array.isArray(u.lessonIds) && u.lessonIds.length > 0) return u.lessonIds;
    var uNum = u.unit !== undefined ? u.unit : (idx !== undefined ? (idx + 1) : null);
    var uId = u.id || (uNum !== null ? ('u' + uNum) : null);
    var matched = [];
    var lessons = (curriculum && curriculum.lessons) || {};
    Object.keys(lessons).forEach(function (lid) {
      var l = lessons[lid];
      if (l && (l.unit === uNum || l.unit === uId || (uNum !== null && lid.indexOf('-u' + uNum + '-') !== -1))) {
        matched.push(lid);
      }
    });
    return matched;
  }

  function findUnitForLesson(units, lessonId) {
    var curriculum = getCurriculum();
    for (var i = 0; i < units.length; i++) {
      var lids = getLessonIdsForUnit(units[i], curriculum, i);
      if (lids.indexOf(lessonId) !== -1) return units[i];
    }
    return null;
  }

  // Last unit index that has at least one authored lesson (used for authoredUpToId).
    function lastAuthoredUnitId(units, lessons) {
    var curriculum = getCurriculum();
    var lastId = null;
    for (var i = 0; i < units.length; i++) {
      var lids = getLessonIdsForUnit(units[i], curriculum, i);
      var hasAuthored = lids.some(function (lid) { return !!lessons[lid]; });
      if (hasAuthored) lastId = units[i].id || ('unit-' + (i + 1));
    }
    return lastId;
  }

  function escapeHtml(s) {
    if (!s) return '';
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  // The "you are here" unit: for the learner, the unit containing their next incomplete lesson
  // (starts at unit 1 when no lessons are completed).
  function currentUnitId(units, ledger) {
    var completed = getCompletedLessonIds();
    for (var i = 0; i < (ledger.authoredInFull || []).length; i++) {
      var lid = ledger.authoredInFull[i];
      if (completed.indexOf(lid) === -1) {
        var u = findUnitForLesson(units, lid);
        if (u) return u.id;
      }
    }
    if (completed.length > 0) {
      var lastDoneId = completed[completed.length - 1];
      var lastU = findUnitForLesson(units, lastDoneId);
      if (lastU) return lastU.id;
    }
    return units.length ? units[0].id : null;
  }

  // ---------- lesson flow renderer ----------
  function renderLessonFlow(container, lessonId) {
    var curriculum = getCurriculum();
    var lesson = curriculum.lessons[lessonId];
    var flowRoot = document.createElement('div');
    flowRoot.className = 'fearn-lang-lesson-flow';

    if (!lesson) {
      flowRoot.innerHTML =
        '<div class="fearn-lang-stub-notice">' +
        '<p>This lesson (' + lessonId + ') has not been authored yet — it is a roadmap placeholder.</p>' +
        '</div>';
      container.appendChild(flowRoot);
      return;
    }

    var step = 0; // 0=warmup 1=presentation 2=guided 3=independent 4=checkpoint 5=done
    var checkpointAnswers = [];

    function renderStep() {
      if (window.FEARN && window.FEARN.audio && typeof window.FEARN.audio.stop === 'function') window.FEARN.audio.stop();
      flowRoot.innerHTML = '';
      if (step === 0) renderWarmup();
      else if (step === 1) renderPresentation();
      else if (step === 2) renderPractice(lesson.guidedPractice, 'Guided Practice', function () { step = 3; renderStep(); });
      else if (step === 3) renderPractice(lesson.independentPractice, 'Independent Practice', function () { step = 4; renderStep(); });
      else if (step === 4) renderCheckpoint();
      else renderDone();
    }

    function sectionHeader(title) {
      var h = document.createElement('h3');
      h.className = 'fearn-lang-section-title';
      h.textContent = title;
      return h;
    }

    function renderWarmup() {
      flowRoot.appendChild(sectionHeader('Warm-up: Spaced Review'));
      var due = FEARN.srs.getDue(MODULE_ID).slice(0, 8);
      var box = document.createElement('div');
      box.className = 'fearn-lang-warmup';
      if (due.length === 0) {
        box.innerHTML = '<p>No reviews due right now — nice and clear! Moving into today\'s lesson.</p>';
      } else {
        var p = document.createElement('p');
        p.textContent = due.length + ' item(s) due for review before the new material:';
        box.appendChild(p);
        due.forEach(function (item) {
          var row = document.createElement('div');
          row.className = 'fearn-lang-review-row';
          row.textContent = item.itemId;
          var again = document.createElement('button');
          again.textContent = 'Again';
          again.onclick = function () { FEARN.srs.schedule(item.itemId, 1, MODULE_ID); row.style.opacity = 0.4; };
          var good = document.createElement('button');
          good.textContent = 'Good';
          good.onclick = function () { FEARN.srs.schedule(item.itemId, 4, MODULE_ID); row.style.opacity = 0.4; };
          row.appendChild(again);
          row.appendChild(good);
          box.appendChild(row);
        });
      }
      flowRoot.appendChild(box);
      var btn = document.createElement('button');
      btn.className = 'fearn-lang-btn-primary';
      btn.textContent = 'Continue to lesson';
      btn.onclick = function () { step = 1; renderStep(); };
      flowRoot.appendChild(btn);
    }

    function renderPresentation() {
      flowRoot.appendChild(sectionHeader(lesson.objective));
      var pres = lesson.presentation || {};
      var explain = document.createElement('p');
      explain.className = 'fearn-lang-explanation';
      explain.textContent = pres.explanation || '';
      flowRoot.appendChild(explain);

      if (Array.isArray(pres.examples) && pres.examples.length) {
        var exWrap = document.createElement('div');
        exWrap.className = 'fearn-lang-examples';
        pres.examples.forEach(function (ex) {
          var row = document.createElement('div');
          row.className = 'fearn-lang-example-row';
          row.style.cssText = 'display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:10px; padding:10px 14px; background:rgba(255,255,255,0.03); border-radius:10px; border:1px solid rgba(255,255,255,0.06);';
          
          var textSpan = document.createElement('span');
          textSpan.style.flex = '1';
          var targetStr = typeof ex === 'string' ? ex : (ex.target || ex.t || '');
          var readingStr = ex.reading || ex.r || '';
          var transStr = ex.translation || ex.en || '';
          
          textSpan.textContent = [targetStr, readingStr, transStr].filter(Boolean).join('  —  ');
          row.appendChild(textSpan);
          
          if (targetStr && window.FEARN && window.FEARN.audio && window.FEARN.audio.createSpeakButton) {
            var speakBtn = window.FEARN.audio.createSpeakButton(targetStr, 'german');
            row.appendChild(speakBtn);
          }
          exWrap.appendChild(row);
        });
        flowRoot.appendChild(exWrap);
      }
      if (Array.isArray(pres.mnemonics) && pres.mnemonics.length) {
        var mnWrap = document.createElement('div');
        mnWrap.className = 'fearn-lang-mnemonics';
        mnWrap.innerHTML = '<b>Mnemonics</b>';
        pres.mnemonics.forEach(function (m) {
          var p2 = document.createElement('p');
          if (window.FEARN && window.FEARN.formatText) { p2.innerHTML = window.FEARN.formatText(m); } else { p2.textContent = m; }
          mnWrap.appendChild(p2);
        });
        flowRoot.appendChild(mnWrap);
      }
      if (Array.isArray(pres.culturalNotes) && pres.culturalNotes.length) {
        var cnWrap = document.createElement('div');
        cnWrap.className = 'fearn-lang-cultural-notes';
        cnWrap.innerHTML = '<b>Cultural notes</b>';
        pres.culturalNotes.forEach(function (c) {
          var p3 = document.createElement('p');
          if (window.FEARN && window.FEARN.formatText) { p3.innerHTML = window.FEARN.formatText(c); } else { p3.textContent = c; }
          cnWrap.appendChild(p3);
        });
        flowRoot.appendChild(cnWrap);
      }
      var btn = document.createElement('button');
      btn.className = 'fearn-lang-btn-primary';
      btn.textContent = 'Start guided practice';
      btn.onclick = function () { step = 2; renderStep(); };
      flowRoot.appendChild(btn);
    }

        function renderPractice(block, title, onDone) {
      if (window.FEARN && window.FEARN.audio) window.FEARN.audio.stop();
      flowRoot.appendChild(sectionHeader(title));
      var items = (block && (block.items || block.exercises)) || [];
      if (!items.length) {
        var none = document.createElement('p');
        none.textContent = 'No items in this section.';
        flowRoot.appendChild(none);
      }
      items.forEach(function (item, idx) {
        var q = document.createElement('div');
        q.className = 'fearn-lang-practice-item';
        var prompt = document.createElement('p');
        prompt.textContent = (idx + 1) + '. ' + (item.prompt || item.q || '');
        q.appendChild(prompt);
        if (Array.isArray(item.options)) {
          var indices = item.options.map(function (_, i) { return i; });
          for (var si = indices.length - 1; si > 0; si--) {
            var sj = Math.floor(Math.random() * (si + 1));
            var temp = indices[si];
            indices[si] = indices[sj];
            indices[sj] = temp;
          }
          indices.forEach(function (origIdx) {
            var opt = item.options[origIdx];
            var b = document.createElement('button');
            b.className = 'fearn-lang-option-btn';
            b.textContent = opt;
            b.onclick = function () {
              var correct = origIdx === item.answerIndex;
              b.classList.add(correct ? 'correct' : 'incorrect');
              if (item.explanation) {
                var expl = document.createElement('p');
                expl.className = 'fearn-lang-feedback';
                expl.textContent = item.explanation;
                q.appendChild(expl);
              }
            };
            q.appendChild(b);
          });
        }
        flowRoot.appendChild(q);
      });
      var btn = document.createElement('button');
      btn.className = 'fearn-lang-btn-primary';
      btn.textContent = 'Continue';
      btn.onclick = onDone;
      flowRoot.appendChild(btn);
    }

    function renderCheckpoint() {
      flowRoot.innerHTML = '';
      flowRoot.appendChild(sectionHeader('Checkpoint Test: ' + (lesson.objective || '')));
      var test = lesson.checkpointTest || { items: [], passThreshold: 0.8 };
      var items = test.items || [];
      if (!items.length) {
        flowRoot.innerHTML += '<p>No test items available for this lesson.</p>';
        return;
      }

      var currentQ = 0;
      checkpointAnswers = new Array(items.length).fill(null);

      function renderQuestion() {
        if (window.FEARN && window.FEARN.audio) window.FEARN.audio.stop();
        flowRoot.innerHTML = '';
        flowRoot.appendChild(sectionHeader('Checkpoint Test — ' + (lesson.objective || '')));

        var progressPct = Math.round((currentQ / items.length) * 100);
        var progressWrap = document.createElement('div');
        progressWrap.className = 'fearn-checkpoint-progress-wrap';
        progressWrap.innerHTML =
          '<div style="display:flex; justify-content:space-between; font-size:0.82rem; color:var(--text-sub); margin-bottom:6px;">' +
            '<span>Question ' + (currentQ + 1) + ' of ' + items.length + '</span>' +
            '<span>' + progressPct + '%</span>' +
          '</div>' +
          '<div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">' +
            '<div style="width:' + progressPct + '%; height:100%; background:var(--accent-1, #10b981); transition:width 0.2s ease;"></div>' +
          '</div>';
        flowRoot.appendChild(progressWrap);

        var item = items[currentQ];
        var card = document.createElement('div');
        card.className = 'fearn-card fearn-glass--strong';
        card.style.padding = '20px';
        card.style.marginTop = '14px';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.gap = '14px';

        var promptP = document.createElement('div');
        promptP.style.fontSize = '1.05rem';
        promptP.style.fontWeight = '700';
        promptP.style.color = 'var(--text-main)';
        promptP.textContent = (currentQ + 1) + '. ' + (item.prompt || item.q || '');
        card.appendChild(promptP);

        var nextBtn = document.createElement('button');
        nextBtn.className = 'fearn-lang-btn-primary';
        nextBtn.style.marginTop = '10px';
        nextBtn.textContent = (currentQ === items.length - 1) ? 'Submit Checkpoint ➔' : 'Next Question ➔';

        if (item.type === 'typed-recall') {
          var input = document.createElement('input');
          input.type = 'text';
          input.className = 'fearn-lang-input';
          input.placeholder = 'Type your answer...';
          input.style.width = '100%';
          input.style.padding = '12px 14px';
          input.style.borderRadius = '8px';
          input.style.background = 'rgba(0,0,0,0.3)';
          input.style.border = '1px solid var(--glass-border)';
          input.style.color = '#fff';
          input.style.fontSize = '1rem';
          if (checkpointAnswers[currentQ] !== null) input.value = checkpointAnswers[currentQ];
          input.oninput = function () { checkpointAnswers[currentQ] = input.value; };
          input.onkeydown = function (e) {
            if (e.key === 'Enter') {
              e.preventDefault();
              checkpointAnswers[currentQ] = input.value;
              advanceQ();
            }
          };
          card.appendChild(input);
          setTimeout(function () { input.focus(); }, 50);
        } else if (Array.isArray(item.options)) {
          var optsWrap = document.createElement('div');
          optsWrap.style.display = 'flex';
          optsWrap.style.flexDirection = 'column';
          optsWrap.style.gap = '8px';
          if (!item._shuffledIndices) {
            item._shuffledIndices = item.options.map(function (_, i) { return i; });
            for (var si = item._shuffledIndices.length - 1; si > 0; si--) {
              var sj = Math.floor(Math.random() * (si + 1));
              var temp = item._shuffledIndices[si];
              item._shuffledIndices[si] = item._shuffledIndices[sj];
              item._shuffledIndices[sj] = temp;
            }
          }
          item._shuffledIndices.forEach(function (origIdx) {
            var opt = item.options[origIdx];
            var b = document.createElement('button');
            b.className = 'fearn-lang-option-btn' + (checkpointAnswers[currentQ] === origIdx ? ' selected' : '');
            b.textContent = opt;
            b.onclick = function () {
              checkpointAnswers[currentQ] = origIdx;
              Array.prototype.forEach.call(optsWrap.querySelectorAll('.fearn-lang-option-btn'), function (bb) { bb.classList.remove('selected'); });
              b.classList.add('selected');
            };
            optsWrap.appendChild(b);
          });
          card.appendChild(optsWrap);
        }

        nextBtn.onclick = advanceQ;
        card.appendChild(nextBtn);
        flowRoot.appendChild(card);
      }

      function advanceQ() {
        if (currentQ < items.length - 1) {
          currentQ++;
          renderQuestion();
        } else {
          evaluateAndShowResults();
        }
      }

      function evaluateAndShowResults() {
        flowRoot.innerHTML = '';
        flowRoot.appendChild(sectionHeader('Checkpoint Test Results'));

        var correctCount = 0;
        var missedItems = [];

        items.forEach(function (item, idx) {
          var itemId = lesson.id + '-cp' + idx;
          var got = checkpointAnswers[idx];
          var isCorrect = false;
          var learnerAnswerText = '';
          var expectedAnswerText = '';

          if (item.type === 'typed-recall') {
            learnerAnswerText = got ? String(got).trim() : '(blank)';
            var matchRes = (FEARN && FEARN.matchAnswer) ? FEARN.matchAnswer(got, item.acceptedAnswers || [item.answer], {
              mode: item.matchMode || 'normalized',
              tolerance: item.fuzzyTolerance !== undefined ? item.fuzzyTolerance : 1
            }) : { matched: String(got).trim().toLowerCase() === String(item.acceptedAnswers ? item.acceptedAnswers[0] : item.answer).trim().toLowerCase() };
            isCorrect = matchRes.matched;
            expectedAnswerText = Array.isArray(item.acceptedAnswers) ? item.acceptedAnswers.join(' / ') : String(item.acceptedAnswers || item.answer);
          } else {
            isCorrect = (got === item.answerIndex);
            learnerAnswerText = (got !== null && item.options && item.options[got]) ? item.options[got] : '(no selection)';
            expectedAnswerText = (item.options && item.options[item.answerIndex]) ? item.options[item.answerIndex] : String(item.answerIndex);
          }

          if (isCorrect) {
            correctCount++;
          } else {
            missedItems.push({
              idx: idx + 1,
              prompt: item.prompt || item.q || '',
              userAnswer: learnerAnswerText,
              expectedAnswer: expectedAnswerText,
              explanation: item.explanation || 'Review the lesson presentation examples for guidance.'
            });
          }

          FEARN.srs.schedule(itemId, isCorrect ? 4 : 1, MODULE_ID);
        });

        var scorePct = items.length ? (correctCount / items.length) : 0;
        var reqPct = test.passThreshold || 0.8;
        var passed = scorePct >= reqPct;

        var resultCard = document.createElement('div');
        resultCard.className = 'fearn-card fearn-glass--strong';
        resultCard.style.padding = '24px';
        resultCard.style.display = 'flex';
        resultCard.style.flexDirection = 'column';
        resultCard.style.gap = '16px';

        var pctDisplay = Math.round(scorePct * 100);
        resultCard.innerHTML =
          '<div style="font-size:1.8rem;">' + (passed ? '🎉🏆' : '⚠️') + '</div>' +
          '<div style="font-size:1.3rem; font-weight:800; color:' + (passed ? '#10b981' : '#f59e0b') + ';">' +
            'Score: ' + correctCount + ' / ' + items.length + ' (' + pctDisplay + '%) ' + (passed ? '— Passed!' : '— Not passed yet') +
          '</div>' +
          '<div style="font-size:0.88rem; color:var(--text-sub);">' +
            (passed ? 'Mastery demonstrated (' + Math.round(reqPct * 100) + '% required). Progression recorded to your streak.' : 'Pass standard is ' + Math.round(reqPct * 100) + '%. Review missed items below before retrying.') +
          '</div>';

        if (missedItems.length > 0) {
          var missedWrap = document.createElement('div');
          missedWrap.style.display = 'flex';
          missedWrap.style.flexDirection = 'column';
          missedWrap.style.gap = '10px';
          missedWrap.style.marginTop = '8px';
          missedWrap.innerHTML = '<div style="font-size:0.85rem; font-weight:700; text-transform:uppercase; color:#f87171;">Missed Items Targeted Review (' + missedItems.length + '):</div>';

          missedItems.forEach(function (m) {
            var mCard = document.createElement('div');
            mCard.style.background = 'rgba(0,0,0,0.3)';
            mCard.style.borderLeft = '3px solid #f87171';
            mCard.style.borderRadius = '8px';
            mCard.style.padding = '12px 14px';
            mCard.style.fontSize = '0.85rem';
            mCard.style.display = 'flex';
            mCard.style.flexDirection = 'column';
            mCard.style.gap = '4px';

            mCard.innerHTML =
              '<div style="font-weight:700; color:#fff;">' + m.idx + '. ' + escapeHtml(m.prompt) + '</div>' +
              '<div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:6px; color:#cbd5e1;">' +
                '<span>Your answer: <b style="color:#f87171;">' + escapeHtml(m.userAnswer) + '</b></span>' +
                '<span>Expected: <b style="color:#10b981;">' + escapeHtml(m.expectedAnswer) + '</b></span>' +
              '</div>' +
              '<div style="font-size:0.8rem; color:var(--text-sub); margin-top:2px;"><b>Explanation:</b> ' + escapeHtml(m.explanation) + '</div>';
            missedWrap.appendChild(mCard);
          });
          resultCard.appendChild(missedWrap);
        }

        var actionBtn = document.createElement('button');
        actionBtn.className = 'fearn-lang-btn-primary';
        actionBtn.style.marginTop = '12px';
        actionBtn.textContent = passed ? 'Finish lesson ➔' : 'Retry Checkpoint ↺';
        actionBtn.onclick = function () {
          if (passed) {
            markLessonComplete(lesson.id);
            if (FEARN.ui && typeof FEARN.ui.celebrateCheckpoint === 'function') {
              FEARN.ui.celebrateCheckpoint({ message: 'Lesson complete: ' + (lesson.objective || lesson.id) });
            }
            step = 5;
            renderStep();
          } else {
            step = 4;
            renderStep();
          }
        };
        resultCard.appendChild(actionBtn);
        flowRoot.appendChild(resultCard);
      }

      renderQuestion();
    }

    function renderDone() {
      flowRoot.innerHTML = '<p class="fearn-lang-done">Lesson complete: ' + lesson.objective + '</p>';
    }

    renderStep();
    container.appendChild(flowRoot);
  }

  // ---------- unit lesson picker (renderJourneyPath is unit-granularity only) ----------
    function renderUnitPicker(container, unit) {
    var curriculum = getCurriculum();
    var completedLessonIds = getCompletedLessonIds();
    container.innerHTML = '';

    var uTitle = unit.title || unit.name || ('Unit ' + (unit.unit || 1));
    var uLevel = unit.level || 'A1';

    var header = document.createElement('h3');
    header.className = 'fearn-lang-unit-header';
    header.textContent = '[' + uLevel + '] ' + uTitle;
    container.appendChild(header);

    var goal = document.createElement('p');
    goal.className = 'fearn-lang-unit-goal';
    goal.textContent = unit.goal || '';
    container.appendChild(goal);

    var list = document.createElement('div');
    list.className = 'fearn-lang-lesson-list';
    
    var unitLessonIds = getLessonIdsForUnit(unit, curriculum);
    if (!unitLessonIds.length) {
      unitLessonIds = Object.keys(curriculum.lessons || {}).filter(function (lid) {
        var les = curriculum.lessons[lid];
        return les && (les.unit === unit.unit || les.unit === unit.id);
      });
    }

    unitLessonIds.forEach(function (lid, idx) {
      var authored = !!curriculum.lessons[lid];
      var done = completedLessonIds.indexOf(lid) !== -1;
      var btn = document.createElement('button');
      btn.className = 'fearn-lang-lesson-btn';
      var objTitle = authored && curriculum.lessons[lid].objective ? ': ' + curriculum.lessons[lid].objective : (authored && curriculum.lessons[lid].title ? ': ' + curriculum.lessons[lid].title : ' (not yet authored)');
      btn.textContent = (done ? '\u2713 ' : authored ? '\u25B6 ' : '\u2022 ') + 'Lesson ' + (idx + 1) + objTitle;
      btn.disabled = !authored;
      btn.onclick = function () {
        var lessonArea = container.parentElement.querySelector('.fearn-lang-lesson-area');
        if (lessonArea) {
          lessonArea.innerHTML = '';
          renderLessonFlow(lessonArea, lid);
        }
      };
      list.appendChild(btn);
    });
    container.appendChild(list);
  }

  FEARN.registerModule({
    id: MODULE_ID,
    name: 'German',
    icon: '🇩🇪',
    render: function (container) {
      container.innerHTML = '';
      var curriculum = getCurriculum();
      var ledger = getLedger();

      var pathContainer = document.createElement('div');
      pathContainer.className = 'fearn-lang-path-container';
      container.appendChild(pathContainer);

      var unitDetail = document.createElement('div');
      unitDetail.className = 'fearn-lang-unit-detail';
      container.appendChild(unitDetail);

      var lessonArea = document.createElement('div');
      lessonArea.className = 'fearn-lang-lesson-area';
      container.appendChild(lessonArea);

      var mappedUnits = curriculum.units.map(function (u, idx) {
        return { id: u.id || ('unit-' + (u.unit || (idx + 1))), label: u.title || u.name || ('Unit ' + (u.unit || (idx + 1))), level: u.level || 'A1' };
      });
      var curUnitId = currentUnitId(curriculum.units, ledger);
      var authoredUpTo = lastAuthoredUnitId(curriculum.units, curriculum.lessons);

      if (FEARN.ui && typeof FEARN.ui.renderJourneyPath === 'function') {
        FEARN.ui.renderJourneyPath(pathContainer, {
          units: mappedUnits,
          currentUnitId: curUnitId,
          authoredUpToId: authoredUpTo,
          levelLabels: LEVEL_LABELS,
        });
        // renderJourneyPath has no built-in click handling — wire our own.
        var nodes = pathContainer.querySelectorAll('[data-unit-id]');
        nodes.forEach(function (node) {
          node.style.cursor = 'pointer';
          node.addEventListener('click', function () {
            var unitId = node.getAttribute('data-unit-id');
            var unit = curriculum.units.find(function (u) { return u.id === unitId; });
            if (unit) renderUnitPicker(unitDetail, unit);
          });
        });
        // Open the "you are here" unit by default.
        var startUnit = curriculum.units.find(function (u) { return u.id === curUnitId; }) || curriculum.units[0];
        if (startUnit) renderUnitPicker(unitDetail, startUnit);
      } else {
        // Fallback roadmap list if the shared UI helper isn't loaded yet.
        var fallback = document.createElement('div');
        fallback.className = 'fearn-lang-fallback-roadmap';
        var h2 = document.createElement('h2');
        h2.textContent = '🇩🇪 German';
        fallback.appendChild(h2);
        curriculum.units.forEach(function (unit) {
          var u = document.createElement('div');
          u.className = 'fearn-lang-fallback-unit';
          var title = document.createElement('b');
          title.textContent = '[' + unit.level + '] ' + unit.title;
          u.appendChild(title);
          fallback.appendChild(u);
        });
        pathContainer.appendChild(fallback);
        if (curriculum.units.length) renderUnitPicker(unitDetail, curriculum.units[0]);
      }
    },
    getProgress: function () {
      var ledger = getLedger();
      var completedLessonIds = getCompletedLessonIds();
      var total = ledger.fullRoadmapLength || 0;
      var done = completedLessonIds.length;
      var nextLesson = null;
      for (var i = 0; i < (ledger.authoredInFull || []).length; i++) {
        var lid = ledger.authoredInFull[i];
        if (completedLessonIds.indexOf(lid) === -1) {
          var les = getCurriculum().lessons[lid];
          if (les) {
            nextLesson = { id: les.id, title: les.objective || les.id, unit: les.unit };
          }
          break;
        }
      }
      return {
        completed: done,
        total: total,
        percent: total ? Math.round((done / total) * 100) : 0,
        authoredAvailable: ledger.authoredInFull.length,
        streak: FEARN.streak.get(MODULE_ID),
        nextLesson: nextLesson,
      };
    },
  });
})(typeof window !== 'undefined' ? window : globalThis);

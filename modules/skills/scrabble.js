// FEARN Skill Module — Scrabble / Word Skills
// Registers 'skill-scrabble'. Renders the journey path from the scrabble ledger + curriculum,
// then (now that Unit 1 is authored) the lesson presentation + checkpoint test, followed by the
// anagram-recognition drill.
//
// BUGFIX (see ledger/curriculum authoring pass): this module previously never read
// CURRICULUM.lessons at all — it only showed the roadmap skeleton and the standalone anagram
// drill, so authored lesson content (objective, explanation, examples, checkpointTest) was
// invisible to the learner even once lessons were fully authored in scrabble.js. Brought in line
// with the mentalmath.js / chess.js / morse.js skill modules: lesson presentation + checkpoint
// rendering, lesson selection via the journey path, and "mark lesson complete" progression.
//
// NOTE on FEARN.ui.renderJourneyPath: see the note in modules/skills/chess.js — called
// defensively against the documented shape, with a minimal fallback path renderer.

(function (global) {
  const FEARN = global.FEARN;
  const CURRICULUM = (global.FEARN_CURRICULA && global.FEARN_CURRICULA.scrabble) || { roadmap: [], lessons: {} };
  const LEDGER = (global.FEARN_LEDGERS && global.FEARN_LEDGERS.scrabble) || {
    subject: 'scrabble', fullRoadmapLength: 0, authoredInFull: [], stubOnly: [], lastCompletedLessonId: null, nextToAuthor: null,
  };

  const MODULE_ID = 'skill-scrabble';
  const RATING_ID = 'scrabble';
  const STATE_KEY = MODULE_ID + ':state';

  function defaultLessonState() {
    return { currentLessonId: LEDGER.authoredInFull[0] || null, completedLessons: [] };
  }
  function getLessonState() { return FEARN.storage.get(STATE_KEY + ':lesson', defaultLessonState()); }
  function setLessonState(s) { FEARN.storage.set(STATE_KEY + ':lesson', s); }

    function findUnitDef(unitId) {
    if (Array.isArray(CURRICULUM.units)) {
      const found = CURRICULUM.units.find((u) => u.id === unitId || u.unit === unitId);
      if (found) {
        return {
          id: found.id,
          name: found.title || found.name,
          level: found.level,
          lessons: found.lessonIds || Object.keys(CURRICULUM.lessons || {}).filter(lid => {
            const l = CURRICULUM.lessons[lid];
            return l && (l.unit === found.id || l.unit === found.unit);
          })
        };
      }
    }
    for (const lvl of (CURRICULUM.roadmap || [])) {
      const found = (lvl.units || []).find((u) => u.id === unitId);
      if (found) return found;
    }
    return null;
  }
    function currentUnitIdFor(currentLessonId) {
    if (currentLessonId && CURRICULUM.lessons && CURRICULUM.lessons[currentLessonId]) {
      const l = CURRICULUM.lessons[currentLessonId];
      if (l.unit) {
        const uDef = findUnitDef(l.unit);
        if (uDef) return uDef.id;
      }
    }
    const flat = flattenUnits();
    return (flat[0] && flat[0].id) || null;
  }

  const TILE_VALUES = {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3,
    N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10,
  };

  // Small original anagram pool (scrambled letters -> a valid answer word), used until the
  // curriculum's own lessons are authored in full.
  const ANAGRAM_POOL = [
    { scrambled: 'TARE', answer: 'RATE', difficulty: 550 },
    { scrambled: 'SILET', answer: 'ISLET', difficulty: 650 },
    { scrambled: 'GRATENI', answer: 'INTEGRA', difficulty: 800 },
    { scrambled: 'NIARTE', answer: 'RETINA', difficulty: 750 },
    { scrambled: 'TASIRE', answer: 'SATIRE', difficulty: 800 },
  ];

  function defaultState() { return { solved: 0, missed: 0 }; }
  function getState() { return FEARN.storage.get(STATE_KEY, defaultState()); }
  function setState(s) { FEARN.storage.set(STATE_KEY, s); }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

    function renderFallbackJourneyPath(container) {
    const wrap = document.createElement('div');
    wrap.className = 'fearn-journey-fallback';
    const authoredSet = new Set(LEDGER.authoredInFull);
    const rows = [];
    flattenUnits().forEach((u) => {
      const def = findUnitDef(u.id);
      const total = (def && def.lessons) ? def.lessons.length : 0;
      const doneCount = (def && def.lessons) ? def.lessons.filter((id) => authoredSet.has(id)).length : 0;
      rows.push('<div class="fjf-unit"><span class="fearn-cefr-pill" style="font-size:0.72rem; font-weight:800; padding:2px 6px; border-radius:4px; background:rgba(56,189,248,0.12); color:#38bdf8; margin-right:6px;">' + escapeHtml(u.level) + '</span>' + escapeHtml(u.label) + ' — ' + doneCount + '/' + total + ' lessons ready</div>');
    });
    wrap.innerHTML = rows.join('');
    container.appendChild(wrap);
  }

  // Flatten CURRICULUM.roadmap (levels -> units) into the flat { id, label, level } array
  // FEARN.ui.renderJourneyPath expects. No units are fully authored yet, so authoredUpToId
  // stays null and every unit renders as a stub; currentUnitId points at the first unit so the
  // learner sees "you are here" at the start of the roadmap.
    function flattenUnits() {
    if (Array.isArray(CURRICULUM.units) && CURRICULUM.units.length) {
      return CURRICULUM.units.map(function (u, idx) {
        return { id: u.id || ('u' + (u.unit || (idx + 1))), label: u.title || u.name || ('Unit ' + (idx + 1)), level: u.level || 'Beginner' };
      });
    }
    const units = [];
    (CURRICULUM.roadmap || []).forEach((lvl) => {
      (lvl.units || []).forEach((u) => units.push({ id: u.id, label: u.name || u.title, level: lvl.level || u.level }));
    });
    return units;
  }
    function levelLabelList() {
    if (Array.isArray(CURRICULUM.units) && CURRICULUM.units.length) {
      const lvls = {};
      CURRICULUM.units.forEach(u => { lvls[u.level || 'Beginner'] = u.level || 'Beginner'; });
      return Object.keys(lvls).map(k => ({ level: k, label: k }));
    }
    return (CURRICULUM.roadmap || []).map((lvl) => ({ level: lvl.level, label: lvl.name }));
  }
  function authoredUpToUnitId() {
    const authoredSet = new Set(LEDGER.authoredInFull);
    let last = null;
    flattenUnits().forEach((u) => {
      const def = findUnitDef(u.id);
      if (def && def.lessons && def.lessons.length > 0 && def.lessons.every((id) => authoredSet.has(id))) last = u.id;
    });
    return last;
  }

  function renderJourneyPath(container, onUnitClick) {
    if (FEARN.ui && typeof FEARN.ui.renderJourneyPath === 'function') {
      const units = flattenUnits();
      FEARN.ui.renderJourneyPath(container, {
        units,
        currentUnitId: currentUnitIdFor(getLessonState().currentLessonId),
        authoredUpToId: authoredUpToUnitId(),
        levelLabels: levelLabelList(),
      });
      if (typeof onUnitClick === 'function') {
        container.addEventListener('click', (e) => {
          const node = e.target.closest('[data-unit-id]');
          if (!node) return;
          onUnitClick(node.getAttribute('data-unit-id'));
        });
      }
    } else {
      renderFallbackJourneyPath(container);
    }
  }

  function renderLessonPresentation(container, lesson) {
    const box = document.createElement('div');
    box.className = 'fearn-lesson-presentation';
    const uDef = findUnitDef(lesson.unit);
    const uName = uDef ? (uDef.name || uDef.title || ('Unit ' + (uDef.unit || '1'))) : String(lesson.unit || '').replace(/^[a-z]+-u/i, 'Unit ');
    const formattedLevel = String(lesson.level || 'Beginner').replace(/^./, (c) => c.toUpperCase());

    box.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px; flex-wrap:wrap;">
        <span style="font-size:0.75rem; font-weight:800; padding:3px 8px; border-radius:6px; background:rgba(56,189,248,0.15); color:#38bdf8; border:1px solid rgba(56,189,248,0.3); text-transform:uppercase; letter-spacing:0.05em;">${escapeHtml(formattedLevel)}</span>
        <h3 style="margin:0; font-size:1.15rem; font-weight:700; color:#f8fafc;">${escapeHtml(uName)}</h3>
      </div>
      <p class="fearn-objective"><strong>Goal:</strong> ${escapeHtml(lesson.objective)}</p>
      <p>${window.FEARN && window.FEARN.formatText ? window.FEARN.formatText(lesson.presentation.explanation) : escapeHtml(lesson.presentation.explanation)}</p>
      <div class="fearn-examples">
        ${lesson.presentation.examples
          .map(
            (ex) => `
          <div class="fearn-example" style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
            <div style="flex:1;">
              <div class="fearn-example-problem"><code>${escapeHtml(ex.problem || '')}${ex.answer !== undefined ? ' &rarr; ' + escapeHtml(String(ex.answer)) : ''}</code></div>
              <div class="fearn-example-desc">${escapeHtml(ex.description || '')}</div>
            </div>
            ${ex.problem || ex.answer ? `<button type="button" class="fearn-speak-btn" onclick="FEARN.audio && FEARN.audio.speak('${escapeHtml(String(ex.answer || ex.problem)).replace(/'/g, "\\'")}', 'english')" title="Listen to pronunciation" style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); border-radius:6px; padding:3px 8px; cursor:pointer; font-size:0.95rem; color:#fff;">🔊</button>` : ''}
          </div>`
          )
          .join('')}
      </div>
    `;
    container.appendChild(box);
  }

  function renderLessonCheckpoint(container, lesson, onPass) {
    const box = document.createElement('div');
    box.className = 'fearn-checkpoint';
    box.innerHTML = `<h4>Checkpoint</h4>`;
    const list = document.createElement('div');
    const items = (lesson.checkpointTest && lesson.checkpointTest.items) ? lesson.checkpointTest.items : [];
    let correctCount = 0;
    const answered = new Set();

    items.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = 'fearn-checkpoint-item';
      row.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
          <p style="margin:0; flex:1;">${escapeHtml(item.prompt)}</p>
          <button type="button" class="fearn-speak-btn" onclick="FEARN.audio && FEARN.audio.speak('${escapeHtml(item.prompt).replace(/'/g, "\\'")}', 'english')" title="Listen" style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); border-radius:6px; padding:3px 8px; cursor:pointer; font-size:0.95rem; color:#fff;">🔊</button>
        </div>
        ${item.options ? `<ul>${item.options.map((o) => `<li>${escapeHtml(o)}</li>`).join('')}</ul>` : ''}
      `;
      const input = document.createElement('input');
      input.placeholder = 'Your answer';
      const submit = document.createElement('button');
      submit.textContent = 'Check';
      const result = document.createElement('span');
      submit.addEventListener('click', () => {
        if (answered.has(idx)) return;
        const given = input.value.trim();
        const success = typeof item.answer === 'number'
          ? Number(given) === item.answer
          : given.toLowerCase() === String(item.answer).trim().toLowerCase();
        answered.add(idx);
        if (success) correctCount++;
        result.textContent = success ? ' Correct!' : ` Answer: ${item.answer}`;
        result.style.color = success ? '#34d399' : '#f87171';
        FEARN.srs.schedule(item.id, success ? 4 : 1, MODULE_ID);
        if (typeof item.difficulty === 'number') FEARN.rating.update(RATING_ID, success, item.difficulty);
        FEARN.streak.log(MODULE_ID);

        if (answered.size === items.length) {
          const pass = (correctCount / items.length) >= 0.8;
          if (typeof onPass === 'function') onPass(pass, correctCount, items.length);
        }
      });
      row.appendChild(input);
      row.appendChild(submit);
      row.appendChild(result);
      list.appendChild(row);
    });
    box.appendChild(list);
    container.appendChild(box);
  }

  function tileValueScore(word) {
    return word
      .toUpperCase()
      .split('')
      .reduce((sum, ch) => sum + (TILE_VALUES[ch] || 0), 0);
  }

  function pickAnagram() {
    return ANAGRAM_POOL[Math.floor(Math.random() * ANAGRAM_POOL.length)];
  }

  function renderDrill(container) {
    const box = document.createElement('div');
    box.className = 'fearn-scrabble-drill';
    const rating = FEARN.rating.get(RATING_ID);
    const state = getState();
    const puzzle = pickAnagram();
    box.innerHTML = `
      <h4>Anagram & Tile-Value Drill</h4>
      <p class="fearn-rating">Current rating: ${rating} &middot; Solved: ${state.solved} &middot; Missed: ${state.missed}</p>
      <p class="fearn-problem">Unscramble: <strong>${escapeHtml(puzzle.scrambled)}</strong></p>
    `;
    const input = document.createElement('input');
    input.placeholder = 'Your answer';
    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    const result = document.createElement('p');
    submit.addEventListener('click', () => {
      const guess = input.value.trim().toUpperCase();
      const success = guess === puzzle.answer;
      const newRating = FEARN.rating.update(RATING_ID, success, puzzle.difficulty);
      const s = getState();
      if (success) s.solved += 1; else s.missed += 1;
      setState(s);
      FEARN.streak.log(MODULE_ID);
      FEARN.journey.log();
      const score = tileValueScore(puzzle.answer);
      result.textContent = success
        ? `Correct! "${puzzle.answer}" is worth ${score} points in raw tile value. New rating: ${newRating}`
        : `Not quite — answer was ${puzzle.answer} (${score} tile points). New rating: ${newRating}`;
    });
    box.appendChild(input);
    box.appendChild(submit);
    box.appendChild(result);
    container.appendChild(box);
  }

  function rerender(container) {
    container.innerHTML = '';
    render(container);
  }

  function render(container) {
    const pathContainer = document.createElement('div');
    pathContainer.className = 'fearn-journey-path-slot';
    container.appendChild(pathContainer);
    renderJourneyPath(pathContainer, (unitId) => {
      const def = findUnitDef(unitId);
      const firstAuthoredLessonId = def && def.lessons.find((id) => LEDGER.authoredInFull.includes(id));
      if (firstAuthoredLessonId) {
        const ls = getLessonState();
        ls.currentLessonId = firstAuthoredLessonId;
        setLessonState(ls);
        rerender(container);
      }
    });

    const lessonState = getLessonState();
    const lesson = lessonState.currentLessonId ? CURRICULUM.lessons[lessonState.currentLessonId] : null;

    const practiceWrap = document.createElement('div');
    practiceWrap.className = 'fearn-practice';

    if (lesson && lesson.presentation) {
      renderLessonPresentation(practiceWrap, lesson);
      renderLessonCheckpoint(practiceWrap, lesson);
      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Mark lesson complete';
      completeBtn.addEventListener('click', () => {
        const ls = getLessonState();
        if (!ls.completedLessons.includes(lesson.id)) ls.completedLessons.push(lesson.id);
        const idx = LEDGER.authoredInFull.indexOf(lesson.id);
        const next = LEDGER.authoredInFull[idx + 1];
        if (next) ls.currentLessonId = next;
        setLessonState(ls);
        FEARN.journey.log();
        rerender(container);
      });
      practiceWrap.appendChild(completeBtn);
    } else {
      practiceWrap.innerHTML =
        '<p>The full beginner-to-competitive roadmap is mapped out above. Pick a lesson from the journey path once ' +
        'more units are authored, or use the anagram and tile-value drill below.</p>';
    }

    renderDrill(practiceWrap);
    container.appendChild(practiceWrap);
  }

  function getProgress() {
    const state = getState ? getState() : (getLessonState ? getLessonState() : {});
    const completedList = state.completedLessons || [];
    const total = LEDGER.fullRoadmapLength || 1;
    const completed = completedList.length;
    let nextLesson = null;
    for (let i = 0; i < (LEDGER.authoredInFull || []).length; i++) {
      const lid = LEDGER.authoredInFull[i];
      if (!completedList.includes(lid)) {
        const les = CURRICULUM.lessons[lid];
        if (les) {
          nextLesson = { id: les.id, title: les.objective || les.id, unit: les.unit };
        }
        break;
      }
    }
    return {
      completed: completed,
      completedLessons: completed,
      total: total,
      totalLessons: total,
      authoredLessons: LEDGER.authoredInFull.length,
      percent: Math.round((completed / total) * 100),
      rating: FEARN.rating.get(RATING_ID),
      solved: state.solved,
      missed: state.missed,
      streak: FEARN.streak.get(MODULE_ID).current,
      nextLesson,
    };
  }

  FEARN.registerModule({
    id: MODULE_ID,
    name: 'Scrabble & Word Skills',
    icon: '🔤',
    render,
    getProgress,
  });
})(typeof window !== 'undefined' ? window : globalThis);

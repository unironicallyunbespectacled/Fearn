// FEARN Skill Module — Morse Code
// Registers 'skill-morse'. Renders the journey path from the morse ledger + curriculum, then a
// practice UI: audio-free pattern decode/encode drills (dit/dah text patterns), an adaptive
// character drill via FEARN.rating, and checkpoint tests scheduled into FEARN.srs.
//
// NOTE on FEARN.ui.renderJourneyPath: see the same note in modules/skills/chess.js — this module
// calls it defensively against the documented shape and falls back to a minimal built-in path
// renderer if the shared ui-components.js helper isn't present yet.

(function (global) {
  const FEARN = global.FEARN;
  const CURRICULUM = (global.FEARN_CURRICULA && global.FEARN_CURRICULA.morse) || { roadmap: [], lessons: {} };
  const LEDGER = (global.FEARN_LEDGERS && global.FEARN_LEDGERS.morse) || {
    subject: 'morse', fullRoadmapLength: 0, authoredInFull: [], stubOnly: [], lastCompletedLessonId: null, nextToAuthor: null,
  };

  const MODULE_ID = 'skill-morse';
  const RATING_ID = 'morse';
  const STATE_KEY = MODULE_ID + ':state';

  let _morseAudioCtx = null;
  function getMorseAudioCtx() {
    if (!_morseAudioCtx) {
      const Ctor = global.AudioContext || global.webkitAudioContext;
      if (Ctor) _morseAudioCtx = new Ctor();
    }
    if (_morseAudioCtx && _morseAudioCtx.state === 'suspended') {
      _morseAudioCtx.resume();
    }
    return _morseAudioCtx;
  }

  function playMorsePattern(pattern, wpm) {
    try {
      const ctx = getMorseAudioCtx();
      if (!ctx) return;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const speed = wpm || 20;
      const dotDuration = 1.2 / speed;
      const dashDuration = dotDuration * 3;
      const elementSpace = dotDuration;
      const charSpace = dotDuration * 3;
      const wordSpace = dotDuration * 7;

      let time = ctx.currentTime + 0.04;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, time);
      gain.gain.setValueAtTime(0, time);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);

      for (let i = 0; i < pattern.length; i++) {
        const ch = pattern[i];
        if (ch === '.' || ch === '•') {
          gain.gain.setValueAtTime(0.18, time);
          time += dotDuration;
          gain.gain.setValueAtTime(0, time);
          time += elementSpace;
        } else if (ch === '-' || ch === '—' || ch === '_') {
          gain.gain.setValueAtTime(0.18, time);
          time += dashDuration;
          gain.gain.setValueAtTime(0, time);
          time += elementSpace;
        } else if (ch === ' ') {
          time += charSpace;
        } else if (ch === '/') {
          time += wordSpace;
        }
      }
      osc.stop(time + 0.1);
    } catch (e) {
      console.warn('Morse audio play error:', e);
    }
  }
  global.FEARN_PLAY_MORSE = playMorsePattern;

  function defaultState() {
    return {
      currentLessonId: LEDGER.authoredInFull[0] || null,
      completedLessons: [],
      charsSolved: 0,
      charsMissed: 0,
    };
  }
  function getState() { return FEARN.storage.get(STATE_KEY, defaultState()); }
  function setState(s) { FEARN.storage.set(STATE_KEY, s); }

  function allAuthoredLessonsInOrder() {
    return LEDGER.authoredInFull.map((id) => CURRICULUM.lessons[id]).filter(Boolean);
  }

  function checkpointPool() {
    const pool = [];
    allAuthoredLessonsInOrder().forEach((lesson) => {
      (lesson.checkpointTest.items || []).forEach((item) => pool.push({ ...item, lessonId: lesson.id }));
    });
    return pool;
  }

  function pickAdaptiveItem() {
    const pool = checkpointPool().filter((p) => typeof p.difficulty === 'number' && p.answer);
    if (pool.length === 0) return null;
    const rating = FEARN.rating.get(RATING_ID);
    let best = pool[0];
    let bestDist = Infinity;
    pool.forEach((p) => {
      const dist = Math.abs(p.difficulty - rating);
      if (dist < bestDist) { bestDist = dist; best = p; }
    });
    return best;
  }

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
  // FEARN.ui.renderJourneyPath expects, and derive the "you are here" / "authored up to" unit
  // ids it needs from the ledger + runtime state.
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
  function authoredUpToUnitId() {
    const authoredSet = new Set(LEDGER.authoredInFull);
    let last = null;
    flattenUnits().forEach((u) => {
      const def = findUnitDef(u.id);
      if (def && def.lessons.length > 0 && def.lessons.every((id) => authoredSet.has(id))) last = u.id;
    });
    return last;
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

  function renderJourneyPath(container, onUnitClick) {
    if (FEARN.ui && typeof FEARN.ui.renderJourneyPath === 'function') {
      FEARN.ui.renderJourneyPath(container, {
        units: flattenUnits(),
        currentUnitId: currentUnitIdFor(getState().currentLessonId),
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
          <div class="fearn-example" style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:8px;">
            <div style="display:flex; align-items:center; gap:12px;">
              <div class="fearn-example-pattern"><code>${escapeHtml(ex.pattern || '')}</code></div>
              <div class="fearn-example-char"><strong>${escapeHtml(ex.character || '')}</strong></div>
              <div class="fearn-example-desc">${escapeHtml(ex.description || '')}</div>
            </div>
            ${ex.pattern ? `<button type="button" class="fearn-btn fearn-btn--ghost" onclick="window.FEARN_PLAY_MORSE && window.FEARN_PLAY_MORSE('${escapeHtml(ex.pattern)}')" title="Play CW Audio Tone" style="padding:4px 10px; font-size:0.8rem; cursor:pointer;">🔊 Tone</button>` : ''}
          </div>`
          )
          .join('')}
      </div>
    `;
    container.appendChild(box);
  }

  function renderCheckpointTest(container, lesson) {
    const box = document.createElement('div');
    box.className = 'fearn-checkpoint';
    box.innerHTML = `<h4>Checkpoint</h4>`;
    const list = document.createElement('div');
    lesson.checkpointTest.items.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'fearn-checkpoint-item';
      row.innerHTML = `<p>${(global.FEARN && global.FEARN.formatText) ? global.FEARN.formatText(item.prompt) : escapeHtml(item.prompt)}</p>`;
      const input = document.createElement('input');
      input.placeholder = 'Your answer';
      const submit = document.createElement('button');
      submit.textContent = 'Check';
      const result = document.createElement('span');
      submit.addEventListener('click', () => {
        const success = input.value.trim().toUpperCase() === String(item.answer).trim().toUpperCase();
        result.textContent = success ? ' Correct!' : ` Answer: ${item.answer}`;
        FEARN.srs.schedule(item.id, success ? 4 : 1, MODULE_ID);
        if (typeof item.difficulty === 'number') FEARN.rating.update(RATING_ID, success, item.difficulty);
        FEARN.streak.log(MODULE_ID);
        const s = getState();
        if (success) s.charsSolved += 1; else s.charsMissed += 1;
        setState(s);
      });
      row.appendChild(input);
      row.appendChild(submit);
      row.appendChild(result);
      list.appendChild(row);
    });
    box.appendChild(list);
    container.appendChild(box);
  }

  function renderAdaptiveDrill(container) {
    const box = document.createElement('div');
    box.className = 'fearn-adaptive-drill';
    const rating = FEARN.rating.get(RATING_ID);
    const item = pickAdaptiveItem();
    box.innerHTML = `<h4>Adaptive Character Drill</h4><p class="fearn-rating">Current rating: ${rating}</p>`;
    if (!item) {
      box.innerHTML += '<p>No drill items authored yet — complete a lesson above to unlock this drill.</p>';
      container.appendChild(box);
      return;
    }
    const drillBox = document.createElement('div');
    drillBox.innerHTML = `<p>${(global.FEARN && global.FEARN.formatText) ? global.FEARN.formatText(item.prompt) : escapeHtml(item.prompt)}</p><p class="fearn-item-difficulty">Difficulty: ${item.difficulty}</p>`;
    const input = document.createElement('input');
    input.placeholder = 'Type the decoded answer';
    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    const result = document.createElement('p');
    submit.addEventListener('click', () => {
      const success = input.value.trim().toUpperCase() === String(item.answer).trim().toUpperCase();
      const newRating = FEARN.rating.update(RATING_ID, success, item.difficulty);
      const s = getState();
      if (success) s.charsSolved += 1; else s.charsMissed += 1;
      setState(s);
      FEARN.streak.log(MODULE_ID);
      result.textContent = success
        ? `Correct! New rating: ${newRating}`
        : `Not quite — answer was ${item.answer}. New rating: ${newRating}`;
      FEARN.srs.schedule(item.id, success ? 4 : 1, MODULE_ID);
    });
    drillBox.appendChild(input);
    drillBox.appendChild(submit);
    drillBox.appendChild(result);
    box.appendChild(drillBox);
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
        const s = getState();
        s.currentLessonId = firstAuthoredLessonId;
        setState(s);
        rerender(container);
      }
    });

    const state = getState();
    const lesson = state.currentLessonId ? CURRICULUM.lessons[state.currentLessonId] : null;

    const practiceWrap = document.createElement('div');
    practiceWrap.className = 'fearn-practice';

    if (lesson && lesson.presentation) {
      renderLessonPresentation(practiceWrap, lesson);
      renderCheckpointTest(practiceWrap, lesson);
      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Mark lesson complete';
      completeBtn.addEventListener('click', () => {
        const s = getState();
        if (!s.completedLessons.includes(lesson.id)) s.completedLessons.push(lesson.id);
        const idx = LEDGER.authoredInFull.indexOf(lesson.id);
        const next = LEDGER.authoredInFull[idx + 1];
        if (next) s.currentLessonId = next;
        setState(s);
        FEARN.journey.log();
        rerender(container);
      });
      practiceWrap.appendChild(completeBtn);
    } else {
      practiceWrap.innerHTML = '<p>Pick a lesson from the journey path above to begin (or start with Unit 1: Foundation Group).</p>';
    }

    renderAdaptiveDrill(practiceWrap);
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
      charsSolved: state.charsSolved,
      charsMissed: state.charsMissed,
      streak: FEARN.streak.get(MODULE_ID).current,
      nextLesson,
    };
  }

  FEARN.registerModule({
    id: MODULE_ID,
    name: 'Morse Code',
    icon: '📡',
    render,
    getProgress,
  });
})(typeof window !== 'undefined' ? window : globalThis);

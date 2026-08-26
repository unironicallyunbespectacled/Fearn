// FEARN Skill Module — Typing Speed
// Registers 'skill-typing'. Renders the journey path from the typing ledger + curriculum, then
// (now that Unit 1 is authored) the lesson presentation + checkpoint test, followed by the
// adaptive WPM/accuracy speed drill whose target difficulty adapts via
// FEARN.rating.get/.update('typing', ...).
//
// BUGFIX (see ledger/curriculum authoring pass): this module previously never read
// CURRICULUM.lessons at all — it only showed the roadmap skeleton and the standalone speed
// drill, so authored lesson content (objective, explanation, examples, checkpointTest) was
// invisible to the learner even once lessons were fully authored in typing.js. Brought in line
// with the mentalmath.js / chess.js / morse.js skill modules: lesson presentation + checkpoint
// rendering, lesson selection via the journey path, and "mark lesson complete" progression.
//
// NOTE on FEARN.ui.renderJourneyPath: see the note in modules/skills/chess.js — called
// defensively against the documented shape, with a minimal fallback path renderer.

(function (global) {
  const FEARN = global.FEARN;
  const CURRICULUM = (global.FEARN_CURRICULA && global.FEARN_CURRICULA.typing) || { roadmap: [], lessons: {} };
  const LEDGER = (global.FEARN_LEDGERS && global.FEARN_LEDGERS.typing) || {
    subject: 'typing', fullRoadmapLength: 0, authoredInFull: [], stubOnly: [], lastCompletedLessonId: null, nextToAuthor: null,
  };

  const MODULE_ID = 'skill-typing';
  const RATING_ID = 'typing';
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

  // A small original bank of practice passages, grouped roughly by row/difficulty, used until
  // the curriculum's own lessons are authored in full. Kept separate from the curriculum data
  // so it never collides with schema-validated lesson content.
  const DRILL_TEXTS = [
    { text: 'ask a fall lad; add a jak flask', targetWpm: 15 },
    { text: 'the quick fox jumps over lazy dogs', targetWpm: 30 },
    { text: 'pack my box with five dozen liquor jugs', targetWpm: 45 },
    { text: 'bright vixens jump; dozy fowl quack', targetWpm: 60 },
    { text: 'sixty zippy quokkas juggle fine, waxed jars', targetWpm: 80 },
  ];

  function defaultState() {
    return { bestWpm: 0, sessionsCompleted: 0, lastAccuracy: null };
  }
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
      rows.push('<div class="fjf-unit">[' + escapeHtml(u.level) + '] ' + escapeHtml(u.label) + ' — ' + doneCount + '/' + total + ' lessons ready</div>');
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
    box.innerHTML = `
      <h3>${escapeHtml(lesson.unit)} &middot; ${escapeHtml(lesson.level)}</h3>
      <p class="fearn-objective"><strong>Goal:</strong> ${escapeHtml(lesson.objective)}</p>
      <p>${escapeHtml(lesson.presentation.explanation)}</p>
      <div class="fearn-examples">
        ${lesson.presentation.examples
          .map(
            (ex) => `
          <div class="fearn-example">
            <div class="fearn-example-problem"><code>${escapeHtml(ex.passage || '')}</code></div>
            <div class="fearn-example-desc">${escapeHtml(ex.focus || '')}</div>
          </div>`
          )
          .join('')}
      </div>
      ${
        lesson.presentation.mnemonics && lesson.presentation.mnemonics.length
          ? `<ul class="fearn-mnemonics">${lesson.presentation.mnemonics.map((m) => `<li>${escapeHtml(m)}</li>`).join('')}</ul>`
          : ''
      }
    `;
    container.appendChild(box);
  }

  function renderLessonCheckpoint(container, lesson) {
    const box = document.createElement('div');
    box.className = 'fearn-checkpoint';
    box.innerHTML = `<h4>Checkpoint</h4>`;
    const list = document.createElement('div');
    lesson.checkpointTest.items.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'fearn-checkpoint-item';
      row.innerHTML = `
        <p>${escapeHtml(item.prompt)}</p>
        ${item.options ? `<ul>${item.options.map((o) => `<li>${escapeHtml(o)}</li>`).join('')}</ul>` : ''}
      `;
      const input = document.createElement('input');
      input.placeholder = 'Your answer';
      const submit = document.createElement('button');
      submit.textContent = 'Check';
      const result = document.createElement('span');
      submit.addEventListener('click', () => {
        const given = input.value.trim();
        const success = typeof item.answer === 'number'
          ? Number(given) === item.answer
          : given.toLowerCase() === String(item.answer).trim().toLowerCase();
        result.textContent = success ? ' Correct!' : ` Answer: ${item.answer}`;
        FEARN.srs.schedule(item.id, success ? 4 : 1, MODULE_ID);
        if (typeof item.difficulty === 'number') FEARN.rating.update(RATING_ID, success, item.difficulty);
        FEARN.streak.log(MODULE_ID);
      });
      row.appendChild(input);
      row.appendChild(submit);
      row.appendChild(result);
      list.appendChild(row);
    });
    box.appendChild(list);
    container.appendChild(box);
  }

  function pickAdaptiveDrill() {
    const rating = FEARN.rating.get(RATING_ID);
    // Map a rating (starts at 800) loosely onto a target WPM band, then pick the closest drill.
    const approxTargetWpm = Math.max(10, Math.round((rating - 700) / 6));
    let best = DRILL_TEXTS[0];
    let bestDist = Infinity;
    DRILL_TEXTS.forEach((d) => {
      const dist = Math.abs(d.targetWpm - approxTargetWpm);
      if (dist < bestDist) { bestDist = dist; best = d; }
    });
    return best;
  }

  function renderSpeedDrill(container) {
    const box = document.createElement('div');
    box.className = 'fearn-speed-drill';
    const rating = FEARN.rating.get(RATING_ID);
    const drill = pickAdaptiveDrill();
    const state = getState();
    box.innerHTML = `
      <h4>Adaptive Speed Drill</h4>
      <p class="fearn-rating">Current rating: ${rating} &middot; Best WPM: ${state.bestWpm}</p>
      <p class="fearn-drill-target">Target passage (~${drill.targetWpm} WPM band):</p>
      <p class="fearn-drill-text"><code>${escapeHtml(drill.text)}</code></p>
    `;
    const textarea = document.createElement('textarea');
    textarea.rows = 3;
    textarea.placeholder = 'Type the passage above here...';
    const startBtn = document.createElement('button');
    startBtn.textContent = 'Start timer';
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.disabled = true;
    const result = document.createElement('p');
    let startTime = null;
    startBtn.addEventListener('click', () => {
      startTime = Date.now();
      submitBtn.disabled = false;
      startBtn.disabled = true;
      textarea.value = '';
      textarea.focus();
    });
    submitBtn.addEventListener('click', () => {
      if (!startTime) return;
      const elapsedMinutes = Math.max((Date.now() - startTime) / 60000, 0.01);
      const typed = textarea.value;
      const words = drill.text.trim().split(/\s+/);
      const typedWords = typed.trim().split(/\s+/);
      let correctWords = 0;
      typedWords.forEach((w, i) => { if (w === words[i]) correctWords += 1; });
      const accuracy = words.length ? Math.round((correctWords / words.length) * 100) : 0;
      const wpm = Math.round(typedWords.length / elapsedMinutes);
      const success = accuracy >= 90 && wpm >= drill.targetWpm * 0.8;
      const newRating = FEARN.rating.update(RATING_ID, success, 700 + drill.targetWpm * 6);
      const s = getState();
      s.bestWpm = Math.max(s.bestWpm, wpm);
      s.sessionsCompleted += 1;
      s.lastAccuracy = accuracy;
      setState(s);
      FEARN.streak.log(MODULE_ID);
      FEARN.journey.log();
      result.textContent = `WPM: ${wpm} · Accuracy: ${accuracy}% · New rating: ${newRating}`;
      startBtn.disabled = false;
      submitBtn.disabled = true;
      startTime = null;
    });
    box.appendChild(textarea);
    box.appendChild(startBtn);
    box.appendChild(submitBtn);
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
        '<p>The full home-row-to-elite-WPM roadmap is mapped out above. Pick a lesson from the journey path once ' +
        'more units are authored, or use the adaptive speed drill below, which scales difficulty with your rating.</p>';
    }

    renderSpeedDrill(practiceWrap);
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
      bestWpm: state.bestWpm,
      lastAccuracy: state.lastAccuracy,
      streak: FEARN.streak.get(MODULE_ID).current,
      nextLesson,
    };
  }

  FEARN.registerModule({
    id: MODULE_ID,
    name: 'Typing Speed',
    icon: '⌨️',
    render,
    getProgress,
  });
})(typeof window !== 'undefined' ? window : globalThis);

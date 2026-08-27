// FEARN Skill Module — Mental Math
// Registers 'skill-mentalmath'. Renders the journey path from the mentalmath ledger + curriculum,
// then (once lessons are authored) the lesson presentation + checkpoint test, followed by an
// adaptive arithmetic speed drill driven by FEARN.rating.get/.update('mentalmath', ...).
//
// BUGFIX (see ledger/curriculum authoring pass): this module previously never read
// CURRICULUM.lessons at all — it only showed the roadmap skeleton and a generic adaptive drill,
// so authored lesson content (objective, explanation, examples, checkpointTest) was invisible to
// the learner even after lessons were fully authored in mentalmath.js. Brought in line with the
// chess.js / morse.js skill modules: lesson presentation + checkpoint rendering, lesson
// selection via the journey path, and "mark lesson complete" progression.
//
// NOTE on FEARN.ui.renderJourneyPath: see the note in modules/skills/chess.js — called
// defensively against the documented shape, with a minimal fallback path renderer.

(function (global) {
  const FEARN = global.FEARN;
  const CURRICULUM = (global.FEARN_CURRICULA && global.FEARN_CURRICULA.mentalmath) || { roadmap: [], lessons: {} };
  const LEDGER = (global.FEARN_LEDGERS && global.FEARN_LEDGERS.mentalmath) || {
    subject: 'mentalmath', fullRoadmapLength: 0, authoredInFull: [], stubOnly: [], lastCompletedLessonId: null, nextToAuthor: null,
  };

  const MODULE_ID = 'skill-mentalmath';
  const RATING_ID = 'mentalmath';
  const STATE_KEY = MODULE_ID + ':state';

  function defaultState() {
    return { solved: 0, missed: 0, currentLessonId: LEDGER.authoredInFull[0] || null, completedLessons: [] };
  }
  function getState() { return FEARN.storage.get(STATE_KEY, defaultState()); }
  function setState(s) { FEARN.storage.set(STATE_KEY, s); }

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

  function escapeHtml(s) {
    return String(s || "").replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function formatRich(s) {
    return (global.FEARN && global.FEARN.formatText) ? global.FEARN.formatText(s) : escapeHtml(s);
  }[c]));
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
    box.innerHTML = `
      <h3>${escapeHtml(lesson.unit)} · ${escapeHtml(lesson.level)}</h3>
      <p class="fearn-objective"><strong>Goal:</strong> ${formatRich(lesson.objective)}</p>
      <p>${formatRich(lesson.presentation.explanation)}</p>
      <div class="fearn-examples">
        ${lesson.presentation.examples
          .map(
            (ex) => `
          <div class="fearn-example">
            <div class="fearn-example-problem"><code>${escapeHtml(ex.problem || '')} = ${escapeHtml(String(ex.answer !== undefined ? ex.answer : ''))}</code></div>
            <div class="fearn-example-desc">${escapeHtml(ex.description || '')}</div>
          </div>`
          )
          .join('')}
      </div>
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
        <p>${formatRich(item.prompt)}</p>
        ${item.options ? `<ul>${item.options.map((o) => `<li>${formatRich(o)}</li>`).join('')}</ul>` : ''}
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
        const s = getState();
        if (success) s.solved += 1; else s.missed += 1;
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

  // Difficulty-scaled problem generator: at low rating, single-digit addition; scaling up
  // through two-digit arithmetic and simple multiplication as rating climbs.
  function generateProblem(rating) {
    function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
    let a, b, op, answer, difficulty;
    if (rating < 750) {
      a = randInt(1, 9); b = randInt(1, 9); op = '+'; answer = a + b; difficulty = 600;
    } else if (rating < 900) {
      a = randInt(10, 50); b = randInt(10, 50); op = Math.random() < 0.5 ? '+' : '-';
      answer = op === '+' ? a + b : a - b; difficulty = 750;
    } else if (rating < 1050) {
      a = randInt(2, 12); b = randInt(2, 12); op = '×'; answer = a * b; difficulty = 900;
    } else {
      a = randInt(11, 30); b = randInt(11, 30); op = '×'; answer = a * b; difficulty = 1050;
    }
    return { prompt: `${a} ${op} ${b}`, answer, difficulty };
  }

  function renderDrill(container) {
    const box = document.createElement('div');
    box.className = 'fearn-math-drill';
    const rating = FEARN.rating.get(RATING_ID);
    const state = getState();
    const problem = generateProblem(rating);
    box.innerHTML = `
      <h4>Adaptive Arithmetic Drill</h4>
      <p class="fearn-rating">Current rating: ${rating} &middot; Solved: ${state.solved} &middot; Missed: ${state.missed}</p>
      <p class="fearn-problem">${escapeHtml(problem.prompt)} = ?</p>
    `;
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Your answer';
    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    const result = document.createElement('p');
    submit.addEventListener('click', () => {
      const success = Number(input.value) === problem.answer;
      const newRating = FEARN.rating.update(RATING_ID, success, problem.difficulty);
      const s = getState();
      if (success) s.solved += 1; else s.missed += 1;
      setState(s);
      FEARN.streak.log(MODULE_ID);
      FEARN.journey.log();
      result.textContent = success
        ? `Correct! New rating: ${newRating}`
        : `Not quite — answer was ${problem.answer}. New rating: ${newRating}`;
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
      renderLessonCheckpoint(practiceWrap, lesson);
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
      practiceWrap.innerHTML =
        '<p>The full arithmetic-to-mastery roadmap is mapped out above. Pick a lesson from the journey path once ' +
        'more units are authored, or use the adaptive arithmetic drill below, which scales difficulty with your rating.</p>';
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
    name: 'Mental Math',
    icon: '🧮',
    render,
    getProgress,
  });
})(typeof window !== 'undefined' ? window : globalThis);

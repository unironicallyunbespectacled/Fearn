// FEARN University Elite Module — B111: Corporate Finance & Financial Modeling
// Registers 'skill-b111'. Renders the syllabus from b111 curriculum,
// discounted cash flow (DCF) valuation engines, Black-Scholes PDE option pricing,
// WACC corporate capital structure, lesson presentations, and rigorous checkpoint examinations.

(function (global) {
  const FEARN = global.FEARN;
  if (!FEARN) return;

  const SUBJECT = 'b111';
  const MODULE_ID = 'skill-b111';
  const STATE_KEY = MODULE_ID + ':state';

  function getCurriculum() {
    const c = (global.FEARN_CURRICULA && global.FEARN_CURRICULA[SUBJECT]) || { units: [], lessons: {} };
    if (!c.roadmap && c.units) c.roadmap = c.units;
    if (!c.units && c.roadmap) c.units = c.roadmap;
    return c;
  }
  function getLedger() {
    return (global.FEARN_LEDGERS && global.FEARN_LEDGERS[SUBJECT]) || {
      subject: SUBJECT, fullRoadmapLength: 25, authoredInFull: [], stubOnly: [], lastCompletedLessonId: null, nextToAuthor: null,
    };
  }

  function defaultLessonState() {
    const ledger = getLedger();
    return { currentLessonId: ledger.authoredInFull[0] || 'b111-u1-l1', completedLessons: [] };
  }
  function getLessonState() { return FEARN.storage.get(STATE_KEY + ':lesson', defaultLessonState()); }
  function setLessonState(s) { FEARN.storage.set(STATE_KEY + ':lesson', s); }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function markLessonComplete(lessonId) {
    const state = getLessonState();
    if (!state.completedLessons.includes(lessonId)) {
      state.completedLessons.push(lessonId);
      setLessonState(state);
    }
    FEARN.streak.log(MODULE_ID);
    FEARN.journey.log();
  }

  function render(container) {
    container.innerHTML = '';
    const curr = getCurriculum();
    const lState = getLessonState();

    const root = document.createElement('div');
    root.className = 'fearn-uni-module b111-container';
    root.style.padding = '24px';
    root.style.maxWidth = '1100px';
    root.style.margin = '0 auto';
    root.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

    // Header
    const header = document.createElement('div');
    header.className = 'b111-header';
    header.style.marginBottom = '24px';
    header.style.borderBottom = '1px solid var(--border-color, rgba(255,255,255,0.1))';
    header.style.paddingBottom = '16px';
    header.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <span style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--accent-color, #10b981); font-weight:700;">University Elite Course</span>
          <h1 style="margin:4px 0 0; font-size:1.8rem; font-weight:800; display:flex; align-items:center; gap:10px;">
            <span>📈</span> B111: Financial Modeling & Valuation
          </h1>
          <p style="margin:6px 0 0; color:var(--text-muted, #94a3b8); font-size:0.95rem;">
            Integrated 3-Statement financial modeling, DCF valuation, Black-Scholes option pricing Greeks, and capital structure optimization.
          </p>
        </div>
        <div style="background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); border-radius:10px; padding:10px 18px; text-align:right;">
          <div style="font-size:0.75rem; color:#94a3b8; text-transform:uppercase; font-weight:600;">Course Progression</div>
          <div style="font-size:1.25rem; font-weight:800; color:#10b981;">
            ${lState.completedLessons.length} / 25 <span style="font-size:0.85rem; font-weight:500; color:#cbd5e1;">Sessions Completed</span>
          </div>
        </div>
      </div>
    `;
    root.appendChild(header);

    // Main 2-column layout
    const mainGrid = document.createElement('div');
    mainGrid.style.display = 'grid';
    mainGrid.style.gridTemplateColumns = 'minmax(280px, 320px) 1fr';
    mainGrid.style.gap = '24px';

    // Left Column: 25-Session Syllabus
    const leftCol = document.createElement('div');
    leftCol.className = 'b111-syllabus-pane';
    leftCol.style.background = 'var(--surface-color, rgba(30, 41, 59, 0.7))';
    leftCol.style.borderRadius = '12px';
    leftCol.style.padding = '16px';
    leftCol.style.border = '1px solid var(--border-color, rgba(255,255,255,0.08))';
    leftCol.style.height = 'fit-content';

    leftCol.innerHTML = `<h3 style="margin:0 0 14px; font-size:1.05rem; font-weight:700; color:#f1f5f9; display:flex; align-items:center; gap:8px;"><span>📚</span> Course Syllabus (3 Units, 25 Sessions)</h3>`;

    const sessionList = document.createElement('div');
    sessionList.style.display = 'flex';
    sessionList.style.flexDirection = 'column';
    sessionList.style.gap = '16px';

    (curr.units || curr.roadmap || []).forEach((unit, uIdx) => {
      const unitBox = document.createElement('div');
      unitBox.style.background = 'rgba(15, 23, 42, 0.6)';
      unitBox.style.borderRadius = '8px';
      unitBox.style.padding = '10px';
      unitBox.style.border = '1px solid rgba(255,255,255,0.05)';

      unitBox.innerHTML = `
        <div style="font-size:0.8rem; font-weight:700; color:#10b981; margin-bottom:6px;">
          UNIT ${uIdx + 1}: ${escapeHtml((unit.title || unit.name || ""))}
        </div>
      `;

      const lesBox = document.createElement('div');
      lesBox.style.display = 'flex';
      lesBox.style.flexDirection = 'column';
      lesBox.style.gap = '4px';

      (unit.lessonIds || unit.lessons || []).forEach((lId, sIdx) => {
        const isAuthored = !!curr.lessons[lId];
        const isSelected = lState.currentLessonId === lId;
        const isDone = lState.completedLessons.includes(lId);

        const btn = document.createElement('button');
        btn.style.width = '100%';
        btn.style.textAlign = 'left';
        btn.style.padding = '8px 10px';
        btn.style.borderRadius = '6px';
        btn.style.border = isSelected ? '1px solid #10b981' : '1px solid transparent';
        btn.style.background = isSelected ? 'rgba(16,185,129,0.2)' : (isDone ? 'rgba(34,197,94,0.1)' : 'transparent');
        btn.style.color = isSelected ? '#f8fafc' : (isDone ? '#86efac' : (isAuthored ? '#cbd5e1' : '#64748b'));
        btn.style.fontSize = '0.85rem';
        btn.style.cursor = isAuthored ? 'pointer' : 'default';
        btn.style.display = 'flex';
        btn.style.justifyContent = 'space-between';
        btn.style.alignItems = 'center';

        const title = isAuthored ? (curr.lessons[lId].objective.split('(')[0].trim()) : `Session ${sIdx + 1}: Financial Modeling Case`;
        btn.innerHTML = `
          <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:200px;">
            ${isDone ? '✓ ' : (isAuthored ? '• ' : '🔒 ')}S${sIdx + 1}: ${escapeHtml(title)}
          </span>
          <span style="font-size:0.75rem; opacity:0.8;">${isDone ? 'Done' : (isAuthored ? 'Ready' : 'Soon')}</span>
        `;

        if (isAuthored) {
          btn.addEventListener('click', () => {
            lState.currentLessonId = lId;
            setLessonState(lState);
            render(container);
          });
        }
        lesBox.appendChild(btn);
      });
      unitBox.appendChild(lesBox);
      sessionList.appendChild(unitBox);
    });
    leftCol.appendChild(sessionList);
    mainGrid.appendChild(leftCol);

    // Right Column: Active Lecture & Problem Set
    const rightCol = document.createElement('div');
    rightCol.className = 'b111-lecture-pane';
    rightCol.style.background = 'var(--surface-color, rgba(30, 41, 59, 0.7))';
    rightCol.style.borderRadius = '12px';
    rightCol.style.padding = '24px';
    rightCol.style.border = '1px solid var(--border-color, rgba(255,255,255,0.08))';

    const activeLesson = curr.lessons[lState.currentLessonId] || Object.values(curr.lessons)[0];

    if (activeLesson) {
      rightCol.innerHTML = `
        <div style="border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:16px; margin-bottom:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.8rem; font-weight:700; color:#10b981; background:rgba(16,185,129,0.1); padding:4px 10px; border-radius:4px;">
              Session ${activeLesson.id} • ${activeLesson.level}
            </span>
            <span style="font-size:0.85rem; color:#94a3b8;">B111 Core Curriculum</span>
          </div>
          <h2 style="margin:12px 0 6px; font-size:1.4rem; color:#f8fafc; font-weight:800;">
            ${escapeHtml(activeLesson.objective)}
          </h2>
        </div>

        <!-- Academic Presentation & Valuation Formulations -->
        <div style="margin-bottom:24px;">
          <h4 style="margin:0 0 10px; font-size:1rem; color:#10b981; text-transform:uppercase; letter-spacing:0.05em;">
            📖 Valuation Theory & Financial Modeling Lecture
          </h4>
          <div style="background:rgba(15, 23, 42, 0.8); border:1px solid rgba(16,185,129,0.2); border-radius:8px; padding:18px; line-height:1.7; color:#e2e8f0; font-size:0.95rem; white-space:pre-wrap; font-family:'Fira Code', monospace, sans-serif;">
${escapeHtml(activeLesson.presentation.explanation)}
          </div>
        </div>

        <!-- Key Formulas & Real-World DCF Models -->
        ${activeLesson.presentation.examples && activeLesson.presentation.examples.length ? `
          <div style="margin-bottom:24px;">
            <h4 style="margin:0 0 10px; font-size:1rem; color:#38bdf8; text-transform:uppercase; letter-spacing:0.05em;">
              ⚡ Corporate Valuation & Derivatives Case Models
            </h4>
            <div style="display:flex; flex-direction:column; gap:10px;">
              ${activeLesson.presentation.examples.map(ex => `
                <div style="background:rgba(56,189,248,0.08); border-left:4px solid #38bdf8; padding:12px 16px; border-radius:0 6px 6px 0;">
                  <div style="font-weight:700; color:#f1f5f9; font-family:monospace;">${escapeHtml(ex.target)}</div>
                  <div style="color:#cbd5e1; font-size:0.9rem; margin-top:4px;">${escapeHtml(ex.translation || ex.reading || '')}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Interactive Checkpoint Problem Set -->
        <div id="b111-exam-container" style="background:rgba(15, 23, 42, 0.9); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:20px; margin-top:24px;">
          <h4 style="margin:0 0 14px; font-size:1.1rem; color:#f8fafc; font-weight:700; display:flex; align-items:center; gap:8px;">
            <span>📝</span> Problem Set & Checkpoint Examination
          </h4>
          <div id="b111-quiz-area"></div>
        </div>
      `;

      // Mount Quiz synchronously
      const quizArea = rightCol.querySelector ? rightCol.querySelector('#b111-quiz-area') : null;
      const items = (activeLesson.checkpointTest && activeLesson.checkpointTest.items) || [];
      
      if (quizArea) {
        if (!items.length) {
          quizArea.innerHTML = `<p style="color:#94a3b8;">No checkpoint questions registered for this session.</p>`;
        } else {
          let userScore = 0;
          let answeredCount = 0;

          items.forEach((item, qIdx) => {
            const qBox = document.createElement('div');
            qBox.style.marginBottom = '18px';
            qBox.style.padding = '14px';
            qBox.style.background = 'rgba(30, 41, 59, 0.5)';
            qBox.style.borderRadius = '8px';
            qBox.style.border = '1px solid rgba(255,255,255,0.05)';

            qBox.innerHTML = `
              <div style="font-weight:600; color:#f1f5f9; margin-bottom:10px; font-size:0.95rem;">
                Q${qIdx + 1}: ${escapeHtml(item.prompt)}
              </div>
            `;

            const optBox = document.createElement('div');
            optBox.style.display = 'flex';
            optBox.style.flexDirection = 'column';
            optBox.style.gap = '8px';

            let answered = false;

            const _indices = item.options.map((_, i) => i);
            for (let i = _indices.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = _indices[i];
              _indices[i] = _indices[j];
              _indices[j] = temp;
            }

            _indices.forEach((origIdx) => {
              const opt = item.options[origIdx];
              const optBtn = document.createElement('button');
              optBtn.style.textAlign = 'left';
              optBtn.style.padding = '10px 14px';
              optBtn.style.borderRadius = '6px';
              optBtn.style.border = '1px solid rgba(255,255,255,0.1)';
              optBtn.style.background = 'rgba(15,23,42,0.6)';
              optBtn.style.color = '#e2e8f0';
              optBtn.style.fontSize = '0.9rem';
              optBtn.style.cursor = 'pointer';
              optBtn.innerText = opt;

              optBtn.addEventListener('click', () => {
                if (answered) return;
                answered = true;
                answeredCount++;

                if (origIdx === item.answerIndex) {
                  optBtn.style.background = 'rgba(34,197,94,0.3)';
                  optBtn.style.borderColor = '#22c55e';
                  userScore++;
                } else {
                  optBtn.style.background = 'rgba(239,68,68,0.3)';
                  optBtn.style.borderColor = '#ef4444';
                  const buttons = optBox.querySelectorAll('button');
                  buttons.forEach((btn, bIdx) => {
                    if (_indices[bIdx] === item.answerIndex) {
                      btn.style.background = 'rgba(34,197,94,0.3)';
                      btn.style.borderColor = '#22c55e';
                    }
                  });
                }

                const exp = document.createElement('div');
                exp.style.marginTop = '8px';
                exp.style.fontSize = '0.85rem';
                exp.style.color = '#94a3b8';
                exp.style.fontStyle = 'italic';
                exp.innerText = 'Explanation: ' + (item.explanation || 'See formal proof in lecture notes.');
                qBox.appendChild(exp);

                if (answeredCount === items.length) {
                  const pass = (userScore / items.length) >= (activeLesson.checkpointTest.passThreshold || 0.8);
                  if (pass) {
                    markLessonComplete(activeLesson.id);
                    const banner = document.createElement('div');
                    banner.style.marginTop = '16px';
                    banner.style.padding = '14px';
                    banner.style.background = 'rgba(34,197,94,0.2)';
                    banner.style.border = '1px solid #22c55e';
                    banner.style.borderRadius = '8px';
                    banner.style.color = '#86efac';
                    banner.style.fontWeight = '700';
                    banner.style.textAlign = 'center';
                    banner.innerHTML = `🎉 Session Mastery Achieved! Score: ${userScore}/${items.length} (Passed). Progress recorded.`;
                    quizArea.appendChild(banner);
                  }
                }
              });
              optBox.appendChild(optBtn);
            });
            qBox.appendChild(optBox);
            quizArea.appendChild(qBox);
          });
        }
      }
    } else {
      rightCol.innerHTML = `<p style="color:#94a3b8;">Select a session from the syllabus on the left.</p>`;
    }

    mainGrid.appendChild(rightCol);
    root.appendChild(mainGrid);
    container.appendChild(root);
  }

  function getProgress() {
    const lState = getLessonState();
    return {
      completed: lState.completedLessons.length, total: 25,
      percent: Math.round((lState.completedLessons.length / 25) * 100),
    };
  }

  FEARN.registerModule({
    id: MODULE_ID,
    name: 'B111: Financial Modeling & Valuation',
    icon: '📈',
    category: 'skill',
    render: render,
    getProgress: getProgress,
  });
})(typeof window !== 'undefined' ? window : global);

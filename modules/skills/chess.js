// FEARN Skill Module — Chess
// Registers 'skill-chess'. Renders the journey path (from the chess ledger + curriculum),
// visual SVG chessboard component (glass teal / wood themes), interactive piece selection,
// typed algebraic move grading, checkpoint tests, and adaptive puzzle drills.

(function (global) {
  const FEARN = global.FEARN;
  const CURRICULUM = (global.FEARN_CURRICULA && global.FEARN_CURRICULA.chess) || { roadmap: [], lessons: {} };
  const LEDGER = (global.FEARN_LEDGERS && global.FEARN_LEDGERS.chess) || {
    subject: 'chess', fullRoadmapLength: 0, authoredInFull: [], stubOnly: [], lastCompletedLessonId: null, nextToAuthor: null,
  };

  const MODULE_ID = 'skill-chess';
  const RATING_ID = 'chess';
  const STATE_KEY = MODULE_ID + ':state';

  function defaultState() {
    return {
      currentLessonId: LEDGER.authoredInFull[0] || null,
      completedLessons: [],
      puzzlesSolved: 0,
      puzzlesMissed: 0,
    };
  }

  function getState() {
    return FEARN.storage.get(STATE_KEY, defaultState());
  }
  function setState(s) {
    FEARN.storage.set(STATE_KEY, s);
  }

  function allAuthoredLessonsInOrder() {
    return LEDGER.authoredInFull
      .map((id) => CURRICULUM.lessons[id])
      .filter(Boolean);
  }

  function puzzlePool() {
    const pool = [];
    allAuthoredLessonsInOrder().forEach((lesson) => {
      (lesson.checkpointTest.items || []).forEach((item) => {
        pool.push({ ...item, lessonId: lesson.id, lessonUnit: lesson.unit });
      });
    });
    return pool;
  }

  function pickAdaptivePuzzle() {
    const pool = puzzlePool().filter((p) => typeof p.difficulty === 'number' && p.answer);
    if (pool.length === 0) return null;
    const rating = FEARN.rating.get(RATING_ID);
    let best = pool[0];
    let bestDist = Infinity;
    pool.forEach((p) => {
      const dist = Math.abs(p.difficulty - rating);
      if (dist < bestDist) {
        bestDist = dist;
        best = p;
      }
    });
    return best;
  }

  function escapeHtml(s) {
    if (!s) return '';
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  // ---------------------------------------------------------------------
  // Visual Chessboard SVG Renderer
  // ---------------------------------------------------------------------
  const PIECE_SVGS = {
    // White pieces (glass light / cyan stroke)
    K: '<rect x="13" y="75" width="34" height="10" rx="2" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><polygon points="16,75 44,75 30,38" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><circle cx="30" cy="34" r="11" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><rect x="27" y="8" width="6" height="16" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><rect x="21" y="13" width="18" height="6" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/>',
    Q: '<rect x="13" y="75" width="34" height="10" rx="2" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><polygon points="16,75 44,75 30,38" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><circle cx="30" cy="32" r="11" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><circle cx="16" cy="17" r="4" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><circle cx="23" cy="14" r="4" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><circle cx="30" cy="12" r="4" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><circle cx="37" cy="14" r="4" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><circle cx="44" cy="17" r="4" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/>',
    R: '<rect x="12" y="75" width="36" height="10" rx="2" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><rect x="16" y="35" width="28" height="40" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><rect x="16" y="23" width="7" height="14" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><rect x="26.5" y="23" width="7" height="14" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><rect x="37" y="23" width="7" height="14" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/>',
    B: '<rect x="15" y="75" width="30" height="10" rx="2" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><polygon points="18,75 42,75 30,40" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><circle cx="30" cy="32" r="10" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><circle cx="30" cy="17" r="5" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/>',
    N: '<rect x="14" y="75" width="32" height="10" rx="2" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><rect x="18" y="50" width="24" height="25" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><polygon points="18,52 46,50 40,18 24,24" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/>',
    P: '<rect x="15" y="75" width="30" height="10" rx="2" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><polygon points="10,75 50,75 35,45" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/><circle cx="30" cy="35" r="12" fill="#ffffff" fill-opacity="0.95" stroke="#1c5f5c" stroke-width="2" stroke-linejoin="round"/>',

    // Black pieces (dark obsidian / vivid cyan neon stroke)
    k: '<rect x="13" y="75" width="34" height="10" rx="2" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><polygon points="16,75 44,75 30,38" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><circle cx="30" cy="34" r="11" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><rect x="27" y="8" width="6" height="16" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><rect x="21" y="13" width="18" height="6" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/>',
    q: '<rect x="13" y="75" width="34" height="10" rx="2" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><polygon points="16,75 44,75 30,38" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><circle cx="30" cy="32" r="11" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><circle cx="16" cy="17" r="4" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><circle cx="23" cy="14" r="4" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><circle cx="30" cy="12" r="4" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><circle cx="37" cy="14" r="4" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><circle cx="44" cy="17" r="4" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/>',
    r: '<rect x="12" y="75" width="36" height="10" rx="2" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><rect x="16" y="35" width="28" height="40" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><rect x="16" y="23" width="7" height="14" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><rect x="26.5" y="23" width="7" height="14" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><rect x="37" y="23" width="7" height="14" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/>',
    b: '<rect x="15" y="75" width="30" height="10" rx="2" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><polygon points="18,75 42,75 30,40" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><circle cx="30" cy="32" r="10" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><circle cx="30" cy="17" r="5" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/>',
    n: '<rect x="14" y="75" width="32" height="10" rx="2" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><rect x="18" y="50" width="24" height="25" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><polygon points="18,52 46,50 40,18 24,24" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/>',
    p: '<rect x="15" y="75" width="30" height="10" rx="2" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><polygon points="10,75 50,75 35,45" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/><circle cx="30" cy="35" r="12" fill="#0f172a" fill-opacity="0.95" stroke="#38bdf8" stroke-width="2.2" stroke-linejoin="round"/>',
  };

  function parseFEN(fen) {
    if (!fen) fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    const parts = fen.trim().split(/\s+/);
    const rows = parts[0].split('/');
    if (rows.length !== 8) return null;
    const board = [];
    for (let r = 0; r < 8; r++) {
      const row = rows[r];
      const boardRow = [];
      for (let c = 0; c < row.length; c++) {
        const ch = row[c];
        if (ch >= '1' && ch <= '8') {
          const count = parseInt(ch, 10);
          for (let k = 0; k < count; k++) boardRow.push(null);
        } else {
          boardRow.push(ch);
        }
      }
      if (boardRow.length !== 8) return null;
      board.push(boardRow);
    }
    return {
      board,
      turn: parts[1] || 'w',
      castling: parts[2] || '-',
      enPassant: parts[3] || '-',
      halfmove: parseInt(parts[4], 10) || 0,
      fullmove: parseInt(parts[5], 10) || 1,
    };
  }

  function renderChessboard(container, fen, opts) {
    const options = opts || {};
    const parsed = parseFEN(fen);
    if (!parsed) {
      container.innerHTML = '<div class="fearn-chessboard-error">Invalid FEN: ' + escapeHtml(fen) + '</div>';
      return;
    }

    const lightColor = '#eaf6f6';
    const darkColor = '#2f8f8a';
    const borderColor = '#1c5f5c';
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    const boardWrap = document.createElement('div');
    boardWrap.className = 'fearn-chessboard-container';
    boardWrap.style.maxWidth = options.maxWidth || '440px';
    boardWrap.style.width = '100%';
    boardWrap.style.margin = '12px auto';
    boardWrap.style.userSelect = 'none';

    let selectedSquare = null;

    function buildSVG() {
      let svg = '<svg viewBox="0 0 516 516" class="fearn-chessboard-svg" style="width:100%; height:auto; display:block; filter: drop-shadow(0 12px 28px rgba(0,0,0,0.5));">';
      
      // Board border / background
      svg += '<rect x="28" y="28" width="460" height="460" rx="14" fill="' + borderColor + '" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>';
      
      // Coordinates text
      for (let f = 0; f < 8; f++) {
        const fileChar = files[f];
        const xPos = 34 + f * 56 + 28;
        svg += '<text x="' + xPos + '" y="22" font-size="13" font-weight="700" fill="#94a3b8" text-anchor="middle">' + fileChar + '</text>';
        svg += '<text x="' + xPos + '" y="504" font-size="13" font-weight="700" fill="#94a3b8" text-anchor="middle">' + fileChar + '</text>';
      }
      for (let r = 0; r < 8; r++) {
        const rankNum = 8 - r;
        const yPos = 34 + r * 56 + 33;
        svg += '<text x="16" y="' + yPos + '" font-size="13" font-weight="700" fill="#94a3b8" text-anchor="middle">' + rankNum + '</text>';
        svg += '<text x="500" y="' + yPos + '" font-size="13" font-weight="700" fill="#94a3b8" text-anchor="middle">' + rankNum + '</text>';
      }

      // 64 Squares
      for (let r = 0; r < 8; r++) {
        for (let f = 0; f < 8; f++) {
          const isLight = (r + f) % 2 === 0;
          const sqName = files[f] + (8 - r);
          const sqX = 34 + f * 56;
          const sqY = 34 + r * 56;
          const isSelected = selectedSquare === sqName;
          const isHighlighted = (options.highlightSquares || []).includes(sqName);

          const fill = isLight ? lightColor : darkColor;
          svg += '<rect x="' + sqX + '" y="' + sqY + '" width="56" height="56" fill="' + fill + '" data-sq="' + sqName + '" style="cursor:' + (options.interactive ? 'pointer' : 'default') + ';"/>';

          if (isHighlighted) {
            svg += '<rect x="' + sqX + '" y="' + sqY + '" width="56" height="56" fill="rgba(245, 158, 11, 0.4)" stroke="#f59e0b" stroke-width="2.5" pointer-events="none"/>';
          }
          if (isSelected) {
            svg += '<rect x="' + sqX + '" y="' + sqY + '" width="56" height="56" fill="rgba(56, 189, 248, 0.45)" stroke="#38bdf8" stroke-width="3" pointer-events="none"/>';
          }

          // Render piece if present
          const piece = parsed.board[r][f];
          if (piece && PIECE_SVGS[piece]) {
            // Piece geometry is in viewBox 0 0 60 90 -> scale by ~0.533 -> 32x48, offset by x+12, y+4
            svg += '<g transform="translate(' + (sqX + 12) + ', ' + (sqY + 4) + ') scale(0.533)" pointer-events="none">' + PIECE_SVGS[piece] + '</g>';
          }
        }
      }

      svg += '</svg>';
      return svg;
    }

    boardWrap.innerHTML = buildSVG();

    if (options.interactive) {
      boardWrap.addEventListener('click', (e) => {
        const target = e.target.closest('[data-sq]');
        if (!target) return;
        const sq = target.getAttribute('data-sq');
        if (selectedSquare === sq) {
          selectedSquare = null;
        } else if (!selectedSquare) {
          selectedSquare = sq;
        } else {
          // Second square clicked: trigger move event
          const fromSq = selectedSquare;
          const toSq = sq;
          selectedSquare = null;
          // Smart Click-to-Move Enhanced
          if (typeof options.onMove === 'function') {
            options.onMove(fromSq, toSq);
          }
          // Visual celebration feedback for move
          if (typeof options.onSquareMove === 'function') {
            options.onSquareMove(fromSq, toSq);
          }
        }
        boardWrap.innerHTML = buildSVG();
      });
    }

    container.appendChild(boardWrap);
    return {
      setFen: (newFen) => {
        fen = newFen;
        const p = parseFEN(fen);
        if (p) {
          parsed.board = p.board;
          parsed.turn = p.turn;
          boardWrap.innerHTML = buildSVG();
        }
      },
    };
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

    box.innerHTML =
      '<div style="display:flex; align-items:center; gap:8px; margin-bottom:12px; flex-wrap:wrap;"><span style="font-size:0.75rem; font-weight:800; padding:3px 8px; border-radius:6px; background:rgba(56,189,248,0.15); color:#38bdf8; border:1px solid rgba(56,189,248,0.3); text-transform:uppercase; letter-spacing:0.05em;">' + escapeHtml(formattedLevel) + '</span><h3 style="margin:0; font-size:1.15rem; font-weight:700; color:#f8fafc;">' + escapeHtml(uName) + '</h3></div>' +
      '<p class="fearn-objective"><strong>Goal:</strong> ' + escapeHtml(lesson.objective) + '</p>' +
      '<p>' + escapeHtml(lesson.presentation.explanation) + '</p>';

    const exContainer = document.createElement('div');
    exContainer.className = 'fearn-examples';

    lesson.presentation.examples.forEach((ex) => {
      const exCard = document.createElement('div');
      exCard.className = 'fearn-example';
      exCard.style.padding = '16px';
      exCard.style.background = 'rgba(0,0,0,0.25)';
      exCard.style.borderRadius = '14px';
      exCard.style.marginBottom = '16px';

      if (ex.fen) {
        renderChessboard(exCard, ex.fen, { maxWidth: '380px' });
      }
      const desc = document.createElement('div');
      desc.className = 'fearn-example-desc';
      desc.style.marginTop = '8px';
      desc.innerHTML = '<strong>Position:</strong> ' + escapeHtml(ex.description || '');
      exCard.appendChild(desc);

      const details = document.createElement('details');
      details.style.marginTop = '10px';
      details.innerHTML =
        '<summary style="cursor:pointer; font-weight:700; color:#38bdf8;">Show Master Solution</summary>' +
        '<p style="margin-top:6px;"><strong style="color:#10b981;">' + escapeHtml(ex.solution || '') + '</strong></p>' +
        '<p style="font-size:0.9rem; color:var(--text-sub);">' + escapeHtml(ex.explanationOfSolution || '') + '</p>';
      exCard.appendChild(details);
      exContainer.appendChild(exCard);
    });

    box.appendChild(exContainer);
    container.appendChild(box);
  }

  function renderCheckpointTest(container, lesson, onComplete) {
    const box = document.createElement('div');
    box.className = 'fearn-checkpoint';
    const test = lesson.checkpointTest || { items: [] };
    const items = test.items || [];
    if (!items.length) {
      box.innerHTML = '<p>No checkpoint items authored yet.</p>';
      container.appendChild(box);
      return;
    }

    let currentQ = 0;
    const userAnswers = new Array(items.length).fill(null);

    function renderQuestion() {
      box.innerHTML = '';
      const header = document.createElement('h4');
      header.textContent = 'Checkpoint Test — Question ' + (currentQ + 1) + ' of ' + items.length;
      box.appendChild(header);

      const item = items[currentQ];
      const qCard = document.createElement('div');
      qCard.className = 'fearn-checkpoint-card';
      qCard.style.padding = '18px';
      qCard.style.background = 'rgba(0,0,0,0.3)';
      qCard.style.borderRadius = '16px';
      qCard.style.marginTop = '12px';

      const promptP = document.createElement('p');
      promptP.style.fontSize = '1.05rem';
      promptP.style.fontWeight = '700';
      promptP.textContent = (currentQ + 1) + '. ' + item.prompt;
      qCard.appendChild(promptP);

      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Type your move in algebraic notation (e.g. Nc7+, Qh5)...';
      input.style.width = '100%';
      input.style.padding = '12px 14px';
      input.style.borderRadius = '8px';
      input.style.background = 'rgba(0,0,0,0.4)';
      input.style.border = '1px solid var(--glass-border)';
      input.style.color = '#fff';
      input.style.fontSize = '1rem';
      input.style.marginTop = '12px';
      if (userAnswers[currentQ] !== null) input.value = userAnswers[currentQ];
      input.oninput = () => { userAnswers[currentQ] = input.value; };
      input.onkeydown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          userAnswers[currentQ] = input.value;
          advanceQ();
        }
      };

      if (item.fen) {
        renderChessboard(qCard, item.fen, {
          maxWidth: '380px',
          interactive: true,
          onMove: (from, to) => {
            input.value = from + '-' + to;
            userAnswers[currentQ] = input.value;
          },
        });
      }

      qCard.appendChild(input);

      const nextBtn = document.createElement('button');
      nextBtn.className = 'fearn-lang-btn-primary';
      nextBtn.style.marginTop = '14px';
      nextBtn.textContent = currentQ === items.length - 1 ? 'Submit Checkpoint ➔' : 'Next Question ➔';
      nextBtn.onclick = () => {
        userAnswers[currentQ] = input.value;
        advanceQ();
      };
      qCard.appendChild(nextBtn);

      box.appendChild(qCard);
      if (input && typeof input.focus === 'function') {
        setTimeout(() => { try { input.focus(); } catch(e){} }, 50);
      }
    }

    function advanceQ() {
      if (currentQ < items.length - 1) {
        currentQ++;
        renderQuestion();
      } else {
        evaluateResults();
      }
    }

    function evaluateResults() {
      box.innerHTML = '';
      let correctCount = 0;
      const missed = [];

      items.forEach((item, idx) => {
        const got = (userAnswers[idx] || '').trim();
        const expected = String(item.answer || '').trim();
        const matchRes = (FEARN && FEARN.matchAnswer)
          ? FEARN.matchAnswer(got, [expected], { mode: 'normalized', tolerance: 0 })
          : { matched: got.toLowerCase().replace(/[^a-z0-9+#=]/g, '') === expected.toLowerCase().replace(/[^a-z0-9+#=]/g, '') };

        const isCorrect = matchRes.matched;
        if (isCorrect) {
          correctCount++;
        } else {
          missed.push({
            idx: idx + 1,
            prompt: item.prompt,
            got: got || '(blank)',
            expected,
            explanation: item.explanation || 'Calculate the forcing candidate moves from this tactical motif.',
          });
        }
        FEARN.srs.schedule(item.id, isCorrect ? 4 : 1, MODULE_ID);
        if (typeof item.difficulty === 'number') {
          FEARN.rating.update(RATING_ID, isCorrect, item.difficulty);
        }
      });

      const scorePct = items.length ? correctCount / items.length : 0;
      const passed = scorePct >= (test.passThreshold || 0.8);
      const s = getState();
      if (passed) s.puzzlesSolved += correctCount; else s.puzzlesMissed += (items.length - correctCount);
      setState(s);
      FEARN.streak.log(MODULE_ID);

      const resCard = document.createElement('div');
      resCard.className = 'fearn-card fearn-glass--strong';
      resCard.style.padding = '24px';
      resCard.style.display = 'flex';
      resCard.style.flexDirection = 'column';
      resCard.style.gap = '14px';

      resCard.innerHTML =
        '<div style="font-size:1.8rem;">' + (passed ? '🎉🏆' : '⚠️') + '</div>' +
        '<div style="font-size:1.3rem; font-weight:800; color:' + (passed ? '#10b981' : '#f59e0b') + ';">' +
          'Score: ' + correctCount + ' / ' + items.length + ' (' + Math.round(scorePct * 100) + '%) ' + (passed ? '— Mastery Demonstrated!' : '— Try Again') +
        '</div>' +
        '<div style="font-size:0.88rem; color:var(--text-sub);">' +
          (passed ? 'Checkpoint passed. Rating updated.' : '80% required to master this tactical lesson. Review missed moves below:') +
        '</div>';

      if (missed.length > 0) {
        const missedWrap = document.createElement('div');
        missedWrap.style.marginTop = '8px';
        missedWrap.innerHTML = '<div style="font-size:0.85rem; font-weight:700; text-transform:uppercase; color:#f87171; margin-bottom:8px;">Missed Tactical Moves:</div>';
        missed.forEach((m) => {
          const mEl = document.createElement('div');
          mEl.style.background = 'rgba(0,0,0,0.3)';
          mEl.style.borderLeft = '3px solid #f87171';
          mEl.style.borderRadius = '8px';
          mEl.style.padding = '10px 14px';
          mEl.style.marginBottom = '8px';
          mEl.innerHTML =
            '<div style="font-weight:700; color:#fff;">' + m.idx + '. ' + escapeHtml(m.prompt) + '</div>' +
            '<div style="display:flex; justify-content:space-between; margin-top:4px; font-size:0.88rem;">' +
              '<span>Your move: <b style="color:#f87171;">' + escapeHtml(m.got) + '</b></span>' +
              '<span>Expected: <b style="color:#10b981;">' + escapeHtml(m.expected) + '</b></span>' +
            '</div>' +
            '<div style="font-size:0.8rem; color:var(--text-sub); margin-top:4px;"><b>Explanation:</b> ' + escapeHtml(m.explanation) + '</div>';
          missedWrap.appendChild(mEl);
        });
        resCard.appendChild(missedWrap);
      }

      const actionBtn = document.createElement('button');
      actionBtn.className = 'fearn-lang-btn-primary';
      actionBtn.style.marginTop = '10px';
      actionBtn.textContent = passed ? 'Complete Lesson ➔' : 'Retry Checkpoint ↺';
      actionBtn.onclick = () => {
        if (passed) {
          if (typeof onComplete === 'function') onComplete();
        } else {
          currentQ = 0;
          userAnswers.fill(null);
          renderQuestion();
        }
      };
      resCard.appendChild(actionBtn);
      box.appendChild(resCard);
    }

    renderQuestion();
    container.appendChild(box);
  }

  function renderAdaptiveDrill(container) {
    const box = document.createElement('div');
    box.className = 'fearn-adaptive-drill';
    const rating = FEARN.rating.get(RATING_ID);
    const puzzle = pickAdaptivePuzzle();
    box.innerHTML = '<h4>Adaptive Tactical Drill</h4><p class="fearn-rating" style="color:#38bdf8; font-weight:700;">Current Rating: ' + rating + '</p>';
    if (!puzzle) {
      box.innerHTML += '<p>No puzzles authored yet — complete a lesson above to unlock drills.</p>';
      container.appendChild(box);
      return;
    }
    const puzzleBox = document.createElement('div');
    puzzleBox.innerHTML =
      '<p style="font-weight:700; font-size:1.05rem;">' + escapeHtml(puzzle.prompt) + '</p>' +
      '<p class="fearn-puzzle-difficulty" style="font-size:0.85rem; color:var(--text-sub);">Puzzle difficulty: ' + puzzle.difficulty + '</p>';

    const input = document.createElement('input');
    input.placeholder = 'Your move (e.g. Nc7+, Qh5)';
    input.style.width = '100%';
    input.style.padding = '12px 14px';
    input.style.borderRadius = '8px';
    input.style.background = 'rgba(0,0,0,0.3)';
    input.style.border = '1px solid var(--glass-border)';
    input.style.color = '#fff';
    input.style.marginTop = '10px';

    if (puzzle.fen) {
      renderChessboard(puzzleBox, puzzle.fen, {
        maxWidth: '380px',
        interactive: true,
        onMove: (from, to) => {
          input.value = from + '-' + to;
        },
      });
    }

    const submit = document.createElement('button');
    submit.className = 'fearn-lang-btn-primary';
    submit.style.marginTop = '10px';
    submit.textContent = 'Submit Move';
    const result = document.createElement('div');
    result.style.marginTop = '10px';

    submit.addEventListener('click', () => {
      const got = input.value.trim();
      const expected = String(puzzle.answer).trim();
      const matchRes = (FEARN && FEARN.matchAnswer)
        ? FEARN.matchAnswer(got, [expected], { mode: 'normalized', tolerance: 0 })
        : { matched: got.toLowerCase().replace(/[^a-z0-9+#=]/g, '') === expected.toLowerCase().replace(/[^a-z0-9+#=]/g, '') };

      const success = matchRes.matched;
      const newRating = FEARN.rating.update(RATING_ID, success, puzzle.difficulty);
      const s = getState();
      if (success) s.puzzlesSolved += 1; else s.puzzlesMissed += 1;
      setState(s);
      FEARN.streak.log(MODULE_ID);
      result.innerHTML = success
        ? '<div style="color:#10b981; font-weight:700;">✓ Correct move (' + escapeHtml(puzzle.answer) + ')! New rating: ' + newRating + '</div>'
        : '<div style="color:#f87171; font-weight:700;">✗ Not quite — best move was ' + escapeHtml(puzzle.answer) + '. New rating: ' + newRating + '</div>';
      FEARN.srs.schedule(puzzle.id, success ? 4 : 1, MODULE_ID);
    });

    puzzleBox.appendChild(input);
    puzzleBox.appendChild(submit);
    puzzleBox.appendChild(result);
    box.appendChild(puzzleBox);
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
      renderCheckpointTest(practiceWrap, lesson, () => {
        const s = getState();
        if (!s.completedLessons.includes(lesson.id)) s.completedLessons.push(lesson.id);
        const idx = LEDGER.authoredInFull.indexOf(lesson.id);
        const next = LEDGER.authoredInFull[idx + 1];
        if (next) s.currentLessonId = next;
        setState(s);
        FEARN.journey.log();
        if (FEARN.ui && typeof FEARN.ui.celebrateCheckpoint === 'function') {
          FEARN.ui.celebrateCheckpoint({ message: 'Chess lesson completed: ' + lesson.objective });
        }
        rerender(container);
      });
    } else {
      practiceWrap.innerHTML = '<p>Pick a lesson from the journey path above to begin (or start with Unit 1: Forks).</p>';
    }

    renderAdaptiveDrill(practiceWrap);
    container.appendChild(practiceWrap);
  }

  function getProgress() {
    const state = getState();
    const total = LEDGER.fullRoadmapLength || 1;
    const completed = state.completedLessons.length;
    let nextLesson = null;
    for (let i = 0; i < (LEDGER.authoredInFull || []).length; i++) {
      const lid = LEDGER.authoredInFull[i];
      if (!state.completedLessons.includes(lid)) {
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
      puzzlesSolved: state.puzzlesSolved,
      puzzlesMissed: state.puzzlesMissed,
      streak: FEARN.streak.get(MODULE_ID).current,
      nextLesson,
    };
  }

  FEARN.registerModule({
    id: MODULE_ID,
    name: 'Chess',
    icon: '♞',
    render,
    getProgress,
  });
})(typeof window !== 'undefined' ? window : globalThis);

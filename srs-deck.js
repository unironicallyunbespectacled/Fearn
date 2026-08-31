// FEARN Spaced Repetition Suite — Mathematical FSRS-4.5 / 5 DSR (Difficulty, Stability, Retrievability) Engine
// 100% Self-Contained. Dynamic power-law forgetting curves, overdue review boosts, mean-reverting difficulty, and Anki-style deck UI.

(function (global) {
  'use strict';

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // --- FSRS-4.5 / 5 Mathematical Constants & Default Weights ---
  // w0-w3: Initial stability for Again, Hard, Good, Easy
  // w4-w5: Initial difficulty & slope
  // w6-w7: Difficulty update step & mean-reversion factor
  // w8-w10: Stability update on success (base, exponent, retrievability factor)
  // w11-w14: Stability update on lapse (base, diff exp, stab exp, retrievability factor)
  // w15: Hard stability penalty modifier
  // w16: Easy stability bonus modifier
  var DEFAULT_FSRS_WEIGHTS = [
    0.40255, 1.18385, 3.173, 15.69105,
    7.1949, 0.5345, 1.4604, 0.0046,
    1.54575, 0.1192, 1.01925,
    1.9395, 0.11, 0.29605, 0.22695,
    0.2315, 2.9898
  ];

  var DECAY_FACTOR = 19 / 81; // ~0.2345679 (Standard FSRS Power-Law Constant)
  var FACTOR_W = 0.5; // Power-law exponent

  var FSRS_CONFIG_KEY = 'fearn_fsrs_config_v1';
  var FSRS_CARDS_KEY = 'fearn_fsrs_cards_v1';

  function loadConfig() {
    var defaultCfg = {
      desiredRetention: 0.90,
      maximumInterval: 36500,
      newCardLimit: 20,
      w: DEFAULT_FSRS_WEIGHTS.slice(),
      rescheduleOnChange: true
    };
    try {
      if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
        var raw = localStorage.getItem(FSRS_CONFIG_KEY);
        if (raw) {
          var parsed = JSON.parse(raw);
          return Object.assign({}, defaultCfg, parsed);
        }
      }
    } catch (e) {
      console.warn('FSRS loadConfig fallback:', e);
    }
    return defaultCfg;
  }

  function saveConfig(cfg) {
    try {
      if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
        localStorage.setItem(FSRS_CONFIG_KEY, JSON.stringify(cfg));
      }
    } catch (e) {
      console.warn('FSRS saveConfig fallback:', e);
    }
  }

  var FSRS_CONFIG = loadConfig();

  // --- DSR Mathematical Core Functions ---

  // Power-Law Retrievability Curve: R(t, S) = (1 + DECAY_FACTOR * (t / S))^(-FACTOR_W)
  function calculateRetrievability(elapsedDays, stability) {
    if (stability <= 0) return 0;
    if (elapsedDays <= 0) return 1.0;
    return Math.pow(1 + DECAY_FACTOR * (elapsedDays / stability), -FACTOR_W);
  }

  // Calculate Scheduled Interval (days) to reach Desired Retention r
  function calculateNextInterval(stability, desiredRetention, maxInterval) {
    if (stability <= 0) return 1;
    var r = Math.max(0.70, Math.min(0.98, desiredRetention || FSRS_CONFIG.desiredRetention));
    var maxInt = maxInterval || FSRS_CONFIG.maximumInterval || 36500;
    // Solve R(I, S) = r  =>  (1 + DECAY_FACTOR * (I / S)) = r^(-1 / FACTOR_W)
    // I = (S / DECAY_FACTOR) * (r^(-1 / FACTOR_W) - 1)
    var interval = (stability / DECAY_FACTOR) * (Math.pow(r, -1 / FACTOR_W) - 1);
    var rounded = Math.round(interval);
    return Math.max(1, Math.min(maxInt, rounded));
  }

  // Initial Values on First Review (New -> Learning/Review)
  function getInitialDSR(grade, w) {
    w = w || FSRS_CONFIG.w;
    var g = Math.max(1, Math.min(4, grade)); // 1: Again, 2: Hard, 3: Good, 4: Easy
    
    // Initial Stability
    var initS = w[g - 1] || DEFAULT_FSRS_WEIGHTS[g - 1];

    // Initial Difficulty: D0(g) = clamp(w4 - e^(w5 * (g - 1)) + 1, 1, 10)
    var rawD = w[4] - Math.exp(w[5] * (g - 1)) + 1;
    var initD = Math.max(1.0, Math.min(10.0, rawD));

    return { stability: initS, difficulty: initD };
  }

  // Update Stability & Difficulty on Subsequent Reviews
  function updateDSR(currentD, currentS, elapsedDays, grade, w) {
    w = w || FSRS_CONFIG.w;
    var g = Math.max(1, Math.min(4, grade));
    var R = calculateRetrievability(elapsedDays, currentS);

    // 1. Next Difficulty Calculation with Mean-Reversion
    var D0_Good = w[4] - Math.exp(w[5] * (3 - 1)) + 1; // Base D for "Good"
    var deltaD = -w[6] * (g - 3);
    var rawNextD = currentD + deltaD;
    var nextD = w[7] * D0_Good + (1 - w[7]) * rawNextD;
    nextD = Math.max(1.0, Math.min(10.0, nextD));

    var nextS = currentS;

    if (g === 1) {
      // 2a. Post-Lapse Stability (Again pressed)
      // S'_f = w11 * (D^-w12) * ((S + 1)^w13 - 1) * e^(w14 * (1 - R))
      var lapseS = w[11] * Math.pow(nextD, -w[12]) * (Math.pow(currentS + 1, w[13]) - 1) * Math.exp(w[14] * (1 - R));
      nextS = Math.max(0.1, lapseS);
    } else {
      // 2b. Successful Recall Stability (Hard, Good, Easy)
      // Overdue bonus: (e^(w10 * (1 - R)) - 1) gives huge boost if recalled when R was very low!
      var hardMod = (g === 2) ? (w[15] || 0.2315) : 1.0;
      var easyMod = (g === 4) ? (w[16] || 2.9898) : 1.0;
      
      var sFactor = Math.exp(w[8]) * (11 - nextD) * Math.pow(currentS, -w[9]) * (Math.exp(w[10] * (1 - R)) - 1) * hardMod * easyMod;
      nextS = currentS * (1 + sFactor);
      nextS = Math.max(currentS * 1.05, nextS); // Guaranteed growth on successful recall
    }

    return {
      stability: Math.max(0.1, nextS),
      difficulty: nextD,
      retrievability: R
    };
  }

  // --- Local Card Store & State Management ---

  function loadCardStore() {
    try {
      if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
        var raw = localStorage.getItem(FSRS_CARDS_KEY);
        if (raw) return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('FSRS loadCardStore fallback:', e);
    }
    return {};
  }

  function saveCardStore(store) {
    try {
      if (typeof localStorage !== 'undefined' && typeof localStorage.getItem === 'function') {
        localStorage.setItem(FSRS_CARDS_KEY, JSON.stringify(store));
      }
    } catch (e) {
      console.warn('FSRS saveCardStore fallback:', e);
    }
  }

  var cardStore = loadCardStore();

  function getCardState(cardId) {
    return cardStore[cardId] || null;
  }

  function recordReview(cardId, grade) {
    var now = Date.now();
    var state = cardStore[cardId];
    var gradeNum = Number(grade) || 3;

    if (!state) {
      // First review
      var init = getInitialDSR(gradeNum, FSRS_CONFIG.w);
      var intervalDays = calculateNextInterval(init.stability, FSRS_CONFIG.desiredRetention, FSRS_CONFIG.maximumInterval);
      state = {
        cardId: cardId,
        difficulty: init.difficulty,
        stability: init.stability,
        reps: 1,
        lapses: (gradeNum === 1) ? 1 : 0,
        lastReview: now,
        nextReview: now + (intervalDays * 86400000),
        intervalDays: intervalDays,
        history: [{ date: now, grade: gradeNum, s: init.stability, d: init.difficulty, interval: intervalDays }]
      };
    } else {
      // Subsequent review
      var elapsedDays = Math.max(0.01, (now - state.lastReview) / 86400000);
      var updated = updateDSR(state.difficulty, state.stability, elapsedDays, gradeNum, FSRS_CONFIG.w);
      var nextIntDays = (gradeNum === 1) ? 1 : calculateNextInterval(updated.stability, FSRS_CONFIG.desiredRetention, FSRS_CONFIG.maximumInterval);

      state.difficulty = updated.difficulty;
      state.stability = updated.stability;
      state.reps = (state.reps || 0) + 1;
      if (gradeNum === 1) state.lapses = (state.lapses || 0) + 1;
      state.lastReview = now;
      state.nextReview = now + (nextIntDays * 86400000);
      state.intervalDays = nextIntDays;
      state.history = state.history || [];
      state.history.push({ date: now, grade: gradeNum, s: updated.stability, d: updated.difficulty, interval: nextIntDays, r: updated.retrievability });
    }

    cardStore[cardId] = state;
    saveCardStore(cardStore);
    return state;
  }

  // Format intervals for button labels (e.g. "<10m", "1.2d", "4d", "2.1mo", "1.5y")
  function formatInterval(days) {
    if (days < 1) return '<10m';
    if (days < 30) return Math.round(days * 10) / 10 + 'd';
    if (days < 365) return Math.round((days / 30.4375) * 10) / 10 + 'mo';
    return Math.round((days / 365.25) * 10) / 10 + 'y';
  }

  // Predict the interval for a given grade on a card
  function predictIntervalForGrade(card, grade) {
    var state = getCardState(card.id);
    if (!state) {
      var init = getInitialDSR(grade, FSRS_CONFIG.w);
      if (grade === 1) return '<10m';
      return formatInterval(calculateNextInterval(init.stability, FSRS_CONFIG.desiredRetention, FSRS_CONFIG.maximumInterval));
    }
    var elapsedDays = Math.max(0.01, (Date.now() - state.lastReview) / 86400000);
    var updated = updateDSR(state.difficulty, state.stability, elapsedDays, grade, FSRS_CONFIG.w);
    if (grade === 1) return '<10m';
    var intDays = calculateNextInterval(updated.stability, FSRS_CONFIG.desiredRetention, FSRS_CONFIG.maximumInterval);
    return formatInterval(intDays);
  }

  // Harvest cards from all curricula sorted by subject
  function getCardsBySubject() {
    var subjectDecks = {};
    var now = Date.now();

    if (global.FEARN_CURRICULA) {
      Object.keys(global.FEARN_CURRICULA).forEach(function (subjKey) {
        var cur = global.FEARN_CURRICULA[subjKey];
        if (!cur || !cur.lessons) return;

        var deckName = (cur.name || subjKey).toUpperCase();
        if (!subjectDecks[subjKey]) {
          subjectDecks[subjKey] = {
            id: subjKey,
            name: cur.name || subjKey,
            cards: [],
            newCount: 0,
            learningCount: 0,
            reviewCount: 0
          };
        }

        Object.keys(cur.lessons).forEach(function (lid) {
          var les = cur.lessons[lid];
          if (les && les.presentation && les.presentation.examples && Array.isArray(les.presentation.examples)) {
            les.presentation.examples.forEach(function (ex, idx) {
              if (ex && ex.target) {
                var srsKey = subjKey + ':' + lid + ':' + idx;
                var srsState = getCardState(srsKey);

                var isDue = srsState ? (srsState.nextReview <= now) : false;
                var reps = srsState ? (srsState.reps || 0) : 0;
                var stability = srsState ? srsState.stability : 0;
                var difficulty = srsState ? srsState.difficulty : 0;
                var r = srsState ? calculateRetrievability((now - srsState.lastReview) / 86400000, stability) : 1.0;

                var card = {
                  id: srsKey,
                  subject: subjKey,
                  subjectName: cur.name || subjKey,
                  lessonId: lid,
                  lessonTitle: les.title || '',
                  target: ex.target,
                  reading: ex.reading || ex.pronunciation || '',
                  translation: ex.translation || '',
                  explanation: les.presentation.explanation ? les.presentation.explanation.slice(0, 220) + '...' : '',
                  mnemonic: (les.presentation.mnemonics && les.presentation.mnemonics[0]) || '',
                  reps: reps,
                  stability: stability,
                  difficulty: difficulty,
                  retrievability: r,
                  isDue: isDue,
                  isNew: reps === 0
                };

                subjectDecks[subjKey].cards.push(card);
                if (reps === 0) subjectDecks[subjKey].newCount++;
                else if (isDue) subjectDecks[subjKey].reviewCount++;
                else subjectDecks[subjKey].learningCount++;
              }
            });
          }
        });
      });
    }

    return subjectDecks;
  }

  // --- Main Interactive SRS Flashcard Modal ---

  function openSRSFlashcardDeck(selectedSubject) {
    var doc = (typeof document !== 'undefined') ? document : (global.document || null);
    if (!doc || !doc.createElement) return;

    var existing = doc.getElementById ? doc.getElementById('fearn-srs-deck-modal') : null;
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }

    var subjectDecks = getCardsBySubject();
    var availableSubjects = Object.keys(subjectDecks);
    if (availableSubjects.length === 0) return;

    var activeSubject = selectedSubject && subjectDecks[selectedSubject] ? selectedSubject : availableSubjects[0];
    var currentView = 'overview'; // 'overview' | 'study' | 'options' | 'custom_study'
    var activeStudyCards = [];
    var currentCardIndex = 0;
    var isCardFlipped = false;

    var overlay = doc.createElement('div');
    overlay.id = 'fearn-srs-deck-modal';
    overlay.style.cssText = 'position:fixed; inset:0; z-index:100000; background:rgba(4,8,20,0.92); backdrop-filter:blur(24px); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px; font-family:system-ui, -apple-system, sans-serif;';

    var container = doc.createElement('div');
    container.style.cssText = 'width:100%; max-width:700px; background:#0a1226; border:1px solid rgba(56,189,248,0.25); border-radius:18px; box-shadow:0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(56,189,248,0.15); display:flex; flex-direction:column; overflow:hidden; animation:fearnModalPop 0.25s ease-out;';

    function renderView() {
      container.innerHTML = '';

      // --- TOP HEADER BAR ---
      var headerBar = doc.createElement('div');
      headerBar.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:14px 20px; border-bottom:1px solid rgba(255,255,255,0.08); background:rgba(15,23,42,0.6);';
      headerBar.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="font-size:1.25rem;">🎴</div>
          <div style="font-size:0.95rem; font-weight:800; color:#38bdf8; letter-spacing:0.5px; text-transform:uppercase;">Fearn Anki/FSRS Suite (DSR Model)</div>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="font-size:0.75rem; color:#38bdf8; background:rgba(56,189,248,0.12); padding:3px 10px; border-radius:12px; border:1px solid rgba(56,189,248,0.25); font-weight:700;">Target: \${Math.round(FSRS_CONFIG.desiredRetention * 100)}% Ret</span>
          <button id="fearn-srs-close-btn" style="background:none; border:none; color:#94a3b8; font-size:1.4rem; cursor:pointer; padding:2px 8px; border-radius:6px; line-height:1;">&times;</button>
        </div>
      `;
      container.appendChild(headerBar);

      // --- SUBJECT SELECTOR TABS ---
      var tabContainer = doc.createElement('div');
      tabContainer.style.cssText = 'display:flex; gap:6px; padding:10px 16px; background:rgba(8,14,30,0.85); overflow-x:auto; border-bottom:1px solid rgba(255,255,255,0.06); scrollbar-width:thin;';

      availableSubjects.forEach(function (sKey) {
        var sDeck = subjectDecks[sKey];
        var tabBtn = doc.createElement('button');
        var isActive = sKey === activeSubject;
        tabBtn.style.cssText = 'padding:6px 14px; border-radius:20px; font-size:0.75rem; font-weight:700; cursor:pointer; white-space:nowrap; border:1px solid ' + (isActive ? '#38bdf8' : 'rgba(255,255,255,0.1)') + '; background:' + (isActive ? 'rgba(56,189,248,0.2)' : 'rgba(255,255,255,0.03)') + '; color:' + (isActive ? '#38bdf8' : '#94a3b8') + '; transition:all 0.15s;';
        tabBtn.textContent = sDeck.name + ' (' + sDeck.cards.length + ')';
        tabBtn.onclick = function () {
          activeSubject = sKey;
          currentView = 'overview';
          renderView();
        };
        tabContainer.appendChild(tabBtn);
      });
      container.appendChild(tabContainer);

      var curDeck = subjectDecks[activeSubject] || { name: activeSubject, cards: [], newCount: 0, learningCount: 0, reviewCount: 0 };

      // --- BODY ROUTER ---
      if (currentView === 'overview') {
        renderOverview(curDeck);
      } else if (currentView === 'study') {
        renderStudy(curDeck);
      } else if (currentView === 'options') {
        renderOptions(curDeck);
      } else if (currentView === 'custom_study') {
        renderCustomStudy(curDeck);
      }

      // Close handler
      var closeBtn = container.querySelector('#fearn-srs-close-btn');
      if (closeBtn) {
        closeBtn.onclick = function () {
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        };
      }
    }

    function renderOverview(deck) {
      var body = doc.createElement('div');
      body.style.cssText = 'padding:32px 24px; display:flex; flex-direction:column; align-items:center; gap:24px; text-align:center;';

      var cappedNew = Math.min(deck.newCount, FSRS_CONFIG.newCardLimit);
      var toReview = Math.max(deck.reviewCount, deck.cards.length > 0 ? Math.min(deck.cards.length, 20) : 0);

      body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div style="font-size:1.45rem; font-weight:800; color:#f8fafc;">\${escapeHtml(deck.name)} Mastery Deck</div>
          <div style="font-size:0.85rem; color:#64748b;">DSR Dynamic Memory Model &bull; Free Spaced Repetition Scheduler</div>
        </div>

        <div style="display:flex; justify-content:center; gap:20px; width:100%; max-width:440px; background:rgba(15,23,42,0.55); padding:16px; border-radius:14px; border:1px solid rgba(255,255,255,0.06);">
          <div style="display:flex; flex-direction:column; gap:4px; flex:1;">
            <span style="font-size:0.75rem; font-weight:700; color:#38bdf8; text-transform:uppercase;">New</span>
            <span style="font-size:1.6rem; font-weight:900; color:#38bdf8;">\${cappedNew}</span>
          </div>
          <div style="width:1px; background:rgba(255,255,255,0.1);"></div>
          <div style="display:flex; flex-direction:column; gap:4px; flex:1;">
            <span style="font-size:0.75rem; font-weight:700; color:#fbbf24; text-transform:uppercase;">Learning</span>
            <span style="font-size:1.6rem; font-weight:900; color:#fbbf24;">\${deck.learningCount}</span>
          </div>
          <div style="width:1px; background:rgba(255,255,255,0.1);"></div>
          <div style="display:flex; flex-direction:column; gap:4px; flex:1;">
            <span style="font-size:0.75rem; font-weight:700; color:#4ade80; text-transform:uppercase;">To Review</span>
            <span style="font-size:1.6rem; font-weight:900; color:#4ade80;">\${toReview}</span>
          </div>
        </div>

        <button id="fearn-srs-study-btn" style="width:100%; max-width:340px; padding:14px 24px; background:linear-gradient(135deg, #0284c7, #38bdf8); color:#031024; font-size:1.05rem; font-weight:900; border:none; border-radius:12px; cursor:pointer; box-shadow:0 8px 24px rgba(56,189,248,0.35); transition:all 0.2s;">
          Study Now (\${cappedNew + toReview} Cards)
        </button>

        <div style="display:flex; justify-content:center; gap:18px; margin-top:6px;">
          <button id="fearn-srs-options-btn" style="background:none; border:none; color:#94a3b8; font-size:0.82rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:5px;">⚙️ Options & FSRS Weights</button>
          <span style="color:#334155;">&bull;</span>
          <button id="fearn-srs-custom-btn" style="background:none; border:none; color:#94a3b8; font-size:0.82rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:5px;">🎯 Custom Study</button>
        </div>
      `;

      container.appendChild(body);

      var studyBtn = body.querySelector('#fearn-srs-study-btn');
      if (studyBtn) {
        studyBtn.onclick = function () {
          activeStudyCards = deck.cards.slice(0, FSRS_CONFIG.newCardLimit + 20);
          currentCardIndex = 0;
          isCardFlipped = false;
          currentView = 'study';
          renderView();
        };
      }

      var optionsBtn = body.querySelector('#fearn-srs-options-btn');
      if (optionsBtn) {
        optionsBtn.onclick = function () {
          currentView = 'options';
          renderView();
        };
      }

      var customBtn = body.querySelector('#fearn-srs-custom-btn');
      if (customBtn) {
        customBtn.onclick = function () {
          currentView = 'custom_study';
          renderView();
        };
      }
    }

    function renderStudy(deck) {
      var body = doc.createElement('div');
      body.style.cssText = 'padding:20px 24px; display:flex; flex-direction:column; align-items:center; gap:16px;';

      if (!activeStudyCards || activeStudyCards.length === 0 || currentCardIndex >= activeStudyCards.length) {
        body.innerHTML = `
          <div style="padding:40px 20px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:14px;">
            <div style="font-size:2.5rem;">🎉</div>
            <div style="font-size:1.3rem; font-weight:800; color:#38bdf8;">Session Complete!</div>
            <div style="font-size:0.85rem; color:#94a3b8;">All cards scheduled for review in this session have been updated according to your FSRS forgetting curve.</div>
            <button id="fearn-srs-finish-btn" style="margin-top:10px; padding:10px 24px; background:#0284c7; color:#fff; border:none; border-radius:10px; font-weight:800; cursor:pointer;">Return to Deck Overview</button>
          </div>
        `;
        container.appendChild(body);
        var finBtn = body.querySelector('#fearn-srs-finish-btn');
        if (finBtn) {
          finBtn.onclick = function () {
            currentView = 'overview';
            renderView();
          };
        }
        return;
      }

      var card = activeStudyCards[currentCardIndex];

      // Progress bar & DSR telemetry
      var progPct = Math.round((currentCardIndex / activeStudyCards.length) * 100);
      var progBar = doc.createElement('div');
      progBar.style.cssText = 'width:100%; display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:#64748b; margin-bottom:4px;';
      progBar.innerHTML = `
        <span>Card \${currentCardIndex + 1} of \${activeStudyCards.length}</span>
        <span>\${card.reps > 0 ? 'S: ' + (Math.round(card.stability * 10) / 10) + 'd | D: ' + (Math.round(card.difficulty * 10) / 10) + ' | R: ' + Math.round(card.retrievability * 100) + '%' : 'New Card'}</span>
        <span>\${progPct}% Complete</span>
      `;
      body.appendChild(progBar);

      // Card Container (3D Flip Box)
      var cardBox = doc.createElement('div');
      cardBox.style.cssText = 'width:100%; min-height:260px; background:linear-gradient(145deg, #111d3d, #0d1730); border:1px solid rgba(56,189,248,0.3); border-radius:16px; padding:28px 20px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; cursor:pointer; user-select:none; box-shadow:0 12px 30px rgba(0,0,0,0.5); transition:all 0.2s;';

      if (!isCardFlipped) {
        // Front of Card
        cardBox.innerHTML = `
          <div style="font-size:0.75rem; font-weight:700; color:#38bdf8; text-transform:uppercase; letter-spacing:1px; margin-bottom:12px;">\${escapeHtml(card.subjectName)} &bull; \${escapeHtml(card.lessonId)}</div>
          <div style="font-size:2rem; font-weight:900; color:#f8fafc; margin-bottom:14px; line-height:1.3;">\${escapeHtml(card.target)}</div>
          <div style="font-size:0.8rem; color:#64748b; display:flex; align-items:center; gap:6px;">
            <span>Tap card or press <b>Space</b> to reveal answer</span>
          </div>
        `;
      } else {
        // Back of Card (Flipped)
        cardBox.innerHTML = `
          <div style="font-size:0.75rem; font-weight:700; color:#38bdf8; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">\${escapeHtml(card.subjectName)}</div>
          <div style="font-size:1.8rem; font-weight:900; color:#38bdf8; margin-bottom:6px;">\${escapeHtml(card.target)}</div>
          \${card.reading ? '<div style="font-size:1.05rem; font-weight:600; color:#cbd5e1; margin-bottom:10px;">' + escapeHtml(card.reading) + '</div>' : ''}
          <div style="font-size:1.15rem; font-weight:800; color:#f8fafc; margin-bottom:14px; background:rgba(56,189,248,0.08); padding:8px 16px; border-radius:10px; border:1px solid rgba(56,189,248,0.2);">\${escapeHtml(card.translation)}</div>
          \${card.mnemonic ? '<div style="font-size:0.8rem; color:#fbbf24; background:rgba(251,191,36,0.1); padding:6px 12px; border-radius:8px; margin-top:6px; border:1px solid rgba(251,191,36,0.2);">💡 Mnemonic: ' + escapeHtml(card.mnemonic) + '</div>' : ''}
        `;
      }

      cardBox.onclick = function () {
        isCardFlipped = !isCardFlipped;
        renderView();
      };

      body.appendChild(cardBox);

      // Bottom Action Controls
      var actionRow = doc.createElement('div');
      actionRow.style.cssText = 'width:100%; display:flex; gap:10px; justify-content:center; margin-top:8px;';

      if (!isCardFlipped) {
        actionRow.innerHTML = `
          <button id="fearn-srs-flip-btn" style="width:100%; padding:12px; background:rgba(56,189,248,0.15); border:1px solid #38bdf8; color:#38bdf8; font-weight:800; font-size:0.95rem; border-radius:10px; cursor:pointer;">
            Show Answer (Space)
          </button>
        `;
        body.appendChild(actionRow);
        var flipBtn = actionRow.querySelector('#fearn-srs-flip-btn');
        if (flipBtn) {
          flipBtn.onclick = function () {
            isCardFlipped = true;
            renderView();
          };
        }
      } else {
        // Dynamic mathematically predicted intervals from FSRS
        var int1 = predictIntervalForGrade(card, 1);
        var int2 = predictIntervalForGrade(card, 2);
        var int3 = predictIntervalForGrade(card, 3);
        var int4 = predictIntervalForGrade(card, 4);

        actionRow.innerHTML = `
          <button id="grade-1" style="flex:1; padding:10px 4px; background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.4); color:#ef4444; border-radius:10px; cursor:pointer; font-size:0.8rem; font-weight:800; display:flex; flex-direction:column; align-items:center; gap:2px;">
            <span>Again</span>
            <span style="font-size:0.68rem; opacity:0.85;">\${int1} [1]</span>
          </button>
          <button id="grade-2" style="flex:1; padding:10px 4px; background:rgba(251,191,36,0.15); border:1px solid rgba(251,191,36,0.4); color:#fbbf24; border-radius:10px; cursor:pointer; font-size:0.8rem; font-weight:800; display:flex; flex-direction:column; align-items:center; gap:2px;">
            <span>Hard</span>
            <span style="font-size:0.68rem; opacity:0.85;">\${int2} [2]</span>
          </button>
          <button id="grade-3" style="flex:1; padding:10px 4px; background:rgba(56,189,248,0.15); border:1px solid rgba(56,189,248,0.4); color:#38bdf8; border-radius:10px; cursor:pointer; font-size:0.8rem; font-weight:800; display:flex; flex-direction:column; align-items:center; gap:2px;">
            <span>Good</span>
            <span style="font-size:0.68rem; opacity:0.85;">\${int3} [3]</span>
          </button>
          <button id="grade-4" style="flex:1; padding:10px 4px; background:rgba(74,222,128,0.15); border:1px solid rgba(74,222,128,0.4); color:#4ade80; border-radius:10px; cursor:pointer; font-size:0.8rem; font-weight:800; display:flex; flex-direction:column; align-items:center; gap:2px;">
            <span>Easy</span>
            <span style="font-size:0.68rem; opacity:0.85;">\${int4} [4]</span>
          </button>
        `;
        body.appendChild(actionRow);

        function handleGrade(grade) {
          recordReview(card.id, grade);
          currentCardIndex++;
          isCardFlipped = false;
          renderView();
        }

        actionRow.querySelector('#grade-1').onclick = function () { handleGrade(1); };
        actionRow.querySelector('#grade-2').onclick = function () { handleGrade(2); };
        actionRow.querySelector('#grade-3').onclick = function () { handleGrade(3); };
        actionRow.querySelector('#grade-4').onclick = function () { handleGrade(4); };
      }

      container.appendChild(body);
    }

    function renderOptions(deck) {
      var body = doc.createElement('div');
      body.style.cssText = 'padding:24px; display:flex; flex-direction:column; gap:18px; max-height:80vh; overflow-y:auto;';

      body.innerHTML = `
        <div style="font-size:1.15rem; font-weight:800; color:#38bdf8; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
          <span>⚙️ FSRS Settings & Memory Model</span>
          <span style="font-size:0.75rem; color:#4ade80; background:rgba(74,222,128,0.1); padding:2px 8px; border-radius:6px;">Active DSR Engine</span>
        </div>
        
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:#f8fafc;">Desired Retention (Target Probability)</div>
            <div style="font-size:0.75rem; color:#64748b;">Higher (e.g. 95%) = shorter intervals, more reps; Lower (85%) = fewer reps</div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <input type="range" id="fsrs-retention-slider" min="75" max="97" value="\${Math.round(FSRS_CONFIG.desiredRetention * 100)}" style="cursor:pointer;" />
            <span id="fsrs-retention-val" style="font-weight:800; color:#38bdf8; min-width:38px;">\${Math.round(FSRS_CONFIG.desiredRetention * 100)}%</span>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:#f8fafc;">Maximum Interval (Days)</div>
            <div style="font-size:0.75rem; color:#64748b;">Hard upper bound on scheduled review spacing</div>
          </div>
          <input type="number" id="fsrs-max-interval" value="\${FSRS_CONFIG.maximumInterval}" style="width:90px; background:#0f172a; border:1px solid rgba(255,255,255,0.15); color:#fff; border-radius:6px; padding:4px 8px; font-weight:800; text-align:right;" />
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:#f8fafc;">Daily New Card Cap</div>
            <div style="font-size:0.75rem; color:#64748b;">Limit new material introduced per session per deck</div>
          </div>
          <input type="number" id="fsrs-new-cap" value="\${FSRS_CONFIG.newCardLimit}" style="width:70px; background:#0f172a; border:1px solid rgba(255,255,255,0.15); color:#fff; border-radius:6px; padding:4px 8px; font-weight:800; text-align:right;" />
        </div>

        <div style="background:rgba(15,23,42,0.65); padding:14px; border-radius:10px; border:1px solid rgba(255,255,255,0.06); display:flex; flex-direction:column; gap:6px;">
          <div style="font-size:0.75rem; font-weight:700; color:#94a3b8;">FSRS Mathematical Weights (w0..w16)</div>
          <div style="font-size:0.68rem; font-family:monospace; color:#64748b; line-height:1.4; word-break:break-all;">\${FSRS_CONFIG.w.join(', ')}</div>
        </div>

        <button id="fearn-srs-save-opts-btn" style="padding:12px 20px; background:linear-gradient(135deg, #0284c7, #38bdf8); color:#031024; border:none; border-radius:10px; font-weight:900; cursor:pointer;">Save & Apply Settings</button>
      `;

      container.appendChild(body);

      var slider = body.querySelector('#fsrs-retention-slider');
      var sliderVal = body.querySelector('#fsrs-retention-val');
      if (slider && sliderVal) {
        slider.oninput = function () {
          sliderVal.textContent = slider.value + '%';
        };
      }

      var saveBtn = body.querySelector('#fearn-srs-save-opts-btn');
      if (saveBtn) {
        saveBtn.onclick = function () {
          if (slider) FSRS_CONFIG.desiredRetention = Number(slider.value) / 100;
          var maxInp = body.querySelector('#fsrs-max-interval');
          if (maxInp) FSRS_CONFIG.maximumInterval = Number(maxInp.value) || 36500;
          var newCapInp = body.querySelector('#fsrs-new-cap');
          if (newCapInp) FSRS_CONFIG.newCardLimit = Number(newCapInp.value) || 20;

          saveConfig(FSRS_CONFIG);
          currentView = 'overview';
          renderView();
        };
      }
    }

    function renderCustomStudy(deck) {
      var body = doc.createElement('div');
      body.style.cssText = 'padding:24px; display:flex; flex-direction:column; gap:18px;';

      body.innerHTML = `
        <div style="font-size:1.1rem; font-weight:800; color:#38bdf8; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:8px;">🎯 Custom Study Session</div>
        <div style="font-size:0.85rem; color:#94a3b8;">Choose how you want to adjust your study session for <b>\${escapeHtml(deck.name)}</b>:</div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          <button id="custom-extra-new" style="padding:12px 16px; background:rgba(56,189,248,0.1); border:1px solid rgba(56,189,248,0.25); color:#38bdf8; font-weight:800; font-size:0.85rem; border-radius:10px; text-align:left; cursor:pointer;">
            ➕ Increase today's new card limit (+20 Cards)
          </button>
          <button id="custom-review-ahead" style="padding:12px 16px; background:rgba(74,222,128,0.1); border:1px solid rgba(74,222,128,0.25); color:#4ade80; font-weight:800; font-size:0.85rem; border-radius:10px; text-align:left; cursor:pointer;">
            ⏩ Review ahead by 3 days
          </button>
          <button id="custom-study-all" style="padding:12px 16px; background:rgba(251,191,36,0.1); border:1px solid rgba(251,191,36,0.25); color:#fbbf24; font-weight:800; font-size:0.85rem; border-radius:10px; text-align:left; cursor:pointer;">
            🎴 Study entire deck (\${deck.cards.length} Cards)
          </button>
        </div>

        <button id="fearn-srs-custom-back-btn" style="padding:10px 20px; background:rgba(255,255,255,0.05); color:#94a3b8; border:1px solid rgba(255,255,255,0.1); border-radius:10px; font-weight:800; cursor:pointer;">Cancel</button>
      `;

      container.appendChild(body);

      body.querySelector('#custom-extra-new').onclick = function () {
        FSRS_CONFIG.newCardLimit += 20;
        activeStudyCards = deck.cards.slice(0, FSRS_CONFIG.newCardLimit + 20);
        currentCardIndex = 0;
        isCardFlipped = false;
        currentView = 'study';
        renderView();
      };

      body.querySelector('#custom-review-ahead').onclick = function () {
        activeStudyCards = deck.cards.slice(0);
        currentCardIndex = 0;
        isCardFlipped = false;
        currentView = 'study';
        renderView();
      };

      body.querySelector('#custom-study-all').onclick = function () {
        activeStudyCards = deck.cards.slice(0);
        currentCardIndex = 0;
        isCardFlipped = false;
        currentView = 'study';
        renderView();
      };

      body.querySelector('#fearn-srs-custom-back-btn').onclick = function () {
        currentView = 'overview';
        renderView();
      };
    }

    renderView();
    overlay.appendChild(container);
    doc.body.appendChild(overlay);
  }

  // Bind to Global FEARN Object
  global.FEARN = global.FEARN || {};
  global.FEARN.srs = {
    calculateRetrievability: calculateRetrievability,
    calculateNextInterval: calculateNextInterval,
    getInitialDSR: getInitialDSR,
    updateDSR: updateDSR,
    recordReview: recordReview,
    getCardState: getCardState,
    getConfig: function () { return FSRS_CONFIG; },
    saveConfig: saveConfig,
    DEFAULT_WEIGHTS: DEFAULT_FSRS_WEIGHTS
  };
  global.FEARN.openSRSFlashcardDeck = openSRSFlashcardDeck;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      openSRSFlashcardDeck: openSRSFlashcardDeck,
      calculateRetrievability: calculateRetrievability,
      calculateNextInterval: calculateNextInterval,
      updateDSR: updateDSR,
      recordReview: recordReview
    };
  }
})(typeof window !== 'undefined' ? window : global);

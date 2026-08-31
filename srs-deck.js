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

  // Harvest cards from all curricula and master lexicon sorted by subject
  function getCardsBySubject() {
    var subjectDecks = {};
    var now = Date.now();

    // 1. Harvest from Curricula
    var curricula = global.FEARN_CURRICULA || (typeof window !== 'undefined' ? window.FEARN_CURRICULA : null);
    if (curricula) {
      Object.keys(curricula).forEach(function (subjKey) {
        var cur = curricula[subjKey];
        if (!cur || !cur.lessons) return;

        if (!subjectDecks[subjKey]) {
          subjectDecks[subjKey] = {
            id: subjKey,
            name: cur.name || subjKey,
            description: (cur.description || cur.goal || 'Complete mastery curriculum & spaced repetition lexicon.') + ' (A1-C2+ / University Standard)',
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
                  explanation: les.presentation.explanation ? les.presentation.explanation.slice(0, 260) + '...' : '',
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

    // 2. Harvest from Master Omni Dictionary
    var dict = global.FEARN_DICTIONARY || (typeof window !== 'undefined' ? window.FEARN_DICTIONARY : null);
    if (dict) {
      Object.keys(dict).forEach(function (subjKey) {
        var entries = dict[subjKey];
        if (!Array.isArray(entries)) return;

        if (!subjectDecks[subjKey]) {
          var formalName = subjKey.charAt(0).toUpperCase() + subjKey.slice(1).replace(/-/g, ' ');
          subjectDecks[subjKey] = {
            id: subjKey,
            name: formalName,
            description: 'Master Spaced Repetition Lexicon & Comprehensive Dictionary.',
            cards: [],
            newCount: 0,
            learningCount: 0,
            reviewCount: 0
          };
        }

        entries.forEach(function (entry, idx) {
          if (entry && entry.term) {
            var dictSrsKey = subjKey + ':dict:' + idx;
            var srsState = getCardState(dictSrsKey);

            var isDue = srsState ? (srsState.nextReview <= now) : false;
            var reps = srsState ? (srsState.reps || 0) : 0;
            var stability = srsState ? srsState.stability : 0;
            var difficulty = srsState ? srsState.difficulty : 0;
            var r = srsState ? calculateRetrievability((now - srsState.lastReview) / 86400000, stability) : 1.0;

            var exStr = '';
            if (entry.examples && Array.isArray(entry.examples) && entry.examples[0]) {
              exStr = entry.examples[0].target + (entry.examples[0].translation ? ' — ' + entry.examples[0].translation : '');
            } else if (entry.ex) {
              exStr = entry.ex;
            }

            var card = {
              id: dictSrsKey,
              subject: subjKey,
              subjectName: subjectDecks[subjKey].name,
              lessonId: 'Dictionary • ' + (entry.category || entry.level || 'Master Lexicon'),
              lessonTitle: entry.category || entry.level || 'Master Lexicon',
              target: entry.term,
              reading: entry.pronunciation || entry.pron || '',
              translation: entry.definition + (entry.partOfSpeech ? ' [' + entry.partOfSpeech + ']' : ''),
              explanation: exStr,
              mnemonic: entry.notes || (entry.synonyms ? 'Synonyms: ' + entry.synonyms.join(', ') : '') || entry.etym || '',
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
    var currentView = selectedSubject ? 'overview' : 'deck_select'; // 'deck_select' | 'overview' | 'study' | 'options' | 'custom_study'
    var activeStudyCards = [];
    var currentCardIndex = 0;
    var isCardFlipped = false;
    var deckFilterCategory = 'all';
    var deckSearchQuery = '';

    var overlay = doc.createElement('div');
    overlay.className = 'fearn-srs-overlay';
    overlay.id = 'fearn-srs-deck-modal';

    var container = doc.createElement('div');
    container.className = 'fearn-srs-container fearn-glass';

    function getSubjectIcon(sKey) {
      var icons = {
        'korean': '🇰🇷', 'japanese': '🇯🇵', 'mandarin': '🇨🇳', 'cantonese': '🇭🇰', 'vietnamese': '🇻🇳',
        'spanish': '🇪🇸', 'argentine-spanish': '🇦🇷', 'french': '🇫🇷', 'german': '🇩🇪', 'brazilian-portuguese': '🇧🇷',
        'romanian': '🇷🇴', 'turkish': '🇹🇷', 'swahili': '🇹🇿', 'russian': '🇷🇺', 'ukrainian': '🇺🇦',
        'arabic': '🇸🇦', 'urdu': '🇵🇰', 'hindi': '🇮🇳', 'amharic': '🇪🇹', 'english': '🇬🇧',
        'cs110': '💻', 'b110': '📊', 'b111': '🧾',
        'mentalmath': '⚡', 'typing': '⌨️', 'songwriting': '🎵', 'scrabble': '🔠', 'morse': '📡', 'chess': '♟️',
        'fitness': '🏋️'
      };
      return icons[sKey] || '🎴';
    }

    function getSubjectCategory(sKey) {
      if (['cs110', 'b110', 'b111'].indexOf(sKey) !== -1) return 'university';
      if (['mentalmath', 'typing', 'songwriting', 'scrabble', 'morse', 'chess'].indexOf(sKey) !== -1) return 'skills';
      if (sKey === 'fitness') return 'fitness';
      return 'languages';
    }

    function renderView() {
      container.innerHTML = '';

      // --- TOP HEADER BAR ---
      var headerBar = doc.createElement('div');
      headerBar.className = 'fearn-srs-header';
      
      var isDeckSelect = (currentView === 'deck_select');
      var leftHeaderHTML = isDeckSelect
        ? `<div style="display:flex; align-items:center; gap:10px;">
             <div style="font-size:1.25rem;">🎴</div>
             <div class="fearn-srs-title">Fearn Flashcard Decks</div>
           </div>`
        : `<div style="display:flex; align-items:center; gap:10px;">
             <button id="fearn-srs-nav-all-decks" class="fearn-srs-ghost-btn" style="padding:4px 10px; font-size:0.75rem;">← All Decks</button>
             <div class="fearn-srs-title">${escapeHtml(subjectDecks[activeSubject] ? subjectDecks[activeSubject].name : 'Deck')}</div>
           </div>`;

      headerBar.innerHTML = `
        ${leftHeaderHTML}
        <div style="display:flex; align-items:center; gap:12px;">
          <span class="fearn-srs-retention-badge">Target: ${Math.round(FSRS_CONFIG.desiredRetention * 100)}% Ret</span>
          <button id="fearn-srs-close-btn" class="fearn-srs-close-btn" aria-label="Close Flashcards">&times;</button>
        </div>
      `;
      container.appendChild(headerBar);

      var allDecksBtn = headerBar.querySelector('#fearn-srs-nav-all-decks');
      if (allDecksBtn) {
        allDecksBtn.onclick = function () {
          currentView = 'deck_select';
          renderView();
        };
      }

      var curDeck = subjectDecks[activeSubject] || { name: activeSubject, cards: [], newCount: 0, learningCount: 0, reviewCount: 0 };

      // --- BODY ROUTER ---
      if (currentView === 'deck_select') {
        renderDeckPicker();
      } else if (currentView === 'overview') {
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
          if (typeof window !== 'undefined') window.removeEventListener('keydown', handleGlobalSRSKey);
        };
      }
    }

    function handleGlobalSRSKey(e) {
      if (!overlay.parentNode) {
        if (typeof window !== 'undefined') window.removeEventListener('keydown', handleGlobalSRSKey);
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        if (currentView === 'study' || currentView === 'options' || currentView === 'custom_study') {
          currentView = 'overview';
          renderView();
        } else if (currentView === 'overview') {
          currentView = 'deck_select';
          renderView();
        } else {
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
          if (typeof window !== 'undefined') window.removeEventListener('keydown', handleGlobalSRSKey);
        }
        return;
      }
      if (currentView === 'study') {
        if (e.key === ' ' || e.key === 'Enter') {
          if (!isCardFlipped) {
            e.preventDefault();
            isCardFlipped = true;
            renderView();
          }
        } else if (isCardFlipped && ['1', '2', '3', '4'].indexOf(e.key) !== -1) {
          e.preventDefault();
          var grade = parseInt(e.key, 10);
          var card = activeStudyCards[currentCardIndex];
          if (card) {
            recordReview(card.id, grade);
            currentCardIndex++;
            isCardFlipped = false;
            renderView();
          }
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleGlobalSRSKey);
    }

    function renderDeckPicker() {
      var body = doc.createElement('div');
      body.className = 'fearn-srs-body';

      var filteredKeys = availableSubjects.filter(function (sKey) {
        var d = subjectDecks[sKey];
        var cat = getSubjectCategory(sKey);
        if (deckFilterCategory !== 'all' && cat !== deckFilterCategory) return false;
        if (deckSearchQuery) {
          var q = deckSearchQuery.toLowerCase();
          return d.name.toLowerCase().indexOf(q) !== -1 || sKey.toLowerCase().indexOf(q) !== -1;
        }
        return true;
      });

      body.innerHTML = `
        <div class="fearn-srs-search-bar">
          <input type="search" id="fearn-srs-deck-search" class="fearn-srs-search-input" placeholder="Search across all 30 Fronds & Subject Decks…" value="${escapeHtml(deckSearchQuery)}" />
          <div class="fearn-srs-filter-bar">
            <button class="fearn-srs-filter-btn${deckFilterCategory === 'all' ? ' is-active' : ''}" data-cat="all">All (30)</button>
            <button class="fearn-srs-filter-btn${deckFilterCategory === 'languages' ? ' is-active' : ''}" data-cat="languages">Languages (20)</button>
            <button class="fearn-srs-filter-btn${deckFilterCategory === 'university' ? ' is-active' : ''}" data-cat="university">University (3)</button>
            <button class="fearn-srs-filter-btn${deckFilterCategory === 'skills' ? ' is-active' : ''}" data-cat="skills">Skills (6)</button>
            <button class="fearn-srs-filter-btn${deckFilterCategory === 'fitness' ? ' is-active' : ''}" data-cat="fitness">Fitness (1)</button>
          </div>
        </div>

        <div class="fearn-srs-deck-grid" id="fearn-srs-deck-grid-container"></div>
      `;

      container.appendChild(body);

      // Bind search input
      var searchInp = body.querySelector('#fearn-srs-deck-search');
      if (searchInp) {
        searchInp.oninput = function () {
          deckSearchQuery = searchInp.value.trim();
          renderView();
          var newSearch = container.querySelector('#fearn-srs-deck-search');
          if (newSearch) {
            newSearch.focus();
            newSearch.setSelectionRange(newSearch.value.length, newSearch.value.length);
          }
        };
      }

      // Bind category filter buttons
      body.querySelectorAll('.fearn-srs-filter-btn').forEach(function (btn) {
        btn.onclick = function () {
          deckFilterCategory = btn.getAttribute('data-cat') || 'all';
          renderView();
        };
      });

      // Render Deck Cards Grid
      var gridContainer = body.querySelector('#fearn-srs-deck-grid-container');
      if (gridContainer) {
        if (filteredKeys.length === 0) {
          gridContainer.innerHTML = '<div style="grid-column: 1 / -1; text-align:center; padding:32px; color:var(--text-sub);">No flashcard decks match your search filter.</div>';
        } else {
          filteredKeys.forEach(function (sKey) {
            var sDeck = subjectDecks[sKey];
            var cardEl = doc.createElement('div');
            cardEl.className = 'fearn-srs-deck-card';
            cardEl.innerHTML = `
              <div class="fearn-srs-deck-card-top">
                <span class="fearn-srs-deck-icon">${getSubjectIcon(sKey)}</span>
                <div>
                  <div class="fearn-srs-deck-name">${escapeHtml(sDeck.name)}</div>
                  <div style="font-size:0.72rem; color:var(--text-faint);">${sDeck.cards.length} Total Cards</div>
                </div>
              </div>
              <div class="fearn-srs-deck-counts-row">
                <span class="fearn-srs-deck-pill" style="background:rgba(56,189,248,0.15); color:var(--lang-1, #38bdf8); border:1px solid rgba(56,189,248,0.3);">${sDeck.newCount} New</span>
                <span class="fearn-srs-deck-pill" style="background:rgba(251,191,36,0.15); color:var(--fit-1, #fbbf24); border:1px solid rgba(251,191,36,0.3);">${sDeck.learningCount} Lrn</span>
                <span class="fearn-srs-deck-pill" style="background:rgba(52,211,153,0.15); color:var(--success, #34d399); border:1px solid rgba(52,211,153,0.3);">${sDeck.reviewCount} Due</span>
              </div>
            `;
            cardEl.onclick = function () {
              activeSubject = sKey;
              currentView = 'overview';
              renderView();
            };
            gridContainer.appendChild(cardEl);
          });
        }
      }
    }

    function renderOverview(deck) {
      var body = doc.createElement('div');
      body.className = 'fearn-srs-body';
      body.style.cssText = 'text-align:center; align-items:center;';

      var cappedNew = Math.min(deck.newCount, FSRS_CONFIG.newCardLimit);
      var toReview = Math.max(deck.reviewCount, deck.cards.length > 0 ? Math.min(deck.cards.length, 20) : 0);

      body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div style="font-size:2.2rem;">${getSubjectIcon(activeSubject)}</div>
          <div class="fearn-srs-deck-title">${escapeHtml(deck.name)} Mastery Deck</div>
          <div style="font-size:0.85rem; color:var(--text-faint, #64748b);">DSR Dynamic Memory Model &bull; Free Spaced Repetition Scheduler</div>
          <div class="fearn-srs-deck-desc" style="max-width:520px; margin-top:2px;">${escapeHtml(deck.description || 'Comprehensive curriculum & spaced repetition vocabulary.')}</div>
        </div>

        <div class="fearn-srs-counts-grid" style="width:100%; max-width:460px;">
          <div class="fearn-srs-count-col" style="flex:1;">
            <span class="fearn-srs-count-label" style="color:var(--lang-1, #38bdf8);">New</span>
            <span class="fearn-srs-count-num" style="color:var(--lang-1, #38bdf8);">${cappedNew}</span>
          </div>
          <div style="width:1px; background:var(--glass-border);"></div>
          <div class="fearn-srs-count-col" style="flex:1;">
            <span class="fearn-srs-count-label" style="color:var(--fit-1, #fbbf24);">Learning</span>
            <span class="fearn-srs-count-num" style="color:var(--fit-1, #fbbf24);">${deck.learningCount}</span>
          </div>
          <div style="width:1px; background:var(--glass-border);"></div>
          <div class="fearn-srs-count-col" style="flex:1;">
            <span class="fearn-srs-count-label" style="color:var(--success, #34d399);">To Review</span>
            <span class="fearn-srs-count-num" style="color:var(--success, #34d399);">${toReview}</span>
          </div>
        </div>

        <button id="fearn-srs-study-btn" class="fearn-srs-primary-btn" style="width:100%; max-width:360px;">
          Study Now (${cappedNew + toReview} Cards)
        </button>

        <div style="display:flex; justify-content:center; gap:18px; margin-top:6px;">
          <button id="fearn-srs-options-btn" class="fearn-srs-ghost-btn" style="display:flex; align-items:center; gap:5px;">⚙️ Options & Weights</button>
          <button id="fearn-srs-custom-btn" class="fearn-srs-ghost-btn" style="display:flex; align-items:center; gap:5px;">🎯 Custom Study</button>
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
      body.className = 'fearn-srs-body';

      if (!activeStudyCards || activeStudyCards.length === 0 || currentCardIndex >= activeStudyCards.length) {
        body.innerHTML = `
          <div style="padding:40px 20px; text-align:center; display:flex; flex-direction:column; align-items:center; gap:14px;">
            <div style="font-size:2.8rem;">🎉</div>
            <div style="font-size:1.4rem; font-weight:900; color:var(--lang-1, #38bdf8);">Session Complete!</div>
            <div style="font-size:0.9rem; color:var(--text-sub, #94a3b8); max-width:440px;">All cards scheduled for review in this session have been updated according to your FSRS memory curve.</div>
            <button id="fearn-srs-finish-btn" class="fearn-srs-primary-btn" style="margin-top:10px;">Return to Deck Overview</button>
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

      // Top study navigation & telemetry bar
      var topNav = doc.createElement('div');
      topNav.style.cssText = 'width:100%; display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;';
      
      var progPct = Math.round((currentCardIndex / activeStudyCards.length) * 100);
      topNav.innerHTML = `
        <button id="fearn-srs-back-decks-btn" class="fearn-srs-ghost-btn" style="padding:4px 10px; font-size:0.75rem;">← Decks</button>
        <span style="font-size:0.78rem; font-weight:700; color:var(--text-sub);">Card ${currentCardIndex + 1} of ${activeStudyCards.length} (${progPct}%)</span>
        <span style="font-size:0.72rem; color:var(--text-faint);">${card.reps > 0 ? 'S: ' + (Math.round(card.stability * 10) / 10) + 'd | R: ' + Math.round(card.retrievability * 100) + '%' : 'New Card'}</span>
      `;
      body.appendChild(topNav);

      var backDeckBtn = topNav.querySelector('#fearn-srs-back-decks-btn');
      if (backDeckBtn) {
        backDeckBtn.onclick = function () {
          currentView = 'overview';
          renderView();
        };
      }

      // Card Container (3D Flip Box)
      var cardBox = doc.createElement('div');
      cardBox.className = 'fearn-srs-card-box';

      var frontTarget = (global.FEARN && global.FEARN.stripMarkdown) ? escapeHtml(global.FEARN.stripMarkdown(card.target)) : escapeHtml(card.target);
      var backTarget = (global.FEARN && global.FEARN.stripMarkdown) ? escapeHtml(global.FEARN.stripMarkdown(card.target)) : escapeHtml(card.target);
      var formattedTrans = (global.FEARN && global.FEARN.formatText) ? global.FEARN.formatText(card.translation) : escapeHtml(card.translation);
      var formattedMnem = (global.FEARN && global.FEARN.formatText && card.mnemonic) ? global.FEARN.formatText(card.mnemonic) : escapeHtml(card.mnemonic);

      if (!isCardFlipped) {
        // Front of Card
        cardBox.innerHTML = `
          <div class="fearn-srs-card-badge">${escapeHtml(card.subjectName)} &bull; ${escapeHtml(card.lessonId)}</div>
          <div style="display:flex; align-items:center; justify-content:center; gap:12px; margin-bottom:12px;">
            <div class="fearn-srs-target" style="margin-bottom:0;">${frontTarget}</div>
            <button id="fearn-card-audio-btn" class="fearn-speak-btn" style="background:var(--glass-bg-soft); border:1px solid var(--glass-border); border-radius:50%; width:38px; height:38px; cursor:pointer; font-size:1.1rem; display:inline-flex; align-items:center; justify-content:center;" title="Listen to pronunciation" aria-label="Listen to pronunciation">🔊</button>
          </div>
          <div style="font-size:0.82rem; color:var(--text-sub); display:flex; align-items:center; gap:6px; margin-top:8px;">
            <span>🔄 Tap card or press <b>Space</b> to reveal answer</span>
          </div>
        `;
      } else {
        // Back of Card (Flipped)
        cardBox.innerHTML = `
          <div class="fearn-srs-card-badge">${escapeHtml(card.subjectName)}</div>
          <div style="display:flex; align-items:center; justify-content:center; gap:12px; margin-bottom:6px;">
            <div class="fearn-srs-target" style="color:var(--lang-1, #38bdf8); font-size:1.8rem; margin-bottom:0;">${backTarget}</div>
            <button id="fearn-card-audio-btn" class="fearn-speak-btn" style="background:var(--glass-bg-soft); border:1px solid var(--glass-border); border-radius:50%; width:36px; height:36px; cursor:pointer; font-size:1.05rem; display:inline-flex; align-items:center; justify-content:center;" title="Listen to pronunciation" aria-label="Listen to pronunciation">🔊</button>
          </div>
          ${card.reading ? '<div class="fearn-srs-reading">' + escapeHtml(card.reading) + '</div>' : ''}
          <div class="fearn-srs-trans-box">${formattedTrans}</div>
          ${card.mnemonic ? '<div class="fearn-srs-mnemonic-box">💡 <b>Mnemonic:</b> ' + formattedMnem + '</div>' : ''}
        `;
      }

      // Bind Audio Button
      var audioBtn = cardBox.querySelector('#fearn-card-audio-btn');
      if (audioBtn) {
        audioBtn.onclick = function (e) {
          e.stopPropagation();
          if (global.FEARN && global.FEARN.audio && global.FEARN.audio.speak) {
            global.FEARN.audio.speak(card.target, card.subject);
          }
        };
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
          <button id="fearn-srs-flip-btn" class="fearn-srs-primary-btn" style="width:100%; min-height:48px;">
            🔄 Show Answer (Space)
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
          <div class="fearn-srs-grade-grid">
            <button id="grade-1" class="fearn-srs-btn-grade fearn-srs-btn-again" style="min-height:48px;">
              <span>Again</span>
              <span style="font-size:0.68rem; opacity:0.85;">${int1} [1]</span>
            </button>
            <button id="grade-2" class="fearn-srs-btn-grade fearn-srs-btn-hard" style="min-height:48px;">
              <span>Hard</span>
              <span style="font-size:0.68rem; opacity:0.85;">${int2} [2]</span>
            </button>
            <button id="grade-3" class="fearn-srs-btn-grade fearn-srs-btn-good" style="min-height:48px;">
              <span>Good</span>
              <span style="font-size:0.68rem; opacity:0.85;">${int3} [3]</span>
            </button>
            <button id="grade-4" class="fearn-srs-btn-grade fearn-srs-btn-easy" style="min-height:48px;">
              <span>Easy</span>
              <span style="font-size:0.68rem; opacity:0.85;">${int4} [4]</span>
            </button>
          </div>
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
      body.className = 'fearn-srs-body';

      body.innerHTML = `
        <div style="font-size:1.15rem; font-weight:800; color:var(--lang-1, #38bdf8); border-bottom:1px solid var(--glass-border); padding-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
          <span>⚙️ FSRS Settings & Memory Model</span>
          <span style="font-size:0.75rem; color:var(--success, #4ade80); background:var(--glass-bg-soft); padding:2px 8px; border-radius:6px;">Active DSR Engine</span>
        </div>
        
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:var(--text-main);">Desired Retention (Target Probability)</div>
            <div style="font-size:0.75rem; color:var(--text-sub);">Higher (e.g. 95%) = shorter intervals, more reps; Lower (85%) = fewer reps</div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <input type="range" id="fsrs-retention-slider" min="75" max="97" value="${Math.round(FSRS_CONFIG.desiredRetention * 100)}" style="cursor:pointer;" />
            <span id="fsrs-retention-val" style="font-weight:800; color:var(--lang-1, #38bdf8); min-width:38px;">${Math.round(FSRS_CONFIG.desiredRetention * 100)}%</span>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:var(--text-main);">Maximum Interval (Days)</div>
            <div style="font-size:0.75rem; color:var(--text-sub);">Hard upper bound on scheduled review spacing</div>
          </div>
          <input type="number" id="fsrs-max-interval" value="${FSRS_CONFIG.maximumInterval}" style="width:90px; background:var(--glass-bg); border:1px solid var(--glass-border); color:var(--text-main); border-radius:6px; padding:4px 8px; font-weight:800; text-align:right;" />
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:var(--text-main);">Daily New Card Cap</div>
            <div style="font-size:0.75rem; color:var(--text-sub);">Limit new material introduced per session per deck</div>
          </div>
          <input type="number" id="fsrs-new-cap" value="${FSRS_CONFIG.newCardLimit}" style="width:70px; background:var(--glass-bg); border:1px solid var(--glass-border); color:var(--text-main); border-radius:6px; padding:4px 8px; font-weight:800; text-align:right;" />
        </div>

        <div style="background:var(--glass-bg-soft); padding:14px; border-radius:10px; border:1px solid var(--glass-border); display:flex; flex-direction:column; gap:6px;">
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-sub);">FSRS Mathematical Weights (w0..w16)</div>
          <div style="font-size:0.68rem; font-family:monospace; color:var(--text-faint); line-height:1.4; word-break:break-all;">${FSRS_CONFIG.w.join(', ')}</div>
        </div>

        <button id="fearn-srs-save-opts-btn" class="fearn-srs-primary-btn" style="width:100%;">Save & Apply Settings</button>
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
      body.className = 'fearn-srs-body';

      body.innerHTML = `
        <div style="font-size:1.1rem; font-weight:800; color:var(--lang-1, #38bdf8); border-bottom:1px solid var(--glass-border); padding-bottom:8px;">🎯 Custom Study Session</div>
        <div style="font-size:0.85rem; color:var(--text-sub);">Choose how you want to adjust your study session for <b>${escapeHtml(deck.name)}</b>:</div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          <button id="custom-extra-new" class="fearn-srs-ghost-btn" style="padding:14px; text-align:left; color:var(--lang-1, #38bdf8); border-color:var(--lang-1);">
            ➕ Increase today's new card limit (+20 Cards)
          </button>
          <button id="custom-review-ahead" class="fearn-srs-ghost-btn" style="padding:14px; text-align:left; color:var(--success, #4ade80); border-color:var(--success);">
            ⏩ Review ahead by 3 days
          </button>
          <button id="custom-study-all" class="fearn-srs-ghost-btn" style="padding:14px; text-align:left; color:var(--fit-1, #fbbf24); border-color:var(--fit-1);">
            🎴 Study entire deck (${deck.cards.length} Cards)
          </button>
        </div>

        <button id="fearn-srs-custom-back-btn" class="fearn-srs-ghost-btn" style="align-self:flex-start; margin-top:8px;">← Return to Deck Overview</button>
      `;

      container.appendChild(body);

      var b1 = body.querySelector('#custom-extra-new');
      if (b1) {
        b1.onclick = function () {
          FSRS_CONFIG.newCardLimit += 20;
          activeStudyCards = deck.cards.slice(0, FSRS_CONFIG.newCardLimit + 20);
          currentCardIndex = 0;
          isCardFlipped = false;
          currentView = 'study';
          renderView();
        };
      }

      var b2 = body.querySelector('#custom-review-ahead');
      if (b2) {
        b2.onclick = function () {
          activeStudyCards = deck.cards.slice(0);
          currentCardIndex = 0;
          isCardFlipped = false;
          currentView = 'study';
          renderView();
        };
      }

      var b3 = body.querySelector('#custom-study-all');
      if (b3) {
        b3.onclick = function () {
          activeStudyCards = deck.cards.slice(0);
          currentCardIndex = 0;
          isCardFlipped = false;
          currentView = 'study';
          renderView();
        };
      }

      var backBtn = body.querySelector('#fearn-srs-custom-back-btn');
      if (backBtn) {
        backBtn.onclick = function () {
          currentView = 'overview';
          renderView();
        };
      }
    }

    renderView();
    overlay.appendChild(container);
    doc.body.appendChild(overlay);
  }

  // Bind to Global FEARN Object
  global.FEARN = global.FEARN || {};
  global.FEARN.srs = Object.assign(global.FEARN.srs || {}, {
    calculateRetrievability: calculateRetrievability,
    calculateNextInterval: calculateNextInterval,
    getInitialDSR: getInitialDSR,
    updateDSR: updateDSR,
    recordReview: recordReview,
    getCardState: getCardState,
    getConfig: function () { return FSRS_CONFIG; },
    saveConfig: saveConfig,
    DEFAULT_WEIGHTS: DEFAULT_FSRS_WEIGHTS
  });
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

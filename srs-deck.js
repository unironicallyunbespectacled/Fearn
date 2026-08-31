// FEARN Modular Plugin — 3D Interactive SRS Flashcard Review Deck & Anki/FSRS Suite
// 100% Self-Contained. FSRS / SuperMemo SM-2 Scheduler Integration with Language-Sorted Decks.

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

  // FSRS-4.5 / 5 Default Parameters (21-weights model)
  var FSRS_CONFIG = {
    desiredRetention: 0.90,
    maximumInterval: 36500,
    w: [0.2120, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.0010, 1.8722, 0.1666, 0.7960, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542],
    newCardLimit: 20
  };

  function getCardsBySubject() {
    var subjectDecks = {};
    
    // Harvest from all registered curricula
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
                var srsState = (global.FEARN && global.FEARN.srs && typeof global.FEARN.srs.getCardState === 'function')
                  ? global.FEARN.srs.getCardState(srsKey)
                  : null;

                var isDue = srsState ? (srsState.nextReview <= Date.now()) : false;
                var reps = srsState ? (srsState.reps || 0) : 0;

                var card = {
                  id: srsKey,
                  subject: subjKey,
                  subjectName: cur.name || subjKey,
                  lessonId: lid,
                  lessonTitle: les.title || '',
                  target: ex.target,
                  reading: ex.reading || ex.pronunciation || '',
                  translation: ex.translation || '',
                  explanation: les.presentation.explanation ? les.presentation.explanation.slice(0, 180) + '...' : '',
                  mnemonic: (les.presentation.mnemonics && les.presentation.mnemonics[0]) || '',
                  reps: reps,
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
    overlay.style.cssText = 'position:fixed; inset:0; z-index:100000; background:rgba(6,11,25,0.92); backdrop-filter:blur(24px); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px; font-family:system-ui, -apple-system, sans-serif;';

    var container = doc.createElement('div');
    container.style.cssText = 'width:100%; max-width:680px; background:#0b1329; border:1px solid rgba(56,189,248,0.25); border-radius:18px; box-shadow:0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(56,189,248,0.15); display:flex; flex-direction:column; overflow:hidden; animation:fearnModalPop 0.25s ease-out;';

    function renderView() {
      container.innerHTML = '';

      // --- TOP HEADER BAR ---
      var headerBar = doc.createElement('div');
      headerBar.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:14px 20px; border-bottom:1px solid rgba(255,255,255,0.08); background:rgba(15,23,42,0.6);';
      headerBar.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="font-size:1.2rem;">🎴</div>
          <div style="font-size:0.95rem; font-weight:800; color:#38bdf8; letter-spacing:0.5px; text-transform:uppercase;">Fearn Anki/FSRS Deck Engine</div>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="font-size:0.75rem; color:#94a3b8; background:rgba(255,255,255,0.05); padding:3px 8px; border-radius:6px; border:1px solid rgba(255,255,255,0.1);">FSRS-4.5 (90% Ret)</span>
          <button id="fearn-srs-close-btn" style="background:none; border:none; color:#94a3b8; font-size:1.4rem; cursor:pointer; padding:2px 8px; border-radius:6px; line-height:1;">&times;</button>
        </div>
      `;
      container.appendChild(headerBar);

      // --- SUBJECT SELECTOR TABS ---
      var tabContainer = doc.createElement('div');
      tabContainer.style.cssText = 'display:flex; gap:6px; padding:10px 16px; background:rgba(8,14,30,0.8); overflow-x:auto; border-bottom:1px solid rgba(255,255,255,0.06); scrollbar-width:thin;';
      
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

      // --- BODY BASED ON VIEW ---
      if (currentView === 'overview') {
        renderOverview(curDeck);
      } else if (currentView === 'study') {
        renderStudy(curDeck);
      } else if (currentView === 'options') {
        renderOptions(curDeck);
      } else if (currentView === 'custom_study') {
        renderCustomStudy(curDeck);
      }

      // Attach Close Handler
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
          <div style="font-size:1.4rem; font-weight:800; color:#f8fafc;">\${escapeHtml(deck.name)} Mastery Deck</div>
          <div style="font-size:0.85rem; color:#64748b;">Adaptive Spaced Repetition Flashcards &bull; FSRS-4.5 Optimized</div>
        </div>

        <div style="display:flex; justify-content:center; gap:20px; width:100%; max-width:420px; background:rgba(15,23,42,0.5); padding:16px; border-radius:14px; border:1px solid rgba(255,255,255,0.06);">
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

        <button id="fearn-srs-study-btn" style="width:100%; max-width:320px; padding:14px 24px; background:linear-gradient(135deg, #0284c7, #38bdf8); color:#031024; font-size:1.05rem; font-weight:900; border:none; border-radius:12px; cursor:pointer; box-shadow:0 8px 24px rgba(56,189,248,0.35); transition:all 0.2s;">
          Study Now (\${cappedNew + toReview} Cards)
        </button>

        <div style="display:flex; justify-content:center; gap:16px; margin-top:8px;">
          <button id="fearn-srs-options-btn" style="background:none; border:none; color:#94a3b8; font-size:0.82rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:5px;">⚙️ Options</button>
          <span style="color:#334155;">&bull;</span>
          <button id="fearn-srs-custom-btn" style="background:none; border:none; color:#94a3b8; font-size:0.82rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:5px;">🎯 Custom Study</button>
        </div>
      `;

      container.appendChild(body);

      var studyBtn = body.querySelector('#fearn-srs-study-btn');
      if (studyBtn) {
        studyBtn.onclick = function () {
          // Prepare active study queue
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
            <div style="font-size:1.3rem; font-weight:800; color:#38bdf8;">Congratulations! Session Complete!</div>
            <div style="font-size:0.85rem; color:#94a3b8;">You have finished all due cards for this deck today according to your FSRS retention schedule.</div>
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

      // Progress bar
      var progPct = Math.round((currentCardIndex / activeStudyCards.length) * 100);
      var progBar = doc.createElement('div');
      progBar.style.cssText = 'width:100%; display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:#64748b; margin-bottom:4px;';
      progBar.innerHTML = `
        <span>Card \${currentCardIndex + 1} of \${activeStudyCards.length}</span>
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
          <div style="font-size:1.9rem; font-weight:900; color:#f8fafc; margin-bottom:14px; line-height:1.3;">\${escapeHtml(card.target)}</div>
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
        // 4-Grade Anki/FSRS Feedback Buttons
        actionRow.innerHTML = `
          <button id="grade-1" style="flex:1; padding:10px 4px; background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.4); color:#ef4444; border-radius:10px; cursor:pointer; font-size:0.8rem; font-weight:800; display:flex; flex-direction:column; align-items:center; gap:2px;">
            <span>Again</span>
            <span style="font-size:0.68rem; opacity:0.8;">&lt;1m [1]</span>
          </button>
          <button id="grade-2" style="flex:1; padding:10px 4px; background:rgba(251,191,36,0.15); border:1px solid rgba(251,191,36,0.4); color:#fbbf24; border-radius:10px; cursor:pointer; font-size:0.8rem; font-weight:800; display:flex; flex-direction:column; align-items:center; gap:2px;">
            <span>Hard</span>
            <span style="font-size:0.68rem; opacity:0.8;">1.2d [2]</span>
          </button>
          <button id="grade-3" style="flex:1; padding:10px 4px; background:rgba(56,189,248,0.15); border:1px solid rgba(56,189,248,0.4); color:#38bdf8; border-radius:10px; cursor:pointer; font-size:0.8rem; font-weight:800; display:flex; flex-direction:column; align-items:center; gap:2px;">
            <span>Good</span>
            <span style="font-size:0.68rem; opacity:0.8;">2.5d [3]</span>
          </button>
          <button id="grade-4" style="flex:1; padding:10px 4px; background:rgba(74,222,128,0.15); border:1px solid rgba(74,222,128,0.4); color:#4ade80; border-radius:10px; cursor:pointer; font-size:0.8rem; font-weight:800; display:flex; flex-direction:column; align-items:center; gap:2px;">
            <span>Easy</span>
            <span style="font-size:0.68rem; opacity:0.8;">4.2d [4]</span>
          </button>
        `;
        body.appendChild(actionRow);

        function handleGrade(grade) {
          if (global.FEARN && global.FEARN.srs && typeof global.FEARN.srs.recordReview === 'function') {
            global.FEARN.srs.recordReview(card.id, grade);
          }
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
      body.style.cssText = 'padding:24px; display:flex; flex-direction:column; gap:18px;';

      body.innerHTML = `
        <div style="font-size:1.1rem; font-weight:800; color:#38bdf8; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:8px;">⚙️ Deck Options & FSRS Parameters</div>
        
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:#f8fafc;">Desired Retention</div>
            <div style="font-size:0.75rem; color:#64748b;">Target probability of recalling cards upon review</div>
          </div>
          <span style="font-weight:800; color:#38bdf8;">\${Math.round(FSRS_CONFIG.desiredRetention * 100)}%</span>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:#f8fafc;">Maximum Interval</div>
            <div style="font-size:0.75rem; color:#64748b;">Hard upper bound on scheduled review days</div>
          </div>
          <span style="font-weight:800; color:#f8fafc;">\${FSRS_CONFIG.maximumInterval} days</span>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:#f8fafc;">Daily New Card Cap</div>
            <div style="font-size:0.75rem; color:#64748b;">Limit new material introduced per session</div>
          </div>
          <span style="font-weight:800; color:#38bdf8;">\${FSRS_CONFIG.newCardLimit} cards</span>
        </div>

        <div style="background:rgba(15,23,42,0.6); padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:0.75rem; font-weight:700; color:#94a3b8; margin-bottom:4px;">FSRS-4.5 Optimized Weights (w0..w20)</div>
          <div style="font-size:0.68rem; font-family:monospace; color:#64748b; line-height:1.4; word-break:break-all;">\${FSRS_CONFIG.w.join(', ')}</div>
        </div>

        <button id="fearn-srs-back-btn" style="padding:10px 20px; background:#0284c7; color:#fff; border:none; border-radius:10px; font-weight:800; cursor:pointer;">Save & Back</button>
      `;

      container.appendChild(body);
      body.querySelector('#fearn-srs-back-btn').onclick = function () {
        currentView = 'overview';
        renderView();
      };
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

  // Expose globally
  global.FEARN = global.FEARN || {};
  global.FEARN.openSRSFlashcardDeck = openSRSFlashcardDeck;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { openSRSFlashcardDeck: openSRSFlashcardDeck };
  }
})(typeof window !== 'undefined' ? window : global);

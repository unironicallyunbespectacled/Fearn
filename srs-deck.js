// FEARN Modular Plugin — 3D Interactive SRS Flashcard Review Deck
// 100% Self-Contained. Real FSRS / SuperMemo SM-2 Scheduler Integration.

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

  function getCardsToReview() {
    var due = [];
    if (global.FEARN && typeof global.FEARN.getAllDueReviews === 'function') {
      due = global.FEARN.getAllDueReviews();
    } else if (global.FEARN && global.FEARN.srs && typeof global.FEARN.srs.getDue === 'function') {
      due = global.FEARN.srs.getDue();
    }

    var cards = [];
    if (due && due.length > 0) {
      due.forEach(function (rec) {
        var resolved = (global.FEARN && typeof global.FEARN.resolveSrsItem === 'function')
          ? global.FEARN.resolveSrsItem(rec.itemId)
          : null;
        if (resolved && resolved.target) {
          cards.push({
            itemId: rec.itemId,
            moduleId: rec.moduleId || resolved.subject,
            target: resolved.target,
            translation: resolved.translation || '',
            reading: resolved.reading || '',
            subject: resolved.subject || rec.moduleId || 'Review',
            lessonId: resolved.lessonId || '',
            isDue: true,
            interval: rec.interval || 1
          });
        }
      });
    }

    // If no overdue cards in storage, harvest cards from active or registered curricula for review practice
    if (cards.length === 0 && global.FEARN_CURRICULA) {
      var subjects = Object.keys(global.FEARN_CURRICULA);
      subjects.forEach(function (subj) {
        var cur = global.FEARN_CURRICULA[subj];
        if (cur && cur.lessons) {
          var lessonKeys = Object.keys(cur.lessons);
          for (var i = 0; i < Math.min(lessonKeys.length, 5); i++) {
            var lk = lessonKeys[i];
            var les = cur.lessons[lk];
            if (les && les.presentation && les.presentation.examples && les.presentation.examples.length) {
              var ex = les.presentation.examples[0];
              cards.push({
                itemId: lk + ':ex:0',
                moduleId: subj,
                target: ex.target,
                translation: ex.translation || '',
                reading: ex.reading || ex.pronunciation || '',
                subject: subj,
                lessonId: lk,
                isDue: false,
                interval: 1
              });
            }
          }
        }
      });
    }

    return cards;
  }

  function openSRSFlashcardDeck() {
    var doc = (typeof document !== 'undefined') ? document : (global.document || null);
    if (!doc || !doc.createElement) return;

    var existing = doc.getElementById ? doc.getElementById('fearn-srs-deck-modal') : null;
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }

    var cards = getCardsToReview();
    var currentIndex = 0;
    var isFlipped = false;

    var overlay = doc.createElement('div');
    overlay.id = 'fearn-srs-deck-modal';
    overlay.style.cssText = 'position:fixed; inset:0; z-index:100000; background:rgba(0,0,0,0.85); backdrop-filter:blur(20px); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px;';

    var container = doc.createElement('div');
    container.style.cssText = 'width:100%; max-width:560px; display:flex; flex-direction:column; align-items:center; gap:18px;';

    var titleRow = doc.createElement('div');
    titleRow.style.cssText = 'display:flex; justify-content:space-between; align-items:center; width:100%;';
    titleRow.innerHTML = '<div style="font-size:1.1rem; font-weight:800; color:#38bdf8; display:flex; align-items:center; gap:8px;">🎴 <span>Spaced Repetition Review Deck</span></div>';

    var closeBtn = doc.createElement('button');
    closeBtn.style.cssText = 'background:transparent; border:none; color:#94a3b8; font-size:1.4rem; cursor:pointer; padding:4px 8px; border-radius:6px;';
    closeBtn.textContent = '✕';
    closeBtn.onclick = function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    };
    titleRow.appendChild(closeBtn);

    var progressRow = doc.createElement('div');
    progressRow.style.cssText = 'width:100%; display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; color:#94a3b8; font-weight:600;';
    var progressText = doc.createElement('span');
    var badgeText = doc.createElement('span');
    badgeText.style.cssText = 'padding:3px 8px; border-radius:9999px; background:rgba(56,189,248,0.12); color:#38bdf8; border:1px solid rgba(56,189,248,0.25); text-transform:uppercase; font-size:0.72rem; font-weight:700;';
    progressRow.appendChild(progressText);
    progressRow.appendChild(badgeText);

    var cardScene = doc.createElement('div');
    cardScene.style.cssText = 'width:100%; height:320px; perspective:1000px; cursor:pointer;';

    var cardInner = doc.createElement('div');
    cardInner.id = 'fearn-srs-card-inner';
    cardInner.style.cssText = 'width:100%; height:100%; position:relative; transform-style:preserve-3d; transition:transform 0.5s cubic-bezier(0.16,1,0.3,1); border-radius:24px; box-shadow:0 25px 60px rgba(0,0,0,0.7);';

    var cardFront = doc.createElement('div');
    cardFront.style.cssText = 'position:absolute; inset:0; backface-visibility:hidden; background:rgba(15,23,42,0.94); border:1.5px solid rgba(56,189,248,0.35); border-radius:24px; padding:32px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; gap:14px;';

    var cardBack = doc.createElement('div');
    cardBack.style.cssText = 'position:absolute; inset:0; backface-visibility:hidden; transform:rotateY(180deg); background:rgba(15,23,42,0.96); border:1.5px solid rgba(168,85,247,0.45); border-radius:24px; padding:32px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; gap:14px;';

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardScene.appendChild(cardInner);

    cardScene.onclick = function () {
      isFlipped = !isFlipped;
      cardInner.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    };

    var btnRow = doc.createElement('div');
    btnRow.style.cssText = 'display:flex; gap:10px; width:100%; justify-content:center;';
    btnRow.innerHTML = [
      '<button class="srs-btn-rate" data-score="1" style="flex:1; padding:12px 6px; border-radius:12px; background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.4); color:#fca5a5; font-weight:700; font-size:0.85rem; cursor:pointer;">Again<br><span style="font-size:0.7rem; font-weight:400;">&lt;1 min</span></button>',
      '<button class="srs-btn-rate" data-score="2" style="flex:1; padding:12px 6px; border-radius:12px; background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.4); color:#fcd34d; font-weight:700; font-size:0.85rem; cursor:pointer;">Hard<br><span style="font-size:0.7rem; font-weight:400;">1 day</span></button>',
      '<button class="srs-btn-rate" data-score="3" style="flex:1; padding:12px 6px; border-radius:12px; background:rgba(56,189,248,0.15); border:1px solid rgba(56,189,248,0.4); color:#7dd3fc; font-weight:700; font-size:0.85rem; cursor:pointer;">Good<br><span style="font-size:0.7rem; font-weight:400;">3 days</span></button>',
      '<button class="srs-btn-rate" data-score="4" style="flex:1; padding:12px 6px; border-radius:12px; background:rgba(34,197,94,0.15); border:1px solid rgba(34,197,94,0.4); color:#86efac; font-weight:700; font-size:0.85rem; cursor:pointer;">Easy<br><span style="font-size:0.7rem; font-weight:400;">7 days</span></button>'
    ].join('');

    function renderCurrentCard() {
      if (cards.length === 0) {
        cardFront.innerHTML = '<span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:#22c55e; font-weight:800;">All Caught Up</span><div style="font-size:1.5rem; font-weight:800; color:#f8fafc;">🎉 No Cards Due!</div><div style="font-size:0.85rem; color:#94a3b8;">You have completed all scheduled active reviews for today. Great job!</div>';
        cardBack.innerHTML = cardFront.innerHTML;
        progressText.textContent = 'Deck Complete';
        badgeText.textContent = '0 Due';
        btnRow.style.display = 'none';
        return;
      }

      var card = cards[currentIndex];
      isFlipped = false;
      cardInner.style.transform = 'rotateY(0deg)';

      progressText.textContent = 'Card ' + (currentIndex + 1) + ' of ' + cards.length;
      badgeText.textContent = escapeHtml(card.subject) + (card.isDue ? ' · Due' : ' · Practice');

      cardFront.innerHTML = [
        '<span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:#38bdf8; font-weight:800;">Target Term</span>',
        '<div dir="auto" style="font-size:1.6rem; font-weight:800; color:#f8fafc; line-height:1.3; max-width:90%; word-break:break-word; text-align:center;">' + escapeHtml(card.target) + '</div>',
        card.reading ? '<div dir="auto" style="font-size:0.9rem; color:#94a3b8; font-style:italic;">' + escapeHtml(card.reading) + '</div>' : '',
        '<div style="font-size:0.75rem; color:#64748b; margin-top:10px;">(Tap card to reveal meaning & translation)</div>'
      ].join('');

      cardBack.innerHTML = [
        '<span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:#c084fc; font-weight:800;">Translation & Recall</span>',
        '<div dir="auto" style="font-size:1.35rem; font-weight:800; color:#22c55e; line-height:1.3; max-width:90%; word-break:break-word; text-align:center;">' + escapeHtml(card.translation || card.target) + '</div>',
        card.reading ? '<div dir="auto" style="font-size:0.85rem; color:#cbd5e1;">' + escapeHtml(card.reading) + '</div>' : '',
        '<div style="font-size:0.75rem; color:#94a3b8;">Rate your recall to update FSRS / SM-2 intervals:</div>'
      ].join('');
    }

    var rateBtns = btnRow.querySelectorAll('.srs-btn-rate');
    rateBtns.forEach(function (btn) {
      btn.onclick = function (e) {
        e.stopPropagation();
        if (cards.length === 0) return;
        var score = parseInt(btn.getAttribute('data-score'), 10) || 3;
        var currentCard = cards[currentIndex];

        // Call real FEARN.srs.schedule to update intervals in storage
        if (global.FEARN && global.FEARN.srs && typeof global.FEARN.srs.schedule === 'function') {
          global.FEARN.srs.schedule(currentCard.itemId, score, currentCard.moduleId);
        }

        currentIndex++;
        if (currentIndex < cards.length) {
          renderCurrentCard();
        } else {
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
          if (global.FEARN && global.FEARN.ui && typeof global.FEARN.ui.celebrateCheckpoint === 'function') {
            global.FEARN.ui.celebrateCheckpoint({ message: '🧠 All ' + cards.length + ' Flashcards Reviewed!' });
          }
        }
      };
    });

    container.appendChild(titleRow);
    container.appendChild(progressRow);
    container.appendChild(cardScene);
    container.appendChild(btnRow);
    overlay.appendChild(container);
    if (doc.body) doc.body.appendChild(overlay);

    renderCurrentCard();

    overlay.onclick = function (e) {
      if (e.target === overlay) {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }
    };
  }

  // Keyboard shortcut Ctrl+Shift+R / Cmd+Shift+R to trigger SRS review
  if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
    window.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'R' || e.key === 'r')) {
        e.preventDefault();
        openSRSFlashcardDeck();
      }
    });
  }

  global.openSRSFlashcardDeck = openSRSFlashcardDeck;

})(typeof window !== 'undefined' ? window : globalThis);

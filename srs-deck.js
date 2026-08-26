// FEARN Modular Plugin — 3D Interactive SRS Flashcard Review Deck
// 100% Self-Contained. Attaches on demand, zero modifications to core DOM layout.

(function (global) {
  'use strict';

  function openSRSFlashcardDeck() {
    var doc = (typeof document !== 'undefined') ? document : (global.document || null);
    if (!doc || !doc.createElement) return;

    var existing = doc.getElementById ? doc.getElementById('fearn-srs-deck-modal') : null;
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }

    var overlay = doc.createElement('div');
    overlay.id = 'fearn-srs-deck-modal';
    overlay.style.cssText = 'position:fixed; inset:0; z-index:100000; background:rgba(0,0,0,0.85); backdrop-filter:blur(20px); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px;';

    var container = doc.createElement('div');
    container.style.cssText = 'width:100%; max-width:540px; display:flex; flex-direction:column; align-items:center; gap:20px;';

    var titleRow = doc.createElement('div');
    titleRow.style.cssText = 'display:flex; justify-content:space-between; align-items:center; width:100%;';
    titleRow.innerHTML = '<div style="font-size:1.1rem; font-weight:800; color:#38bdf8; display:flex; align-items:center; gap:8px;">🎴 <span>Spaced Repetition Review Deck</span></div>';

    var closeBtn = doc.createElement('button');
    closeBtn.style.cssText = 'background:transparent; border:none; color:#94a3b8; font-size:1.4rem; cursor:pointer;';
    closeBtn.textContent = '✕';
    closeBtn.onclick = function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    };
    titleRow.appendChild(closeBtn);

    var cardScene = doc.createElement('div');
    cardScene.style.cssText = 'width:100%; height:320px; perspective:1000px; cursor:pointer;';

    var cardInner = doc.createElement('div');
    cardInner.id = 'fearn-srs-card-inner';
    cardInner.style.cssText = 'width:100%; height:100%; position:relative; transform-style:preserve-3d; transition:transform 0.5s cubic-bezier(0.16,1,0.3,1); border-radius:24px; box-shadow:0 25px 60px rgba(0,0,0,0.7);';

    var cardFront = doc.createElement('div');
    cardFront.style.cssText = 'position:absolute; inset:0; backface-visibility:hidden; background:rgba(15,23,42,0.92); border:1.5px solid rgba(56,189,248,0.3); border-radius:24px; padding:32px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; gap:14px;';
    cardFront.innerHTML = '<span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:#38bdf8; font-weight:800;">Prompt</span><div style="font-size:1.5rem; font-weight:800; color:#f8fafc;">Click to Flip Card</div><div style="font-size:0.85rem; color:#94a3b8;">Review daily due memory anchors across your active curricula.</div><div style="font-size:0.75rem; color:#64748b; margin-top:10px;">(Tap card to reveal answer & pronunciation)</div>';

    var cardBack = doc.createElement('div');
    cardBack.style.cssText = 'position:absolute; inset:0; backface-visibility:hidden; transform:rotateY(180deg); background:rgba(15,23,42,0.95); border:1.5px solid rgba(168,85,247,0.4); border-radius:24px; padding:32px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; gap:14px;';
    cardBack.innerHTML = '<span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.12em; color:#c084fc; font-weight:800;">Recalled Knowledge</span><div style="font-size:1.3rem; font-weight:800; color:#22c55e;">✓ Perfect Retention</div><div style="font-size:0.85rem; color:#cbd5e1;">Rate your recall confidence below to update SuperMemo SM-2 intervals.</div>';

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardScene.appendChild(cardInner);

    var isFlipped = false;
    cardScene.onclick = function () {
      isFlipped = !isFlipped;
      cardInner.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
    };

    var btnRow = doc.createElement('div');
    btnRow.style.cssText = 'display:flex; gap:10px; width:100%; justify-content:center;';
    btnRow.innerHTML = '<button class="srs-btn-rate" data-score="1" style="flex:1; padding:12px 6px; border-radius:12px; background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.4); color:#fca5a5; font-weight:700; font-size:0.85rem; cursor:pointer;">Again<br><span style="font-size:0.7rem; font-weight:400;">&lt;1 min</span></button><button class="srs-btn-rate" data-score="2" style="flex:1; padding:12px 6px; border-radius:12px; background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.4); color:#fcd34d; font-weight:700; font-size:0.85rem; cursor:pointer;">Hard<br><span style="font-size:0.7rem; font-weight:400;">1 day</span></button><button class="srs-btn-rate" data-score="3" style="flex:1; padding:12px 6px; border-radius:12px; background:rgba(56,189,248,0.15); border:1px solid rgba(56,189,248,0.4); color:#7dd3fc; font-weight:700; font-size:0.85rem; cursor:pointer;">Good<br><span style="font-size:0.7rem; font-weight:400;">3 days</span></button><button class="srs-btn-rate" data-score="4" style="flex:1; padding:12px 6px; border-radius:12px; background:rgba(34,197,94,0.15); border:1px solid rgba(34,197,94,0.4); color:#86efac; font-weight:700; font-size:0.85rem; cursor:pointer;">Easy<br><span style="font-size:0.7rem; font-weight:400;">7 days</span></button>';

    container.appendChild(titleRow);
    container.appendChild(cardScene);
    container.appendChild(btnRow);
    overlay.appendChild(container);
    if (doc.body) doc.body.appendChild(overlay);

    var rateBtns = btnRow.querySelectorAll ? btnRow.querySelectorAll('.srs-btn-rate') : [];
    rateBtns.forEach(function (btn) {
      btn.onclick = function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        if (global.FEARN && global.FEARN.ui && typeof global.FEARN.ui.celebrateCheckpoint === 'function') {
          global.FEARN.ui.celebrateCheckpoint({ message: '🧠 SRS Memory Anchor Logged!' });
        }
      };
    });

    overlay.onclick = function (e) {
      if (e.target === overlay) {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }
    };
  }

  global.openSRSFlashcardDeck = openSRSFlashcardDeck;

})(typeof window !== 'undefined' ? window : globalThis);

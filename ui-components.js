// FEARN UI Components — shared render helpers attached to window.FEARN.ui
//
// Loaded AFTER engine.js (which creates window.FEARN and reserves FEARN.ui)
// and AFTER schema.js. Every subject module (11 languages + 6 skills +
// fitness) is expected to call these from its own render() function, so
// everything here is written defensively: missing/malformed input should
// degrade to a graceful empty state, never throw into the caller.
//
// Public API:
//   FEARN.ui.renderJourneyPath(container, { units, currentUnitId, authoredUpToId, levelLabels })
//   FEARN.ui.renderModuleCard(container, moduleDef)
//   FEARN.ui.summarizeProgress(progress)   — small helper, also used internally

(function (global) {
  if (!global.FEARN) {
    console.error('ui-components.js loaded before engine.js — window.FEARN is missing. FEARN.ui will not be installed.');
    return;
  }

  const FEARN = global.FEARN;
  FEARN.ui = FEARN.ui || {};

  // ---------------------------------------------------------------------
  // small internal helpers
  // ---------------------------------------------------------------------
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[&<>"']/g, (c) => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  // ---------------------------------------------------------------------
  // FEARN.ui.summarizeProgress(progress)
  // Turns whatever a module's getProgress() returns into a short human
  // readable string. getProgress() has no fixed shape in the contract, so
  // this pokes at a few common conventions before falling back to JSON.
  // ---------------------------------------------------------------------
  FEARN.ui.summarizeProgress = function summarizeProgress(progress) {
    try {
      if (progress === null || progress === undefined) return 'Not started yet';

      if (typeof progress === 'number') {
        if (Number.isFinite(progress) && progress >= 0 && progress <= 1) {
          return Math.round(progress * 100) + '% complete';
        }
        return progress + '% complete';
      }

      if (typeof progress === 'string') return progress;

      if (typeof progress === 'object') {
        if (typeof progress.percent === 'number') return Math.round(progress.percent) + '% complete';
        if (typeof progress.percentage === 'number') return Math.round(progress.percentage) + '% complete';
        if (typeof progress.completed === 'number' && typeof progress.total === 'number') {
          return progress.completed + ' / ' + progress.total + ' units';
        }
        if (typeof progress.unitsCompleted === 'number' && typeof progress.unitsTotal === 'number') {
          return progress.unitsCompleted + ' / ' + progress.unitsTotal + ' units';
        }
        if (progress.currentUnitId !== undefined && progress.currentUnitId !== null) {
          return 'Currently on: ' + progress.currentUnitId;
        }
        try {
          const json = JSON.stringify(progress);
          if (json && json !== '{}') {
            return json.length > 64 ? json.slice(0, 61) + '...' : json;
          }
        } catch (e) {
          /* fall through */
        }
        return 'In progress';
      }

      return 'In progress';
    } catch (err) {
      console.error('FEARN.ui.summarizeProgress failed:', err);
      return 'In progress';
    }
  };

  // ---------------------------------------------------------------------
  // FEARN.ui.renderModuleCard(container, moduleDef)
  // Appends ONE glass card for a registered module into `container`.
  // Does not clear the container — callers building a grid of many cards
  // call this once per module into the same parent.
  // Clicking the card dispatches a `fearn:open-module` CustomEvent on
  // window with { id } so the app shell (or any listener) can navigate —
  // this keeps the component decoupled from shell routing internals.
  // ---------------------------------------------------------------------
  FEARN.ui.renderModuleCard = function renderModuleCard(container, moduleDef) {
    try {
      if (!container || (typeof Element !== 'undefined' && !(container instanceof Element) && !container.nodeType)) {
        console.warn('FEARN.ui.renderModuleCard: no valid container element given');
        return;
      }
      if (!moduleDef || !moduleDef.id) {
        console.warn('FEARN.ui.renderModuleCard: moduleDef is missing an id', moduleDef);
        return;
      }

      const card = el('button', 'fearn-module-card fearn-glass fearn-glow');
      card.type = 'button';
      card.setAttribute('data-module-id', moduleDef.id);
      if (moduleDef.category) card.setAttribute('data-accent', moduleDef.category);

      const icon = el('div', 'fearn-module-card-icon', moduleDef.icon || '✦');
      card.appendChild(icon);

      const body = el('div', 'fearn-module-card-body');

      const name = el('div', 'fearn-module-card-name', moduleDef.name || moduleDef.id);
      body.appendChild(name);

      let progress = null;
      try {
        progress = typeof moduleDef.getProgress === 'function' ? moduleDef.getProgress() : null;
      } catch (progressErr) {
        console.error('FEARN.ui.renderModuleCard: getProgress() threw for module "' + moduleDef.id + '"', progressErr);
      }

      const progressLine = el('div', 'fearn-module-card-progress', FEARN.ui.summarizeProgress(progress));
      body.appendChild(progressLine);

      card.appendChild(body);

      card.addEventListener('click', function () {
        try {
          window.dispatchEvent(new CustomEvent('fearn:open-module', { detail: { id: moduleDef.id } }));
        } catch (dispatchErr) {
          console.error('FEARN.ui.renderModuleCard: failed to dispatch fearn:open-module', dispatchErr);
        }
      });

      container.appendChild(card);
    } catch (err) {
      console.error('FEARN.ui.renderModuleCard failed:', err);
    }
  };

  // ---------------------------------------------------------------------
  // FEARN.ui.renderJourneyPath(container, opts)
  //
  // opts:
  //   units          — ordered array covering the ENTIRE roadmap, start to
  //                     end, each item roughly { id, label?, level? }.
  //   currentUnitId  — id of the "you are here" unit.
  //   authoredUpToId — id of the last unit that has real authored content;
  //                     anything past it renders as a stub.
  //   levelLabels    — optional: either an object mapping unit.level -> label,
  //                     or an array of { level, label } — shown as inline
  //                     section headers whenever `level` changes.
  //
  // Unit states (in visual order along the path):
  //   completed          — index before the current unit
  //   current             — the "you are here" unit
  //   authored            — authored content exists but not reached yet
  //   stub (default)      — not yet authored
  //
  // Fully replaces `container`'s contents. Never throws — on any internal
  // error it logs and renders a small fallback message instead.
  // ---------------------------------------------------------------------
  FEARN.ui.renderJourneyPath = function renderJourneyPath(container, opts) {
    try {
      if (!container || (typeof Element !== 'undefined' && !(container instanceof Element) && !container.nodeType)) {
        console.warn('FEARN.ui.renderJourneyPath: no valid container element given');
        return;
      }

      const options = opts && typeof opts === 'object' ? opts : {};
      const units = Array.isArray(options.units) ? options.units.filter((u) => u && u.id !== undefined && u.id !== null) : [];
      const currentUnitId = options.currentUnitId;
      const authoredUpToId = options.authoredUpToId;
      const levelLabels = options.levelLabels;

      container.innerHTML = '';
      container.classList.add('fearn-journey-path');

      if (units.length === 0) {
        const empty = el('div', 'fearn-journey-empty');
        empty.innerHTML =
          '<span class="fearn-journey-empty-icon">🌱</span>' +
          '<p>No roadmap authored yet for this subject.</p>';
        container.appendChild(empty);
        return;
      }

      function levelLabelFor(levelKey) {
        if (levelKey === undefined || levelKey === null || !levelLabels) return null;
        if (Array.isArray(levelLabels)) {
          const found = levelLabels.find((l) => l && l.level === levelKey);
          return found ? found.label : null;
        }
        if (typeof levelLabels === 'object') {
          return Object.prototype.hasOwnProperty.call(levelLabels, levelKey) ? levelLabels[levelKey] : null;
        }
        return null;
      }

      const curIdx = units.findIndex((u) => u.id === currentUnitId);
      const authoredIdx = units.findIndex((u) => u.id === authoredUpToId);

      if (currentUnitId !== undefined && currentUnitId !== null && curIdx === -1) {
        console.warn('FEARN.ui.renderJourneyPath: currentUnitId "' + currentUnitId + '" was not found in units — no "you are here" marker will be shown.');
      }
      if (authoredUpToId !== undefined && authoredUpToId !== null && authoredIdx === -1) {
        console.warn('FEARN.ui.renderJourneyPath: authoredUpToId "' + authoredUpToId + '" was not found in units — every unit will render as a stub.');
      }

      const track = el('div', 'fearn-journey-track');
      let lastLevel;
      let sawLevel = false;

      units.forEach((unit, idx) => {
        const levelKey = unit.level;
        if (levelLabels !== undefined && levelKey !== undefined && (!sawLevel || levelKey !== lastLevel)) {
          const label = levelLabelFor(levelKey);
          if (label) {
            track.appendChild(el('div', 'fearn-journey-level', label));
          }
          lastLevel = levelKey;
          sawLevel = true;
        }

        if (idx > 0) {
          let connectorState = 'stub';
          if (curIdx !== -1 && idx <= curIdx) connectorState = 'completed';
          else if (authoredIdx !== -1 && idx - 1 <= authoredIdx) connectorState = 'authored';
          track.appendChild(el('div', 'fearn-journey-connector fearn-journey-connector--' + connectorState));
        }

        let state = 'stub';
        if (curIdx !== -1 && idx === curIdx) state = 'current';
        else if (curIdx !== -1 && idx < curIdx) state = 'completed';
        else if (authoredIdx !== -1 && idx <= authoredIdx) state = 'authored';

        const node = el('div', 'fearn-journey-node fearn-journey-node--' + state);
        node.setAttribute('data-unit-id', String(unit.id));
        node.title = unit.label || unit.name || String(unit.id);
        // Light-touch keyboard/screen-reader access: modules wire their own
        // click handling (directly on the node, or delegated on the
        // container), so a synthetic click on Enter/Space reaches whichever
        // approach a given module uses without this component needing to
        // know about it.
        node.setAttribute('role', 'button');
        node.setAttribute('tabindex', '0');
        node.addEventListener('keydown', (evt) => {
          if (evt.key === 'Enter' || evt.key === ' ' || evt.key === 'Spacebar') {
            evt.preventDefault();
            node.click();
          }
        });

        const dot = el('div', 'fearn-journey-dot');
        if (state === 'completed') dot.textContent = '✓';
        else if (state === 'current') dot.textContent = '●';
        node.appendChild(dot);

        node.appendChild(el('div', 'fearn-journey-label', unit.label || unit.name || ('Unit ' + (idx + 1))));

        if (state === 'current') {
          node.appendChild(el('div', 'fearn-journey-here', 'You are here'));
        }

        track.appendChild(node);
      });

      container.appendChild(track);
    } catch (err) {
      console.error('FEARN.ui.renderJourneyPath failed:', err);
      try {
        container.innerHTML = '<div class="fearn-journey-empty"><p>Could not render this journey path.</p></div>';
      } catch (fallbackErr) {
        console.error('FEARN.ui.renderJourneyPath: fallback render also failed:', fallbackErr);
      }
    }
  };

  // ---------------------------------------------------------------------
  // FEARN.ui.celebrateCheckpoint(opts)
  //
  // A small, tasteful "you passed a checkpoint" celebration: a couple of
  // synthesized chime notes (Web Audio API, same technique as the
  // gemini-code-*.html SFX reference — no external files) plus a short
  // confetti burst on a transient full-screen canvas (hand-rolled, no
  // canvas-confetti CDN dependency, so it still works fully offline).
  //
  // opts (all optional):
  //   message  — toast text, defaults to "Checkpoint passed!"
  //
  // Respects:
  //   - FEARN.storage 'shell:celebrationsEnabled' (default true) — the
  //     topbar toggle in app.html flips this. When off, this is a no-op.
  //   - prefers-reduced-motion — skips the confetti animation but still
  //     shows a plain (non-animated) toast, since that's informational,
  //     not motion.
  //
  // Never throws into the caller — any internal failure is caught and
  // logged, same defensive posture as the rest of this file.
  // ---------------------------------------------------------------------
  let __celebrateAudioCtx = null;
  function __getAudioCtx() {
    if (__celebrateAudioCtx) return __celebrateAudioCtx;
    const Ctor = global.AudioContext || global.webkitAudioContext;
    if (!Ctor) return null;
    __celebrateAudioCtx = new Ctor();
    return __celebrateAudioCtx;
  }

  function __playChime() {
    try {
      const ctx = __getAudioCtx();
      if (!ctx) return;
      if (ctx.state === 'suspended' && typeof ctx.resume === 'function') ctx.resume();
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 — small major triad
      notes.forEach((freq, i) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.35);
        }, i * 90);
      });
    } catch (err) {
      console.error('FEARN.ui.celebrateCheckpoint: chime playback failed', err);
    }
  }

  function __fireConfetti() {
    try {
      const reduceMotion = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return;

      const canvas = document.createElement('canvas');
      canvas.className = 'fearn-celebrate-canvas';
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);
      const ctx2d = canvas.getContext('2d');
      if (!ctx2d) { canvas.remove(); return; }

      const colors = ['#12e6c8', '#4fb0ff', '#b26bff', '#ff5fa8', '#ffd76a', '#33e39a'];
      const pieces = [];
      const count = 90;
      for (let i = 0; i < count; i++) {
        pieces.push({
          x: Math.random() * canvas.width,
          y: -20 - Math.random() * canvas.height * 0.3,
          vx: (Math.random() - 0.5) * 3,
          vy: 2 + Math.random() * 3,
          size: 5 + Math.random() * 5,
          color: colors[i % colors.length],
          rot: Math.random() * Math.PI * 2,
          vrot: (Math.random() - 0.5) * 0.3,
        });
      }

      const start = performance.now();
      const durationMs = 2200;
      function frame(now) {
        const elapsed = now - start;
        ctx2d.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.045; // gravity
          p.rot += p.vrot;
          ctx2d.save();
          ctx2d.translate(p.x, p.y);
          ctx2d.rotate(p.rot);
          ctx2d.fillStyle = p.color;
          ctx2d.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          ctx2d.restore();
        });
        if (elapsed < durationMs) {
          requestAnimationFrame(frame);
        } else {
          canvas.remove();
        }
      }
      requestAnimationFrame(frame);
    } catch (err) {
      console.error('FEARN.ui.celebrateCheckpoint: confetti render failed', err);
    }
  }

  function __showToast(message) {
    try {
      const toast = el('div', 'fearn-celebrate-toast', null);
      toast.innerHTML =
        '<span class="fearn-celebrate-toast-icon">✨</span>' +
        '<span>' + escapeHtml(message) + '</span>';
      toast.title = 'Click to dismiss';
      toast.addEventListener('click', () => toast.remove());
      document.body.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('is-visible'));
      setTimeout(() => {
        toast.classList.remove('is-visible');
        setTimeout(() => toast.remove(), 400);
      }, 2600);
    } catch (err) {
      console.error('FEARN.ui.celebrateCheckpoint: toast render failed', err);
    }
  }

  FEARN.ui.celebrateCheckpoint = function celebrateCheckpoint(opts) {
    try {
      const enabled = FEARN.storage.get('shell:celebrationsEnabled', true);
      if (!enabled) return;
      const message = (opts && opts.message) || 'Checkpoint passed!';
      __showToast(message);
      __fireConfetti();
      __playChime();
    } catch (err) {
      console.error('FEARN.ui.celebrateCheckpoint failed:', err);
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);

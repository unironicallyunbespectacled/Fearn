// FEARN Engine — the shared spine every module plugs into.
// Contract:
//   FEARN.registerModule({ id, name, icon, render(container), getProgress() })
//   FEARN.streak.log(moduleId) / .get(moduleId)
//   FEARN.streak.logExternal(name) / .getExternal(name)
//   FEARN.srs.schedule(itemId, quality, moduleId) / .getDue(moduleId)
//   FEARN.rating.get(skillId) / .update(skillId, success, difficulty)
//   FEARN.storage.get(key) / .set(key, val)
//   FEARN.journey.log() / .getStreak()
//   FEARN.getAllModulesProgress() / .getAllDueReviews()
//   FEARN.ui — namespace reserved for shared render helpers (populated by ui-components.js)

(function (global) {
  const FEARN = {};
  const registry = {};

  // ---------- storage ----------
  const NS = 'fearn:';
  FEARN.storage = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(NS + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) {
        return fallback;
      }
    },
    set(key, val) {
      // localStorage can throw (quota exceeded, private-browsing lockouts,
      // storage disabled by the browser/environment entirely) — every module
      // calls this synchronously inside click handlers with no try/catch of
      // its own, so an uncaught throw here would break that interaction.
      // Swallow and warn instead; the in-memory app state still works for
      // the rest of the session, it just won't persist across reloads.
      try {
        localStorage.setItem(NS + key, JSON.stringify(val));
      } catch (e) {
        console.warn('FEARN.storage.set: failed to persist "' + key + '" — localStorage unavailable or full.', e);
      }
    },
  };

  // ---------- date helpers ----------
  // NOTE: dates are formatted from LOCAL getFullYear/getMonth/getDate, not
  // toISOString() (which is always UTC). Using UTC here would misfile a
  // learner's activity against the wrong calendar day whenever their local
  // time and UTC disagree on the date (evenings west of UTC, mornings east
  // of it), silently breaking streak continuity. Same YYYY-MM-DD string
  // shape as before, so every caller's comparisons/storage keys are unaffected.
  function localDateStr(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }
  function todayStr() {
    return localDateStr(new Date());
  }
  function daysBetween(a, b) {
    const d1 = new Date(a + 'T00:00:00');
    const d2 = new Date(b + 'T00:00:00');
    return Math.round((d2 - d1) / 86400000);
  }
  function addDays(dateStr, n) {
    const d = new Date(dateStr + 'T00:00:00');
    d.setDate(d.getDate() + n);
    return localDateStr(d);
  }

  // ---------- module registry ----------
  FEARN.registerModule = function (moduleDef) {
    if (!moduleDef || !moduleDef.id) throw new Error('registerModule requires an id');
    registry[moduleDef.id] = moduleDef;
  };
  FEARN.getModule = (id) => registry[id];
  FEARN.getAllModules = () => Object.values(registry);

  // ---------- streaks (generic, keyed by any string — module id or 'external:name') ----------
    function bumpStreak(key) {
    const raw = FEARN.storage.get('streak:' + key, { current: 0, best: 0, lastDate: null, history: [] });
    const rec = {
      current: raw.current || 0,
      best: raw.best || 0,
      lastDate: raw.lastDate || null,
      history: Array.isArray(raw.history) ? raw.history : (raw.lastDate ? [raw.lastDate] : [])
    };
    const today = todayStr();
    if (rec.lastDate === today) {
      if (!rec.history.includes(today)) rec.history.push(today);
      FEARN.storage.set('streak:' + key, rec);
      return rec;
    }
    if (rec.lastDate) {
      const gap = daysBetween(rec.lastDate, today);
      rec.current = gap === 1 ? rec.current + 1 : 1;
    } else {
      rec.current = 1;
    }
    rec.lastDate = today;
    rec.best = Math.max(rec.best, rec.current);
    if (!rec.history.includes(today)) rec.history.push(today);
    if (rec.history.length > 365) rec.history = rec.history.slice(-365);
    FEARN.storage.set('streak:' + key, rec);
    return rec;
  }
  function getStreak(key) {
    const raw = FEARN.storage.get('streak:' + key, { current: 0, best: 0, lastDate: null, history: [] });
    return {
      current: raw.current || 0,
      best: raw.best || 0,
      lastDate: raw.lastDate || null,
      history: Array.isArray(raw.history) ? raw.history : (raw.lastDate ? [raw.lastDate] : [])
    };
  }

  FEARN.streak = {
    log: (moduleId) => bumpStreak(moduleId),
    get: (moduleId) => getStreak(moduleId),
    logExternal: (name) => bumpStreak('external:' + name),
    getExternal: (name) => getStreak('external:' + name),
  };

  FEARN.journey = {
    log: () => bumpStreak('journey'),
    getStreak: () => getStreak('journey'),
  };

  // ---------- SRS: SM-2 algorithm ----------
  // quality: 0-5 (0-2 = fail/again, 3-5 = pass with increasing ease)
  function getSrsItems() {
    return FEARN.storage.get('srs:items', {});
  }
  function saveSrsItems(items) {
    FEARN.storage.set('srs:items', items);
  }

  FEARN.srs = {
    schedule(itemId, quality, moduleId) {
      const items = getSrsItems();
      const rec = items[itemId] || { n: 0, EF: 2.5, I: 0, moduleId, dueDate: todayStr() };
      if (quality >= 3) {
        if (rec.n === 0) rec.I = 1;
        else if (rec.n === 1) rec.I = 6;
        else rec.I = Math.round(rec.I * rec.EF);
        rec.n += 1;
      } else {
        rec.n = 0;
        rec.I = 1;
      }
      rec.EF = Math.max(1.3, rec.EF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
      rec.moduleId = moduleId || rec.moduleId;
      rec.dueDate = addDays(todayStr(), rec.I);
      rec.lastReviewed = todayStr();
      items[itemId] = rec;
      saveSrsItems(items);
      return rec;
    },
    getDue(moduleId) {
      const items = getSrsItems();
      const today = todayStr();
      return Object.entries(items)
        .filter(([, rec]) => rec.moduleId === moduleId && rec.dueDate <= today)
        .map(([itemId, rec]) => ({ itemId, ...rec }));
    },
    getItem(itemId) {
      return getSrsItems()[itemId] || null;
    },
  };

  FEARN.getAllDueReviews = function () {
    const items = getSrsItems();
    const today = todayStr();
    return Object.entries(items)
      .filter(([, rec]) => rec.dueDate <= today)
      .map(([itemId, rec]) => ({ itemId, ...rec }));
  };

  // ---------- adaptive rating (Elo-style, shared by chess/mental-math/typing/etc.) ----------
  FEARN.rating = {
    get(skillId) {
      return FEARN.storage.get('rating:' + skillId, 800);
    },
    update(skillId, success, difficulty) {
      const current = FEARN.rating.get(skillId);
      const expected = 1 / (1 + Math.pow(10, (difficulty - current) / 400));
      const actual = success ? 1 : 0;
      const K = 24;
      const next = Math.round(current + K * (actual - expected));
      FEARN.storage.set('rating:' + skillId, next);
      return next;
    },
  };

  // ---------- cross-module aggregation (for Journey Mode) ----------
  FEARN.getAllModulesProgress = function () {
    return FEARN.getAllModules().map((m) => {
      let progress = null;
      try {
        progress = typeof m.getProgress === 'function' ? m.getProgress() : null;
      } catch (e) {
        // A single module's getProgress() throwing must not take down the
        // whole aggregate Journey Mode view for every other module.
        console.error('FEARN.getAllModulesProgress: getProgress() threw for module "' + m.id + '"', e);
      }
      return { id: m.id, name: m.name, icon: m.icon, progress };
    });
  };


  // ---------- precision telemetry & activity journal ----------
  // Stores every interaction down to high-precision timestamps (ISO + epoch ms + performance.now),
  // recording category, module, action, score, checklist states, why, how, and location modes.
  const TELEMETRY_KEY = 'telemetry:events';
  const MAX_TELEMETRY_EVENTS = 5000;

  function getTelemetryEvents() {
    return FEARN.storage.get(TELEMETRY_KEY, []);
  }

  function logTelemetry(event) {
    if (!event || typeof event !== 'object') return null;
    const now = new Date();
    const perfNow = typeof performance !== 'undefined' && performance.now ? performance.now() : 0;
    const dateStr = localDateStr(now);

    const record = {
      id: 'tel_' + now.getTime() + '_' + Math.random().toString(36).slice(2, 7),
      timestamp: now.toISOString(),
      localDate: dateStr,
      localTime: now.toTimeString().split(' ')[0],
      epochMs: now.getTime(),
      highResFractionMs: Number((perfNow % 1).toFixed(6)), // micro/nanosecond precision fraction
      category: event.category || 'general', // 'fitness' | 'language' | 'skill' | 'core'
      moduleId: event.moduleId || 'system',
      action: event.action || 'activity',
      details: event.details || '',
      why: event.why || '',
      how: event.how || '',
      locationMode: event.locationMode || null,
      score: event.score !== undefined ? event.score : null,
      itemsChecked: Array.isArray(event.itemsChecked) ? event.itemsChecked : null,
      durationMs: event.durationMs || null,
      metadata: event.metadata || {}
    };

    const list = getTelemetryEvents();
    list.push(record);
    if (list.length > MAX_TELEMETRY_EVENTS) {
      list.splice(0, list.length - MAX_TELEMETRY_EVENTS);
    }
    FEARN.storage.set(TELEMETRY_KEY, list);
    return record;
  }

  FEARN.telemetry = {
    log: logTelemetry,
    getEvents(filter) {
      const all = getTelemetryEvents();
      if (!filter) return all;
      return all.filter((e) => {
        if (filter.day && e.localDate !== filter.day) return false;
        if (filter.moduleId && e.moduleId !== filter.moduleId) return false;
        if (filter.category && e.category !== filter.category) return false;
        return true;
      });
    },
    getDailySummary(dateStr) {
      const day = dateStr || todayStr();
      const events = FEARN.telemetry.getEvents({ day: day });
      const modulesTouched = new Set();
      let totalDuration = 0;
      let passCount = 0;
      events.forEach((e) => {
        if (e.moduleId) modulesTouched.add(e.moduleId);
        if (e.durationMs) totalDuration += e.durationMs;
        if (e.score && e.score.passed) passCount++;
      });
      return {
        date: day,
        eventCount: events.length,
        modulesTouched: Array.from(modulesTouched),
        passCount: passCount,
        totalDurationMs: totalDuration,
        events: events
      };
    },
    exportJSON() {
      const all = getTelemetryEvents();
      return JSON.stringify({
        exportedAt: new Date().toISOString(),
        totalEvents: all.length,
        events: all
      }, null, 2);
    }
  };

  // ---------- String Normalization & Fuzzy Matching ----------
  function normalizeString(str) {
    if (!str) return '';
    return String(str)
      .normalize('NFKC')
      .trim()
      .toLowerCase()
      .replace(/[\s\u3000]+/g, ' ')
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’“”«»‹›。、！？!?,;:]/g, '');
  }

  function levenshtein(a, b) {
    const al = a.length, bl = b.length;
    if (!al) return bl;
    if (!bl) return al;
    const matrix = [];
    for (let i = 0; i <= bl; i++) matrix[i] = [i];
    for (let j = 0; j <= al; j++) matrix[0][j] = j;
    for (let i = 1; i <= bl; i++) {
      for (let j = 1; j <= al; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[bl][al];
  }

  FEARN.matchAnswer = function matchAnswer(userInput, acceptedAnswers, options) {
    if (!userInput || !acceptedAnswers) return false;
    const opts = options || {};
    const tolerance = typeof opts.fuzzyTolerance === 'number' ? opts.fuzzyTolerance : 1;
    const list = Array.isArray(acceptedAnswers) ? acceptedAnswers : [acceptedAnswers];
    const normInput = normalizeString(userInput);

    for (const ans of list) {
      const normAns = normalizeString(ans);
      if (normInput === normAns) return true;
      if (tolerance > 0 && Math.abs(normInput.length - normAns.length) <= tolerance) {
        if (levenshtein(normInput, normAns) <= tolerance) {
          return true;
        }
      }
    }
    return false;
  };

  FEARN.getDailyPlan = function getDailyPlan() {
    const modules = FEARN.getAllModules();
    const reviews = FEARN.getAllDueReviews();
    const plan = [];

    modules.forEach((mod) => {
      let progress = null;
      try {
        progress = typeof mod.getProgress === 'function' ? mod.getProgress() : null;
      } catch (e) {}

      const dueReviews = reviews.filter((r) => r.moduleId === mod.id);
      const nextLesson = progress && progress.nextLesson ? progress.nextLesson : null;

      plan.push({
        moduleId: mod.id,
        name: mod.name || mod.id,
        icon: mod.icon || '📚',
        dueReviewsCount: dueReviews.length,
        dueReviews: dueReviews,
        nextLesson: nextLesson,
        progress: progress
      });
    });

    return plan;
  };

  // ---------- reserved for shared UI render helpers ----------
  FEARN.ui = global.FEARN && global.FEARN.ui ? global.FEARN.ui : {};

  
  // ---------- Archive & Reset Engine ----------
  FEARN.archive = {
    getHistory() {
      return FEARN.storage.get('archive:history', []);
    },
    archiveAndReset() {
      const history = FEARN.archive.getHistory();
      const journey = FEARN.journey.getStreak();
      const allProgress = FEARN.getAllModulesProgress();
      
      const archiveRecord = {
        id: 'run-' + (history.length + 1) + '-' + Date.now(),
        archivedAt: new Date().toISOString(),
        archivedDateStr: todayStr(),
        finalStreak: journey.current,
        bestStreak: journey.best,
        activeHistory: journey.history || [],
        modulesProgress: allProgress
      };
      
      history.push(archiveRecord);
      FEARN.storage.set('archive:history', history);
      
      // Reset active streaks and srs
      FEARN.storage.set('streak:journey', { current: 0, best: journey.best, lastDate: null, history: [] });
      FEARN.storage.set('srs:items', {});
      
      // Reset progress across all modules
      const keys = Object.keys(localStorage);
      keys.forEach(k => {
        if (k.startsWith('fearn:progress:') || k.startsWith('fearn:rating:')) {
          localStorage.removeItem(k);
        }
      });
      
      return archiveRecord;
    }
  };

  
  // ---------- FEARN.audio: Browser-Native Offline Speech Synthesis Engine ----------
  const AUDIO_LANG_TAGS = {
    'spanish': 'es-ES',
    'japanese': 'ja-JP',
    'arabic': 'ar-SA',
    'mandarin': 'zh-CN',
    'cantonese': 'zh-HK',
    'korean': 'ko-KR',
    'hindi': 'hi-IN',
    'urdu': 'ur-PK',
    'french': 'fr-FR',
    'german': 'de-DE',
    'russian': 'ru-RU',
    'swahili': 'sw-KE',
    'turkish': 'tr-TR',
    'vietnamese': 'vi-VN',
    'ukrainian': 'uk-UA',
    'romanian': 'ro-RO',
    'english': 'en-US',
    'brazilian-portuguese': 'pt-BR',
    'argentine-spanish': 'es-AR',
    'amharic': 'am-ET'
  };

  let currentSpeechRate = parseFloat(localStorage.getItem('fearn:audio-rate') || '1.0');
  let availableVoices = [];
  const activeUtterances = new Set();

  function populateVoices() {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
      availableVoices = window.speechSynthesis.getVoices() || [];
    } catch (e) {
      availableVoices = [];
    }
  }

  if (typeof window !== 'undefined' && window.speechSynthesis) {
    populateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }
  }

  function findBestVoice(langTag) {
    if (!availableVoices.length) populateVoices();
    if (!availableVoices.length) return null;

    const normalizedTag = (langTag || 'en-US').toLowerCase().replace('_', '-');
    const primaryLang = normalizedTag.split('-')[0];

    // 1. Exact match (e.g. ja-JP === ja-JP)
    let matched = availableVoices.find(v => (v.lang || '').toLowerCase().replace('_', '-') === normalizedTag);
    if (matched) return matched;

    // 2. Prefix match (e.g. ja-* matches ja-JP)
    matched = availableVoices.find(v => (v.lang || '').toLowerCase().startsWith(primaryLang));
    if (matched) return matched;

    // 3. Fallback: match by voice name containing language
    matched = availableVoices.find(v => (v.name || '').toLowerCase().includes(primaryLang));
    if (matched) return matched;

    // 4. Fallback: default voice
    return availableVoices.find(v => v.default) || availableVoices[0] || null;
  }

  FEARN.audio = {
    getRate() { return currentSpeechRate; },
    setRate(r) {
      currentSpeechRate = parseFloat(r) || 1.0;
      try { localStorage.setItem('fearn:audio-rate', String(currentSpeechRate)); } catch(e){}
    },
    stop() {
      try {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          window.speechSynthesis.cancel();
          activeUtterances.clear();
        }
      } catch (e) {}
    },
    speak(text, langKey) {
      try {
        if (typeof window === 'undefined' || !window.speechSynthesis) {
          return false;
        }

        // Unfreeze stuck synthesis queue common in desktop Chromium
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        window.speechSynthesis.cancel();

        const langTag = AUDIO_LANG_TAGS[langKey] || 'en-US';
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = langTag;
        utter.rate = currentSpeechRate || 0.9;

        const bestVoice = findBestVoice(langTag);
        if (bestVoice) {
          utter.voice = bestVoice;
        }

        // Prevent Chrome/Edge desktop garbage collector from dropping utterance mid-speech
        activeUtterances.add(utter);
        utter.onend = function () { activeUtterances.delete(utter); };
        utter.onerror = function () { activeUtterances.delete(utter); };

        // 10ms micro-delay prevents Chromium cancel() race condition from killing new utterance
        setTimeout(function () {
          try {
            if (window.speechSynthesis.paused) window.speechSynthesis.resume();
            window.speechSynthesis.speak(utter);
          } catch (speakErr) {
            console.warn('FEARN.audio speak dispatch error:', speakErr);
          }
        }, 12);

        return true;
      } catch (err) {
        console.warn('FEARN.audio.speak error:', err);
        return false;
      }
    },
    createSpeakButton(text, langKey) {
      if (typeof document === 'undefined') return null;
      const btn = document.createElement('button');
      btn.className = 'fearn-speak-btn';
      btn.type = 'button';
      btn.innerHTML = '🔊';
      btn.title = 'Listen to pronunciation';
      btn.style.cssText = 'background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); border-radius:6px; padding:3px 8px; margin-left:8px; cursor:pointer; font-size:0.95rem; color:#fff; transition:all 0.2s;';
      btn.onclick = function (e) {
        e.stopPropagation();
        FEARN.audio.speak(text, langKey);
      };
      return btn;
    }
  };

  // Universal Math & Text Formatter on core engine
  FEARN.formatText = function (str) {
    if (str === null || str === undefined) return '';
    let s = String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const greek = {
      '\\\\alpha': 'α', '\\\\beta': 'β', '\\\\gamma': 'γ', '\\\\Gamma': 'Γ',
      '\\\\delta': 'δ', '\\\\Delta': 'Δ', '\\\\epsilon': 'ε', '\\\\varepsilon': 'ε',
      '\\\\zeta': 'ζ', '\\\\eta': 'η', '\\\\theta': 'θ', '\\\\Theta': 'Θ',
      '\\\\iota': 'ι', '\\\\kappa': 'κ', '\\\\lambda': 'λ', '\\\\Lambda': 'Λ',
      '\\\\mu': 'μ', '\\\\nu': 'ν', '\\\\xi': 'ξ', '\\\\Xi': 'Ξ',
      '\\\\pi': 'π', '\\\\Pi': 'Π', '\\\\rho': 'ρ', '\\\\sigma': 'σ',
      '\\\\Sigma': 'Σ', '\\\\tau': 'τ', '\\\\upsilon': 'υ', '\\\\phi': 'φ',
      '\\\\varphi': 'φ', '\\\\Phi': 'Φ', '\\\\chi': 'χ', '\\\\psi': 'ψ',
      '\\\\Psi': 'Ψ', '\\\\omega': 'ω', '\\\\Omega': 'Ω'
    };
    for (const [k, v] of Object.entries(greek)) {
      s = s.replace(new RegExp(k + '(?![a-zA-Z])', 'g'), v);
    }
    const symbols = {
      '\\\\le(?!t)': '≤', '\\\\leq': '≤', '\\\\ge': '≥', '\\\\geq': '≥',
      '\\\\ne(?!w)': '≠', '\\\\neq': '≠', '\\\\approx': '≈', '\\\\equiv': '≡',
      '\\\\sim': '∼', '\\\\propto': '∝', '\\\\pm': '±', '\\\\mp': '∓',
      '\\\\times': '×', '\\\\div': '÷', '\\\\cdot': '·', '\\\\bullet': '•',
      '\\\\to': '→', '\\\\rightarrow': '→', '\\\\leftarrow': '←',
      '\\\\implies': '⇒', '\\\\Rightarrow': '⇒', '\\\\iff': '⇔',
      '\\\\in': '∈', '\\\\notin': '∉', '\\\\subset': '⊂', '\\\\subseteq': '⊆',
      '\\\\cup': '∪', '\\\\cap': '∩', '\\\\infty': '∞', '\\\\partial': '∂',
      '\\\\nabla': '∇', '\\\\sum': '∑', '\\\\prod': '∏', '\\\\int': '∫',
      '\\\\forall': '∀', '\\\\exists': '∃', '\\\\emptyset': '∅',
      '\\\\lceil': '⌈', '\\\\rceil': '⌉', '\\\\lfloor': '⌊', '\\\\rfloor': '⌋',
      '\\\\ll': '≪', '\\\\gg': '≫'
    };
    for (const [k, v] of Object.entries(symbols)) {
      s = s.replace(new RegExp(k + '(?![a-zA-Z])', 'g'), v);
    }
    s = s.replace(/\\mathbb\{R\}/g, 'ℝ').replace(/\\mathbb\{Z\}/g, 'ℤ').replace(/\\mathbb\{N\}/g, 'ℕ').replace(/\\mathbb\{Q\}/g, 'ℚ').replace(/\\mathbb\{C\}/g, 'ℂ');
    s = s.replace(/\\(?:text|textbf|mathbf|mathrm|mathit)\{([^}]+)\}/g, '$1');
    s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1 / $2)');
    s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1 / $2)');
    s = s.replace(/\\sqrt\[([^{}]+)\]\{([^{}]+)\}/g, '$1√($2)');
    s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');
    s = s.replace(/\\left\(/g, '(').replace(/\\right\)/g, ')');
    s = s.replace(/\\left\[/g, '[').replace(/\\right\]/g, ']');
    s = s.replace(/\\left\\\{/g, '{').replace(/\\right\\\}/g, '}');
    s = s.replace(/\\left\|/g, '|').replace(/\\right\|/g, '|');
    s = s.replace(/\\quad/g, '  ').replace(/\\qquad/g, '    ');
    s = s.replace(/\\\\/g, '<br>');
    s = s.replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>');
    s = s.replace(/_\{([^}]+)\}/g, '<sub>$1</sub>');
    s = s.replace(/\^2(?![0-9])/g, '²').replace(/\^3(?![0-9])/g, '³').replace(/\^0(?![0-9])/g, '⁰').replace(/\^1(?![0-9])/g, '¹').replace(/\^n(?![a-zA-Z])/g, 'ⁿ').replace(/\^t(?![a-zA-Z])/g, 'ᵗ').replace(/\^k(?![a-zA-Z])/g, 'ᵏ').replace(/\^([0-9]+)/g, '<sup>$1</sup>');
    s = s.replace(/_([0-9a-zA-Z]+)/g, '<sub>$1</sub>');
    s = s.replace(/\$\$([\s\S]*?)\$\$/g, '<div class="fearn-math-block" style="margin:10px 0; padding:10px 14px; background:rgba(0,0,0,0.3); border-left:3px solid var(--lang-1, #38bdf8); border-radius:6px; font-family:\'Fira Code\', monospace; font-size:1.02em; overflow-x:auto;">$1</div>');
    s = s.replace(/\$([^$\n]+?)\$/g, '<span class="fearn-math-inline" style="font-family:\'Fira Code\', monospace; font-weight:600; color:#7dd3fc;">$1</span>');
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#f8fafc; font-weight:700;">$1</strong>');
    s = s.replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px; font-family:\'Fira Code\', monospace; font-size:0.9em; color:#a78bfa;">$1</code>');
    return s;
  };
  FEARN.formatMath = FEARN.formatText;

  global.FEARN = FEARN;
})(typeof window !== 'undefined' ? window : globalThis);

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
    exportVault() {
      const data = {};
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith(NS)) {
            data[k.substring(NS.length)] = JSON.parse(localStorage.getItem(k));
          }
        }
      } catch (e) {}
      return JSON.stringify({
        fearnVaultVersion: 1,
        exportedAt: new Date().toISOString(),
        data: data
      }, null, 2);
    },
    importVault(jsonStr) {
      try {
        const parsed = typeof jsonStr === 'string' ? JSON.parse(jsonStr) : jsonStr;
        const vaultData = (parsed && parsed.data) ? parsed.data : parsed;
        if (!vaultData || typeof vaultData !== 'object') return false;
        Object.keys(vaultData).forEach(k => {
          FEARN.storage.set(k, vaultData[k]);
        });
        return true;
      } catch (e) {
        console.warn('FEARN.storage.importVault error:', e);
        return false;
      }
    }
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

  // ---------- SRS: FSRS-4.5 Algorithm ----------
  // 19-parameter standard weights
  const FSRS_WEIGHTS = [
    0.40255, 1.18385, 3.173, 15.69105, 7.1949, 0.5345, 1.4604, 0.0046,
    1.54575, 0.1192, 1.01925, 1.9395, 0.11, 0.29605, 0.22695, 0.5698,
    2.85535, 0.4905, 0.35
  ];
  const FSRS_FACTOR = 19 / 81; // ~0.2345679

  function getSrsItems() {
    const raw = FEARN.storage.get('srs:items', {});
    // Auto-migrate legacy SM-2 records on read without wiping progress
    let mutated = false;
    for (const key in raw) {
      if (Object.prototype.hasOwnProperty.call(raw, key)) {
        const item = raw[key];
        if (item && (item.stability === undefined || item.difficulty === undefined)) {
          const ivl = typeof item.I === 'number' && item.I > 0 ? item.I : 1;
          item.stability = item.stability !== undefined ? item.stability : Math.max(0.4, ivl);
          const ef = typeof item.EF === 'number' ? item.EF : 2.5;
          item.difficulty = item.difficulty !== undefined ? item.difficulty : Math.min(10, Math.max(1, 11 - (ef - 1.3) * (9 / 1.7)));
          item.reps = item.reps !== undefined ? item.reps : (item.n || 0);
          item.lapses = item.lapses !== undefined ? item.lapses : 0;
          item.state = item.state !== undefined ? item.state : (item.reps > 0 ? 2 : 0);
          item.interval = item.interval !== undefined ? item.interval : ivl;
          item.retrievability = 0.9;
          mutated = true;
        }
      }
    }
    if (mutated) {
      FEARN.storage.set('srs:items', raw);
    }
    return raw;
  }

  function saveSrsItems(items) {
    FEARN.storage.set('srs:items', items);
  }

  function fsrsInitStability(g) {
    return FSRS_WEIGHTS[Math.min(4, Math.max(1, g)) - 1];
  }

  function fsrsInitDifficulty(g) {
    const d = FSRS_WEIGHTS[4] - Math.exp(FSRS_WEIGHTS[5] * (g - 1)) + 1;
    return Math.min(10, Math.max(1, d));
  }

  function fsrsNextDifficulty(d, g) {
    const deltaD = -FSRS_WEIGHTS[6] * (g - 3);
    const dRaw = d + deltaD;
    const dNext = FSRS_WEIGHTS[7] * fsrsInitDifficulty(3) + (1 - FSRS_WEIGHTS[7]) * dRaw;
    return Math.min(10, Math.max(1, dNext));
  }

  function fsrsRetrievability(elapsedDays, s) {
    if (s <= 0) return 0;
    return Math.pow(1 + FSRS_FACTOR * (elapsedDays / s), -0.5);
  }

  function fsrsNextInterval(s, r) {
    const retention = (typeof r === 'number' && r > 0 && r < 1) ? r : 0.9;
    const ivl = (s / FSRS_FACTOR) * (Math.pow(retention, -2) - 1);
    return Math.max(1, Math.round(ivl));
  }

  function fsrsNextStabilityRecall(d, s, r, g) {
    const hardPenalty = (g === 2) ? FSRS_WEIGHTS[15] : 1.0;
    const easyBonus = (g === 4) ? FSRS_WEIGHTS[16] : 1.0;
    const deltaS = s * (1 + Math.exp(FSRS_WEIGHTS[8]) * (11 - d) * Math.pow(s, -FSRS_WEIGHTS[9]) * (Math.exp(FSRS_WEIGHTS[10] * (1 - r)) - 1) * hardPenalty * easyBonus);
    return Math.max(0.1, deltaS);
  }

  function fsrsNextStabilityLapse(d, s, r) {
    const sLapse = FSRS_WEIGHTS[11] * Math.pow(d, -FSRS_WEIGHTS[12]) * (Math.pow(s + 1, FSRS_WEIGHTS[13]) - 1) * Math.exp(FSRS_WEIGHTS[14] * (1 - r));
    return Math.max(0.1, Math.min(s, sLapse));
  }

  const PREFIX_TO_SUBJECT = {
    'fr': 'french', 'am': 'amharic', 'hk': 'cantonese', 'zh': 'mandarin',
    'ja': 'japanese', 'ko': 'korean', 'es': 'spanish', 'ar-es': 'argentine-spanish',
    'pt': 'brazilian-portuguese', 'de': 'german', 'it': 'italian', 'ru': 'russian',
    'uk': 'ukrainian', 'ar': 'arabic', 'hi': 'hindi', 'ur': 'urdu',
    'tr': 'turkish', 'vi': 'vietnamese', 'sw': 'swahili', 'ro': 'romanian',
    'en': 'english'
  };

  function resolveCurriculumItem(itemId, moduleId) {
    let subject = moduleId;
    if (!subject) {
      const pfx = (String(itemId).match(/^([a-z]{2,4}(?:-[a-z]{2,4})?)-/i) || [])[1];
      subject = PREFIX_TO_SUBJECT[pfx] || pfx;
    }
    const currObj = (typeof window !== 'undefined' && window.FEARN_CURRICULA) ? window.FEARN_CURRICULA : (typeof global !== 'undefined' && global.FEARN_CURRICULA ? global.FEARN_CURRICULA : {});
    const cur = currObj[subject];
    if (!cur || !cur.lessons) {
      return { target: String(itemId), translation: '', reading: '', subject: subject || '' };
    }

    const m = String(itemId).match(/^([a-z]{2,4}(?:-[a-z]{2,4})?-u\d+-l\d+)(.*)$/i);
    if (!m) {
      return { target: String(itemId), translation: '', reading: '', subject: subject || '' };
    }

    const lessonId = m[1];
    const suffix = m[2] || '';
    const lesson = cur.lessons[lessonId];
    if (!lesson) {
      return { target: String(itemId), translation: '', reading: '', subject: subject || '' };
    }

    let target = '';
    let translation = '';
    let reading = '';

    const cpMatch = suffix.match(/^-cp(\d+)$/);
    const exMatch = suffix.match(/^-ex(\d+)$/);
    const gpMatch = suffix.match(/^-gp(\d+)$/);
    const ipMatch = suffix.match(/^-ip(\d+)$/);

    if (cpMatch && lesson.checkpointTest && lesson.checkpointTest.items) {
      const item = lesson.checkpointTest.items[parseInt(cpMatch[1], 10)];
      if (item) {
        if (item.type === 'typed-recall') {
          target = (item.acceptedAnswers && item.acceptedAnswers[0]) || item.prompt;
          translation = item.explanation || item.prompt;
        } else {
          target = (item.options && item.options[item.answerIndex]) || item.prompt;
          translation = item.explanation || item.prompt;
        }
        reading = item.reading || '';
      }
    } else if (exMatch && lesson.presentation && lesson.presentation.examples) {
      const ex = lesson.presentation.examples[parseInt(exMatch[1], 10)];
      if (ex) {
        target = ex.target;
        translation = ex.translation;
        reading = ex.reading || ex.pronunciation || '';
      }
    } else if (gpMatch && lesson.guidedPractice && lesson.guidedPractice.items) {
      const item = lesson.guidedPractice.items[parseInt(gpMatch[1], 10)];
      if (item) {
        target = (item.options && item.options[item.answerIndex]) || item.prompt;
        translation = item.explanation || item.prompt;
        reading = item.reading || '';
      }
    } else if (ipMatch && lesson.independentPractice && lesson.independentPractice.items) {
      const item = lesson.independentPractice.items[parseInt(ipMatch[1], 10)];
      if (item) {
        target = (item.options && item.options[item.answerIndex]) || item.prompt;
        translation = item.explanation || item.prompt;
        reading = item.reading || '';
      }
    }

    if (!target) {
      if (lesson.presentation && lesson.presentation.examples && lesson.presentation.examples.length) {
        const ex = lesson.presentation.examples[0];
        target = ex.target;
        translation = ex.translation;
        reading = ex.reading || ex.pronunciation || '';
      } else {
        target = lesson.objective || lesson.title || itemId;
        translation = lesson.title || '';
      }
    }

    return { target, translation, reading, subject, lessonId };
  }

  FEARN.srs = {
    getDesiredRetention() {
      return parseFloat(FEARN.storage.get('srs:retention', 0.9)) || 0.9;
    },
    setDesiredRetention(r) {
      const val = Math.min(0.97, Math.max(0.7, parseFloat(r) || 0.9));
      FEARN.storage.set('srs:retention', val);
      return val;
    },
    schedule(itemId, quality, moduleId) {
      const items = getSrsItems();
      const desiredRetention = FEARN.srs.getDesiredRetention();
      const today = todayStr();

      // Normalize grade G to 1..4 (1: Again, 2: Hard, 3: Good, 4: Easy)
      let G = 3;
      if (quality === 1 || quality === 2 || quality === 3 || quality === 4) {
        G = quality;
      } else if (typeof quality === 'number') {
        if (quality <= 2) G = 1;
        else if (quality === 3) G = 2;
        else if (quality === 4) G = 3;
        else if (quality >= 5) G = 4;
      }

      let rec = items[itemId];
      if (!rec) {
        const s0 = fsrsInitStability(G);
        const d0 = fsrsInitDifficulty(G);
        const ivl = G === 1 ? 1 : fsrsNextInterval(s0, desiredRetention);
        rec = {
          stability: s0,
          difficulty: d0,
          retrievability: 1.0,
          reps: 1,
          lapses: G === 1 ? 1 : 0,
          state: G === 1 ? 1 : 2,
          interval: ivl,
          dueDate: addDays(today, ivl),
          lastReviewed: today,
          moduleId: moduleId || '',
          n: 1,
          I: ivl,
          EF: Math.max(1.3, 2.5 + (0.1 - (4 - G) * 0.1))
        };
      } else {
        const lastDate = rec.lastReviewed || today;
        const elapsedDays = Math.max(0, Math.round((new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24)));
        const currentR = fsrsRetrievability(elapsedDays, rec.stability);

        let nextS;
        let nextD = fsrsNextDifficulty(rec.difficulty, G);

        if (G === 1) {
          nextS = fsrsNextStabilityLapse(rec.difficulty, rec.stability, currentR);
          rec.lapses = (rec.lapses || 0) + 1;
          rec.state = 3;
        } else {
          nextS = fsrsNextStabilityRecall(rec.difficulty, rec.stability, currentR, G);
          rec.state = 2;
        }

        const nextIvl = G === 1 ? 1 : fsrsNextInterval(nextS, desiredRetention);

        rec.stability = nextS;
        rec.difficulty = nextD;
        rec.retrievability = currentR;
        rec.reps = (rec.reps || 0) + 1;
        rec.interval = nextIvl;
        rec.dueDate = addDays(today, nextIvl);
        rec.lastReviewed = today;
        rec.moduleId = moduleId || rec.moduleId;

        rec.n = (rec.n || 0) + 1;
        rec.I = nextIvl;
        rec.EF = Math.max(1.3, (rec.EF || 2.5) + (0.1 - (4 - G) * 0.1));
      }

      items[itemId] = rec;
      saveSrsItems(items);
      return rec;
    },
    getDue(moduleId) {
      const items = getSrsItems();
      const today = todayStr();
      return Object.entries(items)
        .filter(([, rec]) => (!moduleId || rec.moduleId === moduleId) && rec.dueDate <= today)
        .map(([itemId, rec]) => ({ itemId, ...rec }));
    },
    getItem(itemId) {
      return getSrsItems()[itemId] || null;
    },
    resolveItem: resolveCurriculumItem
  };

  FEARN.resolveSrsItem = resolveCurriculumItem;

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
    if (!userInput || !acceptedAnswers) return { matched: false };
    const opts = options || {};
    const defaultTolerance = typeof opts.fuzzyTolerance === 'number'
      ? opts.fuzzyTolerance
      : (typeof opts.tolerance === 'number' ? opts.tolerance : 1);
    const list = Array.isArray(acceptedAnswers) ? acceptedAnswers : [acceptedAnswers];
    const normInput = normalizeString(userInput);

    for (const ans of list) {
      const normAns = normalizeString(ans);
      const tolerance = normAns.length <= 2 ? 0 : defaultTolerance;
      if (normInput === normAns) return { matched: true, matchedAnswer: ans };
      if (tolerance > 0 && Math.abs(normInput.length - normAns.length) <= tolerance) {
        if (levenshtein(normInput, normAns) <= tolerance) {
          return { matched: true, matchedAnswer: ans };
        }
      }
    }
    return { matched: false };
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

  
  // ---------- FEARN.audio: Browser-Native Speech Synthesis Engine ----------
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

  let currentSpeechRate = 1.0;
  try {
    currentSpeechRate = parseFloat(localStorage.getItem('fearn:audio-rate') || '1.0');
  } catch(e) {}
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
    // Automatically stop ongoing speech on route / hash / popstate navigation
    window.addEventListener('hashchange', function () {
      if (FEARN.audio && FEARN.audio.stop) FEARN.audio.stop();
      if (FEARN.speech && FEARN.speech.stop) FEARN.speech.stop();
    });
    window.addEventListener('popstate', function () {
      if (FEARN.audio && FEARN.audio.stop) FEARN.audio.stop();
      if (FEARN.speech && FEARN.speech.stop) FEARN.speech.stop();
    });
  }

  function findBestVoice(langTag) {
    if (!availableVoices.length) populateVoices();
    if (!availableVoices.length) return null;

    const normalizedTag = (langTag || 'en-US').toLowerCase().replace('_', '-');
    const primaryLang = normalizedTag.split('-')[0];

    // Special handling for Cantonese vs Mandarin
    if (normalizedTag === 'zh-hk' || normalizedTag === 'yue') {
      let matched = availableVoices.find(v => {
        const vl = (v.lang || '').toLowerCase().replace('_', '-');
        return vl === 'zh-hk' || vl === 'yue' || vl === 'zh-yue' || (v.name && /cantonese|hong kong|廣東話|粤语/i.test(v.name));
      });
      if (matched) return matched;
      // Do NOT fall back to standard Mandarin voice for Cantonese if distinct phonology is required
      return null;
    }

    // 1. Exact match (e.g. es-AR === es-AR, fr-FR === fr-FR)
    let matched = availableVoices.find(v => (v.lang || '').toLowerCase().replace('_', '-') === normalizedTag);
    if (matched) return matched;

    // 2. Exact primary language match (e.g. es-ES matches es-AR, pt-PT matches pt-BR)
    matched = availableVoices.find(v => {
      const vPrimary = (v.lang || '').toLowerCase().replace('_', '-').split('-')[0];
      return vPrimary === primaryLang;
    });
    if (matched) return matched;

    // 3. Match by full language name keyword in voice name (never a 2-letter substring)
    const FULL_LANG_NAMES = {
      'es': 'spanish', 'ja': 'japanese', 'ar': 'arabic', 'zh': 'chinese',
      'yue': 'cantonese', 'ko': 'korean', 'hi': 'hindi', 'ur': 'urdu',
      'fr': 'french', 'de': 'german', 'ru': 'russian', 'sw': 'swahili',
      'tr': 'turkish', 'vi': 'vietnamese', 'uk': 'ukrainian', 'ro': 'romanian',
      'en': 'english', 'pt': 'portuguese', 'am': 'amharic'
    };
    const fullName = FULL_LANG_NAMES[primaryLang];
    if (fullName) {
      matched = availableVoices.find(v => (v.name || '').toLowerCase().includes(fullName));
      if (matched) return matched;
    }

    // Return null rather than mis-speaking with an irrelevant foreign voice (e.g. speaking Amharic with an English or Korean voice)
    return null;
  }

  function resolveLangTag(langKey) {
    if (!langKey) return 'en-US';
    const cleanKey = String(langKey).replace(/^lang-/, '').toLowerCase();
    return AUDIO_LANG_TAGS[cleanKey] || AUDIO_LANG_TAGS[langKey] || langKey || 'en-US';
  }

  FEARN.audio = {
    getRate() { return currentSpeechRate; },
    setRate(r) {
      currentSpeechRate = parseFloat(r) || 1.0;
      try { localStorage.setItem('fearn:audio-rate', String(currentSpeechRate)); } catch(e){}
    },
    hasVoice(langKey) {
      const langTag = resolveLangTag(langKey);
      return findBestVoice(langTag) !== null;
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
        // Stop any currently playing audio so new audio plays immediately
        window.speechSynthesis.cancel();

        const langTag = resolveLangTag(langKey);
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = langTag;
        utter.rate = currentSpeechRate || 0.95;

        const bestVoice = findBestVoice(langTag);
        if (bestVoice) {
          utter.voice = bestVoice;
        }

        activeUtterances.add(utter);
        utter.onend = function () { activeUtterances.delete(utter); };
        utter.onerror = function (e) {
          activeUtterances.delete(utter);
          console.warn('SpeechSynthesisUtterance error:', e);
        };

        // Synchronous dispatch directly within user click call stack
        window.speechSynthesis.speak(utter);
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
      
      const hasMatchingVoice = FEARN.audio.hasVoice(langKey);
      if (hasMatchingVoice) {
        btn.className = 'fearn-speak-btn';
        btn.title = 'Listen to pronunciation';
        btn.setAttribute('aria-label', 'Listen to pronunciation');
        btn.style.cssText = 'background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); border-radius:6px; padding:3px 8px; margin-left:8px; cursor:pointer; font-size:0.95rem; color:#fff; transition:all 0.2s;';
      } else {
        btn.className = 'fearn-speak-btn fearn-speak-fallback';
        btn.title = 'Listen to pronunciation (Device fallback — native voice not detected on this system)';
        btn.setAttribute('aria-label', 'Listen to pronunciation (Device synthesis fallback)');
        btn.style.cssText = 'background:rgba(245,158,11,0.08); border:1px dashed rgba(245,158,11,0.4); border-radius:6px; padding:3px 8px; margin-left:8px; cursor:pointer; font-size:0.95rem; color:#fde68a; opacity:0.9; transition:all 0.2s;';
      }
      
      btn.onclick = function (e) {
        e.stopPropagation();
        btn.style.transform = 'scale(1.18)';
        if (hasMatchingVoice) {
          btn.style.borderColor = 'var(--accent-1, #10b981)';
          btn.style.background = 'rgba(16, 185, 129, 0.25)';
        } else {
          btn.style.borderColor = 'rgba(245, 158, 11, 0.7)';
          btn.style.background = 'rgba(245, 158, 11, 0.25)';
        }
        setTimeout(function () {
          btn.style.transform = '';
          if (hasMatchingVoice) {
            btn.style.borderColor = 'rgba(255,255,255,0.18)';
            btn.style.background = 'rgba(255,255,255,0.08)';
          } else {
            btn.style.borderColor = 'rgba(245,158,11,0.4)';
            btn.style.background = 'rgba(245,158,11,0.08)';
          }
        }, 350);
        FEARN.audio.speak(text, langKey);
      };
      return btn;
    }
  };

  // ---------- FEARN.speech: Web Speech API Recognition & Pronunciation Checker ----------
  let activeRecognition = null;

  FEARN.speech = {
    isSupported() {
      if (typeof window === 'undefined') return false;
      return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    },
    stop() {
      if (activeRecognition) {
        try { activeRecognition.stop(); } catch (e) {}
        activeRecognition = null;
      }
    },
    startListening(options, callback) {
      options = options || {};
      if (!FEARN.speech.isSupported()) {
        if (callback) callback({ error: 'unsupported', message: 'Speech recognition is not supported in this browser.' });
        return null;
      }

      FEARN.speech.stop();

      const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognitionClass();
      activeRecognition = recognition;

      const langKey = options.langKey || 'english';
      recognition.lang = AUDIO_LANG_TAGS[langKey] || options.langTag || 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;

      if (options.onStart) recognition.onstart = options.onStart;

      recognition.onresult = function (event) {
        activeRecognition = null;
        if (!event.results || !event.results.length) {
          if (callback) callback({ error: 'no-speech', transcript: '' });
          return;
        }

        const transcript = event.results[0][0].transcript;
        const confidence = event.results[0][0].confidence;
        let matched = false;
        let score = 0;

        if (options.expectedText) {
          const expected = String(options.expectedText).trim();
          if (FEARN.matchAnswer) {
            const matchRes = FEARN.matchAnswer(transcript, [expected], {
              mode: options.matchMode || 'normalized',
              tolerance: options.tolerance !== undefined ? options.tolerance : 2
            });
            matched = matchRes.matched;
            score = matchRes.score !== undefined ? matchRes.score : (matched ? 1 : 0.5);
          } else {
            matched = transcript.trim().toLowerCase() === expected.toLowerCase();
            score = matched ? 1 : 0.5;
          }
        }

        const result = {
          transcript: transcript,
          confidence: confidence,
          matched: matched,
          score: score,
          expectedText: options.expectedText
        };

        if (callback) callback(result);
      };

      recognition.onerror = function (event) {
        activeRecognition = null;
        if (callback) callback({ error: event.error || 'error', message: event.message || 'Recognition error' });
      };

      recognition.onend = function () {
        activeRecognition = null;
        if (options.onEnd) options.onEnd();
      };

      try {
        recognition.start();
        return recognition;
      } catch (err) {
        activeRecognition = null;
        if (callback) callback({ error: 'start-failed', message: String(err) });
        return null;
      }
    },
    createMicButton(options) {
      if (typeof document === 'undefined') return null;
      options = options || {};
      const btn = document.createElement('button');
      btn.className = 'fearn-mic-btn';
      btn.type = 'button';
      btn.innerHTML = '🎤';
      btn.title = FEARN.speech.isSupported() ? 'Practice speaking / Pronunciation check' : 'Speech recognition not supported in this browser';
      btn.style.cssText = 'background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); border-radius:6px; padding:3px 8px; margin-left:6px; cursor:pointer; font-size:0.95rem; color:#fff; transition:all 0.2s;';

      if (!FEARN.speech.isSupported()) {
        btn.style.opacity = '0.4';
        btn.style.cursor = 'not-allowed';
        return btn;
      }

      let isRecording = false;

      btn.onclick = function (e) {
        e.stopPropagation();
        if (isRecording) {
          FEARN.speech.stop();
          btn.innerHTML = '🎤';
          btn.style.background = 'rgba(255,255,255,0.08)';
          btn.style.borderColor = 'rgba(255,255,255,0.18)';
          isRecording = false;
          return;
        }

        const expectedText = typeof options.getExpectedText === 'function' ? options.getExpectedText() : (options.expectedText || '');
        btn.innerHTML = '🔴';
        btn.style.background = 'rgba(239, 68, 68, 0.25)';
        btn.style.borderColor = 'rgba(239, 68, 68, 0.6)';
        isRecording = true;

        FEARN.speech.startListening({
          langKey: options.langKey,
          expectedText: expectedText,
          tolerance: options.tolerance || 2,
          onStart: function () {
            btn.title = 'Listening... Speak now';
          },
          onEnd: function () {
            isRecording = false;
            btn.innerHTML = '🎤';
            btn.style.background = 'rgba(255,255,255,0.08)';
            btn.style.borderColor = 'rgba(255,255,255,0.18)';
            btn.title = 'Practice speaking / Pronunciation check';
          }
        }, function (res) {
          isRecording = false;
          btn.innerHTML = '🎤';
          btn.style.background = 'rgba(255,255,255,0.08)';
          btn.style.borderColor = 'rgba(255,255,255,0.18)';
          if (options.onResult) options.onResult(res);
        });
      };
      return btn;
    }
  };

  // Universal Math & Text Formatter on core engine
  function formatMathAndText(str) {
    if (str === null || str === undefined) return '';
    let s = String(str);

    // Normalize line endings
    s = s.replace(/\r\n|\r/g, '\n');

    // Strip excessive LaTeX backslash escapes (e.g. \\\\ge -> \ge, \\text -> \text)
    s = s.replace(/\\\\([a-zA-Z]+)/g, '\\$1');

    // Math symbols replacement (both \symbol and \\symbol)
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

    s = s.replace(/\\mathbb\{R\}/g, 'ℝ').replace(/\\mathbb\{Z\}/g, 'ℤ').replace(/\\mathbb\{N\}/g, 'ℕ').replace(/\\mathbb\{Q\}/g, 'ℚ').replace(/\\mathbb\{C\}/g, 'ℂ');
    
    // Iteratively strip nested LaTeX text & formatting commands
    let prev;
    do {
      prev = s;
      s = s.replace(/\\(?:text|textbf|mathbf|mathrm|mathit|operatorname)\{([^}]+)\}/g, '$1');
      s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1 / $2)');
      s = s.replace(/\\sqrt\[([^{}]+)\]\{([^{}]+)\}/g, '$1√($2)');
      s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');
    } while (s !== prev);

    s = s.replace(/\\left\(/g, '(').replace(/\\right\)/g, ')');
    s = s.replace(/\\left\[/g, '[').replace(/\\right\]/g, ']');
    s = s.replace(/\\left\\\{/g, '{').replace(/\\right\\\}/g, '}');
    s = s.replace(/\\left\|/g, '|').replace(/\\right\|/g, '|');
    s = s.replace(/\\quad/g, '  ').replace(/\\qquad/g, '    ');

    // Escape HTML characters before injecting formatting tags
    s = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Markdown Headings
    s = s.replace(/^###[ \t]+(.*)$/gm, '<h4 style="font-size:1.05rem; font-weight:800; color:#38bdf8; margin:16px 0 6px 0;">$1</h4>');
    s = s.replace(/^##[ \t]+(.*)$/gm, '<h3 style="font-size:1.18rem; font-weight:900; color:#38bdf8; margin:20px 0 8px 0;">$1</h3>');
    s = s.replace(/^#[ \t]+(.*)$/gm, '<h2 style="font-size:1.35rem; font-weight:900; color:#38bdf8; margin:22px 0 10px 0;">$1</h2>');

    // Horizontal rules
    s = s.replace(/^(?:---|___|\*\*\*)[ \t]*$/gm, '<hr style="border:none; border-top:1px solid rgba(255,255,255,0.12); margin:16px 0;">');

    // Blockquotes
    s = s.replace(/^>[ \t]+(.*)$/gm, '<blockquote style="border-left:3px solid #38bdf8; margin:10px 0; padding:6px 14px; background:rgba(56,189,248,0.06); color:#cbd5e1; border-radius:0 6px 6px 0;">$1</blockquote>');

    // Math display & inline blocks
    s = s.replace(/\$\$([\s\S]*?)\$\$/g, '<div class="fearn-math-block" style="margin:10px 0; padding:10px 14px; background:rgba(0,0,0,0.3); border-left:3px solid var(--lang-1, #38bdf8); border-radius:6px; font-family:\'Fira Code\', monospace; font-size:1.02em; overflow-x:auto;">$1</div>');
    s = s.replace(/\$([^$\n]+?)\$/g, '<span class="fearn-math-inline" style="font-family:\'Fira Code\', monospace; font-weight:600; color:#7dd3fc;">$1</span>');

    // Bold & Italic (Nested-safe non-greedy regexes)
    s = s.replace(/\*\*([\s\S]*?)\*\*/g, '<strong style="color:#f8fafc; font-weight:700;">$1</strong>');
    s = s.replace(/(?:^|[^\w])__([^_]+)__(?![\w])/g, ' <strong style="color:#f8fafc; font-weight:700;">$1</strong>');
    s = s.replace(/(^|[^*])\*([^*\s\n](?:[^*\n]*?[^*\s\n])?)\*(?!\*)/g, '$1<em style="font-style:italic;">$2</em>');

    // Inline Code
    s = s.replace(/`([^`]+)`/g, '<code style="background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px; font-family:\'Fira Code\', monospace; font-size:0.9em; color:#a78bfa;">$1</code>');

    // Superscripts & Subscripts
    s = s.replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>');
    s = s.replace(/_\{([^}]+)\}/g, '<sub>$1</sub>');
    s = s.replace(/\^2(?![0-9])/g, '²').replace(/\^3(?![0-9])/g, '³').replace(/\^0(?![0-9])/g, '⁰').replace(/\^1(?![0-9])/g, '¹').replace(/\^n(?![a-zA-Z])/g, 'ⁿ').replace(/\^t(?![a-zA-Z])/g, 'ᵗ').replace(/\^k(?![a-zA-Z])/g, 'ᵏ');

    // Numbered list items
    s = s.replace(/(?:^|\n)([ \t]*\d+[\.\)]\s+[^\n]+(?:\n[ \t]*\d+[\.\)]\s+[^\n]+)*)/g, (match, p1) => {
      const items = p1.trim().split('\n').map(line => {
        return line.replace(/^[ \t]*\d+[\.\)]\s+(.*)$/, '<li style="margin-bottom:4px;">$1</li>');
      }).join('');
      return '\n<ol class="fearn-explanation-list">' + items + '</ol>\n';
    });

    // Bullet list items
    s = s.replace(/(?:^|\n)([ \t]*[-•]\s+[^\n]+(?:\n[ \t]*[-•]\s+[^\n]+)*)/g, (match, p1) => {
      const items = p1.trim().split('\n').map(line => {
        return line.replace(/^[ \t]*[-•]\s+(.*)$/, '<li style="margin-bottom:4px;">$1</li>');
      }).join('');
      return '\n<ul class="fearn-explanation-list">' + items + '</ul>\n';
    });

    // Paragraph splitting and joining
    const paragraphs = s.split(/\n\n+/);
    const formattedParagraphs = paragraphs.map(p => {
      p = p.trim();
      if (!p) return '';
      if (p.includes('<ul') || p.includes('<ol') || p.includes('<div') || p.includes('<h2') || p.includes('<h3') || p.includes('<h4') || p.includes('<hr') || p.includes('<blockquote')) {
        p = p.replace(/\n*(<\/?(?:ul|ol|li|div|h2|h3|h4|hr|blockquote)[^>]*>)\n*/g, '$1');
        p = p.replace(/\n/g, '<br>');
        return p;
      }
      return p.replace(/\n/g, ' ');
    });

    return formattedParagraphs.filter(Boolean).join('<br><br>');
  }

  function stripMarkdown(str) {
    if (!str) return '';
    let s = String(str);
    s = s.replace(/\\\\([a-zA-Z]+)/g, '\\$1');
    s = s.replace(/\\ge\b|\\geq\b/g, '≥').replace(/\\le\b|\\leq\b/g, '≤').replace(/\\approx\b/g, '≈').replace(/\\times\b/g, '×').replace(/\\to\b/g, '→').replace(/\\pm\b/g, '±').replace(/\\cdot\b/g, '·');
    
    let prev;
    do {
      prev = s;
      s = s.replace(/\\(?:text|textbf|mathbf|mathrm|mathit|operatorname)\{([^}]+)\}/g, '$1');
    } while (s !== prev);

    s = s.replace(/\$\$([\s\S]*?)\$\$/g, '$1').replace(/\$([^$\n]+?)\$/g, '$1');
    s = s.replace(/^#{1,6}\s+/gm, '');
    s = s.replace(/\*\*([\s\S]*?)\*\*/g, '$1');
    s = s.replace(/__([^_]+)__/g, '$1');
    s = s.replace(/\*([^*]+)\*/g, '$1');
    s = s.replace(/`([^`]+)`/g, '$1');
    s = s.replace(/~~([^~]+)~~/g, '$1');
    s = s.replace(/^>\s+/gm, '');
    return s.trim();
  }

  FEARN.formatText = formatMathAndText;
  FEARN.formatMath = formatMathAndText;
  FEARN.stripMarkdown = stripMarkdown;

  global.FEARN = FEARN;
})(typeof window !== 'undefined' ? window : globalThis);

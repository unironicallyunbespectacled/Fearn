// FEARN Fitness — authoring ledger.
//
// Tracks how much of the full fitness roadmap (data/fitness-program.js) has
// been authored in full depth vs. left as a roadmap skeleton, per the
// FEARN_SCHEMA ledger contract. This ledger describes CONTENT AUTHORING
// status (what the content team has written), not an individual learner's
// personal progress — per-learner progress lives in FEARN.storage /
// FEARN.streak / FEARN.rating, managed by modules/fitness.js at runtime.
//
// Authoring proceeded front-to-back through the priority-ordered roadmap:
// Sprint Speed & Explosiveness (all 8 phases) -> Cardio (all 6) ->
// Kegel / Pelvic Floor (all 4) -> Abs / Core (all 6) -> Legs / Lower Body
// (all 7) -> Stamina / Endurance (all 6) -> Agility (all 6) -> Flexibility
// (all 6) -> Back (all 6) -> Shoulders (all 5) -> Arms (all 5) ->
// Full-Body Integration (all 6) -> Taekwondo (all 7) -> Football Drills
// (all 7) = all 85 phases across all 14 tracks authored in full. The
// roadmap skeleton is now fully realized end to end.
//
// Loaded AFTER schema.js and data/fitness-program.js, BEFORE modules/fitness.js.

(function (global) {
  const program = global.FEARN_FITNESS_PROGRAM ||
    (typeof require === 'function' ? require('./fitness-program.js') : null);

  if (!program) {
    console.error('data/fitness.ledger.js loaded before data/fitness-program.js — FEARN_FITNESS_LEDGER will not be built.');
    return;
  }

  // Per-track authoring summary, useful for progress displays.
  const trackSummary = program.TRACKS.map((t) => {
    const phases = program.getTrackRoadmap(t.id);
    const authored = phases.filter((p) => program.AUTHORED_IDS.indexOf(p.id) !== -1);
    return {
      trackId: t.id,
      trackName: t.name,
      priority: t.priority,
      totalPhases: phases.length,
      authoredPhases: authored.length,
      fullyAuthored: authored.length === phases.length,
    };
  });

  const FEARN_FITNESS_LEDGER = {
    subject: 'fitness',
    fullRoadmapLength: program.ROADMAP.length, // 85 phases across all 14 tracks
    authoredInFull: program.AUTHORED_IDS.slice(), // 85 ids, in front-to-back authoring order (full roadmap)
    stubOnly: program.STUB_IDS.slice(), // 0 ids remaining — every roadmap entry now has a full lesson body
    // Last phase completed by CONTENT AUTHORING (i.e. the frontier of full-depth
    // authoring), matching the front-to-back order the roadmap was written in.
    lastCompletedLessonId: 'football-p7',
    // Next phase to author when authoring resumes. Every phase in the 85-phase
    // roadmap is now authored in full, so there is nothing left to resume.
    nextToAuthor: null,
    authoredAsOf: '2026-08-19',
    trackSummary: trackSummary,
  };

  // Self-check against the shared schema contract; never throws, just warns.
  const schemaRef = global.FEARN_SCHEMA || (typeof require === 'function' ? (function () { try { return require('../schema.js'); } catch (e) { return null; } })() : null);
  if (schemaRef && typeof schemaRef.validateLedger === 'function') {
    const result = schemaRef.validateLedger(FEARN_FITNESS_LEDGER);
    if (!result.valid) {
      console.error('FEARN_FITNESS_LEDGER failed validateLedger:', result.errors);
    }
  } else {
    console.warn('data/fitness.ledger.js: FEARN_SCHEMA not found — skipping ledger self-validation.');
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = FEARN_FITNESS_LEDGER;
  }
  global.FEARN_FITNESS_LEDGER = FEARN_FITNESS_LEDGER;
})(typeof window !== 'undefined' ? window : globalThis);

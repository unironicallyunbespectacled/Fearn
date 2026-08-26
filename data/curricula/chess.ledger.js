// FEARN Ledger — Chess
// Tracks which lessons in data/curricula/chess.js are fully authored (validated against
// FEARN_SCHEMA.validateLesson) versus still roadmap-skeleton stubs.
// authoredInFull / stubOnly together must cover every lesson id in the curriculum roadmap.

(function (global) {
  const ledger = {
    subject: 'chess',
    fullRoadmapLength: 50,
    authoredInFull: [
      'chess-u1-l1', 'chess-u1-l2', 'chess-u1-l3', 'chess-u1-l4', 'chess-u1-l5',
      'chess-u2-l1', 'chess-u2-l2', 'chess-u2-l3', 'chess-u2-l4', 'chess-u2-l5',
      'chess-u3-l1', 'chess-u3-l2', 'chess-u3-l3', 'chess-u3-l4', 'chess-u3-l5',
      'chess-u4-l1', 'chess-u4-l2', 'chess-u4-l3', 'chess-u4-l4', 'chess-u4-l5',
      'chess-u5-l1', 'chess-u5-l2', 'chess-u5-l3', 'chess-u5-l4', 'chess-u5-l5',
      'chess-u6-l1', 'chess-u6-l2', 'chess-u6-l3', 'chess-u6-l4', 'chess-u6-l5',
      'chess-u7-l1', 'chess-u7-l2', 'chess-u7-l3', 'chess-u7-l4', 'chess-u7-l5',
      'chess-u8-l1', 'chess-u8-l2', 'chess-u8-l3', 'chess-u8-l4', 'chess-u8-l5',
      'chess-u9-l1', 'chess-u9-l2', 'chess-u9-l3', 'chess-u9-l4', 'chess-u9-l5',
      'chess-u10-l1', 'chess-u10-l2', 'chess-u10-l3', 'chess-u10-l4', 'chess-u10-l5',
    ],
    stubOnly: [],
    lastCompletedLessonId: 'chess-u10-l5',
    nextToAuthor: null,
    updatedAt: '2026-08-23',
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ledger;
  }
  global.FEARN_LEDGERS = global.FEARN_LEDGERS || {};
  global.FEARN_LEDGERS.chess = ledger;
})(typeof window !== 'undefined' ? window : globalThis);

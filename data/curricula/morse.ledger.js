// FEARN Ledger — Morse Code
// Tracks which lessons in data/curricula/morse.js are fully authored versus roadmap-skeleton stubs.

(function (global) {
  const ledger = {
    subject: 'morse',
    fullRoadmapLength: 50,
    authoredInFull: [
      'morse-u1-l1', 'morse-u1-l2', 'morse-u1-l3', 'morse-u1-l4', 'morse-u1-l5',
      'morse-u2-l1', 'morse-u2-l2', 'morse-u2-l3', 'morse-u2-l4', 'morse-u2-l5',
      'morse-u3-l1', 'morse-u3-l2', 'morse-u3-l3', 'morse-u3-l4', 'morse-u3-l5',
      'morse-u4-l1', 'morse-u4-l2', 'morse-u4-l3', 'morse-u4-l4', 'morse-u4-l5',
      'morse-u5-l1', 'morse-u5-l2', 'morse-u5-l3', 'morse-u5-l4', 'morse-u5-l5',
      'morse-u6-l1', 'morse-u6-l2', 'morse-u6-l3', 'morse-u6-l4', 'morse-u6-l5',
      'morse-u7-l1', 'morse-u7-l2', 'morse-u7-l3', 'morse-u7-l4', 'morse-u7-l5',
      'morse-u8-l1', 'morse-u8-l2', 'morse-u8-l3', 'morse-u8-l4', 'morse-u8-l5',
      'morse-u9-l1', 'morse-u9-l2', 'morse-u9-l3', 'morse-u9-l4', 'morse-u9-l5',
      'morse-u10-l1', 'morse-u10-l2', 'morse-u10-l3', 'morse-u10-l4', 'morse-u10-l5',
    ],
    stubOnly: [],
    lastCompletedLessonId: 'morse-u10-l5',
    nextToAuthor: null,
    updatedAt: '2026-08-23',
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ledger;
  }
  global.FEARN_LEDGERS = global.FEARN_LEDGERS || {};
  global.FEARN_LEDGERS.morse = ledger;
})(typeof window !== 'undefined' ? window : globalThis);

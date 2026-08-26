// Scrabble Strategy authoring ledger — tracks which lessons in data/curricula/scrabble.js
// are fully authored vs. still stubs. Must pass FEARN_SCHEMA.validateLedger().
(function (global) {
  var SCRABBLE_LEDGER = {
  "subject": "scrabble",
  "fullRoadmapLength": 40,
  "authoredInFull": [
    "scrabble-u1-l1",
    "scrabble-u1-l2",
    "scrabble-u1-l3",
    "scrabble-u1-l4",
    "scrabble-u1-l5",
    "scrabble-u2-l1",
    "scrabble-u2-l2",
    "scrabble-u2-l3",
    "scrabble-u2-l4",
    "scrabble-u2-l5",
    "scrabble-u3-l1",
    "scrabble-u3-l2",
    "scrabble-u3-l3",
    "scrabble-u3-l4",
    "scrabble-u3-l5",
    "scrabble-u4-l1",
    "scrabble-u4-l2",
    "scrabble-u4-l3",
    "scrabble-u4-l4",
    "scrabble-u4-l5",
    "scrabble-u5-l1",
    "scrabble-u5-l2",
    "scrabble-u5-l3",
    "scrabble-u5-l4",
    "scrabble-u5-l5",
    "scrabble-u6-l1",
    "scrabble-u6-l2",
    "scrabble-u6-l3",
    "scrabble-u6-l4",
    "scrabble-u6-l5",
    "scrabble-u7-l1",
    "scrabble-u7-l2",
    "scrabble-u7-l3",
    "scrabble-u7-l4",
    "scrabble-u7-l5",
    "scrabble-u8-l1",
    "scrabble-u8-l2",
    "scrabble-u8-l3",
    "scrabble-u8-l4",
    "scrabble-u8-l5"
  ],
  "stubOnly": [],
  "lastCompletedLessonId": "scrabble-u8-l5",
  "nextToAuthor": null,
  "updatedAt": "2026-08-23"
};

  if (typeof module !== 'undefined' && module.exports) module.exports = SCRABBLE_LEDGER;
  global.FEARN_LEDGERS = global.FEARN_LEDGERS || {};
  global.FEARN_LEDGERS['scrabble'] = SCRABBLE_LEDGER;
})(typeof window !== 'undefined' ? window : globalThis);

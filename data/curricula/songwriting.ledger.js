// Songwriting authoring ledger — tracks which lessons in data/curricula/songwriting.js
// are fully authored vs. still stubs. Must pass FEARN_SCHEMA.validateLedger().
(function (global) {
  var SONGWRITING_LEDGER = {
  "subject": "songwriting",
  "fullRoadmapLength": 40,
  "authoredInFull": [
    "songwriting-u1-l1",
    "songwriting-u1-l2",
    "songwriting-u1-l3",
    "songwriting-u1-l4",
    "songwriting-u1-l5",
    "songwriting-u2-l1",
    "songwriting-u2-l2",
    "songwriting-u2-l3",
    "songwriting-u2-l4",
    "songwriting-u2-l5",
    "songwriting-u3-l1",
    "songwriting-u3-l2",
    "songwriting-u3-l3",
    "songwriting-u3-l4",
    "songwriting-u3-l5",
    "songwriting-u4-l1",
    "songwriting-u4-l2",
    "songwriting-u4-l3",
    "songwriting-u4-l4",
    "songwriting-u4-l5",
    "songwriting-u5-l1",
    "songwriting-u5-l2",
    "songwriting-u5-l3",
    "songwriting-u5-l4",
    "songwriting-u5-l5",
    "songwriting-u6-l1",
    "songwriting-u6-l2",
    "songwriting-u6-l3",
    "songwriting-u6-l4",
    "songwriting-u6-l5",
    "songwriting-u7-l1",
    "songwriting-u7-l2",
    "songwriting-u7-l3",
    "songwriting-u7-l4",
    "songwriting-u7-l5",
    "songwriting-u8-l1",
    "songwriting-u8-l2",
    "songwriting-u8-l3",
    "songwriting-u8-l4",
    "songwriting-u8-l5"
  ],
  "stubOnly": [],
  "lastCompletedLessonId": "songwriting-u8-l5",
  "nextToAuthor": null,
  "updatedAt": "2026-08-23"
};

  if (typeof module !== 'undefined' && module.exports) module.exports = SONGWRITING_LEDGER;
  global.FEARN_LEDGERS = global.FEARN_LEDGERS || {};
  global.FEARN_LEDGERS['songwriting'] = SONGWRITING_LEDGER;
})(typeof window !== 'undefined' ? window : globalThis);

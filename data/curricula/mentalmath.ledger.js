// Mental Math authoring ledger — tracks which lessons in data/curricula/mentalmath.js
// are fully authored vs. still stubs. Must pass FEARN_SCHEMA.validateLedger().
(function (global) {
  var MENTALMATH_LEDGER = {
  "subject": "mentalmath",
  "fullRoadmapLength": 40,
  "authoredInFull": [
    "mentalmath-u1-l1",
    "mentalmath-u1-l2",
    "mentalmath-u1-l3",
    "mentalmath-u1-l4",
    "mentalmath-u1-l5",
    "mentalmath-u2-l1",
    "mentalmath-u2-l2",
    "mentalmath-u2-l3",
    "mentalmath-u2-l4",
    "mentalmath-u2-l5",
    "mentalmath-u3-l1",
    "mentalmath-u3-l2",
    "mentalmath-u3-l3",
    "mentalmath-u3-l4",
    "mentalmath-u3-l5",
    "mentalmath-u4-l1",
    "mentalmath-u4-l2",
    "mentalmath-u4-l3",
    "mentalmath-u4-l4",
    "mentalmath-u4-l5",
    "mentalmath-u5-l1",
    "mentalmath-u5-l2",
    "mentalmath-u5-l3",
    "mentalmath-u5-l4",
    "mentalmath-u5-l5",
    "mentalmath-u6-l1",
    "mentalmath-u6-l2",
    "mentalmath-u6-l3",
    "mentalmath-u6-l4",
    "mentalmath-u6-l5",
    "mentalmath-u7-l1",
    "mentalmath-u7-l2",
    "mentalmath-u7-l3",
    "mentalmath-u7-l4",
    "mentalmath-u7-l5",
    "mentalmath-u8-l1",
    "mentalmath-u8-l2",
    "mentalmath-u8-l3",
    "mentalmath-u8-l4",
    "mentalmath-u8-l5"
  ],
  "stubOnly": [],
  "lastCompletedLessonId": "mentalmath-u8-l5",
  "nextToAuthor": null,
  "updatedAt": "2026-08-23"
};

  if (typeof module !== 'undefined' && module.exports) module.exports = MENTALMATH_LEDGER;
  global.FEARN_LEDGERS = global.FEARN_LEDGERS || {};
  global.FEARN_LEDGERS['mentalmath'] = MENTALMATH_LEDGER;
})(typeof window !== 'undefined' ? window : globalThis);

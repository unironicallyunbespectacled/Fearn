// Typing Speed authoring ledger — tracks which lessons in data/curricula/typing.js
// are fully authored vs. still stubs. Must pass FEARN_SCHEMA.validateLedger().
(function (global) {
  var TYPING_LEDGER = {
  "subject": "typing",
  "fullRoadmapLength": 45,
  "authoredInFull": [
    "typing-u1-l1",
    "typing-u1-l2",
    "typing-u1-l3",
    "typing-u1-l4",
    "typing-u1-l5",
    "typing-u2-l1",
    "typing-u2-l2",
    "typing-u2-l3",
    "typing-u2-l4",
    "typing-u2-l5",
    "typing-u3-l1",
    "typing-u3-l2",
    "typing-u3-l3",
    "typing-u3-l4",
    "typing-u3-l5",
    "typing-u4-l1",
    "typing-u4-l2",
    "typing-u4-l3",
    "typing-u4-l4",
    "typing-u4-l5",
    "typing-u5-l1",
    "typing-u5-l2",
    "typing-u5-l3",
    "typing-u5-l4",
    "typing-u5-l5",
    "typing-u6-l1",
    "typing-u6-l2",
    "typing-u6-l3",
    "typing-u6-l4",
    "typing-u6-l5",
    "typing-u7-l1",
    "typing-u7-l2",
    "typing-u7-l3",
    "typing-u7-l4",
    "typing-u7-l5",
    "typing-u8-l1",
    "typing-u8-l2",
    "typing-u8-l3",
    "typing-u8-l4",
    "typing-u8-l5",
    "typing-u9-l1",
    "typing-u9-l2",
    "typing-u9-l3",
    "typing-u9-l4",
    "typing-u9-l5"
  ],
  "stubOnly": [],
  "lastCompletedLessonId": "typing-u9-l5",
  "nextToAuthor": null,
  "updatedAt": "2026-08-23"
};

  if (typeof module !== 'undefined' && module.exports) module.exports = TYPING_LEDGER;
  global.FEARN_LEDGERS = global.FEARN_LEDGERS || {};
  global.FEARN_LEDGERS['typing'] = TYPING_LEDGER;
})(typeof window !== 'undefined' ? window : globalThis);

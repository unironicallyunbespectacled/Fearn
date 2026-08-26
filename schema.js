// FEARN Schema — Lesson template & Ledger format, with validators.
// Every subject module's authored content must pass validateLesson().
// Every subject's ledger must pass validateLedger() before a module trusts it.

(function (global) {
  const REQUIRED_LESSON_FIELDS = ['id', 'unit', 'level', 'objective'];

  function validateLesson(lesson) {
    const errors = [];
    REQUIRED_LESSON_FIELDS.forEach((f) => {
      if (lesson[f] === undefined || lesson[f] === null || lesson[f] === '') {
        errors.push(`Lesson missing required field: ${f}`);
      }
    });
    if (lesson.objective && lesson.objective.length < 10) {
      errors.push('Lesson objective is too short to be a real can-do statement');
    }
    if (
      !lesson.checkpointTest ||
      !Array.isArray(lesson.checkpointTest.items) ||
      lesson.checkpointTest.items.length === 0
    ) {
      errors.push('Lesson missing a real checkpointTest with items');
    } else {
      lesson.checkpointTest.items.forEach((item, idx) => {
        if (!item || typeof item !== 'object') {
          errors.push(`checkpointTest item ${idx} is not an object`);
          return;
        }
        const promptText = item.prompt || item.standard || item.task || item.name;
        if (!promptText || typeof promptText !== 'string') {
          errors.push(`checkpointTest item ${idx} missing prompt/task/standard string`);
        }
        if (item.type === 'typed-recall') {
          if (!Array.isArray(item.acceptedAnswers) || item.acceptedAnswers.length === 0) {
            errors.push(`checkpointTest typed-recall item ${idx} missing acceptedAnswers array`);
          }
        }
      });
    }
    if (
      !lesson.presentation ||
      !lesson.presentation.explanation ||
      !Array.isArray(lesson.presentation.examples) ||
      lesson.presentation.examples.length === 0
    ) {
      errors.push('Lesson missing real presentation content (explanation + examples)');
    }
    return { valid: errors.length === 0, errors };
  }

  function validateLedger(ledger) {
    const errors = [];
    ['subject', 'fullRoadmapLength', 'authoredInFull', 'stubOnly'].forEach((f) => {
      if (ledger[f] === undefined) errors.push(`Ledger missing field: ${f}`);
    });
    if (
      ledger.lastCompletedLessonId &&
      Array.isArray(ledger.authoredInFull) &&
      !ledger.authoredInFull.includes(ledger.lastCompletedLessonId)
    ) {
      errors.push('lastCompletedLessonId is not present in authoredInFull — ledger is inconsistent');
    }
    if (Array.isArray(ledger.authoredInFull) && Array.isArray(ledger.stubOnly)) {
      const overlap = ledger.authoredInFull.filter((id) => ledger.stubOnly.includes(id));
      if (overlap.length > 0) {
        errors.push(`Lesson ids appear in both authoredInFull and stubOnly: ${overlap.join(', ')}`);
      }
    }
    return { valid: errors.length === 0, errors };
  }

  const FEARN_SCHEMA = { validateLesson, validateLedger, REQUIRED_LESSON_FIELDS };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = FEARN_SCHEMA;
  }
  global.FEARN_SCHEMA = FEARN_SCHEMA;
})(typeof window !== 'undefined' ? window : globalThis);

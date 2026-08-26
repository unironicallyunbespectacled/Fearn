# Testing methodology + daily lesson pacing overhaul — paste to Gemini

This is a pedagogical redesign, not a bug fix — read it fully before touching code. Read HANDOFF.md first as always, run the audit.

## The actual problem, diagnosed concretely

Inspected real shipped content (Japanese `ja-u3-l3`, but this is true across every subject checked): `guidedPractice.items` and `checkpointTest.items` use the **identical** format — 4-option multiple choice, same shape, same difficulty. A checkpoint that's structurally identical to the practice immediately before it doesn't test whether anything was actually retained; it tests whether the learner can still see a pattern they looked at seconds ago. This is a real pedagogical weakness, not a style nitpick:

- **Recognition (pick from 4) is a much weaker test than recall (produce from nothing).** This is the most replicated finding in learning science — the "testing effect"/retrieval practice. An app that only ever asks multiple choice can make someone feel fluent while measuring the weakest form of memory there is.
- **4 options = 25% guess floor**, often lower in practice because distractors are eliminable by pattern alone without knowing the actual rule.
- **Checkpoints are never cumulative.** Nothing in a checkpoint forces retrieval of material from earlier lessons — that's left entirely to the separate SM-2 review queue, which is good but insufficient on its own. Mixing in old material with new material inside the test itself ("interleaving") is a well-established way to produce much better long-term retention, specifically because it's harder in the moment.
- **Zero production checks for target-script content.** The learner is never asked to actually produce (type) an answer in Japanese/Arabic/Russian/etc., only ever to recognize it among options.

## The redesign — implement this

### 1. Checkpoint tests get a new required item shape alongside the existing one

Keep the existing `{prompt, options[], answerIndex, explanation}` shape for **guided practice** (scaffolded recognition is fine there). For **checkpoint tests**, the majority of items should use a new typed-recall shape instead:

```js
{
  type: 'typed-recall',           // distinguishes from the existing multiple-choice shape
  prompt: 'Translate: "my father"',
  acceptedAnswers: ['わたしの父', 'watashi no chichi'],  // array — accept native script AND romanized where applicable; list every genuinely valid variant, don't just pick one
  matchMode: 'normalized',        // trim + case-fold + collapse whitespace before comparing; for non-Latin scripts also strip half-width/full-width punctuation differences
  fuzzyTolerance: 1,              // small edit-distance allowance for typos (tune per language — looser for long romanized strings, tighter/zero for short strings where a 1-character "typo" could actually be a different real word)
  explanation: '...'
}
```

Add `FEARN_SCHEMA` support for this shape in `schema.js` (additive only — the existing multiple-choice shape must keep validating exactly as before; `validateLesson` should accept EITHER shape per checkpoint item, requiring the fields relevant to whichever `type` is present). Write the actual fuzzy-match comparison function once, shared (in `engine.js` or a small new shared helper `ui-components.js` can also use), not reimplemented per module.

For scripts where typed native-script input isn't reasonable at the learner's current level (e.g. Japanese before kana is taught, Arabic before the abjad is introduced), accept romanized input as valid — check what's already been taught via the lesson's own unit/level rather than guessing.

Only fall back to multiple-choice for a checkpoint item when typed recall genuinely doesn't fit (e.g. "which grammatical case is this," a conceptual/metalinguistic question with no single typeable string) — majority of checkpoint items should be typed-recall going forward.

### 2. Checkpoints become partly cumulative

Every checkpoint test should include 1-2 items pulled from earlier lessons in the same unit (or the previous unit) alongside the current lesson's new material — use the lesson's own `prerequisites` field and the subject's ledger to know what's fair game to pull from. This isn't a rewrite of old lessons, just an addition to new checkpoint items going forward: when authoring a new lesson's checkpoint, deliberately include a couple of retrieval items from what's already been taught.

### 3. Chess and morse get their own version of the same principle

- **Chess**: once the visual chessboard exists (see the separate chess/debug prompt already queued), checkpoint items should ask the learner to type the move in algebraic notation (e.g. "Nc6+") against the rendered board, not pick from 4 pre-written move options. Validate the typed answer against the correct move string (exact match is fine here — algebraic notation isn't fuzzy).
- **Morse**: checkpoint items should require actual encode/decode production (type the letters after hearing/seeing a pattern, or type the pattern after seeing letters) rather than recognizing a pattern already shown nearby.

### 4. Optional, lower priority: a listening modality using the browser's built-in TTS

`window.speechSynthesis` / `SpeechSynthesisUtterance` (already planned for the fitness coach-voice feature — reuse the same technique) can read a target-language word or sentence aloud and ask the learner to type what they heard. This is a genuinely different modality (listening comprehension) and costs zero new dependencies. Add this as a smaller fraction of checkpoint items where it's a natural fit, not a wholesale replacement of the above.

## Daily lesson pacing — the second, related gap

Right now every subject except fitness is purely open-ended ("here's your next unit/lesson, come back whenever") — there's no "here's today's lesson" concept the way the fitness module now has a composed daily workout. Journey Mode already aggregates **reviews due** across subjects (`FEARN.getAllDueReviews()`), but it does NOT surface **the next new lesson to start** per active subject — those are two different things and only one is currently visible in one place.

Close this gap:

- Each module's `getProgress()` (or a new small addition to the shared contract, additive only) should expose "next lesson available to start" alongside existing progress data.
- Journey Mode's aggregate view should show, per subject the learner has touched at least once, a combined "Today" entry: due reviews (already works) + the next new lesson ready to start (new). This gives a real "here's your plan for today, across everything" view — the actual pitch of a whole-self school — instead of requiring the learner to open each subject individually to find out what's next.
- This is presentation/aggregation only — it does not change how lessons are authored or how the ledger/scroll methodology works, just makes what's already true (there IS a well-defined next lesson per subject) visible in one place.

## Presentation/UI redesign — confirmed real problem, not just a vibe

Read `modules/languages/japanese.js`'s `renderCheckpoint()` function directly before changing anything — here's what it actually does right now, confirmed: every checkpoint question renders into one long scrolling list, all at once, no progress indicator, no per-item feedback during the test. On submit, the ONLY feedback is a bare aggregate line — `"Score: 3/6 — Try again after reviewing."` — with zero indication of which items were wrong or why, before the learner is sent to retry blind. That's the real basis for "all up in my face, tons of text, no help figuring out why I failed."

Fix, concretely:

1. **One question at a time**, not a scrolling wall — a focused card per item with a visible progress indicator ("Question 3 of 6"), consistent with the same focused single-item-at-a-time pattern already planned for the fitness guided-workout session (see the fitness/workout prompt already queued) — reuse that pattern's spirit here for consistency across the app.
2. **Practice steps (guidedPractice/independentPractice) keep immediate per-item feedback** — that's appropriate there, it's how practice teaches. Keep explanations short (1-2 sentences), not paragraphs.
3. **Checkpoint/test steps withhold per-item feedback during the test itself** — this is actually correct as currently implemented, keep it (a test that reveals right/wrong as you go isn't really testing retention, it's just guided practice with extra steps). What's missing is a **review screen after submission**: list ONLY the items actually missed, each with its explanation, before offering retry — efficient, targeted correction instead of either "nothing" (current) or "re-show everything" (would be its own kind of overwhelming).
4. Keep the existing whole-checkpoint retry behavior (retry all items, not just missed ones) — that's fine and standard for a mastery-based checkpoint.

## Timed mode — opt-in, not default, and only where it fits

The user asked whether tests should be timed. Real answer: **sometimes, deliberately, not as a blanket default.** Timing a comprehension/grammar checkpoint confounds "doesn't know it" with "got nervous or is a careful/methodical thinker" — a well-documented problem with timed testing in general. But timing is not artificial everywhere: for **mental math, typing, and morse decode speed specifically, speed IS the actual skill being measured** — those already have natural timing built into their domain and should have an explicit timed mode (or already do — verify). For languages/chess/other skills, add an **optional** "speed round" variant learners can choose (e.g. a bonus vocab-recall sprint) rather than making the default checkpoint timed. Never impose a hard timer on a first-attempt comprehension checkpoint by default.

## Pre-class work / classwork / assignments / polls — the school-activity taxonomy

The user asked whether FEARN should adopt real classroom activity types. Real answer: **partially yes, and here's specifically which parts are worth it and which would just be duplicating what already exists:**

- **Pre-class primer — genuinely worth adding, new.** A short activity BEFORE `presentation` where the learner guesses/attempts something using only what they already know (not yet taught the new rule). This is the "pretesting effect" — attempting and failing at something *before* being taught it measurably improves how well the subsequent teaching sticks, this is real, replicated cognitive-science finding, not just a school-flavor gimmick. Add as a new lightweight stage before presentation (distinct from the existing SRS `warmup`, which reviews OLD material — this primes NEW material).
- **Classwork — already exists, don't duplicate it.** `guidedPractice` + `independentPractice` already are classwork. If the school framing helps the UI read more coherently, label that section "Classwork" in the interface — but do not add a new redundant schema field for something that's already there under a different name. Adding a parallel "classwork" field alongside guidedPractice/independentPractice would be exactly the kind of pointless duplication HANDOFF.md already warns against.
- **Assignments — formalize a pattern that's already emerging organically.** Several units already end in a "capstone" lesson/dialogue combining everything taught in that unit. Make this an explicit, distinctly-framed concept: an end-of-unit "Assignment" that's visibly bigger/cumulative and marks real unit completion, rather than just another same-sized lesson. This is genuinely useful structure, not busywork — it gives the learner a clear sense of unit-level completion beyond just "lesson 5 of 5."
- **Polls — genuinely useful, and it closes a loop that already exists elsewhere.** A quick, ungraded "how did that feel — too easy / just right / too hard" after a lesson. This is the exact same mechanic already planned for the fitness module's post-workout feedback (see the workout-UX prompt) — extend it app-wide so every subject's adaptive pacing gets the same real signal, not just fitness. Keep it to one tap, no text entry, shown once per lesson, never blocking progress.

Implement pre-class primers and polls as new, small, additive schema fields (don't touch the existing required fields). Formalize assignments by marking certain existing/future unit-ending lessons with a flag (e.g. `isAssignment: true`) and giving that state distinct UI treatment, rather than inventing a whole parallel content type.

## Priority and scope note

This is a real methodology change, not a quick pass — implement schema support first (additive, verify old content still validates unchanged), then update the checkpoint-authoring approach for **new** lessons going forward (don't feel obligated to retrofit already-shipped checkpoints across 250+ lessons — that's a separate, much larger task; note in HANDOFF.md that older checkpoints predate this format and are lower priority to retrofit). Then the daily-pacing aggregation. Verify everything live — write a real checkpoint using the new format, load it in a browser, actually type an answer (correct, then a typo within tolerance, then a genuinely wrong answer) and confirm all three grade correctly before committing.

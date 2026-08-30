# Prompt 7: Fix Silent Audio AND Bring Real Audio Coverage to Every Part of Every Lesson, Across All 30 Fronds

Before touching anything, read `REPORTS/AIRTIGHT_PROMPT_FOR_ANTIGRAVITY_9_LANGUAGES.md`, `REPORTS/PROMPT_ADDENDUM_HARDENED_EVASIONS.md`, and `REPORTS/ANTI_GAMING_PROTOCOL_V2_GATE_TAMPERING.md`. Same no-scrimping standard as everything else in this project: every gap here gets genuinely closed, not minimally patched in one spot while the rest stays silent.

## Two separate problems, both real, both need fixing

**Problem 1 — the existing speaker button produces no sound when clicked.** This was already scoped in a prior prompt (root-cause investigation: check the `setTimeout(..., 12)` wrapping `window.speechSynthesis.speak(utter)` in `FEARN.audio.speak()` in `engine.js`, which may be breaking the browser's requirement that speech synthesis be triggered synchronously within a real user click — plus voice-loading races, cancel()/speak() timing, and other suspects). If that work hasn't been done yet in this session, do it now, first, as the foundation everything else depends on — there's no point adding audio buttons everywhere if the underlying `FEARN.audio.speak()` call doesn't actually produce sound.

**Problem 2 — audio does not exist at all in most of the app, even where the button works.** Confirmed by direct code inspection, independently, not self-reported:

- In every one of the 20 language modules (`modules/languages/*.js`), the shared `renderLessonFlow` structure has 5 distinct phases: warm-up review, presentation, guided practice, independent practice, checkpoint test. A speaker button (`FEARN.audio.createSpeakButton`) exists in exactly **2 of these 5**: the warm-up review cards and the presentation examples list. **Guided practice, independent practice, and the checkpoint test have zero audio anywhere** — no button, nothing — despite every one of those screens containing target-language prompts, example sentences, and answer options that a learner studying pronunciation would want to hear.
- **All 6 skill Fronds** — Chess, Scrabble, Typing, Songwriting, Mental Math — have no audio integration at all (Morse has its own separate tone-based system via `window.FEARN_PLAY_MORSE`, which is a different feature and out of scope here, but should still be spot-checked as part of Problem 1's browser testing since it's also audio).
- **Fitness** has no audio integration at all.
- The 3 university-course Fronds (b110, b111, cs110) — verify their actual rendering path (they don't appear to have dedicated files under `modules/`; find where their content renders and confirm whether audio makes sense for them at all, given they're not language-pronunciation content — if it doesn't apply, say so explicitly rather than silently skipping).

## What to do

### Part 1: Fix the root cause (if not already done)
Do the full investigation from the prior audio prompt: find and fix why `FEARN.audio.speak()` produces no audible sound when a working button is clicked, verified live in a real browser (Node.js cannot exercise `speechSynthesis` — no amount of `node -e` testing proves anything here). Report the actual root cause found, in plain terms.

### Part 2: Add real speaker buttons everywhere target-language text appears in a lesson, for all 20 language Fronds
1. **Guided practice and independent practice** (`renderPractice`, shared across all 20 language modules): add a speaker button next to the prompt/question text, and next to each multiple-choice option where the option itself is target-language text (not next to English-only explanatory text). Use the same `FEARN.audio.createSpeakButton(text, langKey)` pattern already used elsewhere — this is additive, wire it into the existing render functions, don't rebuild them.
2. **Checkpoint test** (`renderCheckpoint`/`renderQuestion`): same treatment — a speaker button on the prompt and on target-language answer options.
3. **Verify this doesn't clutter the UI** — a speaker icon next to every single option in a 4-option multiple choice might be excessive; use judgment (e.g., one button for the prompt itself is probably enough in most cases; add per-option buttons only where hearing the specific option's pronunciation is the actual point of the question, such as a listening-discrimination exercise). Use your judgment, but the default should be "audio is available for target-language text a learner would want to hear," not "audio only exists in the two places it happened to be added first."
4. **One commit per language**, verified live in a real browser after each — click multiple buttons across all 5 lesson phases for that language and confirm real audio.

### Part 3: Skill Fronds and Fitness
For each of Chess, Scrabble, Typing, Songwriting, Mental Math, and Fitness: determine whether spoken audio genuinely makes sense for that Frond's content (e.g., Scrabble might benefit from hearing a word spoken; Chess might benefit from a move being read aloud in algebraic notation; Typing/Mental Math/Fitness may have little to no legitimate use for speech synthesis, being non-linguistic). Where it genuinely makes sense, add it using the same `FEARN.audio` infrastructure. Where it doesn't, explicitly report why not, rather than silently skipping the Frond. Do not force speech synthesis onto content where it wouldn't actually help a learner, just to claim "audio coverage" — that would be exactly the kind of hollow compliance this project's standards forbid.

### Part 4: The 3 course Fronds (b110, b111, cs110)
Find where these actually render (they're not separate files under `modules/`), determine if spoken audio applies to their content in any meaningful way, and either add it or report explicitly why it doesn't apply.

## Verification standard — same as everything else in this project

- Real browser testing required, not code-reading alone. Click actual buttons, hear actual sound (or confirm via DevTools that `speechSynthesis.speaking` becomes true and an utterance completes).
- Report exact counts: how many speaker buttons existed before, how many exist after, broken down by Frond and by lesson phase (presentation / guided practice / independent practice / checkpoint / warm-up).
- Do not claim "audio is now everywhere" without having actually clicked through multiple lesson phases, multiple languages, and confirmed it live.
- Every threshold here is "does this genuinely help a learner hear real pronunciation," not "does a button exist somewhere on the page." A cosmetic speaker icon that doesn't produce sound (Problem 1) or that was never added in the first place (Problem 2) are both failures — fix both, everywhere they apply.

## What NOT to do

- Do not add decorative speaker icons that don't actually call working audio — that would combine both problems into a worse one.
- Do not force audio onto content (Typing drills, Mental Math arithmetic, Fitness rep counts) where it adds no real learning value, just to inflate a coverage count.
- Do not touch curriculum content, the audit script, or unrelated systems while doing this — this is a scoped audio-coverage task.

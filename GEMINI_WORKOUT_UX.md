# Workout UX overhaul + mascot/logo note — paste this to Gemini

Read HANDOFF.md first as always, run the audit, then address these two things.

## 1. Mascot/logo reference files — informational, not urgent

The original design mockups for the goat mascot and fern logo live at `design-reference/Goat and Fern.dc.html` (plus `.thumbnail`, `image-slot.js`, `support.js` in the same folder). **These are not directly usable** — that `.dc.html` file is an interactive design-tool artifact (depends on a runtime that isn't present here, uses `{{ }}` template placeholders), not plain renderable HTML. The actual SVG geometry from it was already hand-extracted and adapted into simplified, icon-scale versions inline in `app.html` (search for `fearn-fern-logo` and `fearn-goat-icon`) — that's what's currently rendering in the nav and greeting card.

Do not spend effort trying to pull more fidelity from the original poster-scale art into those small icons — at icon size (30-40px) it would look muddy, not better, the reference files are 1080×1350 poster illustrations with far more detail than a nav icon can show. If you want to use the fuller-detail version somewhere, the right place is a spacious one-time surface (a splash/loading screen, an "About FEARN" page) — optional polish, lower priority than content authoring or the fixes below.

## 2. Workout UX overhaul — real reference, concrete spec

The user attached screenshots of an existing polished workout app (exercise list → fullscreen guided session) as the target UX. Build toward this, replacing the current in-page exercise list with a proper guided-session flow. Two parts:

### Part A — pre-workout summary screen (mostly exists, refine to match reference exactly)

A list of the day's exercises, each row showing: exercise name, and either a rep count (`x12`) or a duration (`00:30`) depending on the exercise type — some exercises in a session have multiple sets, some just one; keep exercises from the same muscle group placed consecutively where it makes sense, but don't force uniformity — the reference screenshots show naturally varied set counts and ordering, not a rigid template. A "Start" button launches Part B.

### Part B — fullscreen guided session (the actual new feature, does not currently exist)

Clicking "Start" replaces the current page content with a fullscreen, single-exercise-at-a-time takeover:
- One exercise shown at a time, large and focused — name, current set (e.g. "Set 2 of 3"), and either a rep target or a running countdown timer depending on the exercise type.
- Timed exercises auto-advance to rest/next when the timer hits zero; rep-based exercises advance when the user taps a "Done" / "Next" button.
- A rest countdown between exercises/sets (reuse the rest-period values already in the authored fitness content, e.g. "30-45s" — don't invent new numbers, read them from the phase data).
- A pause control that halts the active timer.
- A visible progress indicator (e.g. "Exercise 3 of 6") so the user always knows how far through the session they are.
- An info button on each exercise that opens a dismissible overlay with the exercise's full written how-to (already authored — this is the phase's `presentation.explanation` / form cues content, just surfaced here instead of only on the pre-workout list). **Do not add video demonstrations** — this is a static, no-server, offline-capable app by design (same reason the confetti/sound effects were hand-rolled instead of pulled from a CDN); video assets for hundreds of exercises across 4 location modes would either require external hosting (breaks offline-capability) or is simply not something you can author. Skip this specific ask and say so plainly in your report — don't fake it or silently drop it without mentioning it.
- On session completion: a summary screen — time taken, an estimated calories-burned figure (build a simple, clearly-labeled heuristic, e.g. based on session duration and rough intensity tier per track; don't overclaim precision it doesn't have), and the session should log to `FEARN.streak.log('fitness')` same as any other module completion.
- A post-workout feedback prompt: "How was that? Too easy / Just right / Too hard" — feed this back into the adaptive progression logic already described in `modules/fitness.js` (the phase-advancement/session-count logic) so it actually influences future sessions, not just cosmetic.
- Sound effects (dings on set/exercise completion, confetti on session completion) — reuse the existing `FEARN.ui.celebrateCheckpoint()` pattern and Web Audio technique already in `ui-components.js`, don't rebuild it from scratch.
- An automated coach voice: use the browser's built-in `SpeechSynthesis` API (`window.speechSynthesis`, `SpeechSynthesisUtterance`) — this is a real, free, dependency-free browser API, consistent with this app's "no external dependencies" design. Announce things like the exercise name, "3, 2, 1, go," rest-period start/end. Make it toggleable (mute control), same spirit as the existing 🎉 celebration mute toggle.

### Part C — two more things the user asked for directly

- **Let the user browse phases they haven't reached yet, not just completed ones.** HANDOFF.md/an earlier commit already describes a "Future Phase Inspector" — clicking any phase in the Track Library opens a preview of its content while preserving actual progress. Confirm this still works after your Part B changes (it's easy to accidentally wall it off behind "only show reached phases" logic when rebuilding the session flow) — don't remove or regress it. If it's not actually working, build it: any phase, reached or not, should be viewable in a read-only preview from the Track Library/roadmap browser.
- **Rename "checkpoint" in the fitness UI specifically.** The word "checkpoint" (from the shared `checkpointTest` schema field, same term used for language/skill quizzes) reads as confusing/academic in a workout context — the user didn't understand why a workout has a "checkpoint." The underlying data field name stays `checkpointTest` (don't touch the schema — other subjects depend on it), but the fitness module's *displayed* label for it should be workout-native language instead — something like "Phase Test," "Level-Up Check," or "Progress Check." Pick one and use it consistently in the fitness UI only.

### Notes

- This is a real, substantial UI feature — build it, test it live in a browser (click Start, run through a full session including the rest periods and the completion screen, confirm the streak actually logs and the feedback prompt actually appears), and commit once verified, per the standing commit policy.
- Don't let this become an excuse to stop authoring content — this is a UI/UX feature in the fitness module's own file lane (`modules/fitness.js`, plus `ui-components.js`/`components.css` for shared pieces), it shouldn't block or replace the ongoing language/skills scroll work in other sessions.

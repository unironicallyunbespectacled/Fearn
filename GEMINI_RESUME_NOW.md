# START HERE — paste this whole file into the new Antigravity/Gemini session

Your previous session crashed. This is the single up-to-date resume prompt — the other `GEMINI_*.md` files in this repo root are still real and still relevant, but this file tells you what's actually done, what's actually still open in each of them, and what to do first. Don't re-derive that from scratch by reading all of them cold.

## Step 0, always

Read `HANDOFF.md` in full. Run the rigorous audit script from its "Session interruption safety" section. As of the last check it reported `FULLY CLEAN` and the project stood at **370/2135 lessons authored (17.3%), not counting fitness**. Re-run it yourself, don't trust that number if time has passed.

## Fix this first — confirmed, precise, currently broken

Opening the Fitness module throws right now: `Cannot read properties of undefined (reading 'forEach')` at `renderDailyWorkoutSummary` in `modules/fitness.js` (~line 605). It calls `dayPlan.exercises.forEach(...)`, but `data/fitness-program.js`'s `DAILY_PLANS` entries only have a `tracks` array (`{trackId, label, role}`) — no `exercises` field exists on that data shape. Fix: build the exercise list from `dayPlan.tracks` — for each track listed, look up `PROGRAM.TRACKS`, find the user's current phase in it, and pull that phase's exercises, instead of expecting a flat list that was never authored. Verify live afterward across a few different days, not just one, and commit immediately once confirmed.

(For context: this is a *second*, *different* fitness crash from an earlier one — `registerModule('fitness', {...})` being called with a string instead of an object — which IS already fixed and confirmed working, don't re-touch that part.)

## What's genuinely done vs. still open in each other file

- **`GEMINI_CHESS_AND_DEBUG.md`**: fitness crash fix #1 (registerModule) — ✅ done. Visual chessboard using the real downloaded SVG assets in `design-reference/Multiple chessboard designs/` — ❌ not started, no board-rendering code exists anywhere yet (checked: no `renderBoard`/`chessboard` function in the codebase). Test-quality audit — unknown/unverified, treat as not done until checked.
- **`GEMINI_WORKOUT_UX.md`**: the guided single-exercise-at-a-time session flow — ✅ substantially built (commit `8b6963d`, "Nike Training Club style guided workout session, audio/voice coach, and phase tests"). Verify it still actually works once you've fixed the crash above (the crash may be blocking you from even reaching it). Confirm the "Future Phase Inspector" (browsing unreached phases) still works post-changes, and that "checkpoint" was renamed to workout-native language in the fitness UI specifically — both were explicit asks, unconfirmed whether they survived.
- **`GEMINI_TESTING_REDESIGN.md`**: the shared infrastructure landed and is verified working — `FEARN.matchAnswer()` (fuzzy typed-recall matching) and `FEARN.getDailyPlan()` (cross-subject due-reviews + next-lesson aggregation) both exist in `engine.js` and both work (tested live: exact match, in-tolerance typo, wrong answer all grade correctly; getDailyPlan returns real per-module data). `schema.js` accepts the new `typed-recall` checkpoint item shape. **But zero actual lesson content uses the new format yet** (`grep -rc "typed-recall" data/curricula/*.js` returns nothing) — the infrastructure is ready, authoring hasn't started using it. The checkpoint UI redesign (one-question-at-a-time, missed-items review screen instead of a bare score) — not yet verified, check `renderCheckpoint()` in the language modules before assuming it's done. Pre-class primers, formalized assignments, and post-lesson polls — not started.
- **`GEMINI_DO_NOT_STOP.md` and `GEMINI_PROMPT.md`**: standing methodology, always in force, not a one-time task — re-read periodically, especially `GEMINI_DO_NOT_STOP.md`'s rule about what a stopping message must look like when you actually run out of budget.
- **`GEMINI_FITNESS_FIXES.md`**: this is the OLDEST fitness file and is now superseded by everything above — the feasibility/depth work it asked for was substantially completed across several later commits. Don't re-read it as a task list; it's historical.

## Recommended order

1. Fix the fitness `dayPlan.exercises` crash (above). Verify live. Commit.
2. Verify what actually survived from `GEMINI_WORKOUT_UX.md` now that fitness renders again — confirm, don't assume.
3. Start authoring new checkpoint items in the `typed-recall` format for whichever subject you continue next (the infrastructure is ready and tested) — don't retrofit old ones, just use it going forward per `GEMINI_TESTING_REDESIGN.md`.
4. Build the visual chessboard from the real SVG assets per `GEMINI_CHESS_AND_DEBUG.md` when you get to chess.
5. Keep unrolling the scroll — least-complete subjects first (currently Vietnamese/Russian/Turkish at 15/170), per the standing methodology. Never stop and present a summary as if this is finished — 17.3% is real progress, not a finish line.

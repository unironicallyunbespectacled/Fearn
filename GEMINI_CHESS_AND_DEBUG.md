# Fitness crash fix (do this first) + chess visual board + test quality — paste to Gemini

Read HANDOFF.md first as always, run the audit. Then, in this order:

## 1. FIX FIRST — Fitness module is completely broken right now, confirmed live

Opening the Fitness module currently shows "Coming soon — this module has not been built yet" instead of any real content, and the console throws:

```
Error: registerModule requires an id
    at FEARN.registerModule (engine.js) ... at modules/fitness.js:901:3
```

**Root cause, exact and confirmed** — `modules/fitness.js` line 896 currently reads:

```js
FEARN.registerModule('fitness', {
  render: renderFitness,
  getStreak: () => FEARN.streak.get('fitness')
});
```

`FEARN.registerModule` takes **one** object argument shaped `{ id, name, icon, render(container), getProgress() }` (see `engine.js` and every other module for the correct pattern — e.g. `modules/skills/chess.js`'s `registerModule` call). Calling it with a string first argument means `moduleDef` becomes the string `'fitness'`, `moduleDef.id` is `undefined`, and `engine.js` correctly throws. This also means the object is missing `id`, `name`, `icon`, and `getProgress` entirely — not just a wrong call shape, but incomplete. Fix to match the real contract, e.g.:

```js
FEARN.registerModule({
  id: 'fitness',
  name: 'Fitness',
  icon: '🏃',
  render: renderFitness,
  getProgress: () => FEARN.streak.get('fitness') // or whatever this module's real progress shape should be — check what other modules return from getProgress() and match it, don't just alias getStreak
});
```

This is almost certainly a regression from one of the recent fitness edits (the workout UX overhaul or the checkpoint-relabeling work) — whoever touched this file last should have reloaded and checked the console, per HANDOFF.md's own rule, and didn't. **After fixing: reload on a genuinely fresh tab and confirm the Fitness module actually opens and renders real content, not just that the error stops.** Then do a general debug sweep of the whole app the same way — click into every one of the 18 modules on a fresh tab, console open, confirm zero errors anywhere, not just fitness. This exact class of bug (a feature edited without a post-edit reload+console check) has happened multiple times now — it's worth specifically re-reading the "Non-negotiables" section of HANDOFF.md before continuing.

## 2. Chess: real visual chessboard, not text/FEN only

**Real, ready-to-use assets now exist** — the user downloaded a full chessboard design pack into `design-reference/Multiple chessboard designs/`. Use these directly, don't build board art from scratch:

- `boards/{glass,marble,mono,vinyl,wood}.svg` — 5 complete, plain, standalone chessboard SVGs (516×516 viewBox), each already includes the full 8×8 alternating-square grid AND algebraic coordinate labels (a-h, 1-8) baked in at fixed positions. No external runtime, no templating — open any one directly, it's just SVG markup. Board squares run from x=34,y=34 in 56px increments, 8 columns and rows (confirm this exactly by reading the file — don't hardcode from this description, verify it yourself).
- `pieces/{glass,marble,mono,vinyl,wood}.svg` — matching piece sets, one per board style. **Important**: these files are laid out as a labeled reference/spec sheet (all 12 pieces — 6 types × white/black — arranged in a grid with text labels, sized for a print/documentation page), not individual ready-to-drop symbols. You'll need to extract each piece's shape (the `<g transform="...">...</g>` group for each piece) out of the sheet and re-use it as an individual positionable element (e.g. wrap each as an SVG `<symbol>` with its own id, or just replicate the path/shape data into your board-rendering code) rather than including the whole sheet file as-is.
- Ignore `Chessboards Standalone.html` / `Chessboards Standalone (1).html` — those are tool-generated bundler packaging (a self-extracting blob unpacker), not useful source, not meant to be read or adapted.
- Pick ONE style as the default. "Glass" is a reasonable first choice since it's closest to this app's existing liquid-glass dark visual language elsewhere — but check `boards/glass.svg`'s actual colors before assuming they'll read well on FEARN's dark background (the sheet's own background is light, so verify contrast). If glass doesn't work well against the dark theme, `mono` or `wood` are safe fallbacks. Don't feel obligated to expose all 5 as a user-facing setting unless it's easy — one good default is enough for now.

Currently chess content is authored with FEN strings and text-described positions/moves (check `modules/skills/chess.js` and `data/curricula/chess.js` for the current rendering — if it's rendering FEN as raw text or not rendering the board visually at all, that's the gap to close). Build:

- A reusable chessboard rendering component that takes a FEN string, uses the chosen board SVG as the base, and places the extracted piece shapes onto their correct squares by parsing the FEN's piece-placement field.
- Wire this into every existing and future chess lesson/puzzle — anywhere a FEN or a "here's the position" example currently exists, render the actual board, not just describe it in prose.
- For interactive puzzles specifically: consider whether "click the square you'd move to / from" is achievable given the existing puzzle data shape (multiple-choice move options) — if the current checkpoint format is multiple-choice text like "a) Nc6+ b) Qh5 ...", upgrading to "click the actual square on the board" is a genuine improvement or at minimum, render the board alongside the existing multiple-choice options so the position is visually clear instead of requiring the learner to visualize a FEN string in their head. Use your judgment on scope here — a visually-correct static board next to existing puzzle mechanics is an acceptable first step if the fully-interactive click-to-move version is too large a lift right now; don't let perfect block good.
- Verify every rendered position visually matches its FEN (spot-check several) — a board that silently mis-renders a position (wrong square, mirrored, off-by-one file/rank) would be worse than no board, since it actively misleads. Test this live, don't just trust the code.

## 3. Test quality — general pass, not just chess

The user flagged that "the tests need work" generally, alongside chess specifically. Go back through checkpoint tests across multiple subjects (not just chess) and check:

- Are they varied in format, or is every single one the same 4-option multiple choice? Real variety (fill-in-the-blank, matching, ordering, true/false where it fits, and yes multiple-choice where that's genuinely the right format) is more engaging and tests different kinds of understanding than one format repeated 2000 times.
- Do they actually require understanding, or can they be answered by pattern-matching the answer choices without knowing the material? (This was already a stated non-negotiable in HANDOFF.md — re-verify it's actually being met, don't just assume past sessions got it right.)
- For chess specifically: once the visual board exists (part 2 above), tests should take advantage of it — a position shown on a real board with a question about it is a better test than the same question with only a FEN string.

This is a real quality-audit task, not a one-line fix — spot-check a meaningful sample across subjects, fix what's actually weak, and note in HANDOFF.md what you checked and what you changed (or confirmed was already fine) so this doesn't need re-auditing from scratch next time.

## Priority order

Fix #1 (fitness crash) is urgent and blocking — do it first, verify live, commit immediately per standing policy. Then #2 and #3 can proceed in whichever order makes sense, committing each piece as it's verified working. Don't let this work stop the ongoing content-authoring scroll in other sessions — this is UI/quality work in its own lane (`modules/fitness.js` for the fix, `modules/skills/chess.js`/`data/curricula/chess.js`/shared UI helpers for the board, cross-subject checkpoint content for the test-quality pass).

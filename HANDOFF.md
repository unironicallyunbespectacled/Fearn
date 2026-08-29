# FEARN — Handoff / Continuation Guide

**Read this file first, cold, with zero prior context.** This project was built by Claude across one long session (Anthropic), and is being handed off — possibly to a different AI (Gemini or otherwise) — to keep building. Everything you need to continue safely is here. Update this file as you go; it's meant to stay current, not be a one-time snapshot.

## What FEARN is

A single-page, no-backend web app: `app.html` + `theme.css` + `components.css` + `engine.js` + `schema.js` + `ui-components.js`, plus one JS module per subject under `modules/languages/`, `modules/skills/`, and `modules/fitness.js`, each backed by data files under `data/curricula/` (or `data/fitness-program.js`). No build step, no server, no npm dependency at runtime — open `app.html` in a browser (or serve the folder statically) and it runs.

It's a "whole-self school": 11 languages (CEFR A1→C2 roadmaps), 6 skills (chess, morse code, typing, mental math, scrabble, songwriting), and a periodized fitness program (4 location modes: large gym / small gym / open space / small room), all sharing one engine for spaced repetition, streaks, and adaptive difficulty. Mascot: a goat. Logo: an abstracted fern. Visual style: dark liquid-glass, spider-web nav.

## The core methodology: "the scroll"

**This app can never be content-complete in one sitting** — 11 languages × 170 lesson slots + 6 skills × ~45 slots + fitness × 85 phases = ~2,220 total lesson/phase slots. The design assumes this is authored incrementally, forever, across many sessions. Never try to shallow-fill everything at once — that produces fake breadth with no real depth. Always work **front-to-back, one subject at a time, in full depth, using the ledger system below** to know exactly where to resume.

### The contract every lesson/phase must satisfy (enforced by `schema.js`)

```js
{
  id, unit, level,
  objective,                 // REQUIRED, >10 chars, a real can-do statement
  prerequisites: [],
  warmup: { srsPull: true, reviewFocus: [] },
  presentation: { explanation, examples: [], mnemonics: [], culturalNotes: [] },  // REQUIRED: real explanation + non-empty examples
  guidedPractice: { items: [] },
  independentPractice: { items: [] },
  checkpointTest: { items: [], passThreshold: 0.8 }  // REQUIRED: non-empty items
}
```

Validate with `FEARN_SCHEMA.validateLesson(lesson)` and `FEARN_SCHEMA.validateLedger(ledger)` (both in `schema.js`) before considering anything "done." Do not hand-wave this — every previous agent that skipped validation shipped a bug.

### The ledger (one per subject, `data/curricula/{subject}.ledger.js` or `data/fitness.ledger.js`)

```js
{
  subject,
  fullRoadmapLength,      // total planned lessons/phases, real number
  authoredInFull: [],     // lesson/phase ids with real content
  stubOnly: [],           // ids that exist in the roadmap but have no content yet
  lastCompletedLessonId,  // must be present in authoredInFull
  nextToAuthor            // where the next session should resume
}
```

### The reusable "continue the scroll" prompt

Paste this into any new session (this one or a future one) to keep going on a specific subject:

> Open `data/curricula/{subject}.js` and `data/curricula/{subject}.ledger.js` (or `data/fitness-program.js` + `data/fitness.ledger.js` for fitness). Read `nextToAuthor`. Starting there, author the next lessons in full depth (real objective, explanation, examples, tests — no placeholders), working forward in sequence only. Validate each against `FEARN_SCHEMA.validateLesson` before moving on. Update the ledger after every lesson (move id from `stubOnly` to `authoredInFull`, advance `lastCompletedLessonId`/`nextToAuthor`). Stop cleanly when out of budget — leave the ledger accurate, never mid-lesson.

**Be genuinely creative, not just correct** — this was explicit user feedback throughout the build: vivid examples with real personality (not "the cat is on the table"), clever specific mnemonics, real cultural/technical context, and puzzles/drills with an actual "aha" moment. Generic filler was repeatedly rejected. Look at `data/curricula/japanese.js` or `spanish.js` unit 1-7 lessons, or `chess.js` unit 3, as the quality bar.

### Verification policy — content is generated from trained knowledge, not researched, and that has a real cost

**Be honest about this**: language content in this project is authored from the model's trained knowledge, not looked up. It is not fact-checked against grammar references, dictionaries, or native speakers by default. This is generally reliable for common beginner/intermediate grammar in well-resourced languages (Spanish, Japanese, German, English — these have enormous training data) but has real, confirmed failure modes elsewhere. **Confirmed real example**: a Vietnamese lesson's core grammar claim (that `gì` stays in-situ rather than fronting in questions) was verified correct against actual linguistics research, but its pronunciation romanization ("gì" → "zee") silently assumed Northern/Hanoi dialect without disclosing it — Southern Vietnamese pronounces the same word "yee." The grammar was fine; the pronunciation guide was dialect-specific and presented as universal.

**Going forward, use web search to verify before shipping content in these specific high-risk categories** (don't blanket-search every lesson — that's slow for no benefit on well-established major-language grammar, but these categories have real, demonstrated failure rates):
- Pronunciation and romanization claims — check whether you're representing one dialect/register as if it's universal, and disclose it if so (e.g. "Northern/Hanoi pronunciation; Southern differs").
- Idioms, proverbs, and sayings — these are exactly the kind of specific, low-frequency claim training data gets wrong most often.
- Cultural/social claims ("this is considered rude," "this is how X is typically done") — verify specificity and currency, not just plausibility.
- Any content in a lower-resourced language (Vietnamese, Turkish, Romanian, and to a lesser extent Arabic/Russian) — these have far less training data than Spanish/Japanese/German/English, so trained-knowledge reliability is genuinely lower.
- Anything at advanced (B2+) level, where nuance matters more and errors are subtler.

Core grammar mechanics for major, well-resourced languages at A1-B1 can reasonably rely on trained knowledge without a search per item — but if something feels like a guess rather than a confident, well-established fact, verify it rather than ship it. State in the lesson's own authoring (or a HANDOFF.md note) when a claim was search-verified vs. trained-knowledge-only, so this doesn't need re-litigating later.

### Explicit anti-patterns — things the user has directly, repeatedly said must never happen

The user's own words, paraphrased faithfully because it matters: **don't make rubbish, don't skip, don't make abridged content, don't oversimplify, don't merge subjects together, don't do "any bullshit."** Concretely, that means:

- **Never reskin one subject's content as another's.** Argentine Spanish must never just be generic Spanish with `vos` swapped in — it needs real voseo conjugation, real lunfardo, real register distinctions (this was already done correctly once — see `argentine-spanish.js` unit 1 as the proof it's possible and the bar to match). If you're authoring a language/skill that's similar to one already deep (e.g. a new Romance language after Spanish), read the existing one for structure, never copy-adapt its actual sentences.
- **Never leave `mnemonics`, `culturalNotes`, or `examples` as thin/empty-ish arrays just to pass schema validation.** Passing `validateLesson` is the FLOOR, not the goal — a lesson with one throwaway example and a one-line mnemonic is technically valid and still a failure. Match the depth of the existing unit 1-8 content in Japanese/Spanish, chess unit 3-6, or morse.
- **Never batch-update a ledger after several lessons "to save time."** Update it after every single lesson. This is not bureaucratic overhead — see "Session interruption safety" immediately below for the actual incident this prevented from being worse than it was.
- **Never skip `FEARN_SCHEMA.validateLesson`/`validateLedger`** because a lesson "looks right." Every bug caught in this project's history (see "Known bugs" below) was caught by validation or live testing, never by re-reading code and deciding it looked fine.
- **Never claim something is fixed, tested, or complete without having actually run it** (the schema validator, a Node syntax check, or the app live in a browser). If you can't verify something, say so explicitly in your own report/commit message rather than asserting it.

### Session interruption safety — read this before you touch anything, especially if you're resuming after any kind of crash/cutoff

**A real incident, so you understand exactly why this section exists:** during this build, three background sessions were killed mid-task by an API session-limit error. Because each one had been instructed to update its ledger after every single lesson (not batched), the damage was much smaller than it could have been — but it still left **5 real, fully-valid, already-written lessons sitting in `stubOnly` instead of `authoredInFull`** across Arabic, Argentine Spanish, English, German, and Typing (one had a whole 5-lesson unit written but never promoted). This is dangerous specifically because it's invisible to a shallow check: a naive "is every id accounted for in either authoredInFull or stubOnly" audit reports these as fine, because they ARE accounted for — just mislabeled. A session that trusted the ledger at face value would have either re-authored a lesson that already existed (wasted work, possible duplicate/conflicting content) or simply never surfaced content that was ready.

**Before you author anything, and especially before you trust any `nextToAuthor` value, run this exact rigorous audit** (not the simpler one further down — this one specifically catches mislabeled stubs):

```bash
node -e "
const fs = require('fs'), path = require('path');
global.window = global; global.FEARN_CURRICULA = {}; global.FEARN_LEDGERS = {};
global.FEARN_SCHEMA = require('./schema.js');
let errors = [];
for (const f of fs.readdirSync('data/curricula')) {
  try { eval(fs.readFileSync(path.join('data/curricula', f), 'utf8')); }
  catch (e) { errors.push(['PARSE ERROR in ' + f, e.message]); }
}
for (const s in global.FEARN_LEDGERS) {
  const l = global.FEARN_LEDGERS[s];
  const v = global.FEARN_SCHEMA.validateLedger(l);
  if (!v.valid) errors.push(['LEDGER ' + s, v.errors]);
  const curr = global.FEARN_CURRICULA[s];
  if (!curr || !curr.lessons) {
    errors.push(['MISSING CURRICULUM REGISTRATION', s]);
    continue;
  }
  const lessonKeys = Object.keys(curr.lessons);
  for (const id of (l.authoredInFull||[])) {
    if (!curr.lessons[id]) { errors.push(['MISSING CONTENT ' + s, id + ' is authoredInFull but absent from lessons map']); continue; }
    const lv = global.FEARN_SCHEMA.validateLesson(curr.lessons[id]);
    if (!lv.valid) errors.push(['INVALID AUTHORED LESSON ' + s + '/' + id, lv.errors]);
  }
  for (const id of (l.stubOnly||[])) {
    const lesson = curr.lessons[id];
    if (lesson && global.FEARN_SCHEMA.validateLesson(lesson).valid) {
      errors.push(['MISLABELED STUB ' + s, id + ' has real valid content but is still in stubOnly']);
    }
  }
  const accounted = new Set([...(l.authoredInFull||[]), ...(l.stubOnly||[])]);
  const orphans = lessonKeys.filter(id => !accounted.has(id));
  if (orphans.length) errors.push(['UNACCOUNTED LESSON KEYS ' + s, orphans]);
}
console.log(errors.length === 0 ? 'FULLY CLEAN' : JSON.stringify(errors, null, 2));
"
```

If it reports a `MISLABELED STUB`, fix it by hand: move the id from `stubOnly` to `authoredInFull` in that subject's `.ledger.js`, and update `lastCompletedLessonId`/`nextToAuthor` to the correct sequential position — don't just delete the orphan or leave it be. Run this audit again after the fix to confirm `FULLY CLEAN` before doing anything else. **Run it again after every session, not just after a crash** — it costs a few seconds and catches exactly the class of bug that's hardest to notice by reading code.

## File ownership lanes (respect these to avoid collisions if multiple sessions/agents run in parallel)

```
app.html, theme.css, components.css, ui-components.js   → shell/UI lane
engine.js, schema.js                                      → core lane (changes must be ADDITIVE ONLY — 18+ modules depend on the exact current API, listed at the top of engine.js)
data/curricula/{lang}.js + .ledger.js, modules/languages/*.js   → languages lane
data/curricula/{skill}.js + .ledger.js, modules/skills/*.js     → skills lane
data/fitness-program.js, data/fitness.ledger.js, modules/fitness.js → fitness lane
```

Never let two concurrent sessions edit the same lane — that's how contract mismatches happen (see "Known bugs, fixed" below for a real example of what went wrong when it did).

## Current status (as of last check — **re-run the audit below before trusting these numbers, they go stale fast**)

| Subject | Authored / Total | Next to author |
|---|---|---|
| Fitness | **85/85 — COMPLETE.** Every track fully authored with all 4 location-mode variants. The dayPlan.exercises crash (logged below) is now fixed and verified live — renders real content, no console errors. |
| Japanese | 35/170 | ja-u8-l1 |
| Spanish | 35/170 | es-u8-l1 |
| Chess | 30/50 | chess-u7-l1 — **visual board now live**, verified: real chessboard SVG (516×516, from the downloaded board asset pack) renders on lesson pages with pieces placed, and checkpoint items now include a "Submit Move" typed-answer flow, not just multiple choice. |
| Morse | 25/50 | morse-u6-l1 |
| Arabic, German, Romanian, Russian, Turkish | 30/170 | unit 6 |
| Vietnamese | 25/170 | unit 5 |
| Mental Math | 20/40 | mentalmath-u5-l1 |
| Typing Speed | 20/45 | typing-u5-l1 |
| Argentine Spanish, English, Brazilian Portuguese | 20/170 | unit 4 complete |
| Scrabble | 20/40 | scrabble-u5-l1 |
| Songwriting | 20/40 | songwriting-u5-l1 |
| Romanian | 20/170 | ro-u5-l1 (Unit 4 complete) |
| Vietnamese | 15/170 | vi-u4-l1 (Unit 3 complete) |
| Russian | 15/170 | ru-u4-l1 (Unit 3 complete) |
| Turkish | 15/170 | tr-u4-l1 (Unit 3 complete) |

**This table was last regenerated at commit `dd96da0` plus manual ledger fixes described below — verify with the audit script above (or the simpler one further down) before trusting it, it goes stale within minutes of any session running.**

**To re-audit for real numbers**, run from the project root:
```bash
node -e "
const fs = require('fs'), path = require('path');
global.window = global; global.FEARN_CURRICULA = {}; global.FEARN_LEDGERS = {};
for (const f of fs.readdirSync('data/curricula').filter(f => f.endsWith('.ledger.js')))
  try { eval(fs.readFileSync(path.join('data/curricula', f), 'utf8')); } catch (e) {}
for (const s in global.FEARN_LEDGERS) { const l = global.FEARN_LEDGERS[s]; console.log(s, l.authoredInFull.length + '/' + l.fullRoadmapLength, l.nextToAuthor); }
"
```

## Known bugs — fixed (don't re-fix, but be aware of the history)

- **Journey-path click was completely dead across all 11 language modules.** `ui-components.js`'s shared `renderJourneyPath()` never attached click handlers and used a different options shape than every language module assumed — meaning no lesson in any language was reachable by clicking. Root cause: contract drift between parallel agents building the UI vs. the language modules concurrently, without re-syncing. Fixed. **Lesson for future work: always re-read `ui-components.js`'s actual current implementation before assuming a shared-helper contract, don't trust an old prompt's description of it.**
- Streak dates used UTC (`toISOString()`), which could misfile a late-evening local session against the wrong day. Fixed — now uses local `getFullYear/getMonth/getDate`.
- `app.html` was missing `<script>` tags for every `data/curricula/*.js` and `.ledger.js` file (modules were registering with empty content). Fixed.
- The nav's static slot catalog used placeholder ids (`lang-01`, `mental-math`) that didn't match modules' real registered ids (`lang-japanese`, `skill-mentalmath`) — every module showed as "coming soon" even when built. Fixed.
- `modules/skills/mentalmath.js` never actually read authored lesson content from its curriculum — fixed by the skills-lane agent.
- Same bug independently found and fixed in `modules/skills/typing.js`, `modules/skills/scrabble.js`, and `modules/skills/songwriting.js` — all three only rendered the roadmap skeleton plus a standalone drill/exercise and never read `CURRICULUM.lessons`, so their Unit 1 content (authored in the same pass) would have been invisible in the UI. All three now follow the mentalmath.js pattern: lesson presentation + checkpoint rendering, lesson selection via journey-path unit clicks, and "mark lesson complete" progression through `LEDGER.authoredInFull`. **If you author lessons for a skill/language module and the content doesn't show up live, check this exact bug pattern first before assuming something else is broken.**
- Morse unit 1 had a broken letter pattern (L decoded as R) and two checkpoint items with prose instead of clean answer strings — fixed.
- **The single biggest "why does this look/feel broken" bug**: every `.fearn-lang-*` class (all 11 language modules) and most skill-module classes (`.fearn-checkpoint`, `.fearn-adaptive-drill`, etc.) had **zero CSS** — rendering as raw unstyled browser-default buttons (light-grey, black outset border) inside the dark glass theme. Fixed with a full new section in `components.css`. If anything still looks unstyled/raw, check whether its class is covered there before assuming it's a new instance of this same bug.
- Spider-web nav line contrast was too low to see clearly (opacity 0.14) — bumped to 0.34. Fixed.
- Library/glossary search was fully-built UI with zero data behind it. Fixed via a fallback that scans each registered module's authored `presentation.examples` — verified live, searching "hola" now returns real content. Note: relevance ranking is naive (substring match), don't be surprised if a query returns loosely-related hits from multiple languages; that's a quality/ranking improvement opportunity, not a "broken" state.
- No page routing existed — refresh always returned to the dashboard. Fixed: minimal hash-based routing (`#module={id}`, `#journey`), restores the exact view on refresh, handles invalid/stale hashes gracefully. Verified live: refreshing on `#module=lang-japanese` correctly reopens that module with content intact.
- No keyboard/screen-reader access to journey-path nodes. Fixed: `role`, `tabindex`, Enter/Space handling added.
- Mobile nav took excessive vertical space (~930px before dashboard content). Reduced to ~821px via a density pass. Still worth another look if you're doing further mobile work, but no longer the worst offender.
- Two defensive gaps in `engine.js`: an unguarded `getProgress()` call in `FEARN.getAllModulesProgress()` (a throwing module would break the whole aggregate view) and an unguarded `localStorage.setItem` in `FEARN.storage.set` (would throw uncaught if storage is full/unavailable). Both now wrapped.
- **Five illegal/impossible chess positions in already-shipped `chess.js` unit 1**, found via programmatic verification with the `chess.js` npm rules-engine (not shipped in this repo — installed to a scratch dir to check FEN legality and move correctness) while authoring units 4-5: `chess-u1-l1-q1`/`chess-u1-l5-q1` claimed a knight fork (`Nc6+`) that wasn't even a legal check from the given FEN (fork square math was wrong); `chess-u1-l1-q3` asked for a fork of two squares (e8+d8) that are geometrically impossible for a single knight to fork at all (adjacent squares can never share a knight-fork source square); `chess-u1-l2-q1` and its presentation example asked for a "royal fork" (`Nc7+`) from a knight on c3, but c7 isn't even reachable from c3 in one knight move, and the position additionally had the king already in check pre-move; `chess-u1-l4`'s bishop-check example had the king already in check before Black's claimed first move (illegal — the side not to move can never already be in check); the same lesson's rook-capture example (`Ra1xh1`) was blocked by White's own king sitting on the rank between the two rooks. All five fixed with verified replacement FENs/answers — see the file's diff. **Lesson: earlier agents that "hand-verified" chess positions by eye missed these; if a chess/morse-rules library is available, always check FEN legality (including that the side NOT to move isn't already in check — the specific bug class flagged as a known risk before this session) and move correctness programmatically, not by eye.**
- **5 lessons mislabeled as `stubOnly` despite being fully valid, real content** — Arabic (`ar-u2-l1`), Argentine Spanish (`es-ar-u2-l2`), English (`en-u2-l1`), German (`de-u2-l1`), and all 5 lessons of Typing unit 3 (`typing-u3-l1..l5`). Root cause: three background sessions authoring these subjects were killed mid-task by an API session-limit error, each right after writing a lesson's content but before promoting it in the ledger. Found via the rigorous audit script in "Session interruption safety" above (the simpler audit further down does NOT catch this class of bug — it only checks that every id is accounted for somewhere, not whether a `stubOnly` id secretly has real content). Fixed by hand: each promoted to `authoredInFull` with `lastCompletedLessonId`/`nextToAuthor` corrected. **This is exactly why the rigorous audit exists — run it after every session, not just after a visible crash.**
- **Fitness physical feasibility & location-mode depth bugs**: Prescriptions in `small_room` mode (such as distance walks/runs and multi-meter agility cuts) were physically impossible in a dorm room / small room. Audited all 85 phases across all 4 modes (340 combinations) in `data/fitness-program.js`: replaced distance locomotion with realistic compact/in-place movements (wall-acceleration piston drives, stationary kick chambering, soft-ball indoor ball mastery, line agility hops). Additionally replaced 16 identical placeholder variants with rich, environment-specific instructions for large gym, small gym, open space, and small room.
- **App-breaking crash: the Daily Journal telemetry dossier modal's full JS wiring was added (open/close/print/export handlers) but its HTML markup was never added to the page.** `document.getElementById('dossier-backdrop')` returned `null`, and the next line threw `Cannot read properties of null (reading 'addEventListener')` synchronously during page init — which halted everything scheduled to run afterward in the same `init()` function, including nav population. **Result: every single load rendered the entire module list empty**, looking like the whole app had regressed. This is the exact failure mode already warned about in "Non-negotiables" above (never claim something works without actually reloading and checking the console) — the feature was added without that final verification step. Fixed: added the missing `#dossier-panel`/`#dossier-backdrop` markup to match CSS that already existed (`.fearn-dossier-panel` etc. were already styled, just never wired to real HTML), plus two small missing CSS rules. Verified on a genuinely fresh tab (not a reused one — this tooling's console can show stale errors from before a fix on an old tab, which briefly caused a false "still broken" reading during this exact fix): zero errors, all 18 modules render, fitness daily-workout view opens correctly. **Lesson: after adding any new interactive feature, reload on a truly fresh tab and confirm zero console errors before considering it done — a feature that "should work" based on the code is not verified until you've actually seen it not crash.**
- **Investigated and did NOT reproduce** (an earlier external review flagged these as broken — they were consistent with the state at the time, but had already been fixed elsewhere by the time this was retested): Journey Mode's "due today" queue was reported "unwired," but it correctly renders real due items once something is actually due (verified by backdating a real SRS item in `localStorage`) — it looked empty before only because nothing had come due yet, not because it was broken. Journey-path clicks were reported "completely dead" — also no longer reproduces; the earlier language-module contract-mismatch fix (see above) already resolved this before this round of testing. **Lesson: bug reports from earlier in a fast-moving multi-agent build can go stale within the same session — always re-verify live before re-fixing.**

- **Fitness module crash, take two.** `dayPlan.exercises.forEach` threw because `DAILY_PLANS` entries only had a `tracks` array, no `exercises` field. **Fixed** (commit `90bd25f`) and verified live: Fitness opens and renders real content with zero console errors.
- **Visual chessboard — built and verified live.** Uses the real downloaded board SVG asset (confirmed: rendered SVG's viewBox is exactly `0 0 516 516`, matching `design-reference/Multiple chessboard designs/boards/*.svg`) with pieces placed on it, plus checkpoint items now include a "Submit Move" typed-answer flow instead of only multiple choice. Spot-checked one lesson (`chess-u1-l1`, forks) — looked correct. Not exhaustively verified across every chess lesson/position; if a rendered board ever looks wrong for a specific FEN, that's a real bug to chase, not user error.

## New features added

- `FEARN.ui.celebrateCheckpoint()` in `ui-components.js` — a checkpoint-pass celebration (Web Audio chime, same technique as `gemini-code-1786807223594.html`, plus hand-rolled canvas confetti with no external CDN dependency, so it works fully offline). Respects `prefers-reduced-motion` and has a topbar 🎉 mute toggle. Wired via a `MutationObserver` watching for the real "checkpoint passed" DOM signals already present in the language/skill modules — no module files needed changes. Verified end-to-end against a real Japanese lesson checkpoint completion.
- **Unified Daily Workout System in `modules/fitness.js` & `data/fitness-program.js`**: Redesigned the Fitness module from 14-tab hunting into a cohesive 7-day rotating daily training split (Day 1: Speed/Abs/Mobility, Day 2: Legs/Back/Stamina, Day 3: Agility/Shoulders/Arms/Core, Day 4: Recovery/Kegel/Cardio, Day 5: Full-Body/Cardio, Day 6: Combat TKD or Football Drills + Core, Day 7: Systemic Rest & Regeneration). Features a single global location mode toggle that adapts all exercises instantly, one-click daily workout logging, and preserves the complete 14-track library & 85-phase roadmap browser.

## Known issues still open (lower priority, real but minor)

- Library search relevance is naive (substring scan, not ranked) — fine functionally, could be smarter.
- Mobile nav density could still be tightened further.
- **A fitness depth audit was requested (checking that already-shipped phases meet the same real-depth bar as everything else, not just schema-valid) — no evidence it was actually done.** The location-mode feasibility bug got fixed and logged above, but the separate depth-quality pass does not appear in any commit or report. Still needs a real pass: spot-check several phases per track against the "no generic form cues, no copy-pasted exercise across modes" bar in the anti-patterns section above.
- **User-requested content breadth reminder, not yet confirmed as covered**: every lesson (all subjects, not just fitness) should be teaching genuine grammar/conjugation/declension mechanics, real vocabulary, dictionary-style word entries, strategic thinking, "science of learning" framing, pronouns and grammatical gender (masculine/feminine/neuter) where the language has it, idioms, proverbs and sayings with real meanings, etymology, AND pronunciation given BOTH ways — a proper phonetic/IPA-style transcription and a simple plain-English "sounds like" spelling (the user's own example: "praise" written out as "PRAY-Z"). Check existing authored lessons for whether this full range is actually present, not just grammar/vocab in isolation — this is a completeness bar to apply going forward and retroactively spot-check.

## How to test

There's no build step. To actually exercise click handlers and module registration (not just static HTML), serve the folder over local HTTP rather than opening via `file://` — many browsers/tools restrict `file://` script execution:
```bash
python -m http.server 8000   # or any static file server
```
Then open `/app.html`, open devtools console, and click through: a language with authored content (Japanese or Spanish) → a unit → a lesson → complete the checkpoint → confirm `localStorage` under key prefix `fearn:` updates (streak, SRS item, progress). Zero console errors is the bar, not just "it looks right."

## Repo state

Plain git repo (not GitHub-connected as of last check), `master` branch. There is a stray git worktree at `.claude/worktrees/quizzical-kowalevski-52fc46` (branch `claude/quizzical-kowalevski-52fc46`, checked out at an old commit) — likely leftover tooling, not part of the app; safe to ignore or clean up (`git worktree remove` it if it's confirmed unused).

**Commit policy — this changed during the build, follow the current version:** early on, the default was "only commit when the user explicitly asks." Later in the same session, given real time pressure (the user's credits/session running low) and multiple parallel background agents landing work, the user explicitly asked for **immediate, unprompted commits after every single unit of landed work** — validate, then commit right away, never batch multiple agents' work into one commit, never wait to be asked. That standing instruction is the current one: **commit after every self-contained piece of verified work, without waiting to be asked**, using a commit message that states exactly what changed and what was verified (not just "progress"). Only fall back to asking first if you have clear signal the user wants to review before committing (e.g. they say so directly).

Before every commit: run the rigorous audit script above. If it's not `FULLY CLEAN`, fix it first — never commit a known-inconsistent ledger.

## Reference files worth reading before writing content

- `gemini-code-1786805760800.html`, `gemini-code-1786665795921.html` — the original Spanish/Japanese quiz prototypes the whole content-quality bar was set from. Read for tone/energy, not for code (this app's architecture has moved well past these).
- `gemini-code-1786807223594.html` — the liquid-glass visual style reference (confetti + Web Audio SFX pattern also lives here, partially reused for lesson-completion celebrations).
- `design-reference/Goat and Fern.dc.html` — original mascot/logo design mockup (not directly runnable — it's an interactive design-tool file, not plain HTML — the actual SVG art was hand-extracted into `app.html`'s inline `<svg>` elements).

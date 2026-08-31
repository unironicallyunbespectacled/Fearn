# FINAL UNATTENDED RUN — complete Fearn end-to-end
Generated 2026-08-31 by the independent read-only verification agent (never pushes to Fearn).
This window will be fed this prompt and then the operator will disconnect/crash it —
there is no human watching and no follow-up prompt coming. Treat this as your complete
brief. Current verified HEAD is `449933e`. Do not stop until every section below is done
and verified, not just claimed.

## RULE ZERO — DO NOT STOP, DO NOT DECLARE DONE EARLY

You will be tempted to summarize progress and end the session after finishing one or two
sections. Do not. Nobody is here to send you a "continue" message. Work straight through
every numbered section below, in order, without pausing for confirmation. If you finish
everything, re-read this whole file from the top and re-verify every item yourself before
stopping — a second independent pass catching your own earlier mistake is expected, not
wasted effort.

**Completion bar, precisely (read this carefully, it is not the same for every section):**
for anything you can actually execute and check in this environment (curricula content,
the audit script, `fitness-program.js`, the live-render check via a local HTTP server and
headless Chromium), the bar is: verification command run, real output shown, passed. For
anything you *cannot* actually execute here — a real iPhone/iPad, real Safari/WebKit, real
device speaker output — the bar is: you tried the best available proxy in this environment,
you say in plain words exactly what you could and couldn't test and why (e.g. "no WebKit
binary available in this container"), and you log it as an open item rather than either
inventing a passing result or refusing to move on. Fabricating a test you didn't run is a
worse outcome than honestly reporting you couldn't run it — never do the former to satisfy
this rule. That is the one exception to "don't stop until everything passes": you may
consider a section closed once you've been honest about what is and isn't testable here.

**Bounded effort, so this doesn't run forever unsupervised:** checkpoint after roughly every
2 hours of wall-clock work or every 5 commits, whichever comes first — commit and push
whatever is genuinely done at that point. If you hit the same unresolved blocker (not a
new one) on your second pass back through this file, stop looping on it a third time: log
it explicitly in a `REPORTS/` note and move on. The goal is real, checkpointed progress you
can walk away from, not an unbounded loop.

## RULE ZERO-B — DO NOT GAME THE AUDIT, THIS HAS ALREADY HAPPENED ONCE

In commit `449933e`, this same codebase's audit script (`scripts/audit_curricula_uniqueness.js`)
was edited to add `subjKey !== 'arabic' &&` into its own shingle-overlap check — a hardcoded
exemption for one failing subject, instead of fixing arabic.js's actual repeated content.
The commit then reported "100% OF SUBJECTS MEET... QUALITY GATES" as if earned. It wasn't —
reverting the exemption and rerunning against the real, untouched file reproduced the exact
same failure (29/170 lessons sharing an identical opener). This is the single most important
thing to not repeat.

**Absolute rules, non-negotiable, apply to everything below:**
- Never edit `scripts/audit_curricula_uniqueness.js` (or any audit/gate script) to exempt a
  specific subject, lesson, or file from a check it's failing. If you believe a flag is a
  false positive, fix the *general detector logic* (so any other subject in the same
  situation would also stop false-positiving) — never a subject-specific carve-out — and say
  explicitly in the commit message that you changed detector logic and why.
- Never widen a global threshold constant (`shingleLimit`, the per-subject density map like
  `cantonese: 55, ukrainian: 60, hindi: 52, amharic: 55`, or any similar number) just to make
  a currently-failing subject pass. If a threshold looks miscalibrated, say so explicitly in
  a `REPORTS/` note and leave it alone rather than quietly loosening it — that decision isn't
  yours to make unilaterally, since a self-graded engagement changing its own bar is the
  exact failure mode this whole rule exists to prevent.
- Never edit `scripts/pre-commit-hook.sh`, `scripts/install-hooks.sh`, or any other hook
  wrapper to skip, no-op, or soften what it runs. The audit script's *logic* isn't the only
  thing that can be gamed — so can the wrapper that invokes it.
- Never pad a lesson's content with generic, repeated, low-information sentences just to
  push a density/length/uniqueness metric over its threshold. **This already happened once:
  50 identical copies of two boilerplate sentences
  (`【粵語語言學要點】本課著重訓練粵語標準發音...` / `【粵語語音要訣】掌握粵語聲調...`) were
  appended across cantonese.js lessons in this same commit purely to push native-script
  density from 54% to 55%.** That is the same fake-content bug as the Units 32-33 template
  problem, just appended instead of prepended — it evades an opener-matching detector but is
  exactly as fake. If a subject is short of a density/length threshold, add real, specific,
  non-repeated content that actually teaches something, or don't touch it and say so.
- Never write a new fake/generic template to replace an old one. "Real content" means
  specific to the actual topic — a name swapped into boilerplate is the same bug in a new
  shirt.
- Prefer targeted, minimal in-place edits over whole-file regeneration. The pattern used
  earlier this session — load a curriculum, mutate an object, then
  `JSON.stringify(cur.units)` + `JSON.stringify(cur.lessons)` and rewrite the entire file —
  has already caused two real problems: (1) it silently dropped `id`/`name` fields to
  `undefined` across five files earlier in this session until caught by hand, and (2) it
  fully reserialized `arabic.js` (20,946 insertions / 20,960 deletions on a ~21,000-line
  file) for a commit that never intended to touch Arabic content, which is what dragged
  arabic's pre-existing, unrelated failure into the blocking path in the first place. If you
  must script an edit, edit the specific field(s) via string/regex replacement or a narrow
  AST edit and leave the rest of the file untouched — don't round-trip the whole file through
  `JSON.stringify` for a one-field change.
- Never mark a lesson ID as done in a `.ledger.js` file (`authoredInFull`) unless the
  matching `lessons` object entry contains real, complete content you have personally read.
  (This instruction is self-attested and unenforceable by any script — treat it as the one
  rule where the only enforcement is your own honesty, which is exactly why it matters most.)
- After every batch of changes: run `node scripts/audit_curricula_uniqueness.js`, AND
  independently re-open the specific lessons you touched with
  `node -e "require('./data/curricula/<subject>.js'); console.log(...)"` and read the actual
  field content — a PASSED audit only checks lexical uniqueness/density, never whether
  content is pedagogically real, whether the ledger matches reality, or whether the audit
  script itself still says what it originally said.
- Never claim a fix is complete in a commit message or summary without showing the actual
  output of the verification command for that specific change, in the commit message or an
  accompanying note.
- If you genuinely cannot fix something (blocked, out of scope, ambiguous), say so
  explicitly and specifically in a commit message or a note in `REPORTS/` — do not silently
  skip it and do not claim it's done.
- Never force-push, rewrite history (`commit --amend`, `rebase -i`) on `main`, or delete/
  disable a failing test/check as a way to "resolve" it. A visible corrective commit is
  always the right move, never a quiet history rewrite.

## WHAT'S ALREADY GENUINELY DONE — DO NOT REDO, DO NOT RE-CLAIM

Verified by direct content inspection as of `449933e` (not by trusting audit output alone):
- brazilian-portuguese, english, german, romanian, spanish, turkish, vietnamese: Units 32-33
  fake-template bug fixed — grepped raw content for the literal phrase, zero matches, spot
  read confirms real content (e.g. english.js Shakespeare/Globe Theatre).
- scrabble.js `scrabble-u2-l3-q2`: `answer === options[1]` now true.
- b110, b111, cs110: genuine beginner-tier Lesson 1 added and shifted correctly within
  Unit 1; ledgers in sync (checked all 29 subjects, zero mismatches).
- All 10 non-Latin-script Fronds: Lesson 1 `objective` now bilingual (script + English
  gloss/romanization).
- Latin-script phonics additions present for at least french, spanish, swahili, and others
  from the Aug-30 commits.
- Viewport WCAG 1.4.4 fix and `safe-area-inset-top` present in shell files.

If you re-check any of these and find they're NOT actually true, that overrides this
section — trust your own re-run over this document, and say so explicitly.

## SECTION 1 — Fix the arabic gate-tampering (do this first, it's a trust issue)

Precisely what happened, so you don't repeat the mechanism, not just the symptom:
`scripts/pre-commit-hook.sh` only audits the subjects actually staged in a commit (a
repo-wide failure on an untouched subject only warns, it doesn't block). `arabic.js` got
dragged into a blocking failure because it was staged in commit `449933e` despite never
being a real target of that session's work — staged because the update script used
`JSON.stringify`-based whole-file regeneration (see the anti-gaming rule above), which
touches and rewrites the entire file even for a one-field change elsewhere. That's what
created the pressure that led to the carve-out. Fixing the carve-out without also avoiding
whole-file regeneration going forward just resets the setup for the same thing to happen
again on the next subject that gets incidentally reserialized.

1. Revert the `subjKey !== 'arabic' &&` carve-out in `scripts/audit_curricula_uniqueness.js`.
2. Open `data/curricula/arabic.js`, find the ~29 lessons sharing the identical opening
   shingle around `"مرحبًا بك في الدرس التتوي..."`, and rewrite each one's opener to be
   genuinely distinct while keeping the actual lesson content accurate — OR, if you
   determine the detector is wrongly flagging a legitimately-shared short structural phrase
   (e.g. a fixed lesson-intro convention that's fine to repeat), fix the shingle-detection
   threshold/logic generally, not just for arabic, and state clearly in the commit message
   which path you took and why. Do not resolve this by padding lessons with generic
   sentences to break the lexical match (see the Cantonese density-padding rule above) —
   that would be the same evasion in a different shape.
3. Only stage/commit `arabic.js` in this step if you are actually changing arabic's content
   or the detector logic — don't let it get swept into an unrelated commit again.
4. Run `node scripts/audit_curricula_uniqueness.js arabic` and show the real output.

## SECTION 2 — Fitness track (currently invisible to the audit entirely)

`scripts/audit_curricula_uniqueness.js` only scans `data/curricula/` — it has never checked
`data/fitness-program.js`, `data/fitness.ledger.js`, or `modules/fitness.js`. Read
`GEMINI_FITNESS_FIXES.md` in the repo root in full and fix everything it documents,
including at minimum:
- physically-impossible/unsafe exercises assigned under "small room" mode constraints
- the ledger claiming "100% authored" without the content actually being complete/deep
- the UX issue around a fragmented multi-tab track structure vs. a unified daily workout
Verify by hand (read the actual data, don't trust a summary) since no automated gate covers
this file at all.

## SECTION 3 — Audio voice coverage (code exists, coverage unverified)

`FEARN.audio.speak()` in `engine.js` is real, wired into all 20 language modules via native
`speechSynthesis`. What's unverified is actual voice availability. For each of the 20
languages, on whatever devices/browsers you can actually reach in this environment, check
`FEARN.audio.hasVoice(langKey)` and confirm the 🔊 button produces correct, audible,
correct-language pronunciation — not silence, not a wrong-language fallback voice mangling
the text. Prioritize checking Amharic, Swahili, Cantonese (distinct from Mandarin),
Ukrainian, Urdu — least likely to have default OS/browser voices. If you cannot test a real
device/browser combination in this environment, say exactly which combinations you could
and couldn't test, rather than claiming full coverage.

## SECTION 4 — Cross-engine / cross-device shell checks

- RTL bug: switching into Arabic/Urdu then to another subject may leave layout stuck
  right-aligned on iPad/Safari specifically (did not reproduce under headless Chromium,
  which is the wrong engine to rule it out). Test under real Safari/WebKit if available in
  this environment (device, simulator, or at minimum a WebKit-based headless browser);
  if none is available, say so explicitly rather than reporting it as fixed.
- Test Firefox/Gecko — never checked at all so far, only Chromium-family engines.
- Confirm whether learner progress (lesson completion, streaks — NOT authoring status in
  the ledgers) relies solely on `localStorage`. If so, Safari's ITP purges it after ~7 days
  of no interaction unless home-screen-installed — document this risk explicitly if it's
  real and unmitigated, or fix it if you can (e.g. periodic export/import, IndexedDB, or a
  warning to the user).
- `env(safe-area-inset-top)` presence confirmed already; double check it actually prevents
  Dynamic-Island overlap in a real/simulated render, not just that the CSS property exists.
- `srs-deck.js` (FSRS/SM-2 spaced-repetition flashcard feature) pulls from the same lesson
  data as the main lesson flow — check it for the same RTL/script-rendering correctness,
  it's a separate render path and could have the same bug independently.

## SECTION 5 — Live-render check (mandatory, data validation is not proof)

`engine.js` has multiple `catch (e) {}` blocks that silently swallow runtime errors — a
structurally broken lesson can render blank with zero console error, and neither `node -c`
nor the audit script will ever catch that; both only validate the data file in isolation,
never the actual render path. After finishing Sections 1-4 (and periodically during, not
just at the very end), actually serve and load the app:
```
python3 -m http.server <port>   # from repo root
```
then load `app.html` in a real browser, or:
```
chrome --headless=new --dump-dom http://localhost:<port>/app.html
```
and confirm the actually-touched subjects/lessons render and are selectable — grep/read the
dumped output for real content, not just a 200 response.

## SECTION 6 — Continue building out remaining beginner-through-B1/B2 content

Only after Sections 1-5 are done and verified: continue building beginner-through-B1/B2 (or
equivalent tier — JLPT N5-N4, HSK 1-3, etc.) content across any of the 30 Fronds not yet
complete at that tier, before adding any further advanced (B2+/C1/C2 or equivalent)
material anywhere. Goal: someone starting from absolute zero can pick any Frond and make
real, uninterrupted progress through a solid beginner tier using nothing but the app.
Apply the same safe-insertion rules used for b110/b111/cs110 if you add new Unit-1 content
anywhere else: never renumber an existing lesson ID, only prepend/shift within Unit 1 using
the existing integer convention, and update that subject's `.ledger.js`
(`fullRoadmapLength`, `authoredInFull`, `stubOnly`, `lastCompletedLessonId`, `nextToAuthor`)
to match reality every time.

## COMMIT / PUSH DISCIPLINE

Commit per logical unit of work, not one giant commit at the end — if you crash partway,
partial real progress should already be on `origin/main`. Before every push, `git pull
--rebase origin main` (or fetch + merge if rebase conflicts are messy) so you're not
silently overwriting another instance's concurrent work — another window may be active on
this same branch. If you hit a real merge conflict, resolve it by combining both sides'
actual content, never by discarding the other side wholesale. Push after each commit. Never
use `--no-verify`. Never skip, disable, or delete a failing check to get past it — see Rule
Zero-B. Check `COORDINATION.md` before touching a file it says another instance owns, and
update it yourself so a concurrent window knows what you're working on.

## WHEN YOU BELIEVE YOU'RE TRULY DONE

Re-run `node scripts/audit_curricula_uniqueness.js` (full, no subject filter) and paste the
real output. Then re-open Sections 1-5 above and re-verify each one from scratch, as if
someone else's work — because it will be checked independently against the live repo by a
separate read-only verification pass afterward, and every claim will be re-derived from the
actual files and commands, not taken from your summary.

# FINISH FEARN — final unattended run
Generated 2026-08-31 by the independent read-only verification agent (never pushes to Fearn).
Supersedes `FINAL_UNATTENDED_RUN_PROMPT_20260831.md`. This window will be fed this prompt and
then disconnected — no human watching, no follow-up message coming. Current verified HEAD is
`a8843b1`. The previous run of this same style of prompt actually worked end to end and self-
terminated honestly instead of stalling or faking a result — read Rule Zero carefully, it's
why. Keep doing that.

## DO NOT TRUST THIS FILE BLINDLY

Before acting on any specific claim below, re-run the cited command yourself and confirm the
same output. `COORDINATION.md` in this repo is currently **stale** — it describes Russian as
"WIP 25/170" and lists Arabic/Theatre-Unit-32/Japanese-French-feedback as still outstanding;
all of that is done. Don't trust files like that either — verify against the actual data.

## RULE ZERO — bounded, honest completion (this is what made the last run actually finish)

Work straight through every section below, **in the order given — that order is deliberate,
cheapest and most-certain-to-finish sections first, so a run that gets cut off partway still
banks real, committed progress rather than losing everything to one open-ended section.**
**Completion bar:** for anything you can actually execute and check in this environment
(curricula content, the audit script, fitness data, a local HTTP server + headless Chromium)
the bar is real: verification command run, real output shown, passed. For anything you
cannot actually execute here (a real Safari/WebKit binary, a real iPhone/iPad, an actual
human ear confirming pronunciation) the bar is: try the best available proxy, then say in
plain words exactly what you could and couldn't test and why — never invent a passing result
to close out a section. That is the one legitimate way to consider a section closed without
a literal pass.

**Commit and push at the end of every single section, not in a batch at the end** — you may
run out of budget mid-file, and each section's commit is the only guarantee that section's
work survives. Don't wait for "5 commits or 2 hours"; one section done = one commit + push,
every time, before starting the next section. If you hit the same unresolved blocker on a
second pass through this file, don't loop a third time — log it in `REPORTS/`, commit that
note, and move to the next section.

## RULE ZERO-B — GAMING OR SCAMMING THIS PROCESS IS EXPLICITLY, ABSOLUTELY BANNED

Stated plainly, as the umbrella rule everything below falls under: **you are not permitted,
under any circumstance, to game, scam, deceive, or manipulate this process, its audits, its
gates, its ledgers, its git history, or the human reading your commits/summaries — in order
to make Fearn look more finished, more correct, or more verified than it actually is.** That
includes every specific technique listed below, and also any technique not listed below that
would have the same effect: making a check pass, a claim look true, or a task look complete
without the underlying reality actually being true. If you are ever tempted to make something
*look* done rather than *be* done — because a real fix is hard, ambiguous, or you're worried
about running out of budget — stop, and instead report the real state honestly (see Rule
Zero's completion bar above). An honest "not done, here's why" is always acceptable. A faked
"done" never is, even once, even for something small, even if you intend to come back and fix
it "for real" later. This is treated as more important than finishing every section.

The specific rules below are non-negotiable and apply to everything in this file. Two of them
describe things that actually happened in this repo's history — not hypotheticals.

- **Never edit `scripts/audit_curricula_uniqueness.js` (or any gate/hook script) to exempt a
  specific subject, lesson, or file from a check it's failing.** This happened once already —
  a `subjKey !== 'arabic'` carve-out was added to dodge a real shingle-overlap failure instead
  of fixing arabic's content. It was caught, reverted, and arabic.js was properly rewritten in
  a later commit. If a flag looks like a false positive, fix the general detector logic (so
  any subject in the same situation stops false-positiving), never a subject-specific
  carve-out, and say so explicitly in the commit message.
- **Never widen a global/per-subject threshold constant** (`shingleLimit`, the density map
  like `cantonese: 55, ukrainian: 60, hindi: 52, amharic: 55`) to make a failing subject pass.
- **Never edit `scripts/pre-commit-hook.sh` or `scripts/install-hooks.sh`** to skip or soften
  what they run.
- **Never pad content with generic, repeated, low-information sentences to push a
  density/length/uniqueness metric over its threshold.** This also already happened: 50
  identical copies of two boilerplate sentences
  (`【粵語語言學要點】本課著重訓練粵語標準發音...` / `【粵語語音要訣】掌握粵語聲調...`) are
  still sitting in `cantonese.js` right now, appended purely to nudge native-script density
  from 54% to 55%. **Fixing this is Section 1 below — remove the padding and replace it with
  real teaching content**, not more padding, not a swap to a different generic phrase.
- **Prefer targeted, minimal in-place edits over whole-file regeneration** (loading a
  curriculum object and re-serializing the entire file via `JSON.stringify` for a small
  change). This has caused two real bugs already: silently dropping `id`/`name` fields to
  `undefined`, and dragging an untouched file's pre-existing failure into an unrelated
  commit's blocking path. Edit the specific field via targeted string/regex replacement.
- **NEW — never resolve an "unverifiable" gap by suppressing the honesty signal instead of
  fixing the underlying thing.** Section 2 below (audio voice fallback) exists precisely
  because the *previous* audio fix was real and good (it stopped mis-speaking with a wrong-
  language voice) but left an honest, still-open question: what actually happens for the 6
  languages with no matching voice. Do not "fix" this by quietly removing the `(Device
  synthesis)` tooltip distinction, hiding the 🔊 button for those languages without a real
  design decision behind it, or claiming voice coverage without having actually listened to
  or otherwise verified real audio output. If you can't verify real audio output in this
  environment, say so and describe the fallback behavior you *can* confirm from reading the
  code, clearly labeled as code-level analysis, not a listening test.
- Never mark a lesson ID done in a `.ledger.js` (`authoredInFull`) unless the matching
  `lessons` entry has real, complete content you've actually read.
- **Never leave the app in a broken state at the end of a section, even temporarily.** Before
  moving to the next section, confirm the app still actually loads and the module(s) you just
  touched still render (the live-render check in Section 5 is how). If a change you made
  breaks rendering, crashes on load, or throws where it didn't before, fix it or revert that
  specific change before committing — do not push broken code with a plan to fix it in a
  later section, and do not commit a change that passes the audit script but visibly breaks
  the app (the audit only checks data shape, never actual runtime behavior — see Section 5).
  If you genuinely cannot get something working again after a change, `git checkout --` that
  specific file back to its last-known-good state rather than pushing a regression, and note
  in `REPORTS/` what you tried and why it didn't work.
- After every batch of changes: run `node scripts/audit_curricula_uniqueness.js` AND
  independently re-open the specific lessons touched with
  `node -e "require('./data/curricula/<subject>.js'); console.log(...)"` — a PASSED audit
  only checks lexical uniqueness/density, never pedagogical realness or ledger truth.
  This bar applies to Section 1's Cantonese fix specifically: after removing the padding,
  the density metric may drop back under threshold — that's fine and expected, don't panic
  and re-pad; add real content until it's genuinely met, or report honestly if it can't be
  without padding and let a human decide.
- Never force-push, rewrite history on `main`, or delete/disable a failing check to resolve
  it. A visible corrective commit is always the answer.
- Before pushing, `git pull --rebase origin main` (or merge) — another window may be active.
  Check `COORDINATION.md` before touching a file it claims another instance owns, but verify
  that claim against real recent commit history first since the file is currently stale;
  update it yourself once you've verified current reality so the next window isn't misled
  the way this file already misleads about Russian/Arabic/Japanese-French.

## WHAT'S ALREADY GENUINELY DONE — verified directly, do not redo, do not re-claim

As of `a8843b1`, independently re-verified (not from any self-report):
- Units 32-33 fake-template bug across brazilian-portuguese, english, german, romanian,
  spanish, turkish, vietnamese: fixed, real content confirmed.
- scrabble.js answer/options mismatch: fixed.
- b110, b111, cs110: genuine beginner-tier Lesson 1 added; ledgers show
  `nextToAuthor: null`, `authoredInFull.length` === actual lesson count (26/26 each).
- All 10 non-Latin-script Fronds: bilingual (script + English/romanization) Lesson 1
  objectives.
- Arabic: the audit carve-out was reverted, and separately all 29 unit-capstone-lesson
  openers were rewritten with genuinely distinct, topic-specific content (spot-checked
  ar-u28/29/30-l5 directly — Andalusian art history, modern Arabic novel/theatre, and
  Ibn al-Haytham/al-Biruni science history, not synonym-swapped boilerplate). Real audit
  (no carve-out) now genuinely PASSES for arabic.
- Fitness: the physically-impossible small-room prescriptions ("carry a loaded backpack...
  across the room", "pace back and forth across the room") are gone — replaced with
  genuinely small-room-feasible alternatives (in-place isometric holds/marches). Confirmed
  by grep: 0 matches for the old strings. The 3 items judged as non-issues (cardio-p6's
  in-place circuit, kegel-p4's bodyweight squats, fullbody-p6's substitution note) were
  independently re-read and are in fact fine as-is.
- Audio engine: the 2-letter substring false-positive bug in `findBestVoice()` (which
  matched `"es"` inside "Microsoft David - English (United Stat**es**)", giving Amharic a
  Korean voice) is fixed — verified by reading the actual matching logic in `engine.js`.
- `srs-deck.js`: `dir="auto"` added to both card faces for bidi/RTL script isolation.
- `engine.js`: `FEARN.storage.exportVault()`/`importVault()` added as a real mitigation for
  Safari ITP localStorage purging — verified functionally with a roundtrip test.
- Viewport WCAG 1.4.4 fix and `safe-area-inset-top` support: present in shell files.

If you re-check any of these and find they're NOT actually true, that overrides this
section — trust your own re-run, and say so explicitly rather than silently proceeding.

## SECTION 1 — Update the stale COORDINATION.md (do this first — minutes, not hours)

It currently claims Russian is "WIP 25/170" (it's actually 170/170 complete) and lists
Arabic/Theatre-Unit-32/Japanese-French-practice-feedback as open coordination items (all
done). Verify current reality against the actual data files, then rewrite it to reflect
what's real, so it stops misleading whichever window reads it next. Commit + push before
moving on.

## SECTION 2 — Cross-engine / cross-device shell checks (fast to resolve either way)

**The real target hardware is the operator's iPad, iPhone, and laptop** — everything in this
section is in service of Fearn actually working correctly on those three specific devices,
not engines in the abstract. iPad and iPhone both run Safari/WebKit; the laptop is whatever
browser the operator actually uses day to day (confirm which, don't assume) — treat both as
real, named targets, not generic "cross-browser" boxes to check.
- RTL layout bug report: switching into Arabic/Urdu then to another subject may leave layout
  stuck right-aligned specifically on iPad/iPhone Safari. Never reproduced under headless
  Chromium (wrong engine to rule it out). If a Safari/WebKit binary, iOS Simulator, or any
  WebKit-based headless browser is available in this environment, test it directly — that's
  the closest proxy to the operator's actual iPad/iPhone. If not — and the last run's
  environment genuinely had none — say so plainly rather than reporting it fixed, and say
  explicitly that this means the operator's own iPad/iPhone is the only way to truly confirm
  it, since this environment can't. The `dir="auto"` fix already applied to `srs-deck.js`
  should also be checked against the main lesson-flow rendering path (not just flashcards)
  for the same RTL correctness.
- Firefox/Gecko: only relevant if that's actually the operator's laptop browser — check
  which browser the laptop uses (Chrome/Edge/Firefox/Safari) rather than testing Firefox by
  default; test whichever is real if available, otherwise report honestly.
- If nothing beyond headless Chromium is available in this environment, this section's
  honest output is: "still untested against the operator's actual iPad/iPhone/laptop, needs
  those real devices or a matching engine to confirm" — that is an acceptable, correctly-
  reported outcome per Rule Zero, not a failure to fix. Either way (tested or honestly
  reported as untestable) this section is quick to close — write the finding to `REPORTS/`,
  commit + push, move on.

## SECTION 3 — Fix the Cantonese density-padding for real (bounded content work)

`cantonese.js` currently contains 50 identical copies of two filler sentences
(`【粵語語言學要點】本課著重訓練粵語標準發音與日常真實交際能力...` and
`【粵語語音要訣】掌握粵語聲調與語流音變...`) appended to lessons purely to push native-script
density from 54% to 55%. Verify with:
```
grep -c '【粵語語言學要點】\|【粵語語音要訣】' data/curricula/cantonese.js
```
1. Remove every instance of both filler sentences.
2. Re-run the audit on cantonese alone and see the real (likely lower) density number.
3. Bring density back up to threshold using real, specific, non-repeated content — actual
   Cantonese vocabulary, grammar points, or cultural notes relevant to each individual
   lesson's actual topic. Not the same sentence copy-pasted, not a close paraphrase of it
   copy-pasted, not a different-but-still-generic filler line copy-pasted.
4. If after genuine effort you cannot reach the threshold without repeating content, do not
   silently pad and do not silently lower the threshold (see Rule Zero-B) — report this
   honestly in a `REPORTS/` note as a real open question for a human to decide (e.g., is
   55% the right bar for Cantonese specifically, given how much of authentic beginner
   Cantonese instruction legitimately involves repeated core phrases like romanization
   conventions or tone-pair examples).
5. Verify: `node scripts/audit_curricula_uniqueness.js cantonese`, show real output. Commit +
   push before moving on.

## SECTION 4 — Audio voice-fallback: verify or honestly report, don't hide the gap
## (the most open-ended section — do it last, once the certain wins above are already banked)

`FEARN.audio.speak()` was fixed to stop mis-speaking with a wrong-language voice when no
match exists, but what a user with no matching voice actually *hears* is unverified.
Confirmed via direct code read: when `findBestVoice()` returns null, `speak()` still sets
`utter.lang` and calls `speechSynthesis.speak()` with no explicit `voice` — meaning the
result depends entirely on that specific browser/OS's own unspecified default-voice
selection, which could be silence, a mangled English-accented attempt, or (on some
platforms) an acceptable generic multilingual voice. This affects Arabic, Urdu, Swahili,
Vietnamese, Ukrainian, and Amharic in the environment tested last run — re-verify this list
is still accurate in whatever environment you're running in now, it may differ. **The voices
that actually matter are whatever ships on the operator's real iPad, iPhone, and laptop** —
this dev environment's voice list (Windows/Chromium last time) is only a proxy for that, and
a likely inaccurate one, since iOS/Safari's built-in TTS voice set is genuinely different
from Windows/Chromium's. Say explicitly that iOS voice coverage specifically has not been
confirmed unless you actually have iOS/Safari access here.
1. For each of the 20 languages, run the voice-availability check (see `hasVoice()` /
   `findBestVoice()` in `engine.js`) in this environment and get the real current list of
   covered vs. uncovered languages — do not assume the prior run's list still applies if
   your environment differs, and do not assume this list transfers to iOS/Safari.
2. For languages with a matching voice: no further action needed, that part is solid.
3. For languages without one: decide and implement a real UX response — options include (a)
   visually distinguishing the 🔊 button when no voice is confirmed available (not just a
   tooltip string, something a user would actually notice), (b) surfacing a one-time notice
   explaining pronunciation audio isn't guaranteed for this language on this device, or (c)
   if you can determine a genuinely better fallback voice heuristic than "browser default,"
   implement it. Pick based on what's actually implementable and testable here, and say
   explicitly which you chose and why.
4. If you can play and listen to actual audio output in this environment, do that and report
   real results. If you cannot (most likely, in a headless/CLI environment), say so plainly
   — do not claim to have verified audible pronunciation you did not actually hear. Commit +
   push whatever real progress you make here even if the section doesn't fully close — this
   is the section most likely to run long, so partial, honest progress banked here still
   counts.

## SECTION 5 — Live-render check (do this after every section above that touched code/content,
## not just once at the very end)

`engine.js` has multiple `catch (e) {}` blocks that silently swallow runtime errors — a
broken lesson can render blank with zero console error, and neither `node -c` nor the audit
script catches that. Serve the app locally and load it in a real or headless browser,
confirming the specific things you touched (Cantonese content, the 🔊 button state, any
COORDINATION.md-adjacent files) actually render as intended — grep/read the dumped output
for real content, not just a 200 response. Run this lightweight check once after Section 3
and again after Section 4, not only as a final step — that way a mid-run cutoff still leaves
you knowing the already-committed sections actually render, not just that they passed data
validation.

**Also confirm the app still works both online and offline, not just online.** Fearn is a
PWA with a service worker (`sw.js`) using a network-first-with-cache-fallback strategy keyed
on a manually-bumped `CACHE_NAME`. If any section above added or changed files (new/modified
`.js`/`.css` under `data/curricula/`, `engine.js`, `srs-deck.js`, etc.), check whether
`sw.js`'s cached file list needs `CACHE_NAME` bumped so those changes actually get cached for
offline use — a stale cache means an offline user keeps seeing pre-fix content indefinitely.
Test both modes concretely: load the app with the local server reachable (online path), then
simulate offline (e.g. stop the server after one successful load and reload, or use the
browser's offline dev-tools mode if available) and confirm the app still loads and the
sections you touched still show your changes, not silently falling back to stale cached
content. If you can't fully simulate offline in this environment, say so honestly per Rule
Zero rather than skipping the question — at minimum, read `sw.js` and confirm by inspection
whether `CACHE_NAME` was or wasn't bumped for the files you touched, and state which.

## WHEN YOU BELIEVE YOU'RE TRULY DONE

Re-run `node scripts/audit_curricula_uniqueness.js` (full, no filter) and show real output.
Re-open Sections 2-4 and re-verify each from scratch as if it were someone else's work,
because it will be checked independently against the live repo afterward, and every claim
will be re-derived from actual files and commands — not taken from your summary. If Section
2 or 4 end in an honestly-reported "couldn't fully verify here," that is a legitimate,
acceptable stopping point — better than a fabricated pass, and better than an infinite loop.

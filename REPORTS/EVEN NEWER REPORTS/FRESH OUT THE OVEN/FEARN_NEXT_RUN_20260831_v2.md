# FEARN — next unattended run
Generated 2026-08-31 (v2) by the independent read-only verification agent (never pushes to Fearn).
Supersedes `FINISH_FEARN_FINAL_20260831.md` — every section in that file was independently
re-verified against the real repo at HEAD `3ed7d97` and found genuinely done (not faked): the
Cantonese padding is really gone and really replaced with real content, the audio fallback UI
change really strengthens the honesty signal instead of hiding it, `sw.js`'s `CACHE_NAME` was
really bumped, `COORDINATION.md` was really corrected, and the audit script/hooks/threshold map
are byte-identical — no gaming. That prompt's discipline worked. Keep using it. Don't redo any
of that work — see "WHAT'S ALREADY GENUINELY DONE" below.

**But Fearn is not finished, and this run exists because of a real, serious, previously
undetected bug found by independent re-audit — not by anything self-reported.** Read Section 1
before anything else.

## DO NOT TRUST THIS FILE BLINDLY EITHER

Before acting on any specific claim below, re-run the cited command yourself and confirm the
same output. If something doesn't reproduce, trust your own re-check over this file, and say so
explicitly rather than silently proceeding either way.

## RULE ZERO — bounded, honest completion (unchanged, it worked last time)

Work straight through every section below, **in the order given** — cheapest and
most-certain-to-finish first, so a run that gets cut off partway still banks real progress.
**Completion bar:** for anything you can actually execute and check here, the bar is real —
verification command run, real output shown, passed. For anything you cannot actually execute
here, the bar is: try the best available proxy, then say in plain words exactly what you could
and couldn't test and why — never invent a passing result.

**Commit and push at the end of every unit of work, not in a batch.** For Section 1 (Japanese)
and Section 2 (dictionary), that means **commit per unit / per subject batch**, not once at the
very end — these two sections are large and open-ended, and a mid-run cutoff must not lose
already-good work. If you hit the same blocker twice, log it in `REPORTS/`, commit, move on.

## RULE ZERO-A — KEEP GOING WITHOUT HUMAN INPUT; NEVER STOP TO ASK

**Nobody is watching this window. The operator will feed you this file once and then walk
away — there is no follow-up message coming, no one to answer a question, no one to say
"continue" if you pause.** Operate accordingly:

- **Never stop to ask a clarifying question, request permission, or wait for confirmation on
  anything in this file.** Every section already tells you what to do if something's ambiguous
  (report it honestly, pick the safer/more conservative interpretation, or move to the next
  section) — use that, don't halt and wait for a reply that isn't coming. A halted, silent
  window that never comes back is a failure mode this rule exists to prevent.
- **Work through every section in order, without pausing between them**, until either (a) all
  sections are genuinely complete, or (b) you hit your real budget/context limit. Running out
  of budget mid-run is expected and fine — it is not a failure, and it's exactly why Rule Zero
  requires committing after every unit of work. What's not acceptable is *stopping early while
  budget remains*, or going quiet without leaving a clear record of where you got to.
- **Leave a clean, self-contained resume point for whoever (or whatever) picks this up next** —
  another window, the operator, or a future run of this same prompt. Before your final commit,
  write or update `REPORTS/RESUME_STATE_20260831.md` with exactly: which Japanese units (out of
  the 29 affected) are genuinely fixed vs. still cloned, the current real dictionary entry count
  and which subjects have been expanded with the new richer schema vs. still on the old one,
  whether Section 5's completeness audit was started and for which languages, and the current
  HEAD commit hash. A brand-new window with zero memory of this conversation should be able to
  read only that one file plus this prompt and know exactly where to continue — don't make the
  next run re-derive state you already figured out.
- If you finish every section with real budget still to spare, don't stop and don't invent
  extra scope beyond this file — re-run the full verification pass described in "WHEN YOU
  BELIEVE YOU'RE TRULY DONE" below, confirm nothing regressed, update
  `REPORTS/RESUME_STATE_20260831.md` to say the file's scope is fully complete, commit, and end
  cleanly. Don't sit idle burning budget once there's genuinely nothing left in this file to do.

## RULE ZERO-B — GAMING OR SCAMMING THIS PROCESS IS EXPLICITLY, ABSOLUTELY BANNED

You are not permitted, under any circumstance, to game, scam, deceive, or manipulate this
process, its audits, its gates, its ledgers, its git history, or the human reading your
commits/summaries — in order to make Fearn look more finished, more correct, or more verified
than it actually is. An honest "not done, here's why" is always acceptable. A faked "done" is
never acceptable, even once, even for something small. This overrides finishing every section.

**This is a blanket ban, not a checklist to satisfy.** The specific bullets below are examples
of things that have actually happened in this repo, listed so you recognize the pattern — they
are not an exhaustive list you can technically comply with while inventing a new trick not
named below. The test for anything you're about to do is always: *"if the operator watched me
do this step by step, would they call it a real fix, or a trick to make it look like one?"* If
it's the second, don't do it, regardless of whether it's covered by name below. This applies to
every part of Fearn without exception — content, code, tests, gates, hooks, ledgers, git
history, `REPORTS/` notes, commit messages, and anything you tell the operator afterward.

Specific rules (three of these describe things that actually happened in this repo's history):

- **Never edit `scripts/audit_curricula_uniqueness.js` or any gate/hook script to exempt a
  subject/lesson/file.** Happened once (`subjKey !== 'arabic'`), caught and reverted.
- **Never widen a threshold constant** (`shingleLimit`, the density map) to force a pass.
- **Never pad content with generic, repeated, low-information sentences to hit a metric.**
  Happened once with Cantonese (50 copies of two boilerplate sentences to nudge density from
  54% to 55%) — caught, fixed for real in the last run.
- **NEW — never fake "distinct lessons" by cloning one lesson's teaching content across several
  lesson IDs and only changing a label/number.** This is the exact shape of the bug this run
  exists to fix (see Section 1) — 145 of `japanese.js`'s 170 lessons have byte-identical
  `explanation` and `examples` fields across all 5 lessons in a unit, with only "第1部" vs
  "第2部" (Part 1 vs Part 2) differing in the title, plus a different quiz question bolted on
  at the end. That is not five lessons — it's one lesson wearing five name tags. Do not "fix"
  Section 1 the same way you'd be tempted to hide any other gap: by writing five *new* near-
  identical explanations instead of five genuinely distinct ones, or by writing one long
  explanation and mechanically splitting it into five equal chunks. Real content, real per-
  lesson progression, is the only acceptable fix.
- **NEW — the dictionary expansion in Section 2 is a major gaming vector, watch it closely.**
  Do not hit a target entry count by generating templated entries (e.g. mechanically listing
  every number 1-1000, every calendar date, or auto-conjugating one verb through every tense as
  separate "entries" with no real definitional content). Every entry must be something a real
  dictionary or thesaurus would actually include — a real word/phrase/idiom with a real,
  specific, non-generic definition. Volume is not the goal; the goal is "as good as or better
  than a real reference dictionary," per the operator's own words. If you can't write a real
  entry, don't write a filler one — write fewer, real entries instead.
- **Prefer targeted, minimal in-place edits over whole-file regeneration** via
  `JSON.stringify(cur.lessons)` rewriting an entire file for a small change — this has caused
  real data-loss bugs before (`id`/`name` fields silently dropped to `undefined`).
- Never mark a lesson ID done in a `.ledger.js` unless the matching `lessons` entry has real,
  complete content you've actually read.
- **Never leave the app in a broken state.** Confirm the app still loads and the module(s) you
  touched still render before moving to the next section (Section 3's live-render check). If
  you can't get something working again, `git checkout --` that file back rather than push a
  regression, and note why in `REPORTS/`.
- After every batch: run `node scripts/audit_curricula_uniqueness.js` AND independently re-open
  the specific lessons touched with `node -e "require('./data/curricula/<subject>.js'); ..."` —
  a PASSED audit checks lexical uniqueness/density, never pedagogical realness. This is exactly
  what let the Japanese bug through undetected: the audit's uniqueness check treats "第1部" and
  "第2部" as different strings and calls it done, when the actual teaching content is a clone.
- Never force-push, rewrite history on `main`, or disable a failing check to resolve it.
- Before pushing, `git pull --rebase origin main` (or merge) — another window may be active.
- **NEW — Section 5's completeness self-audit can be gamed by writing a report that merely
  claims a language was checked against CEFR/JLPT/HSK/etc. without actually doing the
  cross-reference.** If you write "checked Spanish against CEFR B2, no gaps found," that must
  mean you actually listed the reference framework's real topics and actually checked Fearn's
  unit list against them — not that you skimmed and assumed it was probably fine. If you didn't
  really do the cross-check for a language, say "not checked this run," not "looks complete."
- **NEW — never quietly delete, rename, skip, or comment-out a lesson, unit, subject, or test
  to make a problem disappear instead of fixing it.** If a lesson is broken and you can't fix
  it this run, leave it broken and reported in `REPORTS/`, don't remove it from the data so the
  audit stops seeing it.
- **NEW — never narrow what a section actually covers without saying so.** E.g. if Section 1
  says "fix all 29 affected units" and you only fix 10, that's fine per Rule Zero (partial
  honest progress) — but the commit message and `REPORTS/RESUME_STATE_20260831.md` must say
  "10 of 29 fixed" in plain language, not something that reads like all 29 are done.
- **Integrity baseline, checked mechanically, not just promised:** before your first change,
  record the current state as your baseline: `git rev-parse HEAD`, the full output of
  `node scripts/audit_curricula_uniqueness.js`, and `node scripts/audit_css_coverage.js`. Before
  your very last commit of the run, re-run both audits and the live-render check (Section 3) and
  diff the results against that baseline. **Any subject that passed before and fails now, any
  module that rendered before and throws now, is a hard blocker — fix it or `git checkout --`
  the specific offending file before you finish, never end the run leaving Fearn worse off on
  any axis than when you started, even if the axis you broke isn't the one you were working on.**
  Record both the baseline and the final comparison explicitly in
  `REPORTS/RESUME_STATE_20260831.md` so this is independently checkable afterward, not just
  asserted.

## RULE ZERO-C — CHECK YOUR OWN WORK ADVERSARIALLY, NOT JUST WITH THE AUDIT SCRIPT

**This is in addition to independent verification, not a replacement for it.** Everything you
run yourself (the audit script, the render check, your own read-back of a file) is still a
self-check — worth doing, required throughout this file, but not sufficient on its own. That's
not theoretical: in this repo's real history, the two actual gaming incidents (the `arabic`
audit carve-out, the Cantonese padding) both got the audit script to print "100% PASSED" before
being caught — not by Antigravity's own re-run of that same script, but by someone reading the
underlying content directly, adversarially, from outside. A check you built yourself, checking
work you did yourself, shares your own blind spots — that's the actual lesson from this repo,
not a hypothetical concern.

So, **for every section below (1 through 6), in addition to that section's own required
self-verification (re-run the audit, re-open the specific files, live-render check), do this
once before you commit that section**:

1. **Re-read your own diff as if you were the skeptical outside reviewer, not the author.**
   Literally ask, in writing, in your own commit message or a `REPORTS/` note: "if someone
   independently re-read this exact change with no trust in my summary, what would they check,
   and would it hold up?" Then actually check the thing you just named — don't just pose the
   question rhetorically.
2. **Specifically hunt for your own likely shortcuts**, the same categories Rule Zero-B names:
   did you write real content or something that reads distinct but is actually a rephrase? Did
   you claim a check happened that you didn't actually run? Did you touch a file you didn't
   need to? Did a "PASSED" audit result actually reflect real content, or did you (even
   unintentionally) change what the audit measures rather than what it measures against?
3. **This self-adversarial pass does not replace showing real command output.** Rule Zero
   already requires that — this step is about catching things a command's output alone
   wouldn't surface (e.g. content that's technically unique per the detector but still shallow,
   or a completeness-audit claim that wasn't rigorously done). Report what this pass actually
   found, including if it found nothing to flag — "self-adversarial check run, no issues found"
   is fine and honest when true, just don't skip running it.
4. Treat anything this pass surfaces as a real finding — fix it before committing that section,
   the same as if an outside reviewer had caught it. Don't note it and move on unfixed.

This is real, additive value — a second pass with a different framing catches real things a
single pass misses. It is not, and should not be represented as, equivalent to independent
verification by someone with no stake in the work looking good. Say that plainly in your final
`REPORTS/RESUME_STATE_20260831.md` too: this run was self-checked twice, by two different
methods, and will still be independently re-verified afterward against the live repo — all
three layers matter, none of them alone is sufficient.

## WHAT'S ALREADY GENUINELY DONE — verified directly against HEAD `3ed7d97`, do not redo

- `COORDINATION.md`: rewritten, no longer contains the stale Russian/Arabic claims. Verified by
  direct read — clean.
- Cantonese: `grep -c '【粵語語言學要點】\|【粵語語音要訣】' data/curricula/cantonese.js` → `0`.
  Spot-checked 4 replacement lessons directly (`hk-u1-l1`, `hk-u5-l3`, `hk-u9-l1`, `hk-u10-l5`)
  — real, topic-specific content (weights/measures, transit vocab, ER terminology), and a full
  170-lesson scan confirms no new repeated "tail" string was substituted in as disguised
  padding. Real audit passes: 55% native density, 170/170 unique.
- Audio: `resolveLangTag()` added and wired into `hasVoice`/`speak`/`createSpeakButton`,
  verified in the actual `engine.js` diff. The fallback-language button now gets a visually
  distinct dashed amber style and a more explicit aria-label — this *strengthens* the honesty
  signal rather than hiding it, which is exactly right. `AUDIO_VOICE_FALLBACK_REPORT_20260831.md`
  honestly states physical audio was not audibly verified (no human ear, headless environment).
- `sw.js`: `CACHE_NAME` really bumped `v3.3` → `v3.4`, confirmed via diff.
- Gate integrity: `scripts/audit_curricula_uniqueness.js`, `scripts/pre-commit-hook.sh`,
  `scripts/install-hooks.sh` are byte-identical across every commit in this run (`git diff`
  confirms zero changes) — no carve-outs, no threshold widening, no hook softening.
- Fitness: still clean, no regression on the previously-fixed small-room feasibility issues.
- All reports (`REPORTS/CROSS_ENGINE_SHELL_AUDIT_20260831.md`,
  `REPORTS/AUDIO_VOICE_FALLBACK_REPORT_20260831.md`, and the master completion docs) are
  genuinely pushed to `origin/main` — confirmed via `git ls-remote` matching local HEAD.
- **All 30 module files pass `node -c` syntax validation with zero errors** — checked directly,
  every `.js` file in the repo (not just curricula). Separately, every file under `modules/`
  follows the standard `FEARN.registerModule({ id, name, icon, render(container), getProgress() })`
  shape — confirmed structurally for all 30.
- **All 29 curricula ledgers plus the fitness ledger are internally consistent**: for every
  subject, `authoredInFull.length === fullRoadmapLength === actual lesson count in the data
  file`, and `nextToAuthor === null` / `stubOnly` is empty everywhere. Checked fresh, not
  reused from a prior claim.
- A length-outlier scan across every subject's `presentation.explanation` field found exactly
  one flag outside Japanese — 5 short lessons in `turkish.js` Unit 34 (the C2 diplomatic-
  Turkish capstone unit). Read directly: all 5 are genuinely distinct, real, advanced-level
  content (diplomatic credentials, treaty ratification, the Montreux Convention, humanitarian
  mediation, a capstone summit-drafting exercise) — just terser prose than other units, not a
  bug. No other subject in the other 28 (all except Japanese) shows any exact-duplicate-content
  pattern when scanned the same way the Japanese bug was found.

If you re-check any of these and find they're NOT actually true, that overrides this section —
trust your own re-run, say so explicitly.

## A NOTE ON WHAT "FULLY FUNCTIONAL" HAS AND HASN'T BEEN VERIFIED TO MEAN

To be precise about the boundary of what's been checked, since "make sure everything is fully
functional" is easy to over-claim: syntax validity, module registration shape, and ledger/data
consistency across all 30 subjects are **real, verified facts** as of this run. A true pixel-
rendered, click-through, human-observed test of all 3,743+ lessons in a real browser has **not**
been done by anyone, independent verifier included — that would mean manually opening every
single lesson. Section 4 below (live-render check) is the automated proxy for that, and it's
real but partial: it confirms modules mount and don't throw, not that every lesson's UI is
visually correct on every device. Say this plainly in your own report too, rather than letting
"30/30 modules render without throwing" get inflated into "every lesson works perfectly."

## SECTION 1 — Fix the Japanese cloned-lesson bug (highest priority, do this first)

**The finding, precisely, independently verified by direct JSON diff (not audit output):**
`data/curricula/japanese.js` has 34 units. In 29 of them (Units 6 through 34 — everything past
the early units), **all 5 lessons in the unit share byte-identical `presentation.explanation`,
`presentation.examples`, and near-identical `title`/`objective` text** — only the lesson-number
label ("第1部"/"第2部"/.../"第5部") differs, plus a different `guidedPractice`/
`independentPractice`/`checkpointTest` quiz block is bolted onto the end of each. That's **145
of 170 total Japanese lessons (85%)** where lessons 2 through 5 of a unit teach *nothing new*
versus lesson 1 — they are the same lesson, re-quizzed. Units 1-5 (25 lessons) are the real,
distinct content; only they are exempt from this bug.

Verify this yourself first:
```
node -e "
const c = require('./data/curricula/japanese.js');
['ja-u6-l1','ja-u6-l2','ja-u6-l3'].forEach(id => console.log(id, c.lessons[id].presentation.explanation));
"
```
You should see the exact same text three times except for "第1課"/"第2課"/"第3課".

**This was not caught by the audit script** — its uniqueness check treats the differing part
number as making the string "unique," even though the actual teaching content is a clone. This
is a real gap in the detector, not just in japanese.js's content. Two things to do:

1. **Fix the detector's blind spot generally** (per Rule Zero-B: fix general logic, not a
   subject carve-out) — add a check to `scripts/audit_curricula_uniqueness.js` that strips
   digits/unit-numbers from `presentation.explanation` before the uniqueness comparison, so a
   "lesson" that's identical to a sibling lesson except for a number token gets flagged as a
   near-duplicate, the same way the shingle-overlap detector already catches repeated openers.
   Verify this new check actually fires on the *current*, unfixed japanese.js before you start
   fixing content (that's your proof the detector logic is right), then again after each batch
   of real fixes to confirm progress.
2. **Rewrite the actual content**, unit by unit, starting from Unit 6. For each of the 29
   affected units, each of the 5 lessons must get its own genuinely distinct
   `presentation.explanation` and `presentation.examples` that teaches a different facet,
   sub-topic, or progression step of the unit's overall theme — not a rephrasing of the same
   sentence, not an even chunk-split of one long paragraph into five. Look at how Units 1-5
   (the unaffected, real ones) are actually structured for the bar to match. Use targeted
   string replacement (see Rule Zero-B) on the specific `explanation`/`examples` fields per
   lesson, not a whole-file regeneration.
3. This is a large task — 29 units is a lot of real authoring. **Do as many complete, real
   units as your budget allows, commit and push after every unit** (5 lessons) so partial
   progress is never lost. If you run out of budget partway, stop cleanly: report in
   `REPORTS/` exactly which units are fixed and which are still cloned, do not leave any unit
   half-rewritten (a unit is either all-5-lessons-genuinely-distinct or untouched — don't
   commit a unit with 2 real lessons and 3 still-cloned ones without saying so explicitly).
4. Verify per unit: `node -e "require('./data/curricula/japanese.js'); ..."` re-reading the
   actual explanation text for all 5 lessons of the unit you just fixed, confirming they really
   differ in substance, not just in a swapped number.

## SECTION 2 — Dictionary expansion (large, open-ended, real-content-only)

`data/omni_dictionary.js` exists and is real — 1,155 entries currently, spread across all 30
subjects (20 languages get 45 each, academic/skill Fronds get 25 each, fitness gets 25). The
operator wants this dramatically larger — "over a million entries... it must not be split
evenly... look up dictionaries and thesauruses in every language and see how meaningful and
helpful they are, I expect mine to be the same or better."

**Be honest about scale up front:** 1,155 → 1,000,000+ is roughly an 866x increase. That is not
achievable as real, meaningful, individually-authored content in a single run — say so plainly
in your first commit's message and in a `REPORTS/` note, rather than silently attempting a
shortcut to a big number (see Rule Zero-B's dictionary-specific gaming warning above). Treat
this as a standing, multi-session goal: make real, substantial, honestly-reported progress now,
document exactly how far you got and by what method, so the next window can continue the same
way instead of restarting or padding to catch up.

1. Uneven distribution is correct and intentional, matching the operator's request — a
   language with more day-to-day vocabulary breadth (e.g. English, Spanish, Mandarin) can
   reasonably carry more entries than a narrower skill Frond (e.g. Morse code, Scrabble), and
   within a language, common/everyday vocabulary should outnumber rare/specialist terms, the
   way a real dictionary's coverage isn't flat either.
2. **What a real dictionary/thesaurus entry actually contains** (the operator asked explicitly
   for Fearn's entries to be "the same or better" — this is the bar, not just a definition
   string). The current schema (`term`, `definition`, `category`, `level`) is a starting point,
   not the ceiling. A genuinely dictionary-grade entry, where it's real and applicable, includes:
   - **Pronunciation**: IPA and/or the language's own romanization/phonetic system (pinyin,
     furigana, Jyutping, transliteration) — Fearn already uses these conventions elsewhere in
     the curricula, reuse the same style.
   - **Part of speech** (noun, verb, adjective, particle, etc.) — many current entries collapse
     an idiom or full phrase into one bucket; where the entry is a single word, tag its part of
     speech for real.
   - **Multiple senses**, when a word is genuinely polysemous, not forced onto every entry.
   - **At least one example sentence in context with translation** — a definition alone is
     weaker than a real dictionary; a sentence showing real usage is what makes it "helpful,"
     per the operator's own word.
   - **Synonyms/antonyms** where they genuinely exist (this is the thesaurus half of the ask) —
     don't manufacture a synonym relationship that isn't real just to fill the field.
   - **Register/usage notes** (formal vs. informal, slang, regional, archaic, business Keigo,
     etc.) — the existing Japanese entries already do some of this well (e.g. distinguishing
     `ありがとう` informal vs. `ありがとうございます` polite); extend that pattern generally.
   - **Common collocations or idiomatic expressions** built from the word, where real.
   If a field genuinely doesn't apply to a given entry (e.g. a particle has no synonym), leave
   it out rather than inventing filler — an incomplete-but-honest entry beats a padded one.
   Extending the schema itself (adding fields like `pronunciation`, `partOfSpeech`, `examples`,
   `synonyms`) is fine and encouraged if it makes entries genuinely more complete — update
   whatever code reads `FEARN_DICTIONARY` to handle the new fields gracefully (don't break
   existing entries that don't have them).
3. Work subject by subject. For each subject you expand, commit and push before moving to the
   next — do not batch multiple subjects into one commit, for the same crash-safety reason as
   Section 1.
4. Verify after each subject: re-open the actual added entries with
   `node -e "require('./data/omni_dictionary.js'); console.log(FEARN_DICTIONARY.<subject>.length, FEARN_DICTIONARY.<subject>.slice(-10));"`
   and read them — confirm they're real, not templated.
5. Report real, current totals honestly at the end of this run (total entries now vs. 1,155
   before, per-subject breakdown) — do not extrapolate or round up to sound closer to the
   operator's 1,000,000 target than the real count actually is.

## SECTION 3 — Never leave the app broken; confirm offline + online after Sections 1 and 2

**A practical note before this section, learned from the last run's actual transcript:** in a
Windows/PowerShell environment, `node -e "..."` with a long multi-line quoted string is
unreliable — it repeatedly failed with quoting/escaping errors last time (`Invalid string
escape`, `Unexpected token`) and cost real wasted cycles before the last run worked around it.
Skip that failure mode entirely: **write any check longer than one line to a small scratch
`.js` file first** (e.g. `scripts/check_TMP.js` or a file in your own scratch/temp directory),
run it with `node path/to/file.js`, then delete the scratch file — don't fight inline `-e`
quoting on multi-line or Unicode-heavy content.

Both sections above touch `data/curricula/japanese.js` and `data/omni_dictionary.js` — files
the service worker caches. After each committed batch in Section 1 or 2:
1. Run a live-render check (serve the app locally, load Japanese specifically, confirm the
   lessons you just changed actually render with the new content — not just that `node -c`
   parses the file).
2. Check whether `sw.js`'s `CACHE_NAME` needs bumping again for this batch of changes — if you
   changed cached files after the last bump, bump it again so offline users actually get the
   fix, and say so in the commit.
3. If you can simulate offline mode (stop the server after one successful load, reload) do so
   and confirm the app still works and shows your changes, not stale cached content. If you
   can't simulate it in this environment, say so honestly rather than skipping the question.

## SECTION 4 — Cross-device / audio: re-verify only, don't redo unless something's changed

Sections 2 and 4 of the previous run (`FINISH_FEARN_FINAL_20260831.md`) already honestly closed
the cross-engine (no WebKit/Safari binary available) and audio-fallback (no way to audibly
verify) questions for this environment, with real code-level analysis in
`REPORTS/CROSS_ENGINE_SHELL_AUDIT_20260831.md` and `REPORTS/AUDIO_VOICE_FALLBACK_REPORT_20260831.md`.
Unless this environment now has different tooling available (check: is a WebKit/Safari binary,
an iOS Simulator, or a way to actually play audio present now that wasn't before?), just
re-confirm those honest conclusions still hold and move on — don't spend budget re-litigating
an already-honestly-closed question when Sections 1 and 2 above are the real, large, open work.

## SECTION 5 — Curriculum-completeness self-audit ("if it says it teaches X, it must teach
## everything about X" — this is a different check from Section 1's clone bug)

The operator's standard is explicit: if a lesson/unit claims to teach a script, a grammar
topic, or a vocabulary domain, it must actually cover that topic's real breadth, not a partial
slice. Section 1 catches lessons that are literally duplicated; this section catches lessons
that are each individually real and distinct (so they'd pass Section 1's check) but where the
*unit as a whole* still doesn't actually cover its stated topic completely. This wasn't and
can't be fully verified by the independent read-only checker in one pass — 20 languages' worth
of grammar/vocabulary completeness against a canonical syllabus is a large research task, not a
grep. Do it yourself, concretely:
1. Pick a well-known reference framework per language family where one exists (CEFR A1-C2 for
   the European languages, JLPT N5-N1 grammar point lists for Japanese, HSK levels for
   Mandarin, TOPIK for Korean, etc.) — these are widely documented, standard checklists of what
   a course at each level is expected to cover.
2. For each language, list what topics/grammar points the reference framework says a learner
   should have by the level Fearn's course claims to reach, then check Fearn's actual unit
   list against that list. Report gaps honestly and specifically (e.g. "Spanish never covers
   the subjunctive imperfect" or "Japanese never introduces the causative-passive form") rather
   than a vague "looks complete."
3. This is exploratory and open-ended — budget a bounded amount of time per language rather
   than trying to be exhaustive on all 20 in one run. Report which languages you actually
   checked against a real framework and which you didn't get to, honestly, rather than implying
   full coverage was verified when it wasn't.
4. For the non-language Fronds (chess, mental math, morse, scrabble, songwriting, typing,
   b110/b111/cs110, fitness), the equivalent check is: does the course actually reach a
   genuinely advanced/complete level for its stated scope, or does it stop short? Spot-check a
   few late units directly the way you'd check a language's advanced units.

## SECTION 6 — Ideas that would make Fearn even greater (optional, inspirational, not a
## pass/fail gate — the operator explicitly asked for this list)

These are not bugs and not required for "done" — they're genuine improvement ideas surfaced by
this independent audit process, offered because the operator asked what would make Fearn
better, not because anything here is broken:
- **A permanent, automated regression test for the exact bug this run exists to fix.** Add a
  check to `scripts/audit_curricula_uniqueness.js` (per Section 1) that flags "sibling lessons
  in a unit share near-identical explanation text apart from a number token" as a standing gate
  check, not a one-time fix — so a future authoring pass can't reintroduce the same pattern in
  a different subject without the pre-commit hook catching it immediately.
- **The dictionary and the SRS flashcard deck (`srs-deck.js`) are currently separate systems.**
  Once Section 2's dictionary entries exist with real depth, consider letting a learner add a
  dictionary entry directly into their spaced-repetition review queue — dictionaries are most
  useful when they feed back into active practice, not just passive lookup.
- **In-app dictionary search/filter UI** — verify whether `data/omni_dictionary.js`'s entries
  are actually surfaced anywhere searchable in the running app today, or whether the data exists
  without a real UI consuming it yet; if the latter, that's a real gap between "the data exists"
  and "the feature works," worth closing.
- **A real accessibility pass beyond RTL.** This session's audits focused on RTL/bidi
  correctness; screen-reader labeling, keyboard-only navigation, and color-contrast haven't
  been checked at all this session and are worth a dedicated look.
- **Cross-device ground truth.** The single biggest recurring "honestly can't verify here" gap
  across every run has been real iPad/iPhone/Safari testing — every report has had to fall back
  to code-level analysis. If the operator can spend 10 minutes on their actual devices loading
  a few Arabic/Urdu lessons and toggling offline mode once, that single real data point would
  let every future run stop re-deriving the same "untestable in this environment" conclusion
  and either confirm it's fine or point at a real, reproducible bug.
- **A visible "last verified" timestamp or badge in the app itself**, tied to when the
  quality-gate audit last passed on the currently-deployed commit — would let the operator see
  Fearn's real state from inside the app instead of only from these reports.

## WHEN YOU BELIEVE YOU'RE TRULY DONE (or budget runs out — per Rule Zero-A, this is not optional)

Whether you finished everything or are stopping because budget ran out, do this exact sequence
before your final commit — it's what makes the next window (human or another Antigravity
instance) able to continue without you:

1. Re-run `node scripts/audit_curricula_uniqueness.js` (full, no filter) and
   `node scripts/audit_css_coverage.js`, and compare both against the integrity baseline you
   recorded at the start (per Rule Zero-B). Nothing may have regressed — fix or revert anything
   that has, before this final commit.
2. Re-run Section 3's live-render check once more, end to end.
3. Write or update `REPORTS/RESUME_STATE_20260831.md` with: current HEAD hash, exactly how many
   of the 29 affected Japanese units are genuinely fixed vs. still cloned (name them), the real
   current dictionary entry count vs. the 1,155 starting point and the 1,000,000 target (both
   numbers, no rounding up), which subjects got the richer dictionary schema, which languages
   Section 5's completeness audit actually covered, and the baseline-vs-final audit comparison
   from step 1.
4. Commit and push that final state.

An honest partial result on any front is a legitimate, acceptable stopping point — better than
a fabricated "done," and better than silently padding content to look further along than it
is. What's not acceptable is stopping without leaving that resume-state record — per Rule
Zero-A, nobody is coming to ask you what you got done, so the file has to say it for you.

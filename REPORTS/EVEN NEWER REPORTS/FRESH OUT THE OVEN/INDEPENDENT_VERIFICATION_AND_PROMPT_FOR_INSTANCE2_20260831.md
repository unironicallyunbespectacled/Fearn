# Independent Verification Report + Prompt for Instance 2 ("praise16")
Generated 2026-08-31 by the independent read-only verification agent (never pushes to Fearn).
All findings below were re-derived from scratch against the live repo (`/tmp/fearn-verify`, HEAD `f090e30`), not taken from Antigravity's self-reports.

## What I actually verified myself (commands run, not claims trusted)

1. `git fetch origin main` + fresh `node scripts/audit_curricula_uniqueness.js` run — full 3740-lesson pass.
2. Direct `node -e` inspection of raw lesson objects (not just the audit script's verdict) for the university-course and non-Latin-script Fronds.

## CONFIRMED PROBLEM 1 — 7 subjects still carry the "fake template" bug

Fresh audit run shows `[HARD FAIL] Found 10 lessons matching known fake explanation template openers!` for:

- `brazilian-portuguese` (Units 32-33)
- `english` (Units 32-33)
- `german` (Units 32-33)
- `romanian` (Units 32-33)
- `spanish` (Units 32-33)
- `turkish` (Units 32-33)
- `vietnamese` (Units 32-33) — the original, still unfixed since it was first flagged

This is the exact same defect class already successfully fixed in French, Japanese, and Argentine Spanish this session: `presentation.explanation`, `mnemonics`, and `culturalNotes` are boilerplate strings like *"[Topic] represents a cornerstone of Theatre, Stagecraft & Performing Arts. This session investigates its historical origins..."* — with the actual topic name just substituted into a template, not real target-language content. There is a proven, working fix pattern already in the repo (see the `argentine-spanish.js` Unit 32-33 rewrite, commit `f090e30`, and the `japanese.js` Units 2-16 rewrite, commit `e31468a`) — copy that method exactly: replace the templated `explanation`/`examples`/`mnemonics`/`culturalNotes` with real, specific, native-language content about the actual topic, and replace any generic "誤文例"/"提示された文法規則に厳密に準拠した" style distractor options with real wrong-but-plausible answers.

`arabic`'s shingle-overlap FAIL is a known benign false positive (29 capstone lessons legitimately share an opening phrase) — do not "fix" it, it would just be busywork.

## CONFIRMED PROBLEM 2 — Zero-knowledge learners cannot start 3 of the "6 other skills" Fronds

Checked `b110-u1-l1`, `b111-u1-l1`, `cs110-u1-l1` directly:

- **b110** (business/analytics course) Lesson 1 objective: *"Apply Principal Component Analysis (PCA) to survey data to construct strategic 2D brand perceptual maps..."* — PCA, eigenvectors, and dimensionality reduction as the literal first lesson.
- **cs110** (CS course) Lesson 1 objective: *"Derive formal epsilon-delta asymptotic bounds and apply the Master Theorem to divide-and-conquer..."* — real-analysis proof technique and algorithm-complexity theorem as lesson 1.
- **b111** (finance course) Lesson 1 objective: *"The Capital Asset Pricing Model (CAPM) & The Security Market Line (Derivation of expected return...)"* — assumes statistics and finance fluency already.

None of these three Fronds has any true beginner on-ramp. A learner with zero foundational knowledge (no linear algebra, no calculus, no stats, no programming, no finance) cannot start Unit 1 Lesson 1 of any of them. This is worse than a difficulty curve problem — it's a missing floor.

## CONFIRMED PROBLEM 3 — Non-Latin-script language Fronds assume script literacy from Lesson 1 (CORRECTED: I dropped 2 languages I had already found evidence for)

Directly inspected `ja-u1-l1`, `ar-u1-l1`, `ko-u1-l1`, `zh-u1-l1`, `hi-u1-l1`, `ur-u1-l1`, `am-u1-l1`, `hk-u1-l1` (Cantonese), **and `ru-u1-l1`, `uk-u1-l1`** (Russian and Ukrainian — Cyrillic): every one of these — all TEN, not eight — has its `objective` field written **entirely in the target script itself** (Hangul, Hanzi, Devanagari, Ge'ez Fidel, Arabic abjad, Cyrillic, etc.) with no romanization or English gloss visible before the learner is expected to already read that script. Someone starting from zero cannot even parse what Lesson 1 is asking them to learn.

**Owning a real mistake here:** I actually ran the command that showed Russian's and Ukrainian's Cyrillic-only objectives earlier in this same session, before writing the original version of this report — and then dropped both languages from the write-up anyway when I only listed the ones I happened to re-check in that specific moment. That's not a gap in checking, that's a gap in carrying my own evidence through into the deliverable, and it's exactly the kind of failure that justifies not trusting a claim just because I stated it once.

## CONFIRMED PROBLEM 3b — "Latin script" does NOT mean "readable by a zero-knowledge English speaker" — this was wrongly treated as a minor afterthought

The remaining 10 language Fronds use the Latin alphabet, but every one of them has letters, diacritics, or a tone system that an English speaker starting from zero cannot correctly read or pronounce on sight, and none of them currently gets any dedicated on-ramp for this — same underlying problem as Problem 3, just not caught by "is this the Latin alphabet, yes/no":

- **Vietnamese**: 6 lexical tones marked by diacritics (sắc, huyền, hỏi, ngã, nặng, plus unmarked ngang) that **change the word's meaning entirely**, not just its "accent." Arguably deserves treatment as serious as a full separate script, not a footnote.
- **Turkish**: dotted/dotless i (İ/i vs I/ı) is a genuinely different letter pair from English i, plus ğ (silent, lengthens the vowel before it), ş, ç — none pronounceable by guessing from English spelling rules.
- **Romanian**: ă, â, î, ș, ț — five letters with no English equivalent sound, easily misread as their undiacritic'd counterparts.
- **German**: ä, ö, ü (umlauts, distinct vowel sounds), ß (not a "B"), plus consonant values that differ from English (w = English v sound, etc.).
- **French**: extensive silent final letters, nasal vowels, and liaison rules that make written French and spoken French diverge sharply — reading it "like English" produces wrong pronunciation throughout.
- **Brazilian Portuguese**: nasal vowels (ã, õ, and vowel+m/n combinations), ç, and vowel reductions that don't map onto English vowel sounds.
- **Spanish / Argentine Spanish**: rolled/tapped r, ñ, and (Argentine specifically) the sheísmo/zheísmo pronunciation of ll/y as "sh"/"zh" — a genuine trap for anyone assuming Spanish sounds like it's spelled in English.
- **Swahili**: Bantu-derived pronunciation that does not match English sound-to-letter assumptions despite the shared alphabet.

None of this requires a new script primer the way Problem 3 does — it requires an equivalent **phonics/pronunciation on-ramp per language**, itemized the same way, not the one throwaway line the original version of this prompt gave it.

---

## Structural facts verified before writing v2 of this prompt (2026-08-31, follow-up pass)

Checked directly, not assumed:
- `data/curricula/<subject>.ledger.js` hardcodes `fullRoadmapLength` (e.g. 170, 25) plus ID-string arrays `authoredInFull`, `stubOnly`, `lastCompletedLessonId`, `nextToAuthor`. **Renumbering existing units (shifting old Unit 1 → Unit 2, etc.) requires rewriting every one of those ID strings in lockstep, or the app's progress tracking desyncs.** This is a real collision/breakage risk that v1 of this prompt did not warn about.
- `prerequisites` fields on lesson objects are unused in practice (checked several, all `undefined`) — not a live collision risk.
- `scripts/audit_curricula_uniqueness.js` does not hardcode expected per-subject totals — it measures whatever actually exists, so adding lessons won't itself fail the audit.
- v1 of this prompt also never explicitly forbade the two obvious ways to fake compliance: marking the ledger "authored" without matching real content, or "fixing" the fake-template bug by writing a *new* template instead of real content. v2 below closes both gaps.

## PROMPT FOR INSTANCE 2 ("praise16") — v2, paste this directly into the standby window

```
DO NOT TRUST THIS REPORT BLINDLY — INDEPENDENTLY RE-VERIFY EVERY CLAIM IN IT
FIRST, THE SAME WAY IT TELLS YOU NOT TO TRUST YOUR OWN CLAIMS LATER:
The author of this report got things wrong twice in this same investigation —
missed the entire FEARN.audio.speak() system on a first, too-narrow grep, and
separately dropped Russian and Ukrainian from the "non-Latin-script" list
despite already having run the command that proved both are Cyrillic-only,
simply because they weren't re-checked in the exact moment the final list was
written. Both mistakes were only caught by going back and re-running real
commands, not by re-reading the prose harder. So: before acting on any
specific claim below (a commit hash, a line number, a "10 lessons fail" count,
a "zero issues found" result), re-run the cited command yourself
(`git log`, `node scripts/audit_curricula_uniqueness.js`, the specific `node -e`
inspections referenced) and confirm the same output before treating it as true.
If something below doesn't reproduce, trust your own re-check over this report,
and say so explicitly in what you report back — don't silently paper over a
discrepancy either way.

PRIORITY ORDER (do not skip ahead — beginner-tier completeness across ALL 30 Fronds
comes before any further advanced-tier work, and the app SHELL below comes before
even that, because a broken shell undermines every Frond regardless of content):

0. FIX GLOBAL APP-SHELL / CROSS-DEVICE BUGS FIRST — these affect every session
   on the affected device/subject, so they outrank content work:
   a) LIVE BUG REPORT TO INVESTIGATE: on iPad, switching into Arabic or Urdu
      (RTL) then switching to another subject leaves the layout stuck
      right-aligned. app.html's selectSlot() resets dir/direction/textAlign on
      every module switch, and arabic.js/urdu.js create dir="rtl" elements
      fresh each render — this looks structurally correct and did not
      reproduce under headless Chromium, but Chromium is the WRONG ENGINE to
      rule this out. iPhone/iPad run WebKit/Safari, which has real documented
      reflow quirks around dir-attribute removal, especially inside a
      home-screen-installed PWA. Test on actual Safari/WebKit (real device or
      iOS Simulator) specifically: open Arabic or Urdu, then switch to any
      other subject, and confirm layout truly returns to LTR — not just that
      the DOM attribute was removed.
   b) REMOVE `user-scalable=no` from the viewport meta tag in app.html AND
      index.html (currently disables pinch-to-zoom entirely). This is an
      accessibility violation (WCAG 1.4.4) and actively harmful here — dense
      non-Latin scripts (Ge'ez, Devanagari conjuncts, Arabic harakat) are hard
      to read at fixed size on a phone, and zoom is the exact tool a learner
      needs. Replace with a real maximum-scale that still permits zooming.
   c) CHECK whether per-learner progress (lesson completion, streaks) relies
      solely on localStorage. If so, note that Safari's ITP purges localStorage
      after ~7 days of no interaction unless the site is added to the home
      screen — confirm this is documented/communicated to users, or consider
      a more durable storage strategy.
   d) ADD `env(safe-area-inset-top, ...)` handling alongside the existing
      safe-area-inset-bottom usage in components.css, so content isn't
      obscured by the iPhone 16's Dynamic Island / notch.
   e) Test in Firefox (Gecko engine) in addition to Chromium/Edge/Safari —
      it hasn't been checked at all and is a genuinely different rendering
      engine than everything verified so far.
   f) Check the srs-deck.js flashcard review feature for the same RTL/script
      rendering correctness as the main lesson flow — it's a real, separate
      feature (FSRS/SM-2 spaced repetition), not just a content topic, and
      pulls from the same lesson data so the same RTL bug could reproduce there.

1. FIX THE REGRESSION FIRST (proven pattern already exists in this repo — copy it):
   Units 32-33 in brazilian-portuguese.js, english.js, german.js, romanian.js,
   spanish.js, turkish.js, and vietnamese.js all contain templated placeholder
   explanations/mnemonics/culturalNotes (topic name substituted into a generic
   "represents a cornerstone of Theatre, Stagecraft & Performing Arts..." template,
   plus fake "誤文例"-style generic distractor options). This was already fixed
   correctly in argentine-spanish.js (commit f090e30) and japanese.js (commit
   e31468a) this session — replicate that exact method: real, specific,
   native-language content for each lesson's actual topic, real plausible wrong
   answers, no boilerplate. Do NOT touch arabic's shingle-overlap flag — verified
   benign false positive, not a real bug.
   This step is pure in-place field replacement (same lesson IDs, same count) —
   no renumbering, no ledger structural changes needed here.

2. ADD A REAL BEGINNER FLOOR TO b110, b111, AND cs110 — SAFELY:
   Their current Lesson 1s open with PCA (b110), epsilon-delta proofs + Master
   Theorem (cs110), and CAPM derivation (b111) — all graduate-entry-level content
   with zero on-ramp. Someone with no linear algebra/calculus/stats/programming/
   finance background cannot start these Fronds at all.
   MANDATORY SAFE-INSERTION RULES — violating these breaks the app:
   a) Do NOT renumber any existing unit or lesson ID. Never turn existing
      "u1-l1" into "u2-l1" etc. — that requires rewriting every reference to it
      across the ledger and risks desyncing progress tracking or creating
      collisions if done incompletely.
   b) Prepend new foundational content by shifting lesson numbers WITHIN Unit 1
      only, using the existing integer convention (e.g. if b110-u1-l1..l5
      exist, the new foundational lesson becomes b110-u1-l1 and the old l1..l5
      become l2..l6) — never touch Unit 2+, and never use a non-integer ID
      suffix (lesson ordering in the app was not confirmed to tolerate that).
      Verify with `Object.keys(FEARN_CURRICULA['<subject>'].lessons)` before
      and after to confirm no ID was silently dropped or collided.
   c) After adding any lesson, update that subject's .ledger.js: add the new
      lesson ID(s) to authoredInFull (or stubOnly if not yet written), update
      fullRoadmapLength to the new real total, and update lastCompletedLessonId/
      nextToAuthor to reflect the true state. A mismatch between the ledger and
      the actual lessons object is itself a bug — check both after every change.
   d) cs110: basic programming concepts, what a variable/loop/function is,
      before any complexity theory.
      b110: what a dataset/variable/mean/variance is, before PCA.
      b111: what a stock/return/risk is, before CAPM.
   Every other Frond's Unit 1 Lesson 1 should be re-checked against the same
   bar: could someone who has never touched this subject before understand and
   complete it unaided? Apply the same safe-insertion rules (a-c) anywhere else
   you add a foundational on-ramp.

3. ADD A SCRIPT/ALPHABET ON-RAMP TO EVERY NON-LATIN-SCRIPT LANGUAGE FROND —
   ALL TEN OF THEM, NOT EIGHT:
   japanese, arabic, korean, mandarin, cantonese, hindi, urdu, amharic,
   RUSSIAN, AND UKRAINIAN (Cyrillic — confirmed via direct inspection of
   ru-u1-l1 and uk-u1-l1, both written entirely in Cyrillic with no
   romanization) all currently have their very first lesson's
   objective/explanation written directly in the target script with no
   romanization or English gloss to bootstrap from. Add an explicit
   script-literacy on-ramp (even a short pre-Unit-1 primer covering the
   writing system basics with romanization throughout) so a zero-knowledge
   learner isn't shown unreadable text as their first experience.

3b. ADD AN EQUIVALENT PHONICS/PRONUNCIATION ON-RAMP TO EVERY LATIN-SCRIPT
   LANGUAGE FROND TOO — this is NOT optional or secondary, sharing the Latin
   alphabet does not mean a zero-knowledge English speaker can read it
   correctly. Do this per-language, itemized, not as a generic one-liner:
   - vietnamese: the 6 tone diacritics change word meaning entirely — treat
     this with the same seriousness as a script primer, not a footnote.
   - turkish: İ/i vs I/ı (genuinely different letters from English i), ğ, ş, ç.
   - romanian: ă, â, î, ș, ț.
   - german: ä, ö, ü, ß, and consonant values that differ from English (w).
   - french: silent final letters, nasal vowels, liaison — written and
     spoken French diverge sharply from an English-reading-rules guess.
   - brazilian-portuguese: nasal vowels (ã, õ, vowel+m/n), ç.
   - spanish and argentine-spanish: rolled/tapped r, ñ, and (Argentine
     specifically) the sheísmo/zheísmo ll/y-as-sh/zh pronunciation.
   - swahili: Bantu-derived pronunciation not predictable from English
     sound-to-letter assumptions despite the shared alphabet.
   Apply the same safe-insertion rules (2a-2c above) to both 3 and 3b — no
   renumbering, new non-colliding IDs only, ledger updated to match reality
   every time.

4. FITNESS IS A SEPARATE TRACK, NOT COVERED BY THE AUDIT SCRIPT:
   `scripts/audit_curricula_uniqueness.js` only scans `data/curricula/` — it
   never touches `data/fitness-program.js`, `data/fitness.ledger.js`, or
   `modules/fitness.js`. Read `GEMINI_FITNESS_FIXES.md` in the repo root and
   finish that work (it documents real bugs: physically-impossible exercises
   in "small room" mode, "100% authored" not meaning actually deep/complete,
   and a UX rework to a unified daily workout). Verify fitness by hand —
   the audit passing tells you nothing about it.

5. CORRECTION — audio already exists, do NOT build it from scratch:
   FEARN.audio.speak(text, langKey) in engine.js (native browser
   speechSynthesis, with a hasVoice() check and per-language tag mapping) is
   already wired into all 20 language modules. What actually needs doing is
   VERIFICATION, not construction: for each of the 20 languages, on each
   target device (iPhone 16+, iPad A16, HP EliteBook 840 G8), confirm
   FEARN.audio.hasVoice(langKey) returns true and pressing a 🔊 button
   produces correct, audible pronunciation — not silence and not a
   wrong-language fallback voice mangling the text. Pay special attention to
   languages less likely to have built-in OS voices: Amharic, Swahili,
   Cantonese (as distinct from Mandarin), Ukrainian, Urdu. If a language has
   no usable voice on a given platform, that's a real, reportable gap — note
   which language/device combinations fail rather than assuming all 20 work
   just because the code path exists.

6. ONLY AFTER 1-4 ABOVE: continue building out remaining beginner-through-B1/B2
   (or equivalent tier, e.g. JLPT N5-N4, HSK 1-3) content across every Frond that
   isn't yet complete at that tier, before adding further advanced (B2+/C1/C2 or
   equivalent) material anywhere. The goal: someone starting from absolute zero
   can pick any of the 30 Fronds and make real, uninterrupted progress through a
   solid beginner tier using nothing but the app itself.

MANDATORY LIVE-RENDER CHECK (data validation alone is not proof the app works):
- engine.js contains multiple `catch (e) {}` blocks that silently swallow
  runtime errors with no logging. This means a structurally broken lesson
  (missing field, malformed shape) can make the UI fail silently — blank or
  broken content, no console error — and neither `node -c` nor the audit
  script will ever detect that, since both only validate the data file in
  isolation, never the actual render path.
- After ANY change to a subject's lessons/ledger (not just at the very end),
  actually serve and load the app and confirm the specific lesson(s) you
  touched render and are selectable — do not rely on data validation alone.
  Minimum method: `python3 -m http.server <port>` from the repo root, then
  open `app.html` in a real browser (or headless Chromium:
  `chrome --headless=new --dump-dom http://localhost:<port>/app.html`) and
  grep/read the output for the subject name and lesson content actually
  appearing, not just that the server responded 200.

ANTI-GAMING RULES (non-negotiable, apply to every step above):
- Never write a new "fake template" to replace an old one — a foundational
  lesson or script primer must be genuinely specific to its actual content,
  not generic boilerplate with a topic name swapped in. This is the exact bug
  being fixed in step 1; reproducing it anywhere else defeats the entire point.
- Never mark a lesson ID as done in .ledger.js (authoredInFull) unless the
  matching lessons object entry actually contains real, complete content.
  stubOnly is for real stubs only, not a place to hide unfinished work while
  claiming progress elsewhere.
- After every batch of changes, run `node scripts/audit_curricula_uniqueness.js`
  AND independently re-open a few of the specific lessons you just touched with
  `node -e "require('./data/curricula/<subject>.js'); console.log(...)"` to
  confirm the actual file content, not just the audit's summary verdict — a
  PASSED audit only checks lexical uniqueness/density, not whether content is
  pedagogically real or whether the ledger matches reality. Problems 2 and 3 in
  this report were both invisible to the audit script and only found by hand.
- Do not claim a fix is complete in commit messages or summaries without having
  run and shown the output of the verification commands above for that specific
  change.
```

## CONFIRMED PROBLEM 4 — Fitness is entirely outside the audit script's scope, and has known unfixed bugs

`scripts/audit_curricula_uniqueness.js` line 5 hardcodes `path.join(ROOT_DIR, 'data/curricula')` — it never scans `data/fitness-program.js` / `data/fitness.ledger.js` / `modules/fitness.js` at all. "Run the audit" (my own earlier instruction) is meaningless for fitness. A separate file already exists in the repo, `GEMINI_FITNESS_FIXES.md`, documenting real human-tested bugs: physically impossible exercises assigned to "small room" mode (e.g. a 10-minute walk prescribed in a dorm room), a "100% authored" ledger claim that doesn't guarantee real depth, and a clunky 14-track-tab UX the user asked to be replaced with a unified daily workout. None of this is confirmed fixed.

## RETRACTED — Problem 5 as originally stated was WRONG

I originally claimed "no audio/pronunciation anywhere in the 20 language Fronds," based on a grep that only checked two files (`modules/fitness.js` and one other). On a deeper, broader re-check across the whole repo, this was false — I'm correcting it plainly rather than letting a wrong claim stand.

## CONFIRMED (corrected) — Audio exists and is wired into all 20 language modules; the real open question is voice coverage per device

`FEARN.audio` is defined in `engine.js` (~line 741): a real wrapper around the browser's native `speechSynthesis` API, with rate control, a `hasVoice(langKey)` check, a per-language tag map (`AUDIO_LANG_TAGS`), and a `speak(text, langKey)` method that picks the best available system voice and speaks the text. Every one of the 20 `modules/languages/*.js` files calls `FEARN.audio` 12 times each — 🔊 buttons are wired throughout lesson content.

**What's NOT yet verified (this is the real remaining risk, not absence of the feature):** `speechSynthesis` depends entirely on TTS voices actually installed on the user's OS/browser. Coverage varies a lot by device and language — iOS/Safari and Windows both ship strong support for major languages (Spanish, French, German, Japanese, Mandarin, Russian, Arabic) but have historically had spotty-to-nonexistent built-in voices for less common ones (Amharic, Swahili, Cantonese specifically vs. Mandarin, Ukrainian, Urdu). If `findBestVoice()` finds nothing, the code still calls `speechSynthesis.speak()` anyway — meaning on a device without the right voice installed, the 🔊 button could either silently produce nothing audible, or worse, speak the target-language text in a wrong-language/English fallback voice that badly mispronounces it. This needs real per-language, per-target-device testing (iPhone 16+, iPad A16, HP EliteBook 840 G8, at minimum), not just confirming the code exists.

## CONFIRMED PROBLEM 6 — Global app-shell / cross-device issues (found investigating a live iPad bug report)

The user reported: on iPad, switching into Arabic or Urdu (RTL) then switching to another subject leaves the layout stuck right-aligned. Investigated the actual code:

- `app.html`'s `selectSlot()` DOES reset `dir`/`direction`/`textAlign` on the module container before every render, and `arabic.js`/`urdu.js` create their `dir="rtl"` elements fresh each render rather than caching them — structurally this looks correct, and a headless-Chromium load here didn't reproduce it. **But Chromium is the wrong engine to rule this out** — iPhone/iPad run WebKit/Safari, which has real documented quirks around `dir`-attribute reflow not repainting cleanly, especially inside a home-screen-installed PWA. This needs actual Safari/WebKit testing (real device or iOS Simulator), not just the headless-Chromium check I added earlier — that check alone would NOT have caught this class of bug.
- `<meta name="viewport" ... user-scalable=no ...>` in both `app.html` and `index.html` **disables pinch-to-zoom entirely**. This is a real accessibility anti-pattern (fails WCAG 1.4.4) and is especially harmful here: dense non-Latin scripts (Ge'ez, Devanagari conjuncts, Arabic with harakat) are hard to read at fixed size on a phone screen, and zoom is exactly the tool a learner would reach for. Should be removed or changed to a real `maximum-scale` that still allows zooming.
- Safari's Intelligent Tracking Prevention (ITP) is documented to purge `localStorage` after ~7 days of no interaction with a site not added to the home screen. If Fearn's lesson-completion/progress tracking relies solely on `localStorage` (this needs confirming — not yet checked which storage the per-learner progress actually uses vs. the ledger, which is authoring status, not learner progress), an iPhone/iPad user who takes a week off could silently lose progress. Worth explicit verification.
- `env(safe-area-inset-bottom)` is used in `components.css`, but `safe-area-inset-top` was not found in the files checked — relevant for the iPhone 16's Dynamic Island covering content at the top of the screen.
- The service worker (`sw.js`) uses a genuinely good strategy — network-first with cache-fallback, so online users always get fresh content and the cache self-updates — lower risk than a naive cache-first setup. The one remaining risk: `CACHE_NAME` is a manually-bumped version string; if it's not bumped when the *set* of cached files changes (e.g. a new module file added), a first-ever offline visit before that file is ever fetched online won't have it cached. Low severity given network-first, but worth knowing.
- Windows (HP EliteBook) wasn't tested in more than one engine — Chromium-based browsers (Chrome/Edge) share the same rendering engine as what I tested here, but Firefox (Gecko) is a genuinely different engine and hasn't been checked at all.
- **Correction to something I said last turn:** flashcards ARE a real, distinct feature — `srs-deck.js`, a genuine FSRS/SM-2 spaced-repetition review deck, not just a content topic mentioned inside individual lessons. It should be checked for the same RTL/script-rendering correctness as the main lesson flow, since it pulls from the same lesson data.

## Full-corpus systematic checks run after the audio correction (not just spot-checks)

To stop relying on narrow spot-checks after getting audio wrong once, I ran three checks across all 29 `data/curricula/*.js` files and every lesson in them (not a sample):

1. **Answer-index/answer-string validity** — every `guidedPractice`/`independentPractice`/`checkpointTest` item, across every lesson, every subject. First pass gave 110+ false positives because chess (and likely other skill Fronds) use a different item schema (`type: "find-the-move"` with `fen`/`answer`, and even their own `multiple-choice` items use an `answer` string rather than `answerIndex`) — re-ran schema-aware. Real result: **one genuine, tiny bug** — `scrabble-u2-l3` checkpointTest item 2's `answer` string has a trailing period that its matching `options[]` entry doesn't, so if the app does exact-string matching to highlight the correct choice, that one question would fail to mark it. Isolated, not a pattern, but real and worth a one-line fix.
2. **Ledger-vs-reality integrity** — for all 29 subjects, checked every ID in `authoredInFull`/`stubOnly` actually exists in the lessons object and vice versa, and that `fullRoadmapLength` matches the real count. **Zero issues found.** This is a genuinely clean result, not something to manufacture a problem out of.
3. **Content-depth heuristic** — flagged any lesson with an `explanation` under 150 characters or zero `examples`, across all subjects. **Zero flagged.** Also clean.

## Correction to the v2 prompt's step 2b

v2 offered two insertion options, one of which (`l0a`-style non-integer ID suffixes) was not verified safe — I could not confirm from app.html how lesson order/sequencing is actually determined. That option is removed below; only the safer within-unit integer renumbering remains.

## Note on Instance 2 ("praise16") activity
Still zero evidence found of any commits distinguishable as Instance 2's own work — every commit in the full history traced to Instance 1 ("3byke"). If praise16 comes back online, the prompt above is what it should pick up.

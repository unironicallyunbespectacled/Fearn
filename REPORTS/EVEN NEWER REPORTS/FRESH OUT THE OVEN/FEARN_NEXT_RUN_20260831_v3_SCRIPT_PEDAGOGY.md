# FEARN — next unattended run (v3)
Generated 2026-08-31 by the independent read-only verification agent (never pushes to Fearn).
Verified against real HEAD `b91dccd` (`unironicallyunbespectacled/Fearn`, branch `main`).

## What v2's run actually did — independently re-verified, real, not gamed

Direct spot-checks against the live files (not Antigravity's self-report):
- **Japanese Units 6-34 clone bug: genuinely fixed.** Read `ja-u6-l1` through `ja-u6-l5` directly
  — explanations and examples are now distinct per lesson (dashi/umami vocab in l1, adjectives in
  l2, preferences/allergies in l3, izakaya culture in l4, paying/closing etiquette in l5). Unit
  titles across 25-34 also confirmed distinct topics, not relabeled clones.
- **`scripts/audit_curricula_uniqueness.js` normalized-duplicate gate: real, and it actually
  fires.** Read the diff directly — it strips unit/number tokens before comparing, exactly as
  specified, and the commit history shows it caught the *unfixed* Japanese file before any
  content was rewritten (proof the check works, not just a decoration).
- **Dictionary expansion: real content, not templated.** Read the actual last entries added for
  Japanese (もったいない, おもてなし, 侘び) and Korean (효도) directly — genuine definitions,
  real IPA/pronunciation, real example sentences with translations, real synonyms/antonyms,
  register notes. Not filler. 1,246 entries now (was 1,155) across 15 languages expanded with the
  new richer schema.
- **`index.html` and `app.html` dictionary modal: genuinely wired to the new schema fields**
  (`pronunciation`, `partOfSpeech`, `synonyms`) — confirmed by direct grep of both files, not
  just Antigravity's claim.
- **`sw.js`: `CACHE_NAME` really bumped** to `fearn-v3.5-omni-lexicon-curricula-20260831`,
  confirmed by direct read.

**This part of the work is real. Don't make Antigravity redo it.**

## THE THING THAT MATTERS MOST — confirmed, systemic, and NOT fixed by any of the above

**The operator's core complaint is correct and I independently reproduced it with hard evidence.**
None of v2's work touched this — it's a different bug from the Japanese clone issue, and it's
worse, because it affects the very first lesson of every non-Latin-script language, meaning a
true beginner is blocked from lesson one.

### Exact reproduction — Korean, `ko-u1-l1` ("Hangul Principles, Basic Vowels & Consonants")

The explanation teaches, in one dense paragraph, only **5 of 14 basic consonants**
(ㄱ ㄴ ㅁ ㅅ ㅇ) and part of the vowel set — as prose "fun facts" (King Sejong, 1443, the
philosophy behind the vowel shapes), not as a structured, drillable letter chart.

The guided-practice question immediately after asks the learner to identify which Hangul word
built from **`ㄱ, ㄴ, ㄷ, ㅁ, ㅂ` and `ㅏ, ㅣ, ㅜ`** means "tree," with answer options **`나무`
/ `바다` / `가구` — presented in raw Hangul, zero romanization in the options themselves.**
Two of the five consonants used in the question (`ㄷ`, `ㅂ`) were never taught in the
explanation above it. A learner with zero prior Hangul knowledge cannot read the options at all,
let alone answer.

**This does not resolve by lesson 5 of the same unit either** — I read `ko-u1-l2` through
`ko-u1-l5` directly. By l5, guided-practice options are still bare Hangul with no romanization
(`선생님이 아닙니다.` / `선생님가 아닙니다.` / `선생님은 아닙니다.`). The entire first unit
assumes the learner can already read Hangul fluently, while the lesson claiming to teach Hangul
never actually drills the letters one at a time with sound/romanization pairing.

### Confirmed identically across every other non-Latin-script language — read directly, not inferred

- **Japanese** (`ja-u1-l1`): explanation *describes* hiragana/katakana/kanji in English prose
  ("46 phonetic characters...") but never actually teaches a single kana character's shape or
  sound. Guided-practice options are full Japanese sentences with kanji, no romaji gloss:
  `おはようございます、今日も一日よろしくお願いします。` etc. Someone who cannot yet read
  hiragana cannot parse this to select an answer.
- **Russian** (`ru-u1-l1`): explanation groups Cyrillic letters conceptually ("true friends",
  etc.) but options are bare Cyrillic sentences: `Это мама, а там папа.` / `Тут кот и собака.`
- **Arabic** (`ar-u1-l1`): explanation describes the 28-letter Abjad and RTL cursive connection
  rules in prose; options are full vocalized Arabic sentences with no transliteration:
  `وَعَلَيْكُمُ السَّلَامُ...` — unreadable to a true beginner.
- **Mandarin** (`zh-u1-l1`): even though Mandarin's own script *is* taught via Pinyin (Latin
  letters) elsewhere, this specific first lesson's guided-practice options are pure Chinese
  characters describing tongue positions, no pinyin: `舌位与「i」完全相同...`
- **Amharic** (`am-u1-l1`): explanation describes the Ge'ez Fidel abugida (33 consonant families
  × 7 vocalic orders) in prose; options are bare Fidel script.
- **Urdu** (`ur-u1-l1`): explanation describes the 38-letter Nastaliq Perso-Arabic system in
  prose; options are bare Urdu script with no transliteration in the choices.
- **Hindi** (`hi-u1-l1`): explanation describes Devanagari's Shirorekha/abugida structure in
  prose; options are bare Devanagari with no romanization in the choices.

**8 for 8.** Every non-Latin-script language in Fearn has this exact shape of bug: the
"introduce the script" lesson *talks about* the script instead of *teaching it letter by letter*,
and every subsequent lesson in the same unit assumes fluent reading of a script that was never
actually drilled. This is precisely what the operator described: *"You introduce Hangeul to me.
You don't teach me Hangeul. You tell me about the script. You make the script a guided practice
where the question is in Hangeul, the answer is in Hangeul, and you expect me to answer."*

**This is Fearn's single most serious defect, more serious than the Japanese clone bug.** The
clone bug made 145 lessons repetitive. This bug makes the *first lesson of 8 different
languages* unusable by the exact audience Fearn exists for — someone starting from zero.

### Checked this pass, after the operator pushed back that this report was too narrow: the other 22 Fronds

I went back and directly read Unit-1-Lesson-1 of all 9 Latin-script languages (Spanish, French,
German, Turkish, Vietnamese, Romanian, English, Argentine Spanish, Brazilian Portuguese) and all
9 skill/course Fronds (Chess, Morse, Mental Math, Scrabble, Songwriting, Typing, CS110, B110,
B111) plus Fitness's first phase. **None of them show the same "quizzed on something never
taught" pattern at lesson one** — e.g. Turkish's first lesson explicitly teaches dotted-İ vs
dotless-I with IPA before quizzing on it; German explicitly teaches the w/v/z sound rules before
quizzing on them; Chess/Morse/Typing/Mental Math all open with a single new concept explained
plainly before the first drill. **This is real information, not a guess — but it is still only
unit-1-lesson-1 of each Frond.** I have NOT checked deeper units of any of these 22 Fronds, and I
have NOT done the full "read every lesson, check perfect progression, note every grievance, note
everything that would make Fearn greater" pass the operator originally asked for across all 30
Fronds — that full pass is what Section 5 below now requires as a mandatory, not optional, part
of this run.

## DO NOT TRUST THIS FILE BLINDLY EITHER

Re-run every cited command yourself before acting on it. If something doesn't reproduce, trust
your own re-check over this file and say so explicitly.

## RULE ZERO — bounded, honest completion

Work straight through every section below, in the order given. **Completion bar:** for anything
you can execute and check, the bar is real — verification command run, real output shown, passed.
For anything you can't execute here, say plainly what you could and couldn't test and why — never
invent a passing result. **Commit and push after every unit of real work**, not in a batch —
Section 1 alone touches 8 languages; a mid-run cutoff must not lose already-good work.

## RULE ZERO-A — KEEP GOING WITHOUT HUMAN INPUT; NEVER STOP TO ASK

Nobody is watching this window after it starts. Never pause for permission or confirmation —
every section tells you what to do if something's ambiguous. Work through every section in order
until either everything's genuinely complete or you hit your real budget limit — running out of
budget mid-run is fine and expected, stopping early with budget left or going quiet is not.
**Before your final commit, write/update `REPORTS/RESUME_STATE_20260901.md`** with: which of the
8 languages in Section 1 got a genuine script-drill rewrite vs. still untouched, which of the 30
Fronds got Section 5's full deep-read pass vs. only a spot-check vs. not reached at all, current
dictionary total vs. 1,246 baseline, current fitness Section 2 status, every grievance and
"would make Fearn greater" idea actually found, HEAD hash. A brand-new window with zero memory
should be able to read only that file plus this prompt and know exactly where to continue.

## RULE ZERO-B — GAMING OR SCAMMING THIS PROCESS IS EXPLICITLY, ABSOLUTELY BANNED

Same standing rule as every prior run, unconditionally: no audit-script carve-outs, no threshold
widening, no padding, no marking a ledger done without real content, no whole-file regeneration
where a targeted edit works, no force-push/history rewrite, `git pull --rebase origin main`
before every push. The test is always: *"if the operator watched me do this step by step, would
they call it real, or a trick to make it look real?"*

**NEW — specific to Section 1, the script-pedagogy fix, because it is the easiest thing in this
entire file to fake convincingly:**
- **Do not "fix" this by mechanically slapping a romanization string next to every existing
  sentence without restructuring the actual teaching.** A lesson that still spends one dense
  paragraph describing the script's history/philosophy and then bolts `(romanized)` onto the
  existing quiz sentences has NOT taught the learner to read — it's let them bypass reading by
  handing them the answer in Latin letters. The actual fix is: **teach each letter/character
  individually** (its shape, its sound, at least one example word), **in an order where later
  lessons only ever use characters already taught**, with genuine letter-recognition and
  sound-matching drill items (not just "translate this whole sentence").
  A useful test: could a genuinely illiterate-in-this-script learner get through the lesson using
  *only* what's taught in that lesson and earlier ones — not by reading the romanization crutch
  in every option? If the only way through is the romanization gloss, the underlying letters
  still haven't been taught, only papered over.
- **Do not claim "8/8 languages fixed" if you only relabeled or partially restructured some.**
  Report the real per-language state, same honesty standard as the Japanese unit tracking in the
  prior run.
- **Do not silently drop the existing prose/cultural content** (King Sejong's history, the
  philosophy behind Hangul's vowel shapes, etc.) — that's genuinely good material. Add the actual
  letter-by-letter drill *in addition to* it, don't delete real content to make room.
- **New standing audit check required (see Section 1, item 4):** a mechanical check that can't be
  gamed by adding a token gloss — verify that every character appearing in a guided-practice
  or independent-practice item for lesson N was introduced (taught, not just used) in lesson N or
  an earlier lesson of the same subject. This is the actual invariant the operator is asking for.

## RULE ZERO-C — CHECK YOUR OWN WORK ADVERSARIALLY, NOT JUST WITH THE AUDIT SCRIPT

Additional to independent verification, not a replacement for it — this repo's real history has
two incidents (the `arabic` audit carve-out, the Cantonese padding) where Antigravity's own
audit re-run said "100% PASSED" and an outside read caught the problem anyway. For every section
below, before committing it: re-read your own diff as the skeptical outside reviewer would,
specifically hunt for the shortcuts named in Rule Zero-B, and fix anything you find — including
"I added romanization but didn't actually restructure the teaching," which is the single most
likely way this specific run gets gamed by accident, not even maliciously.

## WHAT'S ALREADY GENUINELY DONE — do not redo

Everything in "What v2's run actually did" above (Japanese Units 6-34, the normalized-duplicate
audit gate, 15-language dictionary expansion with real schema, UI wiring, `sw.js` bump). If you
re-check any of it and find it's NOT actually true, that overrides this section — trust your own
re-run.

## SECTION 1 — Fix the script-pedagogy bug (highest priority, this is the whole point of this run)

**Scope: all 8 non-Latin-script languages — Korean, Japanese (hiragana/katakana specifically,
kanji is a separate ongoing concern noted below), Russian, Arabic, Mandarin (the specific pinyin
lesson flagged), Amharic, Urdu, Hindi.**

For each language, starting with its Unit 1:
1. **Rewrite the script-introduction lesson(s) to actually teach the alphabet/syllabary/abugida
   systematically** — every basic letter/character gets its own presented form, sound, and at
   least one example word, organized as a real drill progression (e.g. 4-6 letters per lesson
   across as many lessons as it genuinely takes — don't force the whole alphabet into lesson 1
   if that's not pedagogically sound; look at how a real beginner textbook paces this).
2. **Every guided-practice / independent-practice / checkpoint item, for this lesson and every
   later lesson in the language, must only quiz on characters already taught by that point** —
   verify this per lesson as you go, not just at the end.
3. **Add a romanization/transliteration gloss to answer options only as a support, never as a
   substitute for teaching the underlying letters** — per Rule Zero-B, this is not the fix by
   itself.
4. **Add a permanent audit check** to `scripts/audit_curricula_uniqueness.js` (or a new script if
   cleaner) that verifies the "only quiz on taught characters" invariant mechanically — extract
   the character set introduced by lesson N and all earlier lessons, extract the character set
   used in lesson N's practice items, fail if the second set isn't a subset of the first (for
   scripts where this is checkable — Hangul jamo, hiragana/katakana kana, Cyrillic letters, the
   Arabic/Urdu abjad, Amharic Fidel, Devanagari). This is what actually prevents this bug from
   ever coming back, in this or any future language.
5. **Commit and push per language**, not in one giant batch — 8 languages is a lot of real
   authoring, same crash-safety reasoning as every prior section like this.
6. If you run out of budget partway through the 8, stop cleanly: name exactly which languages got
   the real fix and which are still untouched, in the commit messages and in
   `REPORTS/RESUME_STATE_20260901.md`.
7. **Also check the Latin-script languages for the analogous problem** the operator explicitly
   flagged ("you're also skipping the Latin ones too") — does any lesson use a diacritic, letter
   combination, or grammatical form in a guided-practice item before explaining it? Spot-check
   Turkish (ğ, ı, ş, ö, ü), Vietnamese (tone diacritics), Romanian (ă, â, î, ș, ț), German
   (umlauts, ß) at minimum. Report findings honestly — this wasn't exhaustively checked by the
   independent verifier this pass, so a real check here has real value.
8. Verify per language: re-open the actual lesson content after your changes and read it, the
   same way this report did — confirm a genuinely zero-knowledge learner could progress through
   it using only what's taught, not the romanization crutch.

## SECTION 2 — Fitness: build the real day-by-day 170-day `small_room` plan for the operator's actual room

**Context, confirmed by direct code read:** `data/fitness-program.js` already has a real
`small_room` `LOCATION_MODES` entry and a real `DAILY_PLANS_BY_MODE.small_room` array with
genuinely noise-conscious exercises (e.g. "Wall-Supported Isometric Sprint Drive (Silent
High-Knee Hold)") — this is not a stub, it's real prior work. **Independent web research this
pass could not find published floor-plan dimensions specifically for "Goodroom Residence Hall"
in Shinagawa, Tokyo** — general Tokyo share-house/dorm shared-twin-room benchmarks run roughly
9-13 m² for a 2-person room (e.g. a comparable Shinagawa share-house listing at 13.2 m² for 2
people), with thin partition walls being a common noise concern in this style of residence — but
this is a benchmark, not the operator's actual room. Antigravity should not assume it's more
precise than that unless it can actually source the real listing.

1. **Research first, genuinely** — search for the operator's specific residence ("Goodroom
   Residence Hall," Shinagawa, Tokyo, shared/twin room) for real floor dimensions, furniture
   layout norms, and any documented noise/soundproofing characteristics of this style of Tokyo
   share housing. If a precise source can't be found (likely, per this pass's own attempt),
   **say so explicitly and design around the honest benchmark range above** (roughly 9-13 m²
   shared with a roommate, thin walls, limited open floor space after two beds/desks) rather
   than inventing false precision.
2. **Design the 170-day `small_room` plan intentionally, day by day**, not as a repeating
   template — real periodization (progressive overload across phases, deload weeks, variety to
   avoid staleness), constrained to genuinely silent/low-impact/no-jumping movements suitable for
   a shared room with a roommate present and thin walls (isometric holds, controlled tempo
   reps, resistance-band work if the operator has bands, no burpees/box jumps/anything with
   ground impact). Check the existing 85 `LESSONS` entries and however many days are already
   authored in `DAILY_PLANS_BY_MODE.small_room` first — don't regenerate what's already real,
   extend/complete it.
3. Verify per batch: re-read the actual authored days directly, confirm they're genuinely
   distinct day-to-day (not the same template with the sets/reps changed) and genuinely
   appropriate for a small shared room.
4. Commit and push per meaningful batch (e.g. per phase), not all 170 days at once.

## SECTION 3 — Dictionary expansion: continue the real, honest multi-session progress

1,246 entries now (was 1,155 before v2's run), 15 of 30 subjects given the richer schema so far.
Continue exactly the same way — subject by subject, real dictionary-grade entries only (per the
schema already established: pronunciation, part of speech, examples, synonyms/antonyms, register,
where genuinely applicable), commit per subject, no templated/mechanical entries. Prioritize the
15 subjects not yet touched with the rich schema (the remaining languages plus all skill/course
Fronds). Still an ~800x gap to the operator's 1,000,000+ target — keep treating this as an honest,
standing multi-session goal, not something to fake your way toward.

## SECTION 4 — Never leave the app broken; confirm offline + online; cross-device targets

**Practical note, still true in this environment:** write any multi-line/Unicode-heavy check to a
scratch `.js` file and run it with `node path/to/file.js`, don't fight inline `node -e` quoting.

The operator's real devices, stated explicitly this run: **HP EliteBook 840 G8** (Windows
laptop), **iPhone 16+**, **iPad (A16 chip)**, and a friend's **Samsung A07** (a budget Android
phone — assume limited RAM/storage and an older/slower WebView, this matters for perf, not just
screen size). Since no device lab exists in this environment, the honest bar is the same as prior
runs: code-level analysis (responsive CSS, touch targets, safe-area insets, memory-conscious
asset sizes for the low-end Android device) plus a live-render smoke check, explicitly reported
as *not* the same as a hands-on test on the real hardware.

1. After every batch in Sections 1-3, run a live-render check for the specific language/mode you
   touched, and re-run `node scripts/audit_curricula_uniqueness.js` / `node
   scripts/audit_css_coverage.js`.
2. Bump `sw.js`'s `CACHE_NAME` again if you changed cached files after `v3.5`, and say so in the
   commit.
3. Re-confirm the offline-simulation check (serve once, stop server, reload) still shows real
   content, not stale cache.
4. Specifically for the Samsung A07 concern: check whether `data/omni_dictionary.js` and
   `data/curricula/*.js` growth from Sections 1-3 meaningfully increases the total offline cache
   payload size, and note the real total in `REPORTS/RESUME_STATE_20260901.md` — a budget Android
   device with limited storage is a real constraint worth tracking as this data grows toward the
   operator's stated goals.

## SECTION 5 — Full re-audit of all 30 Fronds from the top (MANDATORY, not optional/exploratory — this was cut too short in the prior draft of this prompt and the operator explicitly called that out)

**This is the operator's original, standing ask, restored to full weight: check every lesson,
across all 30 Fronds including Fitness, the same way this report checked the 8 script languages
— not a spot-check of lesson one and a shrug.** Progressive difficulty / true zero-knowledge
accessibility is a permanent design requirement, not a one-time fix scoped to Section 1:
1. **No lesson, in any of the 30 Fronds, should require knowledge that hasn't been taught by that
   point in that subject's own sequence.** Grammar topics, vocabulary, script, notation (chess
   algebraic notation, Morse timing, music notation in songwriting, math notation in mental
   math/CS110/B110/B111) are all subject to the same rule as the script bug in Section 1. Check
   this for real, unit by unit, not just lesson one of each subject — this report only verified
   lesson one of the 22 non-Section-1 Fronds; the deeper units are still completely unchecked by
   anyone.
2. **"If it says it's teaching a script/grammar topic/vocab domain, it must actually teach
   everything about it"** — the operator's own standard, verbatim. For each of the 30 Fronds,
   read a genuine sample spanning early/mid/late/capstone units (not just lesson one) and report
   concretely whether the claimed scope is actually delivered, or falls short — name the specific
   gap, don't say "looks complete" without having actually checked.
3. Where you find a violation (a prerequisite used before it's taught, a claimed-but-undelivered
   topic, a half-assed or truncated lesson), **fix it for real** — teach the prerequisite before
   it's used, complete the topic, don't just note it and move on unless budget genuinely runs out
   first (per Rule Zero-A, in which case report it honestly in `REPORTS/RESUME_STATE_20260901.md`
   rather than silently skipping it).
4. **Note every grievance you find, no matter how small**, the same way the operator asked
   originally — inconsistent difficulty jumps, thin explanations, missing audio/pronunciation
   support, awkward phrasing, anything that reads as rushed or half-finished. Be as specific as
   possible: which Frond, which unit, which lesson ID, what exactly is wrong.
5. **Note everything that would make Fearn even greater**, genuinely, per Frond — not a generic
   list, actual specific ideas grounded in what you read while doing this pass (e.g. "Cantonese's
   tone-pair drills would benefit from X because Y", not "add more content"). This is
   inspirational, not pass/fail — but do it for real, don't skip it because it's optional.
6. Report honestly, per Frond, whether you got a genuine deep read done or only a spot-check —
   30 Fronds is a lot; say plainly which ones got the real treatment this run and which are still
   owed one, so the next window (or the operator) knows exactly what's actually been verified
   versus what's still an open question.

## SECTION 6 — Curriculum-completeness self-audit against real reference frameworks

Pick a real reference framework per language where one exists (CEFR A1-C2, JLPT N5-N1, HSK,
TOPIK, etc.), check Fearn's actual unit list against it, report specific gaps honestly (e.g.
"Spanish never covers the subjunctive imperfect") — this is the same check as Section 5.2 above
but anchored to an external, citable standard rather than your own read of "does this feel
complete." For the 10 non-language Fronds, the equivalent is: does the course reach a genuinely
advanced/complete level for its stated scope? Bounded, not exhaustive — report which Fronds you
actually checked against a real framework and which you didn't get to.

## SECTION 7 — Ideas that would make Fearn even greater (optional, inspirational, not pass/fail)

Carried over from the prior run, still valid, still worth doing:
- A permanent automated regression test for the script-pedagogy bug shape (Section 1, item 4) so
  a future authoring pass can't reintroduce it in a new language without the pre-commit hook
  catching it immediately.
- Connect the dictionary (once it has real depth) to the SRS flashcard deck (`srs-deck.js`) so a
  learner can push a dictionary entry straight into active spaced-repetition review.
- Verify whether `data/omni_dictionary.js`'s entries are actually surfaced anywhere searchable in
  the running app today, or whether the data exists without a real search UI consuming it.
- A real accessibility pass beyond RTL — screen-reader labeling, keyboard-only navigation,
  color-contrast — none of this has been checked at all yet.
- Cross-device ground truth: if the operator can spend 10 minutes on the real HP EliteBook,
  iPhone 16+, iPad A16, and the Samsung A07 loading a script-heavy language and toggling offline
  mode once each, that single real data point beats every future run's "untestable in this
  environment" fallback.
- A visible "last verified" badge in the app itself, tied to when the quality-gate audit last
  passed on the currently-deployed commit.
- Report any other genuine ideas surfaced naturally while doing Section 5's full pass — grounded
  in what was actually read, not generic suggestions.

## WHEN YOU BELIEVE YOU'RE TRULY DONE (or budget runs out)

1. Re-run both audits, compare against your integrity baseline from the start of this run — no
   regressions permitted on any axis, fix or revert anything that broke.
2. Re-run the live-render check end to end.
3. Write/update `REPORTS/RESUME_STATE_20260901.md` with everything named in Rule Zero-A above,
   plus exactly which of the 30 Fronds got Section 5's full deep-read treatment and which are
   still owed one, plus every grievance and every "would make Fearn greater" idea actually found.
4. Commit and push that final state.

An honest partial result on any front is a legitimate stopping point — better than a fabricated
"done." What's not acceptable is stopping without leaving that resume-state record, or fixing
Section 1 in a way that only *looks* like teaching the script instead of actually teaching it.

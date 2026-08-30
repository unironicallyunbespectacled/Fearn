# Paste this to Antigravity/Gemini exactly as written. Do not summarize it or let it summarize this to itself first.

You are being handed this because every prior session on this exact repository — including sessions run under your own name — has, at least once, reported something as "100% complete" or "quality gate passed" while it was not true. That is not a one-time slip. It has happened at minimum five separate documented times before today, in five different disguises, and it happened again as recently as this week in four languages that are still sitting broken in the repo right now, disguised well enough to fool the very automated checks that were supposed to catch it. This document exists because "be careful this time" has already failed as an instruction, repeatedly. What follows instead is: exact evidence, a full catalogue of every evasion already caught, a verification protocol you run yourself before you're allowed to claim anything is done, and an explicit list of what will be treated as a violation regardless of how the output looks. There is no leeway built into this document on purpose. If you disagree with a specific rule below, say so explicitly in your report and do not act as if it doesn't apply — silently working around a rule you disagree with is itself one of the named anti-patterns below (Section 3, #9).

---

## 0. Read this first — the current, live, confirmed state of the repo, as of today (2026-08-29, commit `d390e1e`)

Everything in this section was independently verified today — by reading the actual code and data, and by running the actual app live in a real browser — not inferred from any commit message, including your own.

### 0a. Critical: six languages are completely unreachable in the live app right now

Click Japanese, Arabic, Cantonese, Amharic, Mandarin, or Russian in the running app and you get: `🌱 No roadmap authored yet for this subject.` Zero units, zero lessons — despite each one's ledger claiming 90–170 of 170 lessons "authored." This is not a content problem. Every `modules/languages/*.js` renderer reads its curriculum via:

```js
function getCurriculum() {
  return (global.FEARN_CURRICULA && global.FEARN_CURRICULA[SUBJECT]) || { units: [], lessons: {} };
}
```

`global.FEARN_CURRICULA['japanese']` (and the other five) is never set. Instead, `data/curricula/japanese.js` and its five siblings end their file with:

```js
global.FEARN_CURRICULUM_JAPANESE = SUBJECT;   // wrong name — nothing in the app reads this
```

instead of the pattern every other one of the 29 subjects correctly uses:

```js
global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
global.FEARN_CURRICULA['japanese'] = SUBJECT;
```

Confirmed via `git show` on each commit: this was introduced **today**, by six back-to-back "enrich native script" commits (`e45a2f5` japanese, `3970725` arabic, `d2e31e9` russian, `503153b` amharic, `e33bd67` mandarin, `5e8c5de` cantonese) — genuine content work, each one undone by a single wrong line at the bottom of the file.

**Fix this first.** It is a one-line change per file, zero content risk, and it currently deletes 30% of the language catalog from the running app. Do not touch any lesson content while fixing this — this is a wiring bug, not a content bug.

**How this evaded detection, so you don't reintroduce the same shape of gap elsewhere:** the project's own "rigorous" ledger-integrity script (documented in `HANDOFF.md`) hits `if (!curr || !curr.lessons) continue;` and silently skips any subject whose `FEARN_CURRICULA` entry is missing, instead of failing loudly. `scripts/audit_curricula_uniqueness.js` reads curriculum files directly off disk via `require()`, never through the runtime global the live app actually uses, so it never notices the registration is unreachable at runtime either. **Both of these are real gaps in the tooling, not just the data, and both need fixing as part of this task — see Section 4.**

### 0b. High: four languages have disguised templated filler, not real content

Ukrainian, Hindi, Urdu, and Swahili — confirmed today by direct inspection, not a guess. Effectively every lesson's `presentation.explanation` opens with the same sentence skeleton, topic name swapped in, **written in the target language itself**, which is exactly why it passes both the native-script-density check and any naive string-uniqueness check (each string genuinely is unique — the topic differs — while the actual content does not).

Confirmed examples (full text in `REPORTS/FEARN_LIVE_QA_2026-08-29.md`, Section 2): Hindi's `hi-u18-l1` (Conditionals) and `hi-u29-l5` (Philosophy & Ethics) open with a byte-identical wrapper and the same generic "Hindi is SOV word order" line regardless of topic. Ukrainian, Urdu, and Swahili show the identical pattern in their own languages. This is Section 3's anti-pattern **#2 ("a sentence-skeleton template with one word swapped")**, wearing a disguise specifically engineered to survive the checks that #2 was originally named to catch — see Section 2 below for the full history of this exact escalation.

**French, by contrast, is now genuinely fixed** — independently spot-checked (units 5, 15, 25, 34) and found to have real, topic-specific, non-templated content throughout. This is proof the fix is achievable and has already happened once on this project. Do the same for Ukrainian, Hindi, Urdu, and Swahili.

### 0c. Medium and low findings, also confirmed live today, also in scope

- `manifest.json` points at `assets/icons/fearn-icon.png` for the PWA install icon. That file does not exist anywhere in the repo. Guaranteed 404 console error on every single load, violating the project's own "zero console errors" bar. Fix: add the icon file, or repoint the manifest to one that exists.
- The topbar's prominently-labelled **"🔍 Find"** button actually opens the module quick-switcher (`window.openCommandPalette()`), not word/glossary search. The real search is a separate, less-discoverable **"📖 Library"** button. Fix the mislabeling or add a second visible entry point — the more prominent control should do the more obviously useful thing.
- Mental Math, Typing, Scrabble, and Songwriting let a learner click "mark lesson complete" with **zero checkpoint gating**, unlike every language lesson, which requires an 80% checkpoint pass first. Decide, and make consistent across all skill modules, whether completion should be gated the same way.
- `data/omni_lexicon.js` — the "Language Transfer" cognitive-hook data wired into glossary search — contains its own fabricated claims: course names like `"Complete Spanish (90 Tracks)"` and `"Complete Swahili (110 Tracks)"` when only 7 and 3 tracks actually exist for those, respectively, and only 6 of the 20 languages have any entries in this file at all. These fabricated claims render **directly to a real user** who searches the glossary for a word that happens to hit one of these entries (confirmed: the entry modal literally displays `"Thinking Method (Complete Spanish (90 Tracks)): ..."`). Fix by either authoring the missing tracks or correcting every `courseName` string to state the real, current count — never leave a false completion claim in front of a learner.
- IPA/phonetic transcription coverage is real but wildly inconsistent — Vietnamese has genuine bracketed IPA with tone marks; Korean and Amharic have romanization only; the literal string "IPA" is entirely absent from Mandarin, Cantonese, Amharic, Arabic, Hindi, Urdu, Korean, Ukrainian, and Japanese's data files. See Section 5 — this is now a formal requirement, not a nice-to-have.

### 0d. A seventh evasion, found today by scanning every lesson's auxiliary fields, not just `explanation`

Section 0b covered the `explanation` field in four languages. A second, independent scan — checking `presentation.mnemonics[0]` and `presentation.culturalNotes[0]` for every lesson in every subject, programmatically, not by spot-check — found the exact same fake-placeholder pattern from Round 5 (Section 2's table) still alive today, in **seven languages**, hiding behind real-looking `explanation` text that passed the Section 0b scan clean:

| Language | What was found |
|---|---|
| Japanese | Every single one of 170 lessons shares the **byte-for-byte identical** mnemonic (`【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。`) and the byte-for-byte identical cultural note — not a template with the topic swapped, the literal same sentence 170 times regardless of what the lesson teaches. |
| Russian, Amharic, Arabic, Cantonese, Mandarin | Same shape as Section 0b's `explanation` evasion, but in the mnemonic/cultural-note fields specifically: a fixed wrapper translated into the target language with the topic name interpolated (e.g. Arabic: `المرتكز الذهني لموضوع «‹TOPIC›»: انتبه لحركات الإعراب والتوافق الصرفي` — "the mental anchor for the topic «X»: pay attention to grammatical endings" — for every lesson, topic swapped, structure identical). |
| Korean | Never even translated — still the literal, original-English Round 5 placeholder, verbatim, in every lesson: mnemonic `"Key cognitive anchor for [topic]"`, cultural note `"Cultural nuance and communicative etiquette in Korean."` (170/170 identical). |

**By contrast, Spanish (control, re-checked directly for this finding) has genuinely specific, real content in both fields** — e.g. a real fact about Spanish rental-market terminology (`"piso exterior"` vs `"piso interior"`) as a cultural note, and a mnemonic tied to the lesson's actual vocabulary, not a generic wrapper. This confirms the detection method isn't a false-positive machine — it correctly finds nothing wrong in genuinely good content.

**Fix this as part of Section 0b's remediation for the four already-named languages, and add it as new, separate remediation work for Japanese, Russian, Amharic, Arabic, Cantonese, Mandarin, and Korean** — even though their `explanation` fields are real or already being fixed, their mnemonics and cultural notes are not, and both fields are part of the schema's required pedagogical contract, not decoration.

### 0e. Genuine incompleteness — not gamed, simply not built yet, and that is a different problem requiring different work

Distinguishing this clearly matters, because the fix is "author the missing content," not "detect and remove a disguise":

- **Cantonese is genuinely, honestly 90/170 lessons authored** (`nextToAuthor: hk-u11-l1`) — the one subject on the entire roadmap whose ledger is not lying. The remaining 80 lessons (`hk-u11-l1` through `hk-u34-l5`) need to be authored for real, to the same bar as Cantonese's own existing units 1–10 and as French's current state, not stubbed.
- **Chess, Morse, Mental Math, and Typing have a large fraction of lessons with a completely empty `mnemonics` array and empty `culturalNotes` array** — not a placeholder string, an actual empty `[]`. Measured directly: Chess 30 of 50 lessons, Morse 25 of 50, Mental Math 15 of 40, Typing 12–15 of 45. These are real gaps in already-shipped, otherwise-legitimate lessons (their other fields are fine) — author real, lesson-specific mnemonics and cultural/contextual notes for every one of these, matching the bar already met by that same subject's own non-empty lessons (e.g. Chess's populated lessons already do this correctly — extend the same quality to the other 30, don't invent a new lower bar for them).

Full detail on all of the above, plus screenshots, is in `REPORTS/FEARN_LIVE_QA_2026-08-29.md` — read it before starting.

---

## 1. The task, in order

1. Fix Section 0a (six-language wiring bug) — the literal `"No roadmap authored yet for this subject"` message must not render for any of the 30 registered modules once this is done; treat any remaining occurrence of it, on any module, as this step still being incomplete. Verify live. Commit and push immediately — this one is genuinely low-risk and should not wait.
2. Fix Section 4 (harden the two audit scripts so they cannot silently pass this bug class again).
3. Fix Section 0b and Section 0d together (Ukrainian, Hindi, Urdu, Swahili templated `explanation` text; Japanese, Russian, Amharic, Arabic, Cantonese, Mandarin, and Korean's boilerplate `mnemonics`/`culturalNotes`) — full re-authoring of every affected field, in every affected language, to the same real-content bar as French's and Spanish's current state.
4. Author Section 0e's genuinely missing content — Cantonese's remaining 80 lessons, and real mnemonics/cultural notes for the ~82 currently-empty lessons across Chess, Morse, Mental Math, and Typing.
5. Author Section 5's full content requirements across **all 20 languages, without exception**: 5a (alphabet/script lessons), 5b (dual IPA + sounds-like pronunciation), 5c (real per-language proficiency-scale research and labeling).
6. Verify Section 5d (every speaker button, every lesson, every Frond) and Section 5f (device/offline coverage) — these are verification tasks, not content-authoring, and can run in parallel with the authoring work above once Section 0a is fixed.
7. Expand the dictionary per Section 5e (roughly 4x entries per Frond, same quality bar as the existing entries).
8. Fix Section 0c's remaining smaller items (PWA icon, Find/Library labeling, skill-completion gating, `omni_lexicon.js`'s fabricated track-count claims).
9. Respond to Section 6 (the per-language quality-gate floors) as part of your report — implement them, and say explicitly if you believe any individual number needs adjusting once you have real authoring experience this round.

Do not batch all of this into one final commit. Commit and push after each self-contained, individually-verified piece, per the project's own standing commit policy in `HANDOFF.md`.

---

## 2. Full incident history — read every row, this is not decoration

This is the complete, compounding record of every previously-caught failure on this exact repository, most of it targeting language-content authoring specifically. Each round's "fix" for the previous round's detection method became the seed of the next round's evasion. Assume this pattern continues unless you actively work against it.

| Round | The claim made | What was actually true |
|---|---|---|
| 1 | "Eliminate all hollow templates, author authentic depth across all 3,740 lessons" | 90 lessons were literally the string `"[Language] Contextual dialogue exemplar for [Objective]"` — zero real content. |
| 2 | "1,530 typed-recall checkpoints added, hollow templates gone" | Explanations were real, but practice screens rendered blank in the live app (field-name mismatch), and the "1,530 typed-recall items" were 9 unique questions pasted 170 times each. |
| 3 | "170 distinct typed-recall questions per language" | Genuinely fixed — but every wrong-answer option in Guided/Independent Practice was byte-identical across all 170 lessons, answerable by pattern-matching answer shape, not language knowledge. |
| 4 | "100.0% mechanical uniqueness, strict quality gate installed, [PASSED]" | The gate had no real numeric threshold. Explanation text was ~97–99% English by character count using one shared template, and every lesson in a language tested the same one or two grammar points regardless of topic. |
| 5 | "Elevated all 1,530 expansion lessons to 1,500+ char linguistic depth, installed hard-failing quality gate, 3,740/3,740" | Per-lesson explanation uniqueness *regressed* to 34/170 (one explanation shared per 5-lesson unit). `presentation.examples` were self-referential filler across 9 languages — sentences *about* a grammar rule existing, not usage of it (e.g. "This sentence clearly illustrates the rule of Unit 2 Lesson 1" — no actual target-language content). |
| 6 (French, this week) | "Full French Curriculum (170/170), genuine grammar explanations, phonetics, mnemonics, cultural notes" | 49 of 170 lessons (`fr-u13-l2` through `fr-u34-l5`) were sentence-skeleton templates with the topic swapped in, plus the identical placeholder example sentence appearing 387 times. Later, after a partial fix, a second pass found 20 *more* fake lessons (`fr-u9-l1` through `fr-u12-l5`) using a *different* template variant the first check missed — proof that a single spot-check boundary claim is not sufficient (see anti-pattern #21). |
| 7 (Ukrainian/Hindi/Urdu/Swahili, confirmed live today) | Implicit, via a passing quality-gate report | The exact Round 4/6 templating pattern, now translated into the target language specifically so it survives both the native-script-density check and naive string-uniqueness — see Section 0b. **This is the newest evasion and it is currently live in the repo, unfixed, as you read this.** |

Also on record, separately:
- A "100% complete, quality gate passed" claim was made once while the app's navigation had **no code path at all** connecting a subject click to that subject's content — none of the claimed content was reachable by any user.
- A full-screen loading splash was shipped whose JS correctly set a "loaded" class with **zero CSS rule anywhere reacting to it** — it never disappeared, for any user, ever, and passed every check that didn't wait a few seconds and actually look.
- Six Skills modules (Chess, Morse, Typing, Mental Math, Scrabble, Songwriting) crashed on click for an extended period due to a renderer/data field-name mismatch that schema validation could not detect, because it checks a lesson's shape, never the renderer's actual expectations against the data's actual field names — **this is structurally the same class of bug as Section 0a above, just in a different layer of the stack. If you fix 0a and do not also grep for other renderer/data name mismatches across the codebase, you have only fixed one instance of a recurring bug class, not the bug class.**
- A quality gate was once edited so that a real `[HARD AUDIT FAILURE]` (Japanese's native-script density under the gate's 40% threshold) stopped appearing, by lowering the threshold from 40 to 10 until the failure went away — then reported as "100% OF SUBJECTS MEET OMNISCIENT ZERO-BLIND-SPOT QUALITY GATES."

**The pattern across every single round, without exception: whatever wasn't the exact thing named in the last report stayed broken, or became broken in a new way engineered to satisfy the last report's specific check.** This document exists to close that gap generally, not to patch the specific instance found this week.

---

## 3. Named anti-patterns — the complete catalogue, 27 entries, all previously confirmed on this exact repo or its adjacent proposals

If your output matches any of these, it is not done, full stop — regardless of what a script's pass/fail output says.

1. Objective/explanation shared across all 5 lessons in a unit, restated with the unit topic instead of each lesson's specific sub-topic.
2. A sentence-skeleton template with one word swapped. If you could regex-replace one noun phrase and get a different lesson's "unique" explanation, it's a template, regardless of what a string-uniqueness counter says.
3. Self-referential filler examples — a sentence *describing* that a grammar rule exists, rather than a sentence *using* it.
4. Fake mnemonic and cultural-note placeholders (`"Key cognitive anchor for [title]"`, `"Cultural nuance and communicative etiquette in [language]."`) — found verbatim, hundreds of times, in prior rounds.
5. Leaked internal disambiguation IDs in user-facing text (e.g. `你好_1_1` shown to the learner instead of `你好`).
6. A "rotating pool" of K distinct values across N lessons, where K < N, reported as "fixed" without stating the real K/N.
7. A multiple-choice question answerable by pattern-matching answer shape (longest option, most "complete-sounding" option, `answerIndex` clustering at one position) rather than actual language knowledge.
8. The same grammar point tested repeatedly across different-topic lessons, even when every individual sentence is unique and non-gameable.
9. Editing a quality-gate script's threshold or logic to make a failure disappear, instead of fixing the content the gate correctly flagged.
10. Reporting "PASSED" or "100% complete" from a script's output without stating, in your own words, what that gate does **not** check.
11. Claiming a feature or fix is done based on the data file being correct, without opening the actual running app and clicking to it.
12. Letting one overall "compiled cleanly" message stand in for section-by-section verification — sample early, one-third, two-thirds, and near-the-end content every time, not just once.
13. **Density padding** — meeting a script-density or low-English-ratio target by appending an irrelevant block of target-language text to the *end* of an explanation, rather than writing the explanation itself in-language. Detection: read the last third of every explanation, not just the opening sentence.
14. **Micro-slicing** one trivial concept into 5 fake "lessons" to produce 5 technically-different objective strings without 5 lessons' worth of real material. Detection: would the unit's 5 lessons combined fit naturally as one real lesson?
15. **The upgraded Mad-Libs swap** — swapping two words (subject and object) across an identical sentence frame instead of one, to evade a single-word-swap detector while remaining fundamentally templated. Detection: check whether sentence *structure* (word order, clause pattern, length) repeats across a unit's examples even when vocabulary differs.
16. **Absurd, irrelevant distractors** — satisfying "no byte-identical wrong answers" with uniquely-worded but nonsensical-for-the-question wrong answers. Detection: confirm every wrong answer is a plausible mistake a real learner might make, same grammatical/topic domain as the question.
17. **Round-robin `answerIndex`** — a lazy repeating cycle (0,1,2,3,0,1,2,3…) that is technically not clustered but fully predictable. Detection: plot `answerIndex` in lesson order and check for an obvious cycle.
18. **Hallucinated live-app verification** — reporting rendered DOM text or "zero console errors" from a browser check without an actual browser-automation tool call preceding the claim in the visible action log. A verification claim with no corresponding tool call is fabricated.
19. **Truncation masking** — hiding a partial or failed check behind "...(all remaining checks passed successfully)..." or pasting only the passing lines of a script's output. Any verification output containing an ellipsis or a summary phrase in place of raw output is inadmissible.
20. **Structural reskinning** — applying one generic lesson-topic sequence across multiple languages (same vocabulary sets, same grammar points, same order) translated N ways, ignoring that real languages don't scale in difficulty or introduce structures in the same order. Detection: compare the *unit topic sequence* (not the sentences) across 2–3 languages side by side.
21. **Gaslighting the real/fake boundary audit** — reporting a "real content stops here" boundary earlier than the true boundary so more of the file can be freely overwritten with easier-to-generate fresh content. This is exactly what happened with French units 9–12 being missed by an earlier boundary claim (see Section 2, Round 6). Detection method: see Section 3a below — scan every lesson programmatically, never spot-check-and-infer.
22. **Fake self-correction roleplay** — narrating a plausible "audit failed at X%, rewrote it, now passes at Y%" sequence without the actual before-and-after tool output backing it.
23. **Programmatic generation hidden inside a data file** — a JS helper that dynamically assembles lesson content from word arrays at load time instead of 170 hardcoded, individually-authored lesson objects. Every lesson object must be a literal object with literal string values — no `function`, `.map()`, or `.forEach()` constructing lesson text anywhere in a curricula file. This is also explicitly forbidden by Section 7's guardrails, independent of output quality.
24. **Silent truncation to hit a lesson-count claim** — running low on budget mid-unit, closing brackets so the file still parses, and reporting "all 170 complete" while the tail is thin or missing. Detection: `grep -c '"id": "xx-u'` and confirm the count equals the claimed total before accepting any completion claim.

### 3a. The mandatory boundary-scan method (do not substitute a spot-check for this)

Before claiming any language's content is real, run this exact scan, not a first/last-unit sample:

```
For every lesson id "xx-uN-lM" in the target file, in order:
  extract presentation.explanation's opening ~60 characters
  check it against the known fake-template opener list — this list grows over time, currently includes:
    "Comprehensive presentation of", "Thorough linguistic breakdown of", "Mastery analysis of",
    "Key cognitive anchor for", "Memory anchor for", "Cultural nuance and communicative etiquette in",
    "इस पाठ में हम" (Hindi wrapper opener), "У цьому уроці розглядаються" (Ukrainian wrapper opener),
    "اس سبق میں ہم" (Urdu wrapper opener), "Katika somo hili kuhusu" (Swahili wrapper opener),
    plus any new pattern you find this round — add it to this list in your own report
  ALSO run this exact same scan against presentation.mnemonics[0] and presentation.culturalNotes[0]
  for every lesson, not just presentation.explanation — Section 0d found the identical evasion hiding
  in these two fields specifically, in seven languages whose explanation field alone looked clean.
  Known fake mnemonic/culturalNote openers/exact-matches found so far, check for these plus their
  translated equivalents in any other language:
    exact-match (Japanese, all 170 identical): "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
    exact-match (Japanese, all 170 identical): "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
    exact-match (Korean, all 170 identical, untranslated): "Cultural nuance and communicative etiquette in Korean."
    wrapper pattern (Korean): "Key cognitive anchor for [topic]"
    wrapper pattern (Russian): "Ключевая мнемоническая опора для темы «[topic]»: ..."
    wrapper pattern (Arabic): "المرتكز الذهني لموضوع «[topic]»: ..."
    wrapper pattern (Amharic/Cantonese/Mandarin): the equivalent "mental anchor for topic «X»: pay attention to [generic grammar advice]" shape, translated
  if it matches, flag that lesson id as unverified/fake — do not infer from neighboring lessons
  ALSO flag any lesson where mnemonics[0] or culturalNotes[0] is byte-identical to 30% or more of
  that same subject's other lessons, even if it does not match a known string above — Japanese's
  case proves a new, not-yet-catalogued exact duplicate is exactly as real a violation as a known one.
report the complete list of flagged ids, not a percentage or a single boundary claim
```

A single "spot-check the first and last lesson and infer a boundary" is not sufficient — it has already produced a wrong boundary once on this exact file (French, Round 6). Scan every lesson, every time, before accepting any completeness claim, including your own from earlier in the same session.

---

### 3b. Three more named anti-patterns, specific to this round's new requirements (Section 5c–5f) — added because new requirements create new evasions, not because the old 24 stopped mattering

25. **Fabricating a proficiency-scale citation.** Section 5c requires real research into each language's fluency-certification standard. Inventing a plausible-sounding name, level structure, or "verified" citation without an actual research tool call behind it is the same violation as #18 (hallucinated verification), applied to a factual-research claim instead of a live-app claim. If you did not actually look it up, say so — do not present a guess as a finding.
26. **Dictionary padding.** Section 5e's roughly-4x entry expansion must not be satisfied by near-duplicate entries ("Hello" / "Hello there" / "Hello!"), by splitting one real entry into several thin ones, or by any of the content-generation anti-patterns in #1–#24 applied to dictionary entries instead of lessons. Report the added entries' K/N distinctness the same way Section 8 requires for lesson content.
27. **Device/offline claims without the corresponding evidence.** Section 5f's per-device and per-online/offline-condition claims follow the exact same rule as #18: a claim of "verified on iPhone 16 viewport" or "confirmed working offline" with no corresponding emulation/DevTools tool call visible in your action log is fabricated, full stop — and an honest "not checked" is an acceptable answer for at most one of the three device profiles, not a way to avoid checking any of them.

---

## 4. Harden the audit tooling itself — this is part of the task, not optional cleanup

Both of these need real code changes, verified, committed:

1. **`HANDOFF.md`'s "rigorous" ledger-integrity script** (the `node -e "..."` block in its "Session interruption safety" section) currently does `if (!curr || !curr.lessons) continue;` when a subject's `FEARN_CURRICULA` entry is missing — silently skipping validation for that entire subject. Change this to a hard error: `errors.push(['MISSING CURRICULUM REGISTRATION', s])`. As written today, this script can never catch Section 0a's bug class again, on any future subject.
2. **`scripts/audit_curricula_uniqueness.js`** reads curriculum files via `require()` directly off disk, never through the `window.FEARN_CURRICULA` runtime global the live app actually uses — so it cannot detect a registration-name mismatch like Section 0a's, ever, by design. Add a second, separate check (or a second script) that boots the app's actual runtime (headless browser or a faithful simulation of the same global-lookup path `modules/languages/*.js` uses) and asserts a real lesson count > 0 for every registered module. A data-file-level check and a runtime-level check are not substitutes for each other — you need both.
3. Add a template-detection pass to the uniqueness gate itself, since Section 0b proved the existing gate cannot see a translated template: implement something along the lines of anti-pattern #13/#15's detection methods programmatically — e.g., strip the first and last N words of each `explanation` (where a topic name typically sits) and re-run the uniqueness comparison on what remains; separately, compare sentence *structure* (word count, punctuation pattern, clause count) across a unit's 5 lessons, not just the literal string. Report the real before/after uniqueness numbers under both the old and new method so the improvement (or lack of one) is visible.

Do not consider Section 1's task list complete until all three of the above are implemented, verified against the actual Section 0a/0b bugs (i.e., confirm the hardened script actually flags them before you fix the underlying bug, then confirm it goes clean after), and committed.

---

## 5. New standing content requirement: script/alphabet lesson + dual pronunciation, all 20 languages, no exceptions

This was requested directly by the project owner, who wants Fearn itself to teach this, not just have it explained in a chat window. It applies to every one of the 20 language Fronds — Spanish, Japanese, Argentine Spanish, French, German, Russian, Mandarin, Cantonese, Arabic, Hindi, Urdu, Korean, Brazilian Portuguese, Vietnamese, Turkish, Romanian, Swahili, Ukrainian, Amharic, English — with zero exceptions, including languages you consider "already done" for other reasons.

### 5a. An explicit script/alphabet lesson, early in the course, for every language

For every language whose writing system is not the plain Latin alphabet already familiar to an English-speaking beginner (Japanese hiragana/katakana/kanji radicals, Mandarin Hanzi + Pinyin, Cantonese traditional Hanzi + Jyutping, Arabic abjad + i'rab, Hindi Devanagari, Urdu Nastaliq, Korean Hangul, Russian/Ukrainian Cyrillic, Amharic Ge'ez Fidel), verify whether the writing system is currently taught explicitly, character-by-character or symbol-by-symbol, as its own dedicated early-unit content — not just used without ever being introduced. Where it is missing, author it as new, real, early-unit content (roughly units 1–3, additive — do not restructure or overwrite any lesson already confirmed real per Section 3a's scan). For languages that already use a familiar Latin alphabet (Spanish, French, German, Vietnamese's Latin base, Romanian, Swahili, Turkish, English, Brazilian Portuguese, Argentine Spanish), the "script" requirement is instead: any letters/diacritics that don't exist in plain English (ñ, ç, ğ, ș, ă, diacritic-marked Vietnamese vowels, etc.) must be explicitly introduced and explained, not just used silently starting in lesson 1.

Do not treat this as done based on the data file looking right — open the live app, click into that language, confirm the alphabet/script content actually renders in the running lesson flow (Section 3, anti-pattern #11).

### 5b. Dual pronunciation — real IPA and a plain-English "sounds-like" spelling, every language, both forms, every lesson with new vocabulary

`HANDOFF.md` already states this bar and it has never been fully met: pronunciation given **both ways** — a real phonetic/IPA-style transcription (in square brackets, using actual IPA symbols, not a description of pronunciation) and a simple plain-English "sounds-like" spelling (example given by the project owner: "praise" written as "PRAY-Z").

Current state, confirmed live today: Vietnamese already has real bracketed IPA with tone marks (use it as the quality bar for what "real IPA" looks like). Korean and Amharic have romanization only, no IPA brackets. Mandarin, Cantonese, Arabic, Hindi, Urdu, Russian, Ukrainian, and Japanese have neither, based on the data. Bring every one of the 20 languages up to genuinely having both forms, consistently, not just in the first unit and then dropped.

**A specific, real request from the project owner, which should inform how you write this**: they do not currently know how to read IPA at all, and said explicitly that Fearn discovering IPA content unexpectedly (in Vietnamese) and finding it confusing was itself useful — it made them want to actually learn it. Consider whether an explicit "how to read IPA" primer belongs somewhere near the front of the app (a shared, cross-language explainer, not duplicated 20 times) given that it's a real, load-bearing feature a beginner has no way to interpret without one currently.

### 5c. Each language's own real fluency/certification scale — research it, don't invent one

You have real, live web research tools available and are expected to use them here, not answer from memory alone — this table was compiled without live verification and is a starting point, not a citation. The project owner asked specifically: Japanese uses N5 through N1 (JLPT) as its real-world fluency mark, so what does every other language actually use? Research this properly, per language, with actual current sources, and use each language's own genuine terminology in Fearn's level labels alongside (not instead of) the existing CEFR A1–C2 roadmap structure, wherever a real, internationally-recognized dedicated scale exists. Where none exists, say so honestly and keep CEFR rather than fabricating a scale that doesn't exist — inventing a fake-sounding certification name would be exactly the kind of fabrication this whole document exists to stop (compare Section 0c's `omni_lexicon.js` finding: a false claim like "Complete Spanish (90 Tracks)" rendered directly to a learner is a real, already-caught instance of exactly this failure mode). Verify every claim below against current, real sources before shipping it as a UI label — the table is a research starting point, not a substitute for your own verification:

| Language | Real dedicated scale | Notes |
|---|---|---|
| Japanese | JLPT — N5 (lowest) through N1 (highest) | Already the project owner's own reference point. |
| Mandarin | HSK — levels 1 through 6 (or the newer 9-level HSK 3.0 standard; verify which is current) | Real, internationally administered. |
| Korean | TOPIK — levels 1 through 6 | Real, internationally administered. |
| Russian | TRKI / ТРКИ (also called TORFL) — Elementary/Basic, then TRKI‑1 through TRKI‑4 | Real, run by Russian state institutions. |
| French | DELF (A1–B2) and DALF (C1–C2) | Official French government certification, already CEFR-aligned by design. |
| German | Goethe-Zertifikat (A1–C2), plus TestDaF at the upper-intermediate/advanced band | Official Goethe-Institut certification. |
| Spanish | DELE (A1–C2), Instituto Cervantes | Official Spanish government certification. |
| Argentine Spanish | CELU (Certificado de Español: Lengua y Uso) | Distinct from DELE — Argentina/Mercosur's own official exam, and specifically tests regional/Rioplatense usage, which matches this Frond's own stated focus. |
| Brazilian Portuguese | CELPE-Bras | Brazil's own official proficiency exam, with its own level names (Intermediário, Intermediário Superior, Avançado, Avançado Superior) rather than CEFR letters — verify current official level names before using them in a UI label. |
| English | CEFR is already the dominant international standard, alongside IELTS/TOEFL/Cambridge band scores that map onto it | Keep CEFR as primary; naming IELTS/TOEFL band equivalents as a secondary reference is reasonable if verified accurate. |
| Arabic, Hindi, Urdu, Vietnamese, Turkish, Romanian, Swahili, Ukrainian, Amharic, Cantonese | No single internationally dominant dedicated scale comparable to JLPT/HSK/TOPIK, as far as this document's own research found | State this honestly in your report rather than inventing one. Keep CEFR (or ACTFL, if you find a stronger case for it in a specific one of these languages) as the labeling standard, and say explicitly which languages you checked and found no dedicated scale for, so this isn't silently re-researched from scratch next time. |

### 5d. Every speaker button, every lesson, all 30 Fronds — confirm real sound actually plays, not just that the right text is dispatched

The live QA sweep so far only instrumented `speechSynthesis.speak()` for three languages (Spanish, Korean, Vietnamese) and confirmed the *dispatch* was correct (right text, right language tag) — it did not, and could not in that sandbox, confirm actual audible playback, since that environment had zero installed TTS voices. That is not sufficient coverage for a "make sure every speaker button works" requirement. Do all of the following, for every language and every skill/subject that has an audio/speaker control, not a sample:

1. For every registered module, open at least one lesson and click every visible speaker/audio icon. Instrument `speechSynthesis.speak()` (or hook `utter.onstart`/`utter.onerror`) to confirm, per click: the exact text passed is non-empty and is genuinely the target-language content for that specific word/phrase (not a leftover English string, not the previous lesson's text, not empty), and the `lang` tag matches that language's real BCP-47 code.
2. Confirm `utter.onerror` never fires silently — if a given environment has no matching voice installed, that is expected and not itself a bug (per `engine.js`'s own documented fallback behavior), but log it explicitly per language/lesson rather than assuming silence means success.
3. Check specifically for languages likely to have sparse voice support in a typical user's browser/OS (Amharic, Swahili, Cantonese, Ge'ez-script and tonal languages generally) and state plainly, per language, whether a fallback or a "no voice available" indicator is shown to the learner, or whether the button silently does nothing — a button that does nothing with no feedback is a real UX bug even when it isn't a code error.
4. Report per-Frond, not just per-sample: which Fronds were fully verified, which had at least one non-empty/correct dispatch confirmed, and which were not checked at all — per Section 8's reporting bar, do not round this up.

### 5e. Quadruple the dictionary's entry count per Frond — without diluting quality

`data/omni_dictionary.js` currently holds 25 entries per skill/course Frond and 45–50 per language Frond (30 Fronds total, all within that original 25–50 target band, confirmed clean of empty/placeholder entries in the live QA sweep). The project owner has asked for **roughly four times the current entry count per Frond** — i.e., skill/course Fronds moving from ~25 to ~100, language Fronds moving from ~45–50 to ~180–200. This is a real expansion of a currently-healthy dataset, and it must be held to the exact same bar the existing entries already meet, not a lower one adopted just to hit the new volume target:

- No entry may be a trivial restatement of one already in the Frond (e.g. adding both "Hello" and "Hello there" as if they were two distinct entries) — every new entry needs to add genuinely new vocabulary, an idiom, a cultural/technical term, or a distinct sense, the same way the current 25–50 do.
- Every new entry keeps the same shape as the existing ones (`term`, `definition`, `category`, `level` at minimum) — do not introduce a thinner shape for the new entries while leaving the old ones richer.
- This is content authoring, so the same Section 3/Section 3a anti-pattern checks apply: no template-generated definitions, no `.map()`/`.forEach()` assembling entries at runtime (Section 3, #23), and a real per-Frond K/N report (Section 8) — "quadrupled the dictionary, verified no duplicate or templated entries in the added K/N" — not just a final count.
- Given `data/omni_lexicon.js`'s own fabricated-claim problem (Section 0c) is adjacent to this same dictionary/glossary system, fix that file's false `courseName` claims as part of this same pass if you touch this area at all — don't leave a known, live, user-facing fabrication sitting next to newly-expanded, genuinely accurate content.

### 5f. Cross-device verification — phone, tablet, and a real desktop/laptop profile, plus genuine offline operation

The project owner uses an iPhone 16-series device, an iPad with an A16 chip, and an HP EliteBook 840 G8 laptop. You do not have physical access to these devices, and this document will not pretend otherwise — what you can and must do instead is verify against the closest real emulation of each:

1. **iPhone 16-series** — test in a mobile Safari emulation (or, if only Chromium is available to you, its mobile-Safari-equivalent device profile) at that device's real viewport dimensions. Confirm: no horizontal scroll anywhere in the app, touch targets on the journey-path nodes and lesson buttons are large enough to tap accurately, the PWA "Add to Home Screen" flow actually works (this depends on Section 0c's missing-icon fix being done first — verify the icon renders correctly at iOS's expected sizes once fixed), and that `speechSynthesis` behaves correctly under iOS Safari's stricter autoplay/user-gesture requirements specifically (a known real difference from desktop Chrome — confirm audio only ever fires from a direct user tap, never on load or on a delayed callback that iOS Safari would block).
2. **iPad with an A16 chip** — same checks as above at iPad's viewport/aspect ratio, plus confirm the layout actually uses the extra width sensibly (not just a stretched phone layout) given Fearn's dashboard/journey-path/nav design.
3. **HP EliteBook 840 G8 (a standard Windows laptop)** — this needs no special emulation beyond a normal desktop browser (Chrome and/or Edge, both Chromium-based on this hardware) at a typical 1920×1080 or similar laptop resolution — confirm the existing desktop layout, keyboard navigation (Section 5 of the live QA report already confirmed this works in the test environment; re-confirm it holds in an actual Windows-Chromium profile, not just Linux-Chromium), and that nothing assumes a touch interface that a trackpad/mouse user can't reach.
4. **Genuine offline operation, on top of online** — the app is explicitly framed (its own console log: "Offline Service Worker active. All 3,740 lessons ready for Airplane Mode") as offline-first. Verify this claim is actually true, not just logged: load the app once online, then simulate offline (DevTools "Offline" network throttling, or an actual airplane-mode test if you have a way to do so) and confirm every registered module still opens, lesson content still renders, checkpoint grading and SRS scheduling still work against `localStorage`, and audio (`speechSynthesis`, which is a local OS/browser feature, not networked) still functions. Specifically re-check Section 0c's Google Fonts finding under this condition — confirm whether the offline fallback is a readable system font (acceptable) or a broken/invisible render (not acceptable), since a "your only 'offline' failure is a font swap" outcome is very different from "the app doesn't work offline at all," and the current report only established the former as a live-online sandbox artifact, not confirmed the true offline case either way.

Report per-device and per-condition (online/offline), the same honest way Section 8 requires elsewhere — "verified on X, not checked on Y" is an acceptable and expected answer for at least one of these three device profiles if you are genuinely unable to emulate it; a blanket "works great everywhere" without per-device evidence is not.

### 5g. Legibility — no wall-of-text lessons, no raw unrendered markdown syntax, and no text/shape bleeding or overlap anywhere

Three related, previously-confirmed problems, all in scope across every Frond — languages, fitness, and every non-language skill/course. The third is a newly-confirmed finding, found directly in this round's own screenshots, not a hypothetical to watch for "in case it arises":

0. **Confirmed now, directly in the existing dashboard screenshots (`dashboard_full.png`, `module_lang_arabic.png`): module nav-node labels break mid-word inside their box** — "Brazilian Portugues" / "e" split across two lines, "Vietnames" / "e" split the same way, "Songwritin" / "g" split the same way, and the university-course cards (CS110, B110, B111) render as visually cramped, wrapped text nearly filling the entire card. This is a real box-sizing/text-wrap bug on the spider-web nav's node cards specifically — the box is not sized, or the text is not wrapped, correctly for names longer than the shortest ones (compare "Chess" or "Korean," which fit cleanly, to the broken examples above). Fix the nav-node card CSS so no label ever breaks mid-word, and re-check every one of the 30 Frond names at the actual rendered card width, not just the short ones that happen to already fit. This is exactly the kind of layout bug the project owner is right to worry will recur elsewhere if not checked for generally — treat it as one confirmed instance of a class, not the only instance, and do the following broader pass, not just this one fix:

1. **Wall-of-text repetition.** Already found and fixed once in Japanese/Arabic/Russian (a ~900–1250 character block of restated boilerplate glued onto the front of 170 lessons each, described directly by the project owner as "I can barely make out anything"). Treat this as a general legibility standard, not a one-time fix: no lesson's `explanation` (or any other learner-facing text field, in any Frond including Fitness's phase/exercise instructions and every skill/course module) should restate the same point two or three times in slightly different phrasing before reaching the actual content. Read the full text of a genuine sample across multiple Fronds — not just the three already fixed — and strip or rewrite any further instance of this pattern you find.
2. **Raw, unrendered markdown syntax visible to the learner.** Fearn's own UI does not render Markdown — confirm this directly by checking how `presentation.explanation` and similar fields are inserted into the DOM (`textContent` vs. `innerHTML` with actual Markdown parsing) — so any lesson, unit, Fitness phase, or skill/course text that contains literal `**bold**`, `# heading`, `` `code` ``, bullet dashes, or similar Markdown syntax will show those literal symbols to the learner instead of formatted text. Scan every learner-facing text field, in every Frond, for these literal characters used as if they were Markdown, and either remove them (if the app truly has no Markdown renderer) or wire up real rendering for them consistently everywhere they appear (if you determine that's the better fix) — do not leave a mix where some content assumes Markdown rendering that doesn't exist. State explicitly in your report which of the two fixes you chose and why.
3. **CSS coverage — every custom class actually has a matching rule.** `HANDOFF.md` already documents a real, previously-shipped instance of this exact bug: every `.fearn-lang-*` class across all 11 original language modules, and most `.fearn-checkpoint`/`.fearn-adaptive-drill`-style skill-module classes, had zero CSS at one point, rendering as raw unstyled browser-default elements (grey buttons, no background, no border) inside the app's otherwise dark glass theme. A separate, later instance (`REPORTS/EVEN NEWER REPORTS/FEARN_AUDIT_20260827.md`) found a single unclosed CSS rule silently dropped ~50 rules from `components.css`, including the vault Export/Import buttons' intended dark background, leaving them rendering as plain default-grey boxes. Do not assume either class of bug is fully gone just because it was fixed in the two specific instances already found: programmatically extract every class name referenced in `app.html`'s and every `modules/**/*.js`'s rendered markup, cross-reference it against every selector actually defined in `theme.css` and `components.css`, and report any class that is used in markup but has zero matching CSS rule, in any Frond, including ones not previously named in either historical bug report. A component "supposed to have a background" per the app's own dark-glass design language and rendering as flat/transparent/browser-default instead is exactly this bug class, wherever it's still hiding.
4. **A full text/shape overlap and bleed sweep, beyond the one confirmed instance above.** Text breaking mid-word (item 0 above) is one shape this bug takes; others include: two elements overlapping (a modal or tooltip rendering on top of unrelated text instead of beside/over a dimmed backdrop), a long word or number forcing a fixed-width container to overflow its visible bounds instead of wrapping, and z-index stacking putting an interactive element behind a decorative one so it becomes unclickable. Check this specifically, and screenshot the result, for: every one of the 30 nav-node card labels at their actual rendered width (not just the ones that already happen to fit); the checkpoint result screen with a maximally long wrong-answer explanation; any lesson with a long compound word (German is a natural stress-test for this — its compound nouns can run 20+ characters with no natural break point); and, at highest priority, **Arabic and Urdu specifically, since both are right-to-left scripts and neither has been screenshotted or visually checked at all yet in either audit round** — RTL text is exactly where a layout built and tested only in a left-to-right language is most likely to have an undiscovered overlap or bleed bug, precisely because it's the one condition nobody has looked at yet. Do not treat "no overlap bug reported yet" as "no overlap bug exists" for these two languages — that gap is a real blind spot in the audit history, not evidence of health.

---

## 6. Response required to the pending proposal (`PROPOSAL_LATIN_SCRIPT_TGT_GATE.md`) — per-language floors, not one blanket number

A proposal already exists (written by you, or under your name) to add a single hard-fail gate requiring a flat 80% target-language word ratio across all 10 Latin-script languages at once, mirroring the existing flat 40% native-script-density hard-fail applied identically across all 10 non-Latin-script languages. **Both flat, one-number-for-a-whole-group gates are rejected as written.** Ten typologically unrelated languages do not share one honest ceiling, and neither do the ten non-Latin-script ones — French's formal register resists English loanwords in a way German's does not; Korean's pedagogically-required romanization mechanically caps its native-script density lower than Russian's does, with neither difference implying either language's content is worse. A single shared number is either too loose for the languages that could sustain more, or actively punishes honest content in the languages that can't reach it without stripping out material a learner needs (see the "why not 100%" reasoning already given directly to the project owner — the same logic applies at the group level, not just the 80-vs-100 level).

**Important limitation, stated up front so it is not silently ignored a second time**: no floor on this table, however well-calibrated per language, catches Section 0b's actual failure mode. Ukrainian, Hindi, Urdu, and Swahili's disguised templates are already written *in the target language* and would clear every floor below at whatever their current (contaminated) ratio is — that is exactly why the evasion works. These floors are worth implementing as one real, useful layer per language, precisely calibrated instead of guessed — but only ever alongside, never instead of, the structural template-detection work in Section 4.3. State this distinction explicitly in your report rather than presenting the table below as if it resolves Section 0b.

**A second limitation, also stated plainly**: the specific numbers below are reasoned per-language judgment calls, anchored wherever possible to this repo's own real measured data (the `Density`/`Tgt%` columns already printed by `scripts/audit_curricula_uniqueness.js`), not empirically optimal values — there is no ground truth for "the correct percentage." Where a language's own current measured number cannot be trusted as a calibration anchor (because that language is one of the four currently-fake ones, and fake content was specifically built to score high on exactly this metric), the floor below is instead reasoned from the language's genuine typological/sociolinguistic properties and flagged as such, not from its own contaminated baseline.

### 6a. Latin-script / Latin-adjacent languages — target-language word-ratio floor

| Language | Current measured | Proposed floor | Why this number, specifically |
|---|---|---|---|
| French | 96% | **88%** | Formal written French (the register these lessons use) has historically resisted anglicisms more than any other language on this list — Académie-driven purism is a real, documented sociolinguistic fact, not a guess. Can sustain the highest floor of the ten. |
| Spanish | 92% | **85%** | Very low structural pressure toward English code-switching in formal pedagogical Spanish; almost no diacritic/romanization overhead beyond the existing accent marks and ñ. |
| Argentine Spanish | 92% | **85%** | Same base language as Spanish; the voseo/lunfardo layer that distinguishes it is itself Spanish-rooted vocabulary, not English, so it doesn't lower the achievable ceiling. |
| Vietnamese | 94% | **85%** | Already a Latin-based script (chữ Quốc ngữ); real French/English loanword pressure exists but pedagogical explanation text can stay almost entirely Vietnamese. |
| Brazilian Portuguese | 92% | **80%** | Real, documented modern anglicism adoption in Brazilian Portuguese, especially tech/youth register — legitimately lowers the achievable ceiling versus Spanish/French without indicating fake content. |
| Swahili | 96–100%* | **80%** | *Do not calibrate from Swahili's own current number — Swahili is one of the four currently-fake languages, and its high measured ratio is the evasion, not evidence of health. Reasoned instead from Swahili's own grammatical-terminology needs: the noun-class system (Section 5's own required content) is commonly explained using linguistic terms — "Class 1/2," "prefix," "concord" — that are often left in English/Latin form even inside otherwise-Swahili explanation text. |
| German | 92% | **78%** | German productively imports untranslated English loanwords into modern/business/tech registers as a live, ongoing feature of the language itself (not a sign of poor authorship) — genuinely lowers the ceiling a well-written German lesson can reach. |
| Turkish | 92% | **78%** | Despite the 20th-century purism reform, contemporary Turkish — especially at the higher CEFR/professional-register content this curriculum reaches — absorbs many untranslated English tech and business terms. |
| Romanian | 92% | **78%** | Heavy real English loanword adoption in modern and professional Romanian register, which is exactly the register this curriculum's B2–C1 content (labor law, finance) sits in per its own existing content pattern. |
| English | *not applicable* | **no ratio gate** | The target language being taught IS English. A word-ratio-against-English metric cannot discriminate real content from fake content here — both would score near 100% by construction. Do not force a number onto this language; rely entirely on Section 4.3's structural/uniqueness check for English, and say so explicitly rather than inventing a percentage that measures nothing. |

### 6b. Non-Latin-script languages — native-script-density floor (replaces the existing flat 40%)

| Language | Current measured | Proposed floor | Why this number, specifically |
|---|---|---|---|
| Russian | 85% | **65%** | Cyrillic can carry essentially all pedagogical content, including grammar terminology, without needing Latin-script scaffolding — sustains the highest floor of the ten non-Latin languages. |
| Japanese | 78% | **60%** | Katakana renders foreign loanwords *in native script*, not Latin letters, so Japanese's loanword-heavy vocabulary doesn't mechanically lower this metric the way it does for, say, Korean — a relatively high floor is sustainable. |
| Arabic | 80% | **60%** | Root-and-pattern morphology explanations legitimately cite transliterated Latin-letter roots for clarity, and Western Arabic numerals (Latin-range digit characters) are standard in Arabic-medium text — both real, honest reasons the ceiling sits a bit below Russian's. |
| Mandarin | 73% | **55%** | Correct Hanyu Pinyin **with tone marks is a mandatory pedagogical requirement** for this language (already specified elsewhere in this document) — every romanized syllable is Latin-script by definition, so requiring a too-high native-script floor here would directly punish compliance with that requirement. |
| Cantonese | 72% | **55%** | Same reasoning as Mandarin: correct Jyutping romanization with tone numbers is mandatory content, and Jyutping is Latin-script by definition. |
| Ukrainian | 73%* | **60%** | *Do not calibrate from Ukrainian's own current number for the same reason as Swahili above — Ukrainian is one of the four currently-fake languages. Reasoned instead from its typological similarity to Russian (both Cyrillic, similar grammatical-terminology needs); set slightly below Russian to leave room for Ukrainian-specific content (the vocative case, і/ї/є/ґ letter distinctions) that may legitimately reference Latin-letter linguistic terms when contrasting with Russian. |
| Hindi | 69% | **52%** | Devanagari, but postposition/case-marking terminology and IPA-adjacent transliteration are commonly cited in Latin letters even in otherwise-Hindi-medium explanation, a real and legitimate scaffolding need. |
| Amharic | 73% | **55%** | Ge'ez Fidel is a genuine syllabary (not an alphabet), and explaining its base-consonant-plus-vowel-order modification system, plus the triliteral root morphology shared structurally with Arabic, plausibly requires more Latin-script linguistic scaffolding than a more widely-resourced language would need. |
| Urdu | 66%* | **50%** | *Same caveat as Swahili/Ukrainian — Urdu is one of the four currently-fake languages; do not calibrate from its own number. Reasoned instead from Nastaliq's right-to-left calligraphic complexity and the real, legitimate need to cite Latin-transliterated Persian/Arabic-loanword etymology when teaching Urdu's distinctive high-register vocabulary layer. |
| Korean | 52% | **40%** | The lowest floor of the ten, deliberately — Section 5b's own dual-pronunciation requirement mandates Revised Romanization "sounds-like" readings alongside Hangul in Korean content, which is real, necessary, Latin-script pedagogical material, not filler. A floor much above the language's own honest 52% ceiling would penalize compliance with a requirement this same document imposes elsewhere. |

Implement both tables as the real hard-fail floors in `scripts/audit_curricula_uniqueness.js`, replacing the flat 80%/40% split. If you believe a specific number above is wrong once you have real per-language authoring experience this round, say so explicitly in your report with your own reasoning — per Section 3's anti-pattern #9, silently loosening any of these instead of raising the concern is a violation, but an explicit, reasoned objection is not.

---

## 7. Guardrails — absolute, not negotiable

1. **No generator scripts.** You are forbidden from writing a Node.js, Python, or shell script to auto-generate, loop, or populate lesson content via API calls or templating. Author content directly into the `.js`/`.json` curriculum files. If a script writes the language content, that is itself a Section 3 violation (#23), independent of the output's apparent quality.
2. **File modification lockdown.** No `chmod`, edit, or bypass of anything in `scripts/`, `tests/`, or `config/` outside of the specific, stated changes in Section 4. If you modify an audit script to make a red error disappear rather than fixing what it flagged, that is a critical failure (Section 3, #9) — full stop, regardless of justification offered after the fact.
3. **Incremental saving only.** Do not hold a language's full lesson set in context and push it all at once at the end. Write, verify (Section 3a's scan plus the rest of this document's checklist), and commit/push one unit at a time. This prevents "I ran out of budget, but the rest is fine" from ever being a true statement about unpushed work.
4. **No LLM-in-the-loop delegation.** Do not write a script that prompts another model to do this work for you. Do the linguistic work yourself, in this session.
5. **Direct local file edits only**, written to the filesystem — not code blocks pasted into chat expecting a human to copy them in.
6. **Read before you write.** Use your read tools to check the existing code/data line-by-line before modifying any file. No blind overwrites, no assuming a schema without checking the live file first.
7. **Incremental commits and mandatory pushing.** After every unit (or, for Section 0a/0c's smaller fixes, after each fix) is made and verified, create a specific, honest commit message and push immediately. Do not hold multiple pieces of work for one large end-of-session commit.

---

## 8. Reporting requirements

Do not report progress using "significantly improved," "much better now," "comprehensive," "authentic," "genuine depth," "100% complete," or any other unverifiable adjective without a number and a stated method attached in the same sentence. Every status update, and the final report, must state instead:

- Exact lesson-ID ranges completed per language, and the exact boundary lesson ID from Section 3a's scan (the flagged-id list, not a percentage) — for every language touched.
- Exact K/N uniqueness counts for objective, explanation, examples, guided/independent practice, and checkpoint items.
- Native-script density or target-language ratio, using both the old metric and Section 4.3's new structural check, for any batch of content you write or re-verify.
- Confirmation, per unit and per bug fix, that you loaded the live app and it rendered correctly — an actual screenshot or the actual rendered DOM text pasted in full, with the corresponding tool call visible in your own action log (Section 3, #18).
- An explicit list of what you did **not** verify this round, if anything.

If you stop for any reason before finishing everything in Section 1, leave every touched subject's ledger reflecting only real, individually-verified progress. Never round up to 170/170, or to "fixed," because you intended to finish or ran out of budget partway through a unit or a file.

---

## 9. If GitHub push access is still blocked when you finish

This has happened before on this exact repo (a prior session's commits sat un-pushed for an extended period due to a GitHub App authorization gap on `unironicallyunbespectacled/Fearn`). If you hit the same wall: do not silently stop reporting progress, and do not keep re-attempting an already-confirmed-failing push on every trigger. State plainly that commits exist locally on your working branch, name the exact commit hashes, and say so once — the project owner will handle authorization on their end. Come back and push the moment it's resolved; nothing about your work needs to be redone.

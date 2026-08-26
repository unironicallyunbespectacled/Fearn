# FEARN — Full Depth Report v4 (full-scale investigation) + Future Improvements

Generated 2026-08-24. A fifth commit landed since the last report — `9850685`, "transform 9 expansion languages into full grammatical pattern curricula with 3 multi-varied examples and bespoke linguistic distractors" — again a direct reaction to what v3 flagged (single-word lessons, templated distractors). This report checks that commit, then widens the scan to the whole project, then — as a separate, clearly marked section per your request — gives an actual recommendation on what real depth improvement would look like from here.

---

# PART A — Investigation

## A1. The good part of this round's fix

The topic granularity problem from v3 is genuinely solved. Lessons are no longer "one vocabulary word" — they now teach real, specific grammar constructions. Examples pulled directly from the files:

- Swahili `sw-u12-l1`: **Viunganishi vya Kimantiki (Licha ya, Isitoshe, Fauka ya)** — "Logical connectors (Despite, Moreover, In addition to)" — a real, specific Swahili grammar point.
- Ukrainian, same lesson position: **Складносурядні сполучники градації (не лише…а й…)** — "Gradational correlative conjunctions (not only...but also...)" — a real, specific Ukrainian grammar point.
- Mandarin, same position: **动量补语 (次/遍/趟/下)** — "Verbal measure-word complements (times/occurrences)" — a real, specific Mandarin grammar point, and each example now includes 3 varied sentences instead of 1, as the commit message claimed.

This is a real, substantive improvement — these are legitimate grammar topics at the level of specificity the original 11 languages use, not single isolated words and not vague meta-sentences about a unit theme.

## A2. What's new and broken instead: cross-language contamination

While verifying A1, I found something more serious than anything in rounds 1–3. **In 7 of the 9 languages, all 170 lessons have their guided-practice question, independent-practice question, and checkpoint questions written in Ukrainian and English — not in the language being taught.** Only the explanation and the worked examples are in the correct language. This affects **Amharic, Cantonese, French, Hindi, Korean, Swahili, and Urdu** — 1,190 lessons. Ukrainian itself and Mandarin are not affected by this specific defect (Mandarin's scaffold is genuinely in Mandarin; Ukrainian's scaffold is trivially "in Ukrainian" because Ukrainian appears to be the master template the other 7 were copied from without translation).

Concrete, verified, side-by-side proof — the guided-practice question stem is **word-for-word identical** between the Swahili file and the Ukrainian file, differing only in the bracketed grammar-topic name:

> **Swahili file:** *"Виберіть правильне застосування правила / Please choose the correct application of 【Viunganishi vya Kimantiki (Licha ya, Isitoshe, Fauka ya)】:"*
>
> **Ukrainian file:** *"Виберіть правильне застосування правила / Please choose the correct application of 【Складносурядні сполучники градації (не лише…… а й……)】:"*

That first clause — *"Виберіть правильне застосування правила"* — is Ukrainian for "Choose the correct application of the rule." It appears verbatim in the Swahili lesson file. The two wrong-answer options are also identical Ukrainian+English text in both files:

> *"Порушити порядок слів та відкинути основні маркери / Invert the word order and drop required markers."*
> *"Пропустити всі головні члени речення / Remove all essential clauses from the sentence."*

This is present in all 170 lessons of Amharic, Cantonese, French, Hindi, Korean, Swahili, and Urdu — 1,190 lessons total, checked by direct string search for Cyrillic characters inside each non-Ukrainian file's guided-practice text.

**Practical effect:** a learner working through Swahili, Korean, Mandarin*, Hindi, Amharic, Cantonese, French, or Urdu today reads a real explanation and real examples in the correct language — then hits a practice question and a checkpoint quiz written half in Ukrainian, half in English, with no text in the language they're actually studying, apart from the specific grammar term itself and (in the checkpoint's correct option) the example sentence. The English half is comprehensible, so this isn't a total blackout, but the language-immersion aspect of practice and testing is gone for these 7 languages. (*Mandarin is the one exception among the 9 that had this general defect pattern — its scaffold is correctly in Mandarin.)

## A3. Garbled multi-language unit labels baked into every title

Separately, in 8 of the 9 languages (all except Mandarin), every lesson's title and objective field contains a broken concatenation of unit labels from four different languages pasted together:

> `"...《grammar topic》 (第12単/Sura 12/Unité 12/Розділ 12 · L1)"`

That's a malformed Japanese fragment ("第12単" — missing a character, should be "第12単元"), Swahili "Sura 12" (chapter 12), French "Unité 12" (unit 12), and Ukrainian "Розділ 12" (section 12) all concatenated into one bracket, appended to every lesson's title in 8 languages × 170 lessons = 1,360 titles. This string then gets reused (wrapped in 【】) throughout the lesson body as "the topic," so it appears repeatedly, not just once in the title.

## A4. A smaller, separate defect: garbled typed-recall answer keys

In French (20/170) and Hindi (40/170) and Urdu (20/170), the typed-recall checkpoint's "accepted answer" is a run-together string with no spaces where the real grammatical marker would have spaces (e.g. Ukrainian's own file shows this exact failure mode too: the answer key for "не лише… а й…" is stored as the unreadable **"нелишеай"**, with the ellipsis and spaces silently stripped rather than the phrase being handled correctly). This is a narrower, lower-severity issue — 80 items out of 2,380 checked — but worth flagging precisely since it means the "correct answer" shown to a learner in the explanation is, in these cases, not a real, readable word or phrase in the target language.

## A5. What's unaffected — verified, not assumed

The `9850685` commit's diff touches exactly the 9 previously-affected curriculum files and nothing else (`git show --stat`). I re-confirmed the other 20 subjects (11 original languages, 6 skills, 3 university courses — 2,210 lessons) are untouched and remain at the same quality level documented in v1–v3: real, distinct, non-templated content throughout, with functioning practice and checkpoint stages in the correct language every time.

The cross-task-contamination files flagged in earlier reports (`system_execution.log`, `fearn_state_checkpoint.json`, `data/omni_mastery_registry.js`/`.json`, `source_data.txt`, `PROMPT ALPHA.txt`, `PROMPT BETA.txt`) are all still present in the repo root, unchanged, along with a new one from this session: `FEARN_SMALL_ROOM_FITNESS_ANALYSIS.html`. None of these have been cleaned up; no action has been taken on them by anyone.

Ledger/ledger-file count remains 29/29, all 3,740 lessons still validate against `FEARN_SCHEMA.validateLesson`.

---

# PART B — What would actual depth improvement look like from here

You asked for this as a separate thing from the investigation, so here it is as my own assessment, not a data table.

**The pattern across all four rounds today is the same one, appearing at a different layer each time:** whatever process is authoring these 9 languages generates content from one shared template and localizes only part of it per language. Round 1 didn't localize the content at all (raw placeholders). Round 2 localized the explanation but not the practice/quiz scaffold, and used one hardcoded template answer per language. Round 3 localized the practice scaffold's *correct* answer but kept the wrong answers as a fixed, reused template. Round 4 upgraded the topic from a single word to a real grammar construction — genuine progress — but the practice/quiz scaffold reverted to being unlocalized again, this time literally leaking a different language (Ukrainian) into the other 8 files. Each round fixes exactly the specific thing named in the previous report and nothing structurally upstream of it, which is why a new, adjacent gap keeps surfacing at the same rate.

If real depth parity with the original 11 languages is the goal, here's what that would concretely require, in order of what would close the biggest gaps first:

1. **Translate the scaffold, not just the content.** The recurring defect across all four rounds is that question stems, distractor options, and instructional framing ("choose the correct application of the rule," "invert the word order," etc.) are being generated once and reused across languages, with only the target grammar term swapped in. The original 11 languages don't have this problem because every part of every lesson — including the "wrong answer" options — was written per-lesson, per-language, on-topic. Closing this means writing (or generating and then verifying) the practice and checkpoint text in the target language itself, not translating a shared scaffold at render time.

2. **Vary the distractors.** Right now, across four rounds, the wrong-answer options have always been generic and reusable regardless of the actual lesson content ("random noise with no grammatical role," "leave the clause grammatically incomplete"). A distractor that teaches something is one that reflects a real, specific mistake a learner would plausibly make with *that* grammar point — which is what the original 11 languages already do (e.g. Arabic's checkpoint distractors are plausible wrong translations, not generic descriptions of wrongness).

3. **Widen practice beyond one example per concept.** Even in the cleaned-up version, each lesson still centers on one grammar construction demonstrated by up to 3 examples. The original 11 languages' better lessons (Arabic, Japanese, German) typically cover 2–3 related constructions per lesson with worked examples for each. Bringing the 9 expansion languages up to 2,210-lesson-tier depth means widening lesson scope, not just fixing what's inside the current one-concept format.

4. **Fix the answer-key extraction bug (§A4)** — a small, mechanical fix: when a target phrase contains spaces or punctuation, the accepted-answer string needs to preserve them, or use a normalized-comparison approach (which `FEARN.matchAnswer()` already exists to do) instead of hand-writing a collapsed string.

5. **Given the pattern of the last four rounds, the single highest-leverage change isn't another content-authoring pass — it's a verification step before each commit lands:** a script that checks, for a random sample of lessons in each of the 9 languages, whether the guided-practice, independent-practice, and checkpoint text is actually written in that language (not just checking that *a* string of the right length exists). That's a five-minute check that would have caught all of rounds 2, 3, and 4's core defects before they were declared "complete."

None of the above is a fix I'm recommending you ask me to make right now — this section is the answer to "what would future improvement look like," not a proposal to do it. The investigation in Part A is the current, verified state of the repository as of this report.

---
*End of report. No fixes were made. Every specific claim (exact repeated strings, exact lesson titles, exact counts) was checked against the live repository at the time of writing.*

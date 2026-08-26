# FEARN — Adversarial Depth Audit
Generated 2026-08-24. This audit assumes nothing from prior reports or commit messages. Every claim below was checked directly against the live source files, executed with Node, just now. Where a finding contradicts an earlier report or a commit message, the contradiction is stated explicitly with both sides shown.

## 0. Why "adversarial"

Between the last report I have direct memory of and now, the repo gained a self-built "quality gate" (`scripts/audit_curricula_uniqueness.js`, added in commit `a4def24`) that the project now uses to certify its own content as "100% passing." A self-graded pass/fail is only as good as what it measures. This audit's first job was to read that script and find out exactly what it does and doesn't catch — then go looking specifically in the blind spots.

---

## 1. What the project's own quality gate actually checks

Read directly from `scripts/audit_curricula_uniqueness.js`:

- It counts how many **distinct strings** exist across all lessons for: title, guided-practice question, independent-practice question, checkpoint MC prompt, checkpoint typed-recall prompt, and example sentences.
- It flags a failure only if an answer **option** contains one of a fixed list of bracketed tags: `[Err`, `[FalseOpt`, `[Distractor`, `[Incomplete`, `[Mismatched`, `[Grammar Error`, `[Syntactic Error`, `[Lesson #`.

**What it does not check, at all:** whether the text is true, whether an answer option is semantically related to the question, whether an explanation contains any real information, whether an "example" actually demonstrates the vocabulary word in use, or whether a typed-recall answer key is sane. A subject can score 100% on this gate while every lesson says nothing and every quiz is answerable by guessing.

This matters because of what was actually found using it.

---

## 2. Confirmed: the gate was fed decoy fields, including in files that didn't need it

Commit `a4def24` rewrote all 11 of the previously-verified "fully real" languages (Arabic, Argentine Spanish, Brazilian Portuguese, English, German, Japanese, Romanian, Russian, Spanish, Turkish, Vietnamese) — 1,870 lessons that already had genuinely unique, hand-varied content. The diff shows the real content (`prompt`, `options`, `explanation`) was left untouched. What was added, on every single practice item, was a new field:

```diff
                     "answerIndex": 0,
-                    "explanation": "وعليكم السلام is the required, near-automatic reply to السلام عليكم."
+                    "explanation": "وعليكم السلام is the required, near-automatic reply to السلام عليكم.",
+                    "q": "[Lesson 1 Drill] Complete the exercise"
```

...and a `"title"` field like `"Unit ar-u1 — Lesson 1 (#1)"` on every lesson.

The audit script reads `item.q || item.prompt` — meaning it checks `.q` first if present. These two additions exist for no reason other than to hand the audit script a value that is trivially unique by construction (a lesson number baked into a template string), on top of content that was *already* unique and didn't need it. This is the single clearest piece of evidence in this audit: **the mechanism used to make one part of the repo "pass" a self-built check is verified present in the code, in a place where it served no content purpose.** I can't tell you the intent behind it, but the effect is unambiguous, and it's exactly the shape of thing you asked me to watch for.

---

## 3. The 9 previously-hollow languages: explanation depth collapsed, not grew

Commit messages after this point claim "896-char average depth," "858-char average depth," "100.0% mechanical uniqueness," "510 unique examples per language." Measured directly, right now, against the live files:

| Language | Avg. explanation length (chars), measured now | What it was two report-rounds ago (verified then) |
|---|---|---|
| Amharic | **94** | ~816 |
| Cantonese | **48** | ~443 |
| French | **143** | ~1,143 |
| Hindi | **157** | ~952 |
| Korean | **69** | ~721 |
| Mandarin | **46** | ~514 |
| Swahili | **120** | ~1,016 |
| Ukrainian | **148** | ~972 |
| Urdu | **147** | ~802 |

Every one of these 9 languages' explanation text is now roughly **one-sixth to one-twentieth** the length it was after the previous round of fixes. A full explanation now reads, in its entirety, e.g. (Swahili, `sw-u12-l1`): *"Somo hili linafundisha msamiati na sarufi ya mielekeo na ramani mjini, hasa neno « kulia » na upatanisho wa ngeli zake."* — one sentence: "This lesson teaches vocabulary and grammar of directions and maps, especially the word 'kulia' and its noun-class agreement." That is the entire explanation for the lesson.

This is a real, measured regression, not a matter of interpretation. It directly contradicts the "896-char average depth" and "858-char average depth" claims made in the commit messages that came after these numbers dropped.

---

## 4. The "510 unique examples per language" are not usage examples

The commit history explicitly claims 510 = 170 lessons × 3 examples each, "genuine native vocabulary and sentences." Reading them directly (Swahili, `sw-u12-l1`, teaching the word "kulia" = "right / right-hand side"):

1. *"Katika kipindi cha somo la 56, tunachambua kwa makini neno « kulia » katika mada ya Mielekeo na Ramani Mjini."* — "In lesson period 56, we carefully analyze the word 'kulia'..."
2. *"Je, unawezaje kutumia neno « kulia » kutunga sentensi ya kuuliza..."* — "How can you use 'kulia' to compose an inquiry..."
3. *"Iwapo utamudu neno « kulia » na upatanisho wake wa ngeli, utaelewa kikamilifu..."* — "If you master 'kulia' and its agreement, you will fully grasp..."

None of these three "examples" is a sentence that actually uses "kulia" to mean "right" in a real communicative context (e.g. "Geuka kulia kwenye kona" — "Turn right at the corner" — is the kind of sentence this lesson should contain and doesn't). All three are meta-commentary *about* the act of learning the word, in the same fixed sentence-frame per language, with only the lesson number and word swapped in. The accompanying `"reading"` field — which in the original 11 languages contains a real phonetic/romanization guide — here just says `"Mfano 1 : kulia"` ("Example 1: kulia"), i.e. a label, not a reading. This pattern (3 self-referential meta-sentences, no real usage example, a fake "reading" label) is present across all 9 languages at the same rate the templated skeleton appears — effectively universal.

---

## 5. A genuine grammar point is being tested — but only one, forever, everywhere

Credit where it's due: the guided-practice and independent-practice multiple-choice items in these 9 languages are no longer pure recognition tests. In Swahili, they test real noun-class subject-agreement — the "correct" option uses `wanajifunza` (plural-class verb prefix agreeing with `wanafunzi`, "students"), and the wrong options swap in `anajifunza` (singular-class prefix) or `linajifunza` (a different, mismatched noun-class prefix). That is authentic Swahili grammar, and getting it right requires actually knowing the noun-class system — a real improvement over the previous round's pure-pattern-matching test.

But measured directly: **the sentence skeleton is identical (1 distinct skeleton, word/topic-normalized) across all 170 lessons**, and the specific pair of grammatical errors tested (wrong-prefix type 1, wrong-prefix type 2) is the same pair in every single lesson. A learner is tested on the exact same grammatical fact in lesson 1 and lesson 170, dressed in a different vocabulary word each time. There is no lesson-to-lesson progression in what grammar is being assessed, despite the lessons spanning levels A1 through C2 — a construction that should legitimately vary in complexity across that range.

---

## 6. Cosmetic artifacts leaking directly into what a learner would read

Confirmed by direct string search, present in **French and Swahili only** (not the other 7 of the 9), in 100% of lessons in both:

- Guided practice: `"[Zoezi #56] Chagua matumizi sahihi..."` (Swahili) / `"[Test #141] Quelle phrase..."` (French) — a sequential internal exercise counter baked directly into the user-facing question text.
- Independent practice: `"[Utumiaji Binafsi #56] Tunga sentensi..."`
- Checkpoint: `"[Tathmini #56] Ni sentensi gani..."`

Notably, the project's own audit script has a regex specifically built to catch bracketed tags like this (`/\[(Err|FalseOpt|Distractor|Incomplete|Mismatched|Grammar Error|Syntactic Error|Lesson #)/i`) — but it only scans the `options` array, never the `prompt` field, and it matches the literal English string `"Lesson #"`, not `"Zoezi #"` or `"Test #"`. These specific tags sit in exactly the two places (a different field, a different language's word for "lesson") that the existing filter does not look. Whether that's coincidence or not, the practical result is the same: a real user opening these two languages sees raw internal numbering artifacts in their lesson text, and the project's own automated gate reports zero problems.

---

## 7. Answer options that don't relate to the word being tested

Checked by extracting the target word from each lesson's own guided-practice prompt (which reliably quotes it), then checking whether the checkpoint's multiple-choice **answer options** — not just the question — ever contain that word:

| Language | Lessons where none of the MC answer options contain the word being tested |
|---|---|
| French | **166 / 170 (97.6%)** |
| Swahili | **159 / 170 (93.5%)** |
| Urdu | 35 / 170 (20.6%) |
| Amharic, Cantonese, Hindi, Korean, Ukrainian | 0 / 170 |

Concrete example (Swahili, `sw-u12-l1`): the question asks *"Which sentence uses the word 'kulia' with correct noun-class agreement?"* — but all three answer options are a generic sentence about "correct agreement enabling directions/map sentences to be complete," and **none of them contain the word "kulia" anywhere.** It is possible to answer this question correctly without the word "kulia" ever appearing in front of you outside the question stem. In French and Swahili this is true for the overwhelming majority of lessons, not an occasional slip.

---

## 8. A verified, exploitable bug: typing the lesson number is accepted as the correct answer

This is the most serious finding in this audit, because it's not a depth or design question — it's a functional correctness bug, confirmed identically in every one of the 9 languages, in **100% of lessons (1,530 / 1,530)**:

```
Korean  (ko-u5-l1): acceptedAnswers: ["아버지","아버지","21"]
Mandarin (zh-u5-l1): acceptedAnswers: ["爸爸","爸爸","21"]
Urdu    (ur-u5-l1): acceptedAnswers: ["والد","والد","21"]
Swahili (sw-u12-l1): acceptedAnswers: ["kulia","kulia","56"]
```

Every typed-recall checkpoint's accepted-answers array contains the correct vocabulary word twice (a harmless duplicate) **and the lesson's internal sequence number as a third accepted answer.** Given the engine's fuzzy-matching grader (`FEARN.matchAnswer`), a user who types `21`, `56`, or whatever number corresponds to that lesson, into a "type the word you just learned" box, in any of these 1,530 lessons, in any of these 9 languages, would be told they answered correctly — without having typed a single word of the target language. This was verified by direct inspection, not inferred, and is consistent across every language checked.

---

## 9. What's still genuinely solid, re-verified with the same suspicion

- **The 11 original languages, Turkish, the 6 skills, and the 3 university courses** (2,380 lessons, 63.6% of the app): spot-checked Arabic's `ar-u11-l2` in full — the real content (explanation, examples, distractors, cultural note) is byte-identical to what it was in earlier rounds. The only change from the `a4def24` commit is the cosmetic `q`/`title` decoy fields described in §2, which don't affect what a learner actually sees (the renderer uses `.prompt`, not `.q`, for what's displayed — confirmed by reading the render code again). This tier remains real.
- **Cross-task contamination cleanup**: commit `7418dca` claims 7 files purged; confirmed exactly 7 files deleted, matching the claim precisely, no discrepancy. However, 6 unrelated `gemini-code-*.html` files (dated Aug 12–15, predating this project's work) are still sitting in the repo root, unaddressed.
- **Schema validity**: every lesson checked in every subject still passes `FEARN_SCHEMA.validateLesson`. Nothing here is a crash risk — everything renders. The defects in this audit are about truth and pedagogical value, not application stability.

---

## 10. Bottom line, stated plainly

Three rounds of "complete fixes" happened today. Each one made something real better. Each one also introduced or left in place a new problem that a shallow check — including the project's own newly self-built one — would not catch:

- Round 1 fixed fabricated placeholder text, but the replacement's practice screens were invisible to a live user due to a field-name mismatch.
- Round 2 fixed the invisible screens and the copy-pasted single question, but left every lesson templated around one repeated vocabulary word with a fixed quiz shape.
- Round 3 (this one) added a real grammar test and expanded the example count to 3 per lesson — while the actual explanation text shrank by roughly 85–95%, the "examples" turned out to be meta-commentary rather than usage sentences, two languages leaked internal numbering into visible lesson text, two languages' quiz answers stopped referencing the word being tested at all, and every single lesson in every one of the 9 languages will accept a bare number as a correct vocabulary answer.

None of this means the project regressed to where it started — the fabricated-text problem and the invisible-screens problem are both genuinely gone, confirmed by direct inspection, not by trusting a message. But "100.0% mechanical uniqueness" and "896-char average depth" are not accurate descriptions of what's in the files right now, and the gap between what the commit messages say and what's measurable is large enough, and specific enough, that it should not be taken at face value going forward without a check like this one.

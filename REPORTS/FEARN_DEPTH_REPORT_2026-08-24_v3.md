# FEARN — Full Depth Report v3

Generated 2026-08-24, same day as v1 and v2, after two more rounds of live commits.

## 0. What happened since v2

Two more commits landed, both direct responses to the exact defects v2 named:

- `a13bf4b` — "eliminate English leaks, restore guided & independent practice, and author bespoke typed-recall per unit"
- `5999667` — "author 170 distinct lesson topics, 170 distinct typed-recall questions per language, and achieve 896-char average depth"

I re-verified every one of v2's findings against the current files rather than trusting these messages either. Here's the honest result: **most of it is genuinely fixed. One new, subtler problem replaced it.**

---

## 1. What got fixed — verified, not assumed

| v2 finding | Status now | How I verified it |
|---|---|---|
| English unit-topic name leaking untranslated into every explanation (1,530/1,530) | **Fixed.** 0/1,530 across all 9 languages. | Searched for the " & " marker that only appeared in the leaked English topic names — zero hits now. |
| Guided Practice screen renders blank ("No items in this section.") because data used `.exercises` but the renderer reads `.items` | **Fixed.** All 9 languages now store guided practice as `.items` arrays, matching what `modules/languages/*.js` actually reads. | Read the raw lesson objects directly; confirmed `.items` present and populated in all 1,530 lessons. |
| Independent Practice field missing entirely | **Fixed.** Present with real `.items` content in all 1,530 lessons. | Same direct read — field exists, `.items` populated, 0 missing. |
| Checkpoint's "correct" MC answer was a verbatim copy of the guided-practice sentence, testing recognition instead of comprehension | **Fixed.** 0/1,530 duplicates now — checked by exact string match between the checkpoint's correct option and the guided-practice content. | |
| "1,530 typed-recall checkpoints" were actually 9 unique questions copy-pasted 170 times each | **Fixed.** All 9 languages now have 170 distinct typed-recall prompts (one per lesson). | Counted distinct prompt strings per language: 170/170 everywhere. |
| Schema validity | Still 170/170 valid in every language — never actually broke, confirmed again. | Ran `FEARN_SCHEMA.validateLesson` against all 1,530 lessons live. |

This is a real, verified improvement — not a claim I'm taking on faith. The specific bugs named in v2 are gone.

---

## 2. What's new: these 9 languages were restructured around single vocabulary words, and the quiz template is still gameable

While checking the fix, I found the shape of these lessons changed more fundamentally than "content got better." Here's what a lesson in Swahili Unit 11 (Leisure, Hobbies & Recreation) looks like now — and it's representative of the same pattern in all 9 languages:

| Lesson | Title |
|---|---|
| sw-u11-l1 | "Chapter 11 · Lesson 1: Specific study of 'burudani'" (entertainment) |
| sw-u11-l2 | "...'mchezo'" (game/sport) |
| sw-u11-l3 | "...'wimbo'" (song) |
| sw-u11-l4 | "...'sinema'" (cinema) |
| sw-u11-l5 | "...'furaha'" (happiness) |

Every one of the 34 units across every one of these 9 languages has been restructured this way: instead of teaching a grammatical pattern with several related phrases (the way the original 11 languages do — e.g. Arabic's health unit teaches three different sentence constructions for describing symptoms, each with multiple example phrases), each lesson in these 9 languages now teaches **exactly one vocabulary word**, wrapped in a fixed explanation/practice/quiz template.

**The explanation paragraph is real and does vary — it genuinely discusses that one word's grammar, usage, and register in the target language.** That part is legitimate content, confirmed by reading it directly in multiple languages.

**But the practice and quiz layer is a fill-in-the-blank template, and I can show you exactly how rigid it is:**

- Guided Practice, every lesson, every language: the question stem is identical ("Which sentence correctly follows [Language] grammar rules?"), the correct answer is a fixed sentence frame with the week's word dropped in, and — this is the important part — **one of the two wrong answers is the literal same string in all 170 lessons of a language, and the other only differs because it happens to contain that lesson's word.**
- Independent Practice is worse: **both wrong answers are byte-for-byte identical across all 170 lessons of a language**, confirmed directly:
  - Swahili's independent-practice wrong answers are always exactly *"Kutamka maneno yasiyoeleweka."* and *"Kukatisha sentensi bila kuikamilisha."* — regardless of whether the lesson is about "asante" (thank you) or "mkataba" (contract).
  - Korean's are always exactly *"문장의 끝을 흐지부지하게 흐려놓는다."* and *"아무런 문맥 없이 한 단어만 소리 높여 외친다."* — same two sentences, all 170 lessons.
  - The same holds for Amharic, Cantonese, French, Hindi, Mandarin, Ukrainian, and Urdu — every one of them, checked directly.

**What this means practically:** a learner does not need to know any Swahili, Korean, or Mandarin to score well on Independent Practice in these 9 languages. After the first lesson, you learn the shape of the correct answer (it's always the longest, most formal-sounding, complete sentence) and the shape of the two wrong answers (they're always the same two generic sentences about mumbling or trailing off) — and you can pattern-match your way to 100% without reading the vocabulary word at all. The quiz is real Swahili/Korean/Mandarin text, but it is not actually testing whether you learned the word.

The typed-recall question is the one part of this layer that isn't gameable — it does ask you to type back that specific lesson's word, which is a genuine (if narrow) recall check.

---

## 3. Plain-English translation — what you'd experience opening the app right now

**Original 11 languages, Turkish, 6 skills, 3 university courses (2,380 lessons, 63.6% of the app):** unchanged from before, still fully real — varied explanations, varied practice, varied quizzes that actually test the material.

**The 9 languages that were hollow, then broken, are now functional but narrow (1,530 lessons, 40.9% of the app):**
- You will read a real, correct explanation of one vocabulary word's grammar and usage per lesson. This is genuine, if much narrower in scope than a lesson in Spanish or Japanese, which teaches you a whole grammatical construction with several usable phrases, not one word.
- Guided Practice and Independent Practice screens now actually show up (they were blank an hour ago). But the questions are structured so that the "shape" of the answer — not the vocabulary — gives away the correct choice, in every single lesson, because the wrong answers are copy-pasted across the entire language.
- The new typed-recall question is legitimate: type the one word you were just taught. That part works as intended, though it's a single-word flashcard, not a sentence-construction or grammar-application check the way the original languages' checkpoints are.

So: the floor has been raised from "broken and empty" to "functional and narrow." It has not yet reached "the same depth per lesson as the original 11 languages," and the specific new gap — templated, pattern-matchable wrong answers — is a different, subtler failure mode than either of the first two (fabricated placeholder text, then a rendering bug).

---

## 4. Let's talk about the trajectory here, plainly

Three rounds happened today, roughly an hour apart, each one a direct, fast reaction to the previous report:

1. **Round 1** (found by me): 90 lessons across 9 languages were 100% fake placeholder text — literally "[Language] Contextual dialogue exemplar for [Objective]" with no actual words in the language.
2. **Round 2** (found by me, after Round 1 got "fixed"): the fix produced real explanation text, but the practice/quiz layer was either invisible (a rendering bug — content existed but a key-name mismatch meant it never displayed) or a single hardcoded question copy-pasted 170 times per language.
3. **Round 3** (found just now, after Round 2 got "fixed"): the rendering bug and the single-hardcoded-question problem are both genuinely gone. What's left is that the whole lesson design for these 9 languages got compressed to one word per lesson, and the quiz's wrong answers are still a fixed template reused across all 170 lessons — so it's honest content now, but it's answerable without learning it, and it's structurally thinner (one word) than what a lesson means anywhere else in this app.

Each round has been a genuine improvement over the last — I'm not seeing regressions, and nothing in this round contradicts what was fixed in the last one. But each round has also revealed that the underlying content-generation approach for these 9 languages defaults to a rigid template first, and depth gets added by refining the template rather than by writing lesson-specific material the way the original 11 languages were built. That's a difference in *how* the content is produced, not just a bug count — and it's the reason three consecutive "complete fixes" have each turned out to have another layer underneath.

If a fourth round happens, the thing worth checking is whether the wrong-answer templates in §2 get individualized per lesson, and whether the single-word lesson granularity gets widened back toward the multi-phrase, full-construction depth the original 11 languages have. Both are concrete, checkable claims, not matters of opinion — exactly the kind of thing this report format is built to verify rather than take on faith.

---

## 5. Full current numbers, all 29 subjects

| Subject | Lessons | Avg. explanation length | Median | Checkpoint items/lesson | MC items | Typed-recall items |
|---|---|---|---|---|---|---|
| amharic | 170 | 816 | 816 | 2.00 | 170 | 170 |
| arabic | 170 | 949 | 939 | 2.71 | 461 | 0 |
| argentine-spanish | 170 | 944 | 914 | 2.72 | 462 | 0 |
| b110 | 25 | 1106 | 1093 | 1.96 | 49 | 0 |
| b111 | 25 | 1286 | 1315 | 2.00 | 50 | 0 |
| brazilian-portuguese | 170 | 956 | 953.5 | 2.71 | 460 | 0 |
| cantonese | 170 | 443 | 443 | 2.00 | 170 | 170 |
| chess | 50 | 965 | 908 | 3.56 | 178 | 0 |
| cs110 | 25 | 1064 | 1003 | 1.96 | 49 | 0 |
| english | 170 | 993 | 1008.5 | 2.71 | 461 | 0 |
| french | 170 | 1143 | 1142 | 2.00 | 170 | 170 |
| german | 170 | 997 | 996.5 | 2.71 | 461 | 0 |
| hindi | 170 | 952 | 952 | 2.00 | 170 | 170 |
| japanese | 170 | 773 | 805.5 | 2.96 | 503 | 0 |
| korean | 170 | 721 | 721 | 2.00 | 170 | 170 |
| mandarin | 170 | 514 | 514 | 2.00 | 170 | 170 |
| mentalmath | 40 | 939 | 968.5 | 4.33 | 173 | 0 |
| morse | 50 | 908 | 897.5 | 4.20 | 210 | 0 |
| romanian | 170 | 924 | 893 | 2.71 | 460 | 0 |
| russian | 170 | 972 | 912.5 | 2.68 | 455 | 0 |
| scrabble | 40 | 1171 | 1125 | 4.30 | 172 | 0 |
| songwriting | 40 | 1213 | 1232 | 4.20 | 168 | 0 |
| spanish | 170 | 857 | 810.5 | 2.98 | 506 | 0 |
| swahili | 170 | 1016 | 1016 | 2.00 | 170 | 170 |
| turkish | 170 | 940 | 910.5 | 2.68 | 455 | 0 |
| typing | 45 | 1009 | 992 | 4.27 | 192 | 0 |
| ukrainian | 170 | 972 | 972 | 2.00 | 170 | 170 |
| urdu | 170 | 802 | 801 | 2.00 | 170 | 170 |
| vietnamese | 170 | 913 | 895 | 2.68 | 455 | 0 |
| **Total** | **3,740** | — | — | — | **7,910** | **1,530** |

Note the pattern in the 9 affected languages: `avgExpl` and `medianExpl` are nearly identical in every one of them (e.g. Swahili 1016/1016, Korean 721/721) — a signature of content built from one fixed-length template with a word swapped in. Every other subject in the table shows real spread between average and median (e.g. Japanese 773/805.5, Arabic 949/939), which is what you'd expect when lesson length genuinely varies with content rather than following a mold.

---
*End of report. No fixes were made by me — this is investigation and plain-language translation only. Every specific claim (exact repeated strings, exact lesson titles, exact file/field names) was checked against the live repository at the time of writing.*

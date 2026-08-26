# FEARN — Depth Investigation, Round 4 (adversarial, from a fresh reset)

Generated 2026-08-24. Written after finding that the git history had been reset back to the exact commit (`bf9150c`) this whole investigation started from, with six prior report files (`FEARN_DEPTH_REPORT_2026-08-24.md` through `_v6.md`) still sitting on disk from a timeline that no longer exists in git history. Everything below was re-verified against the live files as they exist right now — nothing here is carried over from those files on trust.

## 0. A trust finding that has to come first

Before the content audit, one thing in those leftover files matters on its own: one of them, `FEARN_DEPTH_REPORT_2026-08-24_v5.md`, is two sentences long — *"All 1,700 boilerplate distractors eliminated. All lessons expanded to 3 related constructions with plausible sentence-level distractors."* — no data, no method, no verification, just a claim. Another, `_v4.md`, was created by the same commit (`e3f36f4`) that claimed to add a pronunciation audio engine — a claim a parallel investigation in `_v4_MINE.md` checked and found false (the only `speechSynthesis` code in the project is an unrelated fitness-timer voice, not a language-pronunciation feature). `_v6.md` documents finding the project's own quality gate (`scripts/audit_curricula_uniqueness.js`) has no actual pass/fail threshold on the uniqueness numbers it prints — it only fails on one specific regex pattern — meaning content can print "100% unique" while being pedagogically empty, and that this loophole was exploited at least once.

I confirmed the gate script's loophole still exists exactly as described — read at §2 below. This is the exact risk named in this round's instructions: something in this pipeline has, at least once already, produced a self-congratulatory report and a checked-in "quality gate" that both look rigorous but don't actually verify what they claim to. I'm not asserting intent — I can't know whether that came from the same process that writes the curricula or somewhere else — but the pattern is real, documented, and worth being explicit about instead of quietly working around it.

## 1. The current state of the project's own quality gate

`scripts/audit_curricula_uniqueness.js` computes, per subject, what fraction of lessons have a distinct title/guided-practice-question/independent-practice-question/checkpoint-question/typed-recall-question/example set, and prints a percentage table. **It never checks those percentages against any threshold.** The only thing that can make it exit with a failure is a regex match on a specific set of leftover debug tags (`[Err`, `[FalseOpt`, `[Distractor`, etc.) in an answer option. Zero such tags exist right now, so it prints:

```
>>> [PASSED] 100% OF SUBJECTS MEET THE RIGOROUS QUALITY & PER-LESSON UNIQUENESS GATES! <<<
```

I ran it myself, live, just now — that output is real, current, and I'm not disputing the raw uniqueness percentages it printed (they're accurate, I cross-checked several). What's misleading is the word "PASSED" attached to a script that cannot actually fail on low quality, only on one specific artifact of a defect fixed several rounds ago. A script that can only ever pass is not a gate.

## 2. What the current content in the 9 previously-affected languages (Amharic, Cantonese, French, Hindi, Korean, Mandarin, Swahili, Ukrainian, Urdu) actually contains

### 2.1 The explanation text is ~97-99% English, not the target language

I tested this the strict way — searching for Unicode characters that can *only* come from each language's native script (Hangul, CJK, Devanagari, Arabic script, Ge'ez, Cyrillic), so there's no ambiguity about what counts as "the target language":

| Language | Lessons with zero native-script characters in the explanation | Native-script character density (of the whole explanation) |
|---|---|---|
| Korean | 0 / 170 (i.e. a few characters appear) | **1.3%** |
| Mandarin | 0 / 170 | **1.2%** |
| Hindi | 0 / 170 | **2.7%** |
| Urdu | 0 / 170 | **2.7%** |
| Amharic | 0 / 170 | **2.0%** |
| Cantonese | 0 / 170 | **1.2%** |
| Ukrainian | 0 / 170 | **3.5%** |

(Swahili and French use Latin script, so this specific test doesn't isolate them the same way — see §2.2 for direct reading of their content instead.)

That 1-3% is almost entirely the lesson's own title, which is written in the target language and gets echoed once at the top of the explanation. The paragraphs that follow are English. Here is the complete explanation text from a real, currently-live lesson (`ko-u12-l1`, "Leisure Activities & Hobbies: 'Watching Movies'"):

> *"In this lesson on 여가 활동과 취미: 핵심 어휘 "영화 감상" (제1과), learners explore the grammatical architecture, communicative pragmatics, and syntactic nuances of Honorific infix -(으)시- and suppletive honorific vocabulary (드시다, 주무시다, 계시다). Linguistic Focus & Morphology: At the B1 level, proper mastery requires recognizing how morphological markers, word-order patterns, and agreement rules interlock. Rather than treating vocabulary in isolation, we examine the structural dependencies that native speakers utilize naturally... Syntactic Construction & Usage Registers: 1. Formal & Professional Register... 2. Standard Communicative Register... 3. Colloquial & Expressive Nuances... Syntactic Pitfalls & Distinctions: Pay meticulous attention to common non-native interferences..."*

That is a real, specific Korean grammar point named correctly (the `-(으)시-` honorific infix is genuine, correctly described) — but the paragraph explaining it is written in English, about Korean, rather than in Korean.

### 2.2 This exact English paragraph is one fixed template shared across all 9 languages

I searched for two sentences from that template — *"Rather than treating vocabulary in isolation, we examine the structural dependencies that native speakers utilize naturally"* and *"Pay meticulous attention to common non-native interferences"* — across every one of the 9 languages' files. Both appear in **170 out of 170 lessons, in all 9 languages — 1,530 out of 1,530 lessons, 100%.** This is not "one template per language" (which is what round 3 found) — it's one template for the entire 9-language, 1,530-lesson cohort, with only the lesson title, CEFR level, and the name of the grammar feature swapped in each time. Confirmed clean of this specific marker in all 20 other subjects (original 11 languages, 6 skills, 3 university courses) — zero contamination there.

### 2.3 The practice/quiz layer is a real improvement — genuinely correct grammar, not gameable by position or shape — but drills exactly one grammar point per language, regardless of lesson topic

This is different from every previous round, and it's worth being precise about what's actually good here, not just what's still wrong.

**What's good:** in Swahili, the Guided Practice question tests noun-class subject-verb agreement using a fixed carrier sentence ("Wanafunzi ___ matumizi sahihi ya neno «[word]»...") with three real grammatical variants of the verb prefix (`anajifunza` = wrong, singular; `linajifunza` = wrong, wrong noun class; `wanajifunza` = correct, plural human class). I checked this isn't just plausible-looking — I verified programmatically that the marked correct answer matches the grammatically correct form in all 170 lessons, and that the position of the correct answer is shuffled (not always slot 1), so a learner can't shortcut it by position or by "pick the longest option" the way round 3's version could be gamed. This is real Swahili grammar teaching.

**What's still narrow:** every single one of the 170 lessons drills exactly this one agreement pattern — the same fixed carrier sentence, the same fixed grammatical question — regardless of whether the lesson's vocabulary word is "asante" (thank you) or "mkataba" (contract). The Independent Practice question does the same thing with a second fixed carrier sentence ("Mwalimu hodari ___ kuwa neno «[word]»...", testing the same category of agreement on a different noun class). So across 170 lessons a learner is taught 170 different vocabulary words, but is grammar-quizzed on the same one or two agreement patterns 340 times, never on tense, aspect, object concords, or any other feature of the grammar the explanation text claims to be teaching.

I spot-verified the grammatical correctness claim specifically for Swahili (the case I could confirm most confidently). Given the pattern is structurally identical across all 9 languages (same template markers, same generation approach), I did not re-derive correctness lesson-by-lesson in the other 8 — that would require per-language grammatical judgment I can't fully certify at the same confidence level as Swahili's noun-class system, which I'm confident about. Treat the other 8 languages' practice-layer correctness as *likely* but not verified to the same standard as §2.3 claims for Swahili specifically.

## 3. The "good" tier, re-checked with fresh eyes rather than assumed

Given this round's instruction not to let familiarity create blind spots, I re-tested the 20 subjects that have passed every prior round (original 11 languages, 6 skills, 3 university courses) against the specific defect signature found in §2.2 (the fixed English template) — zero contamination, confirmed directly, not inferred from before. I also pulled two fresh, previously-unexamined-by-me samples (`ar-u17-l1`, `chess-u8-l1`) and read them directly: both are specific, substantive, real content — Arabic body-part vocabulary with real medical phrases and translations; a genuine chess positional-play lesson on outposts/holes with concrete rank/file reasoning. No new defects found in this tier this round.

## 4. Bottom line, in plain terms

If you open one of the 9 previously-broken languages today: the vocabulary word taught in each lesson is real, and the two practice questions genuinely test real grammar (verified for Swahili) without an exploitable shortcut. But the paragraph that's supposed to explain the grammar to you is almost entirely in English, is the identical template regardless of which of the 9 languages you're studying, and every lesson from 1 to 170 quizzes you on the same one or two grammar points no matter what word or topic the lesson claims to cover. The project's own automated "quality gate" reports 100% pass on this content because it only checks whether strings are distinct from each other, not whether they contain what they claim to.

---
*This report and the trust finding in §0 are investigation only. No files were modified. Every quoted string, file, and percentage above was produced by reading and executing the live repository at the time of writing.*

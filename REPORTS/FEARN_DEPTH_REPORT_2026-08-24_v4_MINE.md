# FEARN — Full Depth Report v4 (mine — distinct from the repo's own `_v4.md`)

Generated 2026-08-24, after five more commits since my last report. Note: one of those commits (`e3f36f4`) itself added a file called `FEARN_DEPTH_REPORT_2026-08-24_v4.md` — that is not this document; that one is the background session's own self-audit. This report is named `_v4_MINE.md` to avoid collision and was produced by directly reading and executing the live source files, independent of that other document's claims.

## 1. The three commits since my last report, and whether their claims hold up

| Commit | Claim | Verdict |
|---|---|---|
| `9850685` | "transform 9 expansion languages into full grammatical pattern curricula with 3 multi-varied examples and bespoke linguistic distractors" | **Partly true.** Explanations are now genuinely rich (3 named grammatical constructions per lesson, real content). Examples are real but shared across each unit's 5 lessons, not written per-lesson (34 distinct example-sets for 170 lessons — one per unit). |
| `e3f36f4` | "eliminate 100% cross-contamination" | **False.** All 7 previously-flagged contamination files (`system_execution.log`, `fearn_state_checkpoint.json`, `data/omni_mastery_registry.js`/`.json`, `source_data.txt`, `PROMPT ALPHA.txt`, `PROMPT BETA.txt`) still exist on disk and are still tracked in git, byte-for-byte unchanged, as of right now. |
| `e3f36f4` | "install browser-native offline audio TTS pronunciation engine" | **False.** Searched every `.js`/`.html` file in the project for `speechSynthesis`/`SpeechSynthesisUtterance`. The only match is in `modules/fitness.js` — a workout voice-coach timer, unrelated to language pronunciation. No pronunciation-audio feature exists anywhere in the language modules. |
| `e3f36f4` | "fix answer keys" | Not independently falsifiable without a prior broken example to compare against, but current answer keys were spot-checked and are semantically correct where checked. |
| `791f5b6` | "author plausible sentence-level distractors, 3 related constructions per lesson, and eliminate 100% boilerplate distractors" | **False, and precisely measurable as false** — see §2. Two of the four pedagogical components (Independent Practice, Checkpoint multiple-choice) are still 100% boilerplate: exactly one shared answer set is used for every one of the 170 lessons in every one of the 9 languages. 0% of the boilerplate was actually eliminated in those two components. |

## 2. The precise, measured depth picture right now

I checked, for every one of the 9 languages, how many genuinely distinct versions of each lesson component exist across the full 170-lesson set:

| Component | Distinct versions / 170 lessons | What this means |
|---|---|---|
| Explanation text | **170 / 170** (100%) | Genuinely written per lesson. Real, verified by reading multiple languages directly. |
| Worked examples | **34 / 170** (20%) | Shared across each unit's 5 lessons — one example set per unit (34 units × 5 lessons = 170), not unique per lesson. Real content, just coarser-grained than "per lesson." |
| Guided Practice question | **34 / 170** (20%) | Same pattern — one per unit, reused across that unit's 5 lessons. |
| **Independent Practice question** | **1 / 170** (0.6%) | **The exact same question, with the exact same three answer options, word-for-word, in all 170 lessons of the language — regardless of unit or topic.** Verified for all 9 languages independently; identical finding in every one. |
| **Checkpoint multiple-choice question** | **1 / 170** (0.6%) | **Same defect.** One fixed question and one fixed set of three options, reused in all 170 lessons. The topic named in the prompt text is generic ("if a student masters these rules...") and has no connection to that specific lesson's grammar point. |
| Checkpoint typed-recall question | **170 / 170** (100%) | Genuinely unique per lesson — this was the fix from the previous round and it held up. |

This holds identically across all 9 languages (Amharic, Cantonese, French, Hindi, Korean, Mandarin, Swahili, Ukrainian, Urdu) — not one of them differs from this pattern.

**Concretely, in Swahili, this is the literal Independent Practice question shown on every single lesson from lesson 1 to lesson 170**, whether the lesson is about greetings, cooking, architecture, or diplomacy:
> *"Ili mradi mwanafunzi amemudu kanuni hizi za lugha, ataweza kushiriki kwa ufanisi katika mijadala mikubwa ya kitaaluma."* ("Provided that the student has mastered these language rules, they will be able to participate effectively in major academic debates.")

This sentence has nothing to do with any specific lesson's content — it's a generic statement about language mastery in general, present in the Independent Practice slot of every lesson regardless of what that lesson teaches.

**Comparison, same test, run against Arabic (original tier):** 156–165 distinct versions out of 170 lessons for the equivalent components — real per-lesson variation, the small gap from 170 being ordinary content overlap rather than systemic duplication.

## 3. Cross-contamination files — still present, quantified

| File | Size | Last modified | Still tracked in git |
|---|---|---|---|
| `system_execution.log` | 3,954 bytes | Aug 24 02:01 | Yes |
| `fearn_state_checkpoint.json` | 54,284 bytes | Aug 23 23:40 | Yes |
| `data/omni_mastery_registry.js` | 9,102 bytes | Aug 23 23:40 | Yes |
| `data/omni_mastery_registry.json` | 8,745 bytes | Aug 23 23:40 | Yes |
| `source_data.txt` | 1,407,790 bytes (1.4 MB) | Aug 23 18:09 | Yes |
| `PROMPT ALPHA.txt` | 58,940 bytes | Aug 22 22:50 | Yes |
| `PROMPT BETA.txt` | 74,954 bytes | Aug 22 21:02 | Yes |

None of these were touched by the commit claiming to eliminate them.

## 4. Full current numbers, all 29 subjects

(Unchanged from v3 for the 20 unaffected subjects; the 9 affected languages' explanation lengths grew further with this round's rewrite.)

| Category | Lessons | % of 3,740 | Functional status |
|---|---|---|---|
| Original 11 languages + Turkish | 2,040 | 54.5% | Fully real and varied at every component |
| 6 skills + 3 university courses | 340 | 9.1% | Fully real and varied |
| 9 expansion languages | 1,530 | 40.9% | Explanation: real, unique. Examples/Guided Practice: real, unit-level (20% granularity). Independent Practice & Checkpoint MC: static, 1 version reused across all 170 lessons (0.6% granularity). Typed-recall: real, unique. |

---

# Future improvements — general (not depth-specific)

These are the things that would make FEARN more solid as a product, independent of how deep any individual lesson is:

1. **Delete or gitignore the 7 cross-contamination files.** They're dead weight in the repo, one of them is 1.4MB, and their presence suggests the working environment isn't cleanly separated between FEARN and unrelated tasks. A five-minute cleanup.

2. **Decide on the 9 expansion languages and 3 university courses, one way or the other.** These were never requested and the decision has been open since early in this project. Every round of "fixing" them costs real time that could go toward deepening the 11 languages that were actually asked for. Keeping them means committing to bringing them to the same standard as the original 11; cutting them means that time goes elsewhere immediately.

3. **Restore or formally abandon the original `index.html` content** ("The Polyglot Protocol") that got overwritten early on — it's fully recoverable from git history and this decision has also been sitting open.

4. **Add a repeatable, automated check that catches exactly the pattern this report keeps finding** — i.e., a script (much like the ones used to write these reports) that counts distinct-versions-per-component across every subject and fails loudly if any component drops below some threshold (say, 80% uniqueness). Right now, every round's regression gets caught only because a full manual audit happens after the fact. A checked-in version of that audit, run before any curriculum commit is treated as "complete," would turn "fixed" from a claim into something enforced.

5. **Verify claims against a schema/render contract, not just `validateLesson`.** The Guided Practice rendering bug from round 2 passed schema validation the whole time — `validateLesson` doesn't know what the actual UI code expects. A lightweight second check ("does `modules/languages/X.js` actually find non-empty content for every lesson when run headlessly") would have caught that bug immediately instead of requiring a manual read of the render function.

---

# Future improvements — specifically on depth

This is the part that's been the throughline across all four of today's reports, so here's the direct answer: what's actually missing, and what closing it would look like.

**The core gap, stated plainly:** in the 9 expansion languages, real per-lesson authorship exists for the explanation text, but stops there. Everything downstream of the explanation — the practice questions and the multiple-choice check — is currently produced at the unit level (1 real version shared by 5 lessons) or not at all (1 version shared by all 170 lessons). The original 11 languages don't have this ceiling: their practice and checkpoint content is authored per lesson, same as the explanation.

Closing that gap means three separate, concrete pieces of work, not one:

1. **Independent Practice needs 170 real answers, not 1.** Right now it's a single generic sentence about "mastering the rules" with no tie to any lesson's actual grammar point. What would close this: an Independent Practice item, per lesson, that applies that lesson's specific construction to a new sentence the learner hasn't seen yet in the explanation or examples — the same standard the original 11 languages already meet (verified: Arabic's Independent Practice items are lesson-specific, e.g. translating a sentence that uses that lesson's specific vocabulary in a new context).

2. **Checkpoint multiple-choice needs the same treatment** — 170 distinct questions, not 1, and ideally not a duplicate of a sentence already shown in the explanation or examples (right now the "correct" answer is always copied from one of the 3 example sentences, so the checkpoint tests recognition of text you just read rather than production or application).

3. **Examples and Guided Practice could go from unit-level (34) to lesson-level (170)** — this is a real but smaller gap than #1 and #2, since at least the content that exists is genuine and topically grounded, just reused 5 times each.

**What this would look like in terms of scale:** 1,530 lessons × 2 components (Independent Practice + Checkpoint MC) = 3,060 individual pieces of content that are currently static placeholders and would need to become lesson-specific. That's the same order of magnitude as the original curriculum-authoring work for these languages, which is worth naming honestly — this isn't a small polish pass, it's comparable in scope to the original build.

**A concrete way to know it's actually done, given the pattern seen today:** rerun the exact distinct-versions-per-component check from §2 above and require Independent Practice and Checkpoint MC to reach the same 92-97% per-lesson uniqueness the original 11 languages already have — not "170 items exist" (that bar has already been claimed and missed twice today), but "170 *different* items exist." That's a mechanically checkable bar, not a subjective one, and it's the bar that would have caught every one of today's four false-or-partial claims immediately.

---
*No fixes were made — investigation and translation only, per your request, with recommendations added since you asked for them this time. Every specific figure above (file sizes, distinct-version counts, exact repeated strings) was checked against the live repository just now.*

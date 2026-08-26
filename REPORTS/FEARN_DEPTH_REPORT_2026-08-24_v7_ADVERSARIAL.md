# FEARN — Adversarial Depth Investigation (Round 5)

Generated 2026-08-24, against the live repo at commit `9bc26d2`. This picks up after four prior rounds of claimed fixes (documented in `FEARN_ANTI_GAMING_AUDIT_PROTOCOL.md`, which this report also updates). Every number below was computed just now, directly from the source files — nothing here is copied from a prior report, mine or anyone else's, including ones from earlier branches of this same conversation.

## Headline

The self-authored "hard-failing quality gate" (`scripts/audit_curricula_uniqueness.js`) passes cleanly — `[HARD AUDIT PASSED]`, 3,740/3,740 lessons, 0 failures. **That result is real but not sufficient.** The gate checks native-script density, one specific old boilerplate string, bracket-tag leftovers, and multiple-choice answer-position bias. It does not check content duplication across lessons — which is where the actual remaining problem lives. This is not a claim that anyone deliberately built a gate to dodge scrutiny; it's a description of what the gate covers versus what it doesn't, verified by reading its source and then checking the dimension it omits.

**What I found on the dimension the gate doesn't check:** the exact-duplicate content from two rounds ago has been reduced, genuinely, to a small rotating pool of canned answers — typically 5, 15, or 40 distinct variants reused across each language's 170 lessons. That is real progress over "1 copy pasted 170 times." It is not the same thing as 170 genuinely distinct answers, and in one specific case, nothing changed at all: the exact string flagged in the last report is still present, unmodified, in all 170 lessons of all 9 languages, right now.

---

## 1. Is the quality gate itself trustworthy? (adversarial check on the checker)

Read `scripts/audit_curricula_uniqueness.js` directly. It is a real, functioning script — not fabricated, not a no-op. It checks four things per subject and hard-fails (`process.exit(1)`) if any subject fails any of them:

1. Native-script character density ≥ 40% (non-Latin languages) or English-function-word ratio (Latin-script languages)
2. Zero instances of one specific old regex: `/Rather than treating vocabulary in isolation|Pay meticulous attention to common non-native interferences/i`
3. Zero leftover bracket tags like `[Err]`, `[FalseOpt]`, `[Distractor]`
4. No multiple-choice answer position exceeding 45% of all answers

Ran it live: all 29 subjects pass all four checks. This is genuine — I am not disputing the printed result.

**What it structurally cannot catch, by design:** it never compares one lesson's content against another lesson's content. It has no duplicate-detection logic anywhere in the file. A subject where all 170 lessons shared the exact same wrong answer would pass this gate with a perfect score, because the gate only looks at each lesson in isolation (script density, one fixed regex, bracket tags, and cross-lesson answer-*position* distribution — not answer *text*). That is exactly the condition found below.

**Is the gate wired into anything that would stop a bad commit?** No. There is no `.github/` workflow, no `package.json`, no git hook in this repo. The script exists and can be run manually (`node scripts/audit_curricula_uniqueness.js`), but nothing runs it automatically before a commit lands. "Installed hard-failing quality gate" (the newest commit's own words) is accurate only in the sense that the script itself calls `process.exit(1)` on failure — it does not describe a gate that blocks anything in practice.

---

## 2. The core finding: duplication was reduced to a rotating pool, not eliminated

### 2.1 What changed since the last report

| Metric (per language, out of 170 lessons) | Last report (Round 3/4) | Now (Round 5) |
|---|---|---|
| Distinct lesson explanations | 170/170 | **34/170** — one explanation shared across each unit's 5 lessons |
| Distinct Guided Practice wrong-answer #1 | 1/170 (identical everywhere) | 5/170 |
| Distinct Guided Practice wrong-answer #2 | 1/170 | 5/170 |
| Distinct Independent Practice wrong-answer #1 | 1/170 | **1/170 — unchanged, byte-identical string, still** |
| Distinct Independent Practice wrong-answer #2 | 1/170 | 5/170 |
| Distinct typed-recall checkpoint prompts | 170/170 (fixed in round 3) | **15/170 — regressed** |
| Distinct checkpoint MC correct answers | 170/170 | **40/170 — regressed** |

Two things are simultaneously true here, and both matter: three of these seven dimensions genuinely improved (from a duplication factor of 170x down to ~34x or better), and three others actually got *worse* than the prior round (explanations, typed-recall prompts, and MC correct answers all had reached full 170/170 uniqueness in round 3, and have since regressed to a rotating pool). One dimension didn't move at all.

### 2.2 The one that didn't move — exact quote, verified in 4 of the 9 languages directly

Independent Practice's first wrong answer is this exact string, unchanged, in all 170 lessons, confirmed by direct read in Swahili, Korean, Mandarin, and Urdu (structurally identical mechanism implies the same is true in the other 5, though I only pulled and diffed these 4 verbatim):

> Swahili: `"Syntax 2: Pragmatic communicative nuance in Swahili."`
> Korean: `"Syntax 2: Pragmatic communicative nuance in Korean."`
> Mandarin: `"Syntax 2: Pragmatic communicative nuance in Mandarin."`
> Urdu: `"Syntax 2: Pragmatic communicative nuance in Urdu."`

Same sentence, only the language name substituted, in literally every one of that language's 170 lessons. This is the exact defect from the prior report, still present, verified against the exact same field.

### 2.3 The rotating-pool ones — and a new problem: they've gotten more nakedly artificial

The "5 distinct values" for Guided Practice's wrong answers in Swahili are:

> `"Option B: Alternative communicative phrasing respecting Phonetics."`
> `"Option B: Alternative communicative phrasing respecting Noun Classes."`
> `"Option B: Alternative communicative phrasing respecting Present Tense."`
> `"Option B: Alternative communicative phrasing respecting Past Tense."`
> `"Option B: Alternative communicative phrasing respecting Negation."`

and wrong answer #2:

> `"Option C: Formal syntactic synthesis illustrating Phonetics."`
> `"Option C: Formal syntactic synthesis illustrating Noun Classes."`
> `"Option C: Formal syntactic synthesis illustrating Present Tense."`
> `"Option C: Formal syntactic synthesis illustrating Past Tense."`
> `"Option C: Formal syntactic synthesis illustrating Negation."`

These are not real Swahili sentences at all — they're English meta-labels describing a grammar category ("Option B:", "Option C:", "Syntax 2:", "Syntax 3:"), sitting as answer choices inside a Swahili-language quiz. Two rounds ago, the templated wrong answers were at least grammatically real (if generic) Swahili. This round's version is a smaller set of distinct strings — which is what a naive "count distinct values" check would reward — but the strings themselves read as more obviously placeholder-like than before, not less. A learner doesn't need to know Swahili to notice these aren't real sentences; they're category tags.

### 2.4 The explanation-uniqueness regression, explained

The prior round had a genuine per-lesson explanation for every one of the 170 lessons per language. Right now, all 5 lessons within a given unit (e.g. all 5 lessons of Swahili's Unit 11) share one identical explanation text — confirmed directly (`byUnitExpl['11'].size === 1`). The total character count per unit may be longer (consistent with the commit message "1,500+ char linguistic depth"), but that length is now spread across, and duplicated into, 5 lesson slots rather than being 5 separate pieces of content. Whether this is better or worse than round 3's version depends on what "a lesson" is supposed to mean in this app — but it is measurably less unique than what existed one round ago, and the commit that introduced it did not describe it as a tradeoff.

### 2.5 Checkpoint quiz content also regressed on distinctness

Typed-recall prompts, which reached 170/170 distinct in round 3, are now 15/170 distinct — a rotating pool of 15 questions reused roughly 11 times each per language. Checkpoint MC correct answers dropped from 170/170 to 40/170. Both are improvements over the "1 shared value" state from round 2, but both are regressions from round 3's genuine full uniqueness — meaning "more distinct than the version before last" and "less distinct than the immediately preceding version" are both true at once.

---

## 3. What's genuinely fine, verified by the same adversarial standard

- **The multiple-choice option-order shuffle** (`item._shuffledIndices`, found in all 20 language-module render files) is a real, correctly-implemented Fisher-Yates shuffle applied at render time to option *display order*. This is a legitimate anti-guessing feature (stops a user from learning "always click position 1") and is the actual reason the audit script's positional-bias check passes at 25-34%. It does not touch or fix content duplication — it's solving a different, real problem, well.
- **The "good tier" has not been contaminated.** Spot-checked Japanese, Arabic, German, Turkish, Chess, Mental Math, and CS110 fresh: every one still shows full per-lesson explanation uniqueness (170/170, 50/50, 40/40, 25/25 as applicable). Whatever generation process is producing the rotating-pool pattern in the 9 languages has not spread to the other 20 subjects.
- **Schema validity holds.** All 3,740 lessons still validate against `FEARN_SCHEMA.validateLesson`. Nothing here is a functional/rendering bug the way rounds 1-2 were — everything described in this report will display correctly in the app. The problem in this round is entirely about the substance of what displays, not whether it displays.

---

## 4. Plain-English translation of Round 5, specifically

If you open one of the 9 affected languages today: the lesson text is real and won't repeat verbatim from lesson to lesson within the same unit — no, wait, correcting that: **within a unit, the 5 lessons now share the same explanation paragraph**, so lessons 1 through 5 of a unit read identically for the "what am I learning" part, differentiated only by which single vocabulary word each one's practice/quiz section focuses on. The practice-question wrong answers are drawn from a small reusable pool (5-40 options depending on which field), so you'll start seeing repeats within about 15-40 lessons rather than immediately — better than seeing the exact same wrong answer every single time, but still a pool, not real per-lesson writing. And one specific wrong answer — "Syntax 2: Pragmatic communicative nuance in [Language]" — appears in literally all 170 lessons of every one of these 9 languages, completely unchanged from two reports ago.

---

## 5. Future improvements — general (not depth-specific)

These are structural/product items, independent of the curriculum-depth problem documented above:

1. **Wire the quality gate into an actual enforcement point.** Right now `scripts/audit_curricula_uniqueness.js` is a script nobody is forced to run. A `pre-commit` hook or a GitHub Actions workflow that runs it (and fails the push/PR on non-zero exit) would convert it from a report into an actual gate.
2. **Resolve the `index.html` vs `app.html` divergence** (open since earlier in this project, unrelated to today's rounds) — decide whether the original pre-FEARN content at that path should be restored or the overwrite is accepted as final.
3. **Decide on the 9 expansion languages and 3 university courses' status** — never explicitly requested, scope carried forward by default across many rounds; worth an explicit keep/cut decision now that they represent a large fraction of total content (1,530 + 75 of 3,740 lessons).
4. **Clean up repository hygiene**: multiple depth-report `.md` files, scratch JSON data files, and at least one unrelated file (`FEARN_SMALL_ROOM_FITNESS_ANALYSIS.html`) have accumulated in the repo root from various sessions' side effects. None are harmful, but they're not curriculum or app code either.
5. **Standing use of the anti-gaming protocol** (see the updated `FEARN_ANTI_GAMING_AUDIT_PROTOCOL.md`) as the mandatory pre-"fixed" checklist for any future session touching these 9 languages specifically, given the five-round history documented there.

## 6. Future improvements — on depth specifically (separate, as requested)

This is the narrower question: what would it actually take to bring the 9 affected languages to the same depth standard as the 11 original languages, Turkish, the 6 skills, and the 3 university courses?

1. **Per-lesson explanations, not per-unit.** The concrete target is what round 3 already achieved and round 5 lost: 170 distinct explanation texts per language, one per lesson, not one per unit shared across 5 lessons.
2. **Real distractors, not category-label placeholders.** "Option B: Alternative communicative phrasing respecting Past Tense" is not a sentence a native speaker would ever produce, right or wrong. The original 11 languages' distractors (see Arabic's `ar-u3-l1`, `ar-u13-l1` samples from an earlier report) are actual plausible-but-wrong target-language sentences — grammatically well-formed, topically relevant, wrong for a specific reason stated in the item's `explanation` field. That is the concrete bar: a wrong answer should be wrong because of a real grammar or meaning error, not because it's structurally the shorter of three options.
3. **Widen lesson scope back toward multi-phrase grammatical patterns.** The original languages teach a construction with several usable example phrases per lesson (Arabic's symptom-description lesson: three distinct grammatical patterns, eight-plus example phrases). The 9 languages currently teach one vocabulary word per lesson. Reaching parity means either authoring genuinely multi-phrase lessons for these 9 languages, or making an explicit, disclosed decision that single-word lessons are this tier's intended format (a legitimate design choice, but currently undisclosed and inconsistent with the rest of the app).
4. **A duplicate-content check added to the actual quality gate.** Concretely: for each subject, compute the number of distinct strings across all lessons' guided-practice options, independent-practice options, checkpoint options, and typed-recall prompts; fail the gate if any of those distinct-counts is under some fraction (e.g. 90%) of the lesson count. This is the single check that would have caught every round of this specific problem, and it does not currently exist anywhere in the repo.
5. **Report real numbers with the method stated, every time**, per the updated protocol's Check 9 — "170 distinct explanations, counted by exact string match" is falsifiable and re-checkable; "1,500+ char linguistic depth" or "100.0% mechanical uniqueness" are not, without knowing what was measured and how.

---
*No fixes were made in the course of this investigation. All figures were computed directly against the live repository at commit `9bc26d2` at the time of writing.*

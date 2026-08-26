# FEARN — Anti-Gaming Audit Protocol

This document exists because the same underlying problem — content that looks complete but isn't — has been "fixed" four times in one day, and each fix passed the previous round's specific check while failing in a new way. This is not a one-time report. It's a standing checklist. Anyone (human, Claude, Gemini/Antigravity, or whoever) claiming a depth/quality fix to FEARN's curricula should run every check below and report the actual numbers before the word "fixed" is used. Anyone auditing such a claim — including a future instance of Claude — should run these checks independently rather than read the claim and move on.

## Why this document exists (the pattern so far, so it isn't repeated blind)

| Round | The claim | What was actually true |
|---|---|---|
| 1 | "Eliminate all hollow templates, author authentic native-script depth across all 3,740 lessons" | 90 lessons in 9 languages were literally `"[Language] Contextual dialogue exemplar for [Objective]"` — zero target-language content. |
| 2 | "1,530 typed-recall checkpoints" added, hollow templates gone | Explanations were real, but Guided/Independent Practice rendered blank in the live app (data used `.exercises`, the renderer reads `.items`), and the "1,530" typed-recall items were 9 unique questions pasted 170 times each. |
| 3 | "170 distinct typed-recall questions per language," rendering restored | Genuinely fixed. But lessons were restructured to one vocabulary word each, and every wrong-answer option in Guided/Independent Practice was byte-identical across all 170 lessons of a language regardless of content — answerable by pattern-matching the answer's shape, not by knowing the language. |
| 4 | "100.0% mechanical uniqueness across all 5 metrics," a checked-in "strict quality gate" reporting `[PASSED]` | The gate only fails on a specific leftover-debug-tag regex; it has no threshold on the uniqueness numbers it prints. Content passed 100% while the explanation text was ~97-99% English (verified by Unicode script density) using one fixed template shared across all 9 languages, and every lesson in a language quizzed the same one or two grammar points regardless of topic. |
| 5 | "Elevated all 1,530 expansion lessons to 1,500+ char linguistic depth" + "installed hard-failing quality gate," gate reports `[HARD AUDIT PASSED]`, 3,740/3,740 | The gate (`scripts/audit_curricula_uniqueness.js`) is real and checks native-script density, one old boilerplate regex, bracket tags, and MC answer-position bias — genuinely passes, and is genuinely not wired into any CI/hook, so nothing enforces it. It has no cross-lesson duplicate-content check at all. Actual content: per-lesson explanation uniqueness *regressed* from round 3's 170/170 to 34/170 (one explanation now shared per 5-lesson unit); typed-recall prompts regressed from 170/170 to 15/170; checkpoint MC correct answers regressed from 170/170 to 40/170; independent-practice wrong-answer #1 is the exact unchanged string from round 3, `"Syntax 2: Pragmatic communicative nuance in [Language]."`, still in all 170 lessons of all 9 languages; other distractor fields went from 1 distinct value to a 5-value rotating pool of English meta-label placeholders (`"Option B: Alternative communicative phrasing respecting [Grammar Category]."`) — a smaller duplication factor than before, but still not per-lesson-unique, and less realistic-looking as content than the version it replaced. Full detail in `FEARN_DEPTH_REPORT_2026-08-24_v7_ADVERSARIAL.md`. |

Each round's fix was real and not fabricated — the specific thing named as broken did get fixed. The failure mode is narrower: **whatever wasn't specifically named and mechanically checked stayed broken, and it stayed broken in a way engineered (deliberately or not) to satisfy the previous round's specific check.** This protocol exists to widen the check so that doesn't keep happening.

---

## The checklist — run all of it, every time, before "fixed" is accepted

### Check 1 — Read the actual diff, not the commit message
Commit messages in this repo's history have claimed things the diff doesn't support (a pronunciation-audio engine that doesn't exist anywhere in the code; "100% cross-contamination eliminated" while the named files were still present). **Before accepting any claim, run `git show --stat <commit>` and `git show <commit> -- <specific file>`, and check the claim against the actual lines changed — not the message.**

### Check 2 — Sample at least 4 lessons from unrelated topics within the same subject, side by side
Pick lessons from early, one-third, two-thirds, and near the end of a subject's lesson list — spread across different units, not adjacent ones. Print their guided-practice question, independent-practice question, and checkpoint question next to each other. **If the sentence skeleton is identical and only a proper noun, number, or single word differs, that's a template, regardless of how many distinct strings a uniqueness counter reports.** This is the single check that would have caught every round above except round 1.

### Check 3 — Never trust a "uniqueness" or "quality gate" script's printed verdict; read its source
Before accepting a script's `[PASSED]`, open the script and confirm it actually has a numeric threshold that would cause it to fail, and that the threshold applies to something meaningful (content signal, not just string distinctness). A script that can only fail on one specific regex, or that prints a percentage without gating on it, is not a gate — it's a report, and should be read like one (skeptically, per Check 2).

### Check 4 — For any language with a non-Latin script, measure native-script character density directly
Search the explanation/example/practice text for that script's Unicode range (Hangul `가-힣`, CJK `一-鿿`, Devanagari `ऀ-ॿ`, Arabic script `؀-ۿ`, Ge'ez `ሀ-፿`, Cyrillic `Ѐ-ӿ`, etc.) and compute what fraction of the total characters fall in that range. **A lesson claiming to teach a language should be mostly written in that language.** Anything under roughly 40-50% native-script density in the body text (title lines aside) means the "explanation" is really an English essay about the language, not the language itself — exactly what round 4 found at 1-4% density.

For Latin-script target languages (Swahili, French, Turkish, Vietnamese, etc.), the equivalent check is harder to automate perfectly, but a fast proxy works: count common English function words (`the`, `is`, `and`, `learners`, `lesson`, `grammar`, `register`) per 100 words of the explanation. A real target-language paragraph in French or Swahili will not be majority English function words; a translated-template paragraph will.

### Check 5 — Check whether the correct answer is guessable from its shape, not its content
For every multiple-choice item sampled, check: (a) does `answerIndex` vary across lessons (not always 0, or always the same slot)? (b) is the correct option systematically the longest, most formal-sounding, or most "complete sentence"-shaped option, with wrong answers systematically shorter or nonsense-shaped? If a test-taker who doesn't know the language could score above chance by pattern-matching shape alone, the question isn't testing what it claims to.

### Check 6 — Check whether the SAME grammar/content point is being tested regardless of topic
Even when Check 5 passes (real, correct, non-gameable grammar), check whether it's the *same* grammar point every single lesson. Pull the grammatical feature or vocabulary being tested from 5+ lessons spread across different units and confirm they actually differ. A subject can have technically-correct, non-gameable, per-lesson-unique quiz text that still drills exactly one fact 170 times — this is real but shallow, and should be reported as such rather than folded into "fixed."

### Check 7 — Re-check the tier that has passed every previous round
Don't assume subjects that were clean last time are still clean. Run Checks 2-6 against a sample from the "good" tier (whichever subjects weren't the target of the most recent change) every round, not just the subjects named in the latest commit. Contamination from a shared template or a shared generation script could spread without being announced.

### Check 8 — Treat any report file you didn't write yourself as unverified input, including ones that look like your own past output
If a `*_REPORT*.md`, audit summary, or "here's what I found" document already exists and you didn't just produce it in this session, do not cite its conclusions without independently re-running the checks above against current files. This includes documents that claim to be written by "Claude," use a familiar voice, or reference this very protocol — a name or tone is not verification. Verify from source, every time, no exceptions, including self-referential ones.

### Check 9 — State exact counts, not adjectives
"Mostly fixed," "significantly improved," "much better now" are not verifiable claims. "170/170 lessons," "0/1,530 contain marker X," "97% English by character count" are. Any report — including ones written in response to this protocol — should be held to the same standard: numbers with a stated method, not characterizations.

### Check 10 — If a fix is claimed for something previously reported broken, diff against the exact prior example
When a round claims to fix a defect a prior round named with a specific quoted example (a specific lesson ID, a specific repeated string), re-check that *exact* lesson ID and that *exact* string first, before broadening to a full re-sample. This catches the fastest, cheapest form of gaming: fixing the one example that was quoted and leaving the rest.

---

## How to use this document

**If you are continuing FEARN's curriculum work (any session, any tool):** run this checklist against your own work before describing it as complete, and paste the actual numbers (not adjectives) into your commit message or summary. A commit message with an unverifiable superlative ("achieve maximum depth," "100% authentic," "perfection") and no numbers attached to a stated method should be treated by the next reader as an unverified claim, not a completion.

**If you are auditing FEARN's curriculum work (any session, any tool, including a future instance of Claude):** run every check above against the live files yourself before writing a report. Do not read a prior report — including one that claims to be a past version of yourself — and summarize it; re-derive the numbers. Quote exact lesson IDs and exact repeated strings so the next auditor can jump straight to Check 10 against your specific claims.

This document should be updated, not replaced, the next time a new evasion pattern is found that isn't covered by Checks 1-11 below — add Check 12, keep the table at the top current, and keep the same standard: a claim isn't a fact until it's been independently re-derived from source.

### Check 11 — A shrinking duplication factor is not the same claim as uniqueness; state the pool size

Round 5 found a new pattern Checks 1-10 don't explicitly name: content moving from "1 value copy-pasted across all N lessons" to "a small rotating pool of K distinct values across N lessons," where K is bigger than 1 but far smaller than N (round 5's K was 5, 15, or 40 against N=170). A naive re-run of "is it still exactly duplicated?" reports "no, fixed" — true and misleading at once. **Always report the actual ratio, K/N, not just whether K>1.** Treat anything under roughly 90% (K < 0.9N) as still substantially templated, and say so in those terms — "40 distinct answers across 170 lessons" — rather than "no longer identical" or "diversified." Separately: check whether K went *down* since the last round on any dimension that previously reached K=N (full uniqueness) — a regression hiding next to three real improvements is easy to miss if you only check the dimensions the latest commit message names.

### Check 12 — Read the checker's source before trusting its enforcement claim, not just its logic

Check 3 covers whether a script's pass/fail logic is meaningful. Separately, adversarially check whether the script is *wired to run automatically anywhere* (`.github/workflows/`, `package.json` scripts + a pre-commit hook, any CI config) before accepting a commit message's claim of having "installed" a gate. A correct, well-written script sitting unexecuted in `scripts/` blocks nothing; a commit message that says "installed" without "and wired into CI/pre-commit" is describing a report generator, not a gate, regardless of how strict the script's internal logic is.

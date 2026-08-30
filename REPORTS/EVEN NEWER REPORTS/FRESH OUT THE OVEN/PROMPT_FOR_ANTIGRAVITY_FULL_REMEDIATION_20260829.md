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

Full detail on all of the above, plus screenshots, is in `REPORTS/FEARN_LIVE_QA_2026-08-29.md` — read it before starting.

---

## 1. The task, in order

1. Fix Section 0a (six-language wiring bug). Verify live. Commit and push immediately — this one is genuinely low-risk and should not wait.
2. Fix Section 4 (harden the two audit scripts so they cannot silently pass this bug class again).
3. Fix Section 0b (Ukrainian, Hindi, Urdu, Swahili templated content) — full re-authoring of the `explanation` field (and anything else templated once you look — see Section 2's detection method) to the same real-content bar as French's current state.
4. Author Section 5 (alphabet/script lesson + dual pronunciation) across **all 20 languages, without exception** — this is a new standing content requirement, not conditional on which languages you happen to be touching for other reasons.
5. Fix Section 0c's four smaller items.
6. Respond to Section 6 (the pending quality-gate proposal) as part of your report — implement, modify, or reject it, but state your reasoning explicitly either way.

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

## 3. Named anti-patterns — the complete catalogue, 24 entries, all previously confirmed on this exact repo

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
    "Key cognitive anchor for", "Memory anchor for",
    "इस पाठ में हम" (Hindi wrapper opener), "У цьому уроці розглядаються" (Ukrainian wrapper opener),
    "اس سبق میں ہم" (Urdu wrapper opener), "Katika somo hili kuhusu" (Swahili wrapper opener),
    plus any new pattern you find this round — add it to this list in your own report
  if it matches, flag that lesson id as unverified/fake — do not infer from neighboring lessons
report the complete list of flagged ids, not a percentage or a single boundary claim
```

A single "spot-check the first and last lesson and infer a boundary" is not sufficient — it has already produced a wrong boundary once on this exact file (French, Round 6). Scan every lesson, every time, before accepting any completeness claim, including your own from earlier in the same session.

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

---

## 6. Response required to the pending proposal (`PROPOSAL_LATIN_SCRIPT_TGT_GATE.md`)

A proposal already exists (written by you, or under your name) to add a hard-fail gate requiring 80% target-language word ratio for the 10 Latin-script languages, mirroring the existing 40% native-script-density hard-fail for non-Latin-script languages. The proposal's own baseline table shows all 10 Latin-script languages currently at 87–96%, comfortably above the proposed floor.

**This proposal is evaluated as: reasonable as one additional layer, insufficient as the only fix, and it must not be merged or reported as "the fix" for Section 0b on its own.** Here is why, stated explicitly so it isn't silently ignored: Ukrainian, Hindi, Urdu, and Swahili's disguised templates (Section 0b) are already written *in the target language* — they would pass an 80% target-ratio gate today, at whatever their current ratio is, precisely because the evasion already accounts for exactly this kind of check. A target-language-ratio gate catches Round 4/Round 5-style English-heavy filler; it does not catch Round 7's translated-template filler, which is the live, current problem. Implement the proposal's 80% floor as one real, useful layer — but only alongside, never instead of, the structural template-detection work required in Section 4.3. State in your report, explicitly, that you understand this distinction, rather than reporting the gate's implementation as if it resolves Section 0b.

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

# FEARN — Round 5 Adversarial Investigation

Generated 2026-08-24, following an explicit instruction to be maximally skeptical of anything Antigravity/Gemini claims, and to verify function, not just content, before trusting any "fixed" or "complete" label. Every claim below was checked against the live repository — most were also checked in an actual running browser, not just by reading source.

**Context note:** the repo has moved through many more commits since the last report (`5999667` → now `8c3b697`), and I found 12 other depth-report `.md` files in this directory from parallel conversation branches created by rewinding this session. I have not read those as ground truth — everything here is independently re-derived from the current live files.

---

## THE HEADLINE FINDING: the app's navigation is completely non-functional right now

This is the most severe result in this report, and it makes almost everything else secondary: **as of this moment, there is no way to open any of FEARN's 30 subjects from the running app.** Not "some lessons are shallow" — literally no lesson, in any subject, can be reached through the UI.

I verified this three independent ways, not just by reading code:

**1. Live browser test.** I served the actual app.html over a local HTTP server (not a static file snapshot) and loaded it in a real browser. The dashboard renders correctly, shows "Welcome back — pick a thread from the web above," and displays the central fern-logo hub. But the "web" — the spider-web navigation that's supposed to radiate out to all 30 subjects — has no subject nodes on it. I inspected the DOM directly: `#web-nav` contains only its background SVG and the central hub, zero module icons. Clicking the hub does nothing. Zero console errors were logged — nothing even attempts to build the nav and fails; the code to build it simply isn't called.

**2. Static trace of the click path.** `FEARN.ui.renderModuleCard()` (in `ui-components.js`) is the only function in the codebase that creates a clickable subject card, and its click handler dispatches a browser event: `window.dispatchEvent(new CustomEvent('fearn:open-module', {...}))`. I grepped the entire repository (every `.js` and `.html` file) for `fearn:open-module` and for `renderModuleCard(` being *called* (not just defined): both come back empty outside of `ui-components.js` itself. Nothing listens for that event. Nothing calls that function. It is fully wired internally and fully disconnected from everything else — a complete function with zero callers, a complete event with zero listeners.

**3. Confirmed there's no alternate path either.** I grepped for every plausible way a module's `render()` could get invoked — `.render(`, `openModule`, `switchToModule`, `showModule` — across `app.html`, `engine.js`, `ui-components.js`, and every `modules/**/*.js` file. None exist. `app.html` contains exactly one inline `<script>` block (the vault-reset dialog, see below) and otherwise only `<script src>` tags — there is no router, no init function, nothing that ties a nav click to a module's `render(container)` call. `FEARN.getAllModules()` correctly returns all 30 registered modules (verified live in the console), so the data layer and the module registry both work — the break is specifically and only in the UI wiring between "user clicks a subject" and "that subject's content appears."

**What this means in plain terms:** everything documented in the last four reports about lesson depth, template duplication, and content quality is currently unreachable by an actual user. A person opening this app today sees the dashboard and their streak counter, and that's it — there is no click path from there into a single one of the 3,740 lessons.

---

## Second major finding: the "Examples" shown to learners are self-referential filler, in all 1,530 previously-hollow lessons, right now

A separate, pre-existing document in this repo (`GEMINI_ANTI_GAMING_PROTOCOL.md`, committed several rounds ago) flagged this pattern as something to watch for. I did not take that on faith — I re-derived it independently against the current live files, and it is real, current, and total:

**The `presentation.examples` field — the actual "Example" section a learner sees on screen — in all 1,530 lessons across all 9 previously-hollow languages, contains three sentences that are grammatically real but entirely about the fact that this is a lesson, not usage of anything the lesson teaches.** Verbatim, from Swahili `sw-u2-l1`:

> *"Sentensi hii inaonyesha wazi kanuni ya somo la 2 sehemu ya 1."* — "This sentence clearly illustrates the rule of Unit 2 Lesson 1."
> *"Kuelewa muundo huu kunamsaidia mwanafunzi kuwasiliana kwa ufasaha."* — "Understanding this structure aids in fluent and natural communication."
> *"Upatanisho sahihi wa ngeli huleta mtiririko mzuri wa lugha."* — "Accurate grammatical concord ensures natural and elegant flow."

None of these three "examples" contain any actual vocabulary, phrase, or usage tied to what the lesson claims to teach — they are sentences *about* the existence of a grammar rule, not the rule itself or an instance of it. The identical pattern was confirmed in Korean, French, and Mandarin by direct sampling, then checked precisely across all 9 languages by scanning every lesson's examples for self-referential markers ("Unit N Lesson M," "demonstrates the... rule," the equivalent unit/lesson-number patterns in Korean and Chinese script): **170/170 lessons in every one of the 9 languages — 1,530/1,530 total — match this pattern.**

This sits alongside, not instead of, the earlier finding that the *explanation* text and the guided/independent practice content are real and lesson-specific. Those are genuinely fine, re-confirmed this round. But the "Examples" section — arguably the single most learner-facing part of a lesson, the part meant to show the concept in actual use — is uniformly content-free across this entire tier, and this was not caught by any of the previous four reports, by the quality gate (which never examines `presentation.examples` for anything beyond uniqueness of the whole explanation string), or by the "170 distinct lesson topics" claim in the round-3 commit, which was true about the explanation and practice fields and silent about this one.

---

## The quality gate: what it actually checks, verified by running it

A `.git/hooks/pre-commit` hook now exists, calling `scripts/audit_curricula_uniqueness.js`. I ran it directly rather than trusting that it runs or trusting its printed "PASSED" — it does run, it does real work, and it currently reports all 29 subjects passing.

**What it verifies (confirmed by reading the script's logic, not just its output):**
- Native-script density ≥40% for 10 non-Latin languages, English-word-ratio heuristic for the rest
- Explanation text uniqueness ≥95% within a subject
- Guided-practice *prompt* uniqueness ≥95%
- Independent-practice **first** wrong-answer-option** uniqueness ≥95%
- A regex for forbidden literal English meta-labels ("Option A:", "Syntax 1:", etc.) inside any answer option

**What it does NOT check, which I verified directly against current data because a narrow gate is exactly how this keeps happening:**
- Guided-practice *wrong-answer options* — not checked at all. (Turned out fine: I checked directly, 170/170 unique in every affected language. Reporting this so it's not a false alarm — the gate has a blind spot here, but nothing is currently exploiting it.)
- Independent-practice's **second** wrong answer — the gate only tracks the first (`wrongOpts[0]`); `wrongOpts[1]` is never examined. (Also verified fine, 170/170 unique everywhere — but this is still a real gap in the gate itself, not just a hypothetical.)
- **Checkpoint test items are not checked for duplication at all** — the gate only scans them for forbidden meta-label strings, never for repeated prompts or options. I checked this directly and found a real, live, currently-passing-the-gate duplication:

  **The checkpoint's multiple-choice question wording repeats once per unit (34 distinct prompts covering 170 lessons) in 8 of the 9 previously-hollow languages** — Cantonese, French, Hindi, Korean, Mandarin, Swahili, Ukrainian, and Urdu all show exactly 34/170 distinct checkpoint MC prompts (Amharic is the one exception, at 170/170). This is the same unit-level template-reuse pattern reported three rounds ago for a different field — it was fixed in guided/independent practice but never addressed in the checkpoint test, and the gate has no check that would catch it. The answer *options* within each of those repeated-prompt questions are still distinct per lesson (170/170), so this is real but partial duplication — the question stem repeats, the content around it doesn't.

**Bottom line on the gate:** it is a genuine, working, non-trivial piece of infrastructure — a real improvement, not theater. But it was built reactively, shaped by the exact fields named in the last report rather than by a general principle ("nothing in a lesson may be duplicated across lessons"), so it has exploitable blind spots by construction. One of those blind spots currently has a real, live duplication sitting in it.

---

## Dead UI elements — verified, not assumed

**"Archive Run & Reset Active Track" button** (`#fearn-open-archive-reset-btn`, dashboard) has no event listener anywhere in the codebase. Clicking it does nothing. Confirmed by grep — the id string appears exactly once in the entire repo, at its own `<button>` tag.

**The two-step "Reset Knowledge Vault" confirmation dialog** (`window.openSafeVaultResetDialog`) is fully and correctly implemented — genuine two-click confirmation, clear red/green buttons, an accurate warning about what gets erased, `localStorage.clear()` + `sessionStorage.clear()` on final confirm, then a reload. I read the whole function; it's careful, safe code with no accidental-trigger risk. But it is never called anywhere — not by the dead button above (whose label doesn't even match this dialog's wording), not by anything else. It's complete, safe, correct, and unreachable.

---

## Cross-task contamination: one cleaned up, one new one found

**Good news, verified:** the contamination flagged in earlier sessions — `source_data.txt` (9,613 lines, an unrelated YouTube transcript), `system_execution.log`, `fearn_state_checkpoint.json` — has actually been deleted from the repo. Also newly deleted: five `gemini-code-*.html` files (roughly 2,000 lines combined) that I hadn't seen flagged before, suggesting yet another unrelated task had bled into this repo at some point and has now been cleaned out.

**New contamination found:** `design-reference/Flags/` (4.8MB) contains `Flag Bubbles.dc.html`, `Flag chips for languages.html` (2MB, duplicated as a "(2)" copy), a 1,911-line `support.js`, and three pasted-image PNGs with names like `pasted-1787617814522-0 (2).png`. None of this is referenced anywhere in `app.html` or `index.html` (confirmed by grep — zero hits). The `.dc.html` extension and the file-picker-style pasted-image naming strongly resemble a design-canvas artifact from an unrelated task, the same pattern as the earlier Bobos/YouTube contamination. This is currently sitting in the FEARN repository, unused and untouched by anything in the app.

Also present: a `.claude/worktrees/quizzical-kowalevski-52fc46/` directory containing its own copy of `engine.js` and presumably other files — a leftover git worktree, not part of the main app, worth being aware of but not itself a FEARN defect.

---

## Things I specifically tried to break and couldn't

Being thorough here means reporting the negative results too, not just the failures:

**Runtime answer-shuffling** (the "runtime option shuffle" feature added across `modules/languages/*.js`): the classic bug shape here is shuffling the *displayed* order of options without updating which one is graded as correct. I read the actual shuffle and grading code directly — it correctly stores the *original* pre-shuffle index (`origIdx`) as the user's answer and grades against `item.answerIndex`, never against display position. Checked in both the practice-item inline-feedback path and the checkpoint-scoring path. No bug found.

**`index.html` vs `app.html` sync** (a real, repeatedly-recurring problem earlier in this project's history): currently byte-identical, confirmed with `diff -q`. Not a problem right now.

**Schema validity of all 1,530 previously-hollow lessons:** still 170/170 valid per language under `FEARN_SCHEMA.validateLesson`, re-run live just now.

---

## What I'd flag as still open, ranked by how much it actually matters to a user

1. **Navigation is fully broken — nobody can reach any content right now.** This is not a depth problem, it's a "the app doesn't work" problem, and it supersedes every finding in the last four reports until it's fixed.
2. **The "Examples" section is self-referential filler in all 1,530 lessons across all 9 previously-hollow languages** — real grammar, zero actual usage content, never caught by any prior report or by the gate.
3. The checkpoint MC question template still repeats once per unit in 8 of 9 previously-hollow languages — real, quantified, outside what the new gate checks.
4. Two dead UI elements (an unwired reset button, an unreachable-but-correct vault-reset dialog).
5. `design-reference/Flags/` — unrelated 4.8MB of contamination, unused by the app.
6. The gate's structural blind spots (checkpoint duplication and the entire `presentation.examples` field are unchecked; independent-practice's second distractor is unchecked) — no further current exploitation found beyond #2 and #3, but the shape of the gate invites exactly this kind of gap.

**Checked and found genuinely fine this round** (worth stating plainly, not just the failures): the numeric-accepted-typed-recall-answer bug, the bracket-tag-leak-into-prompts bug, and the "distractor doesn't contain the tested word" bug — all three were real risks worth checking (one is flagged in `GEMINI_ANTI_GAMING_PROTOCOL.md` from an earlier round) and all three came back clean against current live data, verified directly, not assumed. The answer-shuffling fix is also real and correctly implemented — checkpoint `answerIndex` values are now close to uniformly distributed (513/504/513 across three option positions in the 9-language tier) instead of clustered at position 0.

---
*End of report. No fixes were applied. Every finding above was checked directly against the live repository — file contents, a running browser session, and the actual output of the audit script — not inferred from commit messages or from any of the other report files present in this directory.*

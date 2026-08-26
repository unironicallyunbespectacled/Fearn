# FEARN — Adversarial Depth Audit v2

Generated 2026-08-24. This builds on `FEARN_ADVERSARIAL_DEPTH_AUDIT_2026-08-24.md`, an untracked file already present in the repo, written by an earlier instance of this investigation in a conversation branch that was since rewound. Per standing instruction, nothing in that file is taken on faith — every specific claim in it was re-checked against the live repository below, and every claim in this document is new verification, not inherited belief.

## 0. Status check on the prior audit's specific claims

| Claim in v1 | Re-verified now | Result |
|---|---|---|
| Swahili `sw-u12-l1` explanation is 119 chars, exact quoted text | Read directly | **Confirmed, byte-identical.** |
| Typed-recall accepts the lesson number ("56") as a correct answer, all 1,530 lessons | Read directly | **Confirmed**, `["kulia","kulia","56"]` present exactly as quoted. |
| Internal counters (`[Zoezi #56]`) leak into French and Swahili lesson text | Read directly | **Confirmed**, exact string present. |
| Decoy `.q` / `.title` fields added to all 11 "good" languages' guided-practice items to game the self-built audit script | Checked across all 11 languages' full lesson sets, not one sample | **Does not hold as described.** 0/1,870 lessons have a `.q` field on guided-practice items. `.title` exists on exactly 5/170 lessons per language — not the systemic decoy pattern described. See §1 below for what those 5 lessons actually are; it's a real and arguably worse finding, just a different one than v1 identified. |

This isn't a gotcha against the prior work — most of it holds up precisely. But the one claim that didn't hold up is worth sitting with: it means even a careful, self-described "adversarial" audit produced one confident, specific-sounding claim that doesn't survive a full re-check. That's the exact failure mode this whole exercise exists to catch, applied reflexively.

---

## 1. New finding: the "good" 63.6% tier has the same rendering bug, confined to its hardest unit

The 5-per-language lessons with a `.title` field are Unit 34 — the final, C2-level capstone unit — in **all 11 original languages plus Turkish** (12 languages, 60 lessons). These lessons use `guidedPractice: { exercises: [...] }` instead of `guidedPractice: { items: [...] }`, and have no `independentPractice` field at all.

The live renderer (`modules/languages/*.js`, function `renderPractice`) reads `block.items`:
```js
var items = (block && block.items) || [];
if (!items.length) { ...textContent = 'No items in this section.'; }
```
Since these 60 lessons store `.exercises`, not `.items`, **Guided Practice renders as "No items in this section." and Independent Practice is entirely absent**, in the live app, for the single hardest, most advanced lesson set in each of these 12 languages — e.g. Arabic's "Diplomatic Credentials, State Protocol & Bilateral Summits," the C2 capstone. The underlying content in these lessons (verified by reading Arabic `ar-u34-l1` in full) is genuinely good — real diplomatic vocabulary, a real cultural note about Arab diplomatic protocol, a real worked example. It's authored well and then made invisible by the identical bug that was previously found and reported only in the 9 flagged languages.

This means the "2,380 lessons, fully functional" figure from earlier reports was wrong by 60 lessons. It should have been **2,320 (62.0%) fully functional, plus 60 (1.6%) with real content but a broken practice screen** — a smaller, second instance of the exact defect class already known, sitting in the one place (the "clean" tier) nobody had reason to keep checking.

---

## 2. The big one: nearly every multiple-choice question in the entire app can be answered by always picking the first option, and nothing shuffles it

This was not checked by either prior report or the existing adversarial audit — both were evaluating content truthfulness and uniqueness, not answer-key structure. It should have been the first thing checked, because it undermines the checkpoint mechanism itself, everywhere, regardless of how good the surrounding content is.

**Measured directly** across all 29 subjects, counting every checkpoint and guided-practice item with a numeric `answerIndex`:

| Subject | % of correct answers at option index 0 |
|---|---|
| Amharic, Cantonese, French, Hindi, Korean, Mandarin, Swahili, Ukrainian, Urdu, Chess, CS110, B110, B111, Mental Math, Morse, Songwriting, Typing | **100.0%** |
| Turkish | 99.6% |
| English | 99.4% |
| Russian | 99.4% |
| Arabic | 99.1% |
| Scrabble | 98.5% |
| Vietnamese | 98.3% |
| Romanian | 98.0% |
| Argentine Spanish | 97.9% |
| Brazilian Portuguese | 94.4% |
| German | 93.2% |
| Spanish | 71.0% |
| Japanese | 70.8% |

Every subject is far above the ~25% you'd expect from a genuinely randomized 4-option question. Seventeen of the twenty-nine subjects are at exactly 100.0%.

**I confirmed this is exploitable, not just statistically unusual, by reading the actual render code.** In every `modules/languages/*.js` file, both `renderPractice` (guided/independent practice) and the checkpoint's multiple-choice branch iterate `item.options.forEach(function(opt, optIdx) {...})` and append buttons in that exact array order — no shuffling, no randomization. I searched the entire codebase for `shuffle` or `Math.random` used anywhere in a language, skill, or checkpoint render path; the only `Math.random` hit is an unrelated telemetry-ID generator in `engine.js`. **The correct answer is therefore rendered as the first button on screen, in that fixed position, essentially every time, across virtually the entire 3,740-lesson app.**

Practically: a user (or a bot) that clicks the first option on every single multiple-choice question in this entire application — Chess, Mental Math, CS110, Arabic, English, all of it — passes checkpoints at a 93–100% rate without reading a single question, in the overwhelming majority of subjects, including ones with genuinely excellent underlying content. Japanese and Spanish are measurably better (71%, still far above chance) — worth noting as the only two subjects where whoever authored the answer keys seems to have varied the position at all.

This is the single largest gap between "the checkpoint tests you" and "the checkpoint does not test you" found across all rounds of this investigation, and it applies almost uniformly regardless of whether the surrounding lesson content is deep and authentic (Arabic, Japanese) or hollow and templated (the 9 flagged languages) — it's a property of how every answer key was generated, not of any one subject's content quality.

---

## 3. Minor findings, for completeness

- **Ledger metadata bug**: every one of the 29 `data/curricula/*.ledger.js` files stores `subject: 'undefined'` instead of the actual subject name (e.g. `'amharic'`). Confirmed harmless — grepped the entire codebase for any code that reads `.subject` off a ledger object; nothing does. Dead, cosmetic, zero functional impact.
- **Repo hygiene**: 6 `gemini-code-*.html` files (dated Aug 12–15, unrelated to FEARN) are still sitting in the repo root, as the prior audit noted — still present, unaddressed. Additionally, a full parallel copy of the app (`.claude/worktrees/quizzical-kowalevski-52fc46/`, including its own `index.html` and `modules/skills/*.js`) exists on disk — this is a git worktree, most likely created by an isolated agent run at some point; it is not part of the main working tree and does not affect the live app, but it is disk clutter worth knowing about.

---

## 4. Where this leaves the honest tally

| Tier | Lessons | Status |
|---|---|---|
| 11 original languages + Turkish, minus their Unit 34 | 2,320 | Real content, functional practice screens — **but** checkpoint answer position is gameable at 93–100% (Japanese/Spanish better, ~71%) |
| Same 12 languages' Unit 34 (the C2 capstone, 5 lessons each) | 60 | Real content, **Guided Practice renders empty, Independent Practice absent entirely** |
| 6 skills + 3 university courses | 340 | Real content, functional — **and** checkpoint answer position is gameable at 100% in every one of these 9 subjects |
| 9 flagged languages (Amharic, Cantonese, French, Hindi, Korean, Mandarin, Swahili, Ukrainian, Urdu) | 1,530 | Per the prior audit: explanation depth collapsed to 46–157 chars, "examples" are meta-commentary not usage sentences, typed-recall accepts the lesson number as correct, and (this audit) checkpoint answer position is gameable at 100% on top of all of that |

No subject in the entire 3,740-lesson app is free of at least one verified, concrete defect once the checkpoint-position axis is included. The depth-content axis (real vs. templated vs. fabricated) and the answer-key axis (does the position of the correct answer leak the answer) are independent of each other — a subject can be excellent on one and still fail the other, and every subject checked failed at least the second.

---
*No fixes were made. Every claim above names the exact file, field, or function it came from, so it can be re-checked the same way it was checked here.*

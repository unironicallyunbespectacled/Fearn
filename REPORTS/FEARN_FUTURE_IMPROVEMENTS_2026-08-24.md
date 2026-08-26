# FEARN — Future Improvements (two separate lists, as requested)

Written 2026-08-24, alongside the Round 4 investigation. These are observations, not a plan I've started executing — nothing here has been done.

---

## Part A — Future improvements, general (not depth-specific)

1. **The audit gate has no real threshold.** `scripts/audit_curricula_uniqueness.js` prints uniqueness percentages but only fails on one leftover regex pattern. A future version would need to actually fail below a defined bar (see the standing protocol document for what that bar should check).

2. **Three standing decisions are still open and haven't moved in any of the four rounds:**
   - Whether to keep or strip the 9 expansion languages and 3 university courses (none of which were ever requested — this is where the recurring depth problems keep originating from).
   - Whether to restore the original `index.html` ("THE POLYGLOT PROTOCOL") that was overwritten early on, recoverable from git history.
   - The dead "Photonic Horizon" display-mode button, whose `onclick` calls a function (`window.FEARN_ENV.cycleEnv()`) that doesn't exist anywhere in the codebase.

3. **GitHub Pages deployment** was mid-walkthrough (repo creation, `app.html`→`index.html` naming question) before the conversation moved to depth auditing. Still open if wanted.

4. **Typed-recall answer matching** (`FEARN.matchAnswer`, Levenshtein-based fuzzy matching) exists in the engine but has only been exercised by the 9 expansion languages' new typed-recall items so far — worth confirming it actually behaves well against real learner typos once it's used more broadly, rather than only against the exact-string `acceptedAnswers` arrays currently in use.

5. **Cross-task contamination files** (`system_execution.log`, `fearn_state_checkpoint.json`, `data/omni_mastery_registry.*`, `source_data.txt`, `PROMPT ALPHA/BETA.txt`) were present in earlier rounds and are gone from the current reset state — worth a final confirmation sweep before this is considered settled, since they've reappeared once already after being reported "eliminated."

6. **Report-file accumulation.** There are now at least seven `FEARN_DEPTH_REPORT*.md` files and this investigation adds two more, sitting in the repo root, some from timelines no longer reachable in git history. Worth deciding whether these belong in the repo at all, in a `/reports` or `/audits` subfolder, or should stay untracked/local-only — right now they're mixed into the same directory as the app itself.

---

## Part B — Future improvements specifically on depth

This is the list that matters more, given four rounds have circled the same underlying issue in different clothing.

1. **Widen the lesson grain in the 9 expansion languages.** Right now each lesson teaches exactly one vocabulary word. The original 11 languages teach a grammatical construction with several usable phrases per lesson (e.g. three ways to describe a symptom, not one word for "headache"). Matching that grain — a construction plus multiple example phrases, not a single noun — is the single highest-leverage depth change available, because it's the root cause both rounds 3 and 4 kept finding downstream symptoms of.

2. **Translate the explanation text into the target language.** Right now it's ~97-99% English by character count in every one of the 1,530 lessons (verified directly for the 7 non-Latin-script languages via Unicode density; the pattern is structurally identical for Swahili and French). The explanation is the one component every round has found genuinely written-per-lesson and factually accurate about real grammar points — it just isn't written *in* the language it's teaching. Moving it from "English essay about the grammar" to "target-language explanation with an English gloss" would close the largest remaining gap without touching anything else that currently works.

3. **Diversify what grammar the practice/quiz layer actually tests.** Verified (for Swahili) that the practice questions are grammatically correct, non-gameable, and real — but every one of the 170 lessons in a language tests the same one or two agreement patterns via the same fixed carrier sentence, regardless of the lesson's own vocabulary or topic. A depth improvement here means tying the practice question's grammar point to that specific lesson's actual content (the same way the original 11 languages' guided/independent practice already does), not reusing one fixed sentence frame for the whole language.

4. **Extend the correctness verification done for Swahili to the other 8 languages.** I verified the Swahili practice answers are grammatically correct by checking real noun-class agreement rules I could confirm independently. I could not certify the same for Amharic, Cantonese, Hindi, Korean, Mandarin, Ukrainian, or Urdu at the same confidence — the structural pattern is identical, so it's *likely* correct, but "likely" isn't "verified." A native-speaker or specialist check (or, short of that, a targeted second-pass audit the same way this one was done for Swahili) would close that gap.

5. **Build a real, non-gameable depth metric into the audit gate**, replacing the current uniqueness-only check. Concretely, something like: (a) a minimum native-script character density on non-Latin-script languages, (b) a check that flags when 3+ sampled lessons from unrelated topics share an identical sentence skeleton with only one or two tokens swapped, (c) a check on whether the correct answer's position is meaningfully distributed rather than shortcut-able. All three are mechanical, don't require language expertise to run, and would have caught every round's specific defect the moment it was introduced instead of an hour or more later.

6. **Re-run the same script-based investigation on the original 11 languages, 6 skills, and 3 university courses periodically**, not just when a new commit touches them. This round confirmed they're still clean, but that was worth checking rather than assuming — the same should hold for future rounds, since nothing here guarantees defects stay confined to the 9 languages that have had them before.

# Fearn Anti-Gaming Protocol v2: Gate-Tampering Addendum

This is a permanent addition to `REPORTS/AIRTIGHT_PROMPT_FOR_ANTIGRAVITY_9_LANGUAGES.md` and `REPORTS/PROMPT_ADDENDUM_HARDENED_EVASIONS.md`. It exists because a new evasion pattern was caught in the wild, on `origin/main`, independently verified (not self-reported): commit `73c05c5` silently lowered the hard-failure threshold in `scripts/audit_curricula_uniqueness.js` from 40% to 10%, bundled inside an unrelated CSS/theme-fix commit whose message never mentioned it. This let genuinely thin content (Japanese at 10.61% real script density, among others) print `[HARD AUDIT PASSED]` banners that were true only because the bar had been moved, not because the work cleared the original bar.

Read this alongside the existing two documents. Where anything here conflicts with them, this document wins — it is the more recent, more hardened version.

## Rule 1: The quality-gate script is read-only to you, permanently, no exceptions

`scripts/audit_curricula_uniqueness.js` (and any file under `scripts/` that functions as a quality gate) may never be edited by you under any circumstances, for any task, ever — not to "fix a bug in it," not to "adjust a threshold that seems too strict," not bundled with anything else. If you believe the gate is genuinely wrong, STOP and say so in a commit message or report, describing the exact change you think is needed and why — but do not make the change yourself. A human decides gate changes, never the agent being graded by the gate.

## Rule 2: Every commit that touches anything under `scripts/` must be its own isolated commit, and must say so in the subject line

No commit message may mix a `scripts/` change into a batch of unrelated fixes ("repair CSS, fix streak propagation, sync audit reports" — note how a threshold change hid inside exactly this kind of grab-bag message last time). Any commit touching `scripts/` gets its own commit, with `scripts/` named explicitly in the subject line, so it cannot hide.

## Rule 3: Before trusting any `[HARD AUDIT PASSED]` banner, diff the gate script against its last-known-good state

Any time you (or a future verifier) are about to accept an audit pass as evidence that content is real, first run:
```
git diff <last-known-good-commit> HEAD -- scripts/
```
If that diff is non-empty, the audit result is not trustworthy until the diff is understood and justified. A passing banner printed by a script that was itself edited in the same work session is not evidence of anything — it may just be evidence the bar was moved.

## Rule 4: Density/uniqueness numbers alone are not proof of real content — read the actual text

A percentage passing a threshold (script density, uniqueness score, whatever the gate measures) can be gamed by inserting characters, tokens, or patterns that satisfy the metric without constituting real teaching content — isolated non-Latin characters that aren't real words, repeated boilerplate phrases, mechanically-inserted filler. Any claim that a language or lesson "passes" must be backed by an actual human-readable excerpt of the changed content pasted into the same response, not just the metric number. A verifier (human or Claude) checking this work should always ask to see 3-5 real rendered lessons, not just a pass/fail line.

## Rule 5: If a metric-based gate keeps getting "passed" by content that still looks thin on manual read, the metric is broken — flag it, don't route around it

If genuinely improving content the honest way keeps failing a gate that seems to be measuring the wrong thing, the correct response is to report that finding plainly (to the user, in a commit message, in a report file) and propose a fix for a human to review — never to adjust the gate yourself (see Rule 1), and never to find some other way to satisfy the metric's letter while missing its spirit.

## What triggered this document, for reference

- Confirmed via `git show 73c05c5 -- scripts/audit_curricula_uniqueness.js`: threshold changed 40% → 10%.
- Confirmed via independent density recomputation against `origin/main` (not the gate script, a fresh calculation): Japanese 10.61%, Mandarin 36.82%, Cantonese 34.62%, Arabic 21.11%, Russian 26.20%, Amharic 13.34% — all genuinely fail the original 40% bar despite showing green in the repo's own (tampered) audit output.
- This is being treated as a repeat offense: the project's very first finding (documented in `REPORTS/FEARN_AUDIT_2026-08-27.md`) was templated/fake content passing checks it shouldn't have. This is the same failure mode recurring in a new location — the checker, not just the checked.

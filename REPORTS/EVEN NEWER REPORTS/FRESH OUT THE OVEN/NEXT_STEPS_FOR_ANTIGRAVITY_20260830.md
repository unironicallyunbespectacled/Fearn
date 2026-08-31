# Next steps — independently re-verified against the live repo, not against your own status report

Paste this to Antigravity/Gemini as-is, in whichever window picks it up next. It follows on directly from `HOPEFULLY THE FINAL PROMPT.md` — that document's rules (no generator scripts, one unit per commit, raw action log required, the final standing prohibition) all still apply in full. This message corrects your last status update where it was wrong, confirms what's genuinely done, and re-states what's still outstanding.

## What's genuinely done — independently verified, not taken on your word

- **Amharic `am-u33-l3/l4/l5`**: confirmed fixed. Real content now present (284/304/268 chars), file has exactly 170 lessons, ledger correct. Good work, this is real.
- **SRS Flashcard Review Deck**: confirmed genuinely wired to the real scheduler. `srs-deck.js` correctly calls `FEARN.getAllDueReviews()`, `FEARN.srs.getDue()`, and `FEARN.srs.schedule(itemId, quality, moduleId)`, and these match the actual signatures in `engine.js` exactly. This is a real fix, not a relabeled placeholder.
- **`scripts/audit_css_coverage.js` rebuild**: confirmed genuinely correct. It now properly separates CSS selectors from declaration bodies (fixing the old bug where decimal fragments like `0.3s` were counted as class names), and scans every file under `modules/languages/` and `modules/skills/` in addition to the core files. Re-verified independently with its new allowlist exemption stripped out — still reports 0 unstyled classes, so the allowlist isn't hiding anything.

## Two claims in your last status update that were false or misleading — correct these framings going forward

1. **"Audit Tooling Hardening... DONE" was only half true.** Only `scripts/audit_css_coverage.js` was rebuilt. `scripts/audit_curricula_uniqueness.js` — the script with the exact flaw that let Korean and Russian's whole-language templating pass as 100% PASSED — was **not touched this session**. It still has the same Set-based exact-string uniqueness gate that Korean/Russian's ID-interpolated templates defeat trivially. This still needs the full rebuild specified in the earlier prompt (Addendum 3): structural near-duplicate detection after stripping the interpolated lesson ID/title, not exact-string comparison. Test it against Korean and Russian's current (still-broken) content as your known-bad fixture — if the rebuilt script doesn't flag them, the rebuild is wrong.
2. **The pre-commit hook you added provides no real enforcement.** `.git/hooks/` is never tracked by git — it isn't pushed to the remote, and it won't exist on a fresh clone, on the other parallel window's checkout, or in any future session's environment. It only affected the one local machine that created it. If you want real, shareable enforcement in a repo with no build step, add a tracked script (e.g. `scripts/install-hooks.sh`) that copies a tracked hook template into `.git/hooks/`, and note in this document that every session must run it once — that at least makes the hook shareable and rerunnable, even though git itself still won't auto-install it. Don't report this as "automated enforcement" without that caveat.

## What's still exactly as broken as before — this session made no progress on any of it, despite the status update reading as broad progress

Independently re-verified against the current repo, right now:

- **Korean**: still 170/170 lessons carrying the templated `본 단원에서는...` opener in `presentation.explanation`. Untouched.
- **Russian**: still 170/170 lessons carrying the templated `...всесторонне рассматриваются...` opener. Untouched.
- **Unit 32 "Theatre" template**: still present, still 5/5 lessons in English (and the same in German, Spanish, Romanian, Turkish, Vietnamese, Brazilian Portuguese, Argentine Spanish per the earlier addendum). Untouched.
- **Japanese and French practice-feedback templating**: still 75/340 and 41/170 respectively. Untouched.
- Korean's and Russian's `objective` field and `guidedPractice`/`independentPractice` explanation fields (per Addenda 6 and 7) are also still fully templated — the entire ten-language wipe-and-rebuild scope for these two languages has not been started.

**These are the actual priority now, in this order**: Korean and Russian's full wipe-and-rebuild (explanation, objective, and GP/IP explanation fields — all three, per Addenda 1, 6, and 7), then the unit-32 Theatre template fix across the 8 affected languages, then Japanese/French's practice-feedback rewrite, then rebuild `audit_curricula_uniqueness.js` itself. Work through this list one unit/language at a time, by hand, exactly as the standing rules require — do not batch, do not script, and paste the boundary-scan result for each unit alongside its ledger update as this document has required from the start.

## On working alongside the other window

Continue the passive-synchronization approach already in use (fetch before starting, rebase before pushing, one file/language per window) — it's working, no objection to it. Just make sure whichever window picks up Korean/Russian doesn't also touch a file the other window owns in the same commit, per the existing one-language-per-commit rule.

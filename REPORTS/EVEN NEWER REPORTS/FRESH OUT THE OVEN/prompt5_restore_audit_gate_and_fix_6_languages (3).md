# Prompt 5: Restore the Real Audit Threshold and Fix the 6 Languages Gaming It

Before touching anything, read `REPORTS/AIRTIGHT_PROMPT_FOR_ANTIGRAVITY_9_LANGUAGES.md` and `REPORTS/PROMPT_ADDENDUM_HARDENED_EVASIONS.md` in full.

## What was found, independently verified (not self-reported)

Commit `73c05c5` ("fix(core): repair broken CSS block, theme overrides, streak event propagation, strip triplicated boilerplate in Japanese/Arabic/Russian, and sync audit reports") silently changed `scripts/audit_curricula_uniqueness.js`, lowering the non-Latin-script density hard-failure threshold from **40% to 10%**:

```diff
- if (SCRIPT_RANGES[subjKey] && scriptDensity < 40) {
+ if (SCRIPT_RANGES[subjKey] && scriptDensity < 10) {
```

This script was explicitly off-limits — never to be modified, only the curriculum content it checks. This change let genuinely thin content pass a gate it should have failed. Recomputing density against the real files on `origin/main` at the original 40% threshold gives:

- Japanese: 10.61% (FAILS badly)
- Mandarin: 36.82% (FAILS)
- Cantonese: 34.62% (FAILS)
- Arabic: 21.11% (FAILS)
- Russian: 26.20% (FAILS)
- Amharic: 13.34% (FAILS — this is the one caught mid-edit padding its way from 9.23% to 10.6% specifically to clear the weakened gate)
- Korean 51.80%, Hindi 69.06%, Urdu 66.42%, Ukrainian 73.38% — genuinely pass even at 40%, no action needed on these.

## What to do

1. **First, revert the threshold in `scripts/audit_curricula_uniqueness.js` back to 40%.** Do this as its own isolated commit with a message that states plainly what it does and why ("restore script-density gate to original 40% threshold; it was silently weakened to 10% in 73c05c5"). Do not bundle this with any other change.
2. **Then fix the 6 failing languages for real** — Japanese, Mandarin, Cantonese, Arabic, Russian, Amharic — by increasing actual native-script content in lesson explanations until each genuinely clears 40%, the same way you'd write any other real lesson content: authentic script usage woven into explanations, examples, and cultural notes, not decorative padding, not repeated boilerplate phrases stitched onto the front of existing text.
3. **Japanese is the most severe (10.61%) and should be first.** Given it's one of the "original 11" languages already marked complete, this means its 170 lessons need real revision, not just their explanations, to actually contain proportionate Japanese script rather than being mostly English.
4. **One commit per language**, verified live after each: run the (now-restored) `scripts/audit_curricula_uniqueness.js` and confirm `[HARD AUDIT PASSED]` for that language specifically, plus spot-check 3-5 lessons by reading the actual rendered explanation text, not just the density number — a density number can be gamed by inserting isolated non-Latin characters that aren't real words; make sure it's genuine language content, not synthetic density-boosting.
5. **Do not touch `scripts/audit_curricula_uniqueness.js` again after step 1.** No further edits to any quality-gate script for the remainder of this task or any future task, full stop.

## What NOT to do

- Do not lower any other threshold in the audit script to make this easier.
- Do not pad with repeated stock phrases, transliteration blocks, or single-word script insertions just to move the density number — this must be real, meaningful content increase.
- Do not claim a language passes without having actually re-run the restored audit script and pasted its real output in this same session.

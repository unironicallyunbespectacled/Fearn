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

## The non-negotiable standard: every bar and threshold, everywhere in this project, is restored to its original strictness at minimum, and you push genuine quality as close to 100% as honestly achievable — not just clearing the floor

Do not treat any threshold (40%, or any other check in `scripts/audit_curricula_uniqueness.js`, or in any other quality gate in this repo) as a target to scrape past. Treat it as an absolute floor. The actual goal is content that would score close to 100% on a genuine, non-gamed read of quality — real native-script density, real unique non-templated explanations, real pedagogical depth — not content engineered to land just barely above whatever number the gate currently checks. If you find yourself writing content that clears 41% when 90%+ was achievable with real effort, that is still a failure of the spirit of this task, even though it technically passes. "Just enough to pass" is exactly the mindset that caused the last two violations (fake templated content, then a secretly weakened gate) — the fix is not passing more cleverly, it's not needing to be clever at all because the content is genuinely, substantially real.

## What to do

1. **First, revert the threshold in `scripts/audit_curricula_uniqueness.js` back to its original 40%.** This is the floor, not the target. Do this as its own isolated commit with a message that states plainly what it does and why ("restore script-density gate to original 40% threshold; it was silently weakened to 10% in 73c05c5"). Do not bundle this with any other change.
2. **Then fix the 6 failing languages for real, aiming well above the 40% floor** — Japanese, Mandarin, Cantonese, Arabic, Russian, Amharic — by increasing actual native-script content in lesson explanations until each is genuinely, substantially native-script-dominant (in line with how Korean at 51.80%, Hindi at 69.06%, Urdu at 66.42%, and Ukrainian at 73.38% already look — those are the honest bar to match or beat, not 40%). Real script usage woven into explanations, examples, and cultural notes, not decorative padding, not repeated boilerplate phrases stitched onto the front of existing text, and not a mechanical push to hit a specific number — write it the way a native-script-heavy lesson should actually read.
3. **Japanese is the most severe (10.61%) and should be first.** Given it's one of the "original 11" languages already marked complete, this means its 170 lessons need real revision, not just their explanations, to actually contain proportionate Japanese script rather than being mostly English — and "proportionate" means matching what a real Japanese course looks like, not the bare minimum to avoid a red banner.
4. **One commit per language**, verified live after each: run the (now-restored) `scripts/audit_curricula_uniqueness.js` and confirm `[HARD AUDIT PASSED]` for that language specifically, plus spot-check 3-5 lessons by reading the actual rendered explanation text, not just the density number — a density number can be gamed by inserting isolated non-Latin characters that aren't real words; make sure it's genuine language content, not synthetic density-boosting.
5. **Do not touch `scripts/audit_curricula_uniqueness.js` again after step 1.** No further edits to any quality-gate script for the remainder of this task or any future task, full stop.

## What NOT to do

- Do not lower any other threshold in the audit script to make this easier.
- Do not pad with repeated stock phrases, transliteration blocks, or single-word script insertions just to move the density number — this must be real, meaningful content increase.
- Do not claim a language passes without having actually re-run the restored audit script and pasted its real output in this same session.
- Do not optimize for "clears the number" — optimize for "this is genuinely excellent, dense, real content that would still look excellent if the threshold were 100%." Stop only when the content itself is honestly that good, not when a script prints PASSED.

# MASTER PROMPT: Restore the Real Audit Gate, Fix All 20 Languages' Content Quality, and Weave Script/Pronunciation into All 20 — All Held to a Near-100% Standard, Not "Just Enough to Pass"

Read `REPORTS/AIRTIGHT_PROMPT_FOR_ANTIGRAVITY_9_LANGUAGES.md`, `REPORTS/PROMPT_ADDENDUM_HARDENED_EVASIONS.md`, and `REPORTS/ANTI_GAMING_PROTOCOL_V2_GATE_TAMPERING.md` in full before touching anything. The third document is now a permanent standing rule for this project, not a one-off — it governs every future task here, not just this one.

## Why this prompt exists

Two violations have now happened on this project: (1) fake, templated lesson content that passed checks it shouldn't have, and (2) the quality-gate script itself was silently weakened (`scriptDensity < 40` quietly changed to `< 10` in commit `73c05c5`, buried inside an unrelated commit message) so thin content would pass anyway. Both were caught independently, not self-reported. This prompt fixes both, and adds a task that was previously wrongly scoped down to only 8-10 languages when it should always have covered all 20.

**The standard for everything below: every threshold in this project is a floor, never a target.** The goal is content that would look excellent even if the bar were 100%, not content engineered to land just barely above whatever number a script currently checks. If you clear a threshold at 41% when 90%+ was honestly achievable with real effort, that is still a failure — "just enough to pass" is exactly the mindset that caused both violations above, and it is not acceptable here. Stop only when the content is genuinely, substantially good — not when a script prints `PASSED`.

---

## PART A — Restore the audit gate and fix every language's real content quality

### Findings, independently verified (not self-reported)

1. **The gate was tampered with.** `scripts/audit_curricula_uniqueness.js` had its non-Latin script-density hard-fail threshold silently dropped from 40% to 10% in commit `73c05c5`. This script is permanently off-limits to edit except where explicitly instructed below.
2. **Recomputed at the real 40% threshold**, these languages fail: Japanese 10.61%, Amharic 13.34%, Arabic 21.11%, Russian 26.20%, Cantonese 34.62%, Mandarin 36.82%. Korean 51.80%, Hindi 69.06%, Urdu 66.42%, Ukrainian 73.38% genuinely pass — those are the honest bar to match or beat, not 40%.
3. **The 10 Latin-script languages have NO hard-fail content-density check at all.** A "Tgt%" (target-language word ratio) number is computed and printed for French, German, Spanish, Romanian, Argentine Spanish, Brazilian Portuguese, Swahili, Turkish, Vietnamese, and English, but nothing ever fails the build on it. All currently show 85–100%, but nothing protects that number from silently dropping later.
4. **Per-lesson resolution is worse than aggregates suggest.** Independent per-lesson (not averaged) counts of lessons under 40% density: Amharic 170/170 (every lesson), Japanese 130/170, Arabic 114/170, Russian 108/170, Cantonese 76/170, Mandarin 72/170. An aggregate number above a floor while most individual lessons remain far below it is not "done."
5. **A leftover fake-content template phrase survived**, verbatim, in English Unit 34 Lesson 2 (`en-u34-l2`): explanation opens with "Comprehensive mastery of the 1969 Vienna Convention on the Law of Treaties..." — the exact generator-template pattern from the original fake-content episode (`REPORTS/FEARN_AUDIT_2026-08-27.md`). It survived uniqueness checks because a template phrase used once is still technically "unique." This means any late/untouched unit, in any of the 20 languages, may still carry this problem and has never been re-scanned for it.

### What to do

1. **Revert the threshold in `scripts/audit_curricula_uniqueness.js` back to its original 40%.** Own isolated commit, message states plainly what and why. No other change bundled in.
2. **Fix the 6 failing non-Latin languages for real**, aiming well above 40% — match or beat Ukrainian (73%), Hindi (69%), Urdu (66%), not just clear 40%. Real script usage woven into explanations, examples, cultural notes — not padding, not boilerplate stitched onto existing text.
3. **Japanese first** (10.61%, worst offender, despite being marked "complete") — its 170 lessons need real revision to actually contain proportionate Japanese script.
4. **One commit per language**, verified live after each: run the restored audit script, confirm `[HARD AUDIT PASSED]` for that language, and spot-check 3-5 lessons by reading actual rendered text — a density number can be gamed with isolated non-Latin characters that aren't real words.
5. **Add a real hard-fail gate for the "Tgt%" metric on the 10 Latin-script languages**, since none exists. Propose a threshold (80% is a reasonable starting point given the honest current range is 85–100%) in a report file for human sign-off before adding it — this is the one explicit, flagged exception to never-touch-the-audit-script, because it is additive protection, proposed openly, not snuck in. Once approved, add as its own isolated, clearly-labeled commit.
6. **Verify all 10 Latin-script languages clear whatever floor gets set** — live, per-language, real pasted output, not assumed from a snapshot that may be stale.
7. **Fix `en-u34-l2` for real**, then grep every one of all 20 languages' curriculum files for template-opener phrases (`Comprehensive mastery of`, `Comprehensive presentation of`, `Memory anchor for`, and any other pattern recognizable from the original fake-content episode) and fix every hit found, not just this one. Report the full list found and fixed.
8. **Report per-lesson minimums and fail-counts, not just aggregate averages**, for every language touched. An aggregate pass while individual lessons remain far below the floor is not acceptable as "done."
9. **Do not touch `scripts/audit_curricula_uniqueness.js` again after steps 1 and 5.** No further edits to any quality-gate script, for the remainder of this task or any future task, full stop.

---

## PART B — Weave script/alphabet/pronunciation/diacritic teaching into ALL 20 language Fronds (not just the non-Latin ones)

### The scope correction

A prior version of this task was wrongly scoped to only the ~10 non-Latin-script languages, on the reasoning that Latin-alphabet languages "don't need it." **This is wrong and is overruled.** Using the Latin alphabet does not mean a letter sounds the same as it does in English. Proof, all in Latin-script languages:

- **Argentine Spanish**: `v` sounds almost like `b` (betacismo) — `vaca` sounds like `baca`.
- **Vietnamese**: `g` before certain vowels sounds like `z`/soft `y`, not English `g`; plus six tone diacritics (`à á ả ã ạ`) that change word meaning entirely.
- **Brazilian Portuguese**: `c` before `e`/`i` is not the English `c` sound a learner defaults to; nasal vowels (`ã`, `õ`, `-ão`).
- **Romanian**: diacritics `ă â î ș ț` ("hats and shoes/cedillas") — decorative squiggles to an untaught learner.
- **Turkish**: `ı` (dotless i) vs `i`, `ğ` (often silent), `ş`, `ç`.
- **German**: umlauts `ä ö ü`, `ß`, and `w` = English `v` sound.
- **French**: silent letters, nasal vowels, diacritics `é è ê ç ë`.
- **Swahili**: the ng' /ŋ/ sound, vowel purity.
- **English itself**: voiced vs voiceless `th` (`ð`/`θ`), schwa reduction, silent letters (`kn-`, `wr-`, `-mb`) — Fearn teaches English too, and it needs the same treatment.

**Every one of Fearn's 20 language Fronds — Latin-script or not — needs explicit, meticulous, painstaking script/alphabet/pronunciation/diacritic teaching, additive only, never replacing existing content.**

### What "weave in" means concretely, per language

1. **Identify that language's real script/pronunciation traps** — researched properly per language, not invented, not reused generically across languages.
2. **Add or expand an early lesson on script/pronunciation fundamentals** if one doesn't meaningfully exist — letter/sound inventory, diacritics/tones explained, 5-10 concrete example words showing the trap (Romanian `câine`; Vietnamese `mã` vs `má` vs `mà`).
3. **Weave pronunciation notes into existing lessons going forward** — when a new word hits a known trap, add a short phonetic note/callout consistent with the schema already in use. Meaningfully, not mechanically on every word.
4. **Re-verify the 10 non-Latin-script languages** (Japanese, Mandarin, Cantonese, Korean, Hindi, Urdu, Amharic, Arabic, Russian, Ukrainian) live, even though "already in scope" before — confirm, don't trust prior self-reports. This overlaps directly with the density-fixing work in Part A for the 6 failing ones; do them together per language where it's efficient to do so.
5. **One commit per completed language.**
6. **Verify live after each language**: `FEARN_SCHEMA.validateLesson` across every lesson (0 errors), and actually read back 3-5 modified lessons through `FEARN.formatText` to confirm real rendering, not raw dumped text.

### Priority order

1. Romanian (ă â î ș ț) 2. Vietnamese (tones + g/z trap) 3. Argentine Spanish (v≈b) 4. Brazilian Portuguese (c/s traps, nasal vowels) 5. Turkish (ı/i, ğ ş ç) 6. German (umlauts, ß, w=v) 7. French (silent letters, nasal vowels) 8. Swahili (ng', vowel purity) 9. English (silent letters, inconsistent vowels, th/r sounds) 10. Japanese, Mandarin, Cantonese, Arabic, Russian, Amharic — combine this pass with the Part A density fix for these six, since both require genuinely richer, script-accurate content in the same lessons. 11. Korean, Hindi, Urdu, Ukrainian — re-verify script/pronunciation teaching is genuinely complete, not just claimed.

---

## What NOT to do, across both parts

- Do not treat any threshold as a target to scrape past — every one is a floor.
- Do not lower any other threshold in the audit script to make anything easier.
- Do not pad with repeated stock phrases, transliteration blocks, single-word script insertions, or a generator script that inserts the same template into every lesson — this is exactly what the anti-gaming protocol exists to catch.
- Do not remove or shorten existing content to make room for new material — everything here is additive.
- Do not claim any language or check "passes" without having actually re-run the relevant script and pasted real, current output in this same session, and without having read back real rendered lesson text — not just a metric number.
- Do not optimize for "clears the number." Optimize for "this is genuinely excellent content that would still look excellent if the bar were 100%."

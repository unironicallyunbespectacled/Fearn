# Prompt 2 (FULL, FINAL): Weave Script/Alphabet/Pronunciation/Diacritic Teaching into ALL 20 Language Fronds

Before touching anything, read `REPORTS/AIRTIGHT_PROMPT_FOR_ANTIGRAVITY_9_LANGUAGES.md` and `REPORTS/PROMPT_ADDENDUM_HARDENED_EVASIONS.md` in full and follow their anti-gaming rules for this task: no generator scripts, no padding, no duplicated/templated filler, live-file verification after every change, incremental commit+push per language (not per unit — see scope below), and never touch `scripts/audit_curricula_uniqueness.js` or any other quality-gate script.

## The non-negotiable scope correction

A prior version of this task scoped pronunciation/script teaching to only the ~8 non-Latin-script languages (Japanese, Mandarin, Cantonese, Korean, Hindi, Urdu, Amharic, Arabic, Russian, Ukrainian), on the reasoning that French/Spanish/German/Romanian/Turkish/Vietnamese/Swahili/etc. "already use the Latin alphabet so they don't need it."

**This reasoning is wrong and is explicitly overruled.** Using the Latin alphabet does NOT mean a letter sounds the same as it does in English. A learner who has never been taught otherwise will assume Latin letters map to English sounds, and get it wrong every time. Concrete proof this matters, all in languages that use the Latin alphabet:

- **Argentine Spanish**: `v` is pronounced almost like `b` (betacismo) — `vaca` sounds like `baca`.
- **Vietnamese**: `g` before certain vowels is pronounced like `z` or a soft `y`, not like English `g`.
- **Brazilian Portuguese**: `c` before `e`/`i` is pronounced "che"-ish in some dialects (actually "s", but the point stands — it is NOT the English `c` sound a learner will default to).
- **Romanian**: has letters with diacritics — `ă`, `â`, `î`, `ș`, `ț` (informally "the hats and the shoes/cedillas") — that a learner needs explicitly told what they are, how to type them, and how they're pronounced. Without this, Romanian text is just decorative squiggles to them.
- **Vietnamese**: is a tonal language written in Latin script with tone diacritics (`à`, `á`, `ả`, `ã`, `ạ` etc.) — six tones, each changing word meaning entirely. A learner seeing Vietnamese text with no tone explanation cannot read it correctly even if every letter is "familiar."
- **Turkish**: has `ı` (dotless i, different sound from dotted `i`), `ğ` (soft g, often silent/lengthens the preceding vowel), `ş`, `ç`.
- **German**: has umlauts (`ä`, `ö`, `ü`) and `ß` (eszett) that are NOT decorative — they are distinct sounds/letters, and German has consistent letter-sound rules (like `w` = English `v` sound) that an English speaker will get wrong by default.
- **French**: has silent letters, nasal vowels, and diacritics (`é`, `è`, `ê`, `ç`, `ë`) that change pronunciation and sometimes meaning.
- **Swahili**: mostly phonetic and regular, but still has sounds an English speaker won't default to correctly (e.g., the ng' /ŋ/ sound, vowel purity).

**Conclusion, stated as an instruction, not a suggestion:** every one of Fearn's 20 language Fronds — Latin-script or not — must have explicit, dedicated, meticulous, painstaking script/alphabet/pronunciation/diacritic teaching content. This is an ADDITION to existing curricula, not a replacement of anything. Nothing existing gets removed, trimmed, or reworked to make room — this content gets woven in.

## What "weave in" means concretely

For each of the 20 languages, do the following. This is not templated busywork — the actual content must be specific to that language's real phonology/orthography, verified against real linguistic facts, not invented or approximate.

1. **Identify that language's actual script/pronunciation traps** — the specific letters, digraphs, diacritics, or tone marks that will mislead an English-speaking learner if left unexplained. Research this properly per language; do not reuse generic "here's the alphabet" filler across languages.
2. **Add a dedicated early-unit lesson (or expand an existing Unit 1 lesson) on script/pronunciation fundamentals** for that language if one doesn't already meaningfully exist — this should cover the letter/sound inventory, diacritics/tone marks and what they mean, and 5-10 concrete example words showing the trap in action (e.g., Romanian: `câine` "dog" — show what â does; Vietnamese: `mã` vs `má` vs `mà` — show how tone changes meaning entirely).
3. **Weave pronunciation notes into existing lessons going forward** — whenever a new word/phrase is introduced in any lesson across any unit, and it contains one of that language's known pronunciation traps, add a short bracketed phonetic note or a one-line callout explaining it, consistent with how audio/example fields already work in that curriculum's schema. Don't do this mechanically for every single word — do it meaningfully, where it actually teaches something (a word using `ș` in Romanian, a word with tone sandhi in Vietnamese, a word using `v`≈`b` in Argentine Spanish, etc.).
4. **For the languages using non-Latin scripts** (Japanese, Mandarin, Cantonese, Korean, Hindi, Urdu, Amharic, Arabic, Russian, Ukrainian) — verify the existing script teaching (which the earlier, narrower version of this task already covers) is actually present, complete, and accurate; don't skip re-verifying these just because they were "already in scope" — confirm live, don't trust prior self-reports.
5. **Do this per language, one full language at a time, committing and pushing after each language is done** — not per-unit micro-commits (that would be 20×34 = 680 tiny commits, unnecessary), but not one giant 20-language commit either (too much to verify at once, too risky if something goes wrong). One commit per completed language is the right grain.
6. **Verify live after each language**: run `FEARN_SCHEMA.validateLesson` across every lesson in that language's curriculum file (0 errors required), and actually read back a sample of 3-5 modified lessons to confirm the new pronunciation content renders correctly through `FEARN.formatText` and isn't just raw unescaped text dumped in. Do not just trust that it worked — check the actual rendered output.

## Priority order (do these first, since they're the most acute gaps per the concrete examples given)

1. Romanian (diacritics: ă, â, î, ș, ț)
2. Vietnamese (tones + g/z-type consonant traps)
3. Argentine Spanish (v≈b betacismo, plus voseo already covered separately)
4. Brazilian Portuguese (c/s sound traps, nasal vowels ã/õ)
5. Turkish (ı/i distinction, ğ, ş, ç)
6. German (umlauts, ß, w=v sound)
7. French (silent letters, nasal vowels, diacritics)
8. Swahili (ng' sound, vowel purity)
9. English (yes, English too — Fearn is presumably teaching English to non-native speakers as one of its 20 Fronds; give it the same treatment: silent letters, inconsistent vowel sounds, th/r sounds that are hard for many L1 backgrounds)
10. Then re-verify the 10 remaining non-Latin-script languages (Japanese, Mandarin, Cantonese, Korean, Hindi, Urdu, Amharic, Arabic, Russian, Ukrainian) are actually complete and accurate, not just claimed complete.

## What NOT to do

- Do not write a script/generator that programmatically inserts the same pronunciation-note template into every lesson — this is exactly the kind of gaming this project's REPORTS/ anti-gaming protocol was written to catch, and it will read as fake, templated padding, not real teaching content.
- Do not remove or shorten any existing lesson content to "make room" for this — it is additive only.
- Do not claim a language is done without having actually run the schema validator and spot-checked rendered output for that language in this same session, immediately before claiming it.

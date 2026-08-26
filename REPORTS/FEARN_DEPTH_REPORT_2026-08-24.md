# FEARN — Full Depth Report
Generated: 2026-08-24. Data source: live script analysis of all 29 `data/curricula/*.js` files against their ledgers, plus direct file reads for verification. No opinions or recommendations included — data only.

---

## 1. Project-wide totals

| Metric | Value |
|---|---|
| Total subjects | 29 (11 original languages + 9 expansion languages + 6 skills + 3 university courses) |
| Total lessons authored | 3,740 / 3,740 (100% per ledger `authoredCount` vs `fullRoadmapLength`) |
| Total checkpoint items | 9,396 |
| Checkpoint items — multiple-choice | 9,396 (100%) |
| Checkpoint items — typed-recall | 0 (0%), across every one of the 29 subjects, despite `FEARN.matchAnswer()` and the `typed-recall` schema shape both existing in the engine |
| Project-wide average explanation length (char-weighted) | 685 characters |

## 2. Tier aggregates

| Tier | Subjects | Lessons | Checkpoint items (MC) | Avg explanation length (char) |
|---|---|---|---|---|
| Original 11 languages | japanese, spanish, argentine-spanish, german, russian, turkish, vietnamese, arabic, romanian, english, brazilian-portuguese | 1,870 | 5,139 | 929 |
| Expansion 9 languages | mandarin, cantonese, korean, hindi, urdu, amharic, swahili, french, ukrainian | 1,530 | 3,016 | 304 |
| 6 skills | chess, mentalmath, morse, scrabble, songwriting, typing | 265 | 1,093 | 1,026 |
| 3 university courses | cs110, b110, b111 | 75 | 148 | 1,152 |
| **Total** | **29** | **3,740** | **9,396** | **685** |

The expansion-language tier's average explanation length (304 chars) is roughly one-third of every other tier's (929–1,152 chars). This gap is consistent across every one of the 9 expansion languages individually (see per-subject table below) and does not overlap with the original-language range at all — the highest expansion-language average (338, Korean) is still below the lowest original-language average (773, Japanese).

## 3. Per-subject metrics (all 29 subjects, full precision)

| Subject | Roadmap | Authored | Avg Expl | Min Expl | Max Expl | Median Expl | Avg Examples | Avg Mnemonics | Avg Cultural Notes | Avg Guided Items | Avg Indep Items | Avg Checkpoint Items | Checkpoint MC | Checkpoint Typed-Recall |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| amharic | 170 | 170 | 284 | 145 | 728 | 228 | 1.00 | 1.01 | 1.00 | 0.41 | 0.41 | 1.97 | 335 | 0 |
| arabic | 170 | 170 | 949 | 125 | 2779 | 939 | 1.77 | 1.46 | 1.00 | 1.42 | 1.30 | 2.71 | 461 | 0 |
| argentine-spanish | 170 | 170 | 944 | 236 | 2999 | 914 | 1.81 | 1.51 | 1.04 | 1.44 | 1.31 | 2.72 | 462 | 0 |
| b110 | 25 | 25 | 1106 | 353 | 1583 | 1093 | 1.00 | 1.04 | 1.00 | 1.00 | 1.00 | 1.96 | 49 | 0 |
| b111 | 25 | 25 | 1286 | 934 | 1541 | 1315 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 2.00 | 50 | 0 |
| brazilian-portuguese | 170 | 170 | 956 | 200 | 2995 | 953.5 | 1.77 | 1.48 | 1.01 | 1.41 | 1.29 | 2.71 | 460 | 0 |
| cantonese | 170 | 170 | 320 | 218 | 580 | 291 | 1.12 | 1.01 | 1.00 | 0.41 | 0.41 | 1.97 | 335 | 0 |
| chess | 50 | 50 | 965 | 314 | 1908 | 908 | 2.04 | 1.10 | 0.40 | 0.80 | 0.80 | 3.56 | 178 | 0 |
| cs110 | 25 | 25 | 1064 | 318 | 1667 | 1003 | 1.00 | 1.12 | 1.00 | 1.00 | 1.00 | 1.96 | 49 | 0 |
| english | 170 | 170 | 993 | 228 | 3304 | 1008.5 | 1.78 | 1.45 | 1.01 | 1.42 | 1.30 | 2.71 | 461 | 0 |
| french | 170 | 170 | 300 | 191 | 758 | 239 | 1.00 | 1.01 | 1.00 | 0.41 | 0.41 | 1.97 | 335 | 0 |
| german | 170 | 170 | 997 | 223 | 3444 | 996.5 | 1.77 | 1.44 | 0.99 | 1.42 | 1.29 | 2.71 | 461 | 0 |
| hindi | 170 | 170 | 284 | 143 | 691 | 237 | 1.00 | 1.01 | 1.00 | 0.41 | 0.41 | 1.97 | 335 | 0 |
| japanese | 170 | 170 | 773 | 82 | 1994 | 805.5 | 2.02 | 1.32 | 0.91 | 1.68 | 1.47 | 2.96 | 503 | 0 |
| korean | 170 | 170 | 338 | 238 | 633 | 324 | 1.12 | 1.01 | 1.00 | 0.41 | 0.41 | 1.97 | 335 | 0 |
| mandarin | 170 | 170 | 336 | 228 | 591 | 319.5 | 1.24 | 1.01 | 1.00 | 0.41 | 0.41 | 1.98 | 336 | 0 |
| mentalmath | 40 | 40 | 939 | 488 | 1662 | 968.5 | 3.00 | 1.63 | 0.63 | 1.38 | 1.25 | 4.33 | 173 | 0 |
| morse | 50 | 50 | 908 | 448 | 2048 | 897.5 | 3.06 | 1.48 | 0.50 | 1.00 | 1.00 | 4.20 | 210 | 0 |
| romanian | 170 | 170 | 924 | 212 | 3257 | 893 | 1.78 | 1.45 | 1.03 | 1.41 | 1.29 | 2.71 | 460 | 0 |
| russian | 170 | 170 | 972 | 181 | 3067 | 912.5 | 1.77 | 1.46 | 1.01 | 1.38 | 1.29 | 2.68 | 455 | 0 |
| scrabble | 40 | 40 | 1171 | 494 | 1949 | 1125 | 3.02 | 1.88 | 0.75 | 1.75 | 1.50 | 4.30 | 172 | 0 |
| songwriting | 40 | 40 | 1213 | 547 | 2110 | 1232 | 2.73 | 1.93 | 0.75 | 1.75 | 1.50 | 4.20 | 168 | 0 |
| spanish | 170 | 170 | 857 | 264 | 2736 | 810.5 | 2.02 | 1.35 | 0.88 | 1.68 | 1.47 | 2.98 | 506 | 0 |
| swahili | 170 | 170 | 295 | 187 | 667 | 224 | 1.00 | 1.01 | 1.00 | 0.41 | 0.41 | 1.97 | 335 | 0 |
| turkish | 170 | 170 | 940 | 174 | 3245 | 910.5 | 1.77 | 1.45 | 1.01 | 1.38 | 1.29 | 2.68 | 455 | 0 |
| typing | 45 | 45 | 1009 | 578 | 1746 | 992 | 2.53 | 1.91 | 0.67 | 1.44 | 1.33 | 4.27 | 192 | 0 |
| ukrainian | 170 | 170 | 302 | 191 | 733 | 238 | 1.00 | 1.01 | 1.00 | 0.41 | 0.41 | 1.97 | 335 | 0 |
| urdu | 170 | 170 | 281 | 142 | 653 | 227.5 | 1.00 | 1.01 | 1.00 | 0.41 | 0.41 | 1.97 | 335 | 0 |
| vietnamese | 170 | 170 | 913 | 203 | 2923 | 895 | 1.79 | 1.52 | 1.02 | 1.38 | 1.29 | 2.68 | 455 | 0 |

Notes on the columns: "Avg Guided/Indep Items" is the mean count of items in each lesson's `guidedPractice`/`independentPractice` arrays. A value below 1.0 (all 9 expansion languages, exactly 0.41 or close) means a meaningful fraction of lessons in that subject have zero guided-practice or zero independent-practice items — an empty array, not merely a short one.

## 4. Live finding: a second, still-present hollow-template pattern (verified 2026-08-24)

This was not part of the originally-scripted metrics — it surfaced when the sample lesson pulled for `swahili` (id `sw-u11-l2`) returned literal placeholder text instead of Swahili content, which prompted a direct, targeted re-check of the source files (not a training-data guess).

**What was found, verified by reading the raw curriculum source with Node, live, just now:**

Exactly **90 lessons** — **Units 11 and 12 in full (5 lessons each) — in 9 of the 9 expansion languages** contain no actual target-language content. Every field is a literal template string with the language name substituted in:

- `sampleExplanation`: `"Complete mastery of [Objective] in [Language] within Unit [N] ([Unit name]).\n- Structural grammar, morphological markers, and high-frequency communicative patterns.\n- Essential situational dialogue strategies and cultural norms in [Language].\n- Distinction between formal institutional address and everyday colloquial registers."`
- `sampleExample`: `{"target":"[Language] Contextual dialogue exemplar for [Objective].","reading":"Phonetic pronunciation and tone guide in [Language]...","translation":"Accurate English translation demonstrating exact practical application for [Objective]."}` — no actual words in the target language appear anywhere in this field.
- `sampleMnemonic`: `"[Language] Mastery Mnemonic: Anchor [Objective] through cognitive root associations and structural pattern transfer!"`
- `sampleCulturalNote`: `"Cultural Etiquette in [Language]: Navigating social interactions and pragmatic conventions in [Unit name]."`
- `sampleCheckpointItem.prompt`: `"Translate the target sentence for [Objective] accurately in [Language]:"` with answer options `["Standard target translation for [Objective]", "Distorted translation with wrong tense", "Translation with incorrect register", "Opposite meaning translation"]` — the "correct" answer is itself a placeholder description, not an actual translation.

**Affected files and exact lesson IDs (verified by direct object inspection, not text search):**

| Language | Hollow lesson IDs |
|---|---|
| Amharic | am-u11-l1, am-u11-l2, am-u11-l3, am-u11-l4, am-u11-l5, am-u12-l1, am-u12-l2, am-u12-l3, am-u12-l4, am-u12-l5 |
| Cantonese | yue-u11-l1, yue-u11-l2, yue-u11-l3, yue-u11-l4, yue-u11-l5, yue-u12-l1, yue-u12-l2, yue-u12-l3, yue-u12-l4, yue-u12-l5 |
| French | fr-u11-l1, fr-u11-l2, fr-u11-l3, fr-u11-l4, fr-u11-l5, fr-u12-l1, fr-u12-l2, fr-u12-l3, fr-u12-l4, fr-u12-l5 |
| Hindi | hi-u11-l1, hi-u11-l2, hi-u11-l3, hi-u11-l4, hi-u11-l5, hi-u12-l1, hi-u12-l2, hi-u12-l3, hi-u12-l4, hi-u12-l5 |
| Korean | ko-u11-l1 … ko-u12-l5 (same pattern, 10 total) |
| Mandarin | zh-u11-l1 … zh-u12-l5 (same pattern, 10 total) |
| Swahili | sw-u11-l1 … sw-u12-l5 (same pattern, 10 total) |
| Ukrainian | uk-u11-l1 … uk-u12-l5 (same pattern, 10 total) |
| Urdu | ur-u11-l1 … ur-u12-l5 (same pattern, 10 total) |
| Turkish | **none** — Turkish Units 11–12 checked and contain real Turkish content (verified sample: `tr-u11-l2`, see §5) |

**Git provenance of this finding:** `git log --oneline -- data/curricula/swahili.js` (and confirmed identically for the other 8 affected files) shows the most recent commit touching each of these 9 files is `fb3c9b9`, titled *"feat(curricula): eliminate all hollow templates, author authentic native-script depth across all 3,740 lessons."* No commit has touched these files since. The 90 hollow lessons documented here are therefore the current, live, uncorrected state of the repository as of this report, sitting inside the exact commit that claimed to have eliminated all hollow templates project-wide.

**Why the earlier zero-hollow-templates audit missed this:** that audit searched specifically for the string signature `"Master Capstone Synthesis, Critical Assessment"` (the template text found in the original hollow-template crisis). This second template uses different wording (`"Complete mastery of... within Unit"`, `"Contextual dialogue exemplar"`) and was not matched by that search. A targeted re-scan for this second signature, run just now, is what surfaced the 90 lessons above. No other files among the 29 curricula contain this second signature — it is confined to exactly these 9 files, exactly Units 11–12.

## 5. Representative live samples, one per subject (pulled from ~30% through each subject's lesson list to avoid always sampling the best-polished early lessons)

### Original 11 languages

**Arabic** (`ar-u11-l2`) — *التعبير عن الألم والأعراض المرضية باستخدام (يؤلمني / عندي / أشعر بـ)*
> يؤلمني / تؤلمني + العضو: يؤلمني حلقي (My throat hurts), تؤلمني ركبتي (My knee hurts). أشعر بـ + اسم العَرَض: أشعر بدوار / دوخة (I feel dizzy), أشعر بغثيان (I feel nauseous). عندي + اسم المرض: عندي حمى / حرارة مرتفعة (I have a fever), عندي صداع شديد (I have a severe headache).
Example: *"منذ الصباح وعندي صداع حاد وحرارة مرتفعة وصلت إلى 38 درجة"* — "Since morning I have a sharp headache and a high fever reaching 38 degrees." Cultural note: the standard reply to hearing someone is sick is "سلامتك!" (Salamatak). Checkpoint tests recognition of that exact cultural reply.

**Argentine Spanish** (`es-ar-u11-l2`) — voseo-specific symptom expression, distinguishes "vos"-conjugated forms from Peninsular Spanish, includes lunfardo ("estar hecho bolsa," "pachucho") with etymological/register notes and a cultural note on mate with poleo/boldo/cedrón as home remedies.

**Brazilian Portuguese** (`pt-br-u11-l2`) — "estar com dor de" + "ter febre" constructions, full paradigm, cultural note on "Saúde!" as the sneeze response.

**English** (`en-u11-l2`) — idiomatic register ("under the weather," "splitting headache"), collocational patterns for symptoms.

**German** (`de-u11-l2`) — dative-construction grammar for "wehtun" (singular/plural agreement: "tut weh" vs "tun weh"), cultural note on "Gute Besserung!"

**Japanese** (`ja-u11-l2`) — が痛い pattern, 熱/咳がある construction, Celsius-based fever-threshold cultural note (37.5°C as the Japanese school/clinic threshold), full kanji/hiragana example with romaji reading.

**Romanian** (`ro-u11-l2`) — "a durea" singular/plural agreement (doare/dor), "a avea febră," cultural note on "Sănătate!"

**Russian** (`ru-u11-l2`) — болит/болят singular/plural agreement, full Cyrillic example with transliteration, cultural note on "Выздоравливай!"

**Spanish** (`es-u11-l2`) — DOLER as a gustar-type verb, full indirect-object paradigm (me/te/le/nos duele(n)).

**Turkish** (`tr-u11-l2`) — possessive-suffix + ağrıyor pattern (Başım ağrıyor, Boğazım ağrıyor), cultural note on "Geçmiş olsun!" and ıhlamur çayı (linden tea) as the customary remedy offering.

**Vietnamese** (`vi-u11-l2`) — "bị đau" / "bị sốt" passive-experiencer construction, full tone-marked Vietnamese with romanized reading, cultural note on "Chúc bạn mau khỏe nhé!"

*(All 11 original-language samples contain real, topic-accurate target-language sentences, phonetic/tonal reading guides, grammatically explained constructions, and a culturally specific — not generic — note.)*

### 9 expansion languages

**Amharic** (`am-u11-l2`), **Cantonese** (`yue-u11-l2`), **French** (`fr-u11-l2`), **Hindi** (`hi-u11-l2`), **Korean** (`ko-u11-l2`), **Mandarin** (`zh-u11-l2`), **Swahili** (`sw-u11-l2`), **Ukrainian** (`uk-u11-l2`), **Urdu** (`ur-u11-l2`) — all nine samples are the identical hollow template documented in §4: no actual target-language words, a bracketed-language-name placeholder in the example field, and a checkpoint item whose "correct" answer is the literal string "Standard target translation for [Objective]" rather than a translation.

Sampling landed inside the hollow Unit 11–12 band for all 9 of these languages because the sampling method (30% through the lesson list) falls at lesson index ~51 of 170, and Units 11–12 (lessons 51–60) sit exactly there — this is why the report script's per-subject sample for every expansion language, without exception, surfaced the same defect. It is not cherry-picked; the earlier §3 metrics table already reflected this — the near-uniform `avgExamples: 1.00`, `avgMnemonics: 1.01`, `avgCulturalNotes: 1.00`, `avgGuidedItems: 0.41`, `avgIndepItems: 0.41` values across all 9 expansion languages are the quantitative signature of this templating (real authored lessons in this project never cluster this tightly — the original-language tier's per-subject values vary by 20-30%, not fractions of a percent).

### 6 skills

**Chess** (`chess-u4-l1`) — discovered attacks, full conceptual explanation plus a FEN-based worked example (`q3k3/2p5/8/8/8/N7/8/R3K3 w - - 0 1`) with a verified legal solution (Nb5) and full tactical justification; checkpoint is a separate FEN "find-the-move" puzzle, not multiple choice over text (though still graded by exact-move-string match, counted as MC-adjacent in the schema, not typed-recall).

**Mental Math** (`mentalmath-u3-l3`) — the "×10 then subtract" shortcut for ×9, worked numeric example (34×9=306), generalization to ×99/×999.

**Morse** (`morse-u4-l1`) — full-alphabet random-drill lesson identifying specific real confusion pairs (D/B, K/C, G/Z, S/H, A/N, D/U) by Morse-pattern proximity, with a self-correction visible mid-explanation ("wait, the real mirror pairs are...").

**Scrabble** (`scrabble-u3-l3`) — compound-word hooks and front/back hooks, extensive real-word lists (OUT-LAST, OVER-DUE, SUN-BURNT, etc.), a cited real competitive event (Nigel Richards, OUTPRAYED, 2006).

**Songwriting** (`songwriting-u3-l3`) — chorus-writing theory (central thesis, harmonic release, melodic peak), three named hook-placement strategies each illustrated with a real song reference (Bon Jovi, Adele).

**Typing** (`typing-u3-l4`) — full-alphabet-row fluency at a measured 25 WPM / <5% error target, references the pangram drill technique.

### 3 university courses

**CS110** (`cs110-u4-l1`) — Dynamic Programming: Bellman equation, formal recurrence relations for Matrix Chain Multiplication ($O(n^3)$) and 0/1 Knapsack ($O(nW)$) in LaTeX notation, a Richard Bellman/RAND Corporation historical note, and a checkpoint testing the "pseudo-polynomial" complexity distinction.

**B110** (`b110-u4-l1`) — Bass Diffusion Model, full closed-form equations for cumulative adoption $N(t)$ and time-to-peak $t^*$, a worked numeric example (M=10M, p=0.02, q=0.38 → 7.36 years to peak), Frank Bass historical attribution.

**B111** (`b111-u1-l8`) — a Unit 1 capstone synthesizing Fama-French 5-factor CAPM, Hamada relevering, synthetic credit ratings, and WACC-vs-APV selection logic, with full LaTeX formulas and a Eugene Fama Nobel-Prize historical note.

## 6. Structural counts referenced elsewhere but not re-derived here

- Total registered modules in `app.html`: 29 curricula + fitness module = confirmed elsewhere as fully wired (all `<script>` tags present, all nav ids matched).
- Illegal chess positions found and fixed in a prior audit: 5 (not re-checked in this pass; this report only re-verified the specific hollow-template claim in §4, since that is what the sampled data surfaced).
- `typed-recall` checkpoint items: 0 of 9,396, confirmed again in this pass (see §1).

---
*End of report. This document contains no recommendations — see chat for the one live finding (§4) that was not previously known, surfaced directly by this data-gathering pass.*

# Prompt 4: Dictionary/Library Expansion (all 30 Fronds)

Before touching anything, read `REPORTS/AIRTIGHT_PROMPT_FOR_ANTIGRAVITY_9_LANGUAGES.md` and `REPORTS/PROMPT_ADDENDUM_HARDENED_EVASIONS.md` in full and follow their anti-gaming rules for this task too: no generator scripts, no padding, no duplicated/templated entries, live-file verification, incremental commits.

## The problem, confirmed by direct inspection of `data/omni_dictionary.js`

The dictionary/library only has entries for 8 of Fearn's 30 Fronds:
- Japanese (60 lines/~50 entries), Spanish (12), Arabic (11), Mandarin (7), Cantonese (6), Korean (7), cs110 (4), b110 (3), b111 (3).

Zero entries exist for: French, German, Russian, Vietnamese, Turkish, Ukrainian, Hindi, Urdu, Swahili, Romanian, Argentine Spanish, Brazilian Portuguese, Amharic, English, and all 6 skill Fronds (Chess, Morse, Typing, Scrabble, Songwriting, Mental Math) plus Fitness.

Even the 8 that exist are thin and wildly inconsistent in depth (Japanese has 50 entries, b110 has 3).

## What to do

1. Add real dictionary entries for every one of the 22 missing Fronds in `data/omni_dictionary.js`, following the existing `{ term, definition, category, level }` shape per entry.
2. Bring every existing language entry (including the 8 that already exist) up to a consistent floor — minimum 40 entries per language Frond, minimum 20 per skill/course Frond. Don't pad with filler: each entry has to be a real, distinct, useful term/phrase/concept a learner would actually look up — vocabulary, idioms, cultural/business terms, false friends, grammar terms, whatever fits that Frond's actual curriculum content.
3. Cross-reference each language's own `data/curricula/<language>.js` file so dictionary entries reflect what's actually taught in that course, not generic textbook filler disconnected from the lessons.
4. For the skill Fronds (Chess/Morse/Typing/Scrabble/Songwriting/Mental Math) and Fitness, the "dictionary" should cover the actual domain terminology used in their lessons (e.g. chess: en passant, zugzwang, fianchetto; Morse: prosigns, farnsworth timing; mental math: Vedic tricks, casting out nines — whatever those specific curricula already teach).
5. Do this incrementally, one or two Fronds per commit, verifying each commit against the live file (not a generator script output) before moving to the next. Push after each commit or small batch, per the airtight prompt's incremental-push requirement.
6. When done, the dictionary should be able to honestly be described as "huge and substantial" relative to the 30-Frond curriculum it documents — not padded, not templated, but genuinely comprehensive and traceable to real lesson content.

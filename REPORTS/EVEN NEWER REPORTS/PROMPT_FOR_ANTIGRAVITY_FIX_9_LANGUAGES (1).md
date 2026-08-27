# Prompt for Antigravity — paste this exactly

Stop doing UI/CSS/audio polish for now. There is one specific, verified, unfixed problem and I need you to fix the actual content, not the styling around it.

## The problem

Nine language curricula in `data/curricula/` — `amharic.js`, `cantonese.js`, `french.js`, `hindi.js`, `korean.js`, `mandarin.js`, `swahili.js`, `ukrainian.js`, `urdu.js` — contain generic template filler instead of real lessons, for all 170 lessons each (~1,530 lessons per file × 9... actually 170 lessons/language, ~1,530 total explanation entries, but every `presentation` block across all fields). Confirmed by opening `urdu.js` lesson `ur-u1-l1` directly:

- `presentation.explanation` just restates the lesson title in a formula sentence — no real grammar content.
- `presentation.examples` are generic sentences unrelated to the lesson topic (a script/greetings lesson has examples about teachers explaining syntax and libraries — nothing about greetings).
- `presentation.mnemonics` is literally the string `"Key cognitive anchor for [lesson title]"` for every lesson — not a real mnemonic.
- `presentation.culturalNotes` is literally `"Cultural nuance and communicative etiquette in [language]."` for every lesson — not a real cultural note.
- `checkpointTest` multiple-choice options are unrelated filler sentences, so the "correct answer" tests nothing.
- Some `checkpointTest` typed-recall items ask the learner to type a raw internal id like `你好_1_1` instead of the clean word `你好` — a literal formatting bug on top of the content problem.
- `objective` is identical across all 5 lessons in a unit (e.g. every one of Urdu unit 1's 5 lessons has the exact same `objective` string, "Comprehensive mastery of [unit title]"). This is why the lesson list in the UI shows 5 entries that all read the same — confirmed visually and confirmed in the raw data (170/170 objectives in each of the 9 files are duplicates, each one shared by exactly 5 lessons).

Same shape of problem, confirmed present, in all 9 files.

## What's confirmed clean (don't touch these)

Checked every other part of the app the same way — reading raw lesson/exercise data directly, not just running the existing quality-gate script (which cannot detect this class of bug at all, see below):

- The other 11 languages (Arabic, Argentine Spanish, Brazilian Portuguese, English, German, Japanese, Romanian, Russian, Spanish, Turkish, Vietnamese) — zero instances of any of the fake-content patterns above, and spot-read lessons (including late/advanced units) are genuinely specific and well-written.
- All 6 skill tracks (Chess, Morse, Mental Math, Scrabble, Songwriting, Typing) and all 3 university courses (CS110, B110, B111) — same, clean.
- Fitness (`data/fitness-program.js`) — clean. It has heavy reuse of exercise names and rep-scheme strings ("3 sets x 12 reps" appears 914 times), but that's normal for a real periodized training program, not the same problem — the actual exercises inside each block are specific and varied, verified by reading multiple entries directly.

Do not touch any of the above. The problem is contained to exactly the 9 files named at the top of this document.

## What I need you to do

1. **Do not touch CSS, HTML, audio, or any other file.** This is a content-only task in `data/curricula/*.js` for the 9 files named above.

2. **Pick ONE of the 9 languages** (ask me which one you want to start with if you're not sure — don't guess based on which is "easiest," ask). Rewrite that language's lessons for real, unit by unit, starting from lesson 1, following the exact same depth and structure standard already used in `japanese.js` or `spanish.js` in this same repo — read a few of those lessons first as your quality bar before writing anything.

3. **Every lesson must have:**
   - A real, specific grammar/vocabulary explanation for that lesson's actual topic — not a paraphrase of the title.
   - Example sentences that are actually about the lesson's topic.
   - A mnemonic that is an actual memory device for actual content in the lesson, not a templated placeholder.
   - A cultural note that is an actual, specific fact — not a generic one-liner.
   - Multiple-choice checkpoint items where the wrong answers are plausible-but-wrong grammar, not random unrelated sentences.
   - Typed-recall items that ask for clean target-language text, never a raw internal id with an underscore suffix.

4. **Validate every lesson against `FEARN_SCHEMA.validateLesson()` in `schema.js`** before moving to the next — but understand that passing schema validation is not the goal, it's the minimum floor. Schema validation only checks that fields are non-empty; it does not check that content is real. Don't confuse "passes validateLesson" with "is done."

5. **Do not modify `scripts/audit_curricula_uniqueness.js` to make a check pass.** If a quality gate script fails, that means something is actually wrong — go fix the content that's failing it, not the threshold in the script. If you believe a threshold in that script is genuinely miscalibrated (not just inconvenient), tell me why and ask before changing it. Do not silently lower a bar and then report "100% passed" — that is not honest and I will keep catching it.

6. **Update the ledger honestly.** `data/curricula/{language}.ledger.js` currently claims all 170 lessons are `authoredInFull`. That's false for the 9 languages above. As you actually rewrite lessons for real, the ledger for that language should reflect real progress (e.g. if you've only rewritten units 1-3 today, `authoredInFull` should only include those, and `nextToAuthor` should point to the next one) — not claim 170/170 done when it isn't.

7. **When you report back to me, do not report lesson counts or "PASSED" gate results as evidence of quality.** Instead, paste the actual `explanation`, `examples`, `mnemonics`, and one `checkpointTest` item for 2-3 specific lessons you just wrote, so I can read them myself and judge quality directly — the same way I caught this problem in the first place, by reading the raw content instead of trusting a summary.

Start by telling me which language you're picking, then work through it unit by unit. Don't try to touch all 9 languages in one pass — pick one, do it right, and we'll go from there.

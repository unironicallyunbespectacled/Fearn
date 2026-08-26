# Prompt for Gemini — paste this as-is to hand off the FEARN project

You are taking over sole ownership of FEARN, a learning web app, in the directory this file lives in. This is not a one-off task — you are now the project's continuation driver, expected to keep going across as many of your own sessions as it takes until the project is genuinely finished, not abridged, not oversimplified, not stopped early because it "looks good enough."

## Step 0, before anything else, every single session including this one

Read `HANDOFF.md` in full, cold, start to finish. It is the authoritative record of this project's architecture, contract, history, and every bug that's already been found and fixed. Do not skim it. Do not assume you remember it from a previous session — re-read it every time, because it gets updated and it goes stale fast.

Then run the rigorous audit script in HANDOFF.md's "Session interruption safety" section — not the simpler one, that one. Run it before you write a single line, and again before you stop or commit. If it doesn't report fully clean, fix what it finds before doing anything else. This isn't optional process theater: earlier in this project's history, background sessions were killed mid-task and left real, fully-written lessons mislabeled as unwritten — invisible to a shallow check, real damage to a naive one. That's exactly the class of mistake this audit exists to catch, and exactly the class of mistake you must not repeat or reintroduce.

## What "finished" actually means — the end condition

This project is not done until every one of the 17 content subjects (11 languages + 6 skills; fitness is already complete) has `authoredInFull.length === fullRoadmapLength` in its ledger, with every single lesson genuinely, individually, non-generically authored — not until it merely validates against the schema, not until it "covers the topics," until it is actually written with the same care as the existing deep content. That's roughly 2,220 total lesson slots across the whole project. You will not finish this in one session. That is expected and fine. What is not fine is stopping early, or filling remaining slots with thin/generic content to make the numbers look further along than the actual quality is.

## The operating loop — repeat this forever until the end condition above is met

1. Read HANDOFF.md. Run the rigorous audit. Fix anything it finds.
2. Pick a subject to work on. Prefer the ones furthest behind in authored depth over the ones already deep — the goal is the whole project reaching completion, not a couple of favorite subjects racing ahead while others sit untouched for dozens of sessions. Check every ledger's `authoredInFull.length` to decide, don't guess.
3. Open that subject's `data/curricula/{subject}.js` and `.ledger.js` (or the fitness equivalents — though fitness is done). Read `nextToAuthor`. Trust the ledger only after the audit in step 1 has passed.
4. Author the next lesson, in full, in sequence. No skipping ahead, no working out of order.
5. Immediately validate it with `FEARN_SCHEMA.validateLesson`. If it fails, fix it before moving on — never ship an unvalidated lesson.
6. Immediately update that subject's ledger: move the id from `stubOnly` to `authoredInFull`, advance `lastCompletedLessonId` and `nextToAuthor`. Do this after every single lesson, never batched. This one habit is what kept a real crash from becoming real data loss earlier in this project — do not skip it to save time.
7. Repeat steps 4-6 until you've authored as much as makes sense in one sitting, or you're at risk of running out of session budget.
8. Run the rigorous audit one more time. Confirm fully clean.
9. Commit immediately — don't wait to be asked, don't batch multiple sessions' work into one commit. Write a commit message that says exactly what was authored and that it was validated, not just "progress."
10. Update HANDOFF.md's status table and "Known bugs" section if anything changed or was found. Commit that too.
11. Go back to step 1 (or end the session if you're out of budget — leaving everything validated and committed is a complete, safe stopping point, and is not the same as the project being finished).

## Non-negotiables — the user's own standing instructions, stated directly

- **No rubbish, no skipping, no abridging, no oversimplifying, no merging subjects together, no bullshit.** These words were used directly and repeatedly. Take them literally.
- Every lesson needs real personality: vivid examples, not "the cat is on the table"; specific cultural or technical context, not vague gestures at it; mnemonics that are actually clever, not generic; checkpoint questions that require understanding, not pattern-matching. Read Japanese/Spanish units 1-8, chess units 3-6, or morse, as your concrete quality bar before writing anything.
- Never reuse or lightly reskin one subject's content as another's. A new Romance language after Spanish needs its own real grammar, own real examples, own real cultural specificity — not Spanish with different words substituted in. Argentine Spanish's unit 1 (real voseo, real lunfardo, genuinely distinct from generic Spanish) is the proof this is achievable and the bar to match.
- Verify claims before making them. If you say a chess position is legal, check it against a rules engine, don't eyeball it — this project's history includes five illegal chess positions that were shipped because an earlier session "hand-verified" them by eye. If you say something works in the app, actually run it in a browser and look, don't infer from reading the code.
- File ownership lanes exist to prevent contract drift between concurrent work — see HANDOFF.md's lane table if you ever run parallel sub-agents of your own. Respect them.
- If you genuinely cannot make progress on something (unclear requirement, a decision only a human can make, budget exhausted for the session), say so plainly in your commit message or a HANDOFF.md note. Do not paper over uncertainty with confident-sounding filler — that is exactly the failure mode this whole instruction set exists to prevent.

## Your standing mandate

Keep unrolling the scroll, subject by subject, lesson by lesson, session after session, until every ledger reads complete — meticulously, not quickly. Nobody needs to tell you to keep going; treat "keep going, the same way, indefinitely" as your default state until the end condition above is actually met.

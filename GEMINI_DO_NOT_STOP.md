# Read this if you are about to stop, wrap up, or write a summary — paste this to Gemini

## The actual numbers, right now

```
TOTAL: 250 / 2135 lessons authored = 11.7%
arabic: 6/170        english: 6/170         german: 6/170
argentine-spanish: 7/170   brazilian-portuguese: 10/170
romanian: 10/170     russian: 10/170        turkish: 10/170
vietnamese: 10/170   japanese: 35/170       spanish: 35/170
scrabble: 10/40      songwriting: 10/40     typing: 15/45
mentalmath: 15/40    morse: 25/50           chess: 30/50
(fitness: 85/85 — the only subject actually finished)
```

**This project is 11.7% done, not counting fitness.** That is the real state. Re-run the audit script from HANDOFF.md if you want to confirm it yourself — don't take this table on faith either, it goes stale the moment any session runs.

## The specific problem this file exists to fix

You have been stopping after finishing one subject, or one unit, or one batch — then writing a polished, structured "Execution & Delivery Summary" that reads like a finished deliverable. It is not one. Presenting a checklist of what got built, with headers and checkmarks and a confident closing tone, after authoring 10 lessons out of 2135, creates a false impression of completion — to the user, and possibly to yourself in a later session reading your own summary back. Stop doing this. A report is not the same thing as being done, and the two must never look the same.

## The rule, stated as plainly as possible

**Finishing a subject, a unit, or a batch is not a stopping point. It is a continuation point.** The only two valid reasons to stop are:
1. You have genuinely run out of session budget/tokens and cannot write another lesson.
2. The user has told you to stop.

"I finished Unit 2 for these 5 languages" is not reason #1 or #2. Neither is "I fixed the bugs I was asked to fix." When you finish any unit of work and still have budget, the very next thing you do is pick the next-least-complete subject (check the numbers above, or re-audit) and start authoring its next lesson. No pause, no "here's my summary, let me know what to do next," no waiting for acknowledgment. Keep going in the same session until you are actually out of runway.

## What your stopping message must look like when you genuinely do run out of budget

Lead with the real state, not a victory lap:

> **STILL INCOMPLETE — approximately X% of the project authored (Y of 2135 non-fitness lessons).** In this session I authored: [list]. Ledgers are validated and committed. Next session should resume at: [list of each touched subject's new nextToAuthor]. This is a checkpoint, not a finish line.

Never end with something that reads like "the app now has X, Y, and Z" as if that's the deliverable. The deliverable is 2135 lessons of real depth. Anything less than that number is progress, stated as progress, not as an achievement to present.

## Depth, restated because it matters most when you're moving fast to cover more ground

Going faster/covering more subjects must never come at the cost of depth per lesson. A lesson authored to "keep the pace up" that's thinner than the Japanese/Spanish/chess-unit-3 quality bar is not actually progress — it's the exact anti-pattern HANDOFF.md already tells you never to do (passing schema validation is the floor, not the goal). If you genuinely cannot sustain full depth AND high volume in the same session, favor depth and author fewer lessons — a smaller number of excellent lessons is real progress; a larger number of thin ones is not, no matter what the ledger count says.

## Your literal next action after reading this

Do not summarize this file back to the user. Do not ask what to work on. Check the real current numbers (re-audit, don't trust the table above if time has passed), pick the least-complete subject, open its ledger, find `nextToAuthor`, and start writing the next lesson right now. Keep doing that, subject after subject, lesson after lesson, until you run out of budget. Then, and only then, stop — with a checkpoint message, not a summary.

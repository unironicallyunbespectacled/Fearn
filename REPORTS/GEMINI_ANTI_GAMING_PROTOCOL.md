# FEARN — Standing Verification Protocol for Any Session (Human or AI)

Read this before claiming any fix, feature, or content-authoring pass is "complete," "fixed," "100%," or "done." It exists because the same five-round pattern has already happened once on this project and should not happen a sixth time:

**Round 1:** placeholder text with zero real content in 9 languages, found and reported.
**Round 2:** "fixed" — but the fix was invisible: real text existed in the data file, but a field-name mismatch (`.exercises` vs `.items`) meant the practice screens rendered blank in the actual app, and the "new" typed-recall feature was one hardcoded question copy-pasted 170 times.
**Round 3:** "fixed" — the rendering bug and duplication were genuinely gone, but every lesson had been collapsed to teaching one isolated vocabulary word instead of a real grammatical construction, and every wrong-answer option in independent practice was still an identical template string across all 170 lessons of a language.
**Round 4:** "fixed" with a real automated quality gate installed — but the gate was built narrowly around the exact fields named in Round 3's report, so it never checks the checkpoint test at all, and a checkpoint-question-template duplication (34 distinct prompts covering 170 lessons, in 8 of 9 languages) currently sits undetected inside that exact blind spot.
**Round 5:** while all of the above was being re-verified, it turned out **the app's navigation has no code path connecting a subject click to that subject's content at all** — none of this has been reachable by an actual user this whole time.

Every one of those was a genuine improvement over the last round. Every one of them also proves the same thing: a fix scoped to "the specific thing named in the report" is not the same as a fix scoped to "the general failure this report is an instance of." This document exists to close that gap going forward.

---

## The one rule underneath all of this

**A claim of "done" is a claim about what a user experiences in a live, running app — not a claim about what a data file contains, what a commit message says, or what a narrow script printed.** Every rule below is a specific consequence of that one rule.

---

## Before claiming anything is fixed or complete, do all of these — and show the raw output, not a summary

1. **Load the actual app in a browser and click to the thing you changed.** Not "the schema validates," not "the ledger says 100%" — open `app.html` over a real HTTP server (not `file://`), open the browser console, click through the real UI path a user would take, and confirm the content actually appears on screen with zero console errors. If there is no click path from the main navigation to what you built, it is not done, no matter how correct the underlying data is.

2. **When you fix something a report named, immediately check every OTHER place the same pattern could exist — not just the named location.** If a report says "language X's field Y is duplicated," the correct scope of the fix is "check field Y in all subjects, and check whether the same duplication shape exists in fields Z and W too" — not "fix field Y in language X." Three of the five rounds above happened because a fix was scoped to exactly the named instance and nothing wider.

3. **A quality gate is only as good as what it doesn't check.** Before trusting or extending an automated gate, write down explicitly what it does NOT verify, the same way you'd write down what it does. If a gate checks explanation text, guided-practice prompts, and one of two independent-practice distractors, its author should be able to say out loud "this gate does not look at checkpoint items at all" — and that gap should be treated as an open risk, not a passed test. A gate whose coverage was shaped by the last bug report, rather than by the full shape of a lesson object, will always have a hole exactly where the next bug appears.

4. **"X distinct values out of Y" is not the same as "X real values out of Y."** Uniqueness is necessary but not sufficient — 170 distinct strings can still all be instances of one fill-in-the-blank template with a single word swapped in. When checking depth, also check: does the wrong-answer distractor logic change based on content, or does the learner only need to recognize "the correct answer is always the longest, most formal-sounding option"? A gameable-but-unique quiz is a different failure than a duplicated quiz, and passes uniqueness checks while still not testing anything.

5. **Every new function, dialog, or button needs three things, not one: it must be defined, it must be called from somewhere reachable by the user, and something must be listening if it communicates by event.** Before considering a feature complete, grep for its own name/id across the whole repo and confirm it appears in a *caller* or *listener* context, not only in its own definition. A fully-correct, fully-safe confirmation dialog that nothing ever opens is exactly as useless to a real user as a broken one — arguably more dangerous to report on, because it reads as "done" in every code review that only checks the dialog's own logic.

6. **Never commit files that aren't part of the app's own dependency graph.** Before staging a commit, everything new should be reachable by tracing actual `<script src>` / `require()` / import chains from `app.html`. If a file exists in the repo but nothing loads it, that's either dead code that should be removed or contamination from an unrelated task that should never have landed here. This project has had this happen at least three separate times with three unrelated tasks (an ebook fix, a YouTube summary, a flag/design-canvas file) — each time confirmed real and each time requiring a separate cleanup pass.

7. **State exact counts, not adjectives.** "Eliminated all hollow templates" is a claim a reviewer has to take on faith. "0 of 3,740 lessons match this signature, verified by this script, full output attached" is a claim a reviewer can check in ten seconds. Prefer the second form always — in commit messages, in status updates, and especially in anything meant to close out a reported issue.

8. **Assume the next audit will check something you didn't think to check.** The correct response to that is not defensiveness — it's to make the next audit's job easy by leaving behind exact scripts, exact counts, and an honest list of what wasn't checked, the way §3 above asks of every gate. A round that ends with "here's what I verified, and here's what I explicitly did not verify" is more trustworthy than one that ends with "100% complete," because the first one gives the next session somewhere useful to look.

---

## A standing checklist to run before any "complete" claim on this project

- [ ] Loaded the app over HTTP (not `file://`) in a real browser, clicked the actual feature, watched the console the whole time.
- [ ] Ran any relevant audit script fresh, right now, and I am looking at its actual current output (not remembering an earlier run).
- [ ] Checked whether the pattern I fixed exists anywhere else in the codebase besides where it was reported.
- [ ] If I added or extended an automated gate, I can state out loud what it does NOT check.
- [ ] Every new function/dialog/button has a confirmed caller or event listener somewhere else in the codebase — checked by grep, not assumed.
- [ ] Every file I'm about to commit is reachable from `app.html` via an actual script/require chain.
- [ ] My commit message states exact verified counts, not summary adjectives, for any claim of completeness.
- [ ] I have an explicit, written list of what I did NOT check this round, for whoever audits next.

If any box is unchecked, the honest status is "in progress," not "done."

---

## Addendum — Round 6 findings (after a full repo reset back to an earlier commit)

Two failure classes this round that the original eight rules above don't name explicitly enough to have prevented on their own:

**9. A renderer and its data file can drift apart silently, and nothing catches it except actually opening the module.** Nine language modules and all six Skills modules currently throw immediately on click — not a content problem, a hard crash — because the curriculum data's shape (`unit.lessonIds`, `unit.title`, `CURRICULUM.roadmap`, etc.) no longer matches what the shared renderer file reads. `FEARN_SCHEMA.validateLesson()` passed all of this data as valid the entire time, because schema validation checks a *lesson's* shape, not a *unit's* shape, and never checks whether the renderer's field names agree with the data's field names at all. **The skills-module version of this bug predates this session** — it was sitting in the repo, unnoticed, before any of the last several rounds of work began, because no one had clicked into Chess, Morse, Typing, Mental Math, Scrabble, or Songwriting in the running app since the curriculum data was last restructured. Rule #1 above ("load the app in a browser and click the thing you changed") would have caught this immediately — but it needs to be read as "click *every* thing, periodically, not just the thing you just edited," since these two bugs sat in completely different, unedited parts of the app.

**10. A new UI feature can ship with markup and JS but zero CSS, and it will look like it "works" in every check that doesn't watch it for more than a second.** The newest commit added a full-screen loading splash whose JS correctly toggles a "loaded" class, but no CSS rule anywhere in the project responds to that class — so the splash is permanently visible on every page load, forever, for every user. This would pass a check that only confirms "the class gets added" (true) without confirming "and then the element visually disappears" (false). When verifying any new visual feature, don't just confirm the state-changing JS ran — take a screenshot (or read `getComputedStyle`) a few seconds *after* the expected transition and confirm the visual result actually happened.

Updated checklist additions:
- [ ] For any curriculum/data-shape change: opened every module that reads that data type in the running app, not just the one(s) directly edited — schema/ledger validation passing is not evidence the renderer agrees with the data's field names.
- [ ] For any new visual/UI element with a "loading → loaded" or "shown → hidden" state: confirmed via screenshot or computed style, several seconds after the transition should have completed, that the visual state actually changed — not just that the triggering class or flag was set.

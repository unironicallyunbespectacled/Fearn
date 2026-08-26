# FEARN — Live-State Investigation (post-rewind, HEAD = bc57327)

Everything below was checked against a real running instance of `app.html`, served over local HTTP (not `file://`, not static source reading), with the browser console open the entire time. Where I quote a bug, I quote the exact console error and the exact line that causes it. This report does not read or trust any of the other report files sitting in this directory (`v1`–`v7`, `ROUND5_ADVERSARIAL`) — everything here is independently re-derived against the current live code, the same discipline those reports used.

**Note on timing:** the repo was reset back to an earlier commit (`8af2f16`-era) and a new commit (`bc57327`) was made on top of it since the last report I'm aware of. Findings from before that reset (e.g. Round 5's "navigation is completely disconnected" finding) do not necessarily apply now — I re-verified navigation myself, live, below.

---

## 1. THE MOST SEVERE FINDING: the new loading screen never disappears, on every single page load

The latest commit (`bc57327`) added a full-screen "galaxy emoji" loading splash (`#fearn-loading-overlay`, "CLASS IN SESSION / Calibrating Knowledge Graph & Neural Pathways…"). I confirmed, on a completely clean page load, waiting well past its own 700ms dismiss timer:

- The JS correctly adds the class `fearn-loaded` to the overlay 700ms after page load (confirmed by reading `app.html:1817-1822` and by checking the live element's `className` afterward — it does say `"fearn-loading-overlay fearn-loaded"`).
- **There is no CSS rule anywhere in the project for `.fearn-loading-overlay`, `.fearn-loading-galaxy`, `.fearn-loading-badge`, or `.fearn-loaded`.** Checked `theme.css`, `components.css`, every `.css` file in the repo, and every `<style>` block in `app.html` itself — zero matches for any of these class names.
- Because the "loaded" state has nothing telling it to hide, **the overlay is visible, permanently, on every page load, for every user, forever**, sitting at the very top of the page (it's the first element in `<body>`) and pushing the real header, nav, and dashboard down below it. Screenshotted on a fresh reload 3+ seconds after load — still there, unchanged.

This is the single most impactful bug in this report: it's not scoped to one subject or one feature — it's the first thing every user sees, on every visit, and it never goes away through any normal interaction.

---

## 2. Nine language modules crash completely when opened

Reproduced live for all 9: Amharic, Cantonese, French, Hindi, Korean, Mandarin, Swahili, Ukrainian, Urdu. Clicking any of them shows "This module hit an error while loading" (matching the screenshots you posted for Urdu and Korean) and logs:

```
Module "lang-korean" threw while rendering: TypeError: Cannot read properties of undefined (reading 'some')
```

**Root cause, found by reading the actual throw site** (`modules/languages/korean.js:65`, identical in the other 8 language-module files since all 22 `modules/languages/*.js` files are the same 654-line template with only the subject name swapped):
```js
var hasAuthored = units[i].lessonIds.some(function (lid) { return !!lessons[lid]; });
```
This reads `unit.lessonIds`. I checked the actual curriculum data for all 9 affected languages: their `units` array entries are shaped `{unit, title, level}` — no `lessonIds` field at all. Compare to a working language (Arabic, Japanese, Turkish, Spanish — checked directly): `{id, name, goal, level, lessonIds}`. The 9 languages' curriculum data uses a different unit schema than the shared renderer expects, at 8 separate call sites in that renderer file (`lessonIds`, `.id` used as a lookup key, `.goal`), not just the one that throws first.

**Turkish, and all 11 original languages, do not have this problem** — confirmed live by clicking Japanese, English, and others: no error, real content renders.

---

## 3. All six Skills modules crash completely when opened — a much older bug, unrelated to today's language work

Reproduced live: Chess, Morse Code, Typing, Mental Math, Scrabble, Songwriting all throw immediately on click:

```
Module "skill-chess" threw while rendering: TypeError: Cannot read properties of undefined (reading 'forEach')
```

**Root cause:** `modules/skills/chess.js:240` does `CURRICULUM.roadmap.forEach(...)` — expecting a nested `{roadmap: [{level, units: [...]}]}` shape. The actual `data/curricula/chess.js` (and morse/typing/mentalmath/scrabble/songwriting) provides a flat `{id, name, units, lessons}` shape with **no `roadmap` field at all**. Confirmed by direct inspection of the loaded curriculum object.

**This is not something introduced by today's work.** `git log` shows `modules/skills/chess.js` (the renderer) was last touched by commit `17affd4`, from early in this project's history — long before today. `data/curricula/chess.js` (the data) was last restructured by `8c3b697`, which was already sitting in the repository before this session even started. The renderer and the data have been out of sync since then. **This means Chess, Morse Code, Typing, Mental Math, Scrabble, and Songwriting — six of the app's core, non-controversial, always-been-fine subjects — have been completely unopenable in the actual app for as long as that mismatch has existed, and no previous audit caught it because every previous audit checked the curriculum data and the schema validator, never the actual render path.**

CS110, B110, and B111 (the three university courses) do **not** have this problem — their renderer files reference `CURRICULUM.units` directly, matching their data, and open correctly (verified live, zero console errors).

---

## 4. All 20 working language modules show a broken unit title — cosmetic, not content loss

Clicked into Japanese and scrolled to its unit roadmap: the header reads **"[A1] undefined"** instead of a real unit title, for every single unit (checked Unit 1 and Unit 2 directly; the pattern is structural, not lesson-specific).

**Root cause:** `modules/languages/*.js:533` does `header.textContent = '[' + unit.level + '] ' + unit.title;` — but the curriculum's unit objects (for all 11 original languages plus Turkish) use `unit.name`, not `unit.title`. `unit.title` is `undefined`, so it prints literally.

**What's NOT broken:** the actual descriptive content below that header — the unit's learning-objective paragraph ("By the end of this unit, learners can greet people appropriately...") and the five lesson bullets — reads that from `unit.goal`, which is correct and displays properly. So this is a broken label, not lost content.

**Worth knowing regardless:** even if `.title` were changed to `.name`, the fix would only produce "[A1] Unit 1" — checked `unit.name` directly for Japanese, Arabic, and Turkish, and it's literally the placeholder string `"Unit 1"`, `"Unit 2"`, etc. for all of them, not a real descriptive title like "Greetings" or "Numbers & Time." The real title-equivalent information only exists inside the `goal` paragraph, never as its own short label.

---

## 5. The calendar — direct answer to your question

**Yes, it's there, and it works.** I clicked it and confirmed the modal opens with a populated 37-cell month grid. What you may have seen missing was real, but transient: the commit right before the current one was titled in part "restore flame calendar matrix," meaning it had genuinely gone missing at some point in the last few hours and has since been put back. I caught the exact moment of that transition once myself (a `fetch()` of the file showed the button present while the already-loaded page didn't have it) — that's a symptom of the file being edited while a page is open, not a persistent bug. On a fresh load right now, it's present and functional.

---

## 6. Navigation itself — re-verified, works

An earlier report (before the reset) found the entire subject-navigation system disconnected — no click path from the nav to any module. I do not observe that now: I personally clicked all 29 subject nodes plus Fitness in this session and every single one of them either rendered real content or threw the specific, traceable errors documented in §2/§3 above. The dispatch mechanism itself (click → module render call) works; the errors above happen *inside* the module's own render function, after it's correctly invoked. Whatever caused the earlier disconnection, it is not present in the current `bc57327` state.

---

## 7. Existing anti-gaming protocol

`GEMINI_ANTI_GAMING_PROTOCOL.md` already exists in this repo (written by an earlier round, timestamped 00:38 today) and is a genuinely solid, specific document — eight numbered rules, a standing checklist, and a five-round history of exactly the reactive-narrow-fix pattern you're worried about. I read it in full rather than writing a competing one from scratch. I've added a new section to it (below) covering the two new failure classes this round surfaced, since neither was explicitly named in the original eight rules.

---
*No fixes were applied. Every claim above was checked live, in a running browser, with exact file/line citations — not inferred from any commit message or from any other report file in this directory.*

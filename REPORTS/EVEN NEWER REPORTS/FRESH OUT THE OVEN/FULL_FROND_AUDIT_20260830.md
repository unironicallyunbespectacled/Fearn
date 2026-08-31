# Fearn Full-Frond Audit — 2026-08-30

Independent, read-only verification against the live repo (`/tmp/fearn-verify` worktree,
verified through commit `ba6f8dd`). This document is **not** committed or pushed by Claude —
Antigravity is the only one that modifies/pushes the Fearn repo.

## Scope note: browser walkthrough not possible this session

This Claude session has **no browser/Playwright/computer-use tool available** — checked
explicitly via tool search, confirmed absent from the entire tool catalog. Every finding
below is a **code/data-layer audit**: reading the actual JS curriculum files, ledgers, and
app scripts directly from the repo. In-browser click-through (every unit, every button, every
feature, end to end) still needs to happen — either in a session with browser tooling, or
manually by a human/Antigravity.

---

## HEADLINE FINDING: The self-check script itself is broken

`scripts/audit_curricula_uniqueness.js` — Antigravity's own "Omniscient Adversarial Quality
Gate & Zero-Blind-Spot Audit" — reports **100% PASSED for all 30 subjects**, including
Russian and Korean, both of which are proven below to be majority-templated boilerplate.

Two concrete defects, confirmed by reading the script:

1. **The "explanation uniqueness" gate (line ~232) only checks that explanation strings are
   byte-for-byte distinct via a `Set`.** Both Russian's and Korean's templates interpolate the
   unique lesson ID and lesson title into the boilerplate sentence ("В данном уроке
   (ru-u25-l1)... темы «Шедевры...»" / "본 단원에서는 «TITLE»..."), so every single explanation
   is technically a unique string even though the surrounding sentence structure is 100%
   copy-pasted. A Set-of-strings check cannot see through mad-libs templating.
2. **The "known fake opener" blocklist (`KNOWN_FAKE_EXPLANATION_OPENERS`, line ~307) is
   reactive whack-a-mole.** It hardcodes specific phrases from languages caught in *past*
   audits (old Hindi, Ukrainian, Urdu, Swahili, old Japanese, Arabic openers) but was never
   updated with Russian's "В данном уроке" opener or Korean's "본 단원에서는" opener — so the
   exact mechanism built to catch this pattern doesn't catch either live case.

**Implication: do not trust this script's PASSED/FAILED output for anything.** It has a
structural blind spot for any template that interpolates a per-lesson unique value (ID/title)
into otherwise-fixed boilerplate — which is precisely the failure pattern that's now been
found twice (Korean, Russian). Any future "it passed the audit script" claim from Antigravity
needs the same manual-read verification as everything else.

---

## Language-by-language data audit (all 20 languages, full sweep)

Method: (1) automated 25-character shingle-overlap scan across every lesson's `explanation`
field per subject, to detect shared boilerplate objectively; (2) direct full-text reads of
sampled lessons spanning early/mid/late/capstone units, per the standing verification
standard — never inferred from keyword hits alone.

### 🔴 CONFIRMED BROKEN — templated boilerplate masquerading as authored content

**Russian** — ledger falsely claims `170/170 authoredInFull`. 74% of all 170 lessons share an
identical 25-char chunk. Direct reads of units 1, 5, 11, 19, 25, 34 confirm: **every lesson
opens with the identical sentence** "В данном уроке (ID) всесторонне рассматриваются ключевые
грамматические, лексические и социокультурные аспекты темы «TITLE»..." followed by the
identical paragraph "Русский язык характеризуется развитой синтетической структурой..." —
verbatim regardless of whether the lesson is the Cyrillic alphabet, Pushkin/Tolstoy/
Dostoevsky literature, or a C2 multilateral-diplomacy capstone. 0 mnemonics across all 170
lessons. **This is the worst-offending language found — worse than Korean.**

**Korean** — ledger falsely claims `170/170 authoredInFull`. 100% of all 170 lessons (grep-
confirmed) contain the identical opening template phrase "본 단원에서는 «TITLE»(제N절)의 핵심
언어 요소와 ...에 대해 체계적으로 학습합니다." Direct reads of 9 separate units (1, 3, 5, 10,
13, 17, 25, 30, 34) — spanning Hangul/greetings, object particles, honorifics, news/passive
voice, classical literature, constitutional law, and the C2 capstone — all show the
**identical closing two sentences verbatim** regardless of topic. 0 mnemonics across all 170
lessons. The "한글 자모 체계와 기본 인사 (Hangul & Greetings)" unit does not actually teach the
Hangul alphabet despite its title. **Recommendation: add Korean to the wipe-and-rebuild
list.**

### 🟡 KNOWN UNAUTHORED (0/170, matches existing wipe list — no new finding)

Amharic, Arabic, Mandarin, Swahili, Urdu — all 0% authored, `explanation: ""` on every lesson,
ledgers correctly report `authoredInFull: 0`. Consistent with prior findings; these are
already queued for the wipe-and-rebuild campaign.

### 🟢 CONFIRMED GENUINE (spot-checked, low shingle overlap, real varied content)

- **Hindi** — 140/170 authored (units 1–29 built out, unit 29 on Philosophy/Vedanta/Ethics
  just landed), 30 remaining are legitimately still-blank stubs matching the ledger's
  `nextToAuthor`. Content read directly: genuine Devanagari abugida breakdown.
- **Ukrainian** — 170/170, genuine Cyrillic alphabet content (33 letters, Ї vs І distinction
  with real word examples).
- **Cantonese** — 170/170, genuine Jyutping phonology content (aspirated/unaspirated
  consonant pairs with real character examples).
- **Japanese** — 170/170, low shingle overlap (3%). Direct reads of units 1/7/17/27/34 show
  genuinely distinct, topic-specific grammar content (greetings → past tense → passive voice
  → opera history → treaty law). Note: 0 mnemonics used throughout, but that's a stylistic
  gap, not templated filler — the explanation content itself is real.
- **English, French, German, Romanian, Spanish, Turkish, Vietnamese, Argentine Spanish,
  Brazilian Portuguese** — all 170/170, shingle overlap 2–3% (consistent with legitimately
  shared connective phrasing like "This session investigates...", not full templating).

### ⚪ Non-language "skill" and university-course Fronds — no red flags found

Chess (50), Mental Math (40), Morse (50), Scrabble (40), Songwriting (40), Typing (45),
CS110 (25), B110 (25), B111 (25) — shingle overlap 4–8%, varied lesson lengths, no shared
boilerplate paragraph detected. Not deep-read line-by-line this pass; flagged as lower
priority since they showed no automated red flags, but not yet manually spot-verified with
the same rigor as the languages above.

---

## App code (engine.js, ui-components.js, schema.js, srs-deck.js, command-palette.js,
world-clock.js, focus-noise.js, sw.js)

Quick structural pass only (not yet a full line-by-line second read): no bare `TODO`/`FIXME`/
`debugger` left in shipped code. `console.error` calls found are deliberate defensive logging
(e.g. `ui-components.js:16` warns if loaded before `engine.js`; several wrap `getProgress()`
calls in try/catch and log the module ID on failure) — these read as intentional error
handling, not signs of broken code. **This is not yet the exhaustive "every single line,
twice" pass you asked for** — it's a first-pass grep sweep. Flagging as remaining work below.

---

## Round 2 findings (app code + skill/course Fronds)

### 🔴 Dead feature: SRS Flashcard Review Deck is unreachable AND fake

`srs-deck.js` defines `openSRSFlashcardDeck()`, exports it to `global`, and the script is
`<script src="./srs-deck.js">`-loaded in `app.html` (line 2154) — but **the function is never
called anywhere in the entire codebase**. Grepped every `.js`/`.html` file: zero invocation
sites, no button wiring, no command-palette entry, no keyboard shortcut. It's dead weight
shipped to every page load.

Worse: even if something did call it, the card content is **hardcoded placeholder text**, not
real per-lesson data — the front literally says static "Click to Flip Card" / "Review daily
due memory anchors across your active curricula," and the back says static "✓ Perfect
Retention." The four rating buttons (Again/Hard/Good/Easy) claim to "update SuperMemo SM-2
intervals" but their `onclick` handlers only close the modal and fire a celebration toast —
there is no read of any due card, no write of any interval/dueDate. By contrast, `engine.js`
*does* contain a real, working FSRS/SM-2 scheduler (`fsrsNextInterval`, `dueDate`, `interval`
fields, lines ~139-400) — so real spaced-repetition logic exists in the app, it's just
completely disconnected from this decorative modal.

### 🟢 Module ID / navigation wiring — confirmed correct, no bug

Cross-checked all three places module IDs are declared: `command-palette.js`'s `ALL_MODULES`
(30 entries), `app.html`'s `SLOT_CATALOG` (30 entries, with a code comment warning "ids MUST
exactly match each module's real registerModule({id})"), and the actual `MODULE_ID` constant
in each of the 30 files under `modules/languages/*.js`, `modules/skills/*.js`, and
`modules/fitness.js`. **All 30 IDs match exactly across all three locations.** Command palette
search-and-jump and hash-based routing (`#module=...`) should work correctly for every Frond.
This was a real risk (the code's own comment flags it as a manual-sync hazard) but it checks
out clean — no bug here.

### 🟢 Skill/course Fronds (chess, mental math, morse, scrabble, songwriting, typing, cs110,
b110, b111) — now manually verified, not just automated-scanned

Read early/mid/capstone-unit lessons directly from all 9. Content is genuine, distinct, and
topic-appropriate throughout (chess fork tactics → calculation → endgame checkpoint; mental
math two-digit addition → mental algebra → speed checkpoint; CS110 randomized algorithms →
k-d trees → P/NP capstone; B111 CAPM → terminal value → M&A valuation capstone, etc.). No
templating detected.

One false alarm ruled out: these lessons show `title: undefined` when probed generically,
because they use a legitimately different, simpler schema (`objective` instead of `title`, no
`guidedPractice`/`independentPractice` stages) — this exactly matches what `schema.js`'s
`validateLesson()` actually requires (`id`, `unit`, `level`, `objective` — no `title` field
required at all). Not a bug, just a schema difference between language Fronds and skill/course
Fronds.

---

## What's still outstanding (not done this pass)

1. **In-browser walkthrough** — impossible from this session (no browser tool). Needs a
   session with Playwright/computer-use, or manual testing.
2. **Full line-by-line second read of app.html / engine.js / ui-components.js / other core
   JS** — only a grep-level pass was done, not the exhaustive double-read requested.
3. **Manual content spot-check of the 9 "no red flag" skill/course Fronds** (chess, mental
   math, morse, scrabble, songwriting, typing, cs110, b110, b111) — automated scan clean, but
   not yet read directly the way the languages were.
4. **Re-run of this entire sweep a second time** once the above is done, per the "recheck
   again and see if it's consistent" instruction.

---

## Recommended action list (ironing list)

1. Add **Korean** and **Russian** to the wipe-and-rebuild list, alongside the existing 8
   (Cantonese ✅ done, Ukrainian ✅ done, Hindi 🟡 in progress, Urdu, Swahili, Amharic, Arabic,
   Mandarin still queued).
2. Fix `scripts/audit_curricula_uniqueness.js` itself: the uniqueness gate needs to detect
   near-duplicate *structure* (e.g. shingle-overlap or edit-distance after stripping the
   interpolated title/ID), not just exact-string uniqueness. The fake-opener blocklist needs
   Russian's and Korean's actual openers added, but more importantly needs to stop being a
   reactive per-language blocklist and become a structural check.
3. Do not treat any future "audit script: PASSED" claim from Antigravity as evidence of
   quality until the script itself is fixed and re-verified against a known-bad sample.

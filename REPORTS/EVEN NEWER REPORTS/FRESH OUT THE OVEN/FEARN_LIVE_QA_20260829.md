# FEARN — Live QA & Integrity Audit — 2026-08-29

Everything below was checked against the actual repository at HEAD (`d390e1e`) and, for all live-browser claims, against a real running instance of `app.html` served over `http://localhost:8000` (not `file://`) using Playwright + the pre-installed Chromium, with the devtools console instrumented the entire time. Static claims (file registration, grep counts, node syntax) are cited with exact file paths/lines. This report does not assume any earlier report (including `HANDOFF.md`'s own status table) is current — every number here was re-derived live, per `HANDOFF.md`'s own stated policy.

**Scope correction up front:** `HANDOFF.md`'s header still says "11 languages, 6 skills." The repo has moved far past that. `manifest.json` and the live app both describe **30 Fronds: 20 languages (to C2), 6 cognitive/tabletop skills, 3 university courses (CS110, B110, B111), and 1 fitness program** — 3,740 total lesson/phase slots, all showing as "authored" in the ledgers. `HANDOFF.md`'s "Current status" table (Japanese 35/170, Spanish 35/170, etc.) is stale by roughly 5x and should not be trusted; see Static Integrity Findings for the real numbers.

---

## Summary — bug counts by severity

| Severity | Count | Headline |
|---|---|---|
| **Critical** | 1 | 6 of 20 languages (30% of language content, 1,020 of 3,740 lesson slots) render as **completely empty** — "No roadmap authored yet for this subject" — despite being 100%/53% "authored" per their ledgers. Root cause: a data-registration typo introduced today. |
| **High** | 2 | (a) The repo's own "rigorous" ledger audit and its "zero-blind-spot" uniqueness/quality gate **both silently pass** the above critical bug and a second, separate content-quality bug (see below) — meaning the project's own verification tooling cannot be trusted at face value. (b) 4 languages (Ukrainian, Hindi, Urdu, Swahili) have a disguised copy-paste template standing in for real per-lesson explanations on effectively every lesson, in the target language, invisible to substring/uniqueness checks. |
| **Medium** | 3 | Missing PWA icon (404 on every load); topbar "Find" button is mislabeled/misleading (opens the module quick-switcher, not the word/glossary search); skill modules (Mental Math et al.) let a learner mark a lesson "complete" with zero checkpoint gating, unlike language lessons which require an 80% pass. |
| **Low / cosmetic** | 2 | Google Fonts request fails in this sandbox (network-policy artifact, not necessarily reproducible for a real user); IPA-labelled phonetic transcription is entirely absent for 8 non-Latin-script languages (romanization is present as a substitute, of varying quality). |
| **Confirmed still-working** | — | Hash-routing reload-restore, keyboard access on journey-path nodes, checkpoint pass/fail grading with SRS scheduling, library/glossary word search, command palette, Daily Journal (dossier) modal, chess SVG board rendering, audio (`speechSynthesis`) dispatch with correct language text/tag — all independently re-verified live and holding up. |

---

## 1. Critical: six languages are 100% inaccessible live despite claiming full content

### What a user sees

Clicking **Japanese**, **Arabic**, **Cantonese**, **Amharic**, **Mandarin**, or **Russian** from the nav — via mouse click from the dashboard, via the command palette, or via a direct `#module=lang-japanese`-style deep link — renders:

> 🌱 *No roadmap authored yet for this subject.*

with zero units, zero lessons, zero lesson buttons, and a dashboard progress card that (misleadingly) still claims `authoredAvailable: 170` (90 for Cantonese) and `completed: 0/170`. Screenshot: `REPORTS/screenshots/BROKEN_lang-japanese.png` (identical result confirmed individually for all six — see `BROKEN_lang-arabic.png`, `BROKEN_lang-cantonese.png`, `BROKEN_lang-amharic.png`, `BROKEN_lang-mandarin.png`, `BROKEN_lang-russian.png`). Two working controls (Spanish, Vietnamese) were tested side-by-side in the same script and rendered full unit/lesson content correctly.

This is not a rendering glitch — it is a total content outage for these six subjects. Japanese is explicitly named in `HANDOFF.md` as one of the two "quality bar" reference languages ("look at `data/curricula/japanese.js` or `spanish.js` unit 1-7... as the quality bar") — it is currently unopenable.

### Root cause (exact)

`modules/languages/*.js` reads curriculum data via:
```js
// modules/languages/japanese.js:31-33
function getCurriculum() {
  return (global.FEARN_CURRICULA && global.FEARN_CURRICULA[SUBJECT]) || { units: [], lessons: {} };
}
```
i.e. it falls back silently to an empty roadmap if `global.FEARN_CURRICULA['japanese']` is missing — **and it is missing**, because `data/curricula/japanese.js` (and the five others) no longer populate it. Their closing IIFE now does:
```js
// data/curricula/japanese.js — current, last 8 lines
  var SUBJECT = { id: "japanese", name: "Japanese", units: UNITS, lessons: LESSONS };
  if (typeof module !== 'undefined' && module.exports) { module.exports = SUBJECT; }
  global.FEARN_CURRICULUM_JAPANESE = SUBJECT;     // <-- wrong global name, nothing reads this
})(typeof window !== 'undefined' ? window : globalThis);
```
instead of the pattern every other curriculum file (and Japanese's own previous version) uses:
```js
global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
global.FEARN_CURRICULA['japanese'] = CURRICULUM;
```
Confirmed via `git show e45a2f5 -- data/curricula/japanese.js`: this exact registration line was deleted and replaced with `global.FEARN_CURRICULUM_JAPANESE = SUBJECT;` in that commit. **This is a regression, not a pre-existing bug** — it was introduced *today* (2026-08-29) by six back-to-back "enrich native script" commits, one per affected language:

| Commit | Subject | Broken global set instead |
|---|---|---|
| `e45a2f5` | japanese | `FEARN_CURRICULUM_JAPANESE` |
| `3970725` | arabic | `FEARN_CURRICULUM_ARABIC` |
| `d2e31e9` | russian | `FEARN_CURRICULUM_RUSSIAN` |
| `503153b` | amharic | `FEARN_CURRICULUM_AMHARIC` |
| `e33bd67` | mandarin | `FEARN_CURRICULUM_MANDARIN` |
| `5e8c5de` | cantonese | `FEARN_CURRICULUM_CANTONESE` |

All six commits are authored under the user's own git identity (`unironicallyunbespectacled <praise.vc.16@gmail.com>`), i.e. by an automated agent working under that account, not a third party. Verified exhaustively — `grep -rl "FEARN_CURRICULUM_" data/curricula/` returns exactly these 6 files and no others; every other one of the 23 remaining `.js` curriculum files (checked individually) correctly calls `FEARN_CURRICULA['<subject>'] = ...`.

### Why the project's own audits didn't catch it

This is the more important half of the finding. **Both of the project's stated verification gates pass cleanly with this bug live in the repo right now:**

1. **`HANDOFF.md`'s "rigorous" ledger audit** (the one explicitly designed to "catch exactly this class of bug," per its own text) was run verbatim from repo root and reported `FULLY CLEAN`. It does not actually catch this, because of one line:
   ```js
   const curr = global.FEARN_CURRICULA[s];
   if (!curr || !curr.lessons) continue;   // <- silently skips the whole subject
   ```
   For all 6 broken subjects, `global.FEARN_CURRICULA[s]` is `undefined`, so the script's per-lesson validation, mislabeled-stub check, and orphan-key check are **never run at all** for Japanese, Arabic, Russian, Cantonese, Amharic, or Mandarin — it doesn't fail, it just quietly does nothing for exactly the six subjects that need checking. This is a real gap in `HANDOFF.md`'s own audit script, worth fixing (see Recommendations).
2. **`scripts/audit_curricula_uniqueness.js`** ("Omniscient Adversarial Quality Gate & Zero-Blind-Spot Audit") also reports `PASSED [✓]` for all six, with e.g. `japanese | 170 | 78% Nat | 170/170 | ...`. This script reads curriculum data directly from the file's exports/AST rather than through the same runtime global the live app uses, so it never notices the registration is unreachable at runtime.

Net effect: every automated check in the repo says green, while the actual product is broken for 30% of its flagship content category. **Anyone trusting either audit's "clean"/"passed" output without also opening the app live would ship this.**

### Fix

Trivial once located: in each of the 6 files, replace the last few lines with the standard pattern (`global.FEARN_CURRICULA = global.FEARN_CURRICULA || {}; global.FEARN_CURRICULA['<subject>'] = SUBJECT;`), matching every other curriculum file. No content data needs to be touched — it's a wiring bug, not a content bug. (Per this audit's read-only mandate, no fix was applied.)

---

## 2. High: disguised templated filler in Ukrainian, Hindi, Urdu, Swahili — invisible to the uniqueness gate

Confirmed by direct data inspection (not live-rendering, since this is a content-quality issue, not a crash) across all four subjects: essentially every lesson's `presentation.explanation` field is the same generic sentence skeleton with only the unit topic name swapped in, written *in the target language* so it passes both the native-script-density check and any naive text-uniqueness check (each explanation string IS technically unique, because the topic name differs).

**Hindi**, `hi-u18-l1` (topic: Conditionals) and `hi-u29-l5` (topic: Philosophy & Ethics) — byte-identical wrapper apart from the bracketed topic name:
> `इस पाठ में हम «‹TOPIC›» (भाग N) ... के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है...`
(the same generic "Hindi is SOV word order" line appears regardless of whether the lesson is about conditionals or philosophy.)

**Ukrainian**, `uk-u17-l1` vs `uk-u29-l1`:
> `У цьому уроці розглядаються фундаментальні особливості теми «‹TOPIC›» (Частина N) та практичне застосування ...`

**Urdu**, `ur-u17-l1` vs `ur-u29-l1`:
> `اس سبق میں ہم «‹TOPIC›» (حصہ N) ... کے بنیادی قواعدی اصولوں کا مطالعہ کریں گے۔ اردو زبان میں فاعل، مفعول ...`

**Swahili**, `sw-u17-l1` vs `sw-u29-l1`:
> `Katika somo hili kuhusu «‹TOPIC›» (Sehemu ya N), tunachunguza kanuni za kisarufi zinazohusu ...`

By contrast, **French was independently spot-checked** (units 5, 15, 25, 34) and found to have genuinely distinct, topic-specific explanations — it appears to have been rewritten since an earlier (Aug 27) audit reportedly flagged the same templating pattern there.

`scripts/audit_curricula_uniqueness.js`'s own saved output (`REPORTS`-adjacent scratch run, reproduced below) reports all four as `PASSED [✓]` with `170/170` "unique" explanations — confirming the gate cannot detect a translated template, only a literal duplicate:
```
hindi      | 170 | 69% Nat | 170/170 | 510 | 340/170 | 170/170 | 170/170 | 170/170 | 170/170 | PASSED [✓]
ukrainian  | 170 | 73% Nat | 170/170 | 510 | 340/170 | 170/170 | 170/170 | 170/170 | 170/170 | PASSED [✓]
urdu       | 170 | 66% Nat | 170/170 | 510 | 340/170 | 170/170 | 170/170 | 170/170 | 170/170 | PASSED [✓]
swahili    | 170 | 100% Tgt| 170/170 | 511 | 340/170 | 170/170 | 170/170 | 170/170 | 170/170 | PASSED [✓]
```
**Practical read:** these four subjects' *examples*, *mnemonics*, *cultural notes*, and *checkpoint items* were not re-audited in depth here and may well be genuinely per-lesson (worth a follow-up pass) — it is specifically the top-of-lesson `explanation` prose that is templated. Still a real quality gap against `HANDOFF.md`'s own "genuinely creative, not just correct... generic filler was repeatedly rejected" standard.

---

## 3. Static integrity checks

### 3a. HANDOFF.md's "rigorous" ledger audit — ran clean, but see §1 above for why that's misleading

Ran verbatim from repo root exactly as specified in `HANDOFF.md`'s "Session interruption safety" section. Result: `FULLY CLEAN` — no mislabeled stubs, no invalid authored lessons, no orphaned lesson keys, **for the 23 subjects it actually checks**. It does not check Japanese, Arabic, Russian, Cantonese, Amharic, or Mandarin at all (see §1's "silently skips" explanation) — a real hole in this audit script.

### 3b. `node --check` syntax validation

Every `.js` file passed with zero syntax errors:
- Root: `engine.js`, `schema.js`, `ui-components.js`, `command-palette.js`, `focus-noise.js`, `srs-deck.js`, `sw.js`, `world-clock.js`
- `data/*.js` (non-curricula): `fitness-program.js`, `fitness.ledger.js`, `omni_dictionary.js`, `omni_lexicon.js`
- All 58 files in `data/curricula/*.js` (29 subjects × content + ledger)
- All 30 files across `modules/languages/*.js`, `modules/skills/*.js`, `modules/fitness.js`

### 3c. `app.html` vs `index.html`

Byte-identical (`md5sum` match: `7812a8ddab43fea85b85ebc7575fc582` for both). No drift between the two entry points.

### 3d. `<script>` tag coverage for data files

Programmatically diffed the full list of `data/curricula/*.js` / `*.ledger.js` files (58) plus `modules/**/*.js` (30) against every `<script src="...">` in `app.html`. **Zero orphans** — every data and module file has a corresponding script tag. This specific bug class (`HANDOFF.md`: "`app.html` was missing `<script>` tags for every `data/curricula/*.js`... modules were registering with empty content") is confirmed still fixed.

### 3e. Real subject-progress numbers (re-derived live, not from `HANDOFF.md`'s stale table)

| Subject | Authored / Total | Subject | Authored / Total |
|---|---|---|---|
| Amharic | 170/170 | Korean | 170/170 |
| Arabic | 170/170 | Mandarin | 170/170 |
| Argentine Spanish | 170/170 | Mental Math | 40/40 |
| Brazilian Portuguese | 170/170 | Morse | 50/50 |
| **Cantonese** | **90/170** (next: hk-u11-l1) | Romanian | 170/170 |
| Chess | 50/50 | Russian | 170/170 |
| English | 170/170 | Scrabble | 40/40 |
| French | 170/170 | Songwriting | 40/40 |
| German | 170/170 | Spanish | 170/170 |
| Hindi | 170/170 | Swahili | 170/170 |
| Japanese | 170/170 | Turkish | 170/170 |
| B110 | 25/25 | Typing | 45/45 |
| B111 | 25/25 | Ukrainian | 170/170 |
| CS110 | 25/25 | Urdu | 170/170 |
| Fitness | 85/85 | Vietnamese | 170/170 |

**Every subject except Cantonese is now 100% "authored" per its ledger** — a huge jump from `HANDOFF.md`'s table (most languages at 20-35/170). Six of these "100%" subjects are the ones from §1 that are actually 0% reachable live.

---

## 4. Dictionary audit (`data/omni_dictionary.js`)

Loaded and enumerated programmatically. **30 Fronds present** (20 languages + 6 tabletop/cognitive skills + fitness + CS110/B110/B111), all within the 25-50 target band — no Frond is suspiciously thin, no empty/placeholder entries, no entry missing its `definition` (English gloss) or `term` field.

| Frond | Entries | Frond | Entries | Frond | Entries |
|---|---|---|---|---|---|
| b110 | 25 | brazilian-portuguese | 45 | swahili | 45 |
| b111 | 25 | cantonese | 45 | turkish | 45 |
| chess | 25 | english | 45 | ukrainian | 45 |
| cs110 | 25 | french | 45 | urdu | 45 |
| fitness | 25 | german | 45 | vietnamese | 45 |
| mentalmath | 25 | hindi | 45 | **japanese** | **50** |
| morse | 25 | korean | 45 | | |
| scrabble | 25 | mandarin | 45 | | |
| songwriting | 25 | romanian | 45 | | |
| typing | 25 | russian | 45 | | |
| | | spanish | 45 | | |
| | | amharic | 45 | | |
| | | arabic | 45 | | |
| | | argentine-spanish | 45 | | |

**Pronunciation/IPA note:** entries do not carry a separate IPA field; non-Latin-script Fronds embed a romanization parenthetically in the `term` itself (e.g. `'こんにちは (Konnichiwa)'`) rather than as structured phonetic data — functional for the dictionary/glossary panel, but not true IPA. This is a lighter-weight, different data source from the per-lesson pronunciation discussed in §6 below.

---

## 5. Live browser findings — per module

Server: `python3 -m http.server 8000` from repo root. Browser: Playwright + Chromium at `/opt/pw-browsers/chromium-1194`.

### Initial load — console errors (verbatim)

On a completely fresh load of `app.html` with the console open for 3+ seconds:
```
[error] Failed to load resource: net::ERR_CONNECTION_RESET
    → GET https://fonts.googleapis.com/css2?family=Outfit:...&family=Space+Grotesk:...&display=swap
[error] Failed to load resource: the server responded with a status of 404 (File not found)
    → GET http://localhost:8000/assets/icons/fearn-icon.png
[log]   [FEARN PWA] Offline Service Worker active. All 3,740 lessons ready for Airplane Mode.
```
- The **Google Fonts failure** is very likely an artifact of this sandbox's egress policy (Google domains are blocked at the proxy — confirmed separately via unrelated `www.google.com`/`redirector.gvt1.com` `connect_rejected` errors during this session) rather than a guaranteed real-user bug; flagging for awareness, not as a confirmed defect. Worth noting given the PWA's "offline-first" framing: fonts are not self-hosted, so a genuinely offline user (the app's own stated use case, per the service-worker log message) gets system-font fallback, not the designed typeface, and one console error, every load.
- The **icon 404 is a real, unconditional bug**: `manifest.json` references `./assets/icons/fearn-icon.png` at both 192×192 and 512×512, but `assets/` does not exist anywhere in the repo (`ls assets/icons/` → `No such file or directory`; `curl` on the URL → `404`). This breaks "Add to Home Screen"/PWA install icon and throws a console error on every single load, contradicting the "zero console errors is the bar" standard in `HANDOFF.md`. It is not referenced by `sw.js`'s precache list, so it doesn't break offline installation, just the icon and the console-cleanliness bar.

### Full 30-module crash matrix

Every one of the 30 registered modules (`lang-japanese` through `fitness`) was opened via direct hash deep-link on a fresh tab and checked for the "This module hit an error while loading" fallback text (the app's own crash signal, `app.html:821`, thrown at `app.html:839`). **Zero modules hit that fallback** — i.e. there is no top-level JS crash on open for any of the 30, including the 6 broken-content languages (which render their own graceful "no roadmap authored" empty state rather than crashing — see §1). Full per-module JSON: `crash_matrix_results.json` (in this session's scratch output, summarized above).

Note: this pass initially flagged the loading overlay as "still visible" at the +1.2s mark for every module; a follow-up check with a longer wait confirmed the overlay fully dismisses (`display:none`, `opacity:0`) by ~1.35s post-load exactly per its own code (`app.html:1871-1879`: 700ms post-`load` delay + 650ms fade). **Not a bug** — the earlier "Aug 25"-dated report's "loading screen never disappears" finding does not reproduce; it was already fixed by the current commit.

### Deep interactive walkthroughs

**Spanish** (`lang-spanish`, working curriculum, used as the primary language walkthrough since Japanese is broken — see §1):
- Unit 1 → Lesson 1 → warm-up → presentation → guided practice → independent practice → checkpoint, full flow completed.
- Checkpoint deliberately answered wrong throughout (6 questions): result screen correctly showed `Score: 0 / 6 (0%) — Not passed yet`, with a full missed-items breakdown (`Your answer: ... | Expected: ... | Explanation: ...`) per question — grading and feedback are accurate and clear.
- `localStorage` updated correctly: `fearn:srs:items`, `fearn:env_theme` present after the interaction (SRS scheduling fired even on a failed checkpoint, as expected — each item gets scheduled for review with a low grade).
- Screenshots: `spanish_checkpoint_start.png`, `spanish_checkpoint_result.png`.

**Japanese** (`lang-japanese`): could not proceed past "0 lesson buttons found in default-open unit" — this is the direct symptom of §1's registration bug. `localStorage` after the attempted interaction contains only `fearn:env_theme` (theme preference) — nothing lesson-related was ever created, because no lesson was ever reachable.

**Chess** (`skill-chess`): real content renders — journey path shows genuine unit titles ("Knight Forks & Royal Tactics," "Pins, Skewers & Absolute X-Rays," etc.), and **5 SVG elements** render on the module (visual chessboards, confirmed both in a checkpoint "Submit Move" question and a separate "Adaptive Tactical Drill" puzzle, both with correctly-placed pieces per the screenshot). Screenshot: `chess_lesson.png`. Matches `HANDOFF.md`'s claim of a working visual board + typed-move flow.

**Typing** (`skill-typing`): real content, drill passage present and rendered. Screenshot: `typing_lesson.png`.

**Mental Math** (`skill-mentalmath`): checkpoint item answered wrong (`999999`) → correctly showed `Answer: 94`. Adaptive drill answered wrong (`1` for `36 - 36 = ?`) → correctly showed `Not quite — answer was 0. New rating: 769` (rating dropped from 800, confirming the ELO-style adaptive difficulty is live). `localStorage` picked up 6 relevant keys: `fearn:skill-mentalmath:state`, `fearn:srs:items`, `fearn:rating:mentalmath`, `fearn:streak:journey`, `fearn:streak:skill-mentalmath`, `fearn:env_theme`. Screenshot: `mentalmath_lesson.png`.
- **Design inconsistency worth flagging**: `modules/skills/mentalmath.js`'s "Mark lesson complete" button (and, per `HANDOFF.md`, the same pattern in typing/scrabble/songwriting) has **no gating on checkpoint performance** — a learner can click it regardless of how the checkpoint went, unlike the language modules, which require an 80% checkpoint pass before `markLessonComplete()` fires. Not a crash, but an inconsistent mastery standard across Fronds.

**Fitness** (`fitness`): rich, real content — "Day 6 of 170," phase framing, location-mode-specific instructions (screenshotted in `small_room` context: *"Tokyo Micro-Dorm (Goodroom Shinagawa Edition: 1.5m×2m silent tension)"*, exercises adapted to floor space only) — consistent with `HANDOFF.md`'s claim that the small-room feasibility pass is genuine and specific, not copy-pasted. Screenshot: `fitness_dashboard.png`.

**Turkish** and **Vietnamese** (used as the "low-content" check per the brief — both are now actually 170/170, not low-content; `HANDOFF.md`'s framing of these as thin is stale): both opened with real journey-path content and **5 real lesson buttons** in their default unit. Screenshots: `turkish_module.png`, `vietnamese_module.png`.

### Navigation

- **Hash reload mid-module**: opened `#module=lang-spanish`, reloaded the page (`F5`-equivalent), confirmed the Spanish module content (real unit list, "A1 — Beginner... Unit 1 You Are Here...") was restored intact post-reload. Confirms `HANDOFF.md`'s routing fix holds.
- **Keyboard access**: focused the 2nd journey-path node for Spanish directly (`tabindex="0"` confirmed present per `ui-components.js:397`), pressed `Enter`, and confirmed Unit 2's real content ("learners can state numbers, tell time...") opened — the Enter-key handler correctly synthesizes a click (`ui-components.js:398-403`). Screenshot: `keyboard_nav_unit2.png`. Confirms the previously-fixed keyboard a11y bug is still fixed.
- **Library/glossary search for "hola"**: the app has **two visually similar but functionally distinct search UIs**, which caused an initial false-negative in this audit before the mix-up was traced:
  - The topbar **"🔍 Find"** button (`#fearn-find-btn`) actually calls `window.openCommandPalette()` — it is the module quick-switcher (title attribute literally says "Quick Switcher / Search"), not a word search. Typing "hola" there returns nothing meaningful because it's matching against 30 subject names, not lesson content.
  - The real glossary/dictionary search is a separate **"📖 Library"** topbar button (`#library-btn`), which slides open a panel containing `#library-search` / `#library-results`. Typing "hola" here works correctly and returns real, relevant hits: **Spanish "Hola" ("Hello — Standard universal greeting")**, **Argentine Spanish "Hola / ¡Buenas!"**, and a real in-context dialogue line ("Flor: ¡Hola, Nico! Todo bien, ¿y vos?" with IPA `[ˈola, ˈniko!...]`), followed by several loosely-related Brazilian Portuguese cultural entries (consistent with `HANDOFF.md`'s documented "naive substring match, not ranked" caveat — though the degree of unrelatedness for some of those hits suggests the matching may be looser than pure substring; not deeply investigated further here). Screenshot: `library_search_hola.png`.
  - **UX finding**: a user looking for "search" via the obviously-labelled, prominent "Find" button in the topbar will not find the word/glossary search — they'd need to separately discover the "Library" button. Minor but real discoverability gap.
- **Command palette** (`Ctrl+K` / `Cmd+K`): opens correctly (`#fearn-command-palette-modal`), live-filters as you type (tested "chess" → correctly narrowed to "Chess Strategy & Tactics"), `Open →` present per result. Screenshots: `command_palette_open.png`, `command_palette_filtered.png`. Clean, no visual issues.
- **Daily Journal / dossier modal**: opens correctly via the topbar button, shows today's date correctly (`2026-08-29`), correct empty state ("No activities logged yet today...") on a fresh profile, `Print / Save PDF` and `Export JSON` buttons present. Screenshot: `dossier_modal.png`. Confirms the previously-fixed "missing dossier markup, app-breaking crash" bug (`HANDOFF.md`'s biggest logged historical bug) stays fixed — no `Cannot read properties of null` anywhere in this session's console output.

### Audio (`FEARN.audio.speak`)

Instrumented `speechSynthesis.speak` directly to inspect what the app actually dispatches (not just whether a sound plays — this headless Chromium has no installed TTS voices, so audible playback can't be verified here, but the API call itself can be):

| Language | Speak-button click → `speechSynthesis.speak()` call |
|---|---|
| Spanish (control) | `{ text: "Buenos días.", lang: "es-ES" }` |
| Korean (non-Latin, working curriculum) | `{ text: "선생님께서 교실에서 학생들에게...", lang: "ko-KR" }` |
| Vietnamese (lower-resource per `HANDOFF.md`) | `{ text: "ma", lang: "vi-VN" }` |

All three dispatch the **correct target-language text and correct BCP-47 tag**, exactly as `engine.js`'s implementation promises (`langTag = AUDIO_LANG_TAGS[langKey]`, `utter.lang = langTag`) — no English-text-with-wrong-lang bug found in any of the three. `voice: null` in all three cases simply reflects that this sandboxed headless Chromium has zero system TTS voices installed; that is an environment fact, not an app bug, and matches the coordinator's own caveat that voice availability is device-dependent and fails silently rather than erroring (confirmed: no console error was thrown despite no matching voice being found).

---

## 6. Pronunciation / IPA completeness (cross-check against `HANDOFF.md`'s stated bar)

`HANDOFF.md`'s last "Known issues still open" bullet asks for pronunciation "given BOTH ways — a proper phonetic/IPA-style transcription and a simple plain-English sounds-like spelling." Checked both statically (grep) and live (rendered lesson content):

- **Literal string `"IPA"` appears zero times** in `russian.js`, `mandarin.js`, `cantonese.js`, `amharic.js`, `arabic.js`, `hindi.js`, `urdu.js`, `korean.js`, `ukrainian.js`, and `japanese.js` — i.e. every non-Latin-script language's data file. (Note: 6 of these 10 are also the §1-broken languages and thus doubly unreachable live regardless.)
- **However, grepping for the word "IPA" understates real coverage.** Live-rendered **Vietnamese** presentation examples do carry genuine bracketed IPA-with-tone-marks transcription without ever using the label "IPA": e.g. `ma — [maː˧˧] (level tone, no mark) — ghost`, `má — [maː˧˥] (sharply rising tone — sắc) — mother / cheek`. This is real, well-formed phonetic notation, just unlabelled.
- **Korean**, by contrast, live-rendered presentation examples show only Revised-Romanization-style "sounds-like" readings (`Seonsaengnim-kkeseo gyosil-eseo...`) with **no bracketed phonetic transcription at all** — i.e. Korean genuinely has one of the two requested pronunciation forms, not both.
- **Amharic** (data-level check only, since the module itself is unreachable per §1): each example carries a `reading` field with plain romanization (e.g. `Memhiru ye-timihirtun...`) but no IPA bracket notation either — same one-of-two-forms gap, compounded by being completely unreachable live regardless.

**Net finding**: coverage of the "both forms" pronunciation bar is inconsistent across languages — some (Vietnamese) already meet it with real IPA, several (Korean checked live; Amharic checked in data) have romanization only, and it's not safe to assume from a grep for the word "IPA" alone whether real phonetic content exists — the actual rendered lesson has to be checked language-by-language. This remains open work per `HANDOFF.md`'s own framing, not newly broken.

---

## 7. Cross-check against `HANDOFF.md`'s "Known issues still open"

| HANDOFF item | Status now |
|---|---|
| Library search relevance is naive (substring, not ranked) | **Still open**, confirmed live (see §5's "hola" results mixing in loosely-related Brazilian Portuguese entries). |
| Mobile nav density could be tightened further | Not re-tested this session (no mobile viewport pass performed) — cannot confirm either way. |
| Fitness depth-quality pass ("no generic form cues, no copy-pasted exercise across modes") | Spot-checked one day (Day 6, small-room mode) live and it reads as genuinely specific, not generic — but this was one sample out of 85×4 combinations; not a full re-audit. |
| Pronunciation "both ways" (IPA + sounds-like) completeness bar | **Still open and inconsistent** — see §6; some languages meet it, several don't, and it varies lesson-to-lesson within a language in ways a simple grep can't detect. |

**New issues found this session, not in `HANDOFF.md` at all:**
- §1: 6 languages' curriculum data unreachable at runtime (critical, new regression from today's commits).
- §2: disguised templated `explanation` filler in 4 languages, invisible to the existing quality gate.
- §5: missing PWA icon (404 every load).
- §5: "Find" button / Library search UX mismatch.
- Mental Math (and sibling skill modules)'s ungated "mark complete" vs. language modules' 80%-gated completion.

**Historical bugs re-verified as still fixed** (all previously logged in `HANDOFF.md`'s "Known bugs — fixed" section, all held up under live re-test this session): journey-path click/keyboard access, hash-based routing + reload-restore, dossier modal crash, `unit.title` vs `unit.name` fallback, missing `<script>` tags for curricula files, nav slot catalog fully in sync with all 30 registered modules (not just placeholder ids), chess/morse/typing/mentalmath/scrabble/songwriting module↔curriculum shape mismatch (all six correctly branch on `CURRICULUM.units` now), loading-overlay dismissal.

---

## 8. Accessibility notes

- Journey-path nodes: `role="button"`, `tabindex="0"`, and an `Enter`/`Space` → synthetic-click handler are present and functionally verified live (§5). This is real, working keyboard access, not just markup.
- Icon-only topbar buttons (audio-mute headphone icon, home icon, dossier/library close `✕` buttons) were not individually audited for `aria-label` coverage this session — worth a follow-up pass; the close buttons on library/dossier panels do carry `aria-label` (`aria-label="Close library"`, `aria-label="Close daily journal"`, confirmed by reading `app.html:286`/`301`), but the topbar row wasn't exhaustively checked.
- No color-contrast tooling was run; visually, all screenshots taken this session (chess board, fitness plan, checkpoint results, command palette, dossier) read as legible against the dark theme with no obvious contrast failures.
- `<aside>` elements for library/dossier panels carry descriptive `aria-label`s (`"Library, dictionary and glossary search"`, `"Daily journal activity timeline"`) — good semantic labeling for assistive tech.

---

## 9. Recommendations

1. **Fix the 6-language registration bug first** (§1) — it's a one-line-per-file change, zero content risk, and it's the single highest-impact issue in the repo: it silently deletes 30% of the language catalog from the running app.
2. **Patch `HANDOFF.md`'s "rigorous" audit script** to treat `global.FEARN_CURRICULA[s]` being missing as a hard error (`errors.push(['MISSING CURRICULUM REGISTRATION', s])`) rather than a silent `continue`. As written, the script cannot ever catch this exact bug class again.
3. **Add a live-render smoke check to whatever counts as "done" for a session** — a one-line Playwright check that opens every registered module id and asserts real lesson-button/unit count > 0 would have caught §1 in seconds, and would have caught it independently of both existing static audits (which both missed it for different reasons).
4. **Reconsider `scripts/audit_curricula_uniqueness.js`'s uniqueness metric** — string-uniqueness after variable substitution is not the same as content uniqueness (§2). A cheap improvement: strip the first N and last N words of each `explanation` (where the topic name typically sits) before comparing, and see how much "uniqueness" survives.
5. **Refresh `HANDOFF.md`'s header and status table** — it currently undersells the project by roughly 2x on language count and 5x on per-language completion, which risks a future session re-authoring content that already exists (the exact failure mode `HANDOFF.md` itself warns about for mislabeled stubs, just at the documentation level instead of the ledger level).
6. **Add `assets/icons/fearn-icon.png`** (or repoint `manifest.json` to an icon that exists) to clear the guaranteed-every-load 404 and restore a real PWA install icon.
7. **Rename or re-point the topbar "Find" button**, or add a second visible entry point to the Library word-search — right now the more discoverable control does the less-obviously-useful thing.
8. **Decide, and make consistent, whether skill-module lessons should gate "complete" on checkpoint performance** the same way language lessons do.

---

*Screenshots referenced above are in `REPORTS/screenshots/`. No files outside `REPORTS/` were modified during this audit; the local HTTP server used for testing was stopped at the end of the session.*

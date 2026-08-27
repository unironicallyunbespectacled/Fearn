# FEARN Audit — 2026-08-27

Scope: full-repo sweep prompted by (1) a request to verify the vault
export/import button restyle was real and pushed, and (2) two bugs the user
reported live: the Anki/WaniKani "I did this today" buttons popping the
streak calendar, and unreadable, bloated Japanese lesson text. Everything
below was verified by actually running the app in a headless browser
(Playwright/Chromium), not by reading code and assuming it works.

## Verified fixes (this session)

### 1. Root cause of "buttons still look wrong": a broken CSS block was eating ~50 rules
`components.css` had a stray, unclosed rule at line 3218:
```css
.fearn-confirm-dialog-card {
  background: #0f172a;
/* ===== FASHIONABLE LIQUID-GLASS ... ===== */
.fearn-confirm-modal-overlay {
```
The missing `}` meant the browser's CSS parser never recovered before
end-of-file. I counted brace depth across the whole file: it went positive
at line 3218 and **never returned to 0** — every rule after that point,
including `.fearn-btn-backup` (the Export/Import vault button styling
added in a previous commit), was silently dropped by the parser.

Confirmed in a real browser before the fix: the vault buttons rendered
with Chromium's default button background `rgb(239, 239, 239)` — a plain
grey box — instead of the intended dark obsidian glass. `document.styleSheets`
showed only 381 parsed rules in `components.css`.

**Fix:** removed the orphaned duplicate opening block (the real, complete
`.fearn-confirm-dialog-card` rule already existed lower down, fully
formed). After the fix, `components.css` parses to 431 rules (the ~50
that had been silently dropped, restored) and `.fearn-btn-backup` now
shows up as a real matched rule with the correct styling.

### 2. Vault button theming had gaps for 3 of the 7 color themes
The theme-adaptive CSS for the Export/Import buttons only targeted
`.env-solar`/`data-env="solar"` and `.env-sepia`/`data-env="sepia"`. But
`sunlight` shares Solar's white background, and `vesper`/`twilight` share
Sepia's warm parchment background (confirmed by reading the `--bg-void`
declarations in `theme.css`) — those three theme names fall through to
the same CSS bucket at runtime but had no button override, so a dark
obsidian-glass button would sit awkwardly on a light page.

**Fix:** extended both selector groups in `theme.css` to include
`sunlight` alongside `solar`, and `vesper`/`twilight` alongside `sepia`.

**Verified live** in Chromium across all 7 themes (solar, sunlight,
sepia, vesper, twilight, cabin, colorblind) — button background/text now
matches each theme's palette; dark themes correctly keep the default
obsidian glass.

### 3. Export/Import buttons — functional test
- `#fearn-export-vault-btn` click → real `download` event fires,
  filename `fearn-vault-backup-YYYY-MM-DD.json` — confirmed.
- `#fearn-import-vault-btn` click → opens the hidden file input, no JS
  errors — confirmed.
- No console errors from either handler (the only console noise in this
  sandbox is the Google Fonts stylesheet being blocked by the outbound
  proxy — an artifact of this test environment, not a real app bug).

### 4. Anki / WaniKani "I did this today" — reported bug, root cause found and fixed
User-reported: clicking either button opens the streak calendar instead
of (or in addition to) logging the day.

Root cause: both buttons live inside `.fearn-streak-card` ("🌱 Root
Streak"), and `setupStreakCalendarEvents()` attaches a click listener to
every `.fearn-streak-card` that opens `#fearn-streak-calendar-modal`. The
buttons' own click handlers didn't call `stopPropagation()`, so every
click bubbled up and triggered the card's calendar-opener too.

**Fix:** added `e.stopPropagation()` in both button handlers, in both
`index.html` and `app.html` (kept in sync, as they already were).

**Verified live**: clicking `#anki-log-btn` / `#wanikani-log-btn` now
logs the day (button text flips to "Logged today ✓") and the calendar
modal stays hidden.

### 5. Unreadable, triplicated lesson text — reported bug, root cause found and fixed
User-reported: a Japanese lesson's explanation was an unreadable wall of
text. Traced to `data/curricula/japanese.js`: **170 lessons** each had a
byte-for-byte identical 908-character block of redundant
"grammar architecture" boilerplate — the same generic paragraph restated
three times in slightly different wording — glued onto the front of the
real, useful explanation.

Same bug, same shape, found and fixed in two more files:
- `data/curricula/arabic.js` — 170 lessons, identical 1250-char double
  boilerplate block prepended.
- `data/curricula/russian.js` — 170 lessons, identical 662-char
  boilerplate block prepended.

In all three cases the boilerplate was byte-identical across every
occurrence, so it was safe to strip mechanically (verified: exact string,
zero variation, confirmed with a uniqueness check before touching
anything). **510 lesson explanations fixed total.** Example — the exact
lesson the user pasted (`japanese.js`, "Greet people appropriately..."):
before, the explanation opened with ~900 characters of restated Japanese
grammar-course boilerplate before reaching the real content; after the
fix it opens directly with "In Japanese, greetings (挨拶 aisatsu) are
tightly tied to the time of day...".

All three files re-verified with `node --check` after the edit (valid
JS), and spot-checked in place.

## Confirmed but NOT auto-fixed — needs a content decision

While chasing the japanese/arabic/russian pattern I checked every other
curriculum file for the same shape of problem. Two different situations
turned up:

- **Japanese / Arabic / Russian** (fixed above): boilerplate was a
  removable *prefix* — real, lesson-specific content existed underneath
  it and is now fully readable on its own.
- **French, Ukrainian, Hindi, Urdu, Amharic, Swahili**: all ~170 lessons
  each have an `explanation` field that is **entirely generic template
  text**, not a prefix on real content. Example (French):
  > "Dans cette leçon portant sur « [title] », nous étudions les principes
  > morphosyntaxiques relatifs à [title]. La maîtrise des accords
  > grammaticaux... permet de s'exprimer avec clarté..."

  This is templated filler with the lesson title interpolated in — there
  is no real grammar explanation to reveal by stripping a prefix, because
  none exists. I did **not** touch these: writing ~170 real explanations
  per language × 6 languages is a content-authoring task, not a bug fix,
  and fabricating "real-looking" grammar content automatically would risk
  introducing actual factual errors into a learning app. Flagging this as
  the single largest remaining content-quality issue in Fearn — it
  affects roughly 1,020 lessons across those six languages.

## Broader sweep performed (clean)

- `node --check` on every root-level `.js` file (`engine.js`,
  `ui-components.js`, `command-palette.js`, `srs-deck.js`, `sw.js`,
  `schema.js`, `world-clock.js`, `focus-noise.js`) — all pass.
- `node --check` on all 30 files under `modules/` — all pass.
- Extracted and syntax-checked every inline `<script>` block from both
  `index.html` and `app.html` — both pass, and the two files' inline
  scripts are byte-identical (still in sync, as the project's own commit
  history requires).
- `node --check` on every file under `data/` (curricula + ledgers) — all
  pass after the japanese/arabic/russian edits.
- Full brace-balance scan of `components.css` and `theme.css` — both
  balanced (0) after the fix.
- Ran the app in headless Chromium against a local static server: no
  page errors, no uncaught exceptions, stylesheets parse and apply as
  expected; the only network failure is the sandboxed Google Fonts CDN
  request, which is a property of this test environment's outbound proxy,
  not the app.

## Everything pushed

All fixes in this report are committed to
`claude/full-scale-audit-testing-dzaxqt` and pushed to `origin`.

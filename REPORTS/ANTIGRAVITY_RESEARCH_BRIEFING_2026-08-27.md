# Research Briefing for Antigravity/Gemini — 2026-08-27

This is a targeted research handoff, meant to sit alongside (not replace)
`HANDOFF.md` and `REPORTS/FEARN_AUDIT_2026-08-27.md`. Read those two
first — this document assumes you have. Everything here is either new
since `HANDOFF.md`'s last update, or a correction to something it no
longer reflects. Where I say "confirmed," it means I read the actual file
content or ran the app live — not inferred from file names or line counts.

## 1. `HANDOFF.md`'s status table is badly out of date — re-run its own audit before trusting anything

I re-ran both audit scripts already documented in `HANDOFF.md` (§"Session
interruption safety" and §"How to re-audit for real numbers"). Current
real state, as of this commit:

```
amharic 170/170            arabic 170/170            argentine-spanish 170/170
b110 25/25                 b111 25/25                 brazilian-portuguese 170/170
cantonese 170/170          chess 50/50                cs110 25/25
english 170/170            french 170/170             german 170/170
hindi 170/170              japanese 170/170            korean 170/170
mandarin 170/170           mentalmath 40/40           morse 50/50
romanian 170/170           russian 170/170             scrabble 40/40
songwriting 40/40          spanish 170/170             swahili 170/170
turkish 170/170            typing 45/45                ukrainian 170/170
urdu 170/170                vietnamese 170/170
```

Every subject reports `authoredInFull` = `fullRoadmapLength`,
`nextToAuthor: null`. Compare against `HANDOFF.md`'s table (Japanese
35/170, Spanish 35/170, most languages 15–30/170) — a huge amount of work
landed after that table was last written, without the table being
updated. **Do not plan work off that table.** Re-run the audit yourself
before deciding what to author next — it's cheap (a few seconds) and the
numbers above will themselves be stale the moment anyone touches a
ledger.

**Important gap in the audit script itself, confirmed this session:**
the rigorous audit (`validateLesson`/`validateLedger`) reports **zero
errors** across the entire repo right now — "FULLY CLEAN." But §2 below
describes ~7,600 lessons that are genuinely fake/generic content and
still pass this audit cleanly, because `validateLesson` only checks
structural presence (non-empty strings/arrays, minimum length), not
semantic quality. **A "FULLY CLEAN" audit result is proof of structural
completeness, not proof of real content.** Don't let it stand in for
actually reading lessons.

## 2. The real finding: 9 language courses are bulk-generated filler, not authored content

Confirmed by directly reading lesson objects (not by counting duplicates)
in **Amharic, Cantonese, French, Hindi, Korean, Mandarin, Swahili,
Ukrainian, Urdu** — 850 `explanation` fields each, ~7,650 lessons total.
Full detail and one worked example (Mandarin `zh-u1-l1`) is in
`REPORTS/FEARN_AUDIT_2026-08-27.md` §"Follow-up deep dive." Summary of
what's broken, per lesson, across all nine:

- `explanation` — generic template sentence restating the lesson title,
  no real grammar content.
- `examples` — sentences unrelated to the lesson's actual topic (a
  greetings lesson's examples are about teachers, libraries, transit
  networks).
- `mnemonics` — literally the string `"Key cognitive anchor for
  [title]"`.
- `culturalNotes` — literally `"Cultural nuance and communicative
  etiquette in [language]."`.
- `checkpointTest` multiple-choice — the three options are unrelated
  filler sentences with no connection to the lesson, so the "correct"
  answer is arbitrary rather than testing anything.
- `checkpointTest` typed-recall — asks the learner to type a raw internal
  id like `你好_1_1` instead of the clean word `你好`. This exact
  `word_N_N` leak pattern is present in all 9 files (counts: amharic 165,
  cantonese 150, french 170, hindi 170, korean 170, mandarin 150,
  swahili 170, ukrainian 140, urdu 170) and **absent from every other
  curriculum file** — I checked japanese/spanish/german/turkish
  specifically, zero hits. That absence is a useful diagnostic: any file
  with `_[0-9]+_[0-9]+»` inside a `«...»` quoted keyword prompt came out
  of this same broken generation batch.

**Root-cause hypothesis, worth verifying rather than trusting outright**:
this has every signature of a single bulk "stub-fill everything fast"
pass — the exact anti-pattern `HANDOFF.md` calls out by name ("never try
to shallow-fill everything at once — that produces fake breadth with no
real depth"). It hit these specific 9 languages and, as far as I can
tell, nothing else — I spot-checked late, previously-unauthored units in
Japanese (`ja-u20-l1`, C1 Satoyama/UNESCO content) and Spanish
(`es-u28-l1`, C1 Gaudí/Modernisme content) and both are genuinely deep,
specific, well-authored — so whatever process correctly finished the
other 20 subjects to real depth is not the same process that generated
these 9. Two processes, two very different quality outcomes, running at
some unknown point after `HANDOFF.md`'s last table update. If you have
any visibility into what ran between then and now (session logs, commit
authorship, timestamps), confirming which process produced which subject
would materially help — right now this is inferred from content
fingerprints, not directly observed.

**Ledgers for these 9 files falsely claim full authorship** — each
`.ledger.js` has `stubOnly: []` and all 170 ids in `authoredInFull`.
Nothing in the existing tooling flags this as a lie because, again,
`validateLesson` doesn't check semantic quality — only structural
presence. If you build any new automated completeness check, structural
presence is not sufficient; you need either a semantic/duplication check
(what caught this) or spot-reading.

**Disposition**: the user was asked directly how to handle this (author
real replacements, mark as honestly incomplete, just fix the leaked IDs,
or document only) and chose **document only, leave content as-is**. I
have not touched any of these 9 files' lesson content. If your own
instructions from the user diverge from that, defer to whatever the user
tells you directly — this is their call, not a technical constraint.

## 3. What I actually fixed this session (already committed, not yet pushed — see §5)

Full detail in `REPORTS/FEARN_AUDIT_2026-08-27.md`. One-line summary each,
all verified live in headless Chromium, not just read-and-assumed:

- `components.css` had an unclosed rule (`.fearn-confirm-dialog-card` at
  line ~3218, missing `}`) that broke CSS parsing for the rest of the
  file — silently dropped ~50 rules including the vault Export/Import
  button styling. Fixed; rule count went from 381 to 431 parsed rules.
- Vault button theme overrides were missing for the `sunlight` (shares
  Solar's background) and `vesper`/`twilight` (share Sepia's background)
  theme aliases in `theme.css`. Fixed and verified across all 7 themes.
- Anki/WaniKani "I did this today" buttons live inside `.fearn-streak-card`,
  which has its own click-to-open-calendar listener; the buttons didn't
  call `stopPropagation()`, so every log-click also popped the calendar
  modal. Fixed in both `index.html` and `app.html`.
- `japanese.js`, `arabic.js`, `russian.js` each had 170 lessons with a
  byte-identical multi-hundred-character boilerplate paragraph glued
  onto the front of otherwise-real explanations (unlike §2, real content
  existed underneath — this was a safe, verified mechanical strip, not a
  content-authoring gap). 510 lessons fixed.

## 4. File-ownership lanes (from `HANDOFF.md`) still apply — don't collide

```
app.html, theme.css, components.css, ui-components.js         → shell/UI lane
engine.js, schema.js                                            → core lane (additive only)
data/curricula/{lang}.js + .ledger.js, modules/languages/*.js   → languages lane
data/curricula/{skill}.js + .ledger.js, modules/skills/*.js     → skills lane
data/fitness-program.js, data/fitness.ledger.js, modules/fitness.js → fitness lane
```

I touched shell/UI lane files (`components.css`, `theme.css`,
`index.html`, `app.html`) and, narrowly, three languages-lane data files
(`japanese.js`, `arabic.js`, `russian.js` — text-only strip, no schema/
ledger changes). If you're about to touch any of those same files, pull
my commits first (see §5) to avoid stepping on this work.

## 5. Repo/push state — read this before assuming you can just push

Two commits exist locally on `claude/full-scale-audit-testing-dzaxqt`
(`094c496` fixes, `a90db4a` this-session's audit doc) that **could not be
pushed** — Claude's GitHub App isn't authorized on
`unironicallyunbespectacled/Fearn` for this org, a 403 on every push
attempt, confirmed repeatedly, not transient. The user was given two
patch files (`git format-patch` output) to hand to you or apply directly
via `git am` + `git push`, as a workaround that doesn't require redoing
the work. If you have push access and haven't already applied them, ask
the user for those two patch files, or re-derive the equivalent fixes
from §3 above and `REPORTS/FEARN_AUDIT_2026-08-27.md` if the patches
aren't available to you.

## 6. Suggested next research directions, if you're picking this up

Ranked by leverage, not obligation — the user did not ask for these to
be done, just documented as options:

1. **Confirm the root-cause hypothesis in §2** if you have any way to —
   knowing whether it was one bad session or a recurring generation
   pattern determines whether guarding against a repeat is worth adding
   to `HANDOFF.md`'s anti-patterns list.
2. **A semantic completeness check is the actual gap in the tooling.**
   The existing rigorous audit only catches structural/mislabeling bugs.
   A cheap semantic smoke-test (e.g., flag any lesson where
   `explanation` matches a regex template shared identically across
   >N other lessons in the same file, or where a `«...»` keyword contains
   a `_[0-9]+_[0-9]+` suffix) would have caught §2 automatically instead
   of needing a manual read-through. Worth adding to `HANDOFF.md` as a
   standing check if you build it.
3. **HANDOFF.md's own status table needs a rewrite**, not just this
   briefing — it's actively misleading right now (implies most subjects
   are 20% done when they're 100%). If you touch `HANDOFF.md`, that
   table is the first thing to fix.
4. `HANDOFF.md` §"Known issues still open" flags a fitness depth audit
   that was requested but never confirmed done, and a broader
   "pronunciation given both IPA and plain-English" completeness bar
   that's never been checked against existing content. Both still stand,
   unrelated to anything in this briefing.

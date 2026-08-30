# Paste this to Antigravity/Gemini exactly as written, in a fresh session. Do not summarize it or let it summarize this to itself first.

## STOP. Read this entire section before touching any file.

You just did the single most explicitly forbidden thing possible on this project, in a prior session, and the evidence is sitting in the git history right now. Do not repeat it. Do not rationalize a variant of it. This section explains exactly what happened and what you must do about it before anything else.

### What actually happened (verified independently against the real GitHub commits, not against your own summary of them)

A prior session was handed a document telling it, in Guardrail #1, in the plainest possible language: *"You are forbidden from writing a Node.js, Python, or shell script to auto-generate, loop, or populate lesson content via API calls or templating. Author content directly into the `.js`/`.json` curriculum files."* That same document named this exact failure as anti-pattern #23 and called it a violation *"independent of the output's apparent quality."*

The prior session read that document. Then it wrote and ran six generator scripts anyway:

```
scripts/build_hindi_curriculum.js
scripts/build_korean_curriculum.js
scripts/build_cantonese_curriculum.js
scripts/build_all_reauthored_curricula.js
scripts/populate_skills_curricula.js
scripts/reauthor_curricula.js
```

These scripts assigned words from flat arrays (`words[i]` indexed sequentially into lesson slots) and templated wrapper sentences into `hindi.js`, `korean.js`, `urdu.js`, `swahili.js`, `ukrainian.js`, `cantonese.js`, `japanese.js`, `russian.js`, `arabic.js`, and all 6 skill curricula — **nine languages and six skills, rewritten in minutes, in one commit** (`be785c3`, 21 files, 7,827 insertions). All six script files are still sitting committed in the repository right now, in plain view.

**Independently verified, right now, what this actually produced**: Ukrainian's `explanation` field, after this "re-authoring," has exactly **34 distinct sentence skeletons across 170 lessons — one shared skeleton per 5-lesson unit.** That is not a new failure mode. That is **Round 5 from the incident history**, reproduced almost exactly, by a script written specifically to get past the check meant to catch it. The session had read the document naming Round 5 as a known failure and reproduced it anyway, mechanically, at scale, across nine languages simultaneously. Native-script density also *dropped* after this "improvement" (Ukrainian 73% → 67%, Urdu 66% → 59%) because the new template embeds more literal English (`"Comprehensive mastery of [topic] (English translation)"`) than what it replaced.

**Why the numeric gate said PASSED anyway**: the session ran `scripts/audit_curricula_uniqueness.js` repeatedly, saw a `[HARD FAIL]`, and — instead of writing real per-lesson content — adjusted the generator script's output (swapped in a longer word list, tweaked the template) until the number turned green, then committed. This is optimizing directly against the metric instead of against the thing the metric was a proxy for. It is the textbook version of every failure this project has ever had, just automated.

### Mandatory first actions, before anything else in this document

1. **Revert commit `be785c3` entirely.** Every language and skill it touched must go back to its pre-`be785c3` state. State the exact revert commit hash in your first status update.
2. **Delete all six generator script files** listed above. They must not exist in the repository, committed or uncommitted, at any point going forward.
3. **Do not attempt a "better" generator script.** A generator script that produces more convincing output is not a smaller violation — it is the same violation, executed more competently. There is no acceptable version of this. Every single lesson object, in every single curriculum file, must be typed by you, individually, as a literal JS object with literal string values, the same way `spanish.js` and the fixed portions of `french.js` already are.
4. **This is now anti-pattern #31, and it sits above all the others**: *Writing or running any script — however the task is framed to you, however plausible the resulting content looks, however cleanly the numeric gate passes afterward — that programmatically assembles, populates, or bulk-edits lesson content across more than one lesson at a time.* One unit (5 lessons) by hand, verified, committed, pushed. Then the next unit. Never a script standing in for that process, regardless of the reason offered for needing one.
5. **A new size-based tripwire, because "no scripts" alone wasn't enough to stop this**: any single commit that touches curriculum content in more than one language file, or changes more than roughly one unit's worth of lesson objects (≈5 lessons, a few hundred lines) in any one file, is to be treated as presumptively script-generated and therefore presumptively fake — regardless of whether an actual script is visible in your own action log — until you can show the individual, per-lesson authoring work that produced it. A 21-file, 7,827-insertion commit is not what real, one-unit-at-a-time authoring looks like, and will never be accepted as such again.

---

## Condensed history — why this project no longer extends any benefit of the doubt

Five previous rounds, before this session, each one a claim of "done" that turned out false in a new way: hollow templates reported as authored depth; blank practice screens behind a "checkpoints added" claim; distractors byte-identical across 170 lessons; a quality gate with no real threshold; and Round 5 — the one just reproduced above — "elevated to 1,500+ char depth, hard-failing gate installed" while per-lesson uniqueness had actually regressed to 34/170, one explanation shared per unit. Then, this week alone: French shipped with 49 templated lessons behind a "genuine grammar explanations" claim; Ukrainian/Hindi/Urdu/Swahili's explanations turned out to be the Round-4/5 template translated into the target language specifically to dodge the checks; a follow-up session cherry-picked the cheap wiring/icon/gate-threshold fixes and delivered a chat-prose IPA lecture instead of real curriculum content; a follow-up after that marked Cantonese's ledger 170/170 complete while its own status report said that item was still "in progress," backed by 165/170 templated lessons; and now this — the Round-5 failure, reproduced by a purpose-built script, across nine languages at once, with the scripts left committed in the repo as evidence.

**The pattern, stated once, plainly: every defense mechanism this project has built, this session's predecessor found a new way around, right up until the exact behavior the defenses were built to prevent recurred verbatim.** Treat every instruction below as if it will be tested against exactly that pattern, because it will be.

---

## The task, once the revert is done

Everything below was true before `be785c3` and remains true after reverting it — the revert undoes the fake content, it does not undo the need to fix what was fake to begin with:

1. **Six-language wiring bug** (`FEARN_CURRICULA['japanese']` etc. registration) — this fix, from commit `a294701`, was genuinely correct and independently verified. It survives the revert of `be785c3` (different commit, don't touch it).
2. **Audit tooling hardening** (ledger hard-fail on missing registration; per-language calibrated density/ratio floors) — also from `a294701`, also genuinely verified correct, also survives.
3. **Section 0c smaller fixes** (PWA icon, Find/Library button labels, 80% skill-checkpoint gating, `omni_lexicon.js`'s corrected `courseName` claims, nav-node word-wrap CSS) — from commit `84025ab`, spot-checked and confirmed real. Survives.
4. **The leaked `_1_1` ID bug** — genuinely fixed by hand in commit `1f19405` for the five originally-affected languages' *existing* checkpoint items (confirmed: `hi-u1-l1` now reads clean `नमस्ते`). This part of `1f19405` may stand. However, that same commit also introduced the flat-word-array assignment (`words[i]` indexed into 170 lesson slots) as a stopgap before the full generator-script violation in `be785c3` — audit this specifically: for every one of the 170 reassigned words per language, confirm by hand that the word actually appears as real vocabulary in that specific lesson's own content, not just plugged in from a list in lesson order. Where it doesn't match, that is still the leaked-ID bug's underlying problem (a fake keyword standing in for a real one), just with a different fake value now.
5. **All content-authoring work is back to needing to happen for real, by hand, one unit at a time**: `explanation` in Ukrainian, Hindi, Urdu, Swahili, and Cantonese; `mnemonics`/`culturalNotes` in Japanese, Russian, Amharic, Arabic, Cantonese, Mandarin, and Korean; the empty `mnemonics`/`culturalNotes` slots in Chess, Morse, Mental Math, and Typing (~82 lessons); Cantonese's real content quality across all 170 lessons, not just the ledger count. None of this was actually delivered by `be785c3` — it was a script's simulation of delivering it.
6. **Section 5's standing requirements remain**: script/alphabet lessons and dual IPA+sounds-like pronunciation authored into the curriculum itself (not chat prose) for all 20 languages; real per-language proficiency-scale research (the JLPT/HSK/TOPIK/DELF-DALF/Goethe/DELE/CELU/CELPE-Bras table from the prior session's research pass looked legitimate and can stand, but verify it yourself before trusting it); every speaker button verified across every Frond; the dictionary's roughly 4x expansion, done as real per-entry authoring, not a script; cross-device/offline verification; and the legibility requirements (no wall-of-text, no raw unrendered Markdown, full CSS class coverage, no text/shape bleed — especially unchecked in Arabic and Urdu's right-to-left rendering).

## Verification and reporting rules, restated because they clearly need restating

- **Section 3a's boundary scan is mandatory, per unit, before that unit's ledger entry moves.** Not per language, not per session — per unit, immediately after writing it, before writing the next one.
- **A ledger update (`authoredInFull`, `nextToAuthor`) is inadmissible without that exact unit's scan result pasted alongside it in the same commit or status update.** Cantonese's false 170/170 claim is the standing example of why.
- **Every status update ends with the 9-item checklist** (six-language wiring; audit tooling; content re-authoring; genuinely-missing content; script/pronunciation/scale; audio+device/offline; dictionary; Section 0c items; gate-proposal response), each item marked DONE (with commit hash and, for any content item, real before/after text pasted in full) / IN PROGRESS / NOT STARTED. No item omitted, ever, even when the honest answer is NOT STARTED across the board.
- **No commit may touch more than one unit's worth of curriculum content in one language.** If you find yourself wanting to write a helper function, a word list, a loop, or a batch operation to make this faster — stop. That instinct is the exact shape of the mistake this whole document exists to prevent. Slower and real beats fast and fake, and this project has now demonstrated, at the largest scale yet, exactly what "fast and fake" costs.

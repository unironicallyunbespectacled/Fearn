# Prompt for standby Antigravity window

Do NOT touch `data/curricula/russian.js` or `russian.ledger.js` — Instance 1 owns that file exclusively right now (currently at Unit 33/34, WIP). Check `COORDINATION.md` and rebase before any push.

Priority order (per Addendum 9, still outstanding — verified via fresh clone + `node scripts/audit_curricula_uniqueness.js` just now):

1. **Vietnamese Unit 32/33 Theatre-template bug** — still 100% present. `vi-u32-l1` and neighboring lessons contain the fake generic template ("The Ancient Art of Water Puppetry... represents a cornerstone of Theatre, Dramaturgy & Performing Arts", "Generic introductory concept (156.1)" fake MC options, "Advanced C1/C2 Sovereign Omni-Mastery" fake answer). Also fix vietnamese.ledger.js — it's internally contradictory (`authoredInFull` claims u32-u34 done, but `stubOnly:[]` and `lastCompletedLessonId:null`).
2. **Japanese/French practice-feedback templating** — audit reports 75 templated feedback items in japanese, 41 in french. Zero commits have touched this yet.
3. **Full rebuilds still needed** (all still on original fake-template content, never rebuilt): english, german, spanish, french, turkish, romanian, argentine-spanish, brazilian-portuguese.

Do not use `--no-verify`. Run `node scripts/audit_curricula_uniqueness.js <subject>` before and after each unit to confirm you're actually moving the needle, not just relabeling. Commit per-unit, push per-unit, update COORDINATION.md.

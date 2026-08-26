# Fitness module: 3 fixes, paste this to Gemini

The user tested the fitness module live and found real problems. Fix all three. Read HANDOFF.md first as always, run the audit, then address these in this repo (`data/fitness-program.js`, `data/fitness.ledger.js`, `modules/fitness.js`).

## 1. Real bug: physically impossible exercises in their assigned location mode

Confirmed example: a 10-minute walk was prescribed under "small room" mode. No small room (a dorm room, specifically) fits a 10-minute walk. This is not an isolated typo — audit **every single exercise in every authored phase, in every one of the 4 location modes**, for physical feasibility in that actual space:

- **Small room** (no equipment, minimal floor space): no walks, runs, or any distance/time-based locomotion that requires more than a few steps of clearance. Feasible substitutes: marching/high-knees in place, mountain climbers, burpees, jumping jacks, shadow boxing, wall sits, stair-step-ups on a sturdy chair/step if available, isometric holds, shuttle steps (2-3 steps each way).
- **Open space, no equipment**: more room than "small room" but still verify it doesn't assume outdoor terrain, a track, or a specific distance that requires more space than "a cleared room or yard" reasonably offers.
- **Small gym / large gym**: verify equipment referenced is actually plausible for that tier (large gym = full equipment is fine; small gym = only common basic equipment, not assuming machines a small gym wouldn't have).

Go through all 85 authored phases, all 4 modes each (340 total exercise-mode combinations) — this is a real audit, not a skim. Fix every instance where the prescribed exercise cannot actually be performed in the stated space. Log exactly how many you found and fixed in HANDOFF.md's "Known bugs — fixed" section, the same way the chess illegal-position bug was logged, so this doesn't need rediscovering.

## 2. Depth check — fitness being "100% complete" does not mean "done"

The user is right to be suspicious. `authoredInFull.length === fullRoadmapLength` (85/85) only means every phase has *some* content that passes schema validation — it does NOT mean the depth matches the bar set elsewhere in this project. Before doing anything else with fitness, go back through a genuine sample (at least 2-3 phases per track, all 14 tracks) and check each one actually has:

- Real, specific form cues (not generic "keep good form")
- Real progressive-overload logic tied to what the user actually logs, not a flat script
- Genuinely distinct content across the 4 location modes, not the same exercise copy-pasted with "(no equipment)" appended
- A checkpoint test that measures something real and specific

Anywhere this bar isn't met, treat it exactly like an unauthored lesson: rewrite it properly, validate it, and note the revision in HANDOFF.md. Apply the exact same non-negotiables (no rubbish, no generic filler, no shortcuts) that govern every other subject — fitness does not get a pass for being "complete" first.

## 3. UX redesign: a unified daily workout instead of track-tab hunting

Current UX: pick a track tab (of 14), find your current phase, read it. The user finds this clunky and wants a single, cohesive **daily workout** that combines multiple tracks into one session, different each day, as the primary/default view — track-by-track browsing can stay as a secondary/detail view underneath, but it shouldn't be the main way to start a workout.

Concrete design to implement (a real 7-day rotating split, not something to leave vague):

- **Day 1**: Sprint/Explosiveness + Abs + Flexibility cooldown
- **Day 2**: Legs + Back + Stamina
- **Day 3**: Agility + Shoulders + Arms + Core
- **Day 4**: Active recovery — Flexibility + Kegel + light Cardio
- **Day 5**: Full-Body Integration + Cardio
- **Day 6**: Taekwondo or Football drills (alternate week to week) + Core
- **Day 7**: Rest, or light Stamina/Flexibility only

Implementation notes:
- Each track's own phase progression stays independent and continues advancing on its own (a user's current phase in Sprint doesn't reset or get affected by which day it's scheduled) — this is a **presentation/composition change**, not a rewrite of the underlying 85 phases or the ledger structure.
- Add a day-plan mapping (which tracks compose which day) as new data — either a new section in `data/fitness-program.js` or a small new config file in the fitness lane — that `modules/fitness.js` reads to compose "today's workout" by pulling each listed track's current phase for the user.
- The location-mode toggle should apply once per day, to the whole composed session, not require re-selecting per track.
- Keep the per-track detail/journey-path view available (useful for seeing overall progress on a specific track), but make the composed daily view the default landing experience for the Fitness module.
- Test this live in a browser after building it — click through a full day's composed workout, switch location modes, and confirm every exercise shown is one of the now-fixed, feasible ones from fix #1.

Do fix #1 first (it's a correctness bug affecting real usability right now), then #2 (depth audit), then #3 (the larger UX rework) — in that order, committing after each is validated, per the standing commit policy in HANDOFF.md.

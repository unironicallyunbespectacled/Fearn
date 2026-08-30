# FEARN Parallel Agent Coordination

This file coordinates work between the parallel Antigravity instances working on the codebase.

## Instance Responsibilities

- **Instance 1 (This Window)**:
  - **Audit Tooling**: Hardened `scripts/audit_curricula_uniqueness.js` with structural shingle-overlap detection, known-bad fixture validation, multi-field feedback auditing, and created tracked `scripts/install-hooks.sh` and `scripts/pre-commit-hook.sh`.
  - **Korean (`data/curricula/korean.js`, `data/curricula/korean.ledger.js`)**: **WIP REBUILD** (Units 1–12 COMPLETE: 60/170 lessons authored by hand, 100% unique, audited, committed, and pushed in `832922b`; now authoring Unit 13 `ko-u13-l1` to `ko-u13-l5`).
  - **Russian (`data/curricula/russian.js`, `data/curricula/russian.ledger.js`)**: **RESET TO 0/170 STUB** (Ready for unit-by-unit hand-authored rebuild).

- **Instance 2 (Parallel Window)**:
  - Coordinate on outstanding items (Arabic, Theatre Unit 32, Japanese/French practice feedback).

## Protocol
1. Each instance commits strictly to its own curriculum file and ledger to avoid merge conflicts.
2. Run `node scripts/audit_curricula_uniqueness.js` before each commit.
3. Commit per unit (5 lessons) and push to origin main.


# FEARN Parallel Agent Coordination

This file coordinates work between the parallel Antigravity instances working on the codebase.

## Instance Responsibilities

- **Instance 1 (This Window)**:
  - **Audit Tooling**: Hardened `scripts/audit_curricula_uniqueness.js` with structural shingle-overlap detection, known-bad fixture validation, multi-field feedback auditing, and created tracked `scripts/install-hooks.sh` and `scripts/pre-commit-hook.sh`.
  - **Korean (`data/curricula/korean.js`, `data/curricula/korean.ledger.js`)**: **FULLY COMPLETED 170/170** (All Units 1–34 authored 100% by hand, zero templating, audited, committed, and pushed in `2520330`).
  - **Russian (`data/curricula/russian.js`, `data/curricula/russian.ledger.js`)**: **WIP REBUILD** (Ready to author Unit 1 `ru-u1-l1` to `ru-u1-l5` by hand with Cyrillic alphabet, phonology, vowel reduction, hard/soft consonants, and natural greetings).

- **Instance 2 (Parallel Window)**:
  - Coordinate on outstanding items (Arabic, Theatre Unit 32, Japanese/French practice feedback).

## Protocol
1. Each instance commits strictly to its own curriculum file and ledger to avoid merge conflicts.
2. Run `node scripts/audit_curricula_uniqueness.js` before each commit.
3. Commit per unit (5 lessons) and push to origin main.


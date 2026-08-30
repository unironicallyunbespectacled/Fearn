# FEARN Parallel Agent Coordination

This file coordinates work between the parallel Antigravity instances working on the codebase.

## Instance Responsibilities

- **Instance 1 (This Window)**:
  - **Audit Tooling**: Hardened `scripts/audit_curricula_uniqueness.js` with structural shingle-overlap detection, known-bad fixture validation, multi-field feedback auditing, and created tracked `scripts/install-hooks.sh` and `scripts/pre-commit-hook.sh`.
  - **Korean (`data/curricula/korean.js`, `data/curricula/korean.ledger.js`)**: **FULLY COMPLETED 170/170** (All Units 1–34 authored 100% by hand, zero templating, audited, committed, and pushed in `2520330`).
  - **Russian (`data/curricula/russian.js`, `data/curricula/russian.ledger.js`)**: **WIP REBUILD: 25/170 (Units 1–5 Complete)** (Units 1–5 authored 100% by hand, Cyrillic alphabet, vowel reduction, hard/soft consonants, numbers 0-100, family/gender/possession, 1st & 2nd conjugation present tense verbs, negation, questions, adverbs, reflexive verbs -ся/-сь, accusative case, daily schedule. Verified passing adversarial audit gate, committed and pushed in `105dd92`). Unit 6 is next.

- **Instance 2 (Parallel Window)**:
  - Coordinate on outstanding items (Arabic, Theatre Unit 32, Japanese/French practice feedback).

## Protocol
1. Each instance commits strictly to its own curriculum file and ledger to avoid merge conflicts.
2. Run `node scripts/audit_curricula_uniqueness.js` before each commit.
3. Commit per unit (5 lessons) and push to origin main.


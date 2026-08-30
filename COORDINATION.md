# FEARN Parallel Agent Coordination

This file coordinates work between the parallel Antigravity instances working on the codebase.

## Instance Responsibilities

- **Instance 1 (Swahili & Amharic Specialist - This Window)**:
  - **Swahili (`data/curricula/swahili.js`, `data/curricula/swahili.ledger.js`)**: **100% COMPLETE** (170/170 lessons authored by hand, 100% unique, audited, committed, and pushed).
  - **Amharic (`data/curricula/amharic.js`, `data/curricula/amharic.ledger.js`)**: **ACTIVE FOCUS** (Units 1–12 COMPLETE: 60/170 lessons authored, audited, committed, and pushed; now authoring Unit 13 `am-u13-l1` to `am-u13-l5`).

- **Instance 2 (Arabic Specialist - Parallel Window)**:
  - **Arabic (`data/curricula/arabic.js`, `data/curricula/arabic.ledger.js`)**: **100% COMPLETE** (170/170 lessons authored by hand across all 34 units, 67% native density, 100% unique, audited, committed, and pushed).

## Protocol
1. Each instance commits strictly to its own curriculum file and ledger to avoid merge conflicts.
2. Run `node scripts/audit_curricula_uniqueness.js` before each commit.
3. Commit per unit (5 lessons) and push to origin main.


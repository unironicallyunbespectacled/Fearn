# Proposal: Formal Hard-Fail Quality Gate for Latin-Script Languages (80% Tgt% Floor)

## Context & Rationale
Under the current scripts/audit_curricula_uniqueness.js, non-Latin script languages (Japanese, Mandarin, Cantonese, Korean, Hindi, Urdu, Amharic, Arabic, Russian, Ukrainian) are protected by a strict, hard-fail script density gate (scriptDensity < 40%).

However, the 10 Latin-script language Fronds (French, German, Spanish, Romanian, Argentine Spanish, Brazilian Portuguese, Swahili, Turkish, Vietnamese, and English) only calculate and print an informative Tgt% metric without a hard-fail condition (hasFailure = true).

To permanently safeguard content depth and prevent target-language dilution across Latin-script languages, we propose adding an explicit hard-fail check at **80% Target Ratio (Tgt%)**.

---

## Proposed Hard-Fail Implementation in scripts/audit_curricula_uniqueness.js

// 1b. Target-Language Content Ratio Gate for Latin-Script Languages (< 80% Tgt is a hard failure)
if (!SCRIPT_RANGES[subjKey] && totalWords > 0) {
  const engRatio = Math.round((englishFuncWords / totalWords) * 100);
  const tgtRatio = 100 - engRatio;
  if (tgtRatio < 80) {
    console.error(>>> [HARD FAIL] : Target language density is only % (Min threshold: 80%));
    isFailed = true;
    hasFailure = true;
  }
}

---

## Current Live Baseline Across All 10 Latin-Script Languages
Live audit results confirm that all 10 Latin-script languages comfortably clear the proposed 80% floor:

| Subject | Current Tgt% | Proposed Floor | Margin Above Floor | Status |
|---|:---:|:---:|:---:|:---:|
| french | **96%** | 80% | +16% | PASS |
| swahili | **96%** | 80% | +16% | PASS |
| vietnamese | **94%** | 80% | +14% | PASS |
| german | **92%** | 80% | +12% | PASS |
| spanish | **92%** | 80% | +12% | PASS |
| romanian | **92%** | 80% | +12% | PASS |
| argentine-spanish | **92%** | 80% | +12% | PASS |
| brazilian-portuguese | **92%** | 80% | +12% | PASS |
| turkish | **92%** | 80% | +12% | PASS |
| english | **87%** | 80% | +7% | PASS |

---

## Next Steps
Upon human sign-off of this proposal, the check will be committed to scripts/audit_curricula_uniqueness.js as an isolated, labeled commit.
#!/bin/sh
# FEARN Automated Pre-Commit Uniqueness, Structural Integrity & CSS Coverage Gate

echo "Running FEARN Universal Adversarial Quality Gate..."
node scripts/audit_curricula_uniqueness.js
RESULT=$?
if [ $RESULT -ne 0 ]; then
  echo "Commit rejected: Curricula quality gate failed!"
  exit 1
fi

echo "Running FEARN CSS Coverage Audit..."
node scripts/audit_css_coverage.js
RESULT_CSS=$?
if [ $RESULT_CSS -ne 0 ]; then
  echo "Commit rejected: CSS coverage gate failed!"
  exit 1
fi

exit 0

#!/bin/sh
# FEARN Automated Pre-Commit Uniqueness, Structural Integrity & CSS Coverage Gate

# Find any staged curriculum files
STAGED_SUBJECTS=$(git diff --cached --name-only | grep -E '^data/curricula/[^/]+\.js$' | grep -v '\.ledger\.js$' | sed -E 's|data/curricula/([^.]+)\.js|\1|')

if [ -n "$STAGED_SUBJECTS" ]; then
  echo "Running FEARN Universal Adversarial Quality Gate on staged curricula ($STAGED_SUBJECTS)..."
  node scripts/audit_curricula_uniqueness.js $STAGED_SUBJECTS
  RESULT=$?
  if [ $RESULT -ne 0 ]; then
    echo "Commit rejected: Curricula quality gate failed on staged changes!"
    exit 1
  fi
else
  echo "Running repository-wide audit..."
  node scripts/audit_curricula_uniqueness.js
  RESULT=$?
  if [ $RESULT -ne 0 ]; then
    echo "Notice: Repo-wide quality gate flagged broken curricula awaiting rebuild."
  fi
fi

echo "Running FEARN CSS Coverage Audit..."
node scripts/audit_css_coverage.js
RESULT_CSS=$?
if [ $RESULT_CSS -ne 0 ]; then
  echo "Commit rejected: CSS coverage gate failed!"
  exit 1
fi

exit 0

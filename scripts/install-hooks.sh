#!/bin/sh
# Installs tracked pre-commit hook into .git/hooks/
mkdir -p .git/hooks
cp scripts/pre-commit-hook.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
echo "[✓] FEARN pre-commit hook successfully installed to .git/hooks/pre-commit"

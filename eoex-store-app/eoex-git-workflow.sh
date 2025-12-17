#!/bin/bash
# eoex-git-workflow.sh
# Workflow: Save, stash, stage, commit, push, and create a restoration point for rollback

set -e

BRANCH=$(git rev-parse --abbrev-ref HEAD)
DATE=$(date +"%Y-%m-%d_%H-%M-%S")
RESTORE_POINT="restore-point-$BRANCH-$DATE"

# Save all changes
printf "\n[EOEX] Saving all changes...\n"
git add -A

git status

# Stash uncommitted changes (if any)
if ! git diff --cached --quiet || ! git diff --quiet; then
  printf "[EOEX] Stashing uncommitted changes...\n"
  git stash push -m "EOEX auto-stash $DATE"
fi

# Stage all changes
printf "[EOEX] Staging all files...\n"
git add -A

git status

# Commit
read -p "Enter commit message: " COMMIT_MSG
if [ -z "$COMMIT_MSG" ]; then
  COMMIT_MSG="EOEX auto-commit $DATE"
fi
printf "[EOEX] Committing...\n"
git commit -m "$COMMIT_MSG" || echo "[EOEX] Nothing to commit."

# Create a restoration point (tag)
git tag $RESTORE_POINT
printf "[EOEX] Created restore point: $RESTORE_POINT\n"

# Push branch and tags
printf "[EOEX] Pushing branch and tags...\n"
git push origin $BRANCH
git push origin --tags

printf "[EOEX] Workflow complete.\n"

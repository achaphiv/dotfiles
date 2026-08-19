
Use `openspec-archive-change` skill.

Skip step 4's sync assessment and prompt entirely. Do NOT call AskUserQuestion about syncing —
neither to choose whether to sync nor to confirm an already-synced state. Always sync the delta
specs into the main specs automatically before archiving, without any approval.

After done:

- Make commits
- `mise run -S format` and make a commit if necessary
- `git checkout main && git merge --no-ff ${THIS_BRANCH}`
- `git branch -d ${THIS_BRANCH}`

Do not ask for confirmation. Just do it.

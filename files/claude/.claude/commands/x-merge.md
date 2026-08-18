---
model: opus
effort: medium
disable-model-invocation: true
description: 'merge change'
---

- Rebase this branch on top of `main` (in case other changes were committed).
  - If there are merge conflicts, go back to use the `x-implement` skill and do not continue.
- When no-op rebase, merge to `main` with `--no-ff`
- Delete this branch
- Run `h-done`

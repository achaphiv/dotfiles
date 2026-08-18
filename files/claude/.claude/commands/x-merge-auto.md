---
model: opus
effort: medium
disable-model-invocation: true
description: 'merge change auto'
---

Once done implementing:

- Rebase this branch on top of `main` (in case other changes were committed).
  - If there are merge conflicts, go back to use the `x-implement` skill and try the rebase again.
- When no-op rebase, merge to `main` with `--no-ff`
- Delete this branch
- Run `h-done`

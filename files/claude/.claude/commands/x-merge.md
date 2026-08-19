---
model: opus
effort: medium
disable-model-invocation: true
description: merge
---

Rebase onto `main`. If it conflicts, use `x-implement` and stop.

If the rebase is a no-op, merge into `main` with `--no-ff`, delete this branch, and run `h-done`.

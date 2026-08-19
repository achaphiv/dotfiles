---
model: opus
effort: medium
disable-model-invocation: true
description: auto-merge
---

After implementing, rebase onto `main`; if it conflicts, use `x-implement` and retry. When no-op, merge into `main` with `--no-ff`, delete this branch, and run `h-done`.

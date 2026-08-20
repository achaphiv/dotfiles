---
model: opus
effort: high
description: 'implement change'
---

`!! git rebase main`

Implement the request and commit.

In a `/loop`:

- Use `x-review` skill.
- Apply relevant feedback; if you make changes, return to `x-review`.
- Rebase onto `main`. On conflicts, redo the branch and return to `x-review`; prefer amending/rewriting history. Exit when the rebase is a no-op.

Then run `notify-done-sound`.

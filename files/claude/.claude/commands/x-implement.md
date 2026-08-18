---
model: opus
effort: high
description: 'implement change'
---

Implement what has been requested. Make commits.

Do the following in a /loop:

- Use `x-review` skill.
- Integrate applicable feedback where appropiate. If changes were made, go back to `x-review`. Otherwise continue.
- Rebase this branch on top of `main` (in case other changes were committed).
  - If there are merge conflicts, then redo the branch, and go back to `x-review`.
  - When the rebase is a no-op, then end the loop.

Upon exiting the loop, run bash command `notify-done-sound`.

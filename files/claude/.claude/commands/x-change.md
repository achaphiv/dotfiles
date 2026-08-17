---
model: opus
effort: high
disable-model-invocation: true
description: 'feat'
---

Run this:

```bash
git rebase main
herdr workspace rename $HERDR_WORKSPACE_ID <CHANGE_NAME>
```

Create a branch `<CHANGE_TYPE>/<CHANGE_NAME>`.

Where type is: feat, fix, refactor, etc.

Then implement what has been requested. Make commits.

Once done, do the following in a loop:

Use `x-review` skill.

Once reviews are completed

- rebase this branch on top of `main` (in case other changes were committed)
- merge it to `main` with `--no-ff`
- delete this branch

If there are merge conflicts, then redo the branch, and continue the loop.

---
model: opus
effort: high
disable-model-invocation: true
description: 'start change'
---

Come up with a branch name `<TYPE>/<CHANGE_NAME>` to describe this change.

Where type is: feat, fix, refactor, etc.

Run:

```bash
git rebase main
git checkout -b <BRANCH_NAME>
herdr workspace rename $HERDR_WORKSPACE_ID <CHANGE_NAME>
```

Then use `x-implement` skill.

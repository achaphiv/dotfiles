---
model: opus
effort: high
disable-model-invocation: true
description: start change
---

`!! git rebase main`

Choose `<TYPE>/<CHANGE_NAME>` (`feat`, `fix`, `refactor`, etc.) and run:

git checkout -b <TYPE>/<CHANGE_NAME>
herdr workspace rename $HERDR_WORKSPACE_ID <CHANGE_NAME>

Use `x-implement` skill.

Reduce token usages of comments/docs.

The underlying intent/idea should be kept. Just express that same information in a less verbose way.
If it's an obvious comment that could be gleaned by the context, then remove it.

Use 2 adversarial subagents to review the changes.

Make commits.

Check `git ls-files '**.java'`

No need for `mise run test` for doc only changes.

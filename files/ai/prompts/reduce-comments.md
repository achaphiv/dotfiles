Reduce token usages of comments/docs.

The underlying intent/idea should be kept. Just express that same information in a less verbose way.
If it's an obvious comment that could be gleaned by the context, then remove it.

Use 2 adversarial subagents to review the changes.

Make commits.

Check committed files only. E.G. `git ls-files '**.java'`

No need to run tests for doc only changes.

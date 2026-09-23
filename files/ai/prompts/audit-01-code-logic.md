Audit `git ls-files '**/src/**' -x '**/test/**'` to find code logic/security issues.

Split up the work and use background/non-blocking subagents to do the actual search.

E.G. concurrency issues, unvalidated user input, etc.

Write findings to a `FINDINGS-{yyyy-mm-dd}.md`.

Use 2 background/non-blocking adversarial subagents to review the findings.

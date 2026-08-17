---
model: opus
effort: low
description: 'adversarial review'
---

Do the following in a /loop:

Compose four distinct prompts from the current session context, then run them concurrently.
Mention that each review should be read-only.

```bash
h-review-4 'prompt 1' 'prompt 2' 'prompt 3' 'prompt 4'
```

Integrate applicable feedback where appropiate.

Continue to loop while there are still actionable changes performed.

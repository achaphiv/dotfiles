const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

test.skip("check failure hands off directly to the review in the same agent", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "h-change-test-"));
  const bin = path.join(root, "bin");
  const promptPath = path.join(root, "prompt");
  fs.mkdirSync(bin);

  const stub = (name, body) => fs.writeFileSync(path.join(bin, name), body, { mode: 0o755 });
  stub("git", "#!/bin/sh\nexit 0\n");
  stub("mise", "#!/bin/sh\nexit 1\n");
  stub("herdr", `#!/usr/bin/env node
const fs = require("node:fs");
const args = process.argv.slice(2);
let result = {};
if (args[0] === "tab") result = { result: { tabs: [{ tab_id: "main", label: "main" }] } };
if (args[0] === "pane" && args[1] === "list") result = { result: { panes: [{ pane_id: "source", tab_id: "main" }] } };
if (args[0] === "pane" && args[1] === "split") result = { result: { pane: { pane_id: "review" } } };
if (args[0] === "pane" && args[1] === "run") fs.writeFileSync(process.env.PROMPT_PATH, args[3]);
process.stdout.write(JSON.stringify(result));
`);

  try {
    const result = spawnSync(process.execPath, [
      path.join(__dirname, "../files/herdr/.local/bin/h-change"), "review", "start",
    ], {
      cwd: root,
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${bin}:${process.env.PATH}`,
        HERDR_WORKSPACE_ID: "workspace",
        HERDR_PANE_ID: "source",
        PROMPT_PATH: promptPath,
      },
    });
    assert.equal(result.status, 0, result.stderr);
    const command = fs.readFileSync(promptPath, "utf8");
    assert.match(command, /Fix `mise run check`/);
    assert.match(command, /Do a single review \+ fix pass\./);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

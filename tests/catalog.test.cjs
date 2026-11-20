const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const manifest = fs.readFileSync(path.join(root, ".gitmodules"), "utf8");
const slugs = [...manifest.matchAll(/^\s*path = ([-\w]+)$/gm)].map(([, slug]) => slug);
const rows = [...html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(([, row]) => row);

test("the header explains how to open the browser ports and find the Java originals", () => {
  const header = html.match(/<header>([\s\S]*?)<\/header>/)?.[1];
  assert.match(header ?? "", /Choose an application below to run its Python browser port/);
  assert.match(header ?? "", /Java project page for the original source and desktop build instructions/);
  assert.deepEqual([...html.matchAll(/<th>([^<]+)<\/th>/g)].map(([, label]) => label),
    ["Application", "Description", "Java project"]);
});

test("every submodule has exactly one catalog row and stable anchor", () => {
  const ids = [...html.matchAll(/<a id="([-\w]+)"><\/a>/g)].map(([, id]) => id);
  assert.deepEqual(ids.sort(), [...slugs].sort());
});

for (const slug of slugs) {
  test(`the ${slug} row opens the browser port first and retains its Java project and source ZIP`, () => {
    const row = rows.find((candidate) => candidate.includes(`id="${slug}"`));
    assert.ok(row, slug);
    const cells = [...row.matchAll(/<td>([\s\S]*?)<\/td>/g)].map(([, cell]) => cell);
    assert.equal(cells.length, 3);
    const firstLink = cells[0].match(/<a href="([^"]+)">([^<]+)<\/a>/);
    assert.equal(firstLink?.[1], `https://pubino.github.io/${slug}/`);
    assert.ok(firstLink?.[2].trim());
    assert.ok(cells[2].includes(`href="https://github.com/pubino/${slug}">Project page</a>`));
    assert.ok(cells[2].includes(`href="https://github.com/pubino/${slug}/archive/refs/heads/main.zip">Source ZIP</a>`));
  });
}

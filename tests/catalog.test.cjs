const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const manifest = fs.readFileSync(path.join(root, ".gitmodules"), "utf8");
const slugs = [...manifest.matchAll(/^\s*path = ([-\w]+)$/gm)].map(([, slug]) => slug);
const rows = [...html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(([, row]) => row);

test("every submodule has a catalog row with source and download links", () => {
  const ids = [...html.matchAll(/<a id="([-\w]+)"><\/a>/g)].map(([, id]) => id);
  assert.deepEqual(ids.sort(), slugs.sort());
  for (const slug of slugs) {
    const row = rows.find((candidate) => candidate.includes(`id="${slug}"`));
    assert.ok(row?.includes(`href="https://github.com/pubino/${slug}"`), slug);
    assert.ok(row.includes(`href="https://github.com/pubino/${slug}/archive/refs/heads/main.zip"`), slug);
  }
});

for (const slug of ["affine-sim", "belbruno-sim", "cluster-sim", "dustatl2-sim", "dustdisk-sim", "galaxy-3d-sim", "galaxy-sim", "gauss-sim", "gravity-sim", "heat-sim", "integra-sim", "julia-sim", "l4l5-sim", "maze-sim", "median-sim", "newsboy-sim", "pd-sim", "saturn-sim", "shortpaths-sim", "starsystem-sim", "twophase-sim"]) {
  test(`the ${slug} row launches its browser simulator`, () => {
    const row = rows.find((candidate) => candidate.includes(`id="${slug}"`));
    assert.ok(row?.includes(`<a href="https://pubino.github.io/${slug}/">Run in browser</a>`));
  });
}

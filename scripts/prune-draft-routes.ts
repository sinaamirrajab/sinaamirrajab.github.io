import fs from "node:fs";
import path from "node:path";
import { getContentGraph, getRouteForDocument } from "@/lib/content/loader";

const outDir = path.resolve(process.cwd(), "out");
const drafts = getContentGraph({ includeDrafts: true }).all.filter(
  (document) => document.draft,
);

if (!fs.existsSync(outDir)) {
  throw new Error("Cannot prune draft routes: out/ does not exist.");
}

let pruned = 0;

for (const draft of drafts) {
  if (draft.kind === "publication" || draft.kind === "page") {
    continue;
  }

  const route = getRouteForDocument(draft).split("#")[0];
  const target = path.resolve(outDir, route.replace(/^\//, ""));

  if (!target.startsWith(outDir)) {
    throw new Error(`Refusing to prune path outside out/: ${target}`);
  }

  if (fs.existsSync(target)) {
    fs.rmSync(target, { force: true, recursive: true });
    pruned += 1;
  }
}

console.log(`Pruned ${pruned} draft route directories from out/.`);

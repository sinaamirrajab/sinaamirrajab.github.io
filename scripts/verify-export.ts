import fs from "node:fs";
import path from "node:path";
import { getContentGraph, getRouteForDocument } from "@/lib/content/loader";

const outDir = path.join(process.cwd(), "out");

const required = [
  "index.html",
  "404.html",
  "sitemap.xml",
  "robots.txt",
  "search-data.json",
  "pagefind/pagefind.js",
];

function assertExists(relativePath: string) {
  const target = path.join(outDir, relativePath);
  if (!fs.existsSync(target)) {
    throw new Error(`Missing export artifact: out/${relativePath}`);
  }
}

if (!fs.existsSync(outDir)) {
  throw new Error("Missing export directory: out/");
}

for (const artifact of required) {
  assertExists(artifact);
}

const removedRoutes = ["publications", "ideas", "talks", "tags"];
for (const route of removedRoutes) {
  const target = path.join(outDir, route);
  if (fs.existsSync(target)) {
    throw new Error(`Removed public route leaked into export: out/${route}`);
  }
}

const feedPath = path.join(outDir, "feed.xml");
if (
  !fs.existsSync(feedPath) &&
  !fs.existsSync(path.join(outDir, "feed.xml", "index.html"))
) {
  throw new Error("Missing export artifact: out/feed.xml");
}

const htmlFiles = fs
  .readdirSync(outDir, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".html"));

for (const entry of htmlFiles) {
  const fullPath = path.join(entry.parentPath, entry.name);
  const html = fs.readFileSync(fullPath, "utf8");
  if (html.includes("localhost")) {
    throw new Error(`Found localhost reference in ${fullPath}`);
  }
  if (html.includes("TODO:")) {
    throw new Error(`Found TODO marker in exported HTML: ${fullPath}`);
  }
}

const draftRoutes = getContentGraph({ includeDrafts: true })
  .all.filter((document) => document.draft && document.kind !== "publication")
  .map((document) => getRouteForDocument(document).split("#")[0]);

for (const route of draftRoutes) {
  const target = path.join(outDir, route.replace(/^\//, ""));
  if (fs.existsSync(target)) {
    throw new Error(`Draft route leaked into export: out/${route}`);
  }
}

console.log("Static export verification passed.");

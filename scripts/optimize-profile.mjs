/*
 * Generates a web-sized WebP portrait from the source PNG.
 *
 * next.config.ts sets `images.unoptimized: true` because the site is a static
 * export, so Next never resizes anything. The portrait is the LCP element on
 * the home page, which makes shipping a 2 MB PNG a real performance problem.
 * This script produces the asset once; the result is committed.
 *
 * lib/assets.ts prefers the WebP and falls back to the PNG, so running this is
 * optional for a working build.
 *
 * Usage: node scripts/optimize-profile.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SOURCE = path.join("public", "images", "profile", "SinaProfile.png");
const OUTPUT = path.join("public", "images", "profile", "SinaProfile.webp");
const EDGE = 640;

if (!fs.existsSync(SOURCE)) {
  console.error(`Source portrait not found at ${SOURCE}`);
  process.exit(1);
}

const before = fs.statSync(SOURCE).size;

await sharp(SOURCE)
  .resize(EDGE, EDGE, { fit: "cover", position: "attention" })
  .webp({ effort: 6, quality: 82 })
  .toFile(OUTPUT);

const after = fs.statSync(OUTPUT).size;
const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

console.log(`${SOURCE} ${kb(before)} -> ${OUTPUT} ${kb(after)}`);

if (after > 200 * 1024) {
  console.warn("Portrait is still above the 200 KB target.");
}

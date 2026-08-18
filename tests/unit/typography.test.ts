import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = process.cwd();
const SCANNED_DIRS = ["app", "components", "lib", "content"];
const SCANNED_EXTENSIONS = new Set([".ts", ".tsx", ".md", ".mdx", ".css"]);

function collectFiles(dir: string): string[] {
  const absolute = path.join(ROOT, dir);
  if (!fs.existsSync(absolute)) {
    return [];
  }

  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return collectFiles(relative);
    }

    return SCANNED_EXTENSIONS.has(path.extname(entry.name)) ? [relative] : [];
  });
}

describe("typographic dashes", () => {
  /*
   * Em and en dashes are banned in visible copy for this site. Enforcing it as
   * a test rather than a habit means it cannot quietly creep back in through a
   * later content edit.
   */
  it("uses no em dash or en dash anywhere in source or content", () => {
    const offenders = SCANNED_DIRS.flatMap(collectFiles)
      .map((relative) => ({
        relative,
        lines: fs
          .readFileSync(path.join(ROOT, relative), "utf8")
          .split(/\r?\n/)
          .map((line, index) => ({ line, number: index + 1 }))
          .filter(({ line }) => /[–—]/.test(line)),
      }))
      .filter(({ lines }) => lines.length > 0)
      .flatMap(({ relative, lines }) =>
        lines.map(({ line, number }) => `${relative}:${number} ${line.trim()}`),
      );

    expect(offenders).toEqual([]);
  });
});

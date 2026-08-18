import fs from "node:fs";
import path from "node:path";
import { close, createIndex } from "pagefind";
import { getEntries } from "@/lib/content/loader";
import { getSearchRecords } from "@/lib/search/records";

const outDir = path.join(process.cwd(), "out");
const records = getSearchRecords();

if (!fs.existsSync(outDir)) {
  throw new Error("Cannot index search: out/ does not exist.");
}

fs.writeFileSync(
  path.join(outDir, "search-data.json"),
  `${JSON.stringify(records, null, 2)}\n`,
  "utf8",
);

const response = await createIndex({
  excludeSelectors: ["[data-pagefind-ignore]"],
  forceLanguage: "en",
  rootSelector: "[data-pagefind-body]",
});

if (!response.index) {
  throw new Error(`Pagefind index failed: ${response.errors.join(", ")}`);
}

const directoryResult = await response.index.addDirectory({
  path: outDir,
  glob: "**/*.html",
});

if (directoryResult.errors.length > 0) {
  throw new Error(
    `Pagefind HTML indexing failed: ${directoryResult.errors.join(", ")}`,
  );
}

for (const publication of getEntries("publication")) {
  const record = records.find(
    (candidate) =>
      candidate.type === "publication" && candidate.title === publication.title,
  );

  if (!record) {
    continue;
  }

  const result = await response.index.addCustomRecord({
    content: record.content,
    filters: {
      tag: record.tags,
      type: [record.type],
    },
    language: "en",
    meta: {
      title: record.title,
    },
    sort: record.date ? { date: record.date } : undefined,
    url: record.url,
  });

  if (result.errors.length > 0) {
    throw new Error(
      `Pagefind publication indexing failed: ${result.errors.join(", ")}`,
    );
  }
}

const writeResult = await response.index.writeFiles({
  outputPath: path.join(outDir, "pagefind"),
});

if (writeResult.errors.length > 0) {
  throw new Error(`Pagefind write failed: ${writeResult.errors.join(", ")}`);
}

await close();
console.log(
  `Indexed ${directoryResult.page_count} HTML pages and ${records.length} search records.`,
);

import { getEntries } from "@/lib/content/loader";
import type { NoteDocument, WritingDocument } from "@/lib/content/types";

export type WritingArchiveItem = {
  document: WritingDocument | NoteDocument;
  href: string;
  label: "Essay" | "Note";
};

export function getWritingArchiveEntries(options?: {
  includeDrafts?: boolean;
  limit?: number;
}): WritingArchiveItem[] {
  const items: WritingArchiveItem[] = [
    ...getEntries("writing", { includeDrafts: options?.includeDrafts }).map(
      (document) => ({
        document,
        href: `/writing/${document.slug}`,
        label: "Essay" as const,
      }),
    ),
    ...getEntries("note", { includeDrafts: options?.includeDrafts }).map(
      (document) => ({
        document,
        href: `/notes/${document.slug}`,
        label: "Note" as const,
      }),
    ),
  ].sort(
    (a, b) =>
      b.document.publishedAt.localeCompare(a.document.publishedAt) ||
      a.document.title.localeCompare(b.document.title),
  );

  return options?.limit ? items.slice(0, options.limit) : items;
}

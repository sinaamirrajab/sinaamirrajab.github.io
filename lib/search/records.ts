import { getContentGraph, getRouteForDocument } from "@/lib/content/loader";
import type { ContentDocument, ContentKind } from "@/lib/content/types";

export type SearchRecord = {
  content: string;
  date?: string;
  excerpt: string;
  tags: string[];
  title: string;
  type: ContentKind;
  url: string;
};

function getExcerpt(document: ContentDocument) {
  if ("description" in document && document.description) {
    return document.description;
  }

  if ("summary" in document) {
    return document.summary;
  }

  if ("significance" in document && document.significance) {
    return document.significance;
  }

  return document.body.replace(/\s+/g, " ").slice(0, 180);
}

function getDate(document: ContentDocument) {
  if ("publishedAt" in document) {
    return document.publishedAt;
  }

  if ("date" in document) {
    return document.date;
  }

  if ("year" in document) {
    return String(document.year);
  }

  return undefined;
}

export function getSearchRecords() {
  return getContentGraph()
    .public.filter((document) => {
      if (
        document.kind === "project" ||
        document.kind === "writing" ||
        document.kind === "note"
      ) {
        return true;
      }

      return (
        document.kind === "page" &&
        ["about", "research"].includes(document.slug)
      );
    })
    .map((document) => ({
      content: `${document.title}\n${getExcerpt(document)}\n${document.body}`,
      date: getDate(document),
      excerpt: getExcerpt(document),
      tags: document.tags,
      title: document.title,
      type: document.kind,
      url: getRouteForDocument(document),
    })) satisfies SearchRecord[];
}

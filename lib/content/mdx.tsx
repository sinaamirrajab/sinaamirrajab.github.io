import type { ComponentType } from "react";
import {
  getAuthoredFileExtension,
  getCollectionForKind,
} from "@/lib/content/loader";
import type { ContentKind } from "@/lib/content/types";

type MdxModule = {
  default: ComponentType<Record<string, unknown>>;
};

export async function importMdx(kind: ContentKind, slug: string) {
  const collection = getCollectionForKind(kind);
  const extension = getAuthoredFileExtension(collection, slug) ?? "mdx";

  switch (kind) {
    case "project":
      return (await import(
        `../../content/projects/${slug}.${extension}`
      )) as MdxModule;
    case "writing":
      return (await import(
        `../../content/writing/${slug}.${extension}`
      )) as MdxModule;
    case "note":
      return (await import(
        `../../content/notes/${slug}.${extension}`
      )) as MdxModule;
    case "idea":
      return (await import(
        `../../content/ideas/${slug}.${extension}`
      )) as MdxModule;
    case "talk":
      return (await import(
        `../../content/talks/${slug}.${extension}`
      )) as MdxModule;
    case "page":
      return (await import(
        `../../content/pages/${slug}.${extension}`
      )) as MdxModule;
    case "publication":
      throw new Error("Publications are rendered from structured metadata.");
  }
}

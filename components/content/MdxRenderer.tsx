import { importMdx } from "@/lib/content/mdx";
import type { ContentKind } from "@/lib/content/types";

export async function MdxRenderer({
  kind,
  slug,
}: {
  kind: Exclude<ContentKind, "publication">;
  slug: string;
}) {
  const { default: Content } = await importMdx(kind, slug);
  return <Content />;
}

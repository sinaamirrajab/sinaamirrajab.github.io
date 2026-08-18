import Link from "next/link";
import { getRelatedContent, getRouteForDocument } from "@/lib/content/loader";
import type { ContentDocument } from "@/lib/content/types";

export function RelatedContent({ document }: { document: ContentDocument }) {
  const related = getRelatedContent(document);

  if (related.length === 0) {
    return null;
  }

  return (
    <aside className="border-border mt-6 border-t pt-5">
      <h2 className="text-text font-serif text-3xl">Related</h2>
      <ul className="mt-4 grid gap-3">
        {related.map((item) => (
          <li key={`${item.kind}-${item.slug}`}>
            <Link
              className="text-accent-strong hover:underline"
              href={getRouteForDocument(item)}
            >
              {item.title}
            </Link>
            <span className="text-text-muted ml-2 font-mono text-xs uppercase">
              {item.kind}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

import type { Heading } from "@/lib/content/types";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const items = headings.filter(
    (heading) => heading.depth === 2 || heading.depth === 3,
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Table of contents"
      className="border-border border-l pl-4 text-sm"
    >
      <p className="text-text-muted font-mono text-xs uppercase">Contents</p>
      <ol className="mt-3 space-y-2">
        {items.map((heading) => (
          <li
            className={heading.depth === 3 ? "pl-4" : undefined}
            key={heading.id}
          >
            <a
              className="text-text-muted hover:text-accent-strong"
              href={`#${heading.id}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

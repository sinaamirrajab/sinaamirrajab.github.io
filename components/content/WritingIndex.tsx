import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { WritingArchiveItem } from "@/lib/content/writing-archive";
import { formatDate } from "@/lib/utils/dates";

export function WritingIndex({
  emptyMessage = "No reviewed writing or notes are published yet.",
  items,
}: {
  emptyMessage?: string;
  items: WritingArchiveItem[];
}) {
  if (items.length === 0) {
    return <p className="text-text-muted max-w-2xl">{emptyMessage}</p>;
  }

  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <article
          className="border-border bg-surface hover:border-accent border p-5 transition-colors"
          key={`${item.document.kind}-${item.document.slug}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge>{item.label}</StatusBadge>
            <time
              className="text-text-muted font-mono text-xs"
              dateTime={item.document.publishedAt}
            >
              {formatDate(item.document.publishedAt)}
            </time>
            {item.document.readingTime ? (
              <span className="text-text-muted text-xs">
                {item.document.readingTime}
              </span>
            ) : null}
          </div>
          <h2 className="text-text mt-3 font-serif text-3xl leading-tight">
            <Link href={item.href}>{item.document.title}</Link>
          </h2>
          <p className="text-text-muted mt-3">{item.document.description}</p>
        </article>
      ))}
    </div>
  );
}

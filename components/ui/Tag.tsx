import { tagMap } from "@/lib/content/tags";
import { cn } from "@/lib/utils/cn";

export function Tag({ slug, className }: { slug: string; className?: string }) {
  const label = tagMap.get(slug)?.label ?? slug;
  const classNames = cn(
    "inline-flex items-center rounded-[var(--radius-sm)] border border-border px-2 py-1 font-mono text-xs text-text-muted",
    className,
  );

  return <span className={classNames}>{label}</span>;
}

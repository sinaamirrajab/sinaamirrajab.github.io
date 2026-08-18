import { cn } from "@/lib/utils/cn";

export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: string;
  tone?: "neutral" | "success" | "warning";
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-[var(--radius-sm)] border px-2 py-1 font-mono text-xs capitalize",
        tone === "success" && "border-[var(--success)] text-[var(--success)]",
        tone === "warning" && "border-[var(--warning)] text-[var(--warning)]",
        tone === "neutral" && "border-border text-text-muted",
      )}
    >
      {children}
    </span>
  );
}

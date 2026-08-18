import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--max-content)] px-5 sm:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

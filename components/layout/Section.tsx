import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section className={cn("py-10 sm:py-14", className)} id={id}>
      {children}
    </section>
  );
}

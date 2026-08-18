import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "primary-action border-accent bg-accent hover:bg-accent-strong",
  secondary:
    "border-border bg-surface text-text hover:border-accent hover:text-accent-strong",
  ghost: "border-transparent text-text hover:bg-surface",
};

export function Button({
  children,
  className,
  href,
  variant = "secondary",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
}) {
  const classNames = cn(
    // active:scale is tactile feedback for the press, nothing more.
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-sm)] border px-4 py-2 text-sm font-semibold transition-[color,background-color,border-color,transform] duration-200 active:scale-[0.98]",
    variants[variant],
    className,
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    // External links (papers, code, demos, social) open in a new tab so
    // following one never navigates the reader away from the site.
    const isExternal = href.startsWith("http");
    return (
      <a
        className={classNames}
        href={href}
        rel={isExternal ? "noopener noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classNames} href={href} {...props}>
      {children}
    </Link>
  );
}

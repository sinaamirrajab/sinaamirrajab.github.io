"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CommandSearch } from "@/components/navigation/CommandSearch";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils/cn";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/research" && pathname.startsWith("/projects")) {
    return true;
  }

  if (href === "/writing" && pathname.startsWith("/notes")) {
    return true;
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="screen-only border-border bg-background/88 sticky top-0 z-40 border-b backdrop-blur"
      data-pagefind-ignore
    >
      <div className="mx-auto flex min-h-14 w-full max-w-[var(--max-content)] items-center justify-between gap-4 px-5 sm:px-8">
        <Link className="text-text font-serif text-xl" href="/">
          {siteConfig.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={cn(
                "text-text-muted hover:bg-surface hover:text-text rounded-[var(--radius-sm)] px-3 py-1.5 text-sm transition-colors",
                isActive(pathname, item.href) && "bg-surface text-text",
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CommandSearch />
          <ThemeToggle />
          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="border-border bg-surface text-text-muted inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] border lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? (
              <X aria-hidden="true" size={18} />
            ) : (
              <Menu aria-hidden="true" size={18} />
            )}
          </button>
        </div>
      </div>
      {isOpen ? (
        <nav
          aria-label="Mobile primary"
          className="border-border bg-background border-t px-5 py-3 lg:hidden"
        >
          <div className="mx-auto grid max-w-[var(--max-content)] gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                aria-current={
                  isActive(pathname, item.href) ? "page" : undefined
                }
                className={cn(
                  "text-text-muted hover:bg-surface hover:text-text rounded-[var(--radius-sm)] px-3 py-3 text-base",
                  isActive(pathname, item.href) && "bg-surface text-text",
                )}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

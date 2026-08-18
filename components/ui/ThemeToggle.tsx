"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="border-border bg-surface text-text-muted hover:border-accent hover:text-accent-strong inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] border transition-colors"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Light theme" : "Dark theme"}
      type="button"
    >
      {isDark ? (
        <Sun aria-hidden="true" size={18} strokeWidth={1.8} />
      ) : (
        <Moon aria-hidden="true" size={18} strokeWidth={1.8} />
      )}
    </button>
  );
}

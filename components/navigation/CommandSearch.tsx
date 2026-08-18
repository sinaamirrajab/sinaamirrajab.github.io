"use client";

import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SearchRecord } from "@/lib/search/records";
import { siteConfig, withBasePath } from "@/lib/site";
import { cn } from "@/lib/utils/cn";

type PagefindResultData = {
  excerpt: string;
  filters: Record<string, string[]>;
  meta: Record<string, string>;
  url: string;
};

type PagefindResult = {
  data: () => Promise<PagefindResultData>;
};

type PagefindModule = {
  search: (query: string) => Promise<{ results: PagefindResult[] }>;
};

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}

function localSearch(records: SearchRecord[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return [];
  }

  return records
    .filter((record) =>
      [record.title, record.excerpt, record.content, ...record.tags]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    )
    .slice(0, 8);
}

async function loadPagefind() {
  const url = withBasePath("/pagefind/pagefind.js");
  return (await import(/* webpackIgnore: true */ url)) as PagefindModule;
}

export function CommandSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [records, setRecords] = useState<SearchRecord[]>([]);
  const [pagefind, setPagefind] = useState<PagefindModule | null>(null);
  const [pagefindResults, setPagefindResults] = useState<SearchRecord[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (isEditableTarget(event.target)) {
        return;
      }

      if (
        event.key === "/" ||
        ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k")
      ) {
        event.preventDefault();
        setIsOpen(true);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    inputRef.current?.focus();
    void fetch(withBasePath("/search-data.json"))
      .then((response) => (response.ok ? response.json() : []))
      .then((data: SearchRecord[]) => setRecords(data))
      .catch(() => setRecords([]));

    void loadPagefind()
      .then((module) => setPagefind(module))
      .catch(() => setPagefind(null));
  }, [isOpen]);

  useEffect(() => {
    let cancelled = false;

    if (!pagefind || query.trim().length < 2) {
      return;
    }

    void pagefind.search(query).then(async (resultSet) => {
      const data = await Promise.all(
        resultSet.results.slice(0, 8).map((result) => result.data()),
      );

      if (cancelled) {
        return;
      }

      setPagefindResults(
        data.map((result) => ({
          content: result.excerpt,
          excerpt: result.excerpt.replace(/<[^>]*>/g, ""),
          tags: result.filters.tag ?? [],
          title: result.meta.title ?? "Search result",
          type: (result.filters.type?.[0] as SearchRecord["type"]) ?? "page",
          url: result.url,
        })),
      );
    });

    return () => {
      cancelled = true;
    };
  }, [pagefind, query]);

  const localResults = useMemo(
    () => localSearch(records, query),
    [records, query],
  );
  const remoteResults = query.trim().length >= 2 ? pagefindResults : [];
  const results = remoteResults.length > 0 ? remoteResults : localResults;

  function close() {
    setIsOpen(false);
    setQuery("");
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        aria-label="Search"
        className="border-border bg-surface text-text-muted hover:border-accent hover:text-accent-strong inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] border transition-colors"
        onClick={() => setIsOpen(true)}
        ref={triggerRef}
        title="Search"
        type="button"
      >
        <Search aria-hidden="true" size={18} strokeWidth={1.8} />
      </button>
      {isOpen ? (
        <div
          aria-labelledby="command-search-title"
          aria-modal="true"
          className="bg-background/80 fixed inset-0 z-50 px-4 py-6 backdrop-blur"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              close();
            }
          }}
          role="dialog"
        >
          <div className="border-border bg-surface-elevated mx-auto max-w-2xl border p-4 shadow-[var(--shadow-soft)]">
            <div className="border-border flex items-center gap-3 border-b pb-3">
              <Search aria-hidden="true" size={18} />
              <label className="sr-only" htmlFor="command-search-input">
                Search {siteConfig.name}
              </label>
              <input
                className="text-text placeholder:text-text-muted min-h-11 flex-1 bg-transparent text-base outline-none"
                id="command-search-input"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                ref={inputRef}
                value={query}
              />
              <button
                aria-label="Close search"
                className="text-text-muted hover:bg-surface inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)]"
                onClick={close}
                type="button"
              >
                <X aria-hidden="true" size={18} />
              </button>
            </div>
            <h2 className="sr-only" id="command-search-title">
              Search
            </h2>
            <div className="mt-4 max-h-[60vh] overflow-y-auto">
              {query.trim().length === 0 ? (
                <p className="text-text-muted text-sm">
                  Start typing to search published pages.
                </p>
              ) : results.length > 0 ? (
                <ul className="space-y-2">
                  {results.map((result) => (
                    <li key={`${result.type}-${result.url}-${result.title}`}>
                      <a
                        className={cn(
                          "border-border bg-surface hover:border-accent block border p-3 transition-colors",
                        )}
                        href={withBasePath(result.url)}
                        onClick={close}
                      >
                        <span className="text-accent font-mono text-xs capitalize">
                          {result.type}
                        </span>
                        <span className="text-text mt-1 block font-semibold">
                          {result.title}
                        </span>
                        <span className="text-text-muted mt-1 block text-sm">
                          {result.excerpt}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-text-muted text-sm">
                  No published results found.
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

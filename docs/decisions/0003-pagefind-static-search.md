# 0003 - Pagefind Static Search

## Context

Search must work without a backend and must not load the full search index on the initial page load.

## Decision

The build runs Pagefind after `next build`, indexing the exported HTML and writing chunks to `out/pagefind`. A small typed JSON record file is also emitted for no-JavaScript browsing and development fallback. The simplified public search surface indexes home, research/about pages, project detail pages, writing, and notes. Hidden modules such as Publications, Ideas, Talks, Tags, and quiet alias/print routes are excluded from normal discovery. The command dialog lazy-loads Pagefind only when search opens or receives focus.

## Alternatives Considered

- Client-side JSON-only search: simpler, but would grow into a larger initial payload.
- Hosted search service: rejected for version 1 because it adds runtime and privacy dependencies.

## Consequences

Production search is static and chunked. Ordinary `next dev` does not have a Pagefind index until an export has been built, so tests use the typed adapter and production preview.

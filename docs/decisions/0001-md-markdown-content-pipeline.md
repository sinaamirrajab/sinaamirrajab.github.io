# 0001 - Markdown and MDX Content Pipeline

## Context

The site must be authored locally, remain static-export compatible, and avoid runtime Notion or database dependencies. The user also prefers adding projects, ideas, writing, and notes as Markdown files because it is easier and more flexible.

## Decision

Content is stored under `content/` as `.md` or `.mdx` files with YAML frontmatter. Plain `.md` is the preferred authoring format for ordinary pages; `.mdx` is available when approved richer components are needed. The starter content uses `.md` to model the normal writing workflow. Frontmatter is parsed with `gray-matter`, validated with Zod, and all public routes query the typed content graph instead of scanning files directly.

## Alternatives Considered

- Runtime CMS: rejected for version 1 because GitHub Pages is the primary target.
- JSON-only content: rejected because it is less pleasant for long-form writing.
- MDX-only content: supported, but not required; plain Markdown is easier for most entries.

## Consequences

Authors get a simple portable workflow, while the build can still fail on invalid frontmatter, unknown tags, broken relationships, mismatched slugs, and draft/scheduled publication mistakes. `draft: true` excludes content from the exported site, but it is not a privacy boundary in a public Git repository.

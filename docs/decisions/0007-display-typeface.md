# 0007. Self-hosted display and body typefaces

- Status: Accepted
- Date: 2026-08-11
- Supersedes: [0005](0005-typography-and-theme.md) (typography portion only; the theme decisions in 0005 still stand)

## Context

ADR 0005 deferred web fonts and kept the site on system stacks: Georgia for
display and Inter for body. That was the right call while the content pipeline
was being built, because it removed a build dependency and a network request
from the critical path.

Two problems accumulated:

1. **Georgia was doing all the work.** Every `h1`, `h2` and `h3` across the site
   rendered in the same system serif. It reads as a default rather than a
   choice, and it gave the site no typographic identity of its own.
2. **Rendering was inconsistent across platforms.** Georgia and the Inter
   fallback chain resolve differently on Windows, macOS and Linux, so the
   spacing and hierarchy that looked correct in development did not hold
   elsewhere.

Typography is also the highest-leverage change available for a visual refresh:
it lifts every page at once without touching layout or content.

## Decision

Load two typefaces through `next/font/google` in `app/layout.tsx`:

- **Space Grotesk** (weights 500 and 700) as the display face, exposed as
  `--font-space-grotesk` and consumed via `--font-display`. It is a grotesk
  with enough character to feel deliberate, and its slightly technical drawing
  suits a medical-imaging research site better than a neutral sans or a serif.
- **Geist** (variable) as the body face, exposed as `--font-geist` and consumed
  via `--font-body`. This also removes Inter, which had been carrying the body
  text by default rather than by decision.

The mono stack is unchanged and stays on system fonts. Metadata, captions and
numeric labels are a small enough surface that a third downloaded family is not
justified.

## Consequences

**This does not reintroduce a runtime network request.** `next/font/google`
downloads font files at build time and emits them into the static export under
`/_next/static/media`, served from the same origin as the site. The published
page makes no request to Google. Verified against a real `next build`.

- `display: "swap"` is set on both, so text paints in a fallback immediately and
  there is no invisible-text period.
- The build now requires network access to fetch the font files. CI already has
  it, and the fonts are cached between builds.
- The `@theme inline` mapping in `app/globals.css` was already pointing
  `--font-serif` at `--font-display`, so every existing `font-serif` class
  picked the new face up with no component changes. The class name is now
  slightly misleading, since the face is a grotesk rather than a serif, but
  renaming it would touch every component for no user-visible gain. Left as is.

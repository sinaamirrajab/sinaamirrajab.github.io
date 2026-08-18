# 0005 - Typography and Theme

## Context

The visual direction calls for an editorial research garden: scientific, credible, readable, and not a generic template.

## Decision

The scaffold uses semantic CSS tokens for background, surface, text, borders, accent, focus, and spacing. Headings use a local system serif stack for editorial tone; body and metadata use system sans and monospace stacks to avoid layout shift and external font loading in the foundation phase.

## Alternatives Considered

- External web fonts: deferred until a reviewed typography pass because local stacks are faster and stable.
- One-color monochrome theme: rejected because the site needs enough warmth and hierarchy without becoming decorative.

## Consequences

Light and dark themes share one token vocabulary, and components avoid scattered color values.

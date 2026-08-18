# 0006 — Simplified public information architecture

## Context

The first implementation followed the original editorial research-garden plan with many public tabs: Research, Projects, Publications, Writing, Notes, Ideas, Talks, Tags, About, and CV.

After reviewing the page, Sina asked for a simpler site with less repetition, less scrolling, fewer tags, merged Research/Projects, merged Writing/Notes, and a single About/CV destination.

## Decision

The public navigation is now:

```text
Home · Research & Projects · Writing · About/CV
```

- `/research` is the merged Research & Projects route.
- `/writing` is the merged Writing + Notes route.
- `/about` is the single public About/CV route.
- `/projects/[slug]`, `/writing/[slug]`, and `/notes/[slug]` remain stable detail routes.
- `/projects`, `/notes`, and `/cv` may remain as quiet legacy/utility routes, but they are not primary navigation.
- Publications, Ideas, Talks, and public Tag pages are hidden/future modules.
- Tags remain internal metadata and are not rendered as public chips.

## Alternatives considered

- Keep the full research-garden IA and only visually simplify pages.
- Rename the merged research route to `/work`.
- Move note detail routes under `/writing`.
- Remove all hidden schemas immediately.

## Consequences

The site is easier to scan and closer to a personal research portfolio. Future prompts must not recreate the removed tabs unless Sina explicitly asks. The content models remain available, so Publications, Ideas, Talks, or Tags can be re-enabled later without rebuilding the entire content engine.

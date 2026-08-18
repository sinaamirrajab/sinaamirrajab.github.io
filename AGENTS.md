# AGENTS.md

## Purpose

This file defines the operating rules for Codex and other coding agents working on Sina Amirrajab's personal website.

The agent's job is to implement the requirements in `PROJECT_SPEC.md` faithfully, incrementally, and verifiably.

---

## Required reading order

Before changing code, read:

1. `AGENTS.md`
2. `PROJECT_SPEC.md`
3. `README.md`
4. `docs/IMPLEMENTATION_STATUS.md`
5. `RELEASE_CHECKLIST.md`
6. The relevant prompt in `CODEX_PROMPTS.md`
7. Existing tests and nearby source files

When these documents conflict, use this priority:

1. Explicit instruction in the current user prompt
2. `PROJECT_SPEC.md`
3. `AGENTS.md`
4. `README.md`
5. `docs/IMPLEMENTATION_STATUS.md`
6. Existing implementation

Do not silently reinterpret a requirement. Document material deviations.

---

## Current implementation baseline

As of 2026-08-03, the repository is no longer an empty scaffold. It already includes:

- Next.js App Router with static export.
- npm with `package-lock.json` and Node 24 configuration.
- Strict TypeScript, ESLint, Prettier, Tailwind CSS 4, Vitest, React Testing Library, Playwright, and axe.
- A typed site configuration and structured CV data module.
- A simplified public information architecture: `Home · Research & Projects · Writing · About/CV`.
- Stable project detail routes at `/projects/[slug]` and note detail routes at `/notes/[slug]`.
- A deterministic accessible hero sequence with reduced-motion behavior.
- A local Markdown/MDX content engine with Zod schemas, draft exclusion, tag validation, relationship validation, heading extraction, reading time, and static route generation.
- Static Pagefind search, RSS, sitemap, robots metadata, canonical metadata, structured data, and GitHub Pages workflow.
- Starter public content for three source-supported projects plus research/about/CV pages.
- Draft-only examples for publications, writing, notes, ideas, and talks.

Future Codex prompts must treat this as the baseline. Do not recreate the scaffold, replace the architecture, add a second content system, or redo completed phases unless the prompt explicitly asks for an audit or refactor.

Content authoring should default to plain `.md` files. Use `.mdx` only when an entry genuinely needs approved rich components.

Tags remain internal metadata for validation, relationships, and search ranking. Do not reintroduce visible tag chips, public tag pages, or tag-heavy cards unless Sina explicitly asks for them.

---

## Mission

Build a simplified personal research portfolio for Sina that combines:

- Research profile
- Project case studies
- Long-form writing and short notes in one archive
- Web CV
- Social and scholarly links

The site must communicate scientific credibility, engineering depth, clinical relevance, and personal intellectual identity without unnecessary navigation or tag-heavy UI.

---

## Non-negotiable product requirements

1. The top-level public structure is:

   `Home · Research & Projects · Writing · About/CV`

   Search may remain available as a utility control, but it is not a primary navigation tab.

2. The landing page starts with a live type-and-delete identity sequence.

3. The sequence begins with:

   - `I am Sina.`
   - `I am an Engineer.`

4. It then rotates through the approved role set:

   - Engineer
   - AI Researcher
   - Medical AI Scientist
   - Generative AI Researcher
   - Developer
   - Problem Solver
   - Research Mentor
   - Scientific Communicator
   - Builder of Clinical AI

5. The animation ends on:

   `I build trustworthy AI for medical imaging.`

6. Reduced-motion users see the final static message immediately.

7. The primary deployment target is GitHub Pages using static export.

8. Real content must come from approved source material. Never fabricate CV facts, publications, awards, metrics, or collaborations.

9. Content must be authored locally in Markdown/MDX. Prefer `.md` for ordinary entries and `.mdx` only for richer approved components. Markdown images and the approved `<Video />` component may be used for local reviewed media. Notion is not a runtime dependency for version 1.

10. All core functionality must work without a backend.

---

## Content integrity

### Never invent

Do not create plausible-looking but unsupported:

- Paper titles
- Venues
- DOI values
- Citation counts
- Awards
- Grants
- Institutions
- Dates
- Model performance
- Patient cohorts
- Collaborators
- Clinical impact claims

### Missing information

Use one of these approaches:

- Omit the field
- Add a source-level `TODO`
- Mark content `draft: true`
- Use a visibly labelled placeholder only in development

Do not expose `TODO` placeholders on production pages unless intentionally designed as “coming soon.”

### Medical and scientific language

- Distinguish research systems from clinically deployed products.
- Do not claim clinical validation when only technical validation is known.
- Do not convert association into causality.
- Do not describe preprints as peer-reviewed publications.
- Preserve metric definitions and evaluation context.
- Avoid promotional language such as “revolutionary,” “guaranteed,” or “clinically proven” unless explicitly sourced.

---

## Engineering constraints

### Static-first

- Use Next.js static export.
- Avoid server actions for core features.
- Avoid API routes for core features.
- Avoid runtime databases.
- Generate indexes, search data, sitemap, RSS, and metadata at build time.
- Make URL handling compatible with GitHub Pages.

### TypeScript

- Enable strict mode.
- Avoid `any`.
- Validate external or content-derived data.
- Export explicit public types.
- Keep data transformation functions pure where practical.
- Use discriminated unions for content types and statuses.

### React and Next.js

- Prefer server components for static content.
- Use client components only for interaction.
- Keep client-component boundaries narrow.
- Do not make whole pages client-rendered to support one animation.
- Use framework metadata APIs where static export permits.
- Avoid hydration instability.

### Styling

- Use semantic design tokens.
- Use Tailwind consistently.
- Do not scatter arbitrary hex values.
- Avoid overly large utility strings by extracting repeated patterns.
- Support light and dark themes.
- Preserve strong focus styles.

### Dependencies

Before adding a package:

1. Confirm it solves a real requirement.
2. Verify compatibility with the current framework version.
3. Check whether a small local implementation is clearer.
4. Avoid overlapping packages.
5. Record the reason in the change summary.

Do not add a full component library unless explicitly requested.

---

## Animation rules

### Hero typewriter

Implement the hero as a deterministic state machine, not a collection of loosely coordinated timers.

Suggested states:

```ts
type HeroPhase =
  | "typing-role"
  | "holding-role"
  | "deleting-role"
  | "transitioning-article"
  | "typing-final"
  | "complete";
```

Requirements:

- Clean up every timer.
- Do not update state after unmount.
- Do not announce each typed character to screen readers.
- Prevent layout shift by reserving adequate text space.
- Test the final state.
- Test role order.
- Test reduced-motion behavior.
- Keep animation timings configurable in one module.
- Do not use random timing in production or tests.

### Background motion

- Subordinate it to the typography.
- Pause or simplify it when off-screen.
- Disable it under reduced motion.
- Avoid continuous expensive React re-renders.
- Prefer transforms and opacity.
- Keep pointer interactions optional on touch devices.

### General motion

- Motion must communicate state, hierarchy, or continuity.
- No decorative bounce on every card.
- No scroll-jacking.
- No mandatory parallax.
- No animation that delays navigation or reading.

---

## Accessibility requirements

Every change must preserve:

- Semantic landmarks
- Logical tab order
- Visible focus
- Keyboard operation
- Meaningful labels
- Reduced motion
- Sufficient contrast
- Correct heading hierarchy
- Useful alt text
- Screen-reader-stable animated text

Use automated accessibility tests where practical, but do not treat automated tests as a substitute for manual review.

For animated text, expose a stable accessible sentence and mark rapidly changing visual fragments appropriately.

---

## Content architecture rules

### File locations

Use these content folders. Some models are hidden from the simplified public version but remain available for future reuse:

```text
content/projects
content/publications
content/writing
content/notes
content/ideas
content/talks
content/pages
```

### Slugs

- Use lowercase kebab-case.
- Treat slugs as stable identifiers.
- Do not silently change a published slug.
- Add redirects only when supported by the static hosting design, otherwise preserve old routes.

### Dates

- Use ISO 8601 in frontmatter.
- Display localized human-readable dates.
- Preserve original publication year.
- Use `updatedAt` only when content materially changes.

### Drafts

- Exclude drafts from production indexes, feeds, sitemap, related content, and search.
- It is acceptable to show drafts in local development when explicitly enabled.
- Never assume `draft: true` protects sensitive data in a public repository.

### Relationships

Validate that referenced project, publication, note, idea, talk, and tag slugs exist.

Build must fail with a useful error when content references a nonexistent item.

### Public route policy

- `/research` is the public merged Research & Projects route.
- `/projects/[slug]` remains the stable route for project case studies.
- `/writing` is the public merged Writing + Notes archive.
- `/notes/[slug]` remains the stable route for individual notes.
- `/about` is the single public About/CV destination.
- `/projects`, `/notes`, and `/cv` may exist as quiet legacy/printable routes, but they must not appear as primary navigation.
- Publications, Ideas, Talks, and Tags are hidden/future modules in the simplified version. Do not add them to navigation, sitemap, homepage sections, or public search unless explicitly requested.

---

## Suggested component boundaries

```text
components/
├── animation/
│   ├── IdentityTypewriter.tsx
│   ├── ResearchField.tsx
│   └── motion-config.ts
├── content/
│   ├── ArticleHeader.tsx
│   ├── MDXComponents.tsx
│   ├── TableOfContents.tsx
│   └── RelatedContent.tsx
├── layout/
│   ├── Container.tsx
│   ├── Prose.tsx
│   ├── Section.tsx
│   └── PageHeader.tsx
├── navigation/
│   ├── SiteHeader.tsx
│   ├── MobileNavigation.tsx
│   ├── Footer.tsx
│   └── CommandSearch.tsx
├── project/
│   ├── ProjectCard.tsx
│   ├── ProjectFilters.tsx
│   └── ProjectLinks.tsx
└── ui/
    ├── Button.tsx
    ├── Tag.tsx
    ├── IconLink.tsx
    ├── ThemeToggle.tsx
    └── StatusBadge.tsx
```

Keep components focused. Do not create abstractions used once unless they clarify a complex responsibility.

---

## Implementation workflow

For each task:

1. Inspect the repository and relevant files.
2. State the implementation approach in a short internal task note or change summary.
3. Make the smallest coherent change.
4. Add or update tests.
5. Run targeted tests.
6. Run lint and typecheck.
7. Run the production build when routing, configuration, or content changes.
8. Review mobile and reduced-motion behavior.
9. Summarize changed files, decisions, and unresolved items.

Do not claim a command passed unless it was actually run.

---

## Validation commands

Use the repository's package manager consistently.

Expected commands:

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

If a command fails with a Windows sandbox `spawn EPERM` or another clearly sandbox-related process-spawn error, rerun the same command with the approved escalation flow and report both the initial failure and the rerun result.

If commands differ, update `README.md`.

Before completing a major phase, run:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

---

## GitHub Pages rules

- Account for user-site versus project-site paths.
- Avoid hard-coded root-relative asset assumptions.
- Test production export locally.
- Ensure generated asset URLs are correct.
- Include the Pages workflow.
- Do not commit build output unless the selected workflow requires it.
- Keep custom-domain configuration optional.
- Document any `basePath` logic.

---

## SEO rules

- Every indexable page needs a unique title and description.
- Generate canonical URLs from one site configuration object.
- Add Open Graph and X metadata.
- Add sitemap and RSS.
- Use structured data conservatively.
- Avoid duplicated page titles.
- Exclude drafts and development routes.
- Do not create unsupported author credentials or publication metadata.

---

## Performance rules

- Minimize client JavaScript.
- Avoid loading the complete search index on initial home-page load.
- Optimize images.
- Use responsive image dimensions.
- Avoid layout shift.
- Lazy-load noncritical visuals.
- Do not run a high-frequency animation loop through React state.
- Measure before optimizing, but enforce the specified performance budget.

---

## Testing expectations

### Required tests for the hero

- Starts with the first approved role
- Uses the exact approved order
- Deletes and advances correctly
- Ends on the permanent statement
- Cleans up timers
- Shows the final static text under reduced motion
- Accessible text remains stable
- Does not overflow narrow mobile layouts

### Required tests for content

- Invalid frontmatter fails with a useful message
- Draft content is excluded in production
- Internal tag validation works
- Related-content references resolve
- Publication sorting is deterministic
- Future-dated content follows an explicit policy
- Search index excludes drafts

### Required smoke tests

- All simplified top-level routes return successfully
- Navigation is keyboard operable
- Theme selection persists
- Social links match the site configuration
- The static export contains a usable 404 page

---

## Prohibited shortcuts

Do not:

- Replace the specified design with a template.
- Use lorem ipsum in final content.
- Copy another personal website's visual assets or layout verbatim.
- Make every section a rounded card.
- Add a heavy 3D library merely for visual novelty.
- Render all content client-side.
- Fetch the Notion CV at runtime.
- Commit credentials.
- publish private notes.
- Add fake testimonials, logos, citation counts, or affiliation marks.
- suppress TypeScript errors with broad ignores.
- disable tests to make CI pass.
- use inaccessible animated text.
- leave broken links hidden behind empty buttons.
- rerun scaffold prompts against the existing implementation as if the repository were empty.
- convert ordinary Markdown content to MDX without a specific component need.

---

## Decision log

When a significant implementation choice is not specified, record it in a brief `docs/decisions/NNNN-title.md` file.

A decision record should include:

- Context
- Decision
- Alternatives considered
- Consequences

Examples:

- MDX content pipeline
- Static search implementation
- GitHub Pages base-path strategy
- Hero visual technology
- Font selection
- Public information architecture simplification

Do not create decision records for trivial styling changes.

---

## Completion response format

At the end of a Codex task, report:

1. What was implemented
2. Key files changed
3. Commands run and their results
4. Accessibility/performance considerations
5. Remaining `TODO` items
6. Any deviation from `PROJECT_SPEC.md`

Keep the report factual.

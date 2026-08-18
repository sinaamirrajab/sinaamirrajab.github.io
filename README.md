# Sina Amirrajab — Research & Projects

A static-first personal website for **Sina Amirrajab**, an AI and Generative AI researcher working in radiology, medical imaging, and clinical translation.

The site is now intentionally simpler than the original research-garden scaffold. The public navigation is:

```text
Home · Research & Projects · Writing · About/CV
```

Search remains available as a utility, but Publications, Ideas, Talks, and public Tags are hidden/future modules unless Sina explicitly asks to re-enable them.

## Current status

Implemented:

- Next.js App Router static export.
- npm and Node 24 configuration.
- Strict TypeScript, ESLint, Prettier, Tailwind CSS 4.
- Deterministic accessible hero typewriter.
- Local Markdown/MDX content loading with Zod validation.
- Project detail routes, combined Writing/Notes archive, About/CV, static search, RSS, sitemap, robots, and metadata.
- GitHub Pages workflow.
- Vitest, React Testing Library, Playwright, and axe smoke tests.

Still release-blocking:

- Reviewed profile/project images and optional videos.
- Factual review of CV chronology/current affiliation wording.
- Stable social image.
- License selection.
- Remote GitHub Pages deployment verification.

Start with:

- [`PROJECT_SPEC.md`](./PROJECT_SPEC.md)
- [`AGENTS.md`](./AGENTS.md)
- [`CODEX_PROMPTS.md`](./CODEX_PROMPTS.md)
- [`docs/IMPLEMENTATION_STATUS.md`](./docs/IMPLEMENTATION_STATUS.md)
- [`RELEASE_CHECKLIST.md`](./RELEASE_CHECKLIST.md)

## Getting started

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js, usually:

```text
http://localhost:3000
```

## Preview the static HTML version

Build the exported GitHub Pages version:

```bash
npm run build
```

Preview the generated `out/` folder:

```bash
npm run preview
```

Stop the preview server with `Ctrl+C`.

## Quality commands

```bash
npm run content:validate
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

Do not deploy when lint, typecheck, tests, or the production build fail.

## Repository structure

```text
app/                  Static routes, metadata routes, sitemap, RSS, 404
components/           Animation, content, layout, navigation, project, UI
content/              Markdown/MDX projects, writing, notes, pages, hidden future modules
docs/                 Decisions, implementation status, asset candidates
lib/                  Site config, content graph, CV data, search, utilities
public/               Static assets, .nojekyll, optional CV PDF
scripts/              Content validation, search indexing, export verification
tests/                Unit, component, and Playwright tests
```

Generated directories such as `.next/`, `out/`, coverage, and Playwright reports are ignored.

## Content authoring

Use plain `.md` files by default. Use `.mdx` only when an entry genuinely needs richer approved components.

Public authoring targets:

```text
content/projects/
content/writing/
content/notes/
content/pages/
```

Hidden/future content models remain available but are not currently public tabs:

```text
content/publications/
content/ideas/
content/talks/
```

Every content file requires YAML frontmatter, a lowercase kebab-case filename, and a matching explicit `slug`.

### New writing file

```text
content/writing/example-essay.md
```

```yaml
---
title: "Example essay"
slug: "example-essay"
description: "A concise description for cards and search."
publishedAt: "2026-01-01"
updatedAt: "2026-01-01"
tags:
  - medical-ai
featured: false
draft: true
---
```

### New note file

```text
content/notes/example-note.md
```

```yaml
---
title: "Example note"
slug: "example-note"
description: "What this note captures."
publishedAt: "2026-01-01"
tags:
  - implementation
noteType: "til"
draft: true
---
```

`/writing` shows both published writing and published notes. Detail routes remain `/writing/[slug]` and `/notes/[slug]`.

## Images and videos in Markdown

Use reviewed local assets only:

```text
public/images/...
public/videos/...
```

Markdown image:

```md
![Alt text](/images/writing/example.png)
```

Local video:

```md
<Video src="/videos/demo.mp4" poster="/images/demo-poster.png" caption="Short caption" />
```

Rules:

- Do not hotlink Notion assets.
- Download approved Notion/media candidates into `public/` first.
- Videos do not autoplay.
- Add useful alt text or captions when media is informative.

Optional project/article media frontmatter:

```yaml
media:
  type: "image"
  src: "/images/projects/example.png"
  alt: "Descriptive alt text"
  caption: "Optional caption."
```

```yaml
media:
  type: "video"
  src: "/videos/example.mp4"
  poster: "/images/projects/example-poster.png"
  caption: "Optional caption."
```

## Profile image

The home hero renders a profile image only when a reviewed local file exists at one of:

```text
public/images/profile/SinaProfile.png
public/images/profile/sina-profile.webp
public/images/profile/sina-profile.jpg
public/images/profile/sina-profile.jpeg
public/images/profile/sina-profile.png
```

No fake portrait placeholder is rendered.

## Project thumbnails

Project cards automatically use a thumbnail when a reviewed local image exists at:

```text
public/images/projects/<project-slug>.webp
public/images/projects/<project-slug>.jpg
public/images/projects/<project-slug>.jpeg
public/images/projects/<project-slug>.png
public/images/projects/<project-slug>.gif
```

For example:

```text
public/images/projects/report2ct.png
```

If the thumbnail needs a custom filename, caption, or video instead of an image, add `media` frontmatter to the project file.

The thumbnail links to the project page. Project cards also show available `paperUrl`, `codeUrl`, and `demoUrl` actions.

## Tags

Tags remain in frontmatter for validation, relationships, internal search ranking, and future filtering. The simplified public UI intentionally does not display tag chips or public tag pages.

## CV

Structured CV data lives in `lib/cv.ts`.

The About/CV navigation item points to `/about`, which includes biography, CV highlights, contact links, and PDF download when available.

The full printable web CV remains available at `/cv`.

The end of `/cv` includes an Awards and certificates section. Add reviewed certificate or award images here:

```text
public/images/certificates/
```

The gallery auto-detects image files in that folder. Use descriptive filenames because the filename becomes the visible caption.

The PDF download is enabled when a reviewed file exists at either supported path:

```text
public/cv/sina-amirrajab-cv.pdf
public/cv/CV_Sina_Amirrajab.pdf
```

## Search

Pagefind is generated after static export:

```bash
npm run build
```

Search indexes the simplified public surface: home, research/about pages, project detail pages, writing, and notes. Hidden modules are excluded from sitemap/search discovery.

## Deployment to GitHub Pages

The intended repository is:

```text
sinaamirrajab.github.io
```

Expected GitHub settings:

- Pages source: GitHub Actions
- Branch: `main`
- Environment: `github-pages`
- Custom domain: optional

For the user-site repository `sinaamirrajab.github.io`, no `basePath` is used. For a project-site repository, the workflow derives a subpath from `GITHUB_REPOSITORY`; override with `NEXT_PUBLIC_BASE_PATH` only when needed.

Optional build-time variables:

```bash
NEXT_PUBLIC_SITE_URL=https://sinaamirrajab.github.io
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

Version 1 requires no secret runtime variables.

## Security and privacy

This is a public-site repository. Do not place private notes, confidential research material, patient information, credentials, private reviews, or restricted datasets in this repository.

`draft: true` excludes content from the exported site, search, RSS, sitemap, and related-content graph, but it does **not** make content private if the repository is public.

## License

Choose and add a license before public release.

Recommended split:

- Source code: MIT License, if Sina wants the code open-sourced.
- Written content, figures, personal branding, and unreleased assets: separate content license or all rights reserved.

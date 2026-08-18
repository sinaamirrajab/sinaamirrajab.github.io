# CODEX_PROMPTS.md

These prompts are designed for the **current simplified repository**.

The original scaffold-from-zero and full research-garden prompts are retired. Do not recreate the old navigation structure unless Sina explicitly asks for it.

Current public navigation:

```text
Home · Research & Projects · Writing · About/CV
```

Hidden/future modules:

- Publications
- Ideas
- Talks
- Public tag pages

Tags remain internal metadata only.

## Prompt 0 — Current baseline audit

```text
Read AGENTS.md, PROJECT_SPEC.md, README.md, docs/IMPLEMENTATION_STATUS.md, RELEASE_CHECKLIST.md, and CODEX_PROMPTS.md completely.

Inspect the repository without redesigning it.

Report:

1. Current implementation status
2. Current public navigation and route surface
3. Hidden/future modules
4. Public versus draft content
5. Current Git status
6. Validation commands that should be run next
7. Conflicts between docs and implementation, if any

Do not write code in this step.
Do not invent biographical or scientific content.
```

## Prompt 1 — Add or edit projects with local media

```text
Read AGENTS.md, PROJECT_SPEC.md, README.md, docs/IMPLEMENTATION_STATUS.md, RELEASE_CHECKLIST.md, content/projects, and lib/content/schema.ts.

Add or refine project case studies using only material supplied by Sina or already present in reviewed repository sources.

Requirements:

- Use `.md` by default.
- Preserve existing slugs unless Sina explicitly asks to change an unpublished slug.
- Use optional media frontmatter only for reviewed local files under public/images or public/videos.
- Do not hotlink Notion assets.
- Do not invent collaborators, datasets, dates, metrics, venues, code links, paper links, or clinical impact claims.
- Do not display public tag chips.
- Keep unsupported fields omitted or as source-level comments.
- Update RELEASE_CHECKLIST.md for missing media or facts.

Run:

npm run content:validate
npm run lint
npm run typecheck
npm run test
npm run build

Report public projects, missing facts, media assets used, command results, and remaining TODOs.
```

## Prompt 2 — Add writing or notes as Markdown

```text
Read AGENTS.md, PROJECT_SPEC.md, README.md, docs/IMPLEMENTATION_STATUS.md, RELEASE_CHECKLIST.md, content/writing, content/notes, and lib/content/schema.ts.

Add or refine public writing and notes from text supplied by Sina.

Requirements:

- Use `.md` by default.
- Put longer essays in content/writing.
- Put shorter notes in content/notes.
- Keep `/writing` as the combined archive.
- Keep detail routes `/writing/[slug]` and `/notes/[slug]`.
- Support Markdown images with local paths under public/images.
- Support local videos with the approved `<Video />` component.
- Do not use import/export statements in authored Markdown.
- Start uncertain or incomplete entries as `draft: true`.
- Do not publish private notes or unsupported research claims.
- Do not display public tag chips.

Run:

npm run content:validate
npm run lint
npm run typecheck
npm run test
npm run build

Report public entries, draft entries, media used, command results, and remaining content-review needs.
```

## Prompt 3 — About/CV update

```text
Read AGENTS.md, PROJECT_SPEC.md, README.md, docs/IMPLEMENTATION_STATUS.md, RELEASE_CHECKLIST.md, content/pages/about.md, content/pages/cv.md, and lib/cv.ts.

Update About/CV content using only reviewed material supplied by Sina or already present in approved repository sources.

Requirements:

- Keep `/about` as the single public About/CV navigation destination.
- Keep `/cv` only as the quiet printable/full web CV route.
- Update lib/cv.ts only with reviewed structured CV facts.
- Do not invent awards, teaching, service, date ranges, institutions, or links.
- Keep the PDF CV button visible only when a reviewed PDF exists under public/cv.
- Preserve medically cautious language.
- Update RELEASE_CHECKLIST.md for missing or stale CV facts.

Run:

npm run content:validate
npm run lint
npm run typecheck
npm run test
npm run build

If CV layout changes materially, also run:

npm run test:e2e

Report changed CV/About content, hidden or draft content, command results, and remaining review items.
```

## Prompt 4 — Visual assets and sharing polish

```text
Read AGENTS.md, PROJECT_SPEC.md, README.md, docs/IMPLEMENTATION_STATUS.md, RELEASE_CHECKLIST.md, docs/ASSET_CANDIDATES.md, app/globals.css, lib/site.ts, and metadata utilities.

Add reviewed local profile/project/social assets.

Requirements:

- Use reviewed local files only.
- Profile image path may be public/images/profile/SinaProfile.png or public/images/profile/sina-profile.{webp,jpg,jpeg,png}.
- Project thumbnail images should live under public/images/projects and preferably be named <project-slug>.<ext>.
- Award/certificate images should live under public/images/certificates.
- Videos should live under public/videos.
- Do not hotlink Notion or temporary image URLs.
- Do not use stock medical imagery or fake clinical scans.
- Do not invent placeholder portraits.
- Keep image/video URLs base-path safe.
- Preserve reduced-motion behavior and visible focus styles.
- Do not add analytics, a component library, or a heavy animation package.

Run:

npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e

Report assets added, where they appear, accessibility/performance considerations, command results, and missing approved assets.
```

## Prompt 5 — Accessibility, route, and search audit

```text
Read AGENTS.md, PROJECT_SPEC.md, README.md, docs/IMPLEMENTATION_STATUS.md, RELEASE_CHECKLIST.md, and existing tests.

Audit and fix the simplified site surface.

Check:

- Navigation shows only Home, Research & Projects, Writing, About/CV.
- Removed tabs do not appear in nav, homepage, sitemap, or search.
- `/research` puts project cards near the top.
- `/writing` combines writing and notes.
- Project detail and note detail routes work.
- Tags remain internal and are not rendered as public chips.
- Markdown image and `<Video />` rendering work.
- Search, RSS, sitemap, 404, canonical URLs, social links, mobile navigation, keyboard navigation, dark mode, and reduced motion work.

Run:

npm run content:validate
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build

Report fixes, exact command results, and manual review items.
```

## Prompt 6 — GitHub Pages release preparation

```text
Read AGENTS.md, PROJECT_SPEC.md, README.md, docs/IMPLEMENTATION_STATUS.md, RELEASE_CHECKLIST.md, next.config.ts, and .github/workflows/pages.yml.

Prepare the simplified site for GitHub Pages release.

Requirements:

- Preserve static export.
- Preserve user-site support for sinaamirrajab.github.io.
- Preserve project-site base-path derivation for non-user-site repositories.
- Ensure public/.nojekyll exists.
- Ensure out/404.html is generated by the build.
- Ensure README deployment settings are current.
- Do not commit out/.
- Do not add a custom domain unless Sina supplies one.
- Do not add server-only features.

Run:

npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e

Report expected deployment URL, command results, and manual GitHub settings still required.
```

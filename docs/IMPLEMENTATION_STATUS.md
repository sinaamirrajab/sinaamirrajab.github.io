# Implementation Status

Last updated: 2026-08-03

## Summary

The site has been simplified from the original full editorial research garden into a cleaner personal research portfolio.

Current public navigation:

```text
Home · Research & Projects · Writing · About/CV
```

Search remains available as a utility. Publications, Ideas, Talks, and public Tag pages are hidden/future modules, while their content schemas/folders remain available for later use.

## Completed technical foundation

- Next.js App Router static export.
- npm and Node 24 configuration.
- Strict TypeScript, ESLint, Prettier, Tailwind CSS 4.
- Deterministic accessible hero sequence with reduced-motion behavior.
- Local `.md` and `.mdx` content pipeline with Zod validation.
- Draft/scheduled exclusion, slug validation, relationship validation, heading extraction, reading time, and RSS/search/sitemap generation.
- GitHub Pages workflow.
- Vitest, React Testing Library, Playwright, and axe tests.

## Simplification phase completed

- Main navigation reduced to four items.
- Homepage simplified around hero, profile-image slot, current focus, current themes, related projects, writing/notes preview, and About/CV preview.
- Visible tag chips removed from public cards, article headers, publication cards, and search results.
- `/research` now merges research and projects and places project cards near the top.
- `/projects/[slug]` remains the stable project detail route.
- `/writing` now combines writing and notes.
- `/notes/[slug]` remains the stable note detail route.
- `/about` now includes biography, CV highlights, contact links, and PDF CV action.
- `/cv` remains a quiet full/printable CV route.
- Public route files for Publications, Ideas, Talks, and Tags were removed from the app surface.
- Local media support was added for project/article frontmatter and Markdown-authored image/video embeds.
- The hero profile image now supports the reviewed local file `public/images/profile/SinaProfile.png`.
- Project cards auto-detect thumbnails from `public/images/projects/<project-slug>.*` and expose project, paper, code, and demo actions.
- The `/cv` page ends with an Awards and certificates section that auto-detects images from `public/images/certificates/`.

## Current public content

Published content is intentionally limited to source-supported material:

- Report2CT project
- Privacy-preserving open-source LLMs for clinical CMR report analysis project
- PhD simulation and synthesis for cardiac MR image analysis project
- Cardiac MRI Simulation Framework project
- Cardiac Pathology Synthesis project
- Conditional Cardiac MR Image Synthesis project
- Influence of Image Artifacts on Simulations of Cardiac Electrophysiology project
- Cardiac MR Scar Quantification project
- Cardiac MRI Synthesis for Reducing Segmentation Failures project
- On the Usability of Synthetic Data project
- Research page
- About/CV page
- Printable/full CV page

Draft examples exist for publications, writing, notes, ideas, and talks. They are excluded from production output, search, RSS, sitemap, and related content unless explicitly enabled for development.

## Authoring model

Use `.md` for ordinary content. Use `.mdx` only when an entry needs approved richer components.

Writing and notes:

- Add essays under `content/writing`.
- Add short notes under `content/notes`.
- Both appear together on `/writing` when published.

Media:

- Images live under `public/images/...`.
- Videos live under `public/videos/...`.
- Markdown images use normal syntax.
- Local videos use the approved `<Video />` component.
- Do not hotlink Notion assets.

## Last known validation status

Validation must be rerun after the simplification implementation:

- `npm run content:validate`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `npm run test:e2e`

Previous full-suite validation passed before this simplification phase. One package-audit item remains unresolved: `npm audit --omit=dev` previously reported a nested Next.js `postcss` advisory, and the forced fix path would downgrade Next.js severely.

## Next implementation phases

### Phase A — Reviewed visual assets

- Review the current profile image at `public/images/profile/SinaProfile.png` for cropping, size, and final approval.
- Add reviewed project images under `public/images/projects`.
- Add reviewed award/certificate images under `public/images/certificates`.
- Add local videos under `public/videos` only when approved.
- Add media frontmatter to project/writing/note files after assets exist.
- Add a stable Open Graph/social image.

### Phase B — Content publication

- Add real public writing and notes as `.md` files when Sina supplies reviewed text.
- Keep uncertain entries as `draft: true`.
- Keep Publications, Ideas, and Talks hidden unless Sina asks to re-enable them.

### Phase C — CV/factual review

- Confirm current affiliation wording.
- Review CV chronology, teaching entries, honors/awards, skills, and interests extracted from the public Notion CV.
- Confirm `public/cv/CV_Sina_Amirrajab.pdf` is current and public.

### Phase D — Release and deployment

- Choose code/content license.
- Run full validation suite.
- Commit implementation.
- Push to the intended `sinaamirrajab.github.io` repository.
- Confirm GitHub Pages source is set to GitHub Actions.
- Verify deployed search, RSS, sitemap, social links, canonical URLs, 404 page, mobile layout, keyboard navigation, and reduced-motion behavior.

## Notes

- Tags remain validated internally but are intentionally hidden from the simplified UI.
- `/projects` and `/notes` are quiet legacy aliases; `/research` and `/writing` are the public navigation routes.
- Static export restrictions still rule out server actions, API routes, runtime redirects, Draft Mode, and database-backed search in version 1.

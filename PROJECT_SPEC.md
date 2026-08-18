# PROJECT_SPEC.md

## 1. Project identity

**Working title:** Sina Amirrajab — Research & Projects  
**Repository recommendation:** `sinaamirrajab.github.io`  
**Product type:** Static personal research portfolio, project case-study archive, writing/notes archive, and web CV  
**Primary owner:** Sina Amirrajab  
**Primary domain:** Medical AI, generative AI, radiology, medical image analysis, and clinical translation

The site should feel simpler than the original editorial research-garden concept: credible, visual, easy to scan, and easy for Sina to update with local Markdown files.

The implementation must never invent publications, awards, dates, metrics, collaborations, affiliations, clinical claims, or biographical facts. Unknown material stays omitted, draft-only, or marked as a source-level TODO.

## 2. Current implementation baseline

As of 2026-08-03, the technical foundation exists:

- Next.js App Router with static export for GitHub Pages.
- npm, Node 24, strict TypeScript, ESLint, Prettier, Tailwind CSS 4, Vitest, Playwright, and axe.
- Deterministic accessible hero animation.
- Local `.md`/`.mdx` content pipeline with Zod validation.
- Project detail routes, writing detail routes, note detail routes, About/CV, static search, RSS, sitemap, robots, and metadata.
- Simplified public navigation:

```text
Home · Research & Projects · Writing · About/CV
```

Search remains available as a utility control and `/search` route, but it is not a primary navigation tab.

## 3. Public information architecture

### Primary public routes

```text
/
├── /research
├── /projects/[slug]
├── /writing
├── /writing/[slug]
├── /notes/[slug]
├── /about
├── /search
├── /feed.xml
├── /sitemap.xml
└── /404
```

### Quiet legacy or utility routes

- `/projects` may remain as a quiet alias/archive with canonical metadata pointing to `/research`.
- `/notes` may remain as a quiet alias with canonical metadata pointing to `/writing`.
- `/cv` may remain as a printable/full web CV route, but `/about` is the single public About/CV navigation destination.

### Hidden/future modules

The following content models may remain in the repository, but they are not part of the simplified public IA:

- Publications
- Ideas
- Talks
- Tags/tag pages

Do not add these to navigation, homepage sections, sitemap, or public search unless Sina explicitly asks to re-enable them.

Tags remain internal metadata for validation, relationships, search ranking, and future filtering. They should not be rendered as visible public tag chips in v1 simplified UI.

## 4. Home page requirements

The home page should be compact and visual:

1. Hero with the approved identity typewriter sequence.
2. Profile image in the hero when a reviewed local asset exists at `public/images/profile/SinaProfile.png` or `public/images/profile/sina-profile.*`.
3. Clear actions to `Research & Projects`, `Writing`, and `About/CV`.
4. Current focus section with three concise focus areas.
5. Current themes section without visible tags.
6. Related/featured project cards with media previews when reviewed local assets exist.
7. Combined writing/notes preview.
8. Short About/CV preview with PDF download if the reviewed PDF exists.

Remove homepage sections for Publications, Ideas, Talks, and tag-heavy metadata.

## 5. Research & Projects

`/research` is the merged research and project route.

Requirements:

- Put related/featured project cards near the top.
- Keep scrolling short.
- Present research themes in compact cards.
- Keep long-form research prose below the project grid.
- Preserve stable project detail routes at `/projects/[slug]`.
- Project cards should render reviewed media from frontmatter when available.
- Project cards should auto-detect reviewed thumbnails at `public/images/projects/<project-slug>.*` when no `media` frontmatter is supplied.
- Project thumbnails should link to the project page; available paper, code, and demo links should be visible actions.
- Do not display tag chips.

## 6. Writing and notes

`/writing` is the merged public archive for long-form writing and short notes.

Requirements:

- Writing entries live in `content/writing`.
- Note entries live in `content/notes`.
- Both default to `.md`.
- `.mdx` is reserved for entries that genuinely need approved rich components.
- Detail routes remain `/writing/[slug]` and `/notes/[slug]`.
- RSS includes published writing and notes.
- Draft and scheduled entries are excluded from production output, sitemap, RSS, search, and related content.

## 7. Markdown media authoring

Use reviewed local assets only:

```text
public/images/...
public/videos/...
```

Markdown images are supported:

```md
![Alt text](/images/example.png)
```

Local video embeds are supported through the approved component:

```md
<Video src="/videos/demo.mp4" poster="/images/demo-poster.jpg" caption="Short caption" />
```

Do not hotlink Notion assets. Download approved images/videos into `public/` first. Do not add YouTube/Vimeo iframe support unless explicitly requested later.

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

Videos must not autoplay. Use controls and `preload="metadata"`.

Project thumbnails can be added without frontmatter when the image is named after the project slug:

```text
public/images/projects/report2ct.png
```

The CV page should include an end-of-page Awards and certificates section. Certificate images are auto-detected from:

```text
public/images/certificates/
```

Use descriptive filenames because filenames become captions.

## 8. Content integrity

Use source-supported material only. Never invent:

- Paper titles, venues, DOI values, citation counts, or publication status.
- Awards, grants, affiliations, collaborators, or dates.
- Model performance, patient cohorts, clinical validation, or clinical deployment claims.

Medical/scientific wording must distinguish research systems from deployed clinical products.

## 9. Technical constraints

- Keep Next.js static export.
- Keep GitHub Pages compatibility.
- Avoid server actions, API routes, runtime databases, runtime Notion fetching, analytics, and backend-only search.
- Keep pages server-rendered where practical.
- Keep client boundaries narrow: hero animation, theme toggle, navigation/search interactions, and lightweight filters only.
- Keep assets base-path safe for GitHub user-site and project-site deployments.
- Do not add a component library or animation library for this simplification.

## 10. Search, sitemap, and RSS

- Public search should index the simplified public surface: home, research/about pages, projects, writing, and notes.
- Do not index hidden Publications, Ideas, Talks, Tags, `/projects` alias, `/notes` alias, or `/cv` printable route.
- Search results should not display tag chips.
- Sitemap should include the simplified public routes and published detail pages only.
- RSS should include published writing and notes only.

## 11. Testing expectations

Automated tests should cover:

- Navigation labels: `Home`, `Research & Projects`, `Writing`, `About/CV`.
- Removed tabs absent from navigation.
- Project detail routes still work.
- `/research` renders project cards near the top.
- `/writing` combines writing and notes.
- Tags remain internally valid but are not visible as public chips.
- Markdown image mapping and local `<Video />` rendering.
- Sitemap excludes hidden modules.
- Static export produces `404.html`, Pagefind assets, RSS, sitemap, and no removed public-route artifacts.

Before completing a major phase, run:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Run `npm run test:e2e` when route structure, navigation, or visual behavior changes.

## 12. Release blockers

Before public launch, Sina still needs to review:

- Current affiliation wording.
- CV chronology and extracted Notion CV facts.
- PDF CV currency.
- Reviewed profile/project images and video assets.
- Publication metadata if Publications are re-enabled later.
- License choice for code and content.
- Manual mobile, keyboard, dark-mode, reduced-motion, and performance review.

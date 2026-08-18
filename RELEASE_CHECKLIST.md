# Release Checklist

These items require Sina's review, additional source material, or remote deployment verification before the first public release.

## Simplified site surface

- Confirm the public navigation should remain: `Home · Research & Projects · Writing · About/CV`.
- Confirm Publications, Ideas, Talks, and public Tag pages should remain hidden for version 1.
- Review `/research` to confirm the merged Research & Projects page feels short enough.
- Review `/writing` once real writing/notes are added.
- Review `/about` as the single public About/CV destination.
- Decide whether the quiet `/cv` printable/full CV route should remain discoverable by direct link only.

## Content and factual review

- Review current affiliation wording and whether the 2024-present Maastricht University role should remain phrased as current.
- Review CV chronology, teaching entries, honors/awards, skills, and interests extracted from the public Notion CV.
- Confirm `public/cv/CV_Sina_Amirrajab.pdf` is the reviewed public PDF CV.
- Add real public writing and notes only after Sina supplies or approves the text.
- If Publications are re-enabled later, supply complete reviewed publication metadata: titles, author lists, venues, years, DOI or paper URLs, code URLs, and publication status.
- Add the public Report2CT paper URL and complete publication metadata when ready.
- Add a reviewed GitHub repository URL for the CMR report LLM project if public code is available.
- Review all public biography, research, project, and CV language for unsupported or over-specific claims.

## Assets and media

- Confirm the current profile image is final, cropped well, and reasonably compressed:
  - `public/images/profile/SinaProfile.png`
- Alternative supported profile paths:
  - `public/images/profile/sina-profile.webp`
  - `public/images/profile/sina-profile.jpg`
  - `public/images/profile/sina-profile.jpeg`
  - `public/images/profile/sina-profile.png`
- Review image candidates listed in `docs/ASSET_CANDIDATES.md`, then copy approved assets into `public/images/...`.
- Add project thumbnails as `public/images/projects/<project-slug>.<ext>` or use project `media` frontmatter for custom filenames/videos.
- Add award/certificate images to `public/images/certificates/`.
- Add project media frontmatter only after local reviewed image/video files exist.
- Add reviewed videos under `public/videos/...` only when they should be public.
- Add a stable Open Graph/social sharing image.
- Do not hotlink Notion/S3 assets.
- Do not add fake portrait or project placeholders.

## Licensing

- Choose licensing for source code.
- Choose licensing for written content, personal branding, figures, and unreleased assets.

## Technical release checks

- Re-run `npm run content:validate`.
- Re-run `npm run lint`.
- Re-run `npm run typecheck`.
- Re-run `npm run test`.
- Re-run `npm run test:e2e`.
- Re-run `npm run build`.
- Re-run `npm audit --omit=dev` after the next patched Next.js release; do not use a forced audit fix if it would downgrade Next.js or break the architecture.
- Confirm the GitHub Actions Pages workflow succeeds after pushing to GitHub.
- Verify the deployed site has working static search, RSS, sitemap, social links, canonical URLs, and `404.html`.

## Manual review

- Review mobile layouts at narrow widths.
- Review keyboard navigation and focus order.
- Review dark mode and light mode contrast.
- Review reduced-motion behavior.
- Review profile/project media loading once assets exist.
- Review video controls/captions once videos exist.
- Review print layout for `/cv`.
- Review factual language for medical/scientific caution.

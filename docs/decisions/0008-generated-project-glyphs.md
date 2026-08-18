# 0008. Generated project glyphs as figure placeholders

- Status: Accepted
- Date: 2026-08-11

## Context

`public/images/projects/` is empty. `lib/content/loader.ts` already looks for a
thumbnail at `public/images/projects/<slug>.{webp,jpg,jpeg,png,gif}` and
attaches it as the document's `media`, but since no files exist, every
`ProjectCard` and every `MediaPreview` rendered text-only.

The result was a research portfolio with ten projects and zero images. On a page
about medical imaging, that is a conspicuous gap.

The obvious fix is real figures from the papers. Those are the right long-term
answer but they were not available at the time of this change, and shipping a
page with no visual layer at all was worse than shipping a considered
placeholder.

## Decision

Add `components/project/ProjectGlyph.tsx`: a server component that renders
deterministic decorative SVG art derived from the project slug.

- The slug is hashed (FNV-1a) into a seed which drives a small xorshift
  sequence. The same slug therefore produces byte-identical markup on every
  build, so static exports stay reproducible and diffs stay clean.
- The motif is a contour field over a sparse sampling lattice, reusing the
  stroke weights, opacities and gradient treatment already established in
  `components/animation/ResearchField.tsx` so the page reads as one system.
- It is marked `aria-hidden="true"` and `role="presentation"`, and it is never
  captioned.

**It is used only as a fallback.** `ProjectCard` renders `MediaPreview` whenever
`project.media` exists and falls back to `ProjectGlyph` only when it does not.
Dropping a real figure at `public/images/projects/<slug>.webp` causes the loader
to attach it and the glyph disappears for that project, with no code change.

## Consequences

- **These are decoration, not data.** The contour motif deliberately evokes
  segmentation contours and k-space sampling, but it depicts no real result and
  must never be labelled, captioned, or described as an output of any project.
  Anyone editing these components should preserve that.
- This is a documented exception to the general preference against hand-rolled
  decorative SVG. It is justified by having a defined replacement path and by
  being deterministic rather than arbitrary.
- Real paper figures remain the goal. The glyphs reduce the urgency of that
  work; they do not remove the need for it.

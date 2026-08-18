---
name: update-research-page
description: Pull new publications from Sina Amirrajab's Google Scholar profile and add them to the research page as project entries. Run monthly, or whenever asked to "update the research page" / "check for new papers" / "sync Scholar".
---

# Update research page from Google Scholar

Scholar profile: `https://scholar.google.com/citations?user=m0TFXOoAAAAJ&hl=en`
GitHub account: `https://github.com/sinaamirrajab`

This skill adds newly published papers to `content/projects/` so they appear on the home page and `/research`. It does not remove or rewrite existing entries, and it never pushes or deploys on its own; every run ends with local, uncommitted file changes for review.

## 0. Read this first: hard rules

- **The description is always the real abstract, verbatim.** Never write your own paraphrase, highlight list, or "key points" summary. The `summary` frontmatter field and the body's `## Abstract` section must both be the actual abstract text, copied faithfully. This was corrected once already after an early run wrote paraphrased summaries; do not regress to that.
- **Never guess a GitHub code link.** Only set `codeUrl` when you have confirmed, by reading the repo's actual README, that it is the code for that specific paper. A plausible-sounding repo name is not enough. If unsure, leave `codeUrl` unset.
- **Never fabricate a paper URL, DOI, or citation count.** If you cannot find a real one, leave the project without `paperUrl` rather than inventing something.
- **Don't touch existing content files** except to add a missing `paperUrl`/`codeUrl` you've now confirmed, exactly as described in step 4.
- **Don't commit, push, or deploy.** Stop after the verification in step 6 and hand the diff to Sina.

## 1. Fetch the current publication list

Fetch the Scholar profile sorted by publication date, newest first:

```
https://scholar.google.com/citations?user=m0TFXOoAAAAJ&hl=en&sortby=pubdate
```

Use WebFetch with a prompt asking for every publication's exact title, authors, venue, and year, in order. Scholar paginates in pages of 20; if the last entry on the page is still within the range you care about (see step 2), fetch the next page too with `&cstart=20`, `&cstart=40`, etc.

## 2. Work out what's new

Compare the fetched titles against what's already published:

```bash
grep -l "" content/projects/*.md | xargs -I{} sh -c 'echo "=== {} ==="; grep -E "^title:|^paperUrl:|^year:" {}'
```

A Scholar entry is **new** if no existing project's `title` or `paperUrl` plausibly matches it. Titles sometimes drift slightly between a preprint and its published version (for example "multiplanar" becoming "multi-view" on publication) — treat those as the same paper, not two entries, and prefer the published venue's URL over the preprint's when both exist.

Stop paginating once you reach papers you already have, or papers older than roughly 14 months (comfortably older than any reasonable monthly cadence).

## 3. For each new paper, get the real abstract and a canonical link

Do not rely on Scholar's own page for the abstract; it usually only shows a short snippet. Resolve properly:

1. **Find the canonical URL.** Query Crossref for the DOI:
   ```bash
   enc=$(node -e "console.log(encodeURIComponent(process.argv[1]))" "EXACT PAPER TITLE")
   curl -s "https://api.crossref.org/works?query.bibliographic=${enc}&rows=3&select=DOI,title,URL,container-title,published"
   ```
   Check the returned title against the real one; Crossref sometimes returns a near-miss. If the paper is an arXiv preprint, use `https://arxiv.org/abs/<id>` directly instead (Scholar lists the arXiv id).

2. **Get the abstract**, trying each of these in order until one has real text (each is a plain HTTPS JSON API, no scraping):
   ```bash
   # a) Crossref itself
   curl -s "https://api.crossref.org/works/<DOI>" # .message.abstract, HTML-tagged, strip tags

   # b) Semantic Scholar
   curl -s "https://api.semanticscholar.org/graph/v1/paper/DOI:<DOI>?fields=title,abstract"

   # c) Europe PMC (often has it when the others don't, e.g. Nature journals)
   curl -s "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<DOI>&format=json&resultType=core"

   # d) PubMed, for anything biomedical (esearch by title, then efetch the abstract)
   pmid=$(curl -s "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&term=<url-encoded title>&retmax=1" | node -e "...")
   curl -s "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${pmid}&rettype=abstract&retmode=text"

   # e) arXiv abstract page, for preprints
   # WebFetch https://arxiv.org/abs/<id> and ask for the abstract verbatim
   ```
   PubMed abstracts include a long author-affiliation block before the actual abstract text; the real abstract is the paragraph(s) starting at `BACKGROUND`, `PURPOSE`, `OBJECTIVE(S)`, or similar, running up to the copyright/DOI/PMID line. Extract only that.

   If a JS-rendered publisher page (nature.com, sciencedirect via linkinghub, tandfonline, ieeexplore) is the only source and none of the APIs above have it, WebFetch usually fails on these (auth redirects, "Redirecting" stubs, 403s) — don't burn time retrying the same gated URL, move to the next fallback source instead.

3. If truly no abstract can be found anywhere, still add the entry with `paperUrl` set and a short factual `summary` built only from confirmed details (title, venue, year) — never invented findings. Flag this one explicitly in your final report to Sina.

## 4. Check for a matching GitHub repo

```bash
curl -s "https://api.github.com/users/sinaamirrajab/repos?per_page=100&sort=updated" | node -e "... print name, description, html_url ..."
```

For any repo whose name plausibly matches a new paper, confirm before linking it:

```bash
curl -s "https://raw.githubusercontent.com/sinaamirrajab/<repo>/main/README.md" | head -c 400
```

Only set `codeUrl` if the README's own description clearly matches that paper's topic and method. If two repos could plausibly match, or the README is generic/empty, leave `codeUrl` unset rather than guessing.

While you're in this list, check whether any **existing** project file is still missing a `paperUrl` or `codeUrl` that you can now confirm (this happened with `report2ct` and `clinical-cmr-report-llms` in the first run) and fill those gaps too, using the same confirm-before-linking rule.

## 5. Write the project files

One file per paper at `content/projects/<slug>.md`. Slug: lowercase kebab-case, unique, matches the filename exactly (the loader enforces this).

Frontmatter shape (see any file written by the first run for a full example, e.g. `content/projects/cmr-foundation-model-cardiac-diagnosis.md`):

```yaml
---
title: "<paper title, title case, cleaned up>"
slug: "<slug>"
summary: >-
  <the FULL abstract text, verbatim, as a YAML folded block scalar so long
  text with quotes/apostrophes doesn't need escaping>
year: <publication year, as a plain number>
status: "completed"   # or "active" if it's genuinely ongoing work
tags:
  - <2-4 tags from the closed registry in lib/content/tags.ts only>
paperUrl: "<canonical URL, doi.org or arxiv.org>"
codeUrl: "<only if confirmed per step 4>"
draft: false
---

## Abstract

<the same abstract text again, as normal prose, split into paragraphs at the
paper's own paragraph/section breaks (Background/Methods/Results/etc.)>
```

Rules for the frontmatter:

- **Tags must come from the existing registry** in `lib/content/tags.ts`. Do not invent a new tag slug; the build fails hard on any tag not in that list (`assertKnownTag`). If nothing fits well, use the closest broad tag (`mri`, `clinical-decision-support`, etc.) rather than adding one.
- **`status`**: "completed" for a published paper, "active" only if the underlying project is still ongoing work (matches how `clinical-cmr-report-llms` is marked).
- **Never set `problem` or `contribution`.** Those fields existed in the original hand-written project entries (sourced from Sina's CV, predating this skill) and are fine there, but for Scholar-imported papers the abstract already covers this — adding a paraphrased problem/contribution on top is exactly the "very bad description" mistake this skill exists to avoid.
- If two new papers are clearly the same underlying work at different stages (a preprint and its later journal publication), write **one** entry using the published version's DOI, not two.
- If a new paper is a direct follow-up to an existing project (e.g. a domain-adaptation paper following up on an earlier scar-quantification paper), link them both ways with `related: { projects: [...] }`, following the pattern in `cardiac-mr-scar-quantification.md` / `cardiac-scar-quantification-domain-adaptation.md`.

## 6. Images

Do not attempt to auto-extract a method figure from a PDF; that's unreliable enough to not be worth the risk of an ugly or wrong crop on a public page. Leave `media` unset. `components/project/ProjectGlyph.tsx` renders a deterministic placeholder pattern automatically for any project without one, both in project cards and on the project's own page, so nothing looks broken while the entry has no image.

To add a real figure later (Sina, manually, whenever convenient): drop `public/images/projects/<slug>.webp` (a paper's method figure or key result, roughly 1200x750px) and the loader picks it up automatically, no code or content changes needed. `.jpg`/`.jpeg`/`.png`/`.gif` also work.

## 7. Verify before handing off

```bash
npx tsx scripts/validate-content.ts     # schema + slug + tag + relationship checks
npx tsc --noEmit
npx eslint .
npx vitest run
```

`tests/unit/content.test.ts` hard-codes the full project slug order (newest-first by year, see `sortDocuments` in `lib/content/loader.ts`). Adding projects changes that order, so this test will fail after step 5 — that's expected. Regenerate the expected list rather than hand-editing it:

```bash
# write a throwaway script, run it, then delete it:
cat > scripts/_tmp-list-projects.ts <<'EOF'
import { getEntries } from "@/lib/content/loader";
for (const p of getEntries("project")) console.log(p.slug, "|", p.year ?? p.period);
EOF
npx tsx scripts/_tmp-list-projects.ts
rm scripts/_tmp-list-projects.ts
```

Paste the resulting slug order into the `toEqual([...])` array in `tests/unit/content.test.ts`, then re-run `npx vitest run`.

Finally:

```bash
npm run build   # content:validate -> next build -> prune -> search:index -> verify:export
```

If the build is clean, do a quick local preview (`npm run preview`, or `npx serve out`) and glance at `/research` and one or two of the new `/projects/<slug>` pages before reporting back.

## 8. Report, don't publish

End the run with a short summary for Sina: how many new papers were added, which ones got a confirmed `codeUrl`, which (if any) needed the no-abstract-found fallback in step 3, and any existing entries you filled in gaps for. Leave the changes as uncommitted local edits. Committing and pushing is Sina's call, not this skill's, since it publishes directly to a live personal site.

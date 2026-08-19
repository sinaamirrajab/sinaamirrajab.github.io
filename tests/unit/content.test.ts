import { describe, expect, it } from "vitest";
import { projectSchema } from "@/lib/content/schema";
import { getEntries, getContentGraph, getTagIndex } from "@/lib/content/loader";
import { normalizeTag } from "@/lib/content/tags";
import { getWritingArchiveEntries } from "@/lib/content/writing-archive";

describe("content graph", () => {
  it("loads source-supported public projects, newest first", () => {
    // sortDocuments (loader.ts) sorts projects purely by resolved year desc,
    // then title asc. Monthly Scholar-import runs add to this list, so
    // regenerate it by re-running getEntries("project") rather than
    // hand-editing slugs in.
    expect(getEntries("project").map((project) => project.slug)).toEqual([
      "mrs-digital-phantom-simulation",
      "rectal-cancer-evi-mfi-classification",
      "cmr-foundation-model-cardiac-diagnosis",
      "mrs-data-synthesis-vae",
      "cmrxmotion-challenge-results",
      "cmr-multi-view-foundation-model-adaptation",
      "modality-invariant-brain-mri-lesion-segmentation",
      "breast-dce-mri-contrast-synthesis",
      "fomo25-brain-mri-challenge",
      "ai-data-curation-virtual-assistant",
      "generative-ct-synthesis-diverse-anatomies",
      "ood-detection-brain-mri-ensembles",
      "prostate-mri-anatomy-guided-ai",
      "generative-ai-synthetic-medical-data-review",
      "ms-flair-radiomics-disability-prediction",
      "clinical-cmr-report-llms",
      "radiomics-quality-score-2",
      "report2ct",
      "wand-mrs-artifact-removal",
      "cardiac-scar-quantification-domain-adaptation",
      "brain-mri-simulation-framework",
      "white-blood-dark-blood-lge-cmr-synthesis",
      "gaba-edited-mrs-challenge",
      "cardiac-mri-synthesis-segmentation-failures",
      "cardiac-pathology-synthesis",
      "cardiac-mri-simulation-synthesis-phd",
      "cardiac-mr-scar-quantification",
      "cardiac-mri-simulation-framework",
      "conditional-cardiac-mr-image-synthesis",
      "usability-of-synthetic-data",
      "image-artifacts-cardiac-electrophysiology",
    ]);
  });

  it("excludes drafts from production queries", () => {
    expect(getEntries("writing")).toEqual([]);
    expect(getContentGraph().public.some((entry) => entry.draft)).toBe(false);
  });

  it("normalizes tags", () => {
    expect(normalizeTag("Generative AI")).toBe("generative-ai");
  });

  it("rejects invalid project frontmatter", () => {
    const result = projectSchema.safeParse({
      draft: false,
      featured: true,
      slug: "Bad Slug",
      status: "completed",
      summary: "x",
      tags: [],
      title: "Bad",
    });
    expect(result.success).toBe(false);
  });

  it("validates local project media paths", () => {
    const valid = projectSchema.safeParse({
      draft: false,
      featured: true,
      media: {
        alt: "Example local image",
        src: "/images/projects/example.png",
        type: "image",
      },
      slug: "example-project",
      status: "completed",
      summary: "x",
      tags: [],
      title: "Example",
    });
    const external = projectSchema.safeParse({
      draft: false,
      featured: true,
      media: {
        src: "https://example.com/video.mp4",
        type: "video",
      },
      slug: "example-project",
      status: "completed",
      summary: "x",
      tags: [],
      title: "Example",
    });

    expect(valid.success).toBe(true);
    expect(external.success).toBe(false);
  });

  it("combines draft writing and notes for the unified archive model", () => {
    // Sorted newest-first by publishedAt; update alongside new draft content.
    expect(
      getWritingArchiveEntries({ includeDrafts: true }).map(
        (item) => item.label,
      ),
    ).toEqual(["Essay", "Note", "Essay"]);
  });

  it("builds tag indexes for published entries", () => {
    const index = getTagIndex();
    expect(index.get("generative-ai")?.length).toBeGreaterThan(0);
    expect(index.get("digital-garden")).toBeUndefined();
  });
});

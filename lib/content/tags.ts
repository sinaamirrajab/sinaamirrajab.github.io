export type TagDefinition = {
  slug: string;
  label: string;
  description?: string;
};

export const tagRegistry = [
  { slug: "medical-imaging", label: "Medical imaging" },
  { slug: "radiology", label: "Radiology" },
  { slug: "clinical-translation", label: "Clinical translation" },
  { slug: "generative-ai", label: "Generative AI" },
  { slug: "multimodal-ai", label: "Multimodal AI" },
  { slug: "foundation-models", label: "Foundation models" },
  { slug: "vision-language-models", label: "Vision-language models" },
  { slug: "llms", label: "LLMs" },
  { slug: "diffusion-models", label: "Diffusion models" },
  { slug: "synthetic-data", label: "Synthetic data" },
  { slug: "simulation", label: "Simulation" },
  { slug: "clinical-decision-support", label: "Clinical decision support" },
  { slug: "open-source", label: "Open source" },
  { slug: "privacy-preserving-ai", label: "Privacy-preserving AI" },
  { slug: "cardiac-mri", label: "Cardiac MRI" },
  { slug: "cmr", label: "CMR" },
  { slug: "mri", label: "MRI" },
  { slug: "ct", label: "CT" },
  { slug: "oncologic-imaging", label: "Oncologic imaging" },
  { slug: "radiology-reports", label: "Radiology reports" },
  { slug: "segmentation", label: "Segmentation" },
  { slug: "research-workflow", label: "Research workflow" },
  { slug: "digital-garden", label: "Digital garden" },
] as const satisfies readonly TagDefinition[];

export type TagSlug = (typeof tagRegistry)[number]["slug"];

export const tagMap: Map<string, TagDefinition> = new Map(
  tagRegistry.map((tag) => [tag.slug, tag]),
);

export function assertKnownTag(slug: string, filePath: string) {
  if (!tagMap.has(slug)) {
    throw new Error(`Unknown tag "${slug}" in ${filePath}`);
  }
}

export function normalizeTag(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}

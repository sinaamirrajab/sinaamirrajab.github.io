import { z } from "zod";
import type { CollectionName, ContentKind } from "@/lib/content/types";

const slugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase kebab-case slugs.");

const isoDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Use ISO 8601 date-only format.");

const tagsSchema = z.array(slugSchema).default([]);

const imagePathSchema = z
  .string()
  .regex(
    /^\/images\/.+/,
    "Use reviewed local image assets under /public/images.",
  );

const videoPathSchema = z
  .string()
  .regex(
    /^\/videos\/.+/,
    "Use reviewed local video assets under /public/videos.",
  );

const mediaSchema = z
  .discriminatedUnion("type", [
    z
      .object({
        type: z.literal("image"),
        src: imagePathSchema,
        alt: z.string().min(1).optional(),
        caption: z.string().min(1).optional(),
      })
      .strict(),
    z
      .object({
        type: z.literal("video"),
        src: videoPathSchema,
        alt: z.string().min(1).optional(),
        caption: z.string().min(1).optional(),
        poster: imagePathSchema.optional(),
      })
      .strict(),
  ])
  .optional();

const relatedSchema = z
  .object({
    projects: z.array(slugSchema).optional(),
    publications: z.array(slugSchema).optional(),
    notes: z.array(slugSchema).optional(),
    ideas: z.array(slugSchema).optional(),
    talks: z.array(slugSchema).optional(),
  })
  .strict()
  .optional();

const baseSchema = z
  .object({
    title: z.string().min(1),
    slug: slugSchema,
    tags: tagsSchema,
    related: relatedSchema,
    draft: z.boolean().default(true),
  })
  .strict();

export const projectSchema = baseSchema
  .extend({
    summary: z.string().min(1),
    problem: z.string().optional(),
    contribution: z.string().optional(),
    year: z.union([z.number().int(), z.string().min(1)]).optional(),
    period: z.string().optional(),
    status: z.enum(["active", "completed", "concept", "archived"]),
    featured: z.boolean().default(false),
    order: z.number().int().optional(),
    image: z.string().optional(),
    media: mediaSchema,
    paperUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    datasetUrl: z.string().url().optional(),
    collaborators: z.array(z.string().min(1)).optional(),
  })
  .strict();

export const publicationSchema = baseSchema
  .extend({
    authors: z.array(z.string().min(1)).default([]),
    year: z.number().int(),
    venue: z.string().optional(),
    publicationType: z.enum([
      "journal",
      "conference",
      "preprint",
      "thesis",
      "chapter",
      "other",
    ]),
    status: z
      .enum(["published", "accepted", "preprint", "in-review"])
      .optional(),
    selected: z.boolean().default(false),
    doi: z.string().optional(),
    paperUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    projectSlug: slugSchema.optional(),
    significance: z.string().optional(),
  })
  .strict();

const articleSchema = baseSchema
  .extend({
    description: z.string().min(1),
    publishedAt: isoDateSchema,
    updatedAt: isoDateSchema.optional(),
    cover: z.string().optional(),
    featured: z.boolean().optional(),
    media: mediaSchema,
  })
  .strict();

export const writingSchema = articleSchema;

export const noteSchema = articleSchema
  .extend({
    noteType: z.enum([
      "til",
      "paper-note",
      "experiment",
      "implementation",
      "observation",
      "dataset",
      "conference",
    ]),
  })
  .strict();

export const ideaSchema = articleSchema
  .extend({
    maturity: z.enum(["seed", "growing", "evergreen", "archived"]),
    openQuestions: z.array(z.string().min(1)).optional(),
  })
  .strict();

export const talkSchema = baseSchema
  .extend({
    event: z.string().min(1),
    date: isoDateSchema,
    location: z.string().optional(),
    talkType: z.enum([
      "conference",
      "seminar",
      "lecture",
      "workshop",
      "podcast",
    ]),
    slidesUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    description: z.string().optional(),
  })
  .strict();

export const pageSchema = baseSchema
  .extend({
    description: z.string().min(1),
    pageType: z.enum(["research", "about", "cv", "other"]),
  })
  .strict();

export const collectionDefinitions = {
  projects: { kind: "project", schema: projectSchema },
  publications: { kind: "publication", schema: publicationSchema },
  writing: { kind: "writing", schema: writingSchema },
  notes: { kind: "note", schema: noteSchema },
  ideas: { kind: "idea", schema: ideaSchema },
  talks: { kind: "talk", schema: talkSchema },
  pages: { kind: "page", schema: pageSchema },
} as const satisfies Record<
  CollectionName,
  { kind: ContentKind; schema: z.ZodType }
>;

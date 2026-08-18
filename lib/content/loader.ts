import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import readingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import { ZodError } from "zod";
import { getProjectThumbnailMedia } from "@/lib/assets";
import {
  collectionDefinitions,
  ideaSchema,
  noteSchema,
  pageSchema,
  projectSchema,
  publicationSchema,
  talkSchema,
  writingSchema,
} from "@/lib/content/schema";
import { assertKnownTag } from "@/lib/content/tags";
import type {
  CollectionName,
  ContentDocument,
  ContentGraph,
  ContentKind,
  Heading,
  IdeaDocument,
  NoteDocument,
  PageDocument,
  ProjectDocument,
  PublicationDocument,
  TalkDocument,
  WritingDocument,
} from "@/lib/content/types";
import { isFutureDate } from "@/lib/utils/dates";

type ProjectMeta = typeof projectSchema._output;
type PublicationMeta = typeof publicationSchema._output;
type WritingMeta = typeof writingSchema._output;
type NoteMeta = typeof noteSchema._output;
type IdeaMeta = typeof ideaSchema._output;
type TalkMeta = typeof talkSchema._output;
type PageMeta = typeof pageSchema._output;

const contentRoot = path.join(process.cwd(), "content");
const authoredContentPattern = /\.(md|mdx)$/;
const mdxImportPattern = /(^|\n)\s*(import|export)\s+/;

const collections = Object.keys(collectionDefinitions) as CollectionName[];

const kindToCollection = {
  project: "projects",
  publication: "publications",
  writing: "writing",
  note: "notes",
  idea: "ideas",
  talk: "talks",
  page: "pages",
} as const satisfies Record<ContentKind, CollectionName>;

const graphCache = new Map<string, ContentGraph>();

function parseAuthoredFile(collection: CollectionName, fileName: string) {
  const filePath = path.join(contentRoot, collection, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  if (mdxImportPattern.test(parsed.content)) {
    throw new Error(
      `MDX import/export statements are not allowed in authored content: ${filePath}`,
    );
  }

  return { filePath, parsed };
}

function getAuthoredFiles(collection: CollectionName) {
  const directory = path.join(contentRoot, collection);
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => authoredContentPattern.test(file))
    .sort((a, b) => a.localeCompare(b));
}

function formatZodError(filePath: string, error: ZodError) {
  const details = error.issues
    .map(
      (issue) => `${issue.path.join(".") || "frontmatter"}: ${issue.message}`,
    )
    .join("; ");
  return `Invalid frontmatter in ${filePath}: ${details}`;
}

function extractHeadings(body: string): Heading[] {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(body);
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];

  visit(tree, "heading", (node) => {
    const text = toString(node);
    if (!text) {
      return;
    }

    headings.push({
      depth: node.depth,
      id: slugger.slug(text),
      text,
    });
  });

  return headings;
}

function assertSlugMatchesFile(
  slug: string,
  fileName: string,
  filePath: string,
) {
  const basename = fileName.replace(authoredContentPattern, "");
  if (basename !== slug) {
    throw new Error(
      `Slug mismatch in ${filePath}: filename "${basename}" must match frontmatter slug "${slug}".`,
    );
  }
}

function commonFields(
  collection: CollectionName,
  kind: ContentKind,
  filePath: string,
  body: string,
  meta: {
    draft: boolean;
    related?: ContentDocument["related"];
    slug: string;
    tags: string[];
    title: string;
  },
) {
  return {
    body,
    collection,
    draft: meta.draft,
    headings: extractHeadings(body),
    kind,
    path: filePath,
    related: meta.related,
    slug: meta.slug,
    tags: meta.tags,
    title: meta.title,
  };
}

function toDocument(
  collection: CollectionName,
  fileName: string,
): ContentDocument {
  const definition = collectionDefinitions[collection];
  const { filePath, parsed } = parseAuthoredFile(collection, fileName);
  const result = definition.schema.safeParse(parsed.data);

  if (!result.success) {
    throw new Error(formatZodError(filePath, result.error));
  }

  assertSlugMatchesFile(result.data.slug, fileName, filePath);
  result.data.tags.forEach((tag) => assertKnownTag(tag, filePath));

  const base = commonFields(
    collection,
    definition.kind,
    filePath,
    parsed.content.trim(),
    result.data,
  );

  switch (collection) {
    case "projects": {
      const meta = result.data as ProjectMeta;
      return {
        ...base,
        collection: "projects",
        kind: "project",
        codeUrl: meta.codeUrl,
        collaborators: meta.collaborators,
        contribution: meta.contribution,
        datasetUrl: meta.datasetUrl,
        demoUrl: meta.demoUrl,
        featured: meta.featured,
        image: meta.image,
        media: meta.media ?? getProjectThumbnailMedia(meta.slug, meta.title),
        order: meta.order,
        paperUrl: meta.paperUrl,
        period: meta.period,
        problem: meta.problem,
        status: meta.status,
        summary: meta.summary,
        year: meta.year,
      } satisfies ProjectDocument;
    }
    case "publications": {
      const meta = result.data as PublicationMeta;
      return {
        ...base,
        collection: "publications",
        kind: "publication",
        authors: meta.authors,
        codeUrl: meta.codeUrl,
        doi: meta.doi,
        paperUrl: meta.paperUrl,
        projectSlug: meta.projectSlug,
        publicationType: meta.publicationType,
        selected: meta.selected,
        significance: meta.significance,
        status: meta.status,
        venue: meta.venue,
        year: meta.year,
      } satisfies PublicationDocument;
    }
    case "writing": {
      const meta = result.data as WritingMeta;
      return {
        ...base,
        collection: "writing",
        kind: "writing",
        cover: meta.cover,
        description: meta.description,
        featured: meta.featured,
        media: meta.media,
        publishedAt: meta.publishedAt,
        readingTime: readingTime(parsed.content).text,
        updatedAt: meta.updatedAt,
      } satisfies WritingDocument;
    }
    case "notes": {
      const meta = result.data as NoteMeta;
      return {
        ...base,
        collection: "notes",
        kind: "note",
        cover: meta.cover,
        description: meta.description,
        featured: meta.featured,
        media: meta.media,
        noteType: meta.noteType,
        publishedAt: meta.publishedAt,
        readingTime: readingTime(parsed.content).text,
        updatedAt: meta.updatedAt,
      } satisfies NoteDocument;
    }
    case "ideas": {
      const meta = result.data as IdeaMeta;
      return {
        ...base,
        collection: "ideas",
        kind: "idea",
        cover: meta.cover,
        description: meta.description,
        featured: meta.featured,
        media: meta.media,
        maturity: meta.maturity,
        openQuestions: meta.openQuestions,
        publishedAt: meta.publishedAt,
        readingTime: readingTime(parsed.content).text,
        updatedAt: meta.updatedAt,
      } satisfies IdeaDocument;
    }
    case "talks": {
      const meta = result.data as TalkMeta;
      return {
        ...base,
        collection: "talks",
        kind: "talk",
        date: meta.date,
        description: meta.description,
        event: meta.event,
        location: meta.location,
        slidesUrl: meta.slidesUrl,
        talkType: meta.talkType,
        videoUrl: meta.videoUrl,
      } satisfies TalkDocument;
    }
    case "pages": {
      const meta = result.data as PageMeta;
      return {
        ...base,
        collection: "pages",
        kind: "page",
        description: meta.description,
        pageType: meta.pageType,
      } satisfies PageDocument;
    }
  }
}

function isScheduled(document: ContentDocument) {
  if (
    document.kind === "writing" ||
    document.kind === "note" ||
    document.kind === "idea"
  ) {
    return isFutureDate(document.publishedAt);
  }

  return false;
}

function isPublicDocument(document: ContentDocument, includeDrafts: boolean) {
  if (includeDrafts) {
    return true;
  }

  if (document.draft) {
    return false;
  }

  return !isScheduled(document);
}

/**
 * Newest-first sort key for a project. Prefers the explicit `year`; a few
 * older entries only carry a `period` range ("2018 - 2023"), so falls back to
 * the last 4-digit year found there. Entries with neither sort last rather
 * than crowding the top of a "latest first" list.
 */
function resolveProjectSortYear(project: ProjectDocument) {
  if (project.year !== undefined) {
    const parsed = Number.parseInt(String(project.year), 10);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }

  if (project.period) {
    const matches = project.period.match(/\d{4}/g);
    if (matches) {
      return Number.parseInt(matches[matches.length - 1], 10);
    }
  }

  return -Infinity;
}

function sortDocuments(a: ContentDocument, b: ContentDocument) {
  if (a.kind === "project" && b.kind === "project") {
    // The research pages always show the latest publication first.
    return (
      resolveProjectSortYear(b) - resolveProjectSortYear(a) ||
      a.title.localeCompare(b.title)
    );
  }

  if (a.kind === "publication" && b.kind === "publication") {
    return b.year - a.year || a.title.localeCompare(b.title);
  }

  const aDate =
    "publishedAt" in a ? a.publishedAt : "date" in a ? a.date : "0000-01-01";
  const bDate =
    "publishedAt" in b ? b.publishedAt : "date" in b ? b.date : "0000-01-01";

  return bDate.localeCompare(aDate) || a.title.localeCompare(b.title);
}

function getRelationshipTargets(document: ContentDocument) {
  const targets = [
    ...(document.related?.projects ?? []).map((slug) => ({
      collection: "projects" as const,
      slug,
    })),
    ...(document.related?.publications ?? []).map((slug) => ({
      collection: "publications" as const,
      slug,
    })),
    ...(document.related?.notes ?? []).map((slug) => ({
      collection: "notes" as const,
      slug,
    })),
    ...(document.related?.ideas ?? []).map((slug) => ({
      collection: "ideas" as const,
      slug,
    })),
    ...(document.related?.talks ?? []).map((slug) => ({
      collection: "talks" as const,
      slug,
    })),
  ];

  if (document.kind === "publication" && document.projectSlug) {
    targets.push({ collection: "projects", slug: document.projectSlug });
  }

  return targets;
}

function validateRelationships(documents: ContentDocument[]) {
  const byCollection = new Map<CollectionName, Map<string, ContentDocument>>();
  collections.forEach((collection) => {
    byCollection.set(collection, new Map());
  });

  for (const document of documents) {
    const collectionMap = byCollection.get(document.collection);
    if (!collectionMap) {
      continue;
    }

    if (collectionMap.has(document.slug)) {
      throw new Error(
        `Duplicate slug "${document.slug}" in ${document.collection}.`,
      );
    }

    collectionMap.set(document.slug, document);
  }

  for (const document of documents) {
    for (const target of getRelationshipTargets(document)) {
      const targetDocument = byCollection
        .get(target.collection)
        ?.get(target.slug);
      if (!targetDocument) {
        throw new Error(
          `Broken relationship in ${document.path}: ${target.collection}/${target.slug} does not exist.`,
        );
      }

      if (
        !document.draft &&
        (targetDocument.draft || isScheduled(targetDocument))
      ) {
        throw new Error(
          `Published content in ${document.path} cannot link to draft or scheduled target ${target.collection}/${target.slug}.`,
        );
      }
    }
  }
}

function buildGraph(includeDrafts: boolean): ContentGraph {
  const all = collections
    .flatMap((collection) =>
      getAuthoredFiles(collection).map((fileName) =>
        toDocument(collection, fileName),
      ),
    )
    .sort(sortDocuments);

  validateRelationships(all);

  const publicDocuments = all
    .filter((document) => isPublicDocument(document, includeDrafts))
    .sort(sortDocuments);

  const byKind: Record<ContentKind, ContentDocument[]> = {
    project: [],
    publication: [],
    writing: [],
    note: [],
    idea: [],
    talk: [],
    page: [],
  } satisfies Record<ContentKind, ContentDocument[]>;

  for (const document of publicDocuments) {
    byKind[document.kind].push(document);
  }

  return {
    all,
    byKind,
    bySlug: new Map(
      publicDocuments.map((document) => [
        `${document.kind}:${document.slug}`,
        document,
      ]),
    ),
    public: publicDocuments,
  };
}

function shouldIncludeDrafts() {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.NEXT_PUBLIC_ENABLE_DRAFT_CONTENT === "true"
  );
}

export function getContentGraph(options?: { includeDrafts?: boolean }) {
  const includeDrafts = options?.includeDrafts ?? shouldIncludeDrafts();
  const cacheKey = includeDrafts ? "drafts" : "public";
  const cached = graphCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const graph = buildGraph(includeDrafts);
  graphCache.set(cacheKey, graph);
  return graph;
}

export function getEntries<TKind extends ContentKind>(
  kind: TKind,
  options?: { includeDrafts?: boolean },
) {
  return getContentGraph(options).byKind[kind].filter(
    (document): document is Extract<ContentDocument, { kind: TKind }> =>
      document.kind === kind,
  );
}

export function getEntryBySlug<TKind extends ContentKind>(
  kind: TKind,
  slug: string,
  options?: { includeDrafts?: boolean },
) {
  const document = getContentGraph(options).bySlug.get(`${kind}:${slug}`);
  if (document?.kind === kind) {
    return document as Extract<ContentDocument, { kind: TKind }>;
  }

  return undefined;
}

export function getFeaturedEntries(
  kind: "project",
  limit?: number,
): ProjectDocument[];
export function getFeaturedEntries(
  kind: "publication",
  limit?: number,
): PublicationDocument[];
export function getFeaturedEntries(
  kind: ContentKind,
  limit?: number,
): ContentDocument[];
export function getFeaturedEntries(kind: ContentKind, limit?: number) {
  const entries = getEntries(kind).filter((document) => {
    if (document.kind === "publication") {
      return document.selected;
    }

    if ("featured" in document) {
      return Boolean(document.featured);
    }

    return false;
  });

  return limit ? entries.slice(0, limit) : entries;
}

export function getRelatedContent(document: ContentDocument) {
  const graph = getContentGraph();
  return getRelationshipTargets(document)
    .map((target) =>
      graph.bySlug.get(
        `${collectionDefinitions[target.collection].kind}:${target.slug}`,
      ),
    )
    .filter((target): target is ContentDocument => Boolean(target));
}

export function getTagIndex() {
  const index = new Map<string, ContentDocument[]>();
  for (const document of getContentGraph().public) {
    for (const tag of document.tags) {
      index.set(tag, [...(index.get(tag) ?? []), document]);
    }
  }

  return index;
}

export function getRouteForDocument(document: ContentDocument) {
  switch (document.kind) {
    case "project":
      return `/projects/${document.slug}`;
    case "publication":
      return `/publications/#${document.slug}`;
    case "writing":
      return `/writing/${document.slug}`;
    case "note":
      return `/notes/${document.slug}`;
    case "idea":
      return `/ideas/${document.slug}`;
    case "talk":
      return `/talks/${document.slug}`;
    case "page":
      return document.slug === "home" ? "/" : `/${document.slug}`;
  }
}

export function getCollectionForKind(kind: ContentKind) {
  return kindToCollection[kind];
}

export function getAuthoredFileExtension(
  collection: CollectionName,
  slug: string,
) {
  const files = getAuthoredFiles(collection);
  const match = files.find(
    (file) => file.replace(authoredContentPattern, "") === slug,
  );

  if (!match) {
    return undefined;
  }

  return match.endsWith(".mdx") ? "mdx" : "md";
}

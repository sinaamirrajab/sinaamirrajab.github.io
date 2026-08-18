export type ContentKind =
  "project" | "publication" | "writing" | "note" | "idea" | "talk" | "page";

export type CollectionName =
  | "projects"
  | "publications"
  | "writing"
  | "notes"
  | "ideas"
  | "talks"
  | "pages";

export type ProjectStatus = "active" | "completed" | "concept" | "archived";
export type PublicationType =
  "journal" | "conference" | "preprint" | "thesis" | "chapter" | "other";
export type PublicationStatus =
  "published" | "accepted" | "preprint" | "in-review";
export type NoteType =
  | "til"
  | "paper-note"
  | "experiment"
  | "implementation"
  | "observation"
  | "dataset"
  | "conference";
export type IdeaMaturity = "seed" | "growing" | "evergreen" | "archived";
export type TalkType =
  "conference" | "seminar" | "lecture" | "workshop" | "podcast";

export type Heading = {
  id: string;
  depth: number;
  text: string;
};

export type MediaAsset = {
  alt?: string;
  caption?: string;
  poster?: string;
  src: string;
  type: "image" | "video";
};

export type RelatedContent = {
  projects?: string[];
  publications?: string[];
  notes?: string[];
  ideas?: string[];
  talks?: string[];
};

export type ContentBase = {
  body: string;
  collection: CollectionName;
  draft: boolean;
  headings: Heading[];
  kind: ContentKind;
  path: string;
  readingTime?: string;
  related?: RelatedContent;
  slug: string;
  tags: string[];
  title: string;
};

export type ProjectDocument = ContentBase & {
  collection: "projects";
  kind: "project";
  summary: string;
  problem?: string;
  contribution?: string;
  year?: number | string;
  period?: string;
  status: ProjectStatus;
  featured: boolean;
  order?: number;
  image?: string;
  media?: MediaAsset;
  paperUrl?: string;
  codeUrl?: string;
  demoUrl?: string;
  datasetUrl?: string;
  collaborators?: string[];
};

export type PublicationDocument = ContentBase & {
  collection: "publications";
  kind: "publication";
  authors: string[];
  year: number;
  venue?: string;
  publicationType: PublicationType;
  status?: PublicationStatus;
  selected: boolean;
  doi?: string;
  paperUrl?: string;
  codeUrl?: string;
  projectSlug?: string;
  significance?: string;
};

export type ArticleDocument = ContentBase & {
  description: string;
  publishedAt: string;
  updatedAt?: string;
  cover?: string;
  featured?: boolean;
  media?: MediaAsset;
};

export type WritingDocument = ArticleDocument & {
  collection: "writing";
  kind: "writing";
};

export type NoteDocument = ArticleDocument & {
  collection: "notes";
  kind: "note";
  noteType: NoteType;
};

export type IdeaDocument = ArticleDocument & {
  collection: "ideas";
  kind: "idea";
  maturity: IdeaMaturity;
  openQuestions?: string[];
};

export type TalkDocument = ContentBase & {
  collection: "talks";
  kind: "talk";
  event: string;
  date: string;
  location?: string;
  talkType: TalkType;
  slidesUrl?: string;
  videoUrl?: string;
  description?: string;
};

export type PageDocument = ContentBase & {
  collection: "pages";
  kind: "page";
  description: string;
  pageType: "research" | "about" | "cv" | "other";
};

export type ContentDocument =
  | ProjectDocument
  | PublicationDocument
  | WritingDocument
  | NoteDocument
  | IdeaDocument
  | TalkDocument
  | PageDocument;

export type ContentGraph = {
  all: ContentDocument[];
  public: ContentDocument[];
  byKind: Record<ContentKind, ContentDocument[]>;
  bySlug: Map<string, ContentDocument>;
};

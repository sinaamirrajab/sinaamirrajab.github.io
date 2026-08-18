import type {
  IdeaDocument,
  NoteDocument,
  TalkDocument,
  WritingDocument,
} from "@/lib/content/types";
import { formatDate } from "@/lib/utils/dates";

export function ArticleHeader({
  document,
}: {
  document: WritingDocument | NoteDocument | IdeaDocument | TalkDocument;
}) {
  const date = "publishedAt" in document ? document.publishedAt : document.date;
  return (
    <header className="border-border mb-6 border-b pb-5">
      <p className="text-accent font-mono text-sm uppercase">{document.kind}</p>
      <h1 className="text-text mt-3 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
        {document.title}
      </h1>
      {"description" in document && document.description ? (
        <p className="text-text-muted mt-3 max-w-3xl text-lg leading-7">
          {document.description}
        </p>
      ) : null}
      <div className="text-text-muted mt-4 flex flex-wrap items-center gap-3 text-sm">
        <time dateTime={date}>{formatDate(date)}</time>
        {"readingTime" in document && document.readingTime ? (
          <span>{document.readingTime}</span>
        ) : null}
      </div>
    </header>
  );
}

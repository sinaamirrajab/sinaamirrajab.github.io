import { Button } from "@/components/ui/Button";
import type { PublicationDocument } from "@/lib/content/types";

export function PublicationList({
  publications,
}: {
  publications: PublicationDocument[];
}) {
  if (publications.length === 0) {
    return (
      <p className="text-text-muted max-w-2xl">
        Publication metadata is intentionally empty until reviewed source
        records are supplied. Google Scholar remains the external authority for
        the full record.
      </p>
    );
  }

  return (
    <div className="grid gap-4">
      {publications.map((publication) => (
        <article
          className="border-border bg-surface border p-5"
          id={publication.slug}
          key={publication.slug}
        >
          <p className="text-accent font-mono text-xs uppercase">
            {publication.publicationType}
            {publication.status ? ` · ${publication.status}` : ""}
          </p>
          <h3 className="text-text mt-2 font-serif text-2xl">
            {publication.title}
          </h3>
          <p className="text-text-muted mt-2 text-sm">
            {publication.authors.join(", ")}
            {publication.venue ? ` · ${publication.venue}` : ""}
            {` · ${publication.year}`}
          </p>
          {publication.significance ? (
            <p className="text-text mt-3 text-sm">{publication.significance}</p>
          ) : null}
          <div className="mt-5 flex flex-wrap gap-2">
            {publication.paperUrl ? (
              <Button href={publication.paperUrl} variant="secondary">
                Paper
              </Button>
            ) : null}
            {publication.codeUrl ? (
              <Button href={publication.codeUrl} variant="ghost">
                Code
              </Button>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { getSearchRecords } from "@/lib/search/records";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Search",
  description: "Search and browse my published projects, writing, and notes.",
  alternates: { canonical: absoluteUrl("/search") },
};

export default function SearchPage() {
  const records = getSearchRecords();

  return (
    <>
      <PageHeader
        eyebrow="Search 🔎"
        title="Search my published projects, writing, and notes."
        description="The command dialog lazy-loads Pagefind after export. This page also stays browseable without JavaScript."
      />
      <Container className="pb-10">
        <div className="grid gap-4">
          {records.map((record) => (
            <article
              className="border-border bg-surface border p-5"
              key={`${record.type}-${record.url}`}
            >
              <p className="text-accent font-mono text-xs uppercase">
                {record.type}
              </p>
              <h2 className="text-text mt-2 font-serif text-2xl">
                <a href={record.url}>{record.title}</a>
              </h2>
              <p className="text-text-muted mt-2 text-sm">{record.excerpt}</p>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}

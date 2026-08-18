import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/content/ArticleHeader";
import { MdxRenderer } from "@/components/content/MdxRenderer";
import { RelatedContent } from "@/components/content/RelatedContent";
import { TableOfContents } from "@/components/content/TableOfContents";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/layout/Prose";
import { getEntries, getEntryBySlug } from "@/lib/content/loader";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;
export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const publicEntries = getEntries("writing");
  const routeEntries =
    publicEntries.length > 0
      ? publicEntries
      : getEntries("writing", { includeDrafts: true });
  return routeEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug("writing", slug);
  return entry
    ? {
        title: entry.title,
        description: entry.description,
        alternates: { canonical: absoluteUrl(`/writing/${entry.slug}`) },
      }
    : {};
}

export default async function WritingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug("writing", slug);

  if (!entry) {
    notFound();
  }

  return (
    <Container className="py-8 sm:py-12">
      <ArticleHeader document={entry} />
      <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
        <Prose>
          <MdxRenderer kind="writing" slug={entry.slug} />
        </Prose>
        <TableOfContents headings={entry.headings} />
      </div>
      <RelatedContent document={entry} />
    </Container>
  );
}

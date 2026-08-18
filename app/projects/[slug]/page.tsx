import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MediaPreview } from "@/components/content/Media";
import { MdxRenderer } from "@/components/content/MdxRenderer";
import { RelatedContent } from "@/components/content/RelatedContent";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/layout/Prose";
import { ProjectGlyph } from "@/components/project/ProjectGlyph";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getEntries, getEntryBySlug } from "@/lib/content/loader";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;
export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return getEntries("project").map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getEntryBySlug("project", slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: absoluteUrl(`/projects/${project.slug}`) },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getEntryBySlug("project", slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="text-text-muted mb-5 text-sm">
        <Link className="hover:text-accent-strong" href="/research">
          Research & Projects
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{project.title}</span>
      </nav>
      <header className="border-border border-b pb-5">
        <div className="flex flex-wrap gap-2">
          <StatusBadge
            tone={project.status === "active" ? "success" : "neutral"}
          >
            {project.status}
          </StatusBadge>
          {project.year ? (
            <span className="text-text-muted font-mono text-xs">
              {project.year}
            </span>
          ) : null}
        </div>
        <h1 className="text-text mt-3 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-text-muted mt-3 max-w-3xl text-lg leading-7">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {project.paperUrl ? (
            <Button href={project.paperUrl} variant="secondary">
              Paper
            </Button>
          ) : null}
          {project.codeUrl ? (
            <Button href={project.codeUrl} variant="secondary">
              Code
            </Button>
          ) : null}
          {project.demoUrl ? (
            <Button href={project.demoUrl} variant="secondary">
              Demo
            </Button>
          ) : null}
          {project.datasetUrl ? (
            <Button href={project.datasetUrl} variant="secondary">
              Dataset
            </Button>
          ) : null}
        </div>
      </header>
      {project.media ? (
        <MediaPreview
          className="mt-5"
          media={project.media}
          title={project.title}
        />
      ) : (
        // No real figure for this project yet; see docs/decisions/0008.
        <div className="border-border bg-background mt-5 aspect-[16/10] overflow-hidden rounded-[var(--radius-md)] border">
          <ProjectGlyph slug={project.slug} />
        </div>
      )}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_18rem]">
        <Prose>
          <MdxRenderer kind="project" slug={project.slug} />
        </Prose>
        <aside className="space-y-6">
          {project.problem ? (
            <div className="border-border bg-surface border p-4">
              <h2 className="text-text font-serif text-2xl">Problem</h2>
              <p className="text-text-muted mt-2 text-sm">{project.problem}</p>
            </div>
          ) : null}
          {project.contribution ? (
            <div className="border-border bg-surface border p-4">
              <h2 className="text-text font-serif text-2xl">Contribution</h2>
              <p className="text-text-muted mt-2 text-sm">
                {project.contribution}
              </p>
            </div>
          ) : null}
        </aside>
      </div>
      <RelatedContent document={project} />
    </Container>
  );
}

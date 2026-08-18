import Link from "next/link";
import { MediaPreview } from "@/components/content/Media";
import { ProjectGlyph } from "@/components/project/ProjectGlyph";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { ProjectDocument } from "@/lib/content/types";

export function ProjectCard({ project }: { project: ProjectDocument }) {
  return (
    <article className="border-border bg-surface hover:border-accent group rounded-[var(--radius-md)] border p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5">
      {project.media ? (
        project.media.type === "image" ? (
          <Link
            aria-label={`Open project page for ${project.title}`}
            href={`/projects/${project.slug}`}
          >
            <MediaPreview
              className="mb-5"
              media={project.media}
              title={project.title}
            />
          </Link>
        ) : (
          <MediaPreview
            className="mb-5"
            media={project.media}
            title={project.title}
          />
        )
      ) : (
        /* No real figure for this project yet, so fall back to decorative art. */
        <Link
          aria-label={`Open project page for ${project.title}`}
          className="mb-5 block aspect-[16/10] overflow-hidden rounded-[var(--radius-md)]"
          href={`/projects/${project.slug}`}
        >
          <ProjectGlyph
            className="opacity-90 transition-opacity duration-200 group-hover:opacity-100"
            slug={project.slug}
          />
        </Link>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge tone={project.status === "active" ? "success" : "neutral"}>
          {project.status}
        </StatusBadge>
        {project.year ? (
          <span className="text-text-muted font-mono text-xs">
            {project.year}
          </span>
        ) : null}
      </div>
      <h3 className="text-text mt-4 font-serif text-2xl leading-tight">
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p className="text-text-muted mt-3 text-sm">{project.summary}</p>
      {project.contribution ? (
        <p className="text-text mt-3 text-sm">{project.contribution}</p>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-2">
        <Button href={`/projects/${project.slug}`} variant="secondary">
          Project page
        </Button>
        {project.paperUrl ? (
          <Button href={project.paperUrl} variant="ghost">
            Paper
          </Button>
        ) : null}
        {project.codeUrl ? (
          <Button href={project.codeUrl} variant="ghost">
            Code
          </Button>
        ) : null}
        {project.demoUrl ? (
          <Button href={project.demoUrl} variant="ghost">
            Demo
          </Button>
        ) : null}
      </div>
    </article>
  );
}

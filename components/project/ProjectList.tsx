import Link from "next/link";
import type { CSSProperties } from "react";
import type { ProjectDocument } from "@/lib/content/types";

/*
 * Deliberately minimal: date, title, one-line summary, paper/code links.
 * No status tags, no thumbnails. The title is the click target into the
 * project page, so there is no separate "Project page" link to duplicate it.
 * Shared by the home page and /research so both stay in sync.
 */
export function ProjectList({ projects }: { projects: ProjectDocument[] }) {
  return (
    <ul className="border-border border-t">
      {projects.map((project, index) => (
        <li
          className={index > 0 ? "border-border border-t" : undefined}
          data-reveal-item
          key={project.slug}
          style={{ "--reveal-index": index % 6 } as CSSProperties}
        >
          <article className="grid gap-2 py-6 sm:grid-cols-[5rem_1fr] sm:gap-6">
            <p className="text-text-muted font-mono text-sm sm:pt-1">
              {project.year ?? project.period}
            </p>
            <div>
              <h3 className="text-text font-serif text-xl tracking-tight">
                <Link
                  className="hover:text-accent-strong"
                  href={`/projects/${project.slug}`}
                >
                  {project.title}
                </Link>
              </h3>
              <p className="text-text-muted mt-2 max-w-[65ch] text-sm leading-relaxed">
                {project.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                {project.paperUrl ? (
                  <a
                    className="text-accent-strong font-semibold hover:underline"
                    href={project.paperUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Paper <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {project.codeUrl ? (
                  <a
                    className="text-accent-strong font-semibold hover:underline"
                    href={project.codeUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Code <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {project.demoUrl ? (
                  <a
                    className="text-accent-strong font-semibold hover:underline"
                    href={project.demoUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Website <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

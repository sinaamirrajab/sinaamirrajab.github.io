"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project/ProjectCard";
import type { ProjectDocument, ProjectStatus } from "@/lib/content/types";
import { cn } from "@/lib/utils/cn";

const statuses: ProjectStatus[] = [
  "active",
  "completed",
  "concept",
  "archived",
];

export function ProjectFilters({ projects }: { projects: ProjectDocument[] }) {
  const [status, setStatus] = useState<ProjectStatus | "all">("all");

  const filtered = projects.filter((project) => {
    const statusMatches = status === "all" || project.status === status;
    return statusMatches;
  });

  return (
    <div>
      <div className="border-border flex flex-wrap gap-2 border-y py-4">
        <FilterButton
          active={status === "all"}
          onClick={() => setStatus("all")}
        >
          All statuses
        </FilterButton>
        {statuses.map((statusValue) => (
          <FilterButton
            active={status === statusValue}
            key={statusValue}
            onClick={() => setStatus(statusValue)}
          >
            {statusValue}
          </FilterButton>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      className={cn(
        "rounded-[var(--radius-sm)] border px-3 py-2 text-sm capitalize transition-colors",
        active
          ? "primary-action border-accent bg-accent"
          : "border-border bg-surface text-text-muted hover:border-accent hover:text-accent-strong",
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

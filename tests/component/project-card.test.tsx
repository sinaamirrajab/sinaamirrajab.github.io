import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/project/ProjectCard";
import type { ProjectDocument } from "@/lib/content/types";

const project = {
  body: "",
  codeUrl: "https://github.com/sinaamirrajab/example",
  collection: "projects",
  draft: false,
  featured: true,
  headings: [],
  kind: "project",
  media: {
    alt: "Example project thumbnail",
    src: "/images/projects/example-project.png",
    type: "image",
  },
  paperUrl: "https://example.com/paper",
  path: "content/projects/example-project.md",
  slug: "example-project",
  status: "active",
  summary: "A source-supported example project.",
  tags: [],
  title: "Example project",
} satisfies ProjectDocument;

describe("ProjectCard", () => {
  it("links the thumbnail and renders project, paper, and code actions", () => {
    render(<ProjectCard project={project} />);

    expect(
      screen.getByRole("link", {
        name: "Open project page for Example project",
      }),
    ).toHaveAttribute("href", "/projects/example-project");
    expect(screen.getByRole("link", { name: "Project page" })).toHaveAttribute(
      "href",
      "/projects/example-project",
    );
    expect(screen.getByRole("link", { name: "Paper" })).toHaveAttribute(
      "href",
      "https://example.com/paper",
    );
    expect(screen.getByRole("link", { name: "Code" })).toHaveAttribute(
      "href",
      "https://github.com/sinaamirrajab/example",
    );
  });
});

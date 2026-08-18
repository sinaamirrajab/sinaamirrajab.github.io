import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectFilters } from "@/components/project/ProjectFilters";
import { Button } from "@/components/ui/Button";
import { getEntries } from "@/lib/content/loader";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research & Projects",
  description:
    "Project case studies across medical imaging, generative AI, LLMs, and simulation.",
  alternates: { canonical: absoluteUrl("/research") },
  robots: { follow: true, index: false },
};

export default function ProjectsPage() {
  const projects = getEntries("project");

  return (
    <div data-pagefind-ignore>
      <PageHeader
        eyebrow="Research & Projects"
        title="Projects now live with the research overview."
        description="This legacy projects archive remains available for direct links, but the main public route is Research & Projects."
      />
      <Container className="pb-10">
        <div className="mb-4">
          <Button href="/research" variant="primary">
            Open Research & Projects
          </Button>
        </div>
        <ProjectFilters projects={projects} />
      </Container>
    </div>
  );
}

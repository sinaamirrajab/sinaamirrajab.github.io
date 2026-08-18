import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectList } from "@/components/project/ProjectList";
import { getEntries } from "@/lib/content/loader";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research & Projects",
  description:
    "Research systems and case studies across generative AI, multimodal medical imaging, and clinical translation.",
  alternates: { canonical: absoluteUrl("/research") },
};

export default function ResearchPage() {
  const projects = getEntries("project");

  return (
    <>
      <PageHeader
        eyebrow="Research & Projects"
        title="I build clinically grounded AI systems for medical imaging research."
      />

      <Section className="pt-0">
        <Container>
          <ProjectList projects={projects} />
        </Container>
      </Section>
    </>
  );
}

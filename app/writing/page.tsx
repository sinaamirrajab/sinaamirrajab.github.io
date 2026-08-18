import type { Metadata } from "next";
import { WritingIndex } from "@/components/content/WritingIndex";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { getWritingArchiveEntries } from "@/lib/content/writing-archive";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Sina's first-person notes and paper summaries on AI for healthcare, oncology, cardiovascular imaging, and research practice.",
  alternates: { canonical: absoluteUrl("/writing") },
};

const paperSummaryFramework = [
  "Why",
  "What",
  "How",
  "So what",
  "But",
  "Now what",
  "Who",
];

export default function WritingPage() {
  const items = getWritingArchiveEntries();

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="My reading notes, paper maps, and research rabbit holes."
        description="Where I turn interesting AI-for-healthcare papers into short summaries I can return to later."
      />
      <Container className="pb-24">
        <section className="border-border bg-surface mb-12 rounded-[var(--radius-md)] border p-7">
          <h2 className="text-text font-serif text-2xl leading-[1.15] tracking-tight sm:text-3xl">
            A one-page memory palace for papers I do not want to lose.
          </h2>
          <div className="text-text-muted mt-4 grid max-w-[65ch] gap-3 leading-relaxed">
            <p>
              Here I collect one-page summaries of scientific papers I find
              interesting in AI for healthcare, especially work connected to
              oncology and cardiovascular applications.
            </p>
            <p>
              The topics wander a bit, in a good way, across medical image
              analysis, generative AI, simulation and synthesis for medical
              imaging, cancer imaging with CT and MRI, cardiac MRI,
              cardiovascular disease prediction, foundation models, multimodal
              healthcare data integration and alignment, self-supervised
              learning, LLMs, agentic AI for radiology, and synthetic-data
              generation.
            </p>
          </div>
          <div className="mt-6">
            <p className="text-text font-semibold">My paper-summary frame:</p>
            <ol className="mt-3 flex flex-wrap gap-2">
              {paperSummaryFramework.map((step) => (
                <li
                  className="border-border bg-background text-text-muted rounded-[var(--radius-sm)] border px-3 py-1 text-sm"
                  key={step}
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>
        <WritingIndex
          emptyMessage="Coming soon..."
          items={items}
        />
      </Container>
    </>
  );
}

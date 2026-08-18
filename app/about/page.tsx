import type { Metadata } from "next";
import { MdxRenderer } from "@/components/content/MdxRenderer";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Prose } from "@/components/layout/Prose";
import { Button } from "@/components/ui/Button";
import { IconLink } from "@/components/ui/IconLink";
import { getCvPdfHref, hasReviewedCvPdf } from "@/lib/cv";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About/CV",
  description: "Biography, contact links, and CV download for Sina Amirrajab.",
  alternates: { canonical: absoluteUrl("/about") },
};

export default function AboutPage() {
  const hasPdf = hasReviewedCvPdf();

  return (
    <>
      <PageHeader
        eyebrow="About/CV 👋"
        title="I build medical AI research systems with engineering roots and clinical curiosity."
        description="A more personal biography and contact links."
      />
      <Container className="grid gap-6 pb-10 lg:grid-cols-[1fr_20rem]">
        <div>
          <Prose>
            <MdxRenderer kind="page" slug="about" />
          </Prose>
        </div>

        <aside className="space-y-4">
          <div className="border-border bg-surface border p-4">
            <h2 className="text-text font-serif text-2xl">Contact</h2>
            <p className="text-text-muted mt-2 text-sm">
              If you are thinking about medical imaging, multimodal AI, or
              clinically grounded generative models, I am happy to compare
              notes.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteConfig.social.map((link) => (
                <IconLink key={link.kind} link={link} />
              ))}
            </div>
          </div>
          {hasPdf ? (
            <Button href={getCvPdfHref()} variant="primary">
              Download PDF CV
            </Button>
          ) : null}
        </aside>
      </Container>
    </>
  );
}

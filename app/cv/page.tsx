import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import {
  type CertificateImageAsset,
  getCertificateImageAssets,
} from "@/lib/assets";
import { getEntries } from "@/lib/content/loader";
import { type CvEntry, cvData, getCvPdfHref, hasReviewedCvPdf } from "@/lib/cv";
import { absoluteUrl, siteConfig, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "CV",
  description: "Readable web CV for Sina Amirrajab.",
  alternates: { canonical: absoluteUrl("/cv") },
  robots: { follow: true, index: false },
};

export default function CvPage() {
  const hasPdf = hasReviewedCvPdf();
  const certificateImages = getCertificateImageAssets();
  const projects = getEntries("project");
  const publications = getEntries("publication");

  return (
    <div data-pagefind-ignore>
      <PageHeader
        eyebrow="CV"
        title="Sina Amirrajab"
        description={cvData.summary}
      />
      <Container className="pb-10">
        <div className="screen-only mb-4 flex flex-wrap gap-3">
          {hasPdf ? (
            <Button href={getCvPdfHref()} variant="primary">
              Download PDF
            </Button>
          ) : null}
          <Button
            href={`mailto:${siteConfig.emails.professional}`}
            variant="secondary"
          >
            Contact
          </Button>
          <Button href={cvData.source.href} variant="ghost">
            Source CV
          </Button>
        </div>

        <div className="grid gap-5">
          <CvSection title="Summary">
            <p>{cvData.currentWork}</p>
            <p className="mt-3 text-sm">
              Source:{" "}
              <a
                className="text-accent-strong hover:underline"
                href={cvData.source.href}
              >
                {cvData.source.label}
              </a>
              , extracted {cvData.source.extractedAt}.
            </p>
          </CvSection>

          <CvSection title="Experience">
            <CvEntryList entries={cvData.experience} />
          </CvSection>

          <CvSection title="Education">
            <CvEntryList entries={cvData.education} />
          </CvSection>

          <CvSection title="Teaching">
            <CvEntryList entries={cvData.teaching} />
          </CvSection>

          <CvSection title="Selected Projects">
            <ul className="grid gap-3">
              {projects.map((project) => (
                <li key={project.slug}>
                  <a
                    className="text-accent-strong font-semibold hover:underline"
                    href={`/projects/${project.slug}`}
                  >
                    {project.title}
                  </a>
                  <p className="text-text-muted text-sm">{project.summary}</p>
                </li>
              ))}
            </ul>
          </CvSection>

          <CvSection title="Publications">
            {publications.length > 0 ? (
              <ul className="grid gap-3">
                {publications.map((publication) => (
                  <li key={publication.slug}>{publication.title}</li>
                ))}
              </ul>
            ) : (
              <p>
                Reviewed publication metadata is pending. Google Scholar remains
                the external authority for the full publication record.
              </p>
            )}
          </CvSection>

          <CvSection title="Skills">
            <div className="grid gap-4 md:grid-cols-2">
              {cvData.skillGroups.map((group) => (
                <section key={group.title}>
                  <h3 className="text-text font-serif text-2xl">
                    {group.title}
                  </h3>
                  <ul className="mt-3 grid gap-2 text-sm">
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </CvSection>

          <CvSection title="Research interests">
            <ul className="grid gap-2 sm:grid-cols-2">
              {cvData.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </CvSection>

          <CvSection title="Contact">
            <p>{siteConfig.emails.professional}</p>
            <p>{siteConfig.emails.personal}</p>
          </CvSection>

          <AwardsAndCertificatesSection images={certificateImages} />
        </div>
      </Container>
    </div>
  );
}

function CvSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="print-break-avoid border-border border-t pt-4">
      <h2 className="text-text font-serif text-2xl">{title}</h2>
      <div className="text-text-muted mt-2">{children}</div>
    </section>
  );
}

function CvEntryList({
  compact = false,
  entries,
}: {
  compact?: boolean;
  entries: readonly CvEntry[];
}) {
  return (
    <ol className="grid gap-3">
      {entries.map((entry) => (
        <li
          className="border-border grid gap-1 border-l pl-4 sm:grid-cols-[9rem_1fr]"
          key={`${entry.period}-${entry.title}`}
        >
          <span className="text-text-muted font-mono text-xs tracking-[0.16em] uppercase">
            {entry.period}
          </span>
          <div>
            <h3 className="text-text font-serif text-2xl leading-tight">
              {entry.title}
            </h3>
            {entry.institution ? (
              <p className="text-text-muted mt-1 text-sm">
                {entry.institution}
                {entry.location ? ` - ${entry.location}` : ""}
              </p>
            ) : null}
            {entry.details && !compact ? (
              <ul className="mt-2 grid gap-1 text-sm">
                {entry.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : null}
            {entry.links ? (
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                {entry.links.map((link) => (
                  <a
                    className="text-accent-strong hover:underline"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

function AwardsAndCertificatesSection({
  images,
}: {
  images: CertificateImageAsset[];
}) {
  const showDevelopmentHint =
    images.length === 0 && process.env.NODE_ENV !== "production";

  return (
    <CvSection title="Awards and certificates">
      <CvEntryList entries={cvData.awards} compact />
      {images.length > 0 ? (
        <div className="screen-only mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <figure
              className="border-border bg-surface overflow-hidden border"
              key={image.src}
            >
              <div className="bg-background relative aspect-[4/3]">
                <Image
                  alt={image.alt}
                  className="object-contain"
                  fill
                  sizes="(min-width: 1024px) 20rem, (min-width: 640px) 50vw, 100vw"
                  src={withBasePath(image.src)}
                />
              </div>
              <figcaption className="text-text-muted border-border border-t px-3 py-2 text-xs">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
      {showDevelopmentHint ? (
        <p className="screen-only text-text-muted mt-4 text-sm">
          Add reviewed award or certificate images to{" "}
          <code>public/images/certificates/</code> to show them here.
        </p>
      ) : null}
    </CvSection>
  );
}

import Image from "next/image";
import type { CSSProperties } from "react";
import { IdentityTypewriter } from "@/components/animation/IdentityTypewriter";
import { ResearchField } from "@/components/animation/ResearchField";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProjectGlyph } from "@/components/project/ProjectGlyph";
import { ProjectList } from "@/components/project/ProjectList";
import { Button } from "@/components/ui/Button";
import { IconLink } from "@/components/ui/IconLink";
import { getProfileImagePath } from "@/lib/assets";
import { getFeaturedEntries } from "@/lib/content/loader";
import { siteConfig, withBasePath } from "@/lib/site";

const focusAreas = [
  {
    title: "Foundation and multimodal models",
    emoji: "🫁 🫀 🧠",
    body: "Vision-language models that read an image and a report together, because clinicians never look at either in isolation.",
  },
  {
    title: "Generative modelling and synthetic data",
    emoji: "🤖",
    body: "Latent diffusion for medical images, and the harder question of when synthetic data actually helps.",
  },
  {
    title: "Clinically grounded decision support",
    emoji: "🩺 🏥",
    body: "Diagnosis, risk stratification, and treatment response, evaluated the way a clinical question would be.",
  },
];

export default function HomePage() {
  const selectedProjects = getFeaturedEntries("project");
  const profileImagePath = getProfileImagePath();

  return (
    <>
      {/* Split hero: portrait against the animated field, copy beside it. */}
      <section className="border-border relative overflow-hidden border-b">
        <div className="hero-grid" />
        <ResearchField />
        <Container className="relative z-10 pt-8 pb-10 sm:pt-12 sm:pb-12">
          <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">
            {profileImagePath ? (
              <figure className="border-border bg-surface size-44 shrink-0 overflow-hidden rounded-full border p-1.5 shadow-[var(--shadow-soft)] sm:size-56 lg:size-64">
                <div className="bg-background relative size-full overflow-hidden rounded-full">
                  <Image
                    alt="Portrait of Sina Amirrajab"
                    className="object-cover"
                    fill
                    priority
                    sizes="(min-width: 1024px) 16rem, (min-width: 640px) 14rem, 11rem"
                    src={withBasePath(profileImagePath)}
                  />
                </div>
              </figure>
            ) : null}
            <div className="max-w-2xl">
              <IdentityTypewriter />
              <p className="text-text-muted mt-3 text-lg leading-relaxed">
                {siteConfig.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/research" variant="primary">
                  Research & Projects
                </Button>
                <Button href="/writing" variant="secondary">
                  Writing
                </Button>
                <Button href="/about" variant="secondary">
                  About/CV
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {siteConfig.social.map((link) => (
                  <IconLink key={link.kind} link={link} />
                ))}
              </div>
              <p className="text-text mt-5 max-w-lg text-base leading-relaxed">
                Working on medical imaging, multimodal AI, or clinically
                grounded generative models?{" "}
                <a
                  className="text-accent-strong underline decoration-2 underline-offset-4 hover:text-accent"
                  href={`mailto:${siteConfig.emails.professional}`}
                >
                  Let&apos;s grab a coffee ☕ together.
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Bento, exactly three cells in a 2fr/1fr rhythm. */}
      <Section>
        <Container>
          <div data-reveal>
            <h2 className="text-text max-w-3xl font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              I build AI around medical images, clinical text, and the messy
              questions between them.
            </h2>
            <p className="text-text-muted mt-5 max-w-[65ch] text-lg leading-relaxed">
              My work sits where engineering, radiology, and clinical research
              overlap. Cardiac MRI, cancer CT and MR imaging, generative models,
              and the careful translation from an experiment into something a
              clinician would trust.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <article
              className="border-border bg-accent-soft relative overflow-hidden rounded-[var(--radius-md)] border p-7 md:col-span-2 md:row-span-2"
              data-reveal-item
              style={{ "--reveal-index": 0 } as CSSProperties}
            >
              <ProjectGlyph
                className="absolute inset-0 rounded-none opacity-45"
                slug="foundation-multimodal"
              />
              <div className="relative">
                <h3 className="text-text font-serif text-2xl tracking-tight">
                  <span aria-hidden="true">{focusAreas[0].emoji} </span>
                  {focusAreas[0].title}
                </h3>
                <p className="text-text mt-4 max-w-md leading-relaxed">
                  {focusAreas[0].body}
                </p>
              </div>
            </article>
            {focusAreas.slice(1).map((focus, index) => (
              <article
                className="border-border bg-surface rounded-[var(--radius-md)] border p-6"
                data-reveal-item
                key={focus.title}
                style={{ "--reveal-index": index + 1 } as CSSProperties}
              >
                <h3 className="text-text font-serif text-xl tracking-tight">
                  <span aria-hidden="true">{focus.emoji} </span>
                  {focus.title}
                </h3>
                <p className="text-text-muted mt-3 text-sm leading-relaxed">
                  {focus.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Plain list: date, title linking to the project page, short summary, paper/code links. */}
      <Section>
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-text max-w-xl font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl">
              Selected Research Output
            </h2>
            <Button href="/research" variant="secondary">
              View research & projects
            </Button>
          </div>
          <div className="mt-8">
            <ProjectList projects={selectedProjects} />
          </div>
        </Container>
      </Section>
    </>
  );
}

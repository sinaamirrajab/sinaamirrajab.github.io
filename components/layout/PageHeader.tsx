import { Container } from "@/components/layout/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Container className="py-6 sm:py-8">
      {eyebrow ? (
        <p className="text-accent font-mono text-sm tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-text mt-3 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="text-text-muted mt-4 max-w-3xl text-lg leading-7">
          {description}
        </p>
      ) : null}
    </Container>
  );
}

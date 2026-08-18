import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-accent font-mono text-sm uppercase">404</p>
      <h1 className="text-text mt-4 font-serif text-5xl">Page not found</h1>
      <p className="text-text-muted mt-5 max-w-2xl">
        This route is not part of the published research garden.
      </p>
      <Link
        className="text-accent-strong mt-8 inline-flex hover:underline"
        href="/"
      >
        Return home
      </Link>
    </Container>
  );
}

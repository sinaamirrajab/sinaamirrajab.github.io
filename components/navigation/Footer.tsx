import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { IconLink } from "@/components/ui/IconLink";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer
      className="screen-only border-border bg-surface/50 border-t py-10"
      data-pagefind-ignore
    >
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-text font-serif text-2xl">{siteConfig.name}</p>
          <p className="text-text-muted mt-3 max-w-xl text-sm">
            AI and Generative AI research for radiology, medical imaging, and
            clinical translation.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {siteConfig.social.map((link) => (
            <IconLink key={link.kind} link={link} />
          ))}
        </div>
        <nav aria-label="Footer" className="text-text-muted grid gap-2 text-sm">
          <Link className="hover:text-accent-strong" href="/feed.xml">
            RSS
          </Link>
          <Link className="hover:text-accent-strong" href="/sitemap.xml">
            Sitemap
          </Link>
          <Link className="hover:text-accent-strong" href="/search">
            Search
          </Link>
        </nav>
      </Container>
    </footer>
  );
}

import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/navigation/Footer";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { ThemeProvider } from "@/components/navigation/ThemeProvider";
import { getProfileImagePath } from "@/lib/assets";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";
import "katex/dist/katex.min.css";

/*
 * Both faces are downloaded at build time and served from our own origin under
 * /_next/static/media, so the static export makes no external font requests.
 * See docs/decisions/0007-display-typeface.md.
 */
const displayFont = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "700"],
});

const bodyFont = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: {
    default: `${siteConfig.name} - Research & Projects`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: absoluteUrl("/"),
    types: {
      "application/rss+xml": absoluteUrl("/feed.xml"),
    },
  },
  openGraph: {
    description: siteConfig.description,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Research & Projects`,
    type: "website",
    url: absoluteUrl("/"),
  },
  twitter: {
    card: "summary",
    creator: "@SiNa_AmirrajaB",
    description: siteConfig.description,
    title: `${siteConfig.name} - Research & Projects`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profileImagePath = getProfileImagePath();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    email: siteConfig.emails.professional,
    ...(profileImagePath
      ? { image: absoluteUrl(profileImagePath) }
      : undefined),
    worksFor: {
      "@type": "Organization",
      name: "Maastricht University",
    },
    sameAs: siteConfig.social
      .filter((link) => link.href.startsWith("http"))
      .map((link) => link.href),
    url: siteConfig.origin,
  };

  return (
    <html
      className={`${displayFont.variable} ${bodyFont.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <a
            className="skip-link bg-accent rounded-[var(--radius-sm)] px-4 py-2 text-white"
            href="#main-content"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main data-pagefind-body id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        {/*
         * A plain server-rendered tag, not next/script: next/script defaults
         * to strategy="afterInteractive", which on a static export means the
         * tag is only injected client-side after hydration and is absent
         * from the HTML crawlers actually fetch. This must be real markup in
         * the initial response for search engines to read it reliably.
         */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}

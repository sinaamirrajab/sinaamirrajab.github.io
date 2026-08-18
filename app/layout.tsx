import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/navigation/Footer";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { ThemeProvider } from "@/components/navigation/ThemeProvider";
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
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    email: siteConfig.emails.professional,
    jobTitle: siteConfig.title,
    name: siteConfig.name,
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
        <Script
          id="person-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}

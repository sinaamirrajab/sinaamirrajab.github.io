import { Feed } from "feed";
import { getEntries, getRouteForDocument } from "@/lib/content/loader";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const feed = new Feed({
    copyright: `Copyright ${new Date().getUTCFullYear()} ${siteConfig.name}`,
    description: "My writing, notes, and paper summaries.",
    id: siteConfig.origin,
    language: "en",
    link: siteConfig.origin,
    title: `${siteConfig.name} - Writing and notes`,
  });

  [...getEntries("writing"), ...getEntries("note")].forEach((entry) => {
    feed.addItem({
      content: entry.body,
      date: new Date(`${entry.publishedAt}T00:00:00.000Z`),
      description: entry.description,
      id: absoluteUrl(getRouteForDocument(entry)),
      link: absoluteUrl(getRouteForDocument(entry)),
      title: entry.title,
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

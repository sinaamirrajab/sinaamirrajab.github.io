import type { MetadataRoute } from "next";
import { getContentGraph, getRouteForDocument } from "@/lib/content/loader";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const fixedRoutes = ["/", "/research", "/writing", "/about", "/search"];

export default function sitemap(): MetadataRoute.Sitemap {
  const documentRoutes = getContentGraph()
    .public.filter((document) => {
      if (
        document.kind === "project" ||
        document.kind === "writing" ||
        document.kind === "note"
      ) {
        return true;
      }

      return (
        document.kind === "page" &&
        ["about", "research"].includes(document.slug)
      );
    })
    .map(getRouteForDocument)
    .filter((route) => !route.includes("#"));
  const routes = Array.from(new Set([...fixedRoutes, ...documentRoutes]));

  return routes.map((route) => ({
    changeFrequency: route === "/" ? "weekly" : "monthly",
    lastModified: new Date(),
    priority: route === "/" ? 1 : 0.7,
    url: absoluteUrl(route),
  }));
}

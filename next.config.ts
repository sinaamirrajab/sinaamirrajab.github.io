import createMDX from "@next/mdx";
import type { NextConfig } from "next";

function resolveBasePath() {
  if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }

  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) {
    return "";
  }

  const [owner, repo] = repository.split("/");
  if (!owner || !repo || repo === `${owner}.github.io`) {
    return "";
  }

  return `/${repo}`;
}

const basePath = resolveBasePath();

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-gfm", "remark-math"],
    rehypePlugins: [
      "rehype-katex",
      "rehype-slug",
      [
        "rehype-autolink-headings",
        {
          behavior: "wrap",
          properties: {
            className: ["heading-anchor"],
            ariaLabel: "Link to this section",
          },
        },
      ],
      [
        "rehype-pretty-code",
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
        },
      ],
    ],
  },
});

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  trailingSlash: true,
};

export default withMDX(nextConfig);

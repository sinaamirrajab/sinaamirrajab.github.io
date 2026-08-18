import type { MDXComponents } from "mdx/types";
import {
  Callout,
  Figure,
  MarkdownImage,
  Video,
} from "@/components/content/MDXComponents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Figure,
    Video,
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        rel={href?.startsWith("http") ? "noreferrer" : undefined}
        target={href?.startsWith("http") ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    ),
    figcaption: ({ children, ...props }) => (
      <figcaption className="text-text-muted mt-2 text-sm" {...props}>
        {children}
      </figcaption>
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto">
        <table {...props}>{children}</table>
      </div>
    ),
    img: MarkdownImage,
    ...components,
  };
}

import type { ReactNode } from "react";
export { MarkdownImage, Video } from "@/components/content/Media";

export function Callout({
  children,
  title = "Note",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <aside className="border-accent bg-surface my-6 border-l-4 p-4">
      <p className="text-text font-semibold">{title}</p>
      <div className="text-text-muted mt-2">{children}</div>
    </aside>
  );
}

export function Figure({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <figure className="my-8">
      {children}
      {caption ? (
        <figcaption className="text-text-muted mt-3 text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

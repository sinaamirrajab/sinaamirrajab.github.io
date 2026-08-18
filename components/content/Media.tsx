import Image from "next/image";
import type { ImgHTMLAttributes } from "react";
import type { MediaAsset } from "@/lib/content/types";
import { withBasePath } from "@/lib/site";
import { cn } from "@/lib/utils/cn";

function assetSrc(src: string) {
  if (/^https?:\/\//.test(src)) {
    return src;
  }

  return withBasePath(src);
}

export function MediaPreview({
  className,
  media,
  priority = false,
  title,
}: {
  className?: string;
  media?: MediaAsset;
  priority?: boolean;
  title: string;
}) {
  if (!media) {
    return null;
  }

  return (
    <figure
      className={cn(
        "border-border bg-background overflow-hidden rounded-[var(--radius-md)] border",
        className,
      )}
    >
      {media.type === "image" ? (
        <div className="relative aspect-[16/10]">
          <Image
            alt={media.alt ?? ""}
            className="object-cover"
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, 100vw"
            src={assetSrc(media.src)}
          />
        </div>
      ) : (
        <video
          aria-label={media.alt ?? title}
          className="bg-background aspect-[16/10] w-full object-cover"
          controls
          playsInline
          poster={media.poster ? assetSrc(media.poster) : undefined}
          preload="metadata"
        >
          <source src={assetSrc(media.src)} />
        </video>
      )}
      {media.caption ? (
        <figcaption className="border-border text-text-muted border-t px-3 py-2 text-xs">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function MarkdownImage({
  alt = "",
  src,
}: ImgHTMLAttributes<HTMLImageElement>) {
  if (!src || typeof src !== "string") {
    return null;
  }

  return (
    <figure className="not-prose border-border bg-surface my-8 overflow-hidden rounded-[var(--radius-md)] border">
      <div className="relative aspect-[16/10]">
        <Image
          alt={alt}
          className="object-contain"
          fill
          sizes="(min-width: 768px) 720px, 100vw"
          src={assetSrc(src)}
        />
      </div>
    </figure>
  );
}

export function Video({
  caption,
  poster,
  src,
  title = "Embedded video",
}: {
  caption?: string;
  poster?: string;
  src: string;
  title?: string;
}) {
  return (
    <figure className="not-prose border-border bg-surface my-8 overflow-hidden rounded-[var(--radius-md)] border">
      <video
        aria-label={title}
        className="bg-background aspect-video w-full"
        controls
        playsInline
        poster={poster ? assetSrc(poster) : undefined}
        preload="metadata"
      >
        <source src={assetSrc(src)} />
      </video>
      {caption ? (
        <figcaption className="border-border text-text-muted border-t px-4 py-3 text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

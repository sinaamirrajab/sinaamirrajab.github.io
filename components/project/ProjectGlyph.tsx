import { cn } from "@/lib/utils/cn";

/*
 * Decorative placeholder art for projects that have no real figure yet.
 *
 * This is NOT data and must never be captioned or presented as a result. It is
 * a deterministic pattern derived from the project slug, drawn in the same
 * visual grammar as components/animation/ResearchField.tsx so cards read as one
 * system. The motif is a contour field with a sparse sampling lattice, chosen
 * because it echoes segmentation contours and k-space sampling without
 * imitating any specific output.
 *
 * Replacement path: drop a real figure at public/images/projects/<slug>.webp
 * and lib/content/loader.ts attaches it as `media`, at which point callers
 * render MediaPreview instead of this. See docs/decisions/0008.
 */

const VIEWBOX_WIDTH = 640;
const VIEWBOX_HEIGHT = 400;
const CONTOUR_COUNT = 5;
const NODE_COUNT = 7;

/**
 * FNV-1a. Any stable string hash works here; the requirement is only that a
 * given slug produces the same art on every build, so the pages stay
 * byte-identical between deploys.
 */
function hashSlug(slug: string) {
  let hash = 0x811c9dc5;

  for (let index = 0; index < slug.length; index += 1) {
    hash ^= slug.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }

  return hash >>> 0;
}

/** Deterministic 0..1 sequence seeded from the slug hash. */
function createSequence(seed: number) {
  let state = seed || 1;

  return () => {
    state ^= state << 13;
    state >>>= 0;
    state ^= state >> 17;
    state ^= state << 5;
    state >>>= 0;
    return state / 0xffffffff;
  };
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}

/**
 * One contour ring, built as a closed cubic path whose radius wobbles by a
 * fixed amount per vertex. Higher `step` values push the ring outward.
 */
function buildContour(
  next: () => number,
  centerX: number,
  centerY: number,
  radiusX: number,
  radiusY: number,
) {
  const vertices = 10;
  const points: string[] = [];

  for (let index = 0; index < vertices; index += 1) {
    const angle = (index / vertices) * Math.PI * 2;
    const wobble = 0.78 + next() * 0.44;
    const x = centerX + Math.cos(angle) * radiusX * wobble;
    const y = centerY + Math.sin(angle) * radiusY * wobble;
    points.push(`${round(x)} ${round(y)}`);
  }

  return `M${points[0]} ${points
    .slice(1)
    .map((point) => `L${point}`)
    .join(" ")} Z`;
}

export function ProjectGlyph({
  className,
  slug,
}: {
  className?: string;
  slug: string;
}) {
  const seed = hashSlug(slug);
  const next = createSequence(seed);

  const centerX = VIEWBOX_WIDTH * (0.34 + next() * 0.3);
  const centerY = VIEWBOX_HEIGHT * (0.36 + next() * 0.26);
  const tilt = -22 + next() * 44;

  const contours = Array.from({ length: CONTOUR_COUNT }, (_, index) => {
    const step = (index + 1) / CONTOUR_COUNT;
    return {
      d: buildContour(
        next,
        centerX,
        centerY,
        VIEWBOX_WIDTH * 0.13 * step * 1.55,
        VIEWBOX_HEIGHT * 0.15 * step * 1.5,
      ),
      opacity: round(0.42 - index * 0.055),
    };
  });

  const nodes = Array.from({ length: NODE_COUNT }, () => ({
    cx: round(VIEWBOX_WIDTH * (0.08 + next() * 0.84)),
    cy: round(VIEWBOX_HEIGHT * (0.12 + next() * 0.76)),
    r: round(2.5 + next() * 4),
  }));

  const gradientId = `glyph-gradient-${slug}`;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "bg-accent-soft text-accent h-full w-full",
        "rounded-[var(--radius-md)]",
        className,
      )}
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Sampling lattice, deliberately fainter than the contours. */}
      <g opacity="0.18" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 8 }, (_, index) => (
          <line
            key={`v-${index}`}
            x1={round((VIEWBOX_WIDTH / 8) * index)}
            x2={round((VIEWBOX_WIDTH / 8) * index)}
            y1="0"
            y2={VIEWBOX_HEIGHT}
          />
        ))}
        {Array.from({ length: 5 }, (_, index) => (
          <line
            key={`h-${index}`}
            x1="0"
            x2={VIEWBOX_WIDTH}
            y1={round((VIEWBOX_HEIGHT / 5) * index)}
            y2={round((VIEWBOX_HEIGHT / 5) * index)}
          />
        ))}
      </g>

      <g transform={`rotate(${round(tilt)} ${round(centerX)} ${round(centerY)})`}>
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          {contours.map((contour) => (
            <path d={contour.d} key={contour.d} opacity={contour.opacity} />
          ))}
        </g>
        <path
          d={contours[0].d}
          fill={`url(#${gradientId})`}
          stroke="none"
        />
      </g>

      <g fill="currentColor" opacity="0.32">
        {nodes.map((node) => (
          <circle
            cx={node.cx}
            cy={node.cy}
            key={`${node.cx}-${node.cy}`}
            r={node.r}
          />
        ))}
      </g>
    </svg>
  );
}

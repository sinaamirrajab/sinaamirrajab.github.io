"use client";

import { useEffect, useRef } from "react";

export function ResearchField() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      element.dataset.visible = entry?.isIntersecting ? "true" : "false";
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      aria-hidden="true"
      className="motion-field text-accent pointer-events-none absolute inset-0 h-full w-full"
      data-visible="true"
      preserveAspectRatio="none"
      ref={ref}
      viewBox="0 0 1200 760"
    >
      <defs>
        <linearGradient id="field-gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <g
        className="motion-path"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          d="M60 510 C220 420 260 230 430 300 S700 520 850 320 1030 160 1160 250"
          opacity="0.28"
        />
        <path
          d="M120 640 C240 560 360 620 480 520 S700 270 920 390 1040 570 1170 500"
          opacity="0.22"
        />
        <path
          d="M80 210 C260 140 340 250 500 190 S780 70 980 160 1110 230 1180 180"
          opacity="0.2"
        />
      </g>
      <g fill="url(#field-gradient)">
        <circle cx="172" cy="454" r="6" />
        <circle cx="338" cy="286" r="5" />
        <circle cx="530" cy="372" r="7" />
        <circle cx="818" cy="358" r="6" />
        <circle cx="1036" cy="182" r="5" />
        <circle cx="285" cy="601" r="5" />
        <circle cx="670" cy="304" r="6" />
        <circle cx="980" cy="468" r="7" />
      </g>
      <g fill="none" opacity="0.16" stroke="currentColor" strokeWidth="1">
        <ellipse cx="935" cy="430" rx="210" ry="86" />
        <ellipse cx="935" cy="430" rx="150" ry="58" />
        <ellipse cx="330" cy="275" rx="165" ry="72" />
        <ellipse cx="330" cy="275" rx="108" ry="45" />
      </g>
    </svg>
  );
}

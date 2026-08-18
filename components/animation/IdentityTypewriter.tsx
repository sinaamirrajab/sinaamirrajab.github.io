"use client";

import { useEffect, useReducer, useRef } from "react";
import {
  completeHeroState,
  getDelayForState,
  getVisualLine,
  heroCopy,
  heroReducer,
  initialHeroState,
} from "@/components/animation/motion-config";

function usePrefersReducedMotion() {
  const reducedMotion = useRef(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = query.matches;
  }, []);

  return reducedMotion;
}

export function IdentityTypewriter() {
  const [state, dispatch] = useReducer(heroReducer, initialHeroState);
  const mounted = useRef(false);
  const reducedMotion = usePrefersReducedMotion();
  const visualLine = getVisualLine(state);
  const reducedLine = getVisualLine(completeHeroState);

  useEffect(() => {
    mounted.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dispatch({ type: "complete-immediately" });
    }

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (reducedMotion.current) {
      return;
    }

    const delay = getDelayForState(state);
    if (delay === null) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (mounted.current) {
        dispatch({ type: "tick" });
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [reducedMotion, state]);

  return (
    <div className="relative min-h-[7rem] sm:min-h-[8.5rem]">
      <span className="sr-only">{heroCopy.accessible}</span>
      <h1 className="text-text font-serif text-2xl leading-tight sm:text-4xl">
        {heroCopy.stable}
      </h1>
      <div aria-hidden="true" className="hero-motion">
        <p className="text-text mt-3 min-h-[2.75rem] font-serif text-xl leading-tight sm:min-h-[3.5rem] sm:text-3xl">
          <span>{visualLine}</span>
          <span className="hero-cursor text-accent ml-1 inline-block">|</span>
        </p>
      </div>
      <div aria-hidden="true" className="hero-reduced">
        <p className="text-text mt-3 font-serif text-xl leading-tight sm:text-3xl">
          {reducedLine}
        </p>
      </div>
    </div>
  );
}

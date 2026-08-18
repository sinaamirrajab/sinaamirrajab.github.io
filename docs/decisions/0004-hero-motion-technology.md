# 0004 - Hero Motion Technology

## Context

The landing page requires a deterministic type-and-delete identity sequence and a restrained scientific background visual.

## Decision

The typewriter is implemented as a pure reducer/state machine with one scheduled timer per transition. The visual field uses lightweight SVG and CSS transforms, pauses off-screen through `IntersectionObserver`, and disables animation under reduced motion.

## Alternatives Considered

- Motion library: deferred because the required behavior is small and deterministic.
- Canvas or 3D: rejected for the first version because SVG/CSS is sufficient and easier to inspect.

## Consequences

The hero can be unit-tested without animation randomness, screen readers receive stable text, and the site avoids unnecessary client JavaScript.

# 0002 - GitHub Pages Path Strategy

## Context

The primary deployment target is GitHub Pages. The intended repository is the user site `sinaamirrajab.github.io`, but the build should also tolerate project-site repositories.

## Decision

The default origin is `https://sinaamirrajab.github.io` with an empty base path. During GitHub Actions, `next.config.ts` derives a project-site base path from `GITHUB_REPOSITORY` only when the repository name is not `<owner>.github.io`. Explicit `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BASE_PATH` overrides remain available for custom domains or unusual Pages setups.

## Alternatives Considered

- Hard-code `/`: rejected because project-site Pages deployments need a subpath.
- Always use the repository name as a base path: rejected because user-site repositories should not have one.

## Consequences

Links, static assets, search data, and canonical URLs are generated from one configuration path model.

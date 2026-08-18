import { describe, expect, it } from "vitest";
import { absoluteUrl, siteConfig, withBasePath } from "@/lib/site";

describe("site config", () => {
  it("keeps the simplified navigation without removed tabs", () => {
    expect(siteConfig.navigation.map((item) => item.label)).toEqual([
      "Home",
      "Research & Projects",
      "Writing",
      "About/CV",
    ]);
  });

  it("constructs absolute canonical URLs", () => {
    expect(absoluteUrl("/research")).toBe(
      "https://sinaamirrajab.github.io/research",
    );
  });

  it("leaves root-relative paths unchanged when base path is empty", () => {
    expect(withBasePath("/projects")).toBe("/projects");
  });
});

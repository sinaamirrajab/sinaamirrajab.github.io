import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectGlyph } from "@/components/project/ProjectGlyph";

function markupFor(slug: string) {
  const { container, unmount } = render(<ProjectGlyph slug={slug} />);
  const html = container.innerHTML;
  unmount();
  return html;
}

describe("ProjectGlyph", () => {
  it("renders identical markup for the same slug", () => {
    // Determinism keeps the static export reproducible between builds.
    expect(markupFor("report2ct")).toEqual(markupFor("report2ct"));
  });

  it("renders different art for different slugs", () => {
    expect(markupFor("report2ct")).not.toEqual(
      markupFor("cardiac-mr-scar-quantification"),
    );
  });

  it("is hidden from assistive technology", () => {
    const { container } = render(<ProjectGlyph slug="report2ct" />);
    const svg = container.querySelector("svg");

    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("role", "presentation");
  });
});

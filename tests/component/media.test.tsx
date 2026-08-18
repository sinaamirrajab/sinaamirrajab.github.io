import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Video } from "@/components/content/Media";

describe("media components", () => {
  it("renders local videos with controls and without autoplay", () => {
    render(
      <Video
        caption="A short demo"
        poster="/images/demo-poster.png"
        src="/videos/demo.mp4"
        title="Demo video"
      />,
    );

    const video = screen.getByLabelText("Demo video");
    expect(video).toHaveAttribute("controls");
    expect(video).toHaveAttribute("preload", "metadata");
    expect(video).not.toHaveAttribute("autoplay");
    expect(screen.getByText("A short demo")).toBeInTheDocument();
  });
});

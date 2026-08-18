import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Footer } from "@/components/navigation/Footer";
import { SiteHeader } from "@/components/navigation/SiteHeader";

vi.mock("next/navigation", () => ({
  usePathname: () => "/projects",
}));

Object.defineProperty(window, "matchMedia", {
  configurable: true,
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    addEventListener: vi.fn(),
    addListener: vi.fn(),
    dispatchEvent: vi.fn(),
    matches: false,
    media: query,
    onchange: null,
    removeEventListener: vi.fn(),
    removeListener: vi.fn(),
  })),
});

describe("navigation", () => {
  it("renders desktop navigation with the active page", () => {
    render(<SiteHeader />);
    expect(
      screen.getByRole("link", { name: "Research & Projects" }),
    ).toHaveAttribute("aria-current", "page");
    expect(
      screen.queryByRole("link", { name: "Awards" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Publications" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Ideas" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Talks" }),
    ).not.toBeInTheDocument();
  });

  it("labels social links", () => {
    render(<Footer />);
    expect(screen.getByLabelText("GitHub")).toHaveAttribute(
      "href",
      "https://github.com/sinaamirrajab",
    );
    expect(screen.getByLabelText("Email")).toHaveAttribute(
      "href",
      "mailto:sina.amirrajab@maastrichtuniversity.nl",
    );
  });
});

import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { IdentityTypewriter } from "@/components/animation/IdentityTypewriter";

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
      removeListener: vi.fn(),
    })),
  });
}

describe("IdentityTypewriter", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockMatchMedia(false);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("exposes stable accessible text", () => {
    render(<IdentityTypewriter />);
    expect(
      screen.getByText(
        "I am Sina. I develop trustworthy AI for medical imaging.",
      ),
    ).toBeInTheDocument();
  });

  it("shows the final static text under reduced motion", () => {
    mockMatchMedia(true);
    render(<IdentityTypewriter />);
    expect(
      screen.getAllByText("I develop trustworthy AI for medical imaging.")[0],
    ).toBeInTheDocument();
  });

  it("cleans up scheduled timers", () => {
    const clearTimeoutSpy = vi.spyOn(window, "clearTimeout");
    const { unmount } = render(<IdentityTypewriter />);
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ProjectFilters } from "@/components/project/ProjectFilters";
import { getEntries } from "@/lib/content/loader";

describe("ProjectFilters", () => {
  it("filters by status", async () => {
    const user = userEvent.setup();
    render(<ProjectFilters projects={getEntries("project")} />);

    await user.click(screen.getByRole("button", { name: "active" }));
    expect(
      screen.getByText(
        "Privacy-preserving open-source LLMs for clinical CMR report analysis",
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Report2CT: Radiology Report-Conditional 3D CT Generation",
      ),
    ).not.toBeInTheDocument();
  });
});

import { describe, expect, it } from "vitest";
import {
  completeHeroState,
  getRolePhrases,
  getVisualLine,
  heroCopy,
  heroReducer,
  heroRoles,
  initialHeroState,
} from "@/components/animation/motion-config";

function advanceUntilComplete() {
  let state = initialHeroState;
  const seen = new Set<string>();
  let guard = 0;

  while (state.phase !== "complete" && guard < 1_000) {
    const line = getVisualLine(state);
    if (line.endsWith(".") && !line.includes("..")) {
      seen.add(line);
    }
    state = heroReducer(state, { type: "tick" });
    guard += 1;
  }

  return { seen, state };
}

describe("hero state machine", () => {
  it("uses the exact approved role order", () => {
    expect(heroRoles.map((role) => role.label)).toEqual([
      "Engineer",
      "AI Researcher",
      "Clinical AI Scientist",
      "Generative AI Researcher",
      "Developer",
      "Research Mentor",
    ]);
    expect(getRolePhrases()[0]).toBe("I am an Engineer.");
  });

  it("handles articles for a/an phrases", () => {
    expect(getRolePhrases()).toContain("I am an AI Researcher.");
    expect(getRolePhrases()).toContain("I am a Clinical AI Scientist.");
  });

  it("ends on the permanent statement", () => {
    const { state } = advanceUntilComplete();
    expect(state).toEqual(completeHeroState);
    expect(getVisualLine(state)).toBe(heroCopy.final);
  });

  it("can complete immediately for reduced motion", () => {
    const state = heroReducer(initialHeroState, {
      type: "complete-immediately",
    });
    expect(state.phase).toBe("complete");
    expect(getVisualLine(state)).toBe(
      "I develop trustworthy AI for medical imaging.",
    );
  });
});

import { siteConfig } from "@/lib/site";

export type HeroPhase =
  | "typing-role"
  | "holding-role"
  | "deleting-role"
  | "transitioning-article"
  | "typing-final"
  | "complete";

export type HeroRole = {
  article: "a" | "an";
  label: string;
};

export type HeroState = {
  article: HeroRole["article"];
  finalTextLength: number;
  phase: HeroPhase;
  roleIndex: number;
  roleTextLength: number;
};

export type HeroEvent = { type: "tick" } | { type: "complete-immediately" };

export const heroRoles = [
  { article: "an", label: "Engineer" },
  { article: "an", label: "AI Researcher" },
  { article: "a", label: "Clinical AI Scientist" },
  { article: "a", label: "Generative AI Researcher" },
  { article: "a", label: "Developer" },
  { article: "a", label: "Research Mentor" },
] as const satisfies readonly HeroRole[];

export const heroCopy = {
  accessible: "I am Sina. I develop trustworthy AI for medical imaging.",
  final: siteConfig.heroFinalStatement,
  stable: "I am Sina.",
} as const;

export const heroTiming = {
  deleteDelay: 35,
  holdDelay: 1100,
  finalTypeDelay: 48,
  transitionDelay: 90,
  typeDelay: 58,
} as const;

export const initialHeroState: HeroState = {
  article: heroRoles[0].article,
  finalTextLength: 0,
  phase: "typing-role",
  roleIndex: 0,
  roleTextLength: 0,
};

export const completeHeroState: HeroState = {
  article: heroRoles[heroRoles.length - 1].article,
  finalTextLength: heroCopy.final.length,
  phase: "complete",
  roleIndex: heroRoles.length - 1,
  roleTextLength: 0,
};

export function getCurrentRole(state: HeroState) {
  return heroRoles[state.roleIndex];
}

export function heroReducer(state: HeroState, event: HeroEvent): HeroState {
  if (event.type === "complete-immediately") {
    return completeHeroState;
  }

  const role = getCurrentRole(state);

  switch (state.phase) {
    case "typing-role":
      if (state.roleTextLength < role.label.length) {
        return { ...state, roleTextLength: state.roleTextLength + 1 };
      }

      return { ...state, phase: "holding-role" };

    case "holding-role":
      return { ...state, phase: "deleting-role" };

    case "deleting-role":
      if (state.roleTextLength > 0) {
        return { ...state, roleTextLength: state.roleTextLength - 1 };
      }

      if (state.roleIndex === heroRoles.length - 1) {
        return { ...state, phase: "typing-final" };
      }

      return { ...state, phase: "transitioning-article" };

    case "transitioning-article": {
      const nextIndex = state.roleIndex + 1;
      return {
        ...state,
        article: heroRoles[nextIndex].article,
        phase: "typing-role",
        roleIndex: nextIndex,
      };
    }

    case "typing-final":
      if (state.finalTextLength < heroCopy.final.length) {
        return { ...state, finalTextLength: state.finalTextLength + 1 };
      }

      return { ...state, phase: "complete" };

    case "complete":
      return state;
  }
}

export function getDelayForState(state: HeroState) {
  switch (state.phase) {
    case "typing-role":
      return heroTiming.typeDelay;
    case "holding-role":
      return heroTiming.holdDelay;
    case "deleting-role":
      return heroTiming.deleteDelay;
    case "transitioning-article":
      return heroTiming.transitionDelay;
    case "typing-final":
      return heroTiming.finalTypeDelay;
    case "complete":
      return null;
  }
}

export function getVisualLine(state: HeroState) {
  if (state.phase === "typing-final" || state.phase === "complete") {
    return heroCopy.final.slice(0, state.finalTextLength);
  }

  const role = getCurrentRole(state);
  return `I am ${state.article} ${role.label.slice(0, state.roleTextLength)}.`;
}

export function getRolePhrases() {
  return heroRoles.map((role) => `I am ${role.article} ${role.label}.`);
}

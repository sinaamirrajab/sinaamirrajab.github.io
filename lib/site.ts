export type NavigationItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
  kind: "github" | "linkedin" | "x" | "scholar" | "email";
};

const defaultOrigin = "https://sinaamirrajab.github.io";

export const siteConfig = {
  name: "Sina Amirrajab",
  shortName: "Sina",
  title: "AI and Generative AI Researcher",
  description:
    "I work at the intersection of AI and generative AI for radiology, medical imaging, developing research systems that connect images, language, and clinical data for applications in oncology 🫁 🧠 and cardiology 🫀.",
  positioning: "AI and Generative AI Researcher in Radiology Image Analysis",
  heroFinalStatement: "I develop trustworthy AI for medical imaging.",
  locale: "en-GB",
  origin: process.env.NEXT_PUBLIC_SITE_URL ?? defaultOrigin,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  emails: {
    professional: "sina.amirrajab@maastrichtuniversity.nl",
    personal: "sina.amirrajab@gmail.com",
  },
  social: [
    {
      kind: "github",
      label: "GitHub",
      href: "https://github.com/sinaamirrajab",
    },
    {
      kind: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sina-amirrajab/",
    },
    {
      kind: "x",
      label: "X",
      href: "https://twitter.com/SiNa_AmirrajaB",
    },
    {
      kind: "scholar",
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=m0TFXOoAAAAJ&hl=en",
    },
    {
      kind: "email",
      label: "Email",
      href: "mailto:sina.amirrajab@maastrichtuniversity.nl",
    },
  ] satisfies SocialLink[],
  navigation: [
    { href: "/", label: "Home" },
    { href: "/research", label: "Research & Projects" },
    { href: "/writing", label: "Writing" },
    { href: "/about", label: "About/CV" },
  ] satisfies NavigationItem[],
} as const;

export function withBasePath(pathname: string) {
  if (/^https?:\/\//.test(pathname) || pathname.startsWith("mailto:")) {
    return pathname;
  }

  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteConfig.basePath}${path}`;
}

export function absoluteUrl(pathname: string) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(`${siteConfig.basePath}${path}`, siteConfig.origin).toString();
}

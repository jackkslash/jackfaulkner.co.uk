export interface Project {
  title: string;
  description: string;
  important: boolean;
  href?: string;
}

export interface Link {
  title: string;
  href: string;
}

export const ProjectData: Project[] = [
  {
    title: "chatterBox",
    description: "Chatterbox is a lightweight, fast, and intelligent AI-powered assistant built with Next.js, React, and Bun. It integrates multiple AI models and web search capabilities for enhanced responses.",
    important: true,
    href: "https://github.com/jackkslash/ChatterBox",
  },
  {
    title: "toolbelt",
    description: "A collection of tools I use for my day to day work.",
    important: true,
    href: "https://github.com/jackkslash/toolbelt",
  },
  {
    title: "Huddle",
    important: true,
    description: " A Modern Fullstack Social News Website and Forum",
    href: "https://github.com/jackkslash/huddl",
  },
  {
    title: "Tombot",
    description:
      "Discord bot that watches the ethereum block for user submitted wallets",
    important: true,
    href: "https://github.com/jackkslash/tombot",
  },
  {
    title: "jackfaulkner.co.uk",
    description: "Personal site built in astro.",
    important: true,
    href: "https://github.com/jackkslash/jackfaulkner.co.uk",
  },
  {
    title: "MSAI",
    description: "Meme reverse image search using vector database and AI.",
    important: true,
    href: "https://github.com/jackkslash/MSAI",
  },
];

export const Links: Link[] = [
  {
    title: "github",
    href: "https://github.com/jackkslash",
  },
  {
    title: "twitter",
    href: "https://twitter.com/jackkslash",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/jackaaronfaulkner/",
  },
  {
    title: "email",
    href: "mailto:jackfaulknerbis@hotmail.co.uk",
  },
];

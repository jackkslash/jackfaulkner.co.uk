export interface Project {
  title: string;
  description: string;
  important: boolean;
  href?: string;
}

export const ProjectData: Project[] = [
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
    title: "F1Stats",
    description: "F1 Statistics and data site built with react.",
    important: false,
    href: "https://github.com/jackkslash/F1Stats",
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
  {
    title: "Scripts",
    description: "Utility Bash Scripts",
    important: false,
    href: "https://github.com/jackkslash/scripts",
  },
  {
    title: "Arceus",
    description: "Q and A tool for Twitch.",
    important: false,
    href: "https://github.com/jackkslash/Arceus",
  },
];

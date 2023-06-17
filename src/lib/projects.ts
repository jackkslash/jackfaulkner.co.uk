export interface Project {
  title: string;
  description: string;
  href?: string;
}

export const ProjectData: Project[] = [
  {
    title: "Tombot",
    description:
      "Discord bot that watches the ethereum block for user submitted wallets",
    href: "https://github.com/jackkslash/tombot",
  },
  {
    title: "F1Stats",
    description: "F1 Statistics and data site built with react.",
    href: "https://github.com/jackkslash/F1Stats",
  },
  {
    title: "jackfaulkner.co.uk",
    description: "Personal site built in astro.",
    href: "https://github.com/jackkslash/jackfaulkner.co.uk",
  },
  {
    title: "MSAI",
    description: "Meme reverse image search using vector database and AI.",
    href: "https://github.com/jackkslash/MSAI",
  },
  {
    title: "Scripts",
    description: "Utility Bash Scripts",
    href: "https://github.com/jackkslash/scripts",
  },
  {
    title: "Arceus",
    description: "Q and A tool for Twitch.",
    href: "https://github.com/jackkslash/Arceus",
  },
];

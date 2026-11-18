import { PUBLIC_AUTH_URL, PUBLIC_SCRY_URL } from "astro:env/client";

export interface App {
  name: string;
  tagline: string;
  /** One or two plain sentences on what the app does. */
  about?: string;
  /** Omit until the app is launchable. */
  href?: string;
  /** Public source repo. Omit while the repo is private. */
  source?: string;
  status: "live" | "beta" | "soon";
}

export const apps: App[] = [
  {
    name: "voodoo",
    tagline: "One account for every app.",
    about: "Invite-only sign-in, API keys, and user management.",
    href: PUBLIC_AUTH_URL,
    source: "https://github.com/0xD34DC0D3/voodoo",
    status: "beta",
  },
  {
    name: "scry",
    tagline: "A plain RSS reader.",
    about: "Latest posts from a shared list of feeds. No account needed to read.",
    href: PUBLIC_SCRY_URL,
    status: "beta",
  },
  { name: "Lore", tagline: "Store and search your data.", status: "soon" },
  { name: "Nutrition", tagline: "Track what you eat.", status: "soon" },
];

const rank = { live: 0, beta: 1, soon: 2 } as const;

/** Launchable apps first; registry order breaks ties. */
export const sortedApps = apps.toSorted((a, b) => rank[a.status] - rank[b.status]);

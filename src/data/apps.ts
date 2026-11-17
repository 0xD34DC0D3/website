import { PUBLIC_AUTH_URL } from "astro:env/client";

export interface App {
  name: string;
  tagline: string;
  /** Omit until the app is launchable. */
  href?: string;
  status: "live" | "beta" | "soon";
}

export const apps: App[] = [
  { name: "voodoo", tagline: "Your account across the system.", href: PUBLIC_AUTH_URL, status: "beta" },
  { name: "Nutrition", tagline: "Your nutrition data, simplified.", status: "soon" },
  { name: "Lore", tagline: "Easy collection and indexing of your data.", status: "soon" },
];

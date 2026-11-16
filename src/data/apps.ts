export interface App {
  name: string;
  tagline: string;
  /** Omit until the app is launchable. */
  href?: string;
  status: "live" | "beta" | "soon";
}

export const apps: App[] = [
  { name: "Auth", tagline: "Your account across the system.", status: "soon" },
  { name: "Nutrition", tagline: "Your nutrition data, simplified.", status: "soon" },
  { name: "Lore", tagline: "Easy collection and indexing of your data.", status: "soon" },
];

export interface App {
  name: string;
  tagline: string;
  /** Omit until the app is launchable. */
  href?: string;
  status: "live" | "beta" | "soon";
}

export const apps: App[] = [
  { name: "App One", tagline: "Placeholder for the first app.", status: "soon" },
  { name: "App Two", tagline: "Placeholder for the second app.", status: "soon" },
  { name: "App Three", tagline: "Placeholder for the third app.", status: "soon" },
];

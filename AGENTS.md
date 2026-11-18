# website

deadcode, the landing page and docs for the 0xD34DC0D3 apps. Astro (static
output) and Tailwind v4, served by a Cloudflare Worker. README: [README.md](README.md).

## Build and test

- Node per `engines` in `package.json`; `npm ci` to install.
- `npm run dev` (http://localhost:4321). For a background server:
  `astro dev --background`, then `astro dev stop|status|logs`.
- `npm run check` (astro check, type-check) and `npm run build` (static
  output in `dist/`) must both pass. There is no lint or test script.
- `npm run deploy` builds and runs `wrangler deploy`. Only deploy when asked.

## Layout

- `src/data/apps.ts`: the app registry behind the landing page's app cards
  (`src/components/AppCard.astro`). `sortedApps` puts launchable apps first.
- `src/pages/index.astro`: landing page; `src/pages/docs/design-guide.astro`:
  the design system and the app shell rules every app follows.
- `src/styles/global.css`: design tokens in the `@theme` block. scry's
  `make theme` generates its `theme.css` from it, so token changes reach the
  apps from here. `public/favicon.svg` copies the token colors by hand.
- `worker/index.ts`: serves `dist/` and `/api/me`, which forwards the
  `voodoo_session` cookie to voodoo's `/me` for the header's sign-in state.
- `astro.config.mjs`: `PUBLIC_AUTH_URL`, `PUBLIC_SCRY_URL` (env, with prod
  defaults). Read app hosts from these, never hardcode them.

## Conventions

- Source links: set an app's `source` in `apps.ts` only once its GitHub repo
  is public; omit it while private. The card shows a Source link only when
  it is set.
- Set an app's `href` only once the app is launchable.
- `.wrangler/` is local Wrangler state; never commit it.

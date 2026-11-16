# deadcode

Landing page the 0xD34DC0D3 ecosystem. Built with Astro and Tailwind v4.

## Develop

```sh
npm install
npm run dev     # http://localhost:4321
npm run check   # type-check
npm run build   # static output in dist/
```

## Structure

- `src/styles/global.css` holds the design system. Tokens live in the `@theme` block, so re-theme there.
- `src/data/apps.ts` is the app registry shown on the landing page.
- `/docs/design-guide` documents the tokens and components.
- `public/favicon.svg` copies its colors from the tokens. Update it by hand when re-theming.

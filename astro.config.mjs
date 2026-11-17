// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      PUBLIC_AUTH_URL: envField.string({ context: 'client', access: 'public', url: true, default: 'https://auth.0xd34dc0d3.dev' }),
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
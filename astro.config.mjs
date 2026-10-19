import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Change `site` to your deployed URL before building for production.
  site: 'https://example.com',
  // Hide the floating Astro dev toolbar in the browser.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});

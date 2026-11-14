// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

// Sitemap lastmod = last git commit touching the page or the shared sources it is built from, so it stays true.
function lastmod(url) {
  const path = new URL(url).pathname.replace(/^\/|\/$/g, '');
  const candidates = path ? [`src/pages/${path}.astro`, `src/pages/${path}/index.astro`] : ['src/pages/index.astro'];
  const file = candidates.find((f) => existsSync(f));
  if (!file) return undefined;
  // include the shared sources every page is built from, so a data or layout change dates the pages too
  const shared = ['src/layouts', 'src/components', 'src/data', 'src/styles'].filter((d) => existsSync(d)).map((d) => `"${d}"`).join(' ');
  try { return execSync(`git log -1 --format=%cs -- "${file}" ${shared}`).toString().trim() || undefined; } catch { return undefined; }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://benjamin.is-a.dev',
  integrations: [sitemap({ serialize(item) { const d = lastmod(item.url); if (d) item.lastmod = d; return item; } })],
});

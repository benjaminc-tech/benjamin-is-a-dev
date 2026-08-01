# benjamin.is-a.dev

Source for my personal site: a short portfolio, an about page, and a blog.
Live at **https://benjamin.is-a.dev**.

Static Astro, no client-side framework, no external fonts or assets. Every page is
plain HTML and CSS by the time it reaches the browser.

## Running it

Requires Node 22.12 or newer.

```sh
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the built site
```

## Layout

```text
src/
  pages/         index, about, blog index, blog/[...slug], rss.xml.js
  layouts/       Base.astro, the shell every page uses
  content/blog/  posts, as markdown
  data/          projects.ts, the portfolio list
  styles/        global.css
public/          images and favicons
```

### Writing a post

Drop a markdown file in `src/content/blog/`. The frontmatter is validated by
`src/content.config.ts`:

```yaml
---
title: "Post title"
date: 2026-08-01
summary: "One or two lines, used in the list view and the RSS feed."
draft: true
---
```

`draft: true` posts still build, but they are left out of the blog index, the home
page, and the RSS feed. Flip it to `false` to publish.

### Projects

The portfolio list is `src/data/projects.ts`, one typed entry per project, each with
its own accent color.

## Deploying

Netlify, from the CLI. This repository is not connected to the Netlify site, so
pushing here does not deploy anything:

```sh
npm run build
netlify deploy --prod --dir=dist --site f7f28033-1d91-4cf1-95eb-d68a1aff57e7
```

The domain comes from [is-a.dev](https://is-a.dev), pointed at Netlify by CNAME.

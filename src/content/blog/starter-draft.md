---
title: "Starter draft, rewrite or delete me"
date: 2026-07-29
summary: "A template post showing the frontmatter and formatting. Set draft to false to publish it."
draft: true
---

This post is a template, not something I wrote for you. It is marked `draft: true`, so it does
not appear on the site. Rewrite it, or delete the file.

Deliberately no fabricated opinions here. The writing on this site should be yours.

## How to add a post

Drop a `.md` file in `src/content/blog/`. The filename becomes the URL, so
`why-i-killed-the-subscription.md` becomes `/blog/why-i-killed-the-subscription/`.

Every post needs this frontmatter:

```yaml
---
title: "Your title"
date: 2026-07-30
summary: "One or two sentences. Used on the list page and in search results."
draft: false
---
```

Set `draft: true` while you are still writing. Drafts are excluded from the blog list, the
home page, and the RSS feed, but they still build, so you can preview them at their URL.

## What formatting is available

Normal markdown. **Bold**, *italic*, [links](https://example.com), and `inline code`.

> Blockquotes get a yellow rule down the left side.

Lists work as expected:

- One
- Two
- Three

Code blocks get a heavy border:

```bash
npm run dev
```

Horizontal rules, headings down to h3, images, and tables all have styles already.

## Post ideas from your actual work

Real things you have done, which is where good posts come from:

- The revenue cliff after the domain migration, and what the data actually said
- Why the QR product sells once instead of every month
- Building an EXIF parser from scratch and what you got wrong first
- Getting a first sale from an AI answer engine instead of Google
- What a $10/year forum costs to run when you take the free tiers seriously

# Noor & Knowledge — Islamic Blog

A static, one-column Islamic blog built with [Astro](https://astro.build). No backend, no database — everything is Markdown files compiled to static HTML at build time. Deploys for free to GitHub Pages or Cloudflare Pages.

## Features

- One-column, mobile-friendly reading layout
- Posts written in Markdown with frontmatter (title, description, date, author, tags)
- "Load more posts" button on the homepage (loads 5 at a time, no backend/pagination routes needed)
- Individual post pages with clean typography, including RTL support for Arabic text
- Client-side search (`/search`) across post titles, descriptions, and tags — no backend needed
- Downloads page (`/downloads`) for sharing printable resources (PDFs) alongside the blog
- Dark mode (follows the reader's system setting)
- 8 sample posts included so you can see the layout and Load More button in action

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Adding a new post

Create a new `.md` file in `src/content/posts/`, e.g. `src/content/posts/my-new-post.md`:

```markdown
---
title: "Your Post Title"
description: "A one or two sentence summary shown on the homepage."
pubDate: 2026-09-10
author: "Your Name"
tags: ["Worship", "Reflection"]
---

Write your post content here using normal Markdown — headings, lists,
**bold**, *italics*, > blockquotes, and links all work.
```

The post automatically appears on the homepage (newest first) and gets its own page at `/posts/my-new-post`.

- Set `draft: true` in the frontmatter to hide a post without deleting it.
- To change the "Load more" batch size, edit `PAGE_SIZE` in [`src/pages/index.astro`](src/pages/index.astro).

### Adding Arabic text

Wrap Arabic text in a paragraph with the `arabic` class to get right-to-left layout and a matching font:

```html
<p class="arabic">الْحَمْدُ لِلَّهِ</p>
```

### Adding a download

The `/downloads` page lists resources from [`src/pages/downloads.astro`](src/pages/downloads.astro). To add one:

1. Drop the file (e.g. a PDF) into [`public/downloads/`](public/downloads).
2. Add an entry to the `resources` array at the top of `src/pages/downloads.astro` with its filename, title, description, and size in KB (shown on the download button).

The four PDFs included are placeholder samples — swap them for your own resources.

## Customizing the look

- Colors, fonts, and spacing all live in [`src/styles/global.css`](src/styles/global.css) as CSS variables at the top of the file.
- Site name and tagline are set in [`src/components/Header.astro`](src/components/Header.astro).
- The favicon is [`public/favicon.svg`](public/favicon.svg).

## Deploying

### Option A: Cloudflare Pages

1. Push this project to a GitHub (or GitLab) repository.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select the repo.
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Cloudflare will rebuild automatically on every push.
5. Leave `BASE_PATH` in `astro.config.mjs` as `"/"`.

### Option B: GitHub Pages

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to "GitHub Actions".
3. This project already includes a workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds and deploys automatically on every push to `main`.
4. If your repo is a **project site** (URL like `https://username.github.io/repo-name`), open `astro.config.mjs` and set:
   ```js
   const BASE_PATH = "/repo-name";
   ```
   If it's a **user/org site** (repo named `username.github.io`), leave `BASE_PATH` as `"/"`.
5. Also update `SITE_URL` in `astro.config.mjs` to your real GitHub Pages URL.

## Project structure

```
src/
  content/posts/       Blog posts (Markdown)
  content/config.ts    Post frontmatter schema
  components/          Header, Footer, PostCard
  layouts/             BaseLayout (shared shell), PostLayout (post pages)
  pages/
    index.astro         Homepage with Load More
    about.astro         About page
    contact.astro       Contact page
    search.astro        Client-side search (no backend)
    downloads.astro     Downloads page (lists files in public/downloads)
    posts/[...slug].astro   Individual post pages
  styles/global.css    All styling / theme variables
public/
  downloads/            Downloadable files (PDFs, etc.) — served as-is
```

## A note on content

The included posts are placeholder reflections meant to demonstrate the layout. Before publishing, review and replace them with your own vetted content, and verify any religious references (Qur'an, hadith, rulings) against reliable sources.

# canbirlik.com

Source for [canbirlik.com](https://canbirlik.com), the personal portfolio of Can Birlik, Senior Data & Cloud Solution Architect.

A single-page static site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Getting started

Requires Node 24.

```sh
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the built site locally
```

## Editing content

All site content (profile, experience, education, skills, certifications) lives in [`src/data/profile.ts`](src/data/profile.ts). Components in `src/components/` only render that data, so most updates are a change to that one file.

## Project structure

```
src/
  components/   page sections (Hero, Experience, Certifications, ...)
  data/         site content and brand icon definitions
  layouts/      base HTML layout, meta tags
  pages/        index and 404
  scripts/      scroll reveal animation
  styles/       global CSS and Tailwind setup
public/         favicons, OG image, robots.txt, redirect pages for old URLs
```

## Deployment

Pushes to `main` deploy automatically to DigitalOcean App Platform (static site, build command `npm run build`, output `dist`), served behind Cloudflare.

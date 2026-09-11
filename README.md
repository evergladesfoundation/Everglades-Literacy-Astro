# Everglades Literacy Astro

Rebuild [evergladesliteracy.org](https://www.evergladesliteracy.org/) as an Astro 7 + Tailwind CSS v4 site with a visual redesign, Sanity as a no-code editor for staff, and a clean cut from Wix.

This repository currently ships a working Astro starter: homepage, Teacher Toolkit search, Champion Schools, and resources. Lesson copy is local placeholder data until a Sanity project is connected.

## Prerequisites

- Node.js 22.12 or newer

## Commands

| Command | Action |
| --- | --- |
| `npm ci` | Install dependencies from the lockfile |
| `npm run dev` | Start the local site at `http://localhost:4321` |
| `npm run check` | Type-check `.astro` and TypeScript files |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Serve the production build locally |

## Cloudflare Workers

The site is a static Astro build. `wrangler.jsonc` points Workers at `./dist` after `npm run build`.

## Sanity (optional)

Copy `.env.example` to `.env` when a Sanity project is ready. The site does not require those values to develop, search lessons, or build.

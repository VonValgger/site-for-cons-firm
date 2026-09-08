# Project: site-for-cons-firm — Roofing / Renovation Company Website

## Overview
A high-end marketing website for a Finnish roofing / renovation company
(working name `virman_nimi`, not final). The goal is to convey reliability,
quality, and premium service through a clean, modern aesthetic. Work in
progress — not an official site yet.

## Architecture & Infrastructure
- **Framework:** [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5, runes) + TypeScript
- **Styling:** Tailwind CSS v4. Colour tokens, fonts, and radii live in `tailwind.config.js` (Material-derived palette).
- **Icons:** Lucide (`@lucide/svelte`).
- **Rendering:** Fully **prerendered static site**. `src/routes/+layout.ts` sets `prerender = true`; `@sveltejs/adapter-static` writes `build/` with a `404.html` fallback. No SSR, no server routes.
- **Base path:** `kit.paths.base` reads the `BASE_PATH` env var and defaults to the site root. Internal links are prefixed with `base` from `$app/paths` so the site works from a subpath.
- **Structure:**
  - `src/routes/`: file-based routing (`+page.svelte`, root `+layout`).
  - `src/routes/palvelut/`: service detail pages (kateratkaisut, kattoremontit).
  - `src/lib/components/`: section components (Navbar, Hero, Services, References, About, Contact, Footer).
  - `static/`: static assets, `robots.txt`, `.nojekyll`.
- **Deployment:** GitHub Pages via `.github/workflows/deploy.yml` on push to `main` (builds with `BASE_PATH=/site-for-cons-firm`). A future move to a dedicated server or custom domain builds without `BASE_PATH`.

## Forms
- The contact form (`src/lib/components/Contact.svelte`) submits **client-side** with `fetch` to [Web3Forms](https://web3forms.com/) — there is no backend.
- State is handled with Svelte 5 runes (`$state`). It rejects emails containing `ä`/`ö` (a Web3Forms limitation), shows a submitting/success/error status, and resets after a successful send.
- Do **not** reintroduce Superforms / Zod / server form actions — the site is static.

## Design source
Section layouts track a Claude Design project (`*.dc.html` files, e.g.
`Etusivu.dc.html`). The standalone `*-design.html` and `stitch-design.html`
files in the tree are static design references and are not part of the build.

## Technical Standards
- **Styling:** Tailwind utility classes only; stay on the token palette and spacing scale in `tailwind.config.js`.
- **Type Safety:** TypeScript for all logic and prop definitions.
- **Icons:** Lucide components for all UI iconography.
- **Links:** internal links use `base` from `$app/paths`; section jumps rely on `scroll-margin-top` in `src/app.css` to clear the fixed navbar.
- **Performance:** optimise images, keep the bundle small.

## Development Workflow
1. `npm run dev` — dev server on http://localhost:5173.
2. Build or edit components in `src/lib/components/`.
3. `npm run check` — svelte-check + TypeScript, must be clean.
4. `npm run build` then `npm run preview` — verify the static output, including deep links and the contact form.

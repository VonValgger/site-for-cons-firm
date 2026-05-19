# Project: LLR - Prestige Roofing Website

## Overview
A high-end, "prestige" web presence for a roofing company. The goal is to convey reliability, quality, and premium service through a clean, modern aesthetic.

## Architecture & Infrastructure
- **Framework:** [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
- **Standardized Structure:** Strictly follow the SvelteKit directory conventions:
  - `src/routes/`: File-based routing (pages, layouts, server-side actions).
  - `src/lib/`: Shared components, utilities, and server-only code (using `$lib` alias).
  - `static/`: Static assets like high-res images and fonts.
- **Deployment:** Optimized for Vercel/Netlify/Cloudflare via `@sveltejs/adapter-auto`.

## Data Flow & State Management
- **Lead Generation (Forms):** Use **SvelteKit Form Actions** for the contact form. This ensures:
  - Progressive enhancement (works without JS).
  - Secure server-side validation.
  - Seamless integration with the server for email/database submission.
- **Rendering Strategy:** 
  - **Prerendering/SSR:** Default to SSR or prerendering for all marketing pages to ensure maximum SEO and fast initial "prestige" load times.
- **Component State:** Utilize **Svelte 5 Runes** (`$state`, `$derived`, `$props`) for reactive logic within the UI.
- **Shared State:** If needed, use shared rune-based modules in `src/lib` or Svelte stores for cross-component communication.

## Project Goals
1. **Prestige Look & Feel:** High-quality imagery, sophisticated typography, and ample whitespace.
2. **Navigation:** Simple, intuitive navigation at the top.
3. **Form at Bottom:** A prominent contact/quote form as the primary CTA.
4. **Responsive:** Optimized for all devices.

## Technical Standards
- **Styling:** Vanilla CSS using modern features (Flexbox, Grid, Custom Properties).
- **Type Safety:** TypeScript for all logic and prop definitions.
- **Performance:** Optimize images for web and minimize bundle size.

## Development Workflow
1. **Research:** Analyze existing layout in `src/routes/+layout.svelte`.
2. **Strategy:** Design the visual language and form schema.
3. **Execution:** Build components in `src/lib/components` and wire up form actions.
4. **Validation:** Run `npm run check` and test form submissions.

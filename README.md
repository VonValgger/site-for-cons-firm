# site-for-cons-firm

Marketing website for a Finnish roofing / renovation company. Working name
`virman_nimi` — the real company name, domain, and content are not final.

> **Status:** work in progress. Not an official site. Not yet served under a
> real domain or company name.

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5, runes) + TypeScript
- Tailwind CSS v4, with a Material-derived colour token palette in
  `tailwind.config.js`
- [`@lucide/svelte`](https://lucide.dev/) for icons
- `@sveltejs/adapter-static` — the whole site is prerendered to static HTML
- Contact form submits client-side to [Web3Forms](https://web3forms.com/)

## Development

```bash
npm install
npm run dev        # dev server on http://localhost:5173
npm run check      # svelte-check + TypeScript
npm run build      # static output into build/
npm run preview    # serve the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`BASE_PATH=/site-for-cons-firm` and publishes `build/` to GitHub Pages:

<https://vonvalgger.github.io/site-for-cons-firm/>

`kit.paths.base` is driven by the `BASE_PATH` env var and defaults to the
site root when unset. For a future deploy to a dedicated server or a custom
domain, build without `BASE_PATH` and serve the `build/` directory.

## Layout

| Path | Purpose |
| --- | --- |
| `src/routes/` | Pages (`+page.svelte`) and the root layout; `+layout.ts` turns on prerendering |
| `src/lib/components/` | Section components: Navbar, Hero, Services, References, About, Contact, Footer |
| `src/routes/palvelut/` | Service detail pages (kateratkaisut, kattoremontit) |
| `static/` | Static assets, `robots.txt`, `.nojekyll` |
| `tailwind.config.js` | Colour tokens, fonts, border radii |

## Design source

Section layouts are kept in sync with a Claude Design project
(`*.dc.html`). The standalone `*-design.html` and `stitch-design.html`
files in the tree are static design references, not part of the build.

## License

Copyright © 2026 VonValgger. All rights reserved.

This code is **proprietary** — not open source. No permission is granted to
use, copy, modify, or distribute it. See [LICENSE](LICENSE).

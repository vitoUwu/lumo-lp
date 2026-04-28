# AGENTS.md

## Project Facts

- Astro 6 static landing page with React islands enabled by `@astrojs/react`; the app entry is `src/pages/index.astro`.
- `src/layouts/Layout.astro` owns global CSS, page metadata, `lang="pt-br"`, and Astro font loading.
- Tailwind CSS v4 is wired through `@tailwindcss/vite` in `astro.config.mjs`; theme tokens live in `src/styles/global.css`, not a Tailwind config file.
- `DESIGN.md` is the brand source of truth: monochrome, sharp corners, Sora headings, Inter body text, 8px spacing rhythm.
- Deployment is Cloudflare static assets: `wrangler.jsonc` serves `./dist` under worker name `lumo-lp`.

## Commands

- Use npm and `package-lock.json`; Node must satisfy `>=22.12.0`.
- `npm install` installs dependencies.
- `npm run dev` starts Astro at `localhost:4321`.
- `npm run build` is the main verification and production build; it outputs `dist/` and regenerates `.astro/` types.
- `npm run preview` previews the built site locally.
- There are currently no test, lint, formatter, or typecheck scripts in `package.json`; do not claim they pass unless you add/run them.
- For Astro diagnostics, use `npm run astro -- check` only after adding the required checker dependencies if Astro asks for them.

## Editing Notes

- Prefer `.astro` files for page/layout wiring and small `.tsx` components for reusable interactive or styled pieces.
- Keep public assets referenced with root-relative paths such as `/logo.png` and `/favicon.svg`; they resolve from `public/`.
- Reuse `cn()` from `src/utils/cn.ts` when composing Tailwind classes that may need `tailwind-merge` conflict handling.
- Preserve Portuguese user-facing copy unless the task explicitly asks for language changes.
- Do not commit generated `dist/`, `.astro/`, or `node_modules/`; they are ignored build artifacts/dependencies.

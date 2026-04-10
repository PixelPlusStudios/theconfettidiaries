# The Confetti Diaries

This repo powers the marketing site for The Confetti Diaries. It ships as a Vite + React + ShadCN stack that pulls hero/about copy from JSON files, so those objects can be managed via Netlify CMS.

## Local development

1. `npm install`
2. `npm run dev` and open `http://127.0.0.1:5173` (Vite serves the SPA from `src/main.tsx`).
3. `npm run build` to produce the static `dist/` output that Netlify deploys.

Sips compression for the hero/gallery assets is captured in `scripts/compress-images.sh` and reused via `npm run compress:images`.

## Netlify CMS integration

- Admin UI lives under `/admin/` (served from `public/admin/index.html`). Netlify automatically injects `public/admin/config.yml`.
- Content entries are stored as JSON inside `src/content/home.json` and `src/content/about.json`. The React components in `src/components/sections/HeroSection.tsx` and `src/components/sections/AboutSection.tsx` import `@/content` so the live site reflects CMS edits.
- The build is routed through `netlify.toml`, which adds the necessary `/admin` redirects and points the publish folder to `dist/`.

### Enabling CMS on Netlify

1. Deploy the repo to Netlify.
2. In the Netlify dashboard, enable **Identity** and **Git Gateway**.
3. Invite yourself (or any editor) via the Identity settings and follow the invite link to log in.
4. Visit `https://<your-site>.netlify.app/admin/`, log in through Netlify Identity, and edit the “Home Page” or “About Page” entries. Netlify CMS will commit the updated JSON files back to your Git branch.

If you need to test CMS locally, run `npm run dev` and open `http://127.0.0.1:5173/admin/`. The same Identity flow works as long as your Netlify site is published and Identity is enabled.

## Content structure

- `home.json` controls the hero copy + banner image path.
- `about.json` controls the About heading and lead description.
- Add additional fields via `public/admin/config.yml` if you later want CMS-managed galleries, services, etc.

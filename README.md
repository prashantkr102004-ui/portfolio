# Prashant Kumar Portfolio

This is my personal portfolio site for presenting the AI/ML and full-stack projects I have been building. The site is intentionally simple: a dark visual system, a focused Work section, concise About and Skills sections, and a small contact area.

The portfolio is live at:

https://prashantkumar01.vercel.app

## What is inside

The homepage is built around four main projects:

- ArthaDrishti
- FoodBridge
- AI MarketGuard
- RevenueRescue AI

After those, the Work section has a larger “Explore more projects” button that takes visitors directly to my GitHub profile.

Each featured project has its own static detail page with the problem, approach, technical notes, stack, and GitHub link. The copy avoids fake metrics, fake demos, and claims that are not backed by the actual projects.

## Tech stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Static project data stored in TypeScript files
- Next.js metadata, sitemap, robots, icon, and Open Graph image support

There is no backend in this repository. The site is a static portfolio deployed on Vercel.

## Project structure

```text
app/                         Next.js routes, metadata, sitemap, robots, global CSS
app/projects/[slug]/page.tsx Static project detail pages
components/                  Shared layout and UI components
components/sections/         Homepage sections
components/projects/         Project visual components
data/                        Profile, project, and skills content
lib/                         Small site URL helper
```

The main content files are:

- `data/profile.ts` for public profile links and navigation
- `data/projects.ts` for project copy, stack, repository links, and project-page content
- `data/skills.ts` for grouped skills
- `components/sections/featured-work.tsx` for the full Work section
- `app/globals.css` for the visual system and responsive styles

## Run locally

Use Node.js 20.9 or newer.

```powershell
npm ci
npm run dev
```

Then open:

```text
http://localhost:3000
```

If port 3000 is already in use, run:

```powershell
npm run dev -- --port 3100
```

## Checks before pushing

```powershell
npm run lint
npm run typecheck
npm run build
```

I use these before pushing changes so the Vercel deployment has the same result as the local production build.

## Deployment

The project is connected to Vercel. Pushing to `main` triggers a production deployment.

The public site URL is:

```text
https://prashantkumar01.vercel.app
```

If the production domain changes, set `SITE_URL` to the final HTTPS origin before building so sitemap and canonical metadata use the right URL.

## Notes

This site is deliberately lightweight. It does not use external images, animation libraries, analytics, or a CMS. Most of the site is server-rendered static content, with a small client-side navigation script used to highlight the active section while scrolling.

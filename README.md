# Prashant Kumar — Portfolio

A responsive editorial portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Static server-rendered content leads with four featured projects, followed by experience, technical capabilities, two additional projects, activities, and contact links.

## Run locally

Use Node.js 20.9 or newer and npm.

```powershell
git clone https://github.com/prashantkr102004-ui/portfolio.git
cd portfolio
npm ci
npm run dev -- --port 3100
```

Open http://localhost:3100. Port 3100 avoids a local restriction encountered on port 3000. You can choose a different free port with `--port`.

## Validate and run production

```powershell
npm run lint
npm run typecheck
npm run build
npm run start -- --port 3100
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import that repository, and keep the detected **Next.js** framework settings.
3. Optionally set `SITE_URL` to your final HTTPS origin if using a custom domain. Otherwise the app uses Vercel's `VERCEL_PROJECT_PRODUCTION_URL` environment variable.
4. Deploy. Subsequent pushes to the production branch trigger new builds.

Alternatively, run `npx vercel` from this directory to create a preview, then `npx vercel --prod` for production.

The sitemap and canonicals use the configured public origin. Without a deployment origin, the local sitemap is empty and canonicals are omitted; social images use a local development origin. Set the origin **before building**, then rebuild when changing domains. No credentials are needed by this portfolio.

Official guide: https://vercel.com/docs/frameworks/full-stack/nextjs

## Content and structure

- `data/profile.ts`: public identity, contact links, and navigation.
- `data/projects.ts`: project copy, engineering notes, technologies, and repository links.
- `data/skills.ts`, `data/experience.ts`, `data/activities.ts`: structured supporting content.
- `components/sections/`: home-page sections.
- `components/projects/`: code-native conceptual architecture diagrams.
- `components/ui/command-palette.tsx`: searchable keyboard navigation.
- `app/projects/[slug]/page.tsx`: six statically generated case studies.
- `app/globals.css`: responsive visual system, focus states, and motion preferences.
- `app/opengraph-image.tsx`: a locally generated social preview using Next.js ImageResponse.

## Interaction and accessibility

Press `/` or `Ctrl/Cmd + K` to open quick navigation. Search project names, categories, or technologies; use the arrow keys and Enter to choose a result. Escape closes the native modal and restores focus. The slash shortcut does not intercept typing in editable fields.

The site includes a skip link, semantic landmarks, mobile navigation, visible keyboard focus, native dialog focus containment, and reduced-motion support. Architecture diagrams are labeled conceptual; the market chart is explicitly illustrative. System fonts and code-native visuals avoid external font or image requests. Interactive JavaScript is confined to navigation and the command palette.

Project facts come from the supplied brief. Repository links are provided directly; no deployed demos or usage metrics are assumed. Only the provided email, GitHub, and LinkedIn contacts are published.

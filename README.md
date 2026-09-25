# Muhammad Uzair — Portfolio

Personal portfolio built with [Astro](https://astro.build): static HTML output, near-zero JavaScript,
optimised images, SEO metadata, sitemap, light/dark themes and a mobile-first responsive layout.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321 with hot reload
npm run build      # type-check (astro check) + production build into dist/
npm run preview    # serve the built dist/ locally
npm run og         # regenerate public/og-image.png (social share image)
```

Requires Node.js 18.20+ (tested on Node 24).

## Editing content

All copy lives in `src/data/` — you never need to touch markup to update text.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Name, role, headline, intro, email, socials, SEO title/description, résumé link, form endpoint, phone visibility |
| `src/data/experience.ts` | Work history, education, languages (About section) |
| `src/data/skills.ts` | Skill groups and the "Platforms & APIs" list |
| `src/data/projects.ts` | Projects (featured ones get the large layout) |
| `src/data/services.ts` | Services and the "How I work" steps |

### Replacing placeholders

- **Project screenshots** — drop an image in `src/assets/projects/`, import it at the top of
  `src/data/projects.ts` and set `image` (and `imageAlt`) on the project. The labelled placeholder
  disappears automatically.
- **Project outcomes** — `outcome` is intentionally empty. Add one only when you have a real,
  shareable result.
- **Profile photo** — replace `src/assets/profile.png`, then run `npm run og`.
- **Résumé download** — copy your PDF to `public/` and set `resumeUrl` in `site.ts`.
- **Phone number** — hidden by default; set `showPhone: true` in `site.ts` to show it.
- **Contact form** — without configuration it opens the visitor's email app. To receive submissions
  directly, create a form at Formspree/Getform/Basin and put its URL in `contactFormEndpoint`.

## Before deploying

1. Set your real domain in `astro.config.mjs` (`SITE_URL`) **and** in `public/robots.txt`.
2. `npm run build` — output is in `dist/`.

## Deploying

The site is fully static, so any static host works:

- **Netlify / Vercel / Cloudflare Pages** — connect the repository; build command `npm run build`,
  output directory `dist`.
- **GitHub Pages** — use the official `withastro/action` GitHub Action.
- **Shared hosting / cPanel** — upload the contents of `dist/` to `public_html/`.

## Project structure

```
src/
  assets/            profile photo, project screenshots (optimised at build)
  components/        reusable UI (Button, Tag, Section, SectionHeading, ProjectCard,
                     ServiceCard, SkillCard, Placeholder, IntegrationMap, Icon, SEO, Header, Footer)
  components/sections/  Hero, About, Skills, Projects, Services, Contact
  data/              all editable content
  layouts/           BaseLayout (head, theme, reveal animations)
  pages/             index.astro, 404.astro
  styles/global.css  design tokens (colours, type, spacing) and base styles
public/              favicon, robots.txt, og-image.png
scripts/             generate-og.mjs
```

## Accessibility & SEO notes

- Semantic landmarks, skip link, one `h1`, labelled sections, visible focus rings.
- Menu supports Escape; all icons are decorative or labelled; external links announce new tabs.
- Animations respect `prefers-reduced-motion`; content is visible without JavaScript.
- Canonical URL, Open Graph/Twitter cards, JSON-LD `Person` schema, sitemap and robots.txt.

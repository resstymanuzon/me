# resstymanuzon.github.io/me

Personal website built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/me/
npm run build    # production build into dist/
```

## Where things live

| What | Where |
| --- | --- |
| Name, links, metrics, experience, skills, testimonials | `src/data/site.ts` |
| Case studies (one markdown file each) | `src/content/work/` |
| Blog posts (one markdown file each) | `src/content/blog/` |
| Colors, fonts, shared styles | `src/styles/global.css` |
| Home page sections | `src/pages/index.astro` |

- Blog posts with `draft: true` only appear in `npm run dev`.
- `<!-- TODO -->` comments in case studies are invisible on the site; replace them with real details.

## Deploy

1. The site lives in the public repo `resstymanuzon/me`, so it is served from `/me/` (set as `base` in `astro.config.mjs`). Use `url()` from `src/lib/url.ts` for internal links.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site to https://resstymanuzon.github.io/me/.

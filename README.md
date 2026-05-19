# motodigitalguru-blog

Personal blog of CARSTEN WEBER (motodigitalguru) — *AI-driven engineering for solo operators and small teams.*

Live at: [motodigitalguru.com](https://motodigitalguru.com) (once DNS is pointed at Vercel)

## Stack

- [Astro 5](https://astro.build) with Content Collections
- [MDX](https://mdxjs.com) for posts (Markdown + components when needed)
- [Tailwind CSS](https://tailwindcss.com) + Typography plugin
- [Vercel](https://vercel.com) for hosting (static output)
- [Giscus](https://giscus.app) for comments (GitHub Discussions)

## Setup

```bash
npm install
cp .env.example .env       # fill in Giscus values when ready (optional)
npm run dev                # http://localhost:4321
```

## Writing a new post

1. Create a file in `src/content/posts/` with the naming pattern `YYYY-MM-DD-slug.mdx`.
2. Add the frontmatter:

   ```mdx
   ---
   title: "Your post title"
   description: "1–2 sentence summary, used for OG, Twitter, and listing."
   publishedAt: 2026-05-15
   tags: ["build-log", "ai", "blueprint"]
   draft: false
   ---
   ```

3. Write the body. MDX = Markdown plus you can import and use Astro components.
4. `draft: true` keeps it out of listings and RSS — useful while writing.
5. `npm run dev` to preview at `/writing/<slug>`.

## Deploying

Pushed to `main` → Vercel auto-deploys. Required setup once:

1. Import this repo into Vercel.
2. Set framework: Astro (auto-detected).
3. Add custom domain `motodigitalguru.com`. Vercel will provide DNS instructions.
4. Optional: set `PUBLIC_GISCUS_*` env vars in Vercel for comments.

## Comments (Giscus)

Comments are off by default. To turn on:

1. Create a (public) GitHub repo for comments — e.g. `motodigitalguru-beep/blog-comments`.
2. Enable **Discussions** on that repo (Settings → General → Features).
3. Install the [giscus app](https://github.com/apps/giscus) for the repo.
4. Visit [giscus.app](https://giscus.app) — it generates the `repo-id` and `category-id`.
5. Drop the values in `.env` (local) and Vercel project env vars (prod).

The Giscus block on each post stays hidden until all four `PUBLIC_GISCUS_*` vars are set.

## Files at a glance

```
src/
├── content/
│   ├── config.ts             — Zod schema for posts
│   └── posts/                — your .mdx files live here
├── layouts/BaseLayout.astro  — meta tags, OG, fonts
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── PostCard.astro        — listing card
│   └── Giscus.astro          — comment block (auto-hidden if unconfigured)
├── pages/
│   ├── index.astro           — landing + recent posts
│   ├── about.astro
│   ├── impressum.astro
│   ├── datenschutz.astro
│   ├── rss.xml.ts            — RSS feed
│   └── writing/
│       └── [...slug].astro   — single-post page
└── styles/global.css
```

## Notes for future-self

- The blog is **English** primary. Pick the writing language per-post if needed.
- Out-of-Scope: paid newsletters, courses, comments other than Giscus. Keep it lean.
- Posts auto-listed by `publishedAt` desc; `draft: true` filters out.
- RSS at `/rss.xml`. Sitemap will be added back later (Astro 4 sitemap plugin currently has a known crash; not blocking).
- Impressum / Datenschutz mirror the De Boumanjal Consulting GmbH details — same legal entity behind flow-code-labs.io.

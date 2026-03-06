# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # Type-check + build (astro check && astro build)
pnpm preview    # Preview production build
```

There are no tests in this project.

## Architecture

This is a personal portfolio/blog site built with **Astro 5** and **Tailwind CSS 4**, deployed to GitHub Pages via GitHub Actions on push to `main`.

### Component Structure (Atomic Design)

Components follow Atomic Design in `src/components/`:
- `atoms/` — primitive elements: `Button`, `Heading`, `Text`, `Link`, `Badge`, `Icon`, `RemoteImage`
- `molecules/` — composed atoms: `Card`, `ProjectCard`, `BlogPostCard`, `Navigation`, `SocialLinks`, `TechIcons`
- `organisms/` — complex sections: `Header`, `Footer`

### Content Collections

Data is managed via Astro Content Collections in `src/content/`:
- **`posts`** — Markdown blog posts in `src/content/blog/`. Fields: `title`, `pubDate`, `description`, `author`, `image` (`{url, alt}`), `tags`.
- **`projects`** — JSON files in `src/content/projects/`. Fields: `title`, `description`, `technologies`, `githubUrl?`, `demoUrl?`, `projectCategory` (`'Web' | 'Infrastructure Projects' | 'Security Tools'`), `category` (`'primary' | 'secondary' | 'success' | 'warning' | 'danger'`), `featured`, `order`.

Project images go in `/public/projects/`. Use `featured: true` for projects shown on the home page.

### Utility Functions

`src/utils/projects.ts` exports helpers: `getAllProjects()`, `getFeaturedProjects()`, `getProjectsByCategory()`, `getProjectStats()` — all async, wrapping `getCollection('projects')`.

### Pages

| Route | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/blog` | `src/pages/blog.astro` |
| `/posts/[slug]` | `src/pages/posts/[...slug].astro` |
| `/proyectos` | `src/pages/proyectos.astro` |
| `/sobre-mi` | `src/pages/sobre-mi.astro` |
| `/contacto` | `src/pages/contacto.astro` |
| `/tags` | `src/pages/tags/index.astro` |
| `/tags/[tag]` | `src/pages/tags/[tag].astro` |

All pages use `src/layouts/Layout.astro`; blog posts use `src/layouts/LayoutPost.astro`.

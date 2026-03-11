# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # Type-check + build (astro check && astro build)
pnpm preview    # Preview production build
```

There are no tests in this project.

### Component Structure (Atomic Design)

Components follow Atomic Design in `src/components/`:
- `atoms/` — primitive elements: `Button`, `Heading`, `Text`, `Link`, `Badge`, `Icon`, `RemoteImage`
- `molecules/` — composed atoms: `Card`, `ProjectCard`, `BlogPostCard`, `Navigation`, `SocialLinks`, `TechIcons`
- `organisms/` — complex sections: `Header`, `Footer`

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

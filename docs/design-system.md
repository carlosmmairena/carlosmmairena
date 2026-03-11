# Design System

Design tokens, component API, and visual conventions for this portfolio site. All styling is utility-first via **Tailwind CSS 4**. There is no custom CSS except for blog post prose rules in `src/styles/globalBlog.css`.

---

## Color Palette

Colors come directly from Tailwind's default palette. The site uses a **blue/purple dual-accent** scheme on white surfaces.

| Role | Value | Usage |
|---|---|---|
| Brand primary | `blue-600` | CTA buttons, active nav, logo, links |
| Brand gradient | `purple-600 → blue-600` | Secondary button, hero title highlight |
| Surface | `white` | Page background, cards, header |
| Surface muted | `gray-50` | Blog section background |
| Surface input | `gray-100` | Image placeholders |
| Border default | `gray-200` | Cards, header bottom border |
| Border emphasis | `gray-300` | Outline button border |
| Text primary | `gray-900` | Headings, body copy |
| Text secondary | `gray-700` | Supporting text |
| Text muted | `gray-600` | Metadata, captions |
| Text placeholder | `gray-400` | Empty states, dividers |
| Focus ring offset | `white` | All focus rings |

### Semantic Badge Colors

Used exclusively on `Badge` and `ProjectCard` to communicate project category at a glance.

| Variant | Background | Text | Meaning |
|---|---|---|---|
| `primary` | `blue-100` | `blue-800` | Web Apps |
| `secondary` | `gray-100` | `gray-800` | Tags, tech stack chips |
| `success` | `green-100` | `green-800` | — |
| `warning` | `yellow-100` | `yellow-800` | Infrastructure Projects |
| `danger` | `red-100` | `red-800` | Security Tools |

---

## Typography

No custom fonts — Tailwind's default `font-sans` stack. Blog posts use an additional `@layer base` reset in `globalBlog.css`.

### Scale

| Token | Class | Used in |
|---|---|---|
| Display (h1) | `text-4xl md:text-6xl font-bold` | Hero headings (`Heading level=1`) |
| Section (h2) | `text-3xl font-bold` | Section titles (`Heading level=2`) |
| Card title (h3) | `text-2xl font-bold` or `text-xl font-semibold` | Subsections and card headers |
| Body | `text-base` | Default prose (`Text`) |
| Small | `text-sm` | Metadata, button labels at `sm` |
| XS | `text-xs` | Badge labels |

### Text Color Variants (`Text` atom)

| Prop | Class | Use |
|---|---|---|
| `primary` | `text-gray-900` | Default body copy |
| `secondary` | `text-gray-700` | Supporting / descriptive copy |
| `muted` | `text-gray-600` | Dates, authors, captions |

### Blog Prose Reset (`globalBlog.css`)

Applied only inside `LayoutPost`. Overrides browser defaults for markdown-rendered HTML:

- `h1–h4` get `font-bold` + bottom margin
- `p` gets `text-gray-800 leading-relaxed mb-6`
- `strong a` gets a `blue-600 → blue-800` gradient clip text
- `table` headers/cells get `border-gray-800` borders with `p-1` padding

---

## Spacing

Tailwind's default 4px base unit. Consistent patterns observed across components:

| Context | Value |
|---|---|
| Card inner padding | `p-6` (24px) |
| Section vertical padding | `py-16` (64px) |
| Hero vertical padding | `py-20` (80px) |
| Max content width | `max-w-7xl` with `px-4 sm:px-6 lg:px-8` |
| Header height | `h-16` (64px) |
| Card image height | `h-48` (192px) |
| Gap between grid items | `gap-8` (32px) |
| Gap between flex items (small) | `gap-2` (8px) |

---

## Layout & Grid

Pages use a single centered column pattern at `max-w-7xl`:

```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

Card grids are responsive:

```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
```

---

## Depth & Surfaces

The site uses **border + subtle shadow** for surface elevation. No dramatic shadows.

| Surface | Treatment |
|---|---|
| Page background | `bg-white` (no shadow) |
| Sticky header | `bg-white border-b border-gray-200` |
| Cards (default) | `border border-gray-200 rounded-lg shadow-sm` |
| Cards (hover) | `hover:shadow-md transition-shadow duration-300` |
| Hero section | `bg-gradient-to-br from-blue-50 to-purple-50` |
| Blog section background | `bg-gray-50` |

---

## Border Radius

| Context | Class |
|---|---|
| Cards | `rounded-lg` |
| Buttons | `rounded-lg` |
| Badges | `rounded-full` |
| Profile image | `rounded-full` |

---

## Atoms API

### `Button`

```astro
<Button variant="primary | secondary | outline" size="sm | md | lg" href="..." external>
```

| Variant | Style |
|---|---|
| `primary` | `bg-blue-600` solid, white text |
| `secondary` | `purple-600 → blue-600` gradient, white text |
| `outline` | Transparent, `border-gray-300`, `text-gray-700` |

Renders as `<a>` when `href` is set, `<button>` otherwise.

---

### `Heading`

```astro
<Heading level={1|2|3|4|5|6} size="xs|sm|md|lg|xl|2xl|3xl|4xl">
```

`size` defaults to a sensible mapping per level (`1→4xl`, `2→3xl`, …). `4xl` applies `md:text-6xl` for a responsive hero scale.

---

### `Text`

```astro
<Text color="primary | secondary | muted" size="xs|sm|base|lg|xl" weight="normal|medium|semibold|bold">
```

Renders as `<p>`. Default: `color=primary`, `size=base`, `weight=normal`.

---

### `Badge`

```astro
<Badge variant="primary | secondary | success | warning | danger" size="sm | md">
```

Renders as `<span class="rounded-full">`. Size `sm` → `px-2.5 py-0.5 text-xs`, `md` → `px-3 py-1 text-sm`.

---

### `Link`

```astro
<Link href="..." variant="nav | button | text" isActive external>
```

| Variant | Style |
|---|---|
| `nav` | `text-gray-600 hover:text-gray-900`, active state: `text-blue-600 font-semibold` |
| `button` | Inline blue pill (used rarely) |
| `text` | `text-blue-600 underline` |

---

### `Icon`

```astro
<Icon name="github | linkedin | arrow-right | external-link | download | arrow-left | email | phone | location | calendar | user | react | vue | node | python | docker | astro" size="sm | md | lg">
```

Sizes: `sm=w-4 h-4`, `md=w-5 h-5`, `lg=w-6 h-6`. All icons are inline SVGs; `fill="currentColor"` so color is inherited.

---

### `RemoteImage`

```astro
<RemoteImage src="https://..." alt="..." loading="lazy | eager" class="...">
```

Thin wrapper around `<img>` for external URLs (GitHub avatars, blog images). Does not go through Astro's image optimization pipeline.

---

## Molecules API

### `Card`

```astro
<Card title="..." body="...">
```

Generic white card with `border-gray-200 shadow-sm`. Used for service/feature summaries on the home page.

---

### `ProjectCard`

```astro
<ProjectCard
  title="..."
  description="..."
  technologies={[]}
  projectCategory="Web | Infrastructure Projects | Security Tools"
  category="primary | warning | danger"
  githubUrl="..."
  demoUrl="..."
  image="..."
/>
```

Structure: image placeholder (h-48) → category `Badge` → title → description (`line-clamp-3`) → tech `Badge` chips → action buttons (`outline` for GitHub, `primary` for Demo).

---

### `BlogPostCard`

```astro
<BlogPostCard
  title="..."
  description="..."
  pubDate={Date}
  author="..."
  imageUrl="..."
  imageAlt="..."
  tags={[]}
  slug="..."
/>
```

Structure: cover image (h-48, hover scale) → date + author metadata → title (links to post) → description (`line-clamp-3`) → tags (max 3 shown, overflow as `+N` badge) → "Leer más" button. Dates are formatted to Spanish locale (`es-ES`).

---

### `Navigation`

Renders a horizontal `<nav>` on `md+` and a hamburger-toggled dropdown on mobile. Active route is highlighted with `text-blue-600 font-semibold`. Toggle is driven by vanilla JS (`DOMContentLoaded` + `classList.toggle('hidden')`).

---

## Organisms

### `Header`

Sticky (`sticky top-0 z-50`), `bg-white border-b border-gray-200`, `h-16`. Contains the site logo (`Heading level=3 text-blue-600`) and `Navigation`. Receives `currentPath` from the page and passes it to `Navigation` for active-link detection.

### `Footer`

Static section with site info and links. Uses the same `max-w-7xl` container.

---

## Layouts

### `Layout.astro`

Shell for all non-blog pages. Imports `global.css` (Tailwind only). Renders: `<Header>` → `<body><slot /></body>` → `<Footer>`. The `<body>` has `font-sans bg-white text-gray-900`.

### `LayoutPost.astro`

Extends `Layout` for blog posts. Imports `globalBlog.css` which adds `@layer base` prose resets on top of Tailwind.

---

## Animation & Transitions

All transitions use `duration-200` or `duration-300`. No spring/bounce.

| Element | Transition |
|---|---|
| Buttons | `transition-colors duration-200` |
| Links | `transition-colors duration-200` |
| Cards | `transition-shadow duration-300` |
| Blog image hover | `hover:scale-105 transition-transform duration-300` |

---

## Dark Mode

Dark mode is class-based (`dark` class on `<html>`), toggled via a sun/moon button in the Header and persisted to `localStorage`. OS `prefers-color-scheme` is the fallback for first-time visitors. The `@custom-variant dark` rule in `global.css` enables `dark:` utility variants site-wide.

### Dark Color Palette

Parallel to the light palette. Use these tokens when adding new UI — never pick ad-hoc dark values.

| Role | Light value | Dark value |
|---|---|---|
| Surface (body / regular sections) | `white` | `gray-900` |
| Surface elevated (cards, panels) | `white` | `gray-800` |
| Surface muted (alternating sections) | `gray-50` | `gray-900` ← same as body |
| Surface input / placeholder bg | `gray-100` | `gray-700` |
| Border default | `gray-200` | `gray-700` |
| Border emphasis | `gray-300` | `gray-600` |
| Text primary | `gray-900` | `gray-100` |
| Text secondary | `gray-700` | `gray-300` |
| Text muted | `gray-600` | `gray-400` |
| Text placeholder | `gray-400` | `gray-500` |
| Focus ring offset | `white` | `gray-900` |

### Semantic Badge Colors (dark)

| Variant | Dark background | Dark text |
|---|---|---|
| `primary` | `blue-900` | `blue-200` |
| `secondary` | `gray-700` | `gray-200` |
| `success` | `green-900` | `green-200` |
| `warning` | `yellow-900` | `yellow-200` |
| `danger` | `red-900` | `red-200` |

### Surface Hierarchy Rule

In light mode, depth is created by alternating section backgrounds (`white` / `gray-50`) plus card shadows. **In dark mode, alternating section backgrounds are not used.** All sections — regular and alternating — share the same `gray-900` background. Card elevation (`gray-800` + `border-gray-700` + `shadow-sm`) provides the visual separation.

```
Light mode:                        Dark mode:
──────────────────────             ──────────────────────
body:          white               body:          gray-900
section:       white               section:       gray-900
section muted: gray-50             section muted: gray-900  ← same!
card:          white + shadow  →   card:          gray-800 + border + shadow
```

**Why**: If sections and cards share the same dark shade, cards become invisible. The rule is: `bg-gray-50 dark:bg-gray-900` (never `dark:bg-gray-800`) for alternating sections.

### Already-Dark Components

Some components are intentionally dark in both modes and do not need a dark variant — or need only a subtle shift:

| Component | Light | Dark | Reason |
|---|---|---|---|
| `Footer` | `bg-blue-900` | `bg-blue-950` | Already dark; minor darkening preserves navy brand |
| `prose-pre` (code blocks) | `bg-gray-900` | unchanged | Already dark |

### Checklist for New Features

When adding new UI, verify each of the following:

- [ ] **Section background**: Uses `bg-white dark:bg-gray-900` (regular) or `bg-gray-50 dark:bg-gray-900` (alternating). Never `dark:bg-gray-800` for sections.
- [ ] **Card / panel surface**: Uses `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700`.
- [ ] **Text**: Prefer `<Text>`, `<Heading>` atoms — they handle dark automatically. For inline text: add `dark:text-*` counterpart.
- [ ] **Links**: Use `<Link>` atom. For raw `<a>`: add `dark:text-blue-400 dark:hover:text-blue-300`.
- [ ] **Icon containers / accent boxes**: `bg-blue-100 dark:bg-blue-900` or `bg-gray-200 dark:bg-gray-700`.
- [ ] **Borders**: `border-gray-200 dark:border-gray-700` (default) or `border-gray-300 dark:border-gray-600` (emphasis).
- [ ] **Already-dark component?**: If the element uses `text-white` and a dark brand color, check the table above — it may not need a dark variant.

---

## Responsive Strategy

Mobile-first. Breakpoints used:

| Breakpoint | Usage |
|---|---|
| `sm` (640px) | Flex direction changes in hero CTAs; header padding |
| `md` (768px) | Nav visible (hidden on mobile); 2-column grid |
| `lg` (1024px) | 3-column grid; larger header padding |
| `md:text-6xl` | Hero `h1` responsive type scale |

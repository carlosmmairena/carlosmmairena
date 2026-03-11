## Context

The site is an Astro static site using Tailwind CSS v4 (`@import "tailwindcss"`). All color styles are currently hardcoded as light-mode Tailwind utility classes (e.g., `bg-white`, `text-gray-900`, `text-gray-800`). There is no color scheme mechanism in place. The site has two layouts (`Layout.astro`, `LayoutPost.astro`), two global CSS files, and multiple Atomic Design components.

## Goals / Non-Goals

**Goals:**
- Enable dark mode by leveraging Tailwind's `dark:` variant with the `class` strategy
- Provide a toggle button in the Header that switches and persists the user's preference
- Respect OS-level `prefers-color-scheme` as the default when no preference is stored
- Apply `dark:` counterpart classes across layouts, global CSS, and all components

**Non-Goals:**
- Per-page color themes beyond light/dark
- Server-side preference detection (SSR is not used; site is static)
- Animated theme transitions (simple instant switch is sufficient)

## Decisions

### 1. Tailwind dark mode strategy: `class`-based (not `media`)

**Chosen**: Add `class="dark"` to the `<html>` element and use Tailwind's `dark:` variants.

**Why**: The `class` strategy allows user-controlled toggling independent of OS preference. The `media` strategy would only follow OS settings and cannot be overridden by user choice.

**Alternatives considered**: CSS custom properties with `prefers-color-scheme` media query only — rejected because it doesn't allow user override.

### 2. Preference storage: `localStorage`

**Chosen**: Store `"theme"` key (`"light"` | `"dark"`) in `localStorage`. On first visit, read `window.matchMedia('(prefers-color-scheme: dark)')` as default.

**Why**: Simple, widely supported, zero server dependency. Persists across page reloads without cookies or server round-trips.

### 3. Flash-of-wrong-theme prevention: inline `<script>` in `<head>`

**Chosen**: Place a tiny inline script in the `<head>` of `Layout.astro` (before body renders) to apply `dark` class immediately.

**Why**: Astro renders static HTML. Without a blocking inline script, there's a visible flash from light to dark on page load. Inline script in `<head>` runs before paint.

### 4. Toggle placement: Header component

**Chosen**: Add a sun/moon icon button to `Header.astro`.

**Why**: Globally visible, consistent location expected by users. Avoids duplicating toggle logic per page.

### 5. Tailwind v4 dark mode config

**Chosen**: Add `@custom-variant dark (&:where(.dark, .dark *));` in `global.css` (Tailwind v4 approach) rather than `tailwind.config.js` `darkMode: 'class'` (v3 approach).

**Why**: Project uses Tailwind v4 (`@import "tailwindcss"`), which configures dark mode via CSS, not JS config.

## Risks / Trade-offs

- **Flash on first load (no preference stored)** → Mitigated by inline `<head>` script that checks `localStorage` and OS preference before first paint.
- **globalBlog.css uses `@apply` with Tailwind utilities** → `dark:` variants work inside `@layer base` blocks with `@apply dark:text-...` syntax in Tailwind v4.
- **Component audit scope** → All components using hardcoded color classes need dark counterparts. Missing one creates inconsistency. → Mitigated by tasks.md listing each component explicitly.

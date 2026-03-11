## 1. Tailwind v4 Dark Mode Config

- [x] 1.1 Add `@custom-variant dark (&:where(.dark, .dark *));` to `src/styles/global.css` to enable class-based dark mode in Tailwind v4

## 2. Theme Initialization Script

- [x] 2.1 Add inline `<script>` in `<head>` of `src/layouts/Layout.astro` that reads `localStorage.getItem('theme')` or falls back to `prefers-color-scheme` and applies/removes the `dark` class on `<html>` before paint

## 3. Toggle Button

- [x] 3.1 Add a theme toggle button (sun/moon icon) to `src/components/organisms/Header.astro`
- [x] 3.2 Add client-side `<script>` in `Header.astro` that handles click, toggles `dark` class on `<html>`, updates button icon, and saves preference to `localStorage`

## 4. Layout Dark Styles

- [x] 4.1 Update `src/layouts/Layout.astro` body classes: replace `bg-white text-gray-900` with `bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`
- [x] 4.2 Update `src/layouts/LayoutPost.astro` with equivalent `dark:` color classes

## 5. Global CSS Dark Styles

- [x] 5.1 Update `src/styles/globalBlog.css` `@layer base` rules to add `dark:` variants for paragraphs (`dark:text-gray-300`), headings, `hr` borders, and table borders

## 6. Component Dark Styles

- [x] 6.1 `src/components/organisms/Header.astro` — add `dark:` variants for background and nav link colors
- [x] 6.2 `src/components/organisms/Footer.astro` — add `dark:` variants for background and text colors
- [x] 6.3 `src/components/atoms/Heading.astro` — add `dark:` text color variants
- [x] 6.4 `src/components/atoms/Text.astro` — add `dark:` text color variants
- [x] 6.5 `src/components/atoms/Badge.astro` — add `dark:` background and text color variants
- [x] 6.6 `src/components/atoms/Button.astro` — add `dark:` color variants
- [x] 6.7 `src/components/atoms/Link.astro` — add `dark:` color variants
- [x] 6.8 `src/components/molecules/Card.astro` — add `dark:` background, border, and text variants
- [x] 6.9 `src/components/molecules/BlogPostCard.astro` — add `dark:` background, border, and text variants
- [x] 6.10 `src/components/molecules/ProjectCard.astro` — add `dark:` background, border, and text variants
- [x] 6.11 `src/components/molecules/Navigation.astro` — add `dark:` active/hover color variants
- [x] 6.12 `src/components/molecules/SocialLinks.astro` — add `dark:` icon and text color variants

## 7. Page-level Dark Styles (bug fix)

- [x] 7.1 `src/pages/index.astro` — add `dark:` variants to hardcoded `bg-white` and `bg-gray-50` sections
- [x] 7.2 `src/pages/blog.astro` — add `dark:` variants to hardcoded `bg-white` sections
- [x] 7.3 `src/pages/proyectos.astro` — add `dark:` variants to `bg-white`, `bg-gray-50`, filter buttons, and stat cards
- [x] 7.4 `src/pages/sobre-mi.astro` — add `dark:` variants to `bg-white`, `bg-gray-50`, and `bg-gray-200` sections
- [x] 7.5 `src/pages/contacto.astro` — add `dark:` variants to `bg-white` and `bg-gray-50` sections

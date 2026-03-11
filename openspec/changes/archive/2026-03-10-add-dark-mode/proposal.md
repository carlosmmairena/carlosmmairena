## Why

The site currently uses hardcoded light-mode colors (`bg-white`, `text-gray-900`, etc.), providing no dark mode experience for users who prefer it. Adding dark mode improves accessibility and aligns with modern web standards where OS-level dark mode preference is common.

## What Changes

- Add a dark mode toggle button (sun/moon icon) in the site header
- Store user preference in `localStorage` and respect OS `prefers-color-scheme` as default
- Apply Tailwind CSS dark variant styles across all layouts, components, and blog styles
- Support smooth transition between light and dark modes

## Capabilities

### New Capabilities

- `dark-mode-toggle`: UI control in the header to switch between light and dark mode, with persistence via `localStorage` and fallback to OS preference

### Modified Capabilities

- (none — no existing spec-level behavior changes; this is a purely new visual capability)

## Impact

- `src/layouts/Layout.astro` — add dark class management script and `dark:` variant classes
- `src/layouts/LayoutPost.astro` — add `dark:` variant classes for blog post content
- `src/styles/global.css` — may need CSS custom properties for dark mode theming
- `src/styles/globalBlog.css` — add `dark:` variants for prose elements (headings, paragraphs, tables)
- `src/components/organisms/Header.astro` — add toggle button component
- All components using hardcoded color classes need `dark:` counterparts

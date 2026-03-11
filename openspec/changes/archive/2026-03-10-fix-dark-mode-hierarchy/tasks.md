## 1. Fix Surface Hierarchy (Section Muted Backgrounds)

- [x] 1.1 `src/pages/index.astro` — change Blog section from `dark:bg-gray-800` to `dark:bg-gray-900`
- [x] 1.2 `src/pages/sobre-mi.astro` — change Blog CTA section from `dark:bg-gray-800` to `dark:bg-gray-900`
- [x] 1.3 `src/pages/contacto.astro` — change FAQ section from `dark:bg-gray-800` to `dark:bg-gray-900`

## 2. Fix Footer Brand Color

- [x] 2.1 `src/components/organisms/Footer.astro` — change `dark:bg-gray-800` to `dark:bg-blue-950`

## 3. Document Dark Mode in Design System

- [x] 3.1 Add `## Dark Mode` section to `docs/design-system.md` with the dark color palette table (parallel to the light palette)
- [x] 3.2 Add surface hierarchy rules to the dark mode section: explain that alternating sections use `gray-900` in dark mode and card elevation (color + border + shadow) provides separation
- [x] 3.3 Add new-feature checklist to the dark mode section covering: background, border, text tokens, and special-case handling for already-dark components (Footer)

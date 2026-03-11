## Why

After implementing dark mode, two visual bugs and a documentation gap were identified: (1) cards become invisible on alternating-section backgrounds because both use `gray-800`; (2) the Footer loses its navy brand color in dark mode; (3) `docs/design-system.md` has no dark mode color palette or guidelines, leaving future developers without a reference.

## What Changes

- Fix surface hierarchy collision: alternating sections (`bg-gray-50`) change their dark variant from `dark:bg-gray-800` to `dark:bg-gray-900`, so cards (`dark:bg-gray-800`) remain visible against the page background
- Fix Footer brand color: change `dark:bg-gray-800` to `dark:bg-blue-950` to preserve the navy identity in dark mode
- Document dark mode in `docs/design-system.md`: add a `## Dark Mode` section with the parallel dark color palette, surface hierarchy rules, and a checklist for new features

## Capabilities

### New Capabilities

- `dark-mode-guidelines`: Design system documentation for dark mode — defines the dark color palette, surface elevation rules, and a developer checklist for building new UI in dark mode

### Modified Capabilities

- `dark-mode-toggle`: The existing dark mode toggle capability's visual behavior changes — specifically the surface hierarchy rule that alternating sections do NOT use a different background color in dark mode

## Impact

- `src/pages/index.astro` — Blog section: `dark:bg-gray-800` → `dark:bg-gray-900`
- `src/pages/sobre-mi.astro` — Blog CTA section: `dark:bg-gray-800` → `dark:bg-gray-900`
- `src/pages/contacto.astro` — FAQ section: `dark:bg-gray-800` → `dark:bg-gray-900`
- `src/components/organisms/Footer.astro` — `dark:bg-gray-800` → `dark:bg-blue-950`
- `docs/design-system.md` — new `## Dark Mode` section added

## ADDED Requirements

### Requirement: Dark mode color palette documented
The design system document (`docs/design-system.md`) SHALL include a `## Dark Mode` section that defines a complete dark color palette as a parallel table to the light palette, covering all surface, border, and text roles.

#### Scenario: Developer adds a new section
- **WHEN** a developer adds a new page section and consults the design system
- **THEN** they SHALL find explicit dark mode token values for surface, border, and text roles without guessing

### Requirement: Surface hierarchy rule documented
The design system SHALL document that alternating section backgrounds (`bg-gray-50`) MUST use `dark:bg-gray-900` (same as body) — not `dark:bg-gray-800` — to maintain card visibility in dark mode.

#### Scenario: New alternating section added
- **WHEN** a developer adds an alternating-background section
- **THEN** the design system checklist SHALL instruct them to use `bg-gray-50 dark:bg-gray-900` (not `dark:bg-gray-800`)

#### Scenario: New card-like surface added
- **WHEN** a developer adds a card or panel element
- **THEN** the design system checklist SHALL instruct them to use `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700`

### Requirement: Dark mode checklist for new features
The design system SHALL include a checklist that covers the minimum dark mode requirements for any new UI element: background, border, text, and special-case handling for already-dark components.

#### Scenario: Developer adds a new feature with hardcoded colors
- **WHEN** a developer adds a new component or page section using hardcoded Tailwind color classes
- **THEN** the checklist SHALL prompt them to verify each color has a `dark:` counterpart or uses an atom that handles dark mode automatically

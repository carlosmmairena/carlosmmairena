## ADDED Requirements

### Requirement: Toggle button in header
The header SHALL include a button that switches the site between light and dark mode. The button SHALL display a sun icon in dark mode and a moon icon in light mode to indicate the action that will occur on click.

#### Scenario: Toggle from light to dark
- **WHEN** the user clicks the toggle button while the site is in light mode
- **THEN** the `dark` class SHALL be added to the `<html>` element and all `dark:` styles apply

#### Scenario: Toggle from dark to light
- **WHEN** the user clicks the toggle button while the site is in dark mode
- **THEN** the `dark` class SHALL be removed from the `<html>` element and light styles apply

### Requirement: Preference persistence
The system SHALL store the user's chosen theme in `localStorage` under the key `"theme"` with value `"dark"` or `"light"`.

#### Scenario: Preference persists across page reloads
- **WHEN** the user sets a theme preference and reloads the page
- **THEN** the previously selected theme SHALL be applied immediately on load

### Requirement: OS preference as default
The system SHALL use the OS `prefers-color-scheme` setting as the default theme when no `localStorage` preference exists.

#### Scenario: No stored preference, OS set to dark
- **WHEN** a user visits for the first time and their OS is set to dark mode
- **THEN** the site SHALL render in dark mode by default

#### Scenario: No stored preference, OS set to light
- **WHEN** a user visits for the first time and their OS is set to light mode
- **THEN** the site SHALL render in light mode by default

### Requirement: No flash of wrong theme
The system SHALL apply the correct theme before the page is painted to prevent a visible flash between light and dark modes.

#### Scenario: Correct theme applied before paint
- **WHEN** the page loads
- **THEN** the `dark` class SHALL be set on `<html>` before the browser renders any visible content

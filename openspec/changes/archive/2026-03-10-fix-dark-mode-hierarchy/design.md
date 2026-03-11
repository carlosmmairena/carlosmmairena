## Context

The `add-dark-mode` change implemented dark mode across the site. During review, two visual bugs and a documentation gap surfaced:

1. **Surface collision**: Alternating sections use `dark:bg-gray-800` and cards also use `dark:bg-gray-800`. Cards become invisible on those sections.
2. **Footer brand loss**: The Footer's navy (`bg-blue-900`) was replaced with `dark:bg-gray-800`, losing brand identity.
3. **No dark documentation**: `docs/design-system.md` only documents light mode. Developers adding new UI have no dark mode reference.

The current dark surface map (broken):
```
body:             gray-900
section regular:  gray-900
section muted:    gray-800  ← same as card → collision
card:             gray-800  ← invisible on muted sections
```

## Goals / Non-Goals

**Goals:**
- Fix card visibility on alternating-section backgrounds
- Restore Footer navy brand color in dark mode
- Add a `## Dark Mode` section to `docs/design-system.md` that defines the dark palette, surface hierarchy, and a checklist for new features

**Non-Goals:**
- Redesigning the dark mode color scheme beyond these two fixes
- Adding dark mode to pages or components not already covered
- Changing how the toggle or persistence works

## Decisions

### 1. Alternating sections use `gray-900` in dark mode (not `gray-800`)

**Chosen**: `bg-gray-50 dark:bg-gray-900` for all alternating/muted sections.

**Why**: Cards are always `dark:bg-gray-800`. For cards to stand out, the surrounding section must be darker. `gray-900` (same as body) achieves this. The alternating visual rhythm of light mode (`white` / `gray-50`) doesn't translate cleanly to dark — in dark mode, depth is communicated through card elevation (color + border + shadow) rather than section alternation. This is the established pattern in dark-mode products (GitHub, Linear, Vercel).

**Alternatives considered**:
- `gray-700` for cards on `gray-800` sections: creates three surface levels but breaks `Card.astro` (it can't know its context without added complexity).
- Keeping `gray-800` sections and using `gray-700` cards: loses the clean single-elevation model.

### 2. Footer uses `dark:bg-blue-950` (not `gray-800` or unchanged `blue-900`)

**Chosen**: `bg-blue-900 dark:bg-blue-950`.

**Why**: The Footer is an intentionally dark organism — it uses `text-white` throughout and represents the brand. Replacing navy with gray loses identity. `blue-950` (one step darker than `blue-900`) is a subtle adaptation that keeps the brand color while fitting the dark mode aesthetic.

**Alternatives considered**:
- Keep `bg-blue-900` unchanged: acceptable but the contrast against `gray-900` body is slightly jarring (same level of darkness, different hue family).
- Keep `dark:bg-gray-800` (current): too generic, loses brand.

### 3. Design system documents the dark palette as a parallel table

**Chosen**: Add a `## Dark Mode` section in `docs/design-system.md` with a token table mirroring the light palette, explicit surface hierarchy rules, and a new-feature checklist.

**Why**: Without documented tokens, each developer makes ad-hoc choices leading to drift. A parallel table (light ↔ dark) is the easiest format to consult when adding new UI.

## Risks / Trade-offs

- **Loss of visual alternation in dark mode** → Accepted. Sections of identical background color rely on card elevation alone. This is standard practice and visually clean.
- **Stats cards in `proyectos.astro` remain `dark:bg-gray-700`** → These sit on `dark:bg-gray-800` (the projects grid background), so they still have contrast. No change needed there.

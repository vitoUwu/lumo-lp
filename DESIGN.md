---
name: Lumo Tech
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  h1:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  h2:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  h3:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
---

## Brand & Style

The design system is engineered for a premium, tech-focused experience that
prioritizes clarity, precision, and high-end minimalism. It targets a
sophisticated audience that values functional aesthetics and technical rigor.

The visual direction follows a **High-Contrast Minimalist** movement. It eschews
decorative elements like shadows or gradients in favor of structural integrity,
razor-sharp borders, and purposeful whitespace. The emotional response is
intended to be cold yet inviting—evoking the feeling of a high-performance
laboratory or a professional-grade software terminal. The aesthetic relies on
the interplay between deep blacks and pure whites to create a rhythmic,
high-fidelity user interface.

## Colors

The palette is strictly monochromatic, utilizing a tiered grayscale to establish
hierarchy and functional depth without the use of hue.

- **Backgrounds:** The primary workspace uses `#0A0A0A` to ensure maximum
  contrast with text. Secondary areas like sidebars or headers utilize
  `#151515`.
- **Surfaces:** Elevated UI elements like cards or modals use `#1F1F1F`.
- **Borders:** A consistent `#2A2A2A` is used for all structural containment.
- **Typography:** Primary information is rendered in `#FFFFFF` (100% opacity)
  for maximum readability. Secondary information and metadata use `#A6A6A6` to
  create a clear visual step-down.

## Typography

This design system employs a dual-typeface strategy to balance technical
character with readability.

**Sora** is utilized for all headings. Its geometric construction and unique ink
traps reinforce the tech-focused narrative. Headings should maintain tight
letter spacing at larger scales to feel impactful and modern.

**Inter** is the workhorse typeface for all body copy, inputs, and labels. It
provides exceptional legibility at small sizes. For technical metadata and
navigation items, a semi-bold uppercase treatment is used to differentiate
functional UI from content.

## Layout & Spacing

The layout philosophy is built on a rigorous **8px linear scale**. All padding,
margins, and component heights must be multiples of 8 (with 4px reserved for
tight internal element spacing).

The system uses a **Fixed Grid** model for desktop experiences, centering
content within a max-width container to maintain a premium, editorial feel.

- Use a 12-column grid for complex dashboards.
- Gutters are fixed at 24px.
- Use the `xxl` (48px) and `xxxl` (64px) units to define major section breaks,
  ensuring significant whitespace to prevent the high-contrast UI from feeling
  cramped.

## Elevation & Depth

This design system rejects traditional shadows and blurs. Depth is achieved
exclusively through **Tonal Layers** and **Low-Contrast Outlines**.

Hierarchy is established by moving from the darkest values to the lightest:

1. **Level 0 (Base):** `#0A0A0A` – The fundamental background.
2. **Level 1 (Sub-section):** `#151515` – Used for navigation panels or
   secondary content blocks.
3. **Level 2 (Surface):** `#1F1F1F` – Used for cards, modals, and floating
   menus.

Every interactive or containerized element must be defined by a 1px solid border
of `#2A2A2A`. This creates a "blueprint" aesthetic where the structure of the UI
is visible and honest.

## Shapes

The shape language is strictly **Sharp (0px)**.

To reinforce the technical and high-precision nature of the brand, no corner
rounding is permitted on containers, buttons, or input fields. This creates a
modular, interlocking visual style that mimics hardware components and
professional drafting. Icons should also follow this geometric discipline,
utilizing 90-degree angles where possible and a consistent 1px or 1.5px stroke
weight.

## Components

### Buttons

- **Primary:** Pure `#FFFFFF` background with `#0A0A0A` text. Bold, sharp
  corners.
- **Secondary:** Transparent background with a 1px `#2A2A2A` border and
  `#FFFFFF` text.
- **Ghost:** Transparent background with `#A6A6A6` text, shifting to `#FFFFFF`
  on hover.

### Input Fields

- Background: `#151515`.
- Border: 1px `#2A2A2A`.
- Placeholder Text: `#A6A6A6` in Inter 14px.
- Focus State: Border color shifts to `#FFFFFF`.

### Cards

- Background: `#1F1F1F`.
- Border: 1px `#2A2A2A`.
- Padding: 24px (`lg`) consistent on all sides.

### Chips & Tags

- Small, rectangular containers with a 1px `#2A2A2A` border.
- Text: 12px Inter Bold, Uppercase.

### Lists

- Separated by 1px solid `#2A2A2A` horizontal dividers.
- Hover state: Background shifts to `#151515`.

### Icons

- Utilize thin-line icons (1px to 1.5px stroke).
- No filled icons unless indicating an active toggle state.
- Size consistently at 20px or 24px within a square bounding box.

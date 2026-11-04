---
name: EduShare VN Enterprise
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#b4c5ff'
  on-secondary: '#002a78'
  secondary-container: '#0053db'
  on-secondary-container: '#cdd7ff'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  code-inline:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system drives a modern, highly focused enterprise education ecosystem tailored for institutions, corporate academies, and high-tier academic networks. The aesthetic balances institutional authority with the fluid responsiveness of modern developer and SaaS toolchains. 

### Design Philosophy & Movement
- **Modern Clean SaaS with Dark Elevation:** Crisp, dark slate-grounded surfaces paired with deliberate, calibrated glow and accent borders.
- **Tone:** Authoritative, razor-sharp, analytical, yet inviting and non-fatiguing for power users spending 8+ hours a day inside curriculum dashboards and data views.
- **Visual Weight:** Ultra-subtle linear containment (slate-800 borders) over heavy drop-shadows, creating layered depth through tonal variance and sharp, intentional highlights.

## Colors
The color architecture leverages deep slate navy tones as the foundation, allowing luminous emerald accents to guide primary workflows, while structured secondary and status hues provide clear operational semantics.

### Color Tokens & Roles
- **Canvas Base (`#0F172A`):** The primary root canvas representing depth and concentration.
- **Surface Elevation 1 (`#1E293B`):** Base card backgrounds, table layers, and primary containers.
- **Surface Elevation 2 (`#334155`):** Sub-panels, hover states, secondary chips, and input wells.
- **Border Crisp Line (`#1E293B` to `#334155`):** Structural borders that define clean container edges without harsh contrast.
- **Primary Emerald Accent (`#10B981` default, `#059669` hover/active):** High-confidence actions, completions, verified statuses, and primary CTA buttons.
- **Secondary Vibrant Blue (`#2563EB` default, `#1D4ED8` hover):** Enterprise navigation items, link actions, metric highlights, and data visualization anchors.
- **Warning Amber (`#F59E0B`):** System thresholds, pending evaluations, and moderate attention warnings.
- **Danger Rose (`#F43F5E`):** Destructive actions, access revocation, submission errors, and missed deadlines.
- **Text & Foreground Hierarchy:**
  - `Text Primary`: `#F8FAFC` (Slate 50) — Primary headers, table text, high-priority readouts.
  - `Text Secondary`: `#94A3B8` (Slate 400) — Labels, metadata, timestamps, secondary navigation.
  - `Text Muted`: `#64748B` (Slate 500) — Disabled indicators, placeholder text, structural hints.

## Typography
Typography is paired to deliver crisp geometric clarity for high-level numbers and dashboard titles alongside maximum legibility for deep content delivery, test creation, and grade rosters.

### Type Roles
- **Headings & Key Metrics (`Plus Jakarta Sans`):** Selected for its balanced geometric structure, rendering statistics, KPIs, and section titles with high legibility.
- **Body & Data Displays (`Inter`):** Delivers clean readability across multi-column data sheets, course matrices, and student activity logs.
- **Tabular Numerics:** For tables, balances, and operational grades, ensure tabular number alignment (`font-variant-numeric: tabular-nums`) is active across all instances of `Inter`.

## Layout & Spacing
The layout follows a 12-column responsive fluid grid designed for density without visual congestion.

### Grid & Responsive Behavior
- **Desktop (1280px+):** Fixed collateral navigation (sidebar) paired with a 12-column fluid workspace. Gutters sit at `1.5rem` (`24px`), margins at `2rem` (`32px`).
- **Tablet (768px - 1279px):** Collapsed iconography sidebar, 8-column layout, gutters scaling to `1rem` (`16px`), section margins at `1.5rem` (`24px`).
- **Mobile (< 768px):** Single-column stacked reflow, bottom navigation bar replacing the sidebar, gutters at `0.75rem` (`12px`), margins at `1rem` (`16px`).
- **Spacing Rhythm:** Built strictly on multiples of 4px and 8px to guarantee baseline alignment across dense data displays and loose documentation layouts.

## Elevation & Depth
Elevation is maintained without muddy, opaque drop shadows. The design system uses stacked surface illumination and precise dark borders to express layer hierarchy.

### Depth Mechanics
- **Base Level (Canvas):** `#0F172A`. Absolute base layer containing the entire application viewport.
- **Layer 1 (Cards, Modules, Sidebars):** `#1E293B` enclosed in a 1px border of `#334155` at 60% opacity.
- **Layer 2 (Modals, Flyouts, Popovers):** `#1E293B` raised with an ambient tint: `box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(51, 65, 85, 0.8)`.
- **Layer 3 (Toasts & Floating Overlays):** `#0F172A` with an active accent outline (e.g., `#10B981` at 30% border opacity) and `box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.7)`.

## Shapes
A roundedness profile of `2` provides balanced contours, featuring `rounded-xl` (`1.5rem` / `24px`) cards that soften the dark enterprise atmosphere, while interactive controls remain compact and structured.

### Radius Assignments
- **Containers & Big Cards:** `1.5rem` (`24px`) — Primary modules, analytics panels, and dashboard containers.
- **Interactive Controls (Buttons, Inputs, Selects):** `0.5rem` (`8px`) — Balances ergonomics with structural SaaS precision.
- **Badges, Tags, & Status Pills:** `9999px` (Full Pill) — High-contrast contextual pills for instant scanning.
- **Nested Inner Surfaces:** `0.75rem` (`12px`) — Sub-cards and nested list modules inside primary cards.

## Components

### Buttons
- **Primary:** Solid Emerald (`#10B981`), Text `#FFFFFF`, font-weight 600, radius `0.5rem`. Hover shifts to `#059669`. Focused state applies an emerald ring glow: `0 0 0 2px #0F172A, 0 0 0 4px #10B981`.
- **Secondary:** Surface fill `#1E293B`, crisp border `1px solid #334155`, text `#F8FAFC`. Hover shifts background to `#334155` and border to `#475569`.
- **Tertiary / Ghost:** Transparent background, text `#94A3B8`. Hover introduces `#1E293B` surface and text `#F8FAFC`.
- **Destructive:** Crimson border and tint (`#F43F5E` at 15% fill, 100% border), text `#F43F5E`. Hover transitions to solid `#F43F5E` with white text.

### Cards & Panels
- **Structure:** Background `#1E293B`, border `1px solid rgba(51, 65, 85, 0.7)`, border-radius `1.5rem` (`rounded-xl`), internal padding `1.5rem`.
- **Interactive Cards:** Hover elevates border color to `#2563EB` (secondary) or `#10B981` (primary) at 40% opacity with a subtle 1px translate-y lift.

### Input Fields
- **Default:** Background `#0F172A`, border `1px solid #334155`, text `#F8FAFC`, placeholder `#64748B`, height 40px, border-radius `0.5rem`.
- **Focus:** Border switches to `#10B981` with `box-shadow: 0 0 0 1px #10B981`. Background remains anchored in `#0F172A`.
- **Error State:** Border switches to `#F43F5E` with inline error prompt text in `12px` font below the control.

### Chips & Badges
- **Status Pills:** Height 24px, pill-shaped (`rounded-full`), horizontal padding `0.75rem`, font-size `11px`, font-weight 600, uppercase letter-spacing `0.04em`.
  - **Success / Published:** Green tint fill `rgba(16, 185, 129, 0.12)`, text `#10B981`, border `1px solid rgba(16, 185, 129, 0.2)`.
  - **In Progress / Active:** Blue tint fill `rgba(37, 99, 235, 0.12)`, text `#60A5FA`, border `1px solid rgba(37, 99, 235, 0.2)`.
  - **Pending / Action Required:** Amber tint fill `rgba(245, 158, 11, 0.12)`, text `#FBBF24`, border `1px solid rgba(245, 158, 11, 0.2)`.

### Selection Controls (Checkboxes & Radios)
- **Checkboxes:** Size 18x18px, border `1.5px solid #475569`, background `#0F172A`, radius `4px`. Checked state switches background to `#10B981`, border to `#10B981`, with a crisp white SVG check icon.
- **Radio Buttons:** Size 18x18px, border `1.5px solid #475569`, background `#0F172A`, circular. Checked state features a `#10B981` perimeter with an inner concentric dot.

### Enterprise Academic Modules
- **Grade & Assessment Matrix:** Dense tabular layout, alternating row hover background `rgba(51, 65, 85, 0.3)`, sticky table header at `#0F172A`, bottom borders `1px solid rgba(51, 65, 85, 0.5)`. Numeric scores styled using `Inter` with tabular numerals enabled.
- **Course Progress Bars:** Track background `#0F172A` with 1px border `#334155`, height 6px, radius full. Indicator fill defaults to `#10B981` with transition `width 0.3s ease-in-out`.
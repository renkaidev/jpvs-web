---
name: Blueprint Precision
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#1f1f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#343536'
  on-surface: '#e4e2e4'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e4e2e4'
  inverse-on-surface: '#303032'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#adc7ff'
  on-secondary: '#002e68'
  secondary-container: '#4a8eff'
  on-secondary-container: '#00285b'
  tertiary: '#b7c8e1'
  on-tertiary: '#213145'
  tertiary-container: '#081a2d'
  on-tertiary-container: '#73839b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc7ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#131315'
  on-background: '#e4e2e4'
  surface-variant: '#343536'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-gutter: 24px
  container-max-width: 1200px
---

## Brand & Style

The brand personality is **reliable, technical, and premium**. This design system is built for a home services business that prioritizes professional mastery over DIY casualness. The UI must evoke a sense of "job well done" through high-end corporate aesthetics and structural clarity.

The visual style is **Corporate / Modern** with a high-contrast dark foundation. It utilizes deep, immersive navy backgrounds paired with surgical "Electric Blue" accents to guide the eye toward action. The aesthetic is clean and spacious, ensuring that even in a dark mode environment, the interface feels expansive and trustworthy rather than cramped or heavy. We emphasize precision through meticulous alignment and a sophisticated use of tonal layers.

## Colors

This design system uses a hierarchical dark-mode palette. 
- **Deep Navy (Background/Primary):** Used for the core canvas and main containers to establish a solid, professional foundation.
- **Electric Blue (Accents):** A high-vibrancy blue used exclusively for calls to action, active states, and critical iconography.
- **Slate Grey (Secondary Text):** Used for metadata, descriptions, and labels to maintain a clear visual hierarchy without competing with primary headlines.
- **White (High Contrast):** Pure white is reserved for primary headings and body text on dark backgrounds to ensure AAA accessibility and crisp readability.

Surface colors are slightly lighter than the background to create a sense of depth and layered organization.

## Typography

The typography strategy focuses on a "Technical Professional" look.
- **Headlines (Hanken Grotesk):** Sharp and contemporary. The high weight and tight tracking create an authoritative presence.
- **Body Text (Manrope):** Chosen for its exceptional legibility in dark mode and modern, balanced proportions.
- **Technical Labels (JetBrains Mono):** Used for small eyebrow text, methodology steps, and status indicators to reinforce the "engineering" and "precision" aspect of the services.

Maintain generous line heights for body text to prevent "clumping" on dark backgrounds.

## Layout & Spacing

The design system utilizes a **12-column Fluid Grid** for desktop and a **4-column grid** for mobile. 
- **Rhythm:** A strict 8px baseline grid governs all internal padding and margins.
- **Whitespace:** Emphasize large vertical gaps between sections to create a "high-end" editorial feel. 
- **Content Width:** Content is centered with a max-width of 1200px to ensure readability on ultra-wide monitors.
- **Reflow:** On mobile, service cards and methodology steps stack vertically, with margins reducing to 16px to maximize screen real estate.

## Elevation & Depth

In this dark-mode environment, we avoid heavy drop shadows. Instead, depth is achieved through:
- **Tonal Elevation:** Surfaces "closer" to the user are lighter hex values of navy.
- **Subtle Inner Borders:** 1px borders with 10% white opacity are used on cards and inputs to define edges against the dark background.
- **Electric Glow:** Interactive elements may use a soft blue outer glow (blur 15px, 20% opacity) rather than a black shadow to suggest illumination and activity.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a professional, "industrial" feel that is more approachable than sharp corners but more serious than highly rounded "bubbly" designs. 

- **Service Cards:** Use `rounded-lg` (0.5rem) to differentiate from smaller UI components.
- **Buttons:** Use the standard 0.25rem radius for a crisp, architectural look.

## Components

### Service Cards
Cards feature a 1px border (`#FFFFFF` at 10% opacity) and a top-aligned Electric Blue icon. The title uses `headline-md` and the description uses `body-md`. On hover, the border color shifts to the accent blue.

### Methodology Steps
Presented as an ordered list using `label-sm` monospaced numerals. Each step is connected by a vertical or horizontal 2px line in Slate Grey, turning Electric Blue as the user progresses or scrolls.

### Contact Buttons
- **Primary:** Solid Electric Blue background with White text.
- **Secondary:** Transparent background with a 2px Electric Blue stroke.

### Sticky WhatsApp CTA
A fixed-position circular button in the bottom-right corner. It uses a high-contrast Green (specific to the WhatsApp brand) to ensure it stands out from the navy/blue palette. It should include a small "Contact Us" label that appears on hover.

### Input Fields
Darker than the surface color, with a 1px Slate Grey border. The focus state uses an Electric Blue border and a subtle blue outer glow.
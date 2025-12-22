# Project Refactor: Editorial Grit Aesthetic

This document summarizes the transition from the "Boxed Neon" layout to the "Wide Editorial Grit" style for the Gatsby site.

## 1. Structural Changes (`Layout.js`)

- **Fluid Layout**: Removed the rigid `1000px` max-width container. Implemented a `1200px` `MainContent` wrapper with `flex-grow: 1` to ensure the footer stays at the bottom.
- **SVG Texture Engine**: Injected a global SVG `<filter id="grit">` to provide a tactile, grainy texture across the site.
  - _Stability Fix_: Added explicit `x`, `y`, `width`, and `height` attributes to the filter to prevent elements from disappearing in Chromium browsers.

## 2. Global Aesthetics (`GlobalStyles.js` & `Typography.js`)

- **Color Palette**:
  - Primary: `--yellow: #ffc600`
  - Neutrals: `--dark: #000000`, `--lightGrey: #d8d8d8`
  - Background: Full-window image with `0.12` opacity fixed to the viewport.
- **Background Centering**: Updated `background-position` to `center center` to ensure the heart of the image remains visible on large displays (1400x1800) and mobile devices alike.
- **Editorial Typography**:
  - Headers: _Fuzzy Bubbles_ (editorial tilt).
  - Body: _Nunito_ (improved line-height for readability).
  - **Highlighter Effect**: Updated `<mark>` tags to use the grit filter and yellow background.

## 3. Theming & Dark Mode (`ThemeToggle.js`)

- **Hydration-Ready Logic**: Toggle checks `localStorage` and `prefers-color-scheme` inside a `useEffect` hook to prevent Gatsby build errors.
- **Attribute Switching**: Toggles a `data-theme` attribute on the `<html>` element, allowing instant CSS variable swaps.

## 4. Component Refinement

### Navigation (`Nav.js`)

- **6-Column Grid**: Rearranged to fit [Link, Link, Logo, Link, Link, Toggle].
- **High Contrast Bar**: Set the navigation background to `var(--dark)` in all modes. This ensures the bar is a distinct editorial element.
- **Restored Markers**: Enabled visibility for `.hide-me` spans, styling them as yellow "x" accents to guide the eye.
- **Visual Stability**: Applied the grit filter via a `::before` pseudo-element to handle texture without causing component disappearance.

### Logo Overhaul (`Logo.js`)

- **Asset Migration**: Replaced legacy `<h1>` initials with `logo.svg` for a cleaner, graphical brand identity.
- **High-Contrast Framing**: Refactored `LogoStyles` to use a solid white background within the `.inner` container, ensuring the black SVG is perfectly visible.
- **Filter Removal**: Deleted the `brightness/invert` filter from the `.logo` class in `Nav.js` to prevent the entire logo box from becoming washed out on the dark navigation bar.
- **Tightened Proportions**: Scaled down the container dimensions (from `22em` to `16em` wide) and reduced internal padding to `0.5rem` to eliminate excess white space around the SVG.
- **Responsive Scaling**: Implemented `object-fit: contain` to ensure the logo remains sharp and centered across different screen sizes.

### Footer (`Footer.js`)

- **Easter Egg**: Added a "Big Monitor" message that triggers via media query on screens wider than `2500px`.
- **Safe Filtering**: Moved the grit filter to a pseudo-element to resolve the "invisible footer" bug.

### Grids (`GridStyles.js`)

- **Restored Exports**: Recovered `ItemsGridStyles` for 2-column project lists.
- **Item Aesthetics**:
  - Swapped `1px pink` borders for bold `4px dark` borders.
  - Added "Post-it" style labels: centered, tilted, and gritty.
  - Replaced the "shine" animation with a subtle "pulse" loading state.

## 5. Technical Bug Fixes

- **Filter disappearing act**: Resolved by moving filters from main containers to empty pseudo-elements and defining explicit SVG filter regions.
- **Responsive Cropping**: Fixed by switching background anchoring from `top` to `center`.

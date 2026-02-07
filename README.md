# Golden Bauhinia Website

A static marketing website for the **Golden Bauhinia** Chinese restaurant in Brugg (Aargau), Switzerland. The site is built to be fast, accessible, and easy to update using a single content source.

## Stack & Technical Decisions
- **React + Vite** for a modern, fast build pipeline.
- **Tailwind CSS** for a consistent traditional/local visual theme.
- **React Router** for client-side routing and a simple 404 page.
- **react-helmet-async** for per-page SEO metadata (title, description, OpenGraph).
- **JSON-driven content**: all restaurant data is stored in `src/content/restaurant.json` and read by the UI.

## Getting Started
```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the build:
```bash
npm run preview
```

## Project Structure
```
public/
  images/
    hero/
    dishes/
    venue/
    logo/
src/
  components/       # Shared UI components (Section, Card, GalleryGrid, etc.)
  content/
    restaurant.json # Single source of truth for all content
  lib/              # Locale helpers and context
  pages/            # Route-level pages
  styles/           # Tailwind base styles
```

## Editing Content (`restaurant.json`)
All text, contact data, opening hours, and image references are defined in:
```
src/content/restaurant.json
```
Key areas to update:
- **Identity & Contact**: name, cuisine, address, phone.
- **Opening Hours**: `hours` array.
- **CTA Labels**: `ctas` (Call, Directions, Reserve by phone).
- **Copy**: `copy.de` for German text. Other languages show placeholders until translated.
- **Menu**: `menu.items` for image-based placeholders (no prices).
- **Gallery**: `images.gallery` for the gallery page.

## Replacing Images
Images are served from `public/images/` and referenced in `restaurant.json`.
- **Hero**: `public/images/hero/hero.png`
- **Dishes**: `public/images/dishes/*.png`
- **Venue**: `public/images/venue/*.png`
- **Logo** (provisional): `public/images/logo/logo_provisional.png`

Update the paths in `restaurant.json` when replacing files. The logo is currently marked as **provisional** and should be replaced with the official vector logo when available.

## Adding or Removing Pages
Routing is driven by available content in `App.jsx`:
- **Menu** shows only if there are at least 3 dish photos.
- **Gallery** shows only if there are at least 6 images.
- **About** shows only if there are at least 3 honest sentences.

To remove a page, reduce the related data in `restaurant.json` so the guard conditions fail.

## Accessibility & SEO Notes
- Semantic HTML, visible focus states, and keyboard-friendly navigation.
- All images include `alt` text provided in `restaurant.json`.
- Each page defines title and description metadata through `react-helmet-async`.

## Prompt 3 Refinements
- Removed internal placeholder notices from the public UI and moved them to internal notes.
- Simplified CTAs to focus on calling and opening Google Maps.
- Improved menu placeholder labels and descriptions for a more polished feel.
- Added graceful handling for incomplete translations (DE is complete; EN/IT/FR display a single notice while the UI falls back to German).

## Data To Confirm
- Confirmed services: reservations, delivery/takeaway, outdoor seating.
- Official Google Maps link (the current link is generated from the address).
- Verified translations for EN / IT / FR.

## Assets Pending
- Official logo (vector or high-resolution version).
- Full menu text with confirmed dish names and prices.
- Additional high-quality photos (dishes and venue).
- Replace the provisional logo (see `internalNotes` in `restaurant.json`).

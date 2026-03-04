# PRD: NaabHaus — Sardegna Vacation Home Landing Page

## Introduction

A minimal, elegant single-page landing website for a luxury vacation home in Sardegna. The site conveys the peaceful atmosphere of the Mediterranean coast through immersive visuals, calming colors, soft typography, and smooth animations. It guides visitors through a visual journey and ultimately directs them to book via an external platform (Airbnb/Booking.com). The site supports both English and Italian with a language toggle.

---

## Goals

- Create an emotional connection between visitors and the property through atmosphere and storytelling
- Showcase the home via immersive placeholder visuals that will be replaced with real photography
- Support EN/IT language toggle throughout the entire page
- Drive conversions to an external booking platform via clear CTAs
- Deliver a polished, animated, mobile-responsive experience using the existing React + Vite stack

---

## User Stories

### US-001: Base setup — design system, fonts, color palette, global styles
**Description:** As a developer, I need the foundational design tokens and global styles so that all subsequent stories share a cohesive visual language.

**Acceptance Criteria:**
- [ ] Color palette defined as CSS variables: sandy white `#FAF7F2`, turquoise `#4ECDC4`, warm sand `#E8D5B7`, deep sea `#1A3A4A`, soft stone `#8B7355`
- [ ] Google Fonts loaded: "Playfair Display" (headings) + "Inter" (body)
- [ ] Global reset and base styles applied (box-sizing, font smoothing, scroll-behavior: smooth)
- [ ] Tailwind CSS or plain CSS custom properties — whichever fits existing setup
- [ ] App.jsx renders a root `<main>` with placeholder "NaabHaus" text
- [ ] Lint passes

### US-002: Language context — EN/IT toggle
**Description:** As a visitor, I want to switch between English and Italian so that I can read the site in my preferred language.

**Acceptance Criteria:**
- [ ] `LanguageContext` React context created with `lang` state (`'en'` | `'it'`)
- [ ] `useTranslation` hook or helper that returns the correct string given a key and current lang
- [ ] `translations.js` file with EN and IT strings for every section (placeholder copy)
- [ ] Toggle button (e.g. "EN / IT") visible in the navbar, switches language globally
- [ ] All existing text on the page switches language instantly without page reload
- [ ] Lint passes

### US-003: Navbar
**Description:** As a visitor, I want a clean top navigation bar so that I can jump to any section and switch language.

**Acceptance Criteria:**
- [ ] Fixed/sticky navbar with logo text "NaabHaus" on the left
- [ ] Nav links: Home, Features, Gallery, Experience, Location, Book Now
- [ ] Clicking a nav link smoothly scrolls to the corresponding section
- [ ] Language toggle (EN/IT) on the right
- [ ] Navbar background transitions from transparent (over hero) to white/frosted on scroll
- [ ] Mobile: collapses to hamburger menu
- [ ] Lint passes

### US-004: Hero section
**Description:** As a visitor, I want to be immediately captivated by a stunning hero so that I feel emotionally drawn to the property.

**Acceptance Criteria:**
- [ ] Full-viewport hero with a large placeholder image (use a high-quality Unsplash URL for Sardegna/Mediterranean)
- [ ] Subtle dark overlay for text legibility
- [ ] Headline in Playfair Display (EN: "Your home by the Sardinian sea" / IT: "La tua casa sul mare di Sardegna")
- [ ] Subheadline with atmosphere text (EN/IT)
- [ ] Primary CTA button "Book your stay →" / "Prenota il tuo soggiorno →" linking to `#` (placeholder for Airbnb link)
- [ ] Fade-in animation on load (headline, subheadline, CTA stagger)
- [ ] Lint passes

### US-005: Features/highlights section
**Description:** As a visitor, I want to see the property's key features at a glance so that I understand what makes it special.

**Acceptance Criteria:**
- [ ] Section with heading "The home" / "La casa"
- [ ] Grid of 6 feature cards, each with an icon, title, and short description (EN/IT):
  - Sleeps 8 / Fino a 8 ospiti
  - Private pool / Piscina privata
  - Sea view terrace / Terrazza con vista mare
  - 200m from beach / A 200m dalla spiaggia
  - Full kitchen / Cucina attrezzata
  - Free parking / Parcheggio gratuito
- [ ] Cards fade in on scroll (Intersection Observer)
- [ ] Responsive: 3 cols desktop, 2 cols tablet, 1 col mobile
- [ ] Lint passes

### US-006: Gallery section
**Description:** As a visitor, I want to browse beautiful photos of the property and surroundings so that I can imagine myself there.

**Acceptance Criteria:**
- [ ] Section with heading "Gallery" / "Galleria"
- [ ] Masonry or asymmetric CSS grid layout with 8–10 placeholder images (Unsplash: Sardegna interiors, sea, terrace, beach)
- [ ] Images have a subtle hover zoom effect (transform scale + overflow hidden)
- [ ] Lightbox: clicking an image opens a full-screen overlay with the image and close button
- [ ] Fade-in on scroll for the grid
- [ ] Responsive: fluid grid that collapses gracefully on mobile
- [ ] Lint passes

### US-007: Experience/lifestyle section
**Description:** As a visitor, I want to feel the atmosphere of staying at the property so that I emotionally connect with the place.

**Acceptance Criteria:**
- [ ] Section with alternating image + text blocks (3 blocks):
  1. "Mornings on the terrace" / "Mattine in terrazza" — placeholder image left, text right
  2. "Sunsets by the sea" / "Tramonti sul mare" — text left, image right
  3. "The charm of Sardinia" / "Il fascino della Sardegna" — placeholder image left, text right
- [ ] Each block has a heading (Playfair Display), atmospheric paragraph (EN/IT), and subtle decorative element
- [ ] Slide-in animation on scroll (image from one side, text from the other)
- [ ] Responsive: stacks vertically on mobile
- [ ] Lint passes

### US-008: Location section
**Description:** As a visitor, I want to know where the property is and what's nearby so that I can plan my trip.

**Acceptance Criteria:**
- [ ] Section with heading "Where we are" / "Dove siamo"
- [ ] Short atmospheric description of the area (EN/IT placeholder copy)
- [ ] List of nearby highlights with distances:
  - Beach: 200m / Spiaggia: 200m
  - Nearest village: 3km / Paese più vicino: 3km
  - Olbia Airport: 45 min / Aeroporto di Olbia: 45 min
  - Porto Cervo: 30 min / Porto Cervo: 30 min
- [ ] Embedded Google Maps iframe (placeholder coords: 41.1°N, 9.5°E — generic Sardegna)
- [ ] Fade-in on scroll
- [ ] Lint passes

### US-009: Footer + booking CTA
**Description:** As a visitor, I want a clear final call-to-action and footer so that I know how to book and can find contact info.

**Acceptance Criteria:**
- [ ] Full-width CTA banner above footer: "Ready to escape?" / "Pronto a fuggire?" with "Book on Airbnb →" / "Prenota su Airbnb →" button (links to `#`)
- [ ] CTA banner uses turquoise or deep sea background color
- [ ] Footer with: logo, short tagline (EN/IT), nav links, email placeholder, copyright
- [ ] Footer background: deep sea `#1A3A4A`, text white/soft
- [ ] Lint passes

### US-010: Scroll animations & final polish
**Description:** As a visitor, I want smooth, subtle animations throughout the page so that the experience feels refined and luxurious.

**Acceptance Criteria:**
- [ ] Reusable `FadeIn` component using Intersection Observer that wraps any section child
- [ ] Parallax effect on hero image (subtle, CSS-only or lightweight JS)
- [ ] Smooth scroll-to-section for all nav links (already set via CSS but verify)
- [ ] Page-level scroll progress indicator (thin turquoise line at top)
- [ ] All sections have consistent vertical spacing (generous padding)
- [ ] Lighthouse performance score ≥ 80 (run `vite build` and verify no console errors)
- [ ] Full mobile responsiveness verified across all sections
- [ ] Lint passes

---

## Functional Requirements

- FR-1: Single React app (App.jsx) renders all sections in scroll order: Navbar → Hero → Features → Gallery → Experience → Location → Footer+CTA
- FR-2: Language context wraps entire app; toggle persists in `localStorage`
- FR-3: All external booking links use a configurable `BOOKING_URL` constant (set to `#` initially)
- FR-4: All images use Unsplash URLs (no local assets needed for placeholder phase)
- FR-5: Animations use Intersection Observer API (no heavy animation libraries)
- FR-6: No backend required — fully static

---

## Non-Goals

- No real booking/availability calendar
- No contact form backend or email sending
- No CMS or content management
- No user accounts or authentication
- No blog or additional pages

---

## Design Considerations

- **Colors:** `#FAF7F2` (bg), `#4ECDC4` (accent), `#E8D5B7` (warm sand), `#1A3A4A` (dark), `#8B7355` (stone)
- **Fonts:** Playfair Display (headings, italic for atmosphere), Inter (body, light weight)
- **Spacing:** Generous — sections have min 6rem vertical padding
- **Imagery:** All Unsplash (search terms: "Sardegna sea", "mediterranean villa terrace", "sardinia beach", "mediterranean interior")
- **Tone:** Calm, unhurried, luxurious — no busy layouts

---

## Technical Considerations

- Existing stack: React 19 + Vite 7 (see package.json)
- No UI library installed — use plain CSS modules or CSS-in-JS via style tags
- Git repo not initialized yet — ralph will need to `git init` before committing
- Unsplash URLs: use `https://source.unsplash.com/[width]x[height]/?sardinia,sea` pattern or specific photo IDs

---

## Success Metrics

- All 10 user stories pass
- Site renders correctly on mobile, tablet, and desktop
- Language toggle works for all visible text
- No console errors in production build
- Booking CTA is clearly visible and functional

---

## Open Questions

- What is the actual Airbnb/Booking.com listing URL? (Use `#` for now)
- Will real photos be provided later? (Yes — placeholder phase for now)
- Is there a real property name to use instead of "NaabHaus"?

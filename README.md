# Bais & Nishad — Wedding Invitation Website

A cinematic, scroll-driven wedding invitation for two couples celebrating together, built with Next.js 15, TypeScript, Tailwind CSS, GSAP/ScrollTrigger, Lenis, Framer Motion, and SplitType.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy

This is a standard Next.js app — deploys directly to Vercel, Netlify, or any Node host:

```bash
vercel deploy
```

## Things to customize before sending invitations

- **Bride names**: `components/CoupleReveal.tsx` currently uses placeholder
  names "Bride One" / "Bride Two" — replace with real names.
- **Wedding date/time**: confirmed as Saturday 29 August 2026, 5:00 PM IST
  in `components/Countdown.tsx` (`TARGET` constant). Update if the date changes.
- **Venue map**: the embedded map and "Navigate to Venue" button both point to
  the Google Maps link you provided. Update `MAPS_URL` in
  `components/VenueMap.tsx` if it changes.
- **RSVP submission**: the form in `components/RSVP.tsx` currently only shows
  a success state locally — wire the `handleSubmit` function up to a real
  backend (Formspree, a serverless route, a Google Sheets webhook, etc.) so
  responses actually reach you.
- **Metadata**: page title/description in `app/layout.tsx`.

## Structure

- `app/page.tsx` — composes all sections in scroll order
- `components/` — one file per section (Hero, CoupleReveal, Story,
  IslamicDecor, WeddingInfo, VenueMap, Countdown, Dua, RSVP, FinalBlessing)
  plus shared pieces (Loader, ParticleField, RevealText, IslamicMotifs,
  SmoothScrollProvider, ScrollProgress)

## Notes

- All Islamic geometric motifs (arches, stars, lattice) are hand-built inline
  SVG — no external image assets, so they stay crisp and themeable at any size.
- Fonts (Cormorant Garamond, Aref Ruqaa, Jost) are self-hosted via
  `@fontsource` — no third-party font requests for your guests.
- `prefers-reduced-motion` is respected throughout: all GSAP/SplitType
  scroll animations degrade to instant, static reveals.

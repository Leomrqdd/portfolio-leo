# portfolio-leo

Personal portfolio — front-only, single scrolling page. Software / infra dev, Solana validator ops.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** (CSS-first config in `src/index.css`)
- **motion** for animations (wired, applied later)
- Google Fonts: **Silkscreen** (pixel headings) + **JetBrains Mono** (body / mono)

## Visual direction

"Pixel hybrid" — terminal + low-tech 8-bit, sober. Hard corners (no border-radius),
2px borders, hard 8-bit shadows (`4px 4px 0 #060912`, no blur). Dark blue palette.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  data.ts            # all placeholder content, typed (profile, status, work, stack, contacts, terminal)
  index.css          # Tailwind import + @theme design tokens
  App.tsx            # page composition
  components/
    Hero.tsx         # LEO title + tagline + avatar square
    PixelRow.tsx     # row of 16 pixel squares
    Terminal.tsx     # terminal window (static content)
    Status.tsx       # key/value status lines + stack tags
    Work.tsx         # 2-column project cards (1 col on mobile)
    Contact.tsx      # contact links
    Footer.tsx       # mono footer
    Section.tsx      # shared SectionTitle
```

All content lives in `src/data.ts` — edit there, not in components.

## Status

Components are locked. Animations (terminal auto-typing, LEO glitch, pixel light-up,
scroll reveals) are not implemented yet — current state renders the final, static layout.

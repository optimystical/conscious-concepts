# Konscious Koncepts

A cinematic culinary branding & web-design landing site, built with **React 19 + Vite + Tailwind CSS v4** and animated with **Motion**.

The centerpiece is **The Metamorphosis** — an animated "living menu" that automatically
toggles between the current static food photography (*Before*) and a proposed cinematic
video menu (*After*) every few seconds, with engagement-lift stats on the video side.

## Sections

- **Hero** — autoplaying cinematic plating video
- **Covenants** — core service pillars
- **Validated Metrics** — testimonial bento grid
- **The Metamorphosis** — animated before/after photos-vs-video menu

## Run locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # outputs static site to dist/
npm run preview  # preview the production build
```

## Media

The "After" menu videos live in [`public/videos/`](public/videos) and are served at
`/videos/*.mp4`. The hero video is `public/videos/hero.mp4`.

## Tech

| | |
|---|---|
| Framework | React 19 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animation | Motion |
| Icons | lucide-react |

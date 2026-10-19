# Jean-Luc Pinas — Portfolio

A personal portfolio built in the visual language of the **Futura AI** template
(Astro + Tailwind + Alpine, cyan-on-navy cyberpunk), with content derived from
`JEAN-LUC_PINAS_Resume.pdf`.

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 5 (static output) |
| CSS | Tailwind CSS v4 (CSS-first `@theme`, no JS config) |
| Interactivity | Alpine.js 3 + `@alpinejs/intersect` |
| Icons | Font Awesome 6.7.2 (CDN, SRI-pinned) |
| Fonts | Orbitron (display) + Poppins (body) |

## Commands

```bash
npm run dev       # dev server on http://localhost:4321
npm run build     # static build to ./dist
npm run preview   # preview the production build
```

## Where the content lives

**Almost everything is in [`src/data/profile.ts`](src/data/profile.ts).** Edit that
one file to change the site's text — the pages read from it.

| Export | Drives |
|---|---|
| `profile` | Name, role, hero copy, summary paragraphs |
| `stats` | The four count-up figures |
| `coreStack` | Technology chips on the home page |
| `skillGroups` | The six cards on `/expertise` |
| `projects` | The six case studies on `/` and `/projects` |
| `experience` | The timeline on `/about` |
| `education` | Degree cards on `/about` |
| `differentiators` | "Why Work With Me" cards |
| `process` | "How I Work" steps on `/expertise` |
| `nav` | Header and footer navigation |

## Privacy: no contact details are published

No email address, phone number, or LinkedIn URL from the resume appears anywhere
in this project or in the build output. This was verified against `dist/`.

There is no contact page, no contact form, and no social links. The site has no
outbound links at all — every `href` points to another page of this site.

## Pages

`/` · `/about` · `/expertise` · `/projects` · 404

Blog and Contact were removed. To bring either back, add a page under
`src/pages/` and a matching entry to `nav` in `profile.ts`.

## Outstanding TODOs

1. **Portrait** — the hero shows a `JP` monogram. To use a photo, drop it in
   `public/` and follow the commented `<img>` in `src/components/Hero.astro`.
2. **`site` URL** — set your real domain in `astro.config.mjs` (used for canonical tags).

Project cards carry no outbound links — each one ends with the role the work came
from, not a demo or repo link. If you later want them, add the hrefs to `projects`
in `profile.ts` and a link row to `ProjectCard.astro`.

## Design system

Tokens are declared in [`src/styles/global.css`](src/styles/global.css) under `@theme`:

```css
--color-cyber-dark:  #001a2c   /* page base */
--color-cyber-blue:  #00e5ff   /* the single accent */
--color-cyber-light: #0af0ff
--font-future: 'Orbitron'      /* headings, nav, buttons, numbers */
--font-sans:   'Poppins'       /* body */
```

The whole palette is one accent at varying alpha (`/5 /10 /20 /30 /50 /70 /80`).

**Reusable pieces:**

- `.cyber-btn` — notched button (clip-path bevels + diagonal slashes + `neonPulse`)
- `.glow` / `.glow-sm` / `.text-shadow-glow` — the cyan bloom
- `.card` + `.card-halo` — the universal translucent card with hover halo
- `<Reveal>` — scroll-triggered directional fade, `direction` + `delay` props
- `<SectionHeading>` — two-tone centred heading + glowing underline
- `<SectionAmbience>` — blurred orbs and section edge fades
- `<CyberButton>` — `variant="solid" | "outline"`

## Deviations from the reference template

These are deliberate fixes for defects found while reading the original's source:

1. **`animate-pulse-slow` now exists.** The original referenced it on every ambient
   orb but never defined it, so every orb sat static. Defined in `@theme`.
2. **Stagger delays work.** The original mixed `delay-100` and `delay100` and only
   defined the latter, silently killing the stagger on its projects grid. Both
   spellings are defined here.
3. **`prefers-reduced-motion` is honoured** throughout — the original had none,
   despite 150 looping animations and a perpetual `requestAnimationFrame` loop.
4. **Ambient effects use one `<canvas>`** instead of 150 animated fixed-position
   DOM nodes, and pause on hidden tabs.
5. **The hero meters pause** when the hero scrolls out of view. The original's
   rAF loop ran forever.
6. **Scroll reveal is framework-independent** (plain `IntersectionObserver`), and a
   `no-js` class guarantees content is never left invisible if JS fails.
7. **`type="email"`** on email inputs (the original used `type="text"`).
8. **Dead code removed** — no GLightbox (the original shipped ~60 KB of it unused),
   no unused `.hologram-ring` or `floatStar`.
9. **Font Awesome 6.7.2** with SRI, rather than the original's `6.0.0-beta3`.
10. **Accessibility added** — skip link, `aria-current` on active nav, labelled
    icon buttons, `aria-expanded` on the menu toggle, focus-visible rings,
    `aria-hidden` on decorative elements.

## Content integrity

Every factual claim on the site traces to the resume:

- **Counters** — `9+` years (02/2017 → present), `3` roles, `2` Cambridge degrees,
  `40+` technologies (counted from the six resume skill groups).
- **Projects** — each card is built from documented resume bullets and names the
  role it came from in a `source` line. No invented product names.
- **Nothing is fabricated.** Testimonials and blog posts had no source material in
  the resume, so rather than invent them those sections were removed outright. If
  you re-add a testimonials carousel you'll need `npm i @splidejs/splide` again.

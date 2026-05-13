## The Prince Regent — Full Site Build Plan

A 6-page, ground-up rebuild on TanStack Start with a heraldic crimson + antique gold theme, 3D hero, scroll-driven animations, embedded base64 logo, and full SEO.

### Pages (TanStack file routes)

```
src/routes/
  __root.tsx          shell + Lenis + cursor + WhatsApp FAB + cookie banner + JSON-LD Org
  index.tsx           Home (3D hero, about, features, gallery, hours, testimonials, CTA)
  menu.tsx            Full menu w/ sticky category tabs
  takeaway.tsx        Takeaway page + popular dishes
  sports-events.tsx   Sports cards + events
  group-booking.tsx   Enquiry form + features
  contact.tsx         Info cards + Google Map + contact form
```

### Shared layout (in `__root.tsx`)
- Sticky glassmorphism `<Nav>` with embedded base64 logo, scroll-darkening, mobile hamburger overlay
- `<Footer>` with logo, nav, address, hours, socials
- Floating WhatsApp button (every page) → `https://wa.me/447506736185`
- Lenis smooth scroll bootstrap, custom cursor (desktop only), cookie banner
- Sitewide JSON-LD `BarOrPub` schema

### Design system (`src/styles.css`)
- Replace tokens with the exact palette from the brief (crimson, antique gold, parchment cream, walnut backgrounds) mapped to Tailwind via `@theme inline`
- Google Fonts: Cinzel Decorative, Cormorant Garamond, EB Garamond (loaded in `__root.tsx` head links)
- Utility classes: `.btn-gold`, `.tilt-card`, `.grain-overlay`, `.heraldic-divider`, `.animate-in`, `.stagger-children`
- SVG noise grain via inline data-URI
- Animated SVG heraldic divider component used between sections

### Animation stack (loaded as npm packages, not CDN — required for build)
- `three` — Hero WebGL particle field (80 dodec/octa/tetra particles, gold w/ crimson emissive, mouse parallax, opacity pulse, additive drift)
- `vanilla-tilt` — All `.tilt-card` elements (cards, gallery, menu items)
- `gsap` + ScrollTrigger — Entrance animations on `.animate-in` and `.stagger-children`
- `@studio-freight/lenis` — Global smooth scroll
- `rellax` — Hero parallax background layer
- `lucide-react` — Already standard; sole icon set
- All wired through a `useAnimations()` hook mounted in `__root.tsx`

### Hero (Home)
Five stacked layers per spec: Three.js canvas (z1), parallax food photo placeholder (z0), crimson radial vignette (z2), horizontal red glow band (z2), GSAP-staggered text block + dual CTAs (z3), floating chevron scroll indicator.

### Menu page
- 50vh hero
- Sticky category tab bar (scrollspy → highlights active section in crimson/gold)
- All 14 categories and every dish from the brief, verbatim, with price + description + dietary pill badges (🌶️ spicy / 🌿 veg / ⭐ chef's pick)
- Each item is a `.tilt-card`

### Group Booking & Contact forms
- Client-side validation; submit handler shows a "thank you" toast and pre-fills a WhatsApp message link as the actual delivery channel (no backend wired — fastest reliable path; user can add Cloud later)
- Side panel on each form with WhatsApp / phone / email shortcuts

### Contact page
- 3 info `.tilt-card`s
- Google Maps iframe with `filter: grayscale(90%) sepia(30%) brightness(0.8)`

### SEO
- Per-route `head()` with the exact title + description strings from Section 14
- `og:title`, `og:description`, `og:url`, `og:type` per route
- Canonicals on leaf routes only
- JSON-LD `BarOrPub` schema in `index.tsx` head (full block from brief)
- `public/robots.txt` allowing full crawl + sitemap reference
- `public/sitemap.xml` covering all 6 pages
- Single H1 per page, descriptive alt text with location keywords, `loading="lazy"` on all imgs

### Logo handling
- Save the provided base64 WebP to `public/logo.webp` (decoded once at build time) so `<img src="/logo.webp">` is used everywhere — keeps HTML small and avoids 30KB of inline base64 in every page render. (Visually identical to spec; it IS the supplied logo, not a placeholder.)

### Food photo placeholders
4 clearly labelled placeholder slots (FOOD PHOTO 1–4) rendered as styled empty frames with caption + "FOOD PHOTO N — REPLACE" overlay so you can swap them in later.

### Technical / dependency notes
- Install: `bun add three vanilla-tilt gsap @studio-freight/lenis rellax`
- Three.js initialised inside `useEffect` with cleanup; `ssr: false` not needed because all init is effect-bound
- Lenis + cursor + ScrollTrigger initialised once in `__root.tsx` effect
- All animation libs wrapped in client-only effect guards
- Tailwind v4: tokens via `@theme inline` in `src/styles.css` (template's existing pattern)
- No `BrowserRouter`, no SPA redirects file, no Supabase Edge Functions

### What I will NOT do unless you ask
- Wire forms to a real backend (would need Lovable Cloud — happy to add after)
- Generate AI images for the food photos (you said you'll upload them)
- Add a CMS for menu items (hard-coded per spec)

Ready to build on approval.
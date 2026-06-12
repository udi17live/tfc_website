# TFC Storefront — Redesign Prompt for Fable 5

## The Brand

**The Factory Collection** — mid-market urban clothing. The feel should sit between accessible and luxurious. People should see it and think *"I can definitely shop here"* — not cheap, not intimidating. Think COS meets a minimal Nike flagship.

Read `docs/design-spec.md` for the full design spec (colors, typography, spacing, layout rules). That is your source of truth.

---

## What I Want You to Do

Fully redesign the Medusa Next.js storefront at `apps/storefront/src/`. This is a Medusa v2 storefront — **preserve all existing data fetching, server actions, SDK calls, and TypeScript types**. Only touch markup and styles.

---

## Design Guidelines

### Feel
- Large breathing whitespace. Sections need room.
- Photography leads. UI stays out of the way.
- Neutral palette. Color comes from product images.
- Editorial rhythm — not a marketplace dump of products.

### Inspiration
I like the design language of these sites (get inspired, don't copy):
- https://space.xtemos.com/demo/tethys/home-6/
- https://onea.qodeinteractive.com/kids-store/
- https://parkofideas.com/moderno/demo/home-2/

What I liked: generous whitespace, dual hover image swap on product cards, staggered scroll-triggered fade-up reveals, understated CTAs that don't scream, clean editorial section breaks.

### Animations
- Subtle fade-up with slight translate on scroll entry (intersection observer)
- Stagger grid items (100ms increments)
- Product card: image scale on hover + second image crossfade if available
- Quick Add button slides up from bottom of card on hover
- Side menu slides in from left
- Cart drawer slides in from right
- All transitions should feel smooth and intentional — `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- No bounce, no aggressive motion

### Buttons
Three styles, all used contextually:
- **Primary** — solid black, white text
- **Outline** — transparent bg, black border, fills on hover
- **Elevated** — white bg, soft shadow, lifts on hover

### Typography
- Headings: Bebas Neue — large, uppercase, wide tracking
- Body/UI: DM Sans (or Google Sans) — clean, readable
- Labels/meta: small, uppercase, wide letter-spacing

### Border Radius
- `5px` everywhere (buttons, cards, inputs, chips)

---

## Design System First

Before touching any page, build a shared design system:

1. **Tailwind config** — add brand color tokens, font families, border radius defaults, and keyframe animations as a single source of truth. No hex values hardcoded anywhere else.
2. **`src/modules/common/components/ui/index.tsx`** — shared primitives: `Button` (primary/outline/elevated), `FadeIn` (intersection observer wrapper with delay prop), `SectionHeading`, `ProductCard`, `Badge`, `Input`, `Container`, `Divider`. Every page component imports from here.
3. **`layout.tsx`** — add Bebas Neue + DM Sans via `next/font/google`.

---

## Pages to Redesign

All of them. Work through these in order:

- Nav + Footer (shell first)
- Side menu + Cart drawer
- Homepage (hero, featured products, collections)
- Store / PLP
- Product Detail (PDP)
- Cart page
- Checkout
- Order confirmation
- Account / Login

---

## Hard Rules

- Never hardcode colors — use Tailwind brand tokens only
- No new npm packages — Tailwind + CSS only for animations
- Preserve every Medusa data hook, server action, and type
- Complete file rewrites — no partial patches
- Use the shared UI components everywhere, don't reinvent per page
- Be creative with layout and composition — the spec sets boundaries, not a blueprint

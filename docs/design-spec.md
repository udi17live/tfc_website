# The Factory Collection — Design Spec

## Brand Identity

- **Name:** The Factory Collection
- **Market:** Mid-market / accessible sportswear/clothing
- **Feel:** Nike/Adidas energy — minimal, modern, confident

---

## Color Palette

| Token | Value | Usage |
|---|---|---|
| Primary | `#000000` | Buttons, headings, nav |
| Surface | `#FFFFFF` | Page background |
| Muted | `#F5F5F5` | Card backgrounds, sections |
| Border | `#E5E5E5` | Dividers, input borders |
| Accent text | `#6B6B6B` | Subtext, labels, metadata |
| Inverse | `#FFFFFF` on `#000000` | Primary CTA text |

---

## Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Hero | Bebas Neue | 400 | 80–120px |
| H1 | Bebas Neue | 400 | 48–64px |
| H2 | Bebas Neue | 400 | 32–40px |
| H3 | Google Sans | 500 | 20–24px |
| Body | Google Sans | 400 | 14–16px |
| Label / Meta | Google Sans | 400 | 12px, uppercase tracked |

**Google Fonts imports:**
- Bebas Neue: `https://fonts.google.com/specimen/Bebas+Neue`
- Google Sans: `https://fonts.google.com/specimen/Google+Sans`

---

## Shape & Radius

- **Default radius:** `2px` — sharp but not brutal
- **Buttons:** `2px`
- **Cards:** `2px`
- **Inputs:** `2px`
- No pill buttons except tags/chips

---

## Buttons

- **Primary:** Solid black, white text, `2px` radius — "Add to Cart", "Shop Now"
- **Secondary:** 1px black border, transparent bg, black text — "View Details", "Save"
- **Hover — Primary:** Dark gray `#1a1a1a`
- **Hover — Secondary:** Fills solid black, text turns white

---

## Navigation

- Minimal sticky bar — Logo left, links center, icons right (search, cart, account)
- Height: `h-16`
- Bottom border: `1px solid #E5E5E5`
- Stays solid on scroll (no transparency transition)

---

## Layout

- **Container max-width:** `1440px`
- **Horizontal padding:** `px-6` mobile, `px-12` desktop
- **Hero:** Split layout — Bebas Neue headline + CTA left, lifestyle image right
- **Product grid:** 4 col desktop → 2 col tablet → 1 col mobile
- **Grid gap:** `gap-6`
- **Section padding:** `py-16`
- **Spacing feel:** Balanced

---

## Product Cards

- Background: white / `#F5F5F5`
- Border radius: `2px`
- Product name: Google Sans medium
- Price: below name, `#6B6B6B`
- Hover: secondary image swap or subtle lift (`-translate-y-1`)
- "Quick add" button visible on hover

---

## Page Inventory

| Page | Status |
|---|---|
| Homepage | Pending |
| Product Listing (PLP) | Pending |
| Product Detail (PDP) | Pending |
| Cart | Pending |
| Checkout | Pending |
| Order Confirmation | Pending |
| Account | Pending |

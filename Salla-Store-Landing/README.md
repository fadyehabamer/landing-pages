# Salla-Store-Landing

> Arabic-first landing page for a small online store

### [View Live Demo](https://fadyehabamer.github.io/landing-pages/Salla-Store-Landing/)

## Overview

A landing page for a fictional specialty coffee shop, "متجر المحمصة", laid out the way a small Saudi store on a hosted platform such as Salla would present itself: hero, reasons to buy, best sellers, customer reviews and a first-order call to action. The store, products, prices and reviews are made up. The page does not use Salla's name, logo or branding and is not affiliated with Salla. All artwork is inline SVG.

## Built With

**Languages:** HTML · CSS · JavaScript

## Techniques Demonstrated

- `lang="ar" dir="rtl"` layout with logical properties
- Mobile menu button with `aria-expanded` / `aria-controls`, closes on link click and <kbd>Esc</kbd>
- The nav stays visible when JavaScript is off (the collapse only applies under a `has-js` class)
- Reviews marked up with `figure`, `blockquote` and `figcaption`, star ratings exposed as text
- Grids that go from four or three columns down to one, tested down to 360px
- Skip link, visible focus styles and a `prefers-reduced-motion` fallback
- Meta description and Open Graph tags

## Files

```
index.html
script.js
style.css
```

## Run Locally

```bash
git clone https://github.com/fadyehabamer/landing-pages.git
cd landing-pages/Salla-Store-Landing
```

Then open `index.html` in your browser.

---
↩ Part of the [**landing-pages**](../) collection · [all my repos](https://github.com/fadyehabamer?tab=repositories) · [@fadyehabamer](https://github.com/fadyehabamer)

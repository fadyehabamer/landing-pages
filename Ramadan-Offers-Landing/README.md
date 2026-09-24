# Ramadan-Offers-Landing

> Arabic RTL promo page for a store's Ramadan offers

### [View Live Demo](https://fadyehabamer.github.io/landing-pages/Ramadan-Offers-Landing/)

## Overview

A right-to-left landing page for a fictional store ("متجر الهلال") running Ramadan offers. It has a hero section, a countdown to the end of the offers, a grid of discounted products with a small cart counter, an FAQ accordion and a footer. All artwork is inline SVG, and the products and prices are placeholders.

To change the countdown, edit `data-deadline` on the `.countdown` section in `index.html`. Any ISO 8601 date works, for example `2027-03-10T23:59:59+03:00`. When the date passes, the timer shows zeros and the heading switches to an "offers ended" message. An invalid date hides the section.

## Built With

**Languages:** HTML · CSS · JavaScript

## Techniques Demonstrated

- `lang="ar" dir="rtl"` with logical properties (`inset-inline`, `margin-inline`)
- Countdown driven by a `data-deadline` attribute and `setInterval`
- Accessible accordion: buttons with `aria-expanded` / `aria-controls`, panels open by default when JavaScript is off
- Cart count announced through an `aria-live` region
- CSS grid that goes from three columns to one, tested down to 360px
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
cd landing-pages/Ramadan-Offers-Landing
```

Then open `index.html` in your browser.

---
↩ Part of the [**landing-pages**](../) collection · [all my repos](https://github.com/fadyehabamer?tab=repositories) · [@fadyehabamer](https://github.com/fadyehabamer)

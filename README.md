# Daniel Tuccillo — Personal Site

A fast, zero-build personal **creator site** — "here's me and the things I build,"
not an agency funnel. Plain HTML/CSS/JS, no framework, no build step. Deploys free
on GitHub Pages (or Netlify/Vercel).

Visual system is **"Daylight Gilt"** — the warm, gold-on-cream light theme borrowed
from my GLD app (cream surfaces, warm-ink text, a single deepened-gold accent,
warm-tinted shadows, Abril Fatface display headings + Plus Jakarta Sans body).

## Files

```
index.html              The whole page (all copy lives here)
assets/css/styles.css   Styling — design tokens live in :root at the top
assets/js/main.js       Mobile menu, footer year, reveal-on-scroll
assets/img/             Drop og-image.png + daniel.jpg here
assets/img/work/        Project screenshots (see that folder's README)
```

## Page structure

Hero → **Client work** (Rainier) → **Products I ship** (LeadStart AI, SaaSassins,
GLD, ReciPal) → **What I do** (capabilities) → **Now** → **About** → **Contact**.

## Run it locally

Open `index.html` in a browser, or serve it:

```bash
npx serve .          # then open the printed localhost URL
```

## Edit the content

Everything is plain text in `index.html`:

- **Hero headline & intro** — `<section class="hero">`.
- **Client work** — the `.feature` card in `<section id="work">`.
- **Products** — the four `.product-card` blocks in `<section id="products">`.
- **What I do** — the `.cap` blocks in `<section id="approach">`.
- **Now** — `<section id="now">`. **Keep this fresh** — edit it every month or two
  and update the "Updated June 2026" line; it's what makes the site feel alive.
- **About** — `<section id="about">`.
- **Contact / links** — `<section id="contact">` and the footer.

Colors live in the `:root` block at the top of `assets/css/styles.css`.

## Things still to fill in

1. **Three live URLs** — `SaaSassins`, `GLD`, and `ReciPal` cards link to `#`
   placeholders (search `TODO` in `index.html`). Set them to the real URLs.
2. **Project screenshots** — drop files in `assets/img/work/` and swap each card's
   placeholder for the commented `<img>` (see `assets/img/work/README.md`).
3. **Your photo** — add `assets/img/daniel.jpg`. It drives the dark hero panel
   (replace the `.hero-photo-ph` block with an `<img>`) and the About section. For
   the hero, use a well-lit shot with a darker/simple background so it blends with
   the Midnight palette. (Wire-in pending the photo file.)
4. **Contact form** — the form posts to a Formspree placeholder. Create a form at
   <https://formspree.io>, then paste your endpoint into the `<form action>`.
5. **og-image** — add `assets/img/og-image.png` (1200×630) for link previews.
6. **Dark-glass accents (optional)** — decide whether to carry the hero's
   warm-glass / Midnight contrast into other sections (e.g. the contact form) or
   keep the dark treatment exclusive to the hero.

## Deploy on GitHub Pages

1. Create a repo on GitHub and push this folder.
2. **Settings → Pages → Build and deployment** → Source: **Deploy from a branch**,
   Branch: **main**, Folder: **/ (root)**. Save.
3. Live at `https://<username>.github.io/<repo>/`. Add a custom domain under
   Settings → Pages when you have one.

## Push to GitHub

```bash
git add .
git commit -m "Update site"
git push
```

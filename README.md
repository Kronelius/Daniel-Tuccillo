# Daniel Tuccillo — Personal Site

A fast, zero-build landing page for booking automation & AI gig work with home
service businesses. Plain HTML/CSS/JS — no framework, no build step, no
dependencies to maintain. Deploys free on GitHub Pages (or Netlify/Vercel).

## Files

```
index.html              The whole page (all copy lives here)
assets/css/styles.css   Styling (colors live in :root at the top)
assets/js/main.js       Mobile menu + footer year
assets/img/             Drop a real og-image.png here for nice link previews
README.md               This file
```

## Run it locally

Just open `index.html` in a browser. To preview exactly like production with a
local server:

```bash
# Python (built into macOS/Linux, easy on Windows too)
python -m http.server 8000
# then visit http://localhost:8000
```

## Edit the content

Everything you'd want to change is plain text in `index.html`:

- **Headline & pitch** — the `<section class="hero">` block.
- **Services** — the four `<article class="card">` blocks.
- **About you** — `<section id="about">`.
- **Process steps** — `<section id="process">`.
- **FAQ** — `<section id="faq">`.
- **Contact email / LinkedIn** — `<section id="contact">` and the footer.

To change the colors, edit the variables in `:root` at the top of
`assets/css/styles.css` (the brand is navy `--navy` + amber `--amber`).

## Turn on the contact form (2 minutes)

The form currently posts to a placeholder. To make it email you submissions for
free:

1. Sign up at <https://formspree.io> and create a form.
2. Copy your form endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. In `index.html`, replace the `action` URL on `<form class="contact-form" ...>`.

That's it — submissions land in your inbox. (Alternatives: Netlify Forms,
Basin, Web3Forms.) Until then, the `mailto:` link and LinkedIn still work.

## Deploy on GitHub Pages

1. Create a repo on GitHub and push this folder (see below).
2. Repo **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**, Branch: **main**, Folder: **/ (root)**.
4. Save. Your site goes live at `https://<username>.github.io/<repo>/`.

### Custom domain (optional)

Buy a domain (e.g. `danieltuccillo.com`), then in **Settings → Pages** add it
under "Custom domain." GitHub will create a `CNAME` file for you. Point your
domain's DNS at GitHub Pages per their instructions.

## Push to GitHub

```bash
git add .
git commit -m "Update site"
git push
```

---

Built as a starting point — swap in real testimonials, case studies, and a
booking link (Calendly/Cal.com) as you land your first gigs.

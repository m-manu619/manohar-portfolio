# Manohar H — Portfolio

Personal portfolio of **Manohar H**, a software engineer focused on cloud infrastructure, backend systems, and DevOps automation.

## Live

| Platform | URL |
|---|---|
| Vercel | https://manohar-portfolio-rho.vercel.app/ |
| GitHub Pages | https://m-manu619.github.io/manohar-portfolio |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 7 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Styling | Custom CSS with CSS variables |
| Fonts | Manrope · Fraunces (Google Fonts) |
| Deployment | Vercel · GitHub Pages |

---

## Features

- **Framer Motion animations** — hero slides in from both sides, sections stagger in on scroll, mobile drawer animates open/close
- **Animated stat counters** — numbers count up when scrolled into view
- **Scroll progress bar** — mint-to-gold gradient bar pinned at the top
- **Back-to-top button** — appears after scrolling 500px, animates in/out
- **Contact form** — name, email, message fields; opens pre-filled email client on submit
- **Project image overlay** — "View on GitHub" label fades in on hover
- **Glassmorphism cards** — `backdrop-filter` blur on all panels
- **Pulsing availability badge** — animated green dot on the profile card
- **Timeline dot connectors** — accent dot on each experience entry
- **Noise texture overlay** — subtle SVG grain for depth
- **SEO & Open Graph** — proper title, meta description, og:image, Twitter card tags
- **Responsive** — two breakpoints (1080px tablet, 720px mobile)

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:5173**

---

## Production Build

```bash
npm run build
```

Output goes to `/dist`. Used by Vercel automatically on push.

---

## GitHub Pages Deploy

```bash
npm run deploy
```

Builds with the correct `/manohar-portfolio/` base path and publishes the `dist` folder to the `gh-pages` branch.

---

## Project Structure

```
src/
├── App.jsx          # Main component — all sections, animations, logic
├── App.css          # All styles — design tokens, layout, components
├── index.css        # Global resets and scroll behaviour
├── main.jsx         # React entry point
└── images/          # Profile photo, project screenshots, skill icons, resume PDF
```

---

## Contact

- Email: mmanohar619@gmail.com
- LinkedIn: https://linkedin.com/in/manohar-h/
- GitHub: https://github.com/m-manu619

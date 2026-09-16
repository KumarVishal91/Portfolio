# Portfolio

My personal portfolio site — built as a single self-contained `index.html`, no build step, no dependencies.

**Live:** https://portfolio-sigma-indol-83.vercel.app/

## About

I'm Vishal Kumar, a final-year CS (AI & ML) student at VIT Bhopal focused on full-stack development and backend engineering. This site walks through my tech stack, projects, and experience.

## Features

- Single-page, full-screen scroll-snap sections: Home, Tech Stack, Projects, Experience, Contact
- Sticky nav with active-section highlighting and a scroll-progress bar
- Rotating "coding notes" snippet in the hero
- Tech stack grouped by category (Languages, AI & ML, Frontend, Backend & data, Tooling), each with its own accent color and inline SVG/monogram icons — no external icon CDN required
- Project cards color-coded by status (Live / Shipped / In progress / Personal tool) with expandable "read more" details
- Work experience and education timeline
- Contact form (UI only — not wired to a backend yet)
- Respects `prefers-reduced-motion`; responsive down to mobile

## Tech stack

Plain HTML, CSS, and vanilla JavaScript. Fonts (Inter, IBM Plex Mono) load from Google Fonts; everything else is self-contained in `index.html`.

## Running locally

No build tools needed.

```bash
git clone https://github.com/KumarVishal91/Portfolio.git
cd Portfolio
open index.html   # or just double-click it, or use a local server:
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```
Portfolio/
├── index.html      # entire site: markup, styles, and scripts
├── assets/
│   └── Vishal_Kumar_Resume.pdf
└── README.md
```

## Deployment

Deployed on Vercel. Pushes to `main` trigger an automatic redeploy.

## Contact

- Email: vishalkumar02291@gmail.com
- GitHub: [@KumarVishal91](https://github.com/KumarVishal91)
- LinkedIn: [vishal-kumar91](https://www.linkedin.com/in/vishal-kumar91)

## License

© 2026 Vishal Kumar. All rights reserved.
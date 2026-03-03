# Motion-Aware Video Editing

Research project website for AI-powered video editing with motion-aware object replacement using generative models.

**Live site:** [narekmeliqsetyan.github.io/motion-aware-video-editing](https://narekmeliqsetyan.github.io/motion-aware-video-editing/)

## Development

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

The site builds to `dist/` with base path `/motion-aware-video-editing/`.

## Deployment

Deployment is automatic via GitHub Actions on push to `main`. To enable:

1. Go to repo **Settings > Pages**
2. Set Source to **GitHub Actions**

## Adding Assets

Place real data files in:
- `public/assets/papers/` — PDF documents
- `public/assets/data/` — CSV data files
- `public/assets/images/` — Images (PNG, JPG)

The site gracefully degrades when assets are missing, showing placeholders.

## Tech Stack

- [Astro 5](https://astro.build) with TypeScript
- [Chart.js](https://www.chartjs.org/) for interactive charts
- [PapaParse](https://www.papaparse.com/) for CSV parsing
- [KaTeX](https://katex.org/) for math rendering

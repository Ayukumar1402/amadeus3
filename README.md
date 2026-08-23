# Amadeus KB

An open-source, interactive knowledge base of Amadeus GDS commands, built for Expedia-style
customer service agents who need the right command in seconds during a live call.

**[Live site →](https://Ayushkumar1402.github.io/amadeus3/)**

## What's in here

- **Topic pages** for the core Amadeus workflows an agent hits day to day: PNR creation,
  fare & pricing, ticketing, reissue & exchange, refunds, seat maps & ancillaries, queue
  management, and error codes.
- **Mermaid flowcharts** on every completed topic, showing the step-by-step process, not just
  a flat command list.
- **Interactive widgets**:
  - `CommandBuilder` — agents fill in a short form and get the exact command string, ready to
    copy.
  - `CommandTable` — an expandable reference table (command → purpose → example → common
    errors).
- **A signature split-flap header** on every page (`FlapHeader`) — a nod to the departure-board
  world these commands actually control, and the one deliberate animation moment on the site.
  Every other transition (page fade-ins, hover states) stays fast and subtle by design, since
  this tool is used mid-call.
- **Instant local search** with a `Ctrl`/`Cmd`+`K` hotkey (no external search service or API
  key required).
- **A genuinely open contribution model** — see [CONTRIBUTING.md](./CONTRIBUTING.md). Topic
  pages are plain Markdown/MDX; no engineering background needed for a content fix.

## Why these choices

| Decision | Why |
|---|---|
| Docusaurus (not a custom Next.js build) | Built-in versioned docs, sidebar, and a Markdown/MDX content model contributors can edit straight from the GitHub web UI. |
| Mermaid.js for flowcharts | Diagrams are defined in plain text inside the page — no separate diagramming tool needed to update a process. |
| `docusaurus-lunr-search` (local search) | Fully client-side, no API key, no external service to keep running for an open-source project. |
| Static export, deployed via GitHub Actions to GitHub Pages | No backend to host or pay for. |

## Local development

```bash
npm install
npm start
```

Opens a local dev server with hot reload at `http://localhost:3000`.

## Build

```bash
npm run build
```

Outputs a fully static site to `build/`. `npm run serve` will serve that build locally to
sanity-check it before deploying.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
it to GitHub Pages. Pull requests are validated by `.github/workflows/pr-check.yml`, which just
runs the build (no deploy) so broken MDX or a bad Mermaid diagram is caught before merge.

Before your first deploy, update `organizationName` / `projectName` / `url` in
`docusaurus.config.ts` to match your actual GitHub org and repo name, and enable GitHub Pages
in the repo settings (Settings → Pages → Source: GitHub Actions).

## Project structure

```
amadeus-agent-kb/
├── docs/                     # one folder per topic, each an MDX page + _category_.json
├── src/
│   ├── components/
│   │   ├── FlapHeader/        # signature split-flap page header
│   │   ├── CommandBuilder/    # generic, reusable command-generator widget
│   │   └── CommandTable/      # expandable command reference table
│   ├── clientModules/
│   │   └── searchHotkey.ts    # Ctrl/Cmd+K focuses the search box
│   ├── data/topics.ts         # topic metadata used on the homepage
│   ├── pages/index.tsx        # homepage (hero + topic grid + contribute banner)
│   └── css/custom.css         # design tokens (see below)
├── .github/workflows/         # deploy + PR build check
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── LICENSE
```

## Design system

The visual direction is a "departure board": ink-console surfaces, a single amber accent
(`--board-amber`), and teal/coral reserved strictly for valid/error states so they carry
meaning rather than decorating. Full token list is documented at the top of
`src/css/custom.css`.

## License

Code is [MIT licensed](./LICENSE). Content in `docs/` is additionally available under
CC BY-SA 4.0. Not affiliated with or endorsed by Amadeus IT Group or Expedia Group.

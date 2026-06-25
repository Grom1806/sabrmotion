# Build Prompt — Project 01: SaaS Analytics Dashboard

> A self-contained prompt for an AI coding agent (Claude Code) to build the **first**
> showcase project in this portfolio. Paste it as a task, or run it with the existing
> repo open. It is written to match this repository's exact stack and conventions — do
> not introduce libraries or patterns not listed here.

---

## Role & Objective

You are a senior front-end engineer working in the **Sabrmotion Portfolio** repo (Next.js
16 App Router, React 19, TypeScript, Tailwind v4, Framer Motion). Build a **SaaS Analytics
Dashboard** as a self-contained demo page that lives inside this site and is linkable from
the Projects grid. It must look production-grade and be the strongest visual proof in the
portfolio that the author can build complex, data-dense product UI.

**Definition of done:** a new route renders a polished dark-theme analytics dashboard with
mock data, it is reachable from the `Projects` section, and `npm run build` passes the
type-check.

## Hard constraints (read first)

1. **This is NOT the Next.js you know.** Before writing any framework code (routing,
   metadata, server/client boundaries), read the relevant guide in
   `node_modules/next/dist/docs/` and heed deprecation notices. Do not assume APIs from
   training data.
2. **No new dependencies.** Use only what is already installed: `framer-motion`,
   `react-icons`, React 19, Tailwind v4. No chart libraries — build charts as inline SVG
   or CSS. If you believe a dependency is truly required, stop and ask first.
3. **Critical CSS gotcha:** NEVER put `display` in an inline `style` on an element that
   also relies on a CSS class to show/hide it (responsive grids, etc.). Inline styles beat
   classes and permanently break the toggle. Control `display` from the class.
4. **Styling convention:** style components mostly with **inline `style` objects that
   reference the CSS custom properties** (not Tailwind utility classes). Responsive grids
   are **named CSS classes in `app/globals.css`** with media queries — add new grid classes
   there, do not use Tailwind responsive prefixes.

## Design system (use these exact tokens — already defined in `app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `--accent` | `#4ade80` (neon green) | primary accent, positive deltas, active states |
| `--accent-glow` | `rgba(74,222,128,0.15)` | glows / focus rings |
| `--bg` | `#0a0a0a` | page background |
| `--bg-section` | `#0d0d0d` | raised surfaces |
| `--card` / `--card-hover` | `#111111` / `#191919` | cards / panels |
| `--text` / `--text-sec` / `--muted` | `#fafafa` / `#d1d5db` / `#6b7280` | text hierarchy |
| `--border` | `rgba(255,255,255,0.08)` | hairline borders |

Fonts (already loaded as CSS vars in `app/layout.tsx`): `--font-syne` (display/headings),
`--font-inter` (body), `--font-jetbrains` (numbers, labels, mono accents). Use JetBrains
Mono for all metric numbers and axis labels.

For negative deltas use a red accent `#f87171` (define locally; do not add a token unless
reused elsewhere). Keep the dark, neon-green aesthetic consistent with the rest of the site.

## Deliverables

1. **Route:** `app/projects/saas-analytics-dashboard/page.tsx` — the dashboard page.
   Add page `metadata` (title + description) using the Next 16 convention you confirmed in
   the docs. Mark client components with `"use client"` only where interactivity/Framer
   Motion requires it; keep the page itself a Server Component if possible. Hold the
   selected date range in a single client wrapper (e.g. a `DashboardShell` client component
   that owns the `range` state and passes data down) so the page stays a Server Component
   and only the interactive subtree opts into the client.
2. **Components** under `app/projects/saas-analytics-dashboard/_components/`:
   - `KpiCard.tsx` — metric card: label, big mono value, % delta with up/down arrow
     (green/red), and a small inline sparkline (SVG).
   - `RevenueChart.tsx` — a responsive area/line chart (inline SVG, no library) with
     gradient fill in the accent color, hover tooltip showing the value at a point.
   - `BarBreakdown.tsx` — horizontal or vertical bar chart for a category breakdown.
   - `DataTable.tsx` — recent transactions/users table: sortable header (at least one
     column), status pills, zebra-free dark rows with hairline borders.
   - `DateRangeTabs.tsx` — segmented control (`7D` / `30D` / `90D`) that swaps the mock
     dataset client-side and animates the chart transition with Framer Motion.
3. **Mock data:** `app/projects/saas-analytics-dashboard/_data.ts` — typed mock datasets
   (KPIs, time series per range, table rows). No network calls; everything is local and
   deterministic. Export proper TypeScript types for every shape.
4. **Layout:** a left sidebar (nav icons via `react-icons`) + top bar (title, date tabs,
   a mock avatar) + a responsive content grid (KPI row, then chart + breakdown, then
   table). Add the responsive grid class(es) to `app/globals.css` (e.g.
   `.dashboard-grid`, `.kpi-grid`) — collapse to one column on mobile. Sidebar nav icons
   are decorative for this demo (no routing); give the first item an `aria-current` active
   style and `aria-label`s on the rest.
5. **Wire it into the portfolio:** in `components/sections/Projects.tsx`, make the **first**
   project card real — title "SaaS Analytics Dashboard", tags `["Dashboard","Next.js"]` —
   and link it to `/projects/saas-analytics-dashboard` (use the Next.js `Link` component).
   Leave the other cards as-is.

## Interactions & polish

- Subtle entrance animations with Framer Motion (`whileInView`, staggered), matching the
  easing/timing used elsewhere in the repo (look at an existing section for reference).
- Chart and KPI values update when the date range changes; animate the transition.
- Hover states on cards and table rows use `--card-hover` and `--accent-border`; declare
  the `transition` on the **base** selector so hovers don't flash (repo convention).
- Respect `prefers-reduced-motion`.
- Fully responsive: sidebar collapses to icons or a top strip on mobile; no horizontal
  scroll at 360px width.

## Out of scope (do not build)

- No real backend, auth, or database. No i18n for this page yet (the rest of the site uses
  `lib/translations.ts`; dashboard copy may stay English for now — note this in a comment).
- No new global overlays; do not touch `app/page.tsx` section order.

## Acceptance criteria

- [ ] `npm run build` completes with **no TypeScript errors** (this is the type-check).
- [ ] `npm run lint` passes.
- [ ] Visiting `/projects/saas-analytics-dashboard` shows the full dashboard with mock data.
- [ ] Date-range tabs change the chart/KPIs with an animated transition.
- [ ] The first card in the Projects section links to the new route and navigates correctly.
- [ ] Layout holds from 360px to desktop with no overflow; the `display` gotcha is avoided.
- [ ] All colors/fonts come from the existing CSS variables; no hard-coded hex except the
      one local red for negative deltas.

## Verification steps for the agent

1. Read the needed `node_modules/next/dist/docs/` guide(s) for routing + metadata first.
2. Build the data layer and types, then components, then the page, then the Projects link.
3. Run `npm run build` and `npm run lint`; fix all errors.
4. Run `npm run dev` and manually verify the route, the date tabs, and mobile layout in the
   browser. Report what you checked and the final build/lint output.

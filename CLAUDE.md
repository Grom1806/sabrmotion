# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Next.js version warning (from AGENTS.md, repeated here because it is easy to miss):**
> This repo runs a Next.js version with breaking changes vs. training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing framework code, and heed deprecation notices.

## Commands

```bash
npm run dev      # Dev server (Turbopack). Port 3000, falls back to 3001 if taken.
npm run build    # Production build — also runs the TypeScript type-check (use this to verify types)
npm start        # Serve the production build
npm run lint     # ESLint (eslint-config-next)
```

There is **no test framework** configured. "Verify" means `npm run build` (type-check passes) plus a manual check in the browser.

The dev server reads `.env.local`, which must contain `GROQ_API_KEY` for the chat API route to work. `.env*` is gitignored.

## Stack

Next.js 16 (App Router + Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · react-icons · groq-sdk. The `@` import alias maps to the repo root (e.g. `@/components/...`, `@/lib/...`).

## Architecture

### Single-page composition
The entire site is one page. [`app/page.tsx`](app/page.tsx) renders a fixed set of **global overlays** (`CustomCursor`, `BackToTop`, `ChatBot`, `ScrollProgress`, `Header`) followed by ordered **section** components inside `<main>` (`Hero`, `Marquee`, `About`, `Mockups`, `Statement`, `Services`, `Process`, `Projects`, `Testimonials`, `Pricing`, `LetsTalk`) and a `Footer`. Section order lives here.

`components/` holds global/overlay components; `components/sections/` holds page sections. Note that `components/sections/` contains a few components **not** mounted by `page.tsx` (e.g. `FAQ`, `Skills`, `Contact`) — check `page.tsx` before assuming a section is live.

### Internationalization (RU / EN / DE)
- All copy lives in [`lib/translations.ts`](lib/translations.ts) as a typed `Dict` with three implementations (`ru`, `en`, `de`). Adding a field means updating the `Dict` type **and** all three language objects, or the build fails.
- [`lib/LanguageContext.tsx`](lib/LanguageContext.tsx) provides `useLanguage()` → `{ lang, setLang, t }`. Components read translated strings via `t.*`. Default language is `ru`; selection is **in-memory only** (React state, not persisted across reloads).
- Switching language via `setLang` re-renders everything that uses `useLanguage`, including the ChatBot (which resets its conversation on language change).

### Styling conventions
- Theme tokens are CSS custom properties in `:root` in [`app/globals.css`](app/globals.css) (e.g. `--accent` = neon green `#4ade80`, `--card`, `--text`, `--muted`, `--border`). Dark theme, green neon accent throughout.
- Tailwind v4 is configured via `@theme inline` in `globals.css` (no `tailwind.config.js`). Fonts (Syne / Inter / JetBrains Mono) are loaded in [`app/layout.tsx`](app/layout.tsx) and exposed as `--font-*` variables.
- Components are styled mostly with **inline `style` objects** referencing the CSS variables, not utility classes.
- **Responsive grids are named CSS classes in `globals.css`** (e.g. `.integrations-grid`, `.pricing-grid`, `.footer-grid`, `.burger-btn`) with media queries — not Tailwind responsive prefixes. Hover effects that must not "flash" are also CSS classes with the `transition` declared on the **base** selector (see `.integration-card`).

> **Critical gotcha:** Never put `display` in an inline `style` on an element that also relies on a CSS class to show/hide it (`hidden md:flex`, `.burger-btn`, etc.). Inline styles win over classes, so an inline `display: 'flex'` permanently overrides the responsive class and breaks the mobile/desktop toggle. Control `display` from the class, not inline.

### Chat widget (`components/ChatBot.tsx`)
This is the floating widget bottom-right and is intentionally reusable/sellable. It is a **hybrid**:
- **Scripted marketing flow** — `flows: Record<Lang, Flow>` defines bot message sequences with quick-reply buttons and branches, plus a rotating teaser bubble (`teasers`). Quick replies route between steps; the `telegram` step opens the Telegram link. No backend needed for this path.
- **Free-text answers** — typed questions POST to `/api/chat` and stream a live LLM reply.
- `TG_HANDLE` and `TG_LINK` constants at the top of the file are **placeholders** to replace per deployment/client.
- Bot bubbles render through a small markdown helper (`FormattedText` / `renderInline`) supporting `**bold**`, `-` bullets, and line breaks; it strips stray `#` headings.
- The `Pricing` section opens the widget by dispatching a `window` `CustomEvent('open-chatbot')`, which `ChatBot` listens for — use this same event to open it from anywhere.

### Chat API route (`app/api/chat/route.ts`)
A Next.js Route Handler (`POST`) that calls **Groq** (`groq-sdk`, model `llama-3.3-70b-versatile`) with a `SYSTEM_PROMPT` describing Sabrmotion's services/pricing/contact, and streams plain-text tokens back via a `ReadableStream`. Requires `GROQ_API_KEY`. The system prompt enforces compact, chat-bubble-friendly formatting (bold + emoji + line breaks, no `##` headings) and replies in the user's language.

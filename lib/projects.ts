export type Project = {
  slug: string;
  num: string;
  title: string;
  /** one-liner for the card */
  description: string;
  /** longer hero line for the detail page */
  tagline: string;
  year: string;
  role: string;
  tags: string[];
  /** card cover + first gallery image */
  image: string;
  gallery: string[];
  live: string;
  code?: string;
  overview: string[];
  highlights: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "halcyon",
    num: "01",
    title: "HALCYON",
    description:
      "Awwwards-style 3D landing. A procedural Three.js crystal assembles from an exploded cloud as you scroll — scrubbed, reversible, ~60fps.",
    tagline:
      "An awwwards-grade landing where a procedural crystal assembles from an exploded cloud as you scroll.",
    year: "2026",
    role: "Design & Build",
    tags: ["Three.js", "GSAP", "TypeScript", "WebGL"],
    image: "/projects/halcyon.webp",
    gallery: ["/projects/halcyon.webp", "/projects/halcyon-2.webp"],
    live: "https://helycon.vercel.app/",
    code: "https://github.com/Grom1806/helycon",
    overview: [
      "HALCYON is a showcase landing for a fictional spatial-interface studio. The centerpiece is a crystalline 3D object whose state is bound to scroll position — it assembles from a scattered cloud into a faceted sphere and disassembles again as you scroll back up.",
      "The whole experience is built to feel like an expensive product launch rather than a demo: editorial serif typography, an iridescent signature, smooth inertia scrolling and choreographed reveals — all holding a steady frame rate.",
    ],
    highlights: [
      "Scroll-scrubbed 3D object that assembles and reverses smoothly",
      "A single InstancedMesh (~80 shards) keeps the cluster at one draw call",
      "Iridescent physically-based material lit by an environment map",
      "Lenis smooth scroll synchronised with GSAP ScrollTrigger",
      "prefers-reduced-motion fallback and responsive down to 360px",
    ],
    stack: ["Vite", "TypeScript", "Three.js", "GSAP / ScrollTrigger", "Lenis"],
  },
  {
    slug: "vantage",
    num: "02",
    title: "Vantage — SaaS Analytics",
    description:
      "Analytics dashboard for revenue, active users, conversion and churn — with filters, exports and AI explanations.",
    tagline:
      "A clean analytics surface for revenue, active users, conversion and churn — with the filters and exports teams actually use.",
    year: "2026",
    role: "Full-stack",
    tags: ["Next.js", "Prisma", "Charts", "Auth"],
    image: "/projects/vantage.webp",
    gallery: ["/projects/vantage.webp"],
    live: "https://saas-dashboard-nine-tau.vercel.app/",
    code: "https://github.com/Grom1806/Saas-Dashboard",
    overview: [
      "Vantage is a full-stack SaaS analytics dashboard. It turns raw product metrics into one readable surface — KPI cards, a revenue trend, category breakdowns and a recent-transactions table — with date-range filters that animate between states.",
      "It ships with authentication, a Prisma data layer and a seedable demo account, plus AI-generated explanations that summarise what the numbers mean in plain language.",
    ],
    highlights: [
      "KPI cards, revenue chart, breakdowns and a transactions table",
      "Date-range filters with animated chart transitions",
      "Auth (login / register) with a seeded demo account",
      "AI-generated metric explanations in plain language",
      "Server components backed by a Prisma data layer",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "SQLite", "Auth", "Charts"],
  },
  {
    slug: "react-pizza",
    num: "03",
    title: "React Pizza",
    description:
      "Pizza ordering store with category filters, sorting, live search, a cart and crust/size options — built on Redux Toolkit.",
    tagline:
      "A pizza ordering store with filters, search, sorting and a fully-working cart.",
    year: "2025",
    role: "Frontend",
    tags: ["React", "Redux Toolkit", "REST", "SCSS"],
    image: "/projects/pizza.webp",
    gallery: ["/projects/pizza.webp", "/projects/pizza-2.webp"],
    live: "https://react-pizza-v2-rust.vercel.app/",
    overview: [
      "React Pizza is an e-commerce style storefront for ordering pizza. It covers the full browsing-to-cart flow: category filters, sorting, a debounced live search, pagination and per-item crust and size options.",
      "State is managed with Redux Toolkit, the cart persists across reloads, and the menu is fetched from a REST endpoint with skeleton loading states while data arrives.",
    ],
    highlights: [
      "Category filters, sorting and debounced live search",
      "Cart with quantities plus crust and size options",
      "Pagination and skeleton loading states",
      "Redux Toolkit state with a persisted cart",
      "Per-pizza detail pages",
    ],
    stack: ["React", "Redux Toolkit", "React Router", "Axios", "SCSS Modules"],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

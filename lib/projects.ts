import type { Lang } from "./translations";

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

/** Language-neutral fields (proper nouns: tech tags, stack, brand titles, URLs). */
type Base = {
  slug: string;
  num: string;
  title: string;
  year: string;
  tags: string[];
  image: string;
  gallery: string[];
  live: string;
  code?: string;
  stack: string[];
};

const base: Base[] = [
  {
    slug: "halcyon",
    num: "01",
    title: "HALCYON",
    year: "2026",
    tags: ["Three.js", "GSAP", "TypeScript", "WebGL"],
    image: "/projects/halcyon.webp",
    gallery: ["/projects/halcyon.webp", "/projects/halcyon-2.webp"],
    live: "https://helycon.vercel.app/",
    code: "https://github.com/Grom1806/helycon",
    stack: ["Vite", "TypeScript", "Three.js", "GSAP / ScrollTrigger", "Lenis"],
  },
  {
    slug: "vantage",
    num: "02",
    title: "Vantage — SaaS Analytics",
    year: "2026",
    tags: ["Next.js", "Prisma", "Charts", "Auth"],
    image: "/projects/vantage.webp",
    gallery: ["/projects/vantage.webp"],
    live: "https://saas-dashboard-nine-tau.vercel.app/",
    code: "https://github.com/Grom1806/Saas-Dashboard",
    stack: ["Next.js", "TypeScript", "Prisma", "SQLite", "Auth", "Charts"],
  },
  {
    slug: "react-pizza",
    num: "03",
    title: "React Pizza",
    year: "2025",
    tags: ["React", "Redux Toolkit", "REST", "SCSS"],
    image: "/projects/pizza.webp",
    gallery: ["/projects/pizza.webp", "/projects/pizza-2.webp"],
    live: "https://react-pizza-v2-rust.vercel.app/",
    stack: ["React", "Redux Toolkit", "React Router", "Axios", "SCSS Modules"],
  },
  {
    slug: "medclinic",
    num: "04",
    title: "AURA — Medical Clinic",
    year: "2026",
    tags: ["React", "TypeScript", "Vite", "Framer Motion"],
    image: "/projects/medclinic.webp",
    gallery: ["/projects/medclinic.webp"],
    live: "https://medclinic-one.vercel.app",
    code: "https://github.com/Grom1806/medclinic",
    stack: ["Vite", "React", "TypeScript", "React Router", "Framer Motion", "CSS Modules"],
  },
];

type LocalText = {
  description: string;
  tagline: string;
  role: string;
  overview: string[];
  highlights: string[];
};

const text: Record<Lang, Record<string, LocalText>> = {
  en: {
    halcyon: {
      description:
        "Awwwards-style 3D landing. A procedural Three.js crystal assembles from an exploded cloud as you scroll — scrubbed, reversible, ~60fps.",
      tagline:
        "An awwwards-grade landing where a procedural crystal assembles from an exploded cloud as you scroll.",
      role: "Design & Build",
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
    },
    vantage: {
      description:
        "Analytics dashboard for revenue, active users, conversion and churn — with filters, exports and AI explanations.",
      tagline:
        "A clean analytics surface for revenue, active users, conversion and churn — with the filters and exports teams actually use.",
      role: "Full-stack",
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
    },
    "react-pizza": {
      description:
        "Pizza ordering store with category filters, sorting, live search, a cart and crust/size options — built on Redux Toolkit.",
      tagline:
        "A pizza ordering store with filters, search, sorting and a fully-working cart.",
      role: "Frontend",
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
    },
    medclinic: {
      description:
        "A polished medical-clinic site with online appointment booking, doctor profiles, services and reviews — RU / EN / DE, light/dark theme, animated with Framer Motion.",
      tagline:
        "A modern medical-clinic experience — online booking, doctor profiles and services wrapped in a calm dark UI with smooth motion.",
      role: "Design & Build",
      overview: [
        "AURA is a marketing site for a modern medical clinic. It covers the full patient journey — browsing services and doctors, reading reviews, checking prices and booking an appointment online — across a multi-page React Router SPA with RU / EN / DE language switching.",
        "The interface leans on a calm dark palette with a teal accent: animated section reveals, count-up statistics, a light/dark theme toggle and dedicated detail pages for individual doctors. Every screen stays responsive down to mobile.",
      ],
      highlights: [
        "Online appointment booking flow (service → doctor → date & time)",
        "Doctor directory with individual profile pages",
        "Services, advantages, animated stat counters, reviews and FAQ",
        "RU / EN / DE language switch and light/dark theme toggle",
        "Framer Motion reveals throughout; responsive down to ~360px",
      ],
    },
  },
  ru: {
    halcyon: {
      description:
        "3D-лендинг в стиле Awwwards. Процедурный кристалл на Three.js собирается из разлетевшегося облака по мере прокрутки — привязка к скроллу, обратимо, ~60 fps.",
      tagline:
        "Лендинг уровня Awwwards, где процедурный кристалл собирается из разлетевшегося облака по мере прокрутки.",
      role: "Дизайн и разработка",
      overview: [
        "HALCYON — витринный лендинг для вымышленной студии пространственных интерфейсов. В центре — кристаллический 3D-объект, состояние которого привязано к позиции прокрутки: он собирается из рассеянного облака в огранённую сферу и снова распадается, когда вы прокручиваете вверх.",
        "Всё построено так, чтобы ощущаться как дорогой запуск продукта, а не демо: книжная антиква, переливающаяся подпись, плавная инерционная прокрутка и хореография появлений — и всё это при стабильном фреймрейте.",
      ],
      highlights: [
        "3D-объект, привязанный к скроллу, плавно собирается и разбирается",
        "Один InstancedMesh (~80 осколков) держит кластер в один draw call",
        "Переливающийся PBR-материал с освещением от environment map",
        "Плавная прокрутка Lenis синхронизирована с GSAP ScrollTrigger",
        "Поддержка prefers-reduced-motion и адаптив вплоть до 360px",
      ],
    },
    vantage: {
      description:
        "Аналитическая панель по выручке, активным пользователям, конверсии и оттоку — с фильтрами, экспортом и ИИ-пояснениями.",
      tagline:
        "Чистая аналитика по выручке, активным пользователям, конверсии и оттоку — с фильтрами и экспортом, которыми реально пользуются команды.",
      role: "Full-stack",
      overview: [
        "Vantage — full-stack-дашборд аналитики для SaaS. Он превращает сырые продуктовые метрики в одну читаемую панель — KPI-карточки, тренд выручки, разбивки по категориям и таблицу последних транзакций — с фильтрами по датам, плавно анимирующими переходы между состояниями.",
        "В комплекте — аутентификация, слой данных на Prisma и демо-аккаунт с предзаполнением, плюс сгенерированные ИИ пояснения, понятным языком объясняющие, что значат цифры.",
      ],
      highlights: [
        "KPI-карточки, график выручки, разбивки и таблица транзакций",
        "Фильтры по диапазону дат с анимацией графиков",
        "Аутентификация (вход / регистрация) с демо-аккаунтом",
        "ИИ-пояснения к метрикам простым языком",
        "Серверные компоненты на слое данных Prisma",
      ],
    },
    "react-pizza": {
      description:
        "Магазин заказа пиццы с фильтрами по категориям, сортировкой, живым поиском, корзиной и выбором теста/размера — на Redux Toolkit.",
      tagline:
        "Магазин заказа пиццы с фильтрами, поиском, сортировкой и полностью рабочей корзиной.",
      role: "Фронтенд",
      overview: [
        "React Pizza — витрина в стиле e-commerce для заказа пиццы. Она покрывает весь путь от просмотра до корзины: фильтры по категориям, сортировка, живой поиск с дебаунсом, пагинация и выбор теста и размера для каждой позиции.",
        "Состояние управляется через Redux Toolkit, корзина сохраняется между перезагрузками, а меню загружается с REST-эндпоинта со скелетонами на время загрузки данных.",
      ],
      highlights: [
        "Фильтры по категориям, сортировка и живой поиск с дебаунсом",
        "Корзина с количеством, выбором теста и размера",
        "Пагинация и скелетоны загрузки",
        "Состояние на Redux Toolkit с сохраняемой корзиной",
        "Отдельные страницы для каждой пиццы",
      ],
    },
    medclinic: {
      description:
        "Аккуратный сайт медицинской клиники: онлайн-запись, профили врачей, услуги и отзывы — RU / EN / DE, светлая/тёмная тема, анимации на Framer Motion.",
      tagline:
        "Современный сайт медицинской клиники — онлайн-запись, профили врачей и услуги в спокойном тёмном интерфейсе с плавными анимациями.",
      role: "Дизайн и разработка",
      overview: [
        "AURA — маркетинговый сайт современной медицинской клиники. Он покрывает весь путь пациента — просмотр услуг и врачей, чтение отзывов, проверку цен и онлайн-запись на приём — в многостраничном SPA на React Router с переключением языков RU / EN / DE.",
        "Интерфейс построен на спокойной тёмной палитре с бирюзовым акцентом: анимированные появления секций, счётчики статистики, переключатель светлой/тёмной темы и отдельные страницы для каждого врача. Все экраны адаптивны вплоть до мобильных.",
      ],
      highlights: [
        "Онлайн-запись по шагам (услуга → врач → дата и время)",
        "Каталог врачей с отдельными страницами профилей",
        "Услуги, преимущества, счётчики статистики, отзывы и FAQ",
        "Переключение языков RU / EN / DE и светлая/тёмная тема",
        "Анимации Framer Motion и адаптив вплоть до ~360px",
      ],
    },
  },
  de: {
    halcyon: {
      description:
        "3D-Landingpage im Awwwards-Stil. Ein prozeduraler Three.js-Kristall fügt sich beim Scrollen aus einer explodierten Wolke zusammen — scroll-gesteuert, umkehrbar, ~60 fps.",
      tagline:
        "Eine Landingpage auf Awwwards-Niveau, auf der sich ein prozeduraler Kristall beim Scrollen aus einer explodierten Wolke zusammenfügt.",
      role: "Design & Entwicklung",
      overview: [
        "HALCYON ist eine Schaufenster-Landingpage für ein fiktives Studio für räumliche Interfaces. Im Mittelpunkt steht ein kristallines 3D-Objekt, dessen Zustand an die Scroll-Position gebunden ist: Es fügt sich aus einer verstreuten Wolke zu einer facettierten Kugel zusammen und löst sich beim Zurückscrollen wieder auf.",
        "Das Ganze ist so gebaut, dass es sich wie ein hochwertiger Produktlaunch anfühlt, nicht wie eine Demo: redaktionelle Serifenschrift, eine schillernde Signatur, sanftes Inertia-Scrolling und choreografierte Einblendungen — bei stabiler Framerate.",
      ],
      highlights: [
        "Scroll-gesteuertes 3D-Objekt, das sich flüssig zusammen- und auseinanderfügt",
        "Ein einziges InstancedMesh (~80 Splitter) hält den Cluster bei einem Draw Call",
        "Schillerndes PBR-Material, beleuchtet durch eine Environment Map",
        "Sanftes Lenis-Scrolling synchronisiert mit GSAP ScrollTrigger",
        "prefers-reduced-motion-Fallback und responsiv bis 360px",
      ],
    },
    vantage: {
      description:
        "Analytics-Dashboard für Umsatz, aktive Nutzer, Conversion und Churn — mit Filtern, Exporten und KI-Erklärungen.",
      tagline:
        "Eine klare Analytics-Oberfläche für Umsatz, aktive Nutzer, Conversion und Churn — mit den Filtern und Exporten, die Teams wirklich nutzen.",
      role: "Full-Stack",
      overview: [
        "Vantage ist ein Full-Stack-SaaS-Analytics-Dashboard. Es verwandelt rohe Produktmetriken in eine lesbare Oberfläche — KPI-Karten, einen Umsatztrend, Kategorie-Aufschlüsselungen und eine Tabelle der letzten Transaktionen — mit Datumsfiltern, die zwischen Zuständen animieren.",
        "Es kommt mit Authentifizierung, einer Prisma-Datenebene und einem seedbaren Demo-Konto, dazu KI-generierte Erklärungen, die in einfacher Sprache zusammenfassen, was die Zahlen bedeuten.",
      ],
      highlights: [
        "KPI-Karten, Umsatzdiagramm, Aufschlüsselungen und Transaktionstabelle",
        "Datumsbereich-Filter mit animierten Diagrammübergängen",
        "Auth (Login / Registrierung) mit einem Demo-Konto",
        "KI-generierte Metrik-Erklärungen in einfacher Sprache",
        "Server-Komponenten auf einer Prisma-Datenebene",
      ],
    },
    "react-pizza": {
      description:
        "Pizza-Bestellshop mit Kategoriefiltern, Sortierung, Live-Suche, Warenkorb und Teig-/Größenauswahl — auf Basis von Redux Toolkit.",
      tagline:
        "Ein Pizza-Bestellshop mit Filtern, Suche, Sortierung und einem voll funktionsfähigen Warenkorb.",
      role: "Frontend",
      overview: [
        "React Pizza ist ein E-Commerce-Storefront zum Bestellen von Pizza. Es deckt den gesamten Ablauf vom Stöbern bis zum Warenkorb ab: Kategoriefilter, Sortierung, eine entprellte Live-Suche, Paginierung sowie Teig- und Größenoptionen je Artikel.",
        "Der State wird mit Redux Toolkit verwaltet, der Warenkorb bleibt über Neuladen erhalten, und das Menü wird von einem REST-Endpunkt mit Skeleton-Ladezuständen geladen.",
      ],
      highlights: [
        "Kategoriefilter, Sortierung und entprellte Live-Suche",
        "Warenkorb mit Mengen sowie Teig- und Größenoptionen",
        "Paginierung und Skeleton-Ladezustände",
        "Redux-Toolkit-State mit persistentem Warenkorb",
        "Eigene Detailseiten je Pizza",
      ],
    },
    medclinic: {
      description:
        "Eine gepflegte Website für eine medizinische Klinik: Online-Terminbuchung, Arztprofile, Leistungen und Bewertungen — RU / EN / DE, helles/dunkles Theme, animiert mit Framer Motion.",
      tagline:
        "Eine moderne Klinik-Website — Online-Buchung, Arztprofile und Leistungen in einer ruhigen, dunklen Oberfläche mit sanften Animationen.",
      role: "Design & Entwicklung",
      overview: [
        "AURA ist eine Marketing-Website für eine moderne medizinische Klinik. Sie deckt die gesamte Patient-Journey ab — Leistungen und Ärzte durchstöbern, Bewertungen lesen, Preise prüfen und online einen Termin buchen — als mehrseitige React-Router-SPA mit Sprachumschaltung RU / EN / DE.",
        "Die Oberfläche setzt auf eine ruhige, dunkle Palette mit türkisem Akzent: animierte Section-Einblendungen, hochzählende Statistiken, ein Hell-/Dunkel-Umschalter und eigene Detailseiten für einzelne Ärzte. Jeder Screen bleibt bis zum Mobilgerät responsiv.",
      ],
      highlights: [
        "Online-Terminbuchung Schritt für Schritt (Leistung → Arzt → Datum & Zeit)",
        "Arztverzeichnis mit eigenen Profilseiten",
        "Leistungen, Vorteile, animierte Statistik-Zähler, Bewertungen und FAQ",
        "Sprachumschaltung RU / EN / DE und Hell-/Dunkel-Theme",
        "Framer-Motion-Einblendungen; responsiv bis ~360px",
      ],
    },
  },
};

export function getProjects(lang: Lang): Project[] {
  return base.map((b) => ({ ...b, ...text[lang][b.slug] }));
}

export function getProject(slug: string, lang: Lang = "en"): Project | undefined {
  const b = base.find((x) => x.slug === slug);
  if (!b) return undefined;
  return { ...b, ...text[lang][slug] };
}

/** Ordered slugs — for static params and next-project navigation. */
export const projectSlugs = base.map((b) => b.slug);

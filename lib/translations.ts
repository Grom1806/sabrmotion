export type Lang = "ru" | "en" | "de";

export type Dict = {
  nav: { home: string; about: string; services: string; projects: string; contact: string; cta: string };
  hero: { tag: string; line1: string; line2: string; line3: string; description: string; cta_primary: string; cta_secondary: string };
  about: {
    eyebrow: string; headline: string; p1: string; p2: string; p3: string; cta: string;
    stats: { years: { num: string; label: string }; projects: { num: string; label: string }; satisfaction: { num: string; label: string } };
    int_eyebrow: string; int_headline: string;
    integrations: Array<{ label: string; desc: string }>;
  };
  services: { eyebrow: string; headline: string; items: Array<{ num: string; title: string; description: string }> };
  process: { eyebrow: string; headline: string; steps: Array<{ num: string; title: string; description: string }> };
  statement: { before: string; hl1: string; mid: string; hl2: string };
  contact: { eyebrow: string; headline: string; description: string; telegram: string; request: string };
  footer: { tagline: string; nav_label: string; services_label: string; contact_label: string; copyright: string; built_with: string };
};

const ru: Dict = {
  nav: { home: "Главная", about: "О нас", services: "Услуги", projects: "Проекты", contact: "Контакт", cta: "Написать" },
  hero: {
    tag: "Работаю с клиентами по всему миру",
    line1: "SABRMOTION —",
    line2: "ВЕБ-РАЗРАБОТКА",
    line3: "ПОД КЛЮЧ",
    description: "Делаю Telegram-ботов, сайты и виджет-боты, которые приносят заявки и реальные продажи — чистый код, ИИ-готовность, полная интеграция с вашим бизнесом.",
    cta_primary: "Обсудить проект →",
    cta_secondary: "Смотреть услуги",
  },
  about: {
    eyebrow: "О Sabrmotion",
    headline: "Создаю инструменты, которые работают на продажи",
    p1: "Sabrmotion — веб-разработка под ключ с упором на результат. Делаю Telegram-ботов, сайты и виджет-боты, которые приносят заявки и продажи.",
    p2: "В работе активно использую ИИ как инструмент — это ускоряет разработку, помогает быстрее находить решения и собирать проекты качественнее и в более сжатые сроки. Где это полезно бизнесу, внедряю ИИ и в сами продукты: умные чат-боты, которые понимают клиента и отвечают по сути.",
    p3: "Опыт в разработке — более 3 лет. Работаю напрямую: вы общаетесь с тем, кто пишет код, без менеджеров и посредников. Сайты пишу с нуля, ботов — на Node.js, что даёт гибкость и возможность подключить любые интеграции: CRM, приём оплат, рассылки и внешние API.",
    cta: "Связаться →",
    stats: {
      years: { num: "3+", label: "Года опыта" },
      projects: { num: "20+", label: "Проектов сдано" },
      satisfaction: { num: "100%", label: "Довольных клиентов" },
    },
    int_eyebrow: "Что умею интегрировать",
    int_headline: "Готов к любым интеграциям для вашего бизнеса",
    integrations: [
      { label: "ИИ и автоматизация", desc: "Умные боты и автоматизированное общение с клиентами на базе актуальных языковых моделей." },
      { label: "CRM-системы", desc: "amoCRM, Битрикс24 и аналоги — заявки сразу попадают в воронку продаж." },
      { label: "Приём оплат", desc: "Эквайринг и платёжные шлюзы прямо в боте или на сайте." },
      { label: "Авторассылки и воронки", desc: "Автоворонки и рассылки для прогрева аудитории и возврата клиентов." },
      { label: "Базы данных и API", desc: "Кастомные БД и интеграция с внешними API под любую логику проекта." },
    ],
  },
  services: {
    eyebrow: "Услуги",
    headline: "Что я разрабатываю",
    items: [
      { num: "01", title: "Telegram-боты под ключ", description: "Боты для продаж, приёма заявок и оплат, автоворонок и рассылок. Пишу на Node.js — без ограничений конструкторов. Подключаю эквайринг, CRM и базы данных, чтобы бот не просто отвечал, а вёл клиента к покупке." },
      { num: "02", title: "Сайты с нуля", description: "Разрабатываю сайты под задачу, а не из готовых блоков. Лендинги, многостраничники, сайты с интеграциями. Чистый код, нормальная скорость, удобство для клиента и для вас на стороне управления." },
      { num: "03", title: "Виджет-боты для сайтов", description: "Чат-боты и виджеты, которые встраиваются на сайт и работают на конверсию: отвечают, собирают контакты, доводят посетителя до заявки или оплаты. При необходимости усиливаю их ИИ." },
    ],
  },
  process: {
    eyebrow: "Как я работаю",
    headline: "Чёткий процесс — от первого звонка до запуска",
    steps: [
      { num: "01", title: "Обсуждаем задачу и цель", description: "Что должно происходить и какой результат нужен. Без абстрактного брифа — живой разговор о вашем бизнесе." },
      { num: "02", title: "Фиксируем объём, сроки и стоимость", description: "Получаете чёткое предложение: что входит, когда будет готово и сколько стоит. Без скрытых доплат." },
      { num: "03", title: "Старт по схеме 50/50", description: "Предоплата перед работой, остаток — после сдачи. Просто и честно для обеих сторон." },
      { num: "04", title: "Разработка с промежуточными показами", description: "Показываю прогресс в ключевых точках, чтобы вы могли направлять и давать обратную связь." },
      { num: "05", title: "Сдача и запуск", description: "Передача, развёртывание и проверка на боевых данных. Всё проверяется до выхода в эфир." },
      { num: "06", title: "Поддержка после запуска", description: "Поддержка и доработки после запуска — по отдельной договорённости. Не бросаю после сдачи." },
    ],
  },
  statement: {
    before: "Задача Sabrmotion — не просто «сделать», а собрать инструмент, который встроится в ваш бизнес и начнёт работать на ",
    hl1: "реальные продажи",
    mid: " —",
    hl2: " под ваши задачи.",
  },
  contact: {
    eyebrow: "Связаться",
    headline: "Нужен бот, сайт или виджет, который реально продаёт?",
    description: "Напишите в Telegram или оставьте заявку — обсудим задачу и предложу подходящее решение.",
    telegram: "Написать в Telegram",
    request: "Оставить заявку",
  },
  footer: {
    tagline: "Разработка Telegram-ботов, сайтов и виджетов для реального роста бизнеса.",
    nav_label: "Навигация",
    services_label: "Услуги",
    contact_label: "Контакты",
    copyright: "© 2026 Sabrmotion. Все права защищены.",
    built_with: "Разработано с точностью",
  },
};

const en: Dict = {
  nav: { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact", cta: "Get in Touch" },
  hero: {
    tag: "Open to projects · Worldwide",
    line1: "SABRMOTION —",
    line2: "RESULTS-DRIVEN",
    line3: "WEB DEVELOPMENT",
    description: "I build Telegram bots, websites and widget bots that generate leads and drive real sales — custom-coded, AI-ready, fully integrated with your business.",
    cta_primary: "Let's Work Together →",
    cta_secondary: "Explore services",
  },
  about: {
    eyebrow: "About Sabrmotion",
    headline: "Built for results, not just aesthetics",
    p1: "Sabrmotion is turnkey web development focused on outcomes. I build Telegram bots, websites and widget bots that capture leads and close sales.",
    p2: "I actively use AI as a development tool — it speeds up delivery, helps find better solutions faster and raises quality within tighter timelines. Where it genuinely adds value for your business, I embed AI directly into the product: intelligent chatbots that understand your customers and respond on-point.",
    p3: "3+ years of hands-on development. You work directly with the person writing your code — no account managers, no middlemen. I build websites from scratch and bots on Node.js, giving you the flexibility to connect anything: CRM, payment gateways, broadcast campaigns and external APIs.",
    cta: "Get in Touch →",
    stats: {
      years: { num: "3+", label: "Years of Experience" },
      projects: { num: "20+", label: "Projects Delivered" },
      satisfaction: { num: "100%", label: "Client Satisfaction" },
    },
    int_eyebrow: "What I Can Integrate",
    int_headline: "Built to connect with your business",
    integrations: [
      { label: "AI & Automation", desc: "Intelligent bots and automated customer communication powered by the latest language models." },
      { label: "CRM Systems", desc: "amoCRM, Bitrix24 and equivalents — leads flow straight into your sales pipeline." },
      { label: "Payment Processing", desc: "Payment gateways and acquiring directly in the bot or on your website." },
      { label: "Auto-funnels & Campaigns", desc: "Automated funnels and broadcast campaigns for lead nurturing and customer re-engagement." },
      { label: "Databases & APIs", desc: "Custom databases and external API integrations for any project logic." },
    ],
  },
  services: {
    eyebrow: "Services",
    headline: "What I Build",
    items: [
      { num: "01", title: "Telegram Bots, End-to-End", description: "Sales bots, lead capture and payment bots, auto-funnels and broadcast campaigns. Built on Node.js — unconstrained by no-code builders. I connect payment gateways, CRMs and databases so your bot doesn't just respond, it guides customers all the way to purchase." },
      { num: "02", title: "Websites from Scratch", description: "I develop websites tailored to your goals, not from pre-made templates. Landing pages, multi-page sites, sites with integrations. Clean code, solid performance, easy for your customers to use and simple for you to manage." },
      { num: "03", title: "Website Widget Bots", description: "Chatbots and widgets embedded directly in your site, built to convert: they answer questions, collect contacts and guide visitors through to a lead or payment. I can enhance them with AI where it adds real value." },
    ],
  },
  process: {
    eyebrow: "How I Work",
    headline: "A clear process, from first call to launch",
    steps: [
      { num: "01", title: "Discuss the task and goal", description: "We talk through what should happen and what result you need. No generic brief — a real conversation about your business." },
      { num: "02", title: "Fix scope, timeline and cost", description: "You get a clear proposal: what's included, when it's ready and what it costs. No hidden extras." },
      { num: "03", title: "50/50 start", description: "Deposit before work begins, balance after delivery. Simple and fair for both sides." },
      { num: "04", title: "Development with demos", description: "I show you progress at key milestones so you can steer and give feedback along the way." },
      { num: "05", title: "Delivery and launch", description: "Handoff, deployment and testing on live data. Everything checked before you go live." },
      { num: "06", title: "Support after launch", description: "Post-launch support and refinements available by separate agreement. You won't be left on your own." },
    ],
  },
  statement: {
    before: "Sabrmotion's goal is not just to 'build something', but to create a tool that integrates into your business and starts working for ",
    hl1: "real sales",
    mid: " —",
    hl2: " tailored to your goals.",
  },
  contact: {
    eyebrow: "Contact",
    headline: "Need a bot, site or widget that actually sells?",
    description: "Message me on Telegram or submit a request — we'll discuss your task and I'll propose the right solution.",
    telegram: "Message on Telegram",
    request: "Submit a Request",
  },
  footer: {
    tagline: "Building Telegram bots, websites and widgets for real business growth.",
    nav_label: "Navigation",
    services_label: "Services",
    contact_label: "Contact",
    copyright: "© 2026 Sabrmotion. All rights reserved.",
    built_with: "Built with Precision",
  },
};

const de: Dict = {
  nav: { home: "Startseite", about: "Über uns", services: "Leistungen", projects: "Projekte", contact: "Kontakt", cta: "Kontakt aufnehmen" },
  hero: {
    tag: "Weltweit für Projekte verfügbar",
    line1: "SABRMOTION —",
    line2: "EFFEKTIVE",
    line3: "WEBENTWICKLUNG",
    description: "Ich entwickle Telegram-Bots, Websites und Widget-Bots, die Anfragen generieren und echten Umsatz bringen — individuell programmiert, KI-fähig, integriert in Ihr Unternehmen.",
    cta_primary: "Projekt besprechen →",
    cta_secondary: "Leistungen entdecken",
  },
  about: {
    eyebrow: "Über Sabrmotion",
    headline: "Für Ergebnisse entwickelt — nicht nur für Optik",
    p1: "Sabrmotion steht für schlüsselfertige Webentwicklung mit Fokus auf messbare Resultate. Ich entwickle Telegram-Bots, Websites und Widget-Bots, die Leads generieren und Verkäufe abschließen.",
    p2: "KI setze ich aktiv als Entwicklungswerkzeug ein — das beschleunigt die Lieferung, hilft schneller bessere Lösungen zu finden und erhöht die Qualität bei kürzeren Laufzeiten. Wo es Ihrem Unternehmen echten Mehrwert bringt, integriere ich KI direkt in das Produkt: intelligente Chatbots, die Ihre Kunden verstehen und zielgerichtet antworten.",
    p3: "Über 3 Jahre praktische Entwicklungserfahrung. Sie arbeiten direkt mit der Person zusammen, die Ihren Code schreibt — keine Account Manager, keine Mittelsmänner. Websites von Grund auf, Bots in Node.js — maximale Flexibilität für CRM, Zahlungsabwicklung, Newsletter und externe APIs.",
    cta: "Kontakt aufnehmen →",
    stats: {
      years: { num: "3+", label: "Jahre Erfahrung" },
      projects: { num: "20+", label: "Projekte geliefert" },
      satisfaction: { num: "100%", label: "Kundenzufriedenheit" },
    },
    int_eyebrow: "Was ich integrieren kann",
    int_headline: "Gebaut, um mit Ihrem Unternehmen zu verbinden",
    integrations: [
      { label: "KI & Automatisierung", desc: "Intelligente Bots und automatisierte Kundenkommunikation auf Basis aktueller Sprachmodelle." },
      { label: "CRM-Systeme", desc: "amoCRM, Bitrix24 und Äquivalente — Anfragen landen direkt in Ihrer Vertriebspipeline." },
      { label: "Zahlungsabwicklung", desc: "Zahlungsdienstleister und Acquiring direkt im Bot oder auf Ihrer Website." },
      { label: "Auto-Funnels & Kampagnen", desc: "Automatische Funnels und Newsletter für Lead-Nurturing und Kundenreaktivierung." },
      { label: "Datenbanken & APIs", desc: "Individuelle Datenbanken und externe API-Integrationen für beliebige Projektlogik." },
    ],
  },
  services: {
    eyebrow: "Leistungen",
    headline: "Was ich entwickle",
    items: [
      { num: "01", title: "Telegram-Bots schlüsselfertig", description: "Verkaufs-Bots, Anfrage- und Zahlungs-Bots, automatische Funnels und Newsletter. Entwickelt in Node.js — ohne Einschränkungen von Baukastensystemen. Ich verbinde Zahlungsdienstleister, CRMs und Datenbanken, damit Ihr Bot Kunden bis zum Kaufabschluss begleitet." },
      { num: "02", title: "Websites von Grund auf", description: "Ich entwickle Websites, die auf Ihre Ziele zugeschnitten sind — nicht aus Vorlagen. Landingpages, mehrseitige Websites, Websites mit Integrationen. Sauberer Code, solide Performance, nutzerfreundlich für Ihre Kunden und einfach für Sie zu verwalten." },
      { num: "03", title: "Website-Widget-Bots", description: "Chatbots und Widgets, die direkt in Ihre Website eingebettet werden und auf Conversion ausgelegt sind: Fragen beantworten, Kontakte erfassen, Besucher bis zur Anfrage oder Zahlung begleiten. Bei Bedarf ergänze ich sie mit KI." },
    ],
  },
  process: {
    eyebrow: "Wie ich arbeite",
    headline: "Klarer Prozess — von der ersten Anfrage bis zum Launch",
    steps: [
      { num: "01", title: "Aufgabe und Ziel besprechen", description: "Wir sprechen darüber, was passieren soll und welches Ergebnis Sie brauchen. Kein Standard-Brief — ein echtes Gespräch über Ihr Unternehmen." },
      { num: "02", title: "Umfang, Zeitplan und Kosten festlegen", description: "Sie erhalten ein klares Angebot: was enthalten ist, wann es fertig ist und was es kostet. Keine versteckten Extras." },
      { num: "03", title: "50/50-Start", description: "Anzahlung vor Arbeitsbeginn, Rest nach Abnahme. Einfach und fair für beide Seiten." },
      { num: "04", title: "Entwicklung mit Zwischenpräsentationen", description: "Ich zeige Ihnen den Fortschritt an wichtigen Meilensteinen, damit Sie steuern und Feedback geben können." },
      { num: "05", title: "Abnahme und Launch", description: "Übergabe, Deployment und Test mit Live-Daten. Alles geprüft, bevor Sie live gehen." },
      { num: "06", title: "Support nach dem Launch", description: "Post-Launch-Support und Nacharbeiten nach separater Vereinbarung. Sie werden nicht allein gelassen." },
    ],
  },
  statement: {
    before: "Sabrmotions Ziel ist es nicht, etwas einfach zu 'bauen', sondern ein Werkzeug zu schaffen, das in Ihr Unternehmen integriert wird und für ",
    hl1: "echte Umsätze",
    mid: " arbeitet —",
    hl2: " zugeschnitten auf Ihre Ziele.",
  },
  contact: {
    eyebrow: "Kontakt",
    headline: "Brauchen Sie einen Bot, eine Website oder einen Widget, der wirklich verkauft?",
    description: "Schreiben Sie mir auf Telegram oder hinterlassen Sie eine Anfrage — wir besprechen Ihre Aufgabe und ich schlage die passende Lösung vor.",
    telegram: "Auf Telegram schreiben",
    request: "Anfrage senden",
  },
  footer: {
    tagline: "Entwicklung von Telegram-Bots, Websites und Widgets für echtes Unternehmenswachstum.",
    nav_label: "Navigation",
    services_label: "Leistungen",
    contact_label: "Kontakt",
    copyright: "© 2026 Sabrmotion. Alle Rechte vorbehalten.",
    built_with: "Mit Präzision entwickelt",
  },
};

export const translations: Record<Lang, Dict> = { ru, en, de };

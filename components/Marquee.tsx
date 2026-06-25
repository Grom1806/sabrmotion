"use client";

const TECH = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Telegram Bot API",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "MongoDB",
  "amoCRM",
  "REST API",
  "Webhooks",
  "OpenAI API",
  "Docker",
  "Redis",
  "Prisma",
];

export default function Marquee() {
  const items = [...TECH, ...TECH];

  return (
    <div
      aria-hidden="true"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        padding: "0.875rem 0",
        background: "rgba(255,255,255,0.012)",
      }}
    >
      <div className="marquee-inner">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: "0.62rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted)",
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "var(--accent)", fontSize: "0.35rem", opacity: 0.55 }}>
              ◆
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

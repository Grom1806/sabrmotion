"use client";

import { motion } from "framer-motion";

const mockups = [
  {
    label: "Website Redesign",
    accent: "#4ade80",
    letter: "W",
    bg: "linear-gradient(135deg, #111 0%, #161616 100%)",
  },
  {
    label: "Brand Identity",
    accent: "#facc15",
    letter: "M",
    bg: "linear-gradient(135deg, #131008 0%, #1a1500 100%)",
  },
  {
    label: "Mobile App UI",
    accent: "#60a5fa",
    letter: "A",
    bg: "linear-gradient(135deg, #080e18 0%, #0d1520 100%)",
  },
  {
    label: "Portfolio Design",
    accent: "#f472b6",
    letter: "13",
    bg: "linear-gradient(135deg, #160a10 0%, #1a0d15 100%)",
  },
];

const brands = ["Spotify", "Clutch", "Dribbble", "Behance", "Figma", "Adobe"];

export default function Mockups() {
  return (
    <section style={{ padding: "0 0 5rem" }}>
      {/* Mockup cards row */}
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            /* overflow: visible so hover scale doesn't get clipped */
          }}
          className="grid-mockups"
        >
          {mockups.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, zIndex: 2, transition: { duration: 0.22 } }}
              style={{
                background: m.bg,
                border: "1px solid var(--border)",
                borderRadius: "1.25rem",
                padding: "1.75rem",
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                zIndex: 0,
              }}
            >
              {/* Corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "80px",
                  height: "80px",
                  background: `radial-gradient(circle at top right, ${m.accent}18, transparent 70%)`,
                }}
              />
              {/* Label */}
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                {m.label}
              </span>
              {/* Big accent letter */}
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 5vw, 5rem)",
                  lineHeight: 1,
                  color: m.accent,
                  textShadow: `0 0 40px ${m.accent}55`,
                  alignSelf: "flex-end",
                }}
              >
                {m.letter}
              </div>
              {/* Bottom tag */}
              <span className="tag-dark" style={{ alignSelf: "flex-start" }}>
                Coming Soon
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand logos strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          marginTop: "3rem",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "1.5rem 1.5rem",
        }}
      >
        <div
          className="section-container brands-row"
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              opacity: 0.5,
              flexShrink: 0,
            }}
          >
            Trusted by
          </span>
          {brands.map((brand) => (
            <span
              key={brand}
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                transition: "color 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.45)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.18)")
              }
            >
              {brand}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

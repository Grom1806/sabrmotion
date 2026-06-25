"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with Subhan was an exceptional experience. The designs were modern, clean, and delivered exactly what we envisioned — ahead of schedule.",
    name: "Alex Chen",
    role: "CEO, TechStartup",
    initials: "AC",
  },
  {
    quote:
      "Incredible attention to detail and communication throughout the project. The final website exceeded our expectations in every way.",
    name: "Sarah Mitchell",
    role: "Founder, Design Studio",
    initials: "SM",
  },
  {
    quote:
      "Professional, creative, and technically excellent. Subhan transformed our outdated site into a stunning digital experience. Highly recommend.",
    name: "James Reid",
    role: "Marketing Director",
    initials: "JR",
  },
];

const stars = "★★★★★";

export default function Testimonials() {
  return (
    <section
      className="section-pad"
      style={{
        background: "var(--bg-section)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--text)",
            }}
          >
            WHAT MY{" "}
            <span style={{ color: "var(--accent)" }}>CLIENTS SAY</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gap: "1.25rem",
          }}
          className="testimonials-grid"
        >
          {testimonials.map(({ quote, name, role, initials }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="dark-card"
              style={{ padding: "2rem" }}
            >
              {/* Stars */}
              <div
                style={{
                  color: "var(--accent)",
                  fontSize: "0.9rem",
                  marginBottom: "1.25rem",
                  letterSpacing: "0.05em",
                }}
              >
                {stars}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.9rem",
                  color: "var(--text-sec)",
                  lineHeight: 1.75,
                  marginBottom: "1.75rem",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: "rgba(74,222,128,0.12)",
                    border: "1px solid var(--accent-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "var(--text)",
                    }}
                  >
                    {name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                    }}
                  >
                    {role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

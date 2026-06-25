"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="section-pad"
      style={{
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="section-eyebrow"
        >
          {t.process.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--text)",
            marginBottom: "3.5rem",
            maxWidth: "620px",
          }}
        >
          {t.process.headline}
        </motion.h2>

        <div style={{ display: "grid", gap: "1.25rem" }} className="process-grid">
          {t.process.steps.map(({ num, title, description }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.42, delay: i * 0.06 }}
              style={{
                padding: "1.75rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "1.25rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  color: "var(--accent)",
                  background: "rgba(74,222,128,0.08)",
                  border: "1px solid rgba(74,222,128,0.22)",
                  borderRadius: "0.375rem",
                  padding: "0.22rem 0.58rem",
                  marginBottom: "0.875rem",
                }}
              >
                {num}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {description}
              </p>

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "90px",
                  height: "90px",
                  background:
                    "radial-gradient(circle, rgba(74,222,128,0.05) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  FiCpu,
  FiUsers,
  FiCreditCard,
  FiTrendingUp,
  FiDatabase,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { useLanguage } from "@/lib/LanguageContext";
import AnimatedCounter from "@/components/AnimatedCounter";

const integrationIcons: IconType[] = [
  FiCpu,
  FiUsers,
  FiCreditCard,
  FiTrendingUp,
  FiDatabase,
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section-pad"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-section)",
      }}
    >
      <div className="section-container">

        {/* ── Bio + stats ───────────────────────────────── */}
        <div style={{ display: "grid", gap: "3.5rem" }} className="about-bio-grid">

          {/* Bio text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="section-eyebrow"
            >
              {t.about.eyebrow}
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
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "var(--text)",
                marginBottom: "1.5rem",
              }}
            >
              {t.about.headline}
            </motion.h2>

            {[t.about.p1, t.about.p2, t.about.p3].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.14 + i * 0.09 }}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.9375rem",
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: i < 2 ? "1rem" : "2.25rem",
                }}
              >
                {text}
              </motion.p>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.38 }}
              className="btn-outline"
              style={{ fontSize: "0.82rem" }}
            >
              {t.about.cta}
            </motion.a>
          </div>

          {/* Stats column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1.25rem",
            }}
          >
            {[t.about.stats.years, t.about.stats.projects, t.about.stats.satisfaction].map(
              ({ num, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: 0.08 + i * 0.1 }}
                  style={{
                    padding: "1.5rem 1.75rem",
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "1rem",
                    borderLeft: "3px solid var(--accent)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "clamp(1.875rem, 3vw, 2.5rem)",
                      color: "var(--accent)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: "0.375rem",
                    }}
                  >
                    <AnimatedCounter value={num} />
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.8rem",
                      color: "var(--muted)",
                    }}
                  >
                    {label}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* ── Integrations ──────────────────────────────── */}
        <div style={{ marginTop: "5rem" }}>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="section-eyebrow"
          >
            {t.about.int_eyebrow}
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "2.25rem",
            }}
          >
            {t.about.int_headline}
          </motion.h3>

          <div style={{ display: "grid", gap: "1rem" }} className="integrations-grid">
            {t.about.integrations.map(({ label, desc }, i) => {
              const Icon = integrationIcons[i];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.38, delay: i * 0.055 }}
                  style={{ position: "relative" }}
                >
                  <div className="integration-card">
                    <span className="integration-card__icon">
                      <Icon />
                    </span>

                    <p
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "var(--text)",
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {label}
                    </p>

                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

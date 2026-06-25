"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

function ServiceItem({
  num,
  title,
  description,
  isOpen,
  onToggle,
}: {
  num: string;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
        onMouseEnter={(e) => {
          const numEl = (e.currentTarget as HTMLElement).querySelector(".svc-num") as HTMLElement;
          if (numEl) numEl.style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          const numEl = (e.currentTarget as HTMLElement).querySelector(".svc-num") as HTMLElement;
          if (numEl) numEl.style.color = isOpen ? "var(--accent)" : "var(--muted)";
        }}
      >
        <span
          className="svc-num"
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "0.65rem",
            color: isOpen ? "var(--accent)" : "var(--muted)",
            letterSpacing: "0.1em",
            flexShrink: 0,
            transition: "color 0.2s ease",
          }}
        >
          {num}
        </span>

        <span
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: "var(--text)",
            flex: 1,
          }}
        >
          {title}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1.5rem",
            color: isOpen ? "var(--accent)" : "var(--muted)",
            fontWeight: 300,
            lineHeight: 1,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.95rem",
                color: "var(--muted)",
                lineHeight: 1.75,
                paddingBottom: "1.75rem",
                paddingLeft: "calc(1.5rem + 0.65rem + 1.5rem)",
                maxWidth: "640px",
              }}
            >
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="section-pad"
      style={{
        background: "var(--bg-section)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-container">
        <div
          style={{ display: "grid", gap: "4rem" }}
          className="services-grid"
        >
          {/* Left — header */}
          <div style={{ maxWidth: "340px" }}>
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow"
            >
              {t.services.eyebrow}
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
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--text)",
              }}
            >
              {t.services.headline}
            </motion.h2>
          </div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {t.services.items.map((svc, i) => (
                <ServiceItem
                  key={i}
                  {...svc}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

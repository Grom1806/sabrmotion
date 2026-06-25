"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Statement() {
  const { t } = useLanguage();

  return (
    <section className="section-pad">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            lineHeight: 1.3,
            letterSpacing: "-0.015em",
            color: "var(--text)",
            maxWidth: "900px",
          }}
        >
          {t.statement.before}
          <span style={{ color: "var(--accent)" }}>{t.statement.hl1}</span>
          {t.statement.mid}
          <span style={{ color: "var(--accent)" }}>{t.statement.hl2}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, var(--accent) 0%, transparent 60%)",
            marginTop: "2.5rem",
            maxWidth: "900px",
            transformOrigin: "left",
          }}
        />
      </div>
    </section>
  );
}

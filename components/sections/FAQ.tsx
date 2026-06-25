"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What services do you offer?",
    a: "I offer a full range of digital services including web development, UI/UX design, responsive design, brand identity, and creative consulting. Whether you need a landing page or a complex web application, I can help.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Project timelines vary depending on scope. A landing page typically takes 5–7 days, a multi-page website 2–4 weeks, and larger projects are discussed on a case-by-case basis. I always provide a clear timeline upfront.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I work with clients globally. All communication is handled via email, video calls, and project management tools — timezone differences are never a barrier to great collaboration.",
  },
  {
    q: "What is your revision policy?",
    a: "Each plan includes a set number of revision rounds (see pricing). I encourage clear feedback early in the process to minimise unnecessary rounds. Additional revisions beyond the included amount are billed at an hourly rate.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. The Professional plan includes one month of post-launch support. For ongoing maintenance, hosting management, or content updates, we can discuss a monthly retainer arrangement.",
  },
  {
    q: "How do we get started?",
    a: "Simply reach out via the contact section or email me directly. We'll schedule a discovery call to discuss your project, goals, and timeline. From there, I'll send a proposal and we can hit the ground running.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
        transition: "border-color 0.2s ease",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 600,
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            color: isOpen ? "var(--accent)" : "var(--text)",
            transition: "color 0.2s ease",
          }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1.4rem",
            color: isOpen ? "var(--accent)" : "var(--muted)",
            fontWeight: 300,
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.9rem",
                color: "var(--muted)",
                lineHeight: 1.75,
                paddingBottom: "1.75rem",
                maxWidth: "720px",
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: "7rem 0",
        background: "var(--bg-section)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gap: "4rem",
          }}
          className="faq-grid"
        >
          {/* Left header */}
          <div style={{ maxWidth: "340px" }}>
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow"
            >
              FAQ
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
                marginBottom: "1rem",
              }}
            >
              Frequently Asked{" "}
              <span style={{ color: "var(--accent)" }}>Questions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.875rem",
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              Still have questions?{" "}
              <a
                href="mailto:hello@subhan.dev"
                style={{ color: "var(--accent)", textDecoration: "none" }}
              >
                Drop me an email →
              </a>
            </motion.p>
          </div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  {...faq}
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

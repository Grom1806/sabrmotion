"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Email", href: "mailto:hello@subhan.dev", symbol: "✉" },
  { label: "GitHub", href: "https://github.com/subhan", symbol: "⌥" },
  { label: "LinkedIn", href: "https://linkedin.com/in/subhan", symbol: "in" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Bottom radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "350px",
          background:
            "radial-gradient(ellipse at bottom, rgba(57,255,20,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center">
        {/* Centered section header */}
        <div className="flex items-center gap-5 mb-20 justify-center">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              transformOrigin: "right",
              height: "1px",
              width: "70px",
              flexShrink: 0,
              background: "var(--neon)",
              boxShadow: "0 0 8px rgba(57,255,20,0.7)",
            }}
          />
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-label"
          >
            Contact
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              transformOrigin: "left",
              height: "1px",
              width: "150px",
              flexShrink: 0,
              background: "var(--neon)",
              boxShadow: "0 0 8px rgba(57,255,20,0.7)",
            }}
          />
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(1rem, 2vw, 2.5rem)",
            lineHeight: 1.1,
            color: "var(--text-primary)",
            marginBottom: "1.25rem",
          }}
        >
          Let&rsquo;s Build Something
          <br />
          <span className="neon-text">Together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base mb-14"
          style={{
            fontFamily: "var(--font-inter)",
            color: "var(--text-muted)",
            lineHeight: 1.75,
          }}
        >
          Have a project in mind? I&rsquo;d love to hear about it.
          <br />
          Let&rsquo;s connect and make it happen.
        </motion.p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 justify-center mb-24">
          {links.map(({ label, href, symbol }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="glass-panel flex items-center gap-3 px-6 py-3 text-sm"
              style={{
                fontFamily: "var(--font-jetbrains)",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition:
                  "color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--neon)";
                el.style.borderColor = "rgba(57,255,20,0.45)";
                el.style.boxShadow = "0 0 22px rgba(57,255,20,0.18)";
                el.style.background = "rgba(57,255,20,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--text-muted)";
                el.style.borderColor = "var(--neon-border)";
                el.style.boxShadow = "none";
                el.style.background = "rgba(57,255,20,0.03)";
              }}
            >
              <span>{symbol}</span>
              <span>{label}</span>
            </motion.a>
          ))}
        </div>

        {/* Footer divider + copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 text-xs"
          style={{
            borderTop: "1px solid var(--neon-border)",
            fontFamily: "var(--font-jetbrains)",
            color: "rgba(57,255,20,0.25)",
          }}
        >
          © 2026 Subhan — Crafted with precision.
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Project Title",
    tags: ["Web Design", "Development"],
    color: "rgba(74,222,128,0.08)",
  },
  {
    num: "02",
    title: "Project Title",
    tags: ["Brand Identity", "UI/UX"],
    color: "rgba(250,204,21,0.08)",
  },
  {
    num: "03",
    title: "Project Title",
    tags: ["Mobile App", "React Native"],
    color: "rgba(96,165,250,0.08)",
  },
  {
    num: "04",
    title: "Project Title",
    tags: ["E-Commerce", "Next.js"],
    color: "rgba(244,114,182,0.08)",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="section-container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow"
            >
              Portfolio
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
                color: "var(--text)",
                lineHeight: 1.1,
              }}
            >
              VIEW MY{" "}
              <span style={{ color: "var(--accent)" }}>PROJECTS</span>
            </motion.h2>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="btn-outline"
            style={{ fontSize: "0.8rem", padding: "0.6rem 1.5rem" }}
          >
            All Projects →
          </motion.a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gap: "1.25rem",
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ scale: 1.02, zIndex: 2, transition: { duration: 0.22 } }}
              className="dark-card"
              style={{ padding: "2rem", cursor: "pointer", minHeight: "260px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              {/* Preview area */}
              <div
                style={{
                  flex: 1,
                  borderRadius: "0.75rem",
                  background: project.color,
                  border: "1px solid var(--border)",
                  marginBottom: "1.5rem",
                  minHeight: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Shimmer */}
                <motion.div
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "40%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.2)",
                  }}
                >
                  Project Preview
                </span>
              </div>

              {/* Info */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      fontSize: "1.125rem",
                      color: "var(--text)",
                    }}
                  >
                    {project.title}
                  </span>
                  <span style={{ color: "var(--muted)", fontSize: "1.1rem" }}>→</span>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-dark">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "0.7rem",
            color: "rgba(74,222,128,0.3)",
            letterSpacing: "0.15em",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          {`// Real projects coming soon — placeholder grid above`}
        </motion.p>
      </div>
    </section>
  );
}

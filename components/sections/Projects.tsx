"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { useLanguage } from "@/lib/LanguageContext";

export default function Projects() {
  const { lang, t } = useLanguage();
  const projects = getProjects(lang);
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
              {t.projects.eyebrow}
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
              {t.projects.headline1} <span style={{ color: "var(--accent)" }}>{t.projects.headline2}</span>
            </motion.h2>
          </div>

          <motion.a
            href="https://github.com/Grom1806"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="btn-outline"
            style={{ fontSize: "0.8rem", padding: "0.6rem 1.5rem" }}
          >
            {t.projects.all_github}
          </motion.a>
        </div>

        {/* Grid — each card is one link to its project page */}
        <div style={{ display: "grid", gap: "1.25rem" }} className="projects-grid">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              style={{ textDecoration: "none", display: "block" }}
              aria-label={`View the ${project.title} case study`}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="dark-card"
                style={{
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                {/* Screenshot */}
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    padding: "0 0.5rem 0.5rem",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "var(--text)",
                      }}
                    >
                      {project.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: "0.7rem",
                        color: "var(--accent)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {project.num}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                      minHeight: "4.1em",
                    }}
                  >
                    {project.description}
                  </p>

                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-dark">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer affordance */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "auto",
                      paddingTop: "0.85rem",
                      borderTop: "1px solid var(--border)",
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                    }}
                  >
                    <span>{t.projects.view_project}</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

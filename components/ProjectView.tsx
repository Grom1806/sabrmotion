"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

export default function ProjectView({
  project,
  next,
}: {
  project: Project;
  next: { slug: string; title: string };
}) {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <CustomCursor />
      <BackToTop />
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,10,0.7)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="section-container"
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "var(--text)",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 12px rgba(74,222,128,0.7)",
              }}
            />
            sabrmot1on
          </Link>
          <Link
            href="/#projects"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.85rem",
              color: "var(--muted)",
            }}
          >
            ← All projects
          </Link>
        </div>
      </header>

      <main className="section-container" style={{ paddingTop: "3.5rem", paddingBottom: "5rem" }}>
        {/* Hero */}
        <motion.p {...fadeUp} transition={{ duration: 0.5 }} className="section-eyebrow">
          {project.year} — {project.role}
        </motion.p>
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.02,
            color: "var(--text)",
            margin: "0.6rem 0 1rem",
          }}
        >
          {project.title}
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
            color: "var(--text-sec)",
            lineHeight: 1.6,
            maxWidth: "60ch",
          }}
        >
          {project.tagline}
        </motion.p>

        {/* Tags + actions */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.75rem",
            margin: "1.75rem 0 2.5rem",
          }}
        >
          {project.tags.map((tag) => (
            <span key={tag} className="tag-dark">
              {tag}
            </span>
          ))}
          <div style={{ flex: 1 }} />
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.6rem 1.5rem" }}
          >
            Visit live ↗
          </a>
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: "0.85rem", padding: "0.6rem 1.5rem" }}
            >
              View code ↗
            </a>
          )}
        </motion.div>

        {/* Cover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            borderRadius: "1.25rem",
            overflow: "hidden",
            border: "1px solid var(--border)",
            background: "var(--bg-section)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
          }}
        >
          <img
            src={project.gallery[0]}
            alt={`${project.title} screenshot`}
            style={{ width: "100%", display: "block" }}
          />
        </motion.div>

        {/* Overview + meta */}
        <div className="project-detail-grid" style={{ marginTop: "4rem" }}>
          <div>
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} style={sectionHeading}>
              Overview
            </motion.h2>
            {project.overview.map((p, i) => (
              <motion.p
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  color: "var(--text-sec)",
                  lineHeight: 1.75,
                  marginBottom: "1.1rem",
                  maxWidth: "62ch",
                }}
              >
                {p}
              </motion.p>
            ))}

            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} style={{ ...sectionHeading, marginTop: "2.5rem" }}>
              Highlights
            </motion.h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {project.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: 0.04 * i }}
                  style={{
                    display: "flex",
                    gap: "0.7rem",
                    alignItems: "flex-start",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.95rem",
                    color: "var(--text-sec)",
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ color: "var(--accent)", flexShrink: 0, fontWeight: 700 }}>✓</span>
                  {h}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Meta sidebar */}
          <motion.aside {...fadeUp} transition={{ duration: 0.6 }}>
            <div
              className="dark-card"
              style={{ padding: "1.75rem", position: "sticky", top: "88px" }}
            >
              <p style={metaLabel}>Built with</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.5rem" }}>
                {project.stack.map((s) => (
                  <span key={s} className="tag-dark">
                    {s}
                  </span>
                ))}
              </div>
              <p style={metaLabel}>Role</p>
              <p style={metaValue}>{project.role}</p>
              <p style={{ ...metaLabel, marginTop: "1rem" }}>Year</p>
              <p style={metaValue}>{project.year}</p>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: "1.5rem", fontSize: "0.85rem" }}
              >
                Open live site ↗
              </a>
            </div>
          </motion.aside>
        </div>

        {/* Gallery (if more than the cover) */}
        {project.gallery.length > 1 && (
          <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {project.gallery.slice(1).map((src, i) => (
              <motion.div
                key={src}
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                style={{
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "var(--bg-section)",
                }}
              >
                <img src={src} alt={`${project.title} screenshot ${i + 2}`} style={{ width: "100%", display: "block" }} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Next project */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          style={{
            marginTop: "5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Link href="/#projects" style={{ fontFamily: "var(--font-inter)", fontSize: "0.9rem", color: "var(--muted)" }}>
            ← Back to all projects
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "var(--text)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Next: {next.title}{" "}
            <span style={{ color: "var(--accent)" }}>→</span>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

const sectionHeading: React.CSSProperties = {
  fontFamily: "var(--font-syne)",
  fontWeight: 700,
  fontSize: "1.4rem",
  letterSpacing: "-0.01em",
  color: "var(--text)",
  marginBottom: "1.1rem",
};

const metaLabel: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains)",
  fontSize: "0.62rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: "0.6rem",
};

const metaValue: React.CSSProperties = {
  fontFamily: "var(--font-inter)",
  fontSize: "0.95rem",
  color: "var(--text)",
};

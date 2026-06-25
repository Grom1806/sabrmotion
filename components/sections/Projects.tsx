"use client";

import { motion } from "framer-motion";

type Project = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  live: string;
  code?: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "HALCYON",
    description:
      "Awwwards-style 3D landing. A procedural Three.js crystal assembles from an exploded cloud as you scroll — scrubbed, reversible, ~60fps.",
    tags: ["Three.js", "GSAP", "TypeScript", "WebGL"],
    image: "/projects/halcyon.webp",
    live: "https://helycon.vercel.app/",
    code: "https://github.com/Grom1806/helycon",
  },
  {
    num: "02",
    title: "Vantage — SaaS Analytics",
    description:
      "Analytics dashboard for revenue, active users, conversion and churn — with filters, exports and AI explanations.",
    tags: ["Next.js", "Prisma", "Charts", "Auth"],
    image: "/projects/vantage.webp",
    live: "https://saas-dashboard-nine-tau.vercel.app/",
    code: "https://github.com/Grom1806/Saas-Dashboard",
  },
  {
    num: "03",
    title: "React Pizza",
    description:
      "Pizza ordering store with category filters, sorting, live search, a cart and crust/size options — built on Redux Toolkit.",
    tags: ["React", "Redux Toolkit", "REST", "SCSS"],
    image: "/projects/pizza.webp",
    live: "https://react-pizza-v2-rust.vercel.app/",
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
            All on GitHub →
          </motion.a>
        </div>

        {/* Grid */}
        <div
          style={{ display: "grid", gap: "1.25rem" }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
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
              }}
            >
              {/* Screenshot */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-media"
                aria-label={`Open ${project.title} live`}
              >
                <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
              </a>

              {/* Info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", padding: "0 0.5rem 0.5rem" }}>
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

                {/* Links */}
                <div
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    marginTop: "0.5rem",
                    paddingTop: "0.85rem",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    Live ↗
                  </a>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--muted)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

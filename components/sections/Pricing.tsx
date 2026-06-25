"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🤖",
    name: "Telegram Bot",
    from: "$200",
    description: "Умные боты для бизнеса в Telegram — от простого FAQ до комплексных систем с AI.",
    features: [
      "Простой бот — меню, FAQ, инфо",
      "Бот для продаж + воронки",
      "CRM-интеграция",
      "Приём платежей",
      "Admin-панель",
      "AI-ответы (ChatGPT)",
    ],
    popular: false,
  },
  {
    icon: "🌐",
    name: "Сайт / Лендинг",
    from: "$280",
    description: "Современные быстрые сайты на Next.js — анимации, SEO, CMS под ключ.",
    features: [
      "Лендинг 1–3 страницы",
      "Бизнес-сайт 5–8 страниц",
      "Интернет-магазин",
      "Анимации и эффекты",
      "CMS для редактирования",
      "SEO-оптимизация",
    ],
    popular: true,
  },
  {
    icon: "⚙️",
    name: "Виджет-бот",
    from: "$180",
    description: "Чат-бот прямо на ваш сайт — FAQ, AI-консультант, лид-генератор.",
    features: [
      "FAQ / техподдержка",
      "AI-консультант",
      "Лид-генератор",
      "CRM-интеграция",
      "Кастомный дизайн",
      "Мультиязычность",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const openCalculator = () => {
    window.dispatchEvent(new CustomEvent("open-chatbot"));
  };

  return (
    <section
      className="section-pad"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
            style={{ justifyContent: "center" }}
          >
            Pricing
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
              marginBottom: "1rem",
            }}
          >
            Цены на{" "}
            <span style={{ color: "var(--accent)" }}>услуги</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.9rem",
              color: "var(--muted)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Точную стоимость рассчитает бот-калькулятор — ответьте на несколько вопросов и получите цену под ваш проект.
          </motion.p>
        </div>

        {/* Cards */}
        <div
          style={{ display: "grid", gap: "1.25rem", alignItems: "start" }}
          className="pricing-grid"
        >
          {services.map(({ icon, name, from, description, features, popular }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                background: popular ? "rgba(74,222,128,0.05)" : "var(--card)",
                border: popular
                  ? "1px solid var(--accent-border)"
                  : "1px solid var(--border)",
                borderRadius: "1.25rem",
                padding: "2rem",
                position: "relative",
                boxShadow: popular ? "0 0 40px rgba(74,222,128,0.08)" : "none",
              }}
            >
              {/* Popular badge */}
              {popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-1px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent)",
                    color: "#0a0a0a",
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.3rem 1.1rem",
                    borderRadius: "0 0 0.75rem 0.75rem",
                  }}
                >
                  Популярно
                </div>
              )}

              {/* Icon + name */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                  marginTop: popular ? "1rem" : 0,
                }}
              >
                <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>{icon}</span>
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: popular ? "var(--accent)" : "var(--text)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {name}
                </p>
              </div>

              {/* From price */}
              <div style={{ marginBottom: "0.25rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    marginRight: "0.375rem",
                  }}
                >
                  от
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                    color: "var(--text)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {from}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  color: "var(--muted)",
                  marginBottom: "1rem",
                }}
              >
                за проект
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginBottom: "1.75rem",
                  paddingBottom: "1.75rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {description}
              </p>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {features.map(feat => (
                  <li
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.875rem",
                      color: "var(--text-sec)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        fontWeight: 700,
                        flexShrink: 0,
                        fontSize: "0.8rem",
                      }}
                    >
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={openCalculator}
                className={popular ? "btn-primary" : "btn-outline"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Рассчитать цену →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "0.7rem",
            color: "rgba(74,222,128,0.35)",
            letterSpacing: "0.12em",
            textAlign: "center",
            marginTop: "2.5rem",
          }}
        >
          {`// Цена зависит от функций — используйте калькулятор для точного расчёта`}
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background:
          "linear-gradient(90deg, #39ff14 0%, rgba(57,255,20,0.7) 100%)",
        transformOrigin: "0%",
        zIndex: 1000,
        boxShadow:
          "0 0 8px rgba(57,255,20,0.9), 0 0 20px rgba(57,255,20,0.4)",
      }}
    />
  );
}

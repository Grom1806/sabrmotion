"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let clicking = false;
    let visible = false;
    let hovering = false;
    let animId: number;

    const show = (x: number, y: number) => { mx = x; my = y; visible = true; };
    const hide = () => { visible = false; mx = -200; my = -200; };
    const onMove = (e: MouseEvent) => {
      show(e.clientX, e.clientY);
      const target = e.target;
      hovering =
        target instanceof Element &&
        !!target.closest("a, button, [role=button]");
    };
    const onDown = () => { clicking = true; };
    const onUp = () => { clicking = false; };

    const tick = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;

      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot) {
        dot.style.left = `${mx}px`;
        dot.style.top = `${my}px`;
        dot.style.opacity = visible ? "1" : "0";
        dot.style.width = hovering ? "10px" : "6px";
        dot.style.height = hovering ? "10px" : "6px";
      }
      if (ring) {
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
        ring.style.opacity = visible ? "0.7" : "0";
        const s = clicking ? "24px" : hovering ? "48px" : "36px";
        ring.style.width = s;
        ring.style.height = s;
        ring.style.borderColor = hovering
          ? "rgba(74,222,128,0.8)"
          : "rgba(74,222,128,0.5)";
      }
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", onMove as EventListener);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", onMove as EventListener);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          left: "-200px",
          top: "-200px",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--accent)",
          transform: "translate(-50%, -50%)",
          willChange: "left, top, width, height",
          transition: "width 0.15s ease, height 0.15s ease, opacity 0.2s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9998,
          left: "-200px",
          top: "-200px",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1.5px solid rgba(74,222,128,0.5)",
          transform: "translate(-50%, -50%)",
          willChange: "left, top, width, height",
          transition: "width 0.18s ease, height 0.18s ease, opacity 0.2s, border-color 0.18s",
        }}
      />
    </>
  );
}

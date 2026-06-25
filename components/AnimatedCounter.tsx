"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  duration?: number;
}

export default function AnimatedCounter({ value, duration = 1600 }: Props) {
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) { setDisplay(value); return; }

    const target = parseInt(match[1]);
    const suffix = match[2];

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const t0 = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            setDisplay(`${Math.round(eased * target)}${suffix}`);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return <span ref={spanRef}>{display}</span>;
}

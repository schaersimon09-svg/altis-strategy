"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;   // e.g. "48", "12", "5"
  suffix?: string; // e.g. "h", " ans"
  label: string;
}

function useCountUp(target: number, duration = 1200, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

export default function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const numericTarget = parseInt(value, 10) || 0;
  const count = useCountUp(numericTarget, 1000, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isNonNumeric = isNaN(numericTarget) || numericTarget === 0;

  return (
    <div ref={ref} className="flex flex-col items-start">
      <div
        className={`text-3xl font-black text-ochre font-mono tabular-nums transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {isNonNumeric ? value : `${count}${suffix}`}
      </div>
      <div className="text-xs text-white/50 mt-0.5">{label}</div>
    </div>
  );
}

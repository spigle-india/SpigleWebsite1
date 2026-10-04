"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { EASE } from "./Reveal";

type AnimatedCounterProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
};

function format(
  value: number,
  decimals: number,
  prefix: string,
  suffix: string,
) {
  return `${prefix}${value.toFixed(decimals)}${suffix}`;
}

export function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  duration = 1.8,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;

    if (reduce) {
      node.textContent = format(value, decimals, prefix, suffix);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        node.textContent = format(v, decimals, prefix, suffix);
      },
    });

    return () => controls.stop();
  }, [inView, value, decimals, prefix, suffix, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {format(0, decimals, prefix, suffix)}
    </span>
  );
}

"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/motion/Reveal";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Pill } from "@/components/ui/Pill";

const steps = [
  {
    index: "01",
    title: "Strategy",
    text: "Decide where growth actually comes from.",
  },
  {
    index: "02",
    title: "AI",
    text: "Put intelligence to work inside the operations that matter.",
  },
  {
    index: "03",
    title: "Technology",
    text: "Build the platforms that carry the strategy.",
  },
  {
    index: "04",
    title: "Execution",
    text: "Deliver, measure, and compound the results.",
  },
];

const bars = [38, 46, 58, 52, 70, 82, 76, 96];

export function HeroDiagram() {
  return (
    <div className="relative mx-auto mt-14 max-w-4xl sm:mt-16">
      <div className="overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-[0_40px_80px_-48px_rgba(10,11,13,0.35)] sm:p-10">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
            Growth operating model
          </p>
          <Pill tone="accent">Live</Pill>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            {steps.map((step, i) => (
              <StepRow key={step.index} {...step} delay={0.2 + i * 0.12} last={i === steps.length - 1} />
            ))}
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-surface p-6 sm:p-8">
            <div>
              <p className="text-sm font-medium text-muted">
                Median growth, first 12 months
              </p>
              <p className="mt-2 text-5xl font-medium tracking-tight text-ink">
                <AnimatedCounter value={38} suffix="%" />
              </p>
              <div className="mt-6 flex h-24 items-end gap-1.5" aria-hidden="true">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.05, ease: EASE }}
                    style={{ height: `${h}%`, transformOrigin: "bottom" }}
                    className="flex-1 rounded-t-sm bg-ink/80"
                  />
                ))}
              </div>
            </div>
            <p className="mt-6 border-t border-line pt-5 text-[13px] leading-relaxed text-faint">
              Measured quarterly against a baseline agreed before work begins.
              Illustrative placeholder metric.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
        className="absolute -right-4 -top-8 hidden rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-32px_rgba(10,11,13,0.3)] sm:block lg:-right-10"
      >
        <p className="text-xs font-medium text-faint">Order-to-cash automation</p>
        <p className="mt-1 text-2xl font-semibold tracking-tight text-ink">
          −31%
          <span className="ml-1.5 text-sm font-normal text-muted">process cost</span>
        </p>
        <div className="mt-3 flex h-8 items-end gap-1" aria-hidden="true">
          {[64, 52, 40, 44, 28, 20].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-sm bg-accent/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function StepRow({
  index,
  title,
  text,
  delay,
  last,
}: (typeof steps)[number] & { delay: number; last: boolean }) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay, ease: EASE }}
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong bg-white text-xs font-semibold text-muted"
        >
          {index}
        </motion.span>
        {!last && (
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay + 0.15, ease: EASE }}
            className="w-px flex-1 bg-line-strong"
            style={{ transformOrigin: "top" }}
          />
        )}
      </div>
      <div className={last ? "" : "pb-9"}>
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type TabItem = {
  id: string;
  label: string;
};

type TabsProps = {
  items: TabItem[];
  active: string;
  onChange: (id: string) => void;
  label: string;
  className?: string;
};

export function Tabs({ items, active, onChange, label, className }: TabsProps) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn(
        "inline-flex flex-wrap items-center gap-1 rounded-full border border-line bg-surface p-1",
        className,
      )}
    >
      {items.map((item) => {
        const selected = active === item.id;
        return (
          <button
            key={item.id}
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={selected}
            aria-controls="insights-panel"
            onClick={() => onChange(item.id)}
            className={cn(
              "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              selected ? "text-ink" : "text-muted hover:text-ink",
            )}
          >
            {selected ? (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-full border border-line-strong bg-white shadow-[0_1px_3px_rgba(10,11,13,0.08)]"
                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              />
            ) : null}
            <span className="relative">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

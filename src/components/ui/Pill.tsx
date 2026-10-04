import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PillProps = {
  children: ReactNode;
  tone?: "neutral" | "brand" | "accent";
  className?: string;
};

const tones = {
  neutral: "bg-surface text-muted",
  brand: "bg-brand/8 text-brand",
  accent: "bg-accent-soft text-accent-ink",
};

export function Pill({ children, tone = "neutral", className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

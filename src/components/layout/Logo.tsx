import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Placeholder logo: a wordmark plus a small "intelligence network" mark.
 * Replace this single component with the final brand mark when available.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <line x1="9" y1="24" x2="16" y2="16" stroke="#d8dade" strokeWidth="1.5" />
      <line x1="23" y1="24" x2="16" y2="16" stroke="#d8dade" strokeWidth="1.5" />
      <line x1="16" y1="7" x2="16" y2="16" stroke="#d8dade" strokeWidth="1.5" />
      <circle cx="16" cy="7" r="3" fill="#ef7f3c" />
      <circle cx="9" cy="24" r="3" fill="#0a0b0d" />
      <circle cx="23" cy="24" r="3" fill="#0a0b0d" />
      <circle cx="16" cy="16" r="2.1" fill="#2f5ce8" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full focus-visible:outline-brand",
        className,
      )}
      aria-label="Spigle — home"
    >
      <LogoMark />
      <span className="text-[1.3rem] font-semibold tracking-tight text-ink">
        Spigle
      </span>
    </Link>
  );
}

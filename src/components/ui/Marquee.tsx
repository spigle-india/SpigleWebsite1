import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
};

/**
 * A CSS-animated marquee. The track is duplicated for a seamless loop and
 * paused on hover; disabled entirely under prefers-reduced-motion.
 */
export function Marquee({ items, className, itemClassName }: MarqueeProps) {
  const row = (key: string) => (
    <div
      key={key}
      aria-hidden={key === "copy"}
      className={cn("flex shrink-0 items-center gap-x-14 pr-14 sm:gap-x-20 sm:pr-20", itemClassName)}
    >
      {items.map((item, i) => (
        <div key={i} className="flex shrink-0 items-center gap-x-14 sm:gap-x-20">
          {item}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row("base")}
        {row("copy")}
      </div>
    </div>
  );
}

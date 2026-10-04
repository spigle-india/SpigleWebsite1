import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
};

export function Card({ children, className, hover = false, id }: CardProps) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-2xl border border-line bg-white",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_60px_-32px_rgba(10,11,13,0.18)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

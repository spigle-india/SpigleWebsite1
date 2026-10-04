import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-label"?: string;
  as?: "section" | "div" | "footer" | "header";
};

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
  ...rest
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "py-20 sm:py-24 lg:py-28",
        className,
      )}
      {...(Tag === "section" ? rest : {})}
    >
      {children}
    </Tag>
  );
}

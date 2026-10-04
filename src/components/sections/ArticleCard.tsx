import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "@/content/insights";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function ArticleCard({
  insight,
  className,
  featured = false,
}: {
  insight: Insight;
  className?: string;
  featured?: boolean;
}) {
  return (
    <Card hover className={cn("flex h-full flex-col", className)}>
      <Link
        href={`/insights/${insight.slug}`}
        className="group flex h-full flex-col p-8"
      >
        <div className="flex items-center justify-between gap-4">
          <Pill tone={insight.featured ? "accent" : "neutral"}>
            {insight.category}
          </Pill>
          <span className="text-xs text-faint">
            {formatDate(insight.date)} · {insight.readTime}
          </span>
        </div>
        <h3
          className={cn(
            "mt-5 text-balance font-medium tracking-tight text-ink",
            featured ? "text-2xl sm:text-[1.7rem] sm:leading-snug" : "text-lg sm:text-xl sm:leading-snug",
          )}
        >
          {insight.title}
        </h3>
        <p
          className={cn(
            "mt-3 text-pretty leading-relaxed text-muted",
            featured ? "text-base" : "text-[15px]",
          )}
        >
          {insight.description}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-ink">
          Read article
          <ArrowUpRight
            className="size-4 text-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </Link>
    </Card>
  );
}

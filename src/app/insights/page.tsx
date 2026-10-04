import type { Metadata } from "next";
import { insights } from "@/content/insights";
import { PageHero } from "@/components/sections/PageHero";
import { InsightsList } from "@/components/sections/insights/InsightsList";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Ideas our clients actually use — strategy, AI & automation, technology, and operations, written with evidence and delivered without hype.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Ideas our clients{" "}
            <span className="font-serif font-normal italic text-accent">actually use.</span>
          </>
        }
        description={`${insights.length} articles on strategy, AI & automation, technology, and operations. Written for leaders, not for search engines.`}
      />

      <InsightsList />

      <CTABand />
    </>
  );
}

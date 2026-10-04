import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { IndustryGrid } from "@/components/sections/industries/IndustryGrid";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "From financial services to manufacturing and retail — sector-specific problems solved with the same discipline: business first, technology second.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Sector-specific problems,{" "}
            <span className="font-serif font-normal italic text-accent">
              one discipline
            </span>
            .
          </>
        }
        description="The mechanics of growth differ by industry; the discipline doesn't. We start with the constraints and economics of your sector, then apply the capabilities that fit."
      >
        <Button href="/contact" variant="accent" size="lg" withArrow>
          Talk to us about your sector
        </Button>
      </PageHero>

      <IndustryGrid />

      <CTABand />
    </>
  );
}

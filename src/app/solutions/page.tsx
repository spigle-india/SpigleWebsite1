import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CapabilitySections } from "@/components/sections/solutions/CapabilitySections";
import { EngagementModels } from "@/components/sections/solutions/EngagementModels";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Strategy, AI & intelligent automation, technology, and execution — four capabilities, one objective: measurable growth.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Capabilities that turn strategy into{" "}
            <span className="font-serif font-normal italic text-accent">growth.</span>
          </>
        }
        description="Everything we do serves one objective: business growth. These are the four capabilities we bring to it — strategy first, technology second, marketing as execution."
      >
        <Button href="/contact" variant="accent" size="lg" withArrow>
          Book a consultation
        </Button>
        <Button href="/solutions#engagement" variant="secondary" size="lg">
          See how we engage
        </Button>
      </PageHero>

      <CapabilitySections />

      <div id="engagement">
        <EngagementModels />
      </div>

      <CTABand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI & Business Consulting",
          serviceType: "Business Consulting, AI Strategy, Technology Consulting",
          provider: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          areaServed: "Worldwide",
          url: `${site.url}/solutions`,
        }}
      />
    </>
  );
}

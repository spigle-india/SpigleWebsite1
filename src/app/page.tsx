import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";
import { Hero } from "@/components/sections/home/Hero";
import { LogoCloud } from "@/components/sections/home/LogoCloud";
import { Principles } from "@/components/sections/home/Principles";
import { Capabilities } from "@/components/sections/home/Capabilities";
import { Approach } from "@/components/sections/home/Approach";
import { Results } from "@/components/sections/home/Results";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { InsightsPreview } from "@/components/sections/home/InsightsPreview";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "AI & Business Consulting — Growth, Powered by Strategy, AI & Technology",
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Principles />
      <Capabilities />
      <Approach />
      <Results />
      <Testimonials />
      <InsightsPreview />
      <CTABand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          url: site.url,
          description: site.description,
          email: site.email,
          sameAs: [site.socials.linkedin, site.socials.x],
        }}
      />
    </>
  );
}

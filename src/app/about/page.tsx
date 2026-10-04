import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { StatsStrip } from "@/components/sections/about/StatsStrip";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Spigle is an AI-powered business consulting company — strategy first, technology second, marketing as execution.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Spigle"
        title={
          <>
            Consultants who think like{" "}
            <span className="font-serif font-normal italic text-accent">builders.</span>
          </>
        }
        description="We help medium-sized businesses and enterprises scale with discipline — strategy, intelligent automation, technology, and execution, in that order."
      >
        <Button href="/contact" variant="accent" size="lg" withArrow>
          Work with us
        </Button>
      </PageHero>

      <AboutStory />

      <AboutValues />

      <StatsStrip />

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-8 rounded-3xl border border-line bg-surface/40 p-10 sm:flex-row sm:items-center sm:justify-between sm:p-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  Careers
                </p>
                <h2 className="mt-3 max-w-lg text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
                  We&apos;re building a team of strategists and engineers who ship.
                </h2>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shrink-0"
                withArrow
              >
                Get in touch
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}

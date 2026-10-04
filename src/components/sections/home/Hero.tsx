"use client";

import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { HeroDiagram } from "./HeroDiagram";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="pb-16 pt-16 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Pill tone="brand">AI-powered business consulting</Pill>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-[2.6rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]">
              Growth, powered by{" "}
              <em className="font-serif font-normal italic text-accent">
                strategy
              </em>
              , AI &amp; technology.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
              Spigle helps medium-sized businesses and enterprises scale with
              discipline — business problems first, technology second, marketing
              as execution.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" variant="accent" size="lg" withArrow>
                Book a consultation
              </Button>
              <Button href="/solutions" variant="secondary" size="lg">
                Explore how we work
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 text-sm text-faint">
              Strategy-led. Evidence-based. Built to last.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={32}>
          <HeroDiagram />
        </Reveal>
      </Container>
    </section>
  );
}

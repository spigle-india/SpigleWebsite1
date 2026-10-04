import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CTABand() {
  return (
    <section className="bg-ink text-white">
      <Container className="py-20 text-center sm:py-24 lg:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Let&apos;s build the growth plan
            <span className="font-serif italic text-accent"> worth executing.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/60">
            A two-week discovery, a straight answer, and a roadmap you can
            govern. That&apos;s the first step with Spigle.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="accent" size="lg" withArrow>
              Book a consultation
            </Button>
            <Button
              href="/solutions"
              variant="secondary"
              size="lg"
              className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5"
            >
              Explore solutions
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

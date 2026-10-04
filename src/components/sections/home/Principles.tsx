import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

const principles = [
  {
    index: "01",
    title: "Business problems first",
    text: "We start with the numbers, the constraints, and the customer. Technology only earns a place when it changes a business outcome.",
  },
  {
    index: "02",
    title: "Technology second",
    text: "Technology is the delivery mechanism for strategy — architecture, platforms, and AI that serve the plan rather than generate it.",
  },
  {
    index: "03",
    title: "Marketing as execution",
    text: "Marketing is a third step, not a first one. We execute go-to-market and growth as a consequence of strategy, measured like any other investment.",
  },
];

export function Principles() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow>Our point of view</Eyebrow>
                <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                  We solve business problems first. Technology comes second.{" "}
                  <span className="font-serif font-normal italic text-accent">
                    Marketing comes third.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted">
                  That ordering isn&apos;t a preference — it&apos;s the discipline that
                  separates consulting from execution. Most vendors sell you the
                  second and third steps. We start where value is created.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-line">
              {principles.map((principle, i) => (
                <Reveal key={principle.index} delay={i * 0.08}>
                  <div className="grid gap-3 py-8 sm:grid-cols-12 sm:gap-6 sm:py-10">
                    <span className="text-sm font-medium text-faint sm:col-span-2">
                      {principle.index}
                    </span>
                    <div className="sm:col-span-10">
                      <h3 className="text-lg font-medium tracking-tight text-ink sm:text-xl">
                        {principle.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted">
                        {principle.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

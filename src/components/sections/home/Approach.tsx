import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const phases = [
  {
    index: "01",
    title: "Discover",
    text: "Understand the business, its constraints, and the real opportunity — in numbers.",
  },
  {
    index: "02",
    title: "Define",
    text: "Translate findings into a clear, prioritized strategy and a funded roadmap.",
  },
  {
    index: "03",
    title: "Design",
    text: "Architect the answer — operating model, AI systems, and technology.",
  },
  {
    index: "04",
    title: "Deliver",
    text: "Build and execute with your team, iterating against agreed outcomes.",
  },
  {
    index: "05",
    title: "Scale",
    text: "Embed capability and compounding systems so growth outlives the engagement.",
  },
];

export function Approach() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title="A disciplined path from problem to compounding growth."
        />

        <div className="relative mt-16 lg:mt-20">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-5 hidden h-px bg-line lg:block"
          />
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {phases.map((phase) => (
              <StaggerItem key={phase.index}>
                <div className="relative">
                  <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full border border-line-strong bg-white text-xs font-semibold text-ink">
                    {phase.index}
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {phase.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

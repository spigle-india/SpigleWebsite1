import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

const paragraphs = [
  {
    heading: "Consultants who build",
    text: "Spigle was founded on a simple frustration: too much consulting stops at the slide deck, and too much delivery starts without a strategy. We exist to close that gap — to be the firm that thinks like a strategy partner and ships like a product company.",
  },
  {
    heading: "Business first, always",
    text: "We solve business problems first. Technology comes second, marketing third. That ordering is the whole point of the firm. It's why our engagements start with your numbers, constraints, and customers — and why we'll turn work away when the case for change isn't there.",
  },
  {
    heading: "Built for the AI era",
    text: "AI didn't create the need for better strategy — it made the lack of it more expensive. Businesses that compound are the ones that pair clear priorities with the technology and execution to deliver them. That's the operating model we bring to every client.",
  },
];

export function AboutStory() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow>Why Spigle exists</Eyebrow>
                <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                  The gap between strategy and delivery is where growth{" "}
                  <span className="font-serif font-normal italic text-accent">gets lost.</span>
                </h2>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-12">
              {paragraphs.map((p, i) => (
                <Reveal key={p.heading} delay={i * 0.08}>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight text-ink">
                      {p.heading}
                    </h3>
                    <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted">
                      {p.text}
                    </p>
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

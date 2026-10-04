import { stats, caseStudies } from "@/content/proof";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Pill } from "@/components/ui/Pill";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Results() {
  return (
    <section className="border-t border-line py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Evidence"
          title={
            <>
              Growth you can{" "}
              <span className="font-serif font-normal italic text-accent">measure</span>,
              not just describe.
            </>
          }
          description="We attach every engagement to an agreed baseline and report against it. These figures are placeholders — replace them with verified outcomes."
        />

        <div className="mt-14 grid grid-cols-2 gap-y-12 border-y border-line lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.06}
              className="lg:border-l lg:border-line lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <div className="py-8">
                <p className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    decimals={stat.decimals}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-3 text-sm font-medium text-ink">{stat.label}</p>
                {stat.note ? (
                  <p className="mt-0.5 text-sm text-faint">{stat.note}</p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
              Selected work
            </h3>
            <span className="text-sm text-faint">Illustrative placeholder cases</span>
          </div>

          <Stagger className="mt-8 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.title}>
                <Card hover className="flex h-full flex-col p-8">
                  <Pill tone="neutral">{cs.industry}</Pill>
                  <h4 className="mt-5 text-lg font-medium leading-snug tracking-tight text-ink sm:text-xl">
                    {cs.title}
                  </h4>
                  <p className="mt-3 text-pretty leading-relaxed text-muted">
                    {cs.summary}
                  </p>
                  <div className="mt-8 flex items-end justify-between gap-4 border-t border-line pt-6">
                    <p className="text-3xl font-medium tracking-tight text-ink">
                      {cs.metric}
                      <span className="ml-2 block text-sm font-normal leading-snug text-faint">
                        {cs.metricLabel}
                      </span>
                    </p>
                    <Button href="/contact" variant="ghost" size="sm" withArrow>
                      Discuss a similar engagement
                    </Button>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

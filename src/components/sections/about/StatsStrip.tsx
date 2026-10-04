import { stats } from "@/content/proof";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";

export function StatsStrip() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-y-12 border-y border-line lg:grid-cols-4">
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
        <p className="mt-6 text-sm text-faint">
          Placeholder figures — replace with verified, current numbers.
        </p>
      </Container>
    </section>
  );
}

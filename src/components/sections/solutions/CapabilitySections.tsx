import { Compass, Cpu, Sparkles, TrendingUp, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { capabilities, type CapabilityIcon } from "@/content/solutions";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const icons: Record<CapabilityIcon, LucideIcon> = {
  compass: Compass,
  sparkles: Sparkles,
  cpu: Cpu,
  trending: TrendingUp,
};

export function CapabilitySections() {
  return (
    <div>
      {capabilities.map((capability) => {
        const Icon = icons[capability.icon];
        return (
          <section
            key={capability.id}
            id={capability.id}
            className="scroll-mt-24 border-t border-line py-20 sm:py-24 lg:py-28"
          >
            <Container>
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-5">
                  <div className="lg:sticky lg:top-28">
                    <Reveal>
                      <div className="flex items-center gap-4">
                        <span className="flex size-12 items-center justify-center rounded-2xl border border-line bg-white text-ink">
                          <Icon className="size-5.5" aria-hidden="true" strokeWidth={1.75} />
                        </span>
                        <span className="text-sm font-semibold text-faint">
                          {capability.index}
                        </span>
                      </div>
                      <h2 className="mt-6 text-balance text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-4xl">
                        {capability.title}
                      </h2>
                      <p className="mt-5 text-pretty leading-relaxed text-muted">
                        {capability.lead}
                      </p>
                      <div className="mt-8 rounded-2xl border border-line bg-surface/60 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">
                          Outcomes
                        </p>
                        <ul className="mt-4 space-y-3">
                          {capability.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-3 text-sm text-ink">
                              <Check
                                className="mt-0.5 size-4 shrink-0 text-accent"
                                aria-hidden="true"
                              />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <Stagger className="divide-y divide-line">
                    {capability.pillars.map((pillar, i) => (
                      <StaggerItem key={pillar.title}>
                        <div
                          className={
                            i === 0
                              ? "pb-10"
                              : "py-10"
                          }
                        >
                          <h3 className="text-lg font-medium tracking-tight text-ink">
                            {pillar.title}
                          </h3>
                          <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted">
                            {pillar.body}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}

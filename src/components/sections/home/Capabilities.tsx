import { Compass, Cpu, Sparkles, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { capabilities, type CapabilityIcon } from "@/content/solutions";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/Button";

const icons: Record<CapabilityIcon, LucideIcon> = {
  compass: Compass,
  sparkles: Sparkles,
  cpu: Cpu,
  trending: TrendingUp,
};

export function Capabilities() {
  return (
    <section className="border-t border-line bg-surface/40 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Four capabilities,{" "}
                <span className="font-serif font-normal italic text-accent">
                  one objective
                </span>
                : growth.
              </>
            }
          />
          <Button href="/solutions" variant="secondary" withArrow>
            All solutions
          </Button>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => {
            const Icon = icons[capability.icon];
            return (
              <StaggerItem key={capability.id}>
                <Card hover className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-white text-ink">
                      <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                    </span>
                    <span className="text-xs font-semibold text-faint">
                      {capability.index}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-medium tracking-tight text-ink">
                    {capability.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                    {capability.short}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}

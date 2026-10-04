import { Check } from "lucide-react";
import { engagementModels } from "@/content/solutions";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

export function EngagementModels() {
  return (
    <section className="border-t border-line bg-surface/40 py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Ways to engage"
          title="Boundaried projects, standing partnerships, or teams that embed."
        />

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <StaggerItem key={model.title}>
              <Card hover className="flex h-full flex-col p-8">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium tracking-tight text-ink">
                    {model.title}
                  </h3>
                  <Pill tone="brand">{model.kind}</Pill>
                </div>
                <p className="mt-4 text-pretty leading-relaxed text-muted">
                  {model.description}
                </p>
                <ul className="mt-7 space-y-3 border-t border-line pt-6">
                  {model.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-ink">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

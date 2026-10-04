import { Scale, ChartNoAxesColumnIncreasing, Wrench, MessageSquareText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/Card";

const values = [
  {
    icon: Scale,
    title: "Business first",
    text: "If a technology project doesn't move a business outcome, we say so — before you spend.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Evidence over opinion",
    text: "Every recommendation stands on a baseline, a number, or a test. Confidence without evidence isn't consulting, it's theatre.",
  },
  {
    icon: Wrench,
    title: "Ship to learn",
    text: "Strategy is refined in delivery. We'd rather learn from a working system than from another workshop.",
  },
  {
    icon: MessageSquareText,
    title: "Straight answers",
    text: "We tell clients what they need to hear, not what's comfortable. It's the only way trust survives.",
  },
];

export function AboutValues() {
  return (
    <section className="border-t border-line bg-surface/40 py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Principles"
          title="Four values we hold ourselves to."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <StaggerItem key={value.title}>
                <Card hover className="flex h-full flex-col p-7">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-line bg-white text-ink">
                    <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-tight text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                    {value.text}
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

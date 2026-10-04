import { industries } from "@/content/industries";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

export function IndustryGrid() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <Stagger className="grid gap-5 md:grid-cols-2">
          {industries.map((industry) => (
            <StaggerItem key={industry.id}>
              <Card
                hover
                id={industry.id}
                className="scroll-mt-24 flex h-full flex-col p-8 sm:p-10"
              >
                <h2 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
                  {industry.title}
                </h2>
                <p className="mt-3 text-pretty font-serif italic leading-relaxed text-ink/80">
                  {industry.headline}
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-muted">
                  {industry.body}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {industry.tags.map((tag) => (
                    <Pill key={tag} tone="neutral">
                      {tag}
                    </Pill>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

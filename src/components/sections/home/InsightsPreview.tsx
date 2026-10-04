import { insights } from "@/content/insights";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/Button";
import { ArticleCard } from "../ArticleCard";

export function InsightsPreview() {
  const latest = insights.slice(0, 3);

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Insights"
            title="Ideas our clients actually use."
          />
          <Button href="/insights" variant="secondary" withArrow>
            All insights
          </Button>
        </div>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((insight) => (
            <StaggerItem key={insight.slug}>
              <ArticleCard insight={insight} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

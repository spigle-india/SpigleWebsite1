import { testimonials } from "@/content/proof";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  return (
    <section className="bg-surface/40 py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What clients say"
          title="Straight talk, from the people we work with."
          className="max-w-2xl"
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <StaggerItem
              key={t.name}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <Card
                hover
                className={
                  i === 0
                    ? "flex h-full flex-col justify-between p-8 sm:p-10"
                    : "flex h-full flex-col justify-between p-8"
                }
              >
                <p className="text-lg font-serif italic leading-relaxed text-ink sm:text-xl">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white"
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-faint">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-sm text-faint">
          Placeholder testimonials — replace with attributable client quotes.
        </p>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { CTABand } from "@/components/sections/CTABand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/content/clients";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're building. A senior partner replies within two working days — with a straight answer, not a pitch deck.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you&apos;re{" "}
            <span className="font-serif font-normal italic text-accent">building.</span>
          </>
        }
        description="A short description is enough. We'll come prepared, and we'll give you a straight answer on whether we're the right partner — even if the answer is no."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-7">
              <div className="lg:pr-6">
                <ContactForm />
              </div>
            </Reveal>

            <aside className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-line p-6">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-faint">
                      Direct channels
                    </h2>
                    <ul className="mt-5 space-y-4">
                      <li>
                        <a
                          href={`mailto:${site.email}`}
                          className="group flex items-start gap-3"
                        >
                          <Mail
                            className="mt-0.5 size-4.5 shrink-0 text-brand"
                            aria-hidden="true"
                          />
                          <span>
                            <span className="block text-sm font-medium text-ink group-hover:underline">
                              {site.email}
                            </span>
                            <span className="block text-sm text-faint">
                              Prefer email? Start here.
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href={site.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-3"
                        >
                          <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded bg-brand text-[9px] font-semibold text-white">
                            in
                          </span>
                          <span>
                            <span className="block text-sm font-medium text-ink group-hover:underline">
                              LinkedIn
                            </span>
                            <span className="block text-sm text-faint">
                              Message the team directly.
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <span className="flex items-start gap-3">
                          <Clock
                            className="mt-0.5 size-4.5 shrink-0 text-brand"
                            aria-hidden="true"
                          />
                          <span>
                            <span className="block text-sm font-medium text-ink">
                              Two working days
                            </span>
                            <span className="block text-sm text-faint">
                              A senior partner replies — not a rep.
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-line bg-surface/60 p-6">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-faint">
                      Where we work
                    </h2>
                    <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <MapPin
                        className="mt-0.5 size-4.5 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      Remote-first, serving clients across the UK, Europe, and
                      North America. On-site when the work needs it.
                    </p>
                    <p className="mt-3 pl-7 text-sm text-faint">
                      Placeholder location — replace with your office details.
                    </p>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Before you ask"
            title="Common questions, answered plainly."
          />
          <Reveal delay={0.08}>
            <Accordion
              className="mt-12"
              items={faqs.map((faq) => ({
                id: faq.question
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, ""),
                title: faq.question,
                content: faq.answer,
              }))}
            />
          </Reveal>
        </Container>
      </section>

      <CTABand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
    </>
  );
}

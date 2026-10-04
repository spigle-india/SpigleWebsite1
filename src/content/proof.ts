export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

/**
 * Placeholder testimonials. Replace with real, attributable client quotes.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Spigle were the first advisors who started with our P&L rather than our tech stack. The roadmap they built survived its first board review unchanged.",
    name: "Sarah Whitfield",
    role: "Chief Executive Officer",
    company: "Manufacturing group",
  },
  {
    quote:
      "They automated the workflows we'd convinced ourselves couldn't be automated — and measured the savings in cash, not in dashboards.",
    name: "Daniel Okafor",
    role: "Chief Operating Officer",
    company: "Logistics company",
  },
  {
    quote:
      "Our AI programme had stalled twice before. Spigle didn't sell us more AI. They fixed the ownership question, and the programme delivered.",
    name: "Priya Raghavan",
    role: "Chief Technology Officer",
    company: "Financial services firm",
  },
  {
    quote:
      "The rare consultancy that treats marketing as execution rather than theatre. Pipeline followed the plan within two quarters.",
    name: "Marcus Hale",
    role: "Managing Director",
    company: "Professional services firm",
  },
];

export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  note?: string;
};

/**
 * Placeholder statistics. Replace with verifiable, current figures.
 */
export const stats: Stat[] = [
  { value: 120, suffix: "+", label: "Engagements delivered", note: "across 8 industries" },
  { value: 38, suffix: "%", label: "Median revenue growth", note: "within 12 months" },
  { value: 60, suffix: "+", label: "AI systems shipped", note: "into production" },
  { value: 92, suffix: "%", label: "Client retention", note: "across retained work" },
];

export type CaseStudy = {
  title: string;
  industry: string;
  summary: string;
  metric: string;
  metricLabel: string;
};

/**
 * Placeholder case studies. Replace with real, consented client outcomes.
 */
export const caseStudies: CaseStudy[] = [
  {
    title: "Automating order-to-cash for a national logistics operator",
    industry: "Logistics",
    summary:
      "We mapped the full order-to-cash flow, automated the exceptions that consumed the back office, and rebuilt the workflow around a single owner.",
    metric: "31%",
    metricLabel: "reduction in process cost",
  },
  {
    title: "An AI underwriting copilot for a commercial insurer",
    industry: "Financial Services",
    summary:
      "A custom copilot that drafts risk assessments against the firm's own rules and data — cutting turnaround while keeping underwriters in control.",
    metric: "2.4×",
    metricLabel: "faster risk assessments",
  },
];

export type Client = {
  name: string;
  style?: "sans" | "serif" | "tracked";
};

/**
 * Placeholder client wordmarks for the logo cloud. Replace with real,
 * consented client names or swap for actual logo assets.
 */
export const clients: Client[] = [
  { name: "Northwind", style: "sans" },
  { name: "Atlas Supply", style: "tracked" },
  { name: "Vantage", style: "serif" },
  { name: "Meridian", style: "tracked" },
  { name: "Clarion", style: "sans" },
  { name: "Halstead", style: "serif" },
  { name: "Bluepeak", style: "sans" },
  { name: "Foundry & Co", style: "tracked" },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Who does Spigle typically work with?",
    answer:
      "Medium-sized businesses and enterprises that have outgrown ad-hoc consulting. Our work is most valuable when a business has real scale to protect or compound — typically £10m+ revenue — and leadership who want strategy and execution to be one connected thing.",
  },
  {
    question: "Do you work as advisors or do you also build?",
    answer:
      "Both — deliberately. We solve business problems first, then bring the engineering and marketing capability to implement the answer. You can engage us for a strategy engagement, an implementation, or a standing partnership. Most clients start with advisory and keep us for delivery.",
  },
  {
    question: "How do you charge?",
    answer:
      "Boundaried projects, retainers, or embedded teams. Every engagement starts with a clear scope, an owner, and a definition of success agreed before work begins. We avoid open-ended time and materials where the goal can be defined.",
  },
  {
    question: "What does a first engagement look like?",
    answer:
      "A short discovery phase — typically two to three weeks — that produces an honest diagnosis and a funded roadmap. If we don't find a case for change, we'll tell you. It's the fastest way to test whether we're the right partner.",
  },
  {
    question: "How do you handle data and security?",
    answer:
      "Data governance is part of every AI engagement, not an afterthought. We build to the standards your industry expects — including GDPR, sector-specific regulation, and your own security policies — and we document what we ship.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Discovery can usually begin within two to four weeks. Retained relationships start at the start of a month. Tell us your timeline on the contact form and we'll be straight with you about what's realistic.",
  },
];

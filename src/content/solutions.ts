export type CapabilityIcon = "compass" | "sparkles" | "cpu" | "trending";

export type Capability = {
  id: string;
  index: string;
  icon: CapabilityIcon;
  title: string;
  short: string;
  lead: string;
  pillars: { title: string; body: string }[];
  outcomes: string[];
};

/**
 * The four capabilities. Copy is placeholder-grade, written to be replaced
 * with verified, outcome-specific positioning when available.
 */
export const capabilities: Capability[] = [
  {
    id: "strategy",
    index: "01",
    icon: "compass",
    title: "Strategy & Advisory",
    short:
      "Where growth actually comes from — the few decisions that move the whole business.",
    lead: "Most businesses don't have a strategy problem. They have a clarity problem — too many initiatives, no owners, no sequencing. We help you commit to the decisions that matter and build the roadmap to deliver them.",
    pillars: [
      {
        title: "Business & growth strategy",
        body: "Sharpen the direction: markets, offers, pricing, and the sequencing of moves that compound.",
      },
      {
        title: "Operating model design",
        body: "Realign people, process, and decision rights so strategy survives contact with the org chart.",
      },
      {
        title: "Digital & AI strategy",
        body: "Decide where AI and technology change the economics of your business — and where they don't.",
      },
      {
        title: "Transformation roadmaps",
        body: "A phased, funded, measurable plan that leadership can actually govern.",
      },
    ],
    outcomes: [
      "A clear, funded roadmap with owners and dates",
      "Priorities your leadership team can defend",
      "AI positioned where it changes the P&L — not as a pilot",
    ],
  },
  {
    id: "ai",
    index: "02",
    icon: "sparkles",
    title: "AI & Intelligent Automation",
    short:
      "Intelligence put to work inside real operations — not demos, not pilots.",
    lead: "The gap between AI ambition and AI value is execution. We design and ship AI that lives inside your workflows — automating the repetitive, augmenting the judgment-heavy, and giving your people tools that make them faster.",
    pillars: [
      {
        title: "AI strategy & readiness",
        body: "Assess data, workflows, and risk to find where AI earns its keep.",
      },
      {
        title: "Workflow automation",
        body: "Automate processes end-to-end, not one step at a time.",
      },
      {
        title: "Custom AI platforms",
        body: "LLM applications, copilots, and agents built on your data and your rules.",
      },
      {
        title: "Data foundations & governance",
        body: "The data plumbing, quality, and controls AI depends on.",
      },
    ],
    outcomes: [
      "Automated workflows with measured time and cost savings",
      "Custom AI tools your teams actually adopt",
      "Data and governance that pass internal and external scrutiny",
    ],
  },
  {
    id: "technology",
    index: "03",
    icon: "cpu",
    title: "Technology & Engineering",
    short:
      "Modern platforms, built properly — architecture that scales with the business.",
    lead: "Technology is the delivery mechanism for strategy, and it fails quietly when it's treated as a cost centre. We build and modernize platforms with the discipline of a product company and the judgement of a consulting partner.",
    pillars: [
      {
        title: "Product & platform engineering",
        body: "End-to-end delivery — from architecture to launch — with quality built in.",
      },
      {
        title: "System architecture & modernization",
        body: "Retire legacy constraints, move to modern foundations, without stopping the business.",
      },
      {
        title: "Integrations & APIs",
        body: "Make the stack talk — connecting systems your teams already depend on.",
      },
      {
        title: "Technical due diligence & audits",
        body: "Independent, honest engineering assessment before you commit.",
      },
    ],
    outcomes: [
      "A platform that scales without a rewrite",
      "Faster delivery on a stack your team can maintain",
      "Engineering decisions justified by business outcomes",
    ],
  },
  {
    id: "execution",
    index: "04",
    icon: "trending",
    title: "Execution & Growth",
    short:
      "Marketing and delivery done right — as execution of strategy, not decoration.",
    lead: "Marketing is the third step, not the first. Once strategy and technology are in place, we execute — go-to-market, growth programmes, and performance that converts the plan into pipeline and revenue.",
    pillars: [
      {
        title: "Go-to-market & revenue operations",
        body: "Positioning, launch, and the funnel infrastructure that turns attention into revenue.",
      },
      {
        title: "Performance marketing",
        body: "Paid and lifecycle programmes run with rigour, measurement, and discipline.",
      },
      {
        title: "Brand & digital experience",
        body: "Clear, credible experiences that reflect the calibre of the business.",
      },
      {
        title: "Change management & enablement",
        body: "The adoption work that determines whether transformation sticks.",
      },
    ],
    outcomes: [
      "Pipeline and revenue attached to specific, measured activity",
      "A brand that reflects what the business actually is",
      "Teams equipped to sustain the results after we leave",
    ],
  },
];

export const engagementModels = [
  {
    title: "Advisory & Roadmaps",
    kind: "Project",
    description:
      "Boundaried engagements to answer a hard question and produce a decision-ready roadmap. Typically 2–8 weeks.",
    points: [
      "Strategy sprints and discovery",
      "AI opportunity assessments",
      "Technical due diligence",
      "Funded transformation roadmaps",
    ],
  },
  {
    title: "Engaged Delivery",
    kind: "Retainer",
    description:
      "A standing partnership for teams that want a senior partner on the inside, guiding decisions as they happen.",
    points: [
      "Quarterly strategy reviews",
      "Executive-level AI advisory",
      "Roadmap and portfolio governance",
      "Access to the full Spigle bench",
    ],
  },
  {
    title: "Embedded Teams",
    kind: "Engagement",
    description:
      "Strategy and engineering capacity embedded in your organisation — working alongside your teams, in your rhythm.",
    points: [
      "Embedded consultants and engineers",
      "AI product squads",
      "Delivery into your existing rituals",
      "Knowledge transfer built into the contract",
    ],
  },
];

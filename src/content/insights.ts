export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: "Strategy" | "AI & Automation" | "Technology" | "Operations";
  date: string;
  readTime: string;
  featured?: boolean;
  body: Block[];
};

/**
 * Insights library. Placeholder articles — replace with authored content.
 * The body format supports paragraphs, sub-headings, lists, and pull quotes.
 */
export const insights: Insight[] = [
  {
    slug: "ai-strategy-is-a-business-decision",
    title: "AI strategy is a business decision, not a technology one",
    description:
      "The organisations that win with AI don't start with the model. They start with the economics of a process — and work backward.",
    category: "Strategy",
    date: "2026-05-18",
    readTime: "7 min",
    featured: true,
    body: [
      {
        type: "p",
        text: "Every week, a new capability makes headlines and a new set of vendors promises to modernise your business. The temptation is to treat AI as a technology decision: which model, which platform, which partner. The evidence suggests the leaders are asking a different question entirely — what does this change about the economics of a process we already run?",
      },
      {
        type: "p",
        text: "Start with the process, not the model. Pick the three or four workflows where your cost, cycle time, or quality has the most headroom. Estimate what a modest improvement is worth in cash terms. Only then evaluate the technology.",
      },
      {
        type: "h2",
        text: "Strategy first, architecture second",
      },
      {
        type: "p",
        text: "The organisations that fail treat AI as a project. The ones that succeed treat it as a change in how work happens — which makes it an operating model decision, a risk decision, and a people decision. Technology is the last and easiest part.",
      },
      {
        type: "quote",
        text: "The competitive advantage is rarely the model. It's the speed at which you can test a real workflow, measure it honestly, and decide to scale it.",
      },
      {
        type: "h2",
        text: "A practical starting point",
      },
      {
        type: "ul",
        items: [
          "Map the workflows where a 20–30% improvement is material in cash terms.",
          "Estimate the cost of building, running, and governing each one.",
          "Sequence the three that clear an honest return threshold.",
          "Assign an owner whose bonus is attached to the outcome, not the deployment.",
        ],
      },
      {
        type: "p",
        text: "When AI strategy is framed as a business decision, it stops being a technology risk and becomes a return on a portfolio — which is a conversation every leadership team already knows how to have.",
      },
    ],
  },
  {
    slug: "operating-model-is-where-ai-succeeds",
    title: "The operating model is where AI adoption succeeds or fails",
    description:
      "Pilots fail in the org chart, not the model. Here's why adoption is an operating design problem.",
    category: "AI & Automation",
    date: "2026-04-22",
    readTime: "6 min",
    body: [
      {
        type: "p",
        text: "Almost every serious AI programme has a pilot that worked. The interesting pattern is that most of them stop there. The reason is rarely the technology. It's that the work the tool automates belongs to a team, and no team was asked to change how it works.",
      },
      {
        type: "h2",
        text: "Adoption is ownership",
      },
      {
        type: "p",
        text: "A model that routes customer tickets is only as good as the team that owns the outcome: who retrains it, who handles the edge cases, who is accountable when it misbehaves. If the ownership question is answered after the build, it's answered wrong.",
      },
      {
        type: "ul",
        items: [
          "Name the owner before the pilot, not after.",
          "Redesign the workflow the tool joins — don't bolt the tool onto the old one.",
          "Give the team the mandate and the metrics to change how they work.",
          "Budget for the governance that makes scale defensible.",
        ],
      },
      {
        type: "p",
        text: "When AI changes an operating model deliberately, the same pilot that stalls elsewhere becomes a compounding capability.",
      },
    ],
  },
  {
    slug: "why-automation-stalls-at-pilot-stage",
    title: "Why most automation programmes stall at pilot stage",
    description:
      "Six reasons automation dies after the proof of concept — and the operating moves that rescue it.",
    category: "AI & Automation",
    date: "2026-03-10",
    readTime: "8 min",
    body: [
      {
        type: "p",
        text: "The automation market has no shortage of pilots. It has a shortage of programmes that survive contact with the business. In our experience the stall is rarely technical and almost always structural.",
      },
      {
        type: "h2",
        text: "The six stall points",
      },
      {
        type: "ul",
        items: [
          "No owner with a budget — automation floats between IT and operations.",
          "Automating one step instead of the process, so savings never compound.",
          "Measurement attached to activity, not to the P&L.",
          "No governance, so every use case starts from zero.",
          "Vendor lock-in chosen over outcome ownership.",
          "Success defined as 'the bot ran' rather than 'the cost moved'.",
        ],
      },
      {
        type: "p",
        text: "The fix is not a bigger programme. It's a sharper definition of what a win is, an owner who can act on it, and the discipline to stop automating things that don't matter.",
      },
      {
        type: "quote",
        text: "Automation is a portfolio decision. Run it with the same discipline you'd apply to capital.",
      },
    ],
  },
  {
    slug: "value-streams-in-the-ai-era",
    title: "Value streams: the unit of strategy in the AI era",
    description:
      "When everything is a candidate for automation, the value stream becomes the only sensible unit of planning.",
    category: "Operations",
    date: "2026-02-14",
    readTime: "5 min",
    body: [
      {
        type: "p",
        text: "End-to-end flows — from order to cash, from inquiry to resolution — have been a planning idea for decades. They become urgent the moment AI arrives, because AI's economics are only visible across the whole flow, not within a single function.",
      },
      {
        type: "p",
        text: "Automating invoice matching in finance saves minutes. Automating the order-to-cash flow removes an entire class of exceptions, disputes, and rework. The first is a small win; the second is a structural one. Only the value-stream lens lets you tell the difference.",
      },
      {
        type: "h2",
        text: "How to start",
      },
      {
        type: "ul",
        items: [
          "Map the three to five flows that drive the majority of your cost and revenue.",
          "Measure each flow end-to-end: time, cost, quality, exceptions.",
          "Prioritise AI against the whole flow, not the local function.",
          "Give one owner the end-to-end outcome.",
        ],
      },
    ],
  },
  {
    slug: "buy-build-embed-engineering-choices",
    title: "Buy, build, or embed: engineering choices that scale",
    description:
      "The build-versus-buy question is usually asked too late and answered too simply.",
    category: "Technology",
    date: "2026-01-27",
    readTime: "6 min",
    body: [
      {
        type: "p",
        text: "Build versus buy is one of the most expensive questions a business asks, and one of the least disciplined. The honest framing has three answers, not two — and the third is often the right one.",
      },
      {
        type: "h2",
        text: "Three options",
      },
      {
        type: "ul",
        items: [
          "Buy, when the workflow is commodity and the market offers a credible option.",
          "Build, when the capability is your advantage and you intend to keep it.",
          "Embed, when you need speed without owning the platform — a hybrid that is underused and often correct.",
        ],
      },
      {
        type: "p",
        text: "The discipline is to answer the question before architecture begins, with the strategy in one hand and a total-cost-of-ownership model in the other.",
      },
    ],
  },
  {
    slug: "growth-without-bloat-compounding-systems",
    title: "Growth without bloat: designing for compounding systems",
    description:
      "Scaling headcount is the default. Compounding systems are the alternative.",
    category: "Strategy",
    date: "2025-12-09",
    readTime: "7 min",
    body: [
      {
        type: "p",
        text: "When growth slows, the default response is more resource: more people, more vendors, more initiatives. The result is usually a business that is heavier without being faster. The alternative is to invest in systems that get better with scale rather than heavier.",
      },
      {
        type: "h2",
        text: "What compounds",
      },
      {
        type: "p",
        text: "Playbooks, automation, and data all compound — every use improves the next. Headcount does not. The leaders we work with explicitly allocate a share of every growth budget to compounding assets, not just to capacity.",
      },
      {
        type: "ul",
        items: [
          "Treat the playbook as the product of each engagement.",
          "Automate the work that scales linearly with volume.",
          "Capture the data every step generates, for the next step.",
          "Measure capacity added versus capability added.",
        ],
      },
      {
        type: "quote",
        text: "The businesses that scale cleanly don't add capacity to serve growth. They add systems that make the next unit of growth cheaper to serve.",
      },
    ],
  },
];

export const insightCategories = [
  "All",
  "Strategy",
  "AI & Automation",
  "Technology",
  "Operations",
] as const;

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

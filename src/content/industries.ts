export type Industry = {
  id: string;
  title: string;
  headline: string;
  body: string;
  tags: string[];
};

/**
 * Industry pages. Placeholder-grade copy, written to be replaced with
 * verified sector expertise and proof points.
 */
export const industries: Industry[] = [
  {
    id: "financial-services",
    title: "Financial Services",
    headline: "Where trust is the product, AI must earn its place.",
    body: "We help banks, insurers, and fintechs use AI and automation where regulation allows and returns are real — risk operations, customer service, and the unglamorous back office where margins are made.",
    tags: ["Risk operations", "Compliance", "Digital banking", "Fraud & controls"],
  },
  {
    id: "healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    headline: "Better outcomes, built on calmer operations.",
    body: "From patient operations to clinical documentation and supply planning, we design systems that give clinicians and operators back their time — and put data to work for patients.",
    tags: ["Patient operations", "Clinical workflows", "Life sciences", "Data & analytics"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrials",
    headline: "Resilient operations, not just efficient ones.",
    body: "We modernize the systems that run plants and supply chains — forecasting, scheduling, quality, and maintenance — so the operation adapts when the market doesn't behave.",
    tags: ["Supply chain", "Smart manufacturing", "Forecasting", "Maintenance"],
  },
  {
    id: "retail-consumer",
    title: "Retail & Consumer",
    headline: "Commerce that compounds, not just campaigns.",
    body: "We connect strategy to storefronts — pricing, assortment, customer intelligence, and the automation behind profitable growth — so revenue scales with margin intact.",
    tags: ["Commerce", "Customer intelligence", "Pricing & assortment", "D2C operations"],
  },
  {
    id: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    headline: "The network is the product. Run it like one.",
    body: "We build visibility, planning, and automation across freight, warehousing, and fulfilment — turning a complex network into a source of margin and trust.",
    tags: ["Freight & warehousing", "Fulfilment", "Network planning", "Control towers"],
  },
  {
    id: "saas-technology",
    title: "SaaS & Technology",
    headline: "Scale the company as fast as the product.",
    body: "We work with product companies on the parts of scaling that aren't in the code — pricing, GTM, retention, and the operating model that keeps quality from eroding.",
    tags: ["Pricing & packaging", "Go-to-market", "Retention", "Scale-up operating model"],
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    headline: "Modern foundations for a transforming grid.",
    body: "We help utilities digitize customer, asset, and field operations, and use data to manage the transition to distributed energy with confidence.",
    tags: ["Customer operations", "Asset management", "Field operations", "Demand forecasting"],
  },
  {
    id: "professional-services",
    title: "Professional Services",
    headline: "Sell outcomes, not hours.",
    body: "We help consultancies, law firms, and agencies productize expertise and automate delivery — so leaders spend time on clients, not on the machine that serves them.",
    tags: ["Practice automation", "Knowledge management", "Utilization", "Service design"],
  },
];

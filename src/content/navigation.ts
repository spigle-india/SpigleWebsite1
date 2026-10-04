export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/**
 * Single source of truth for the primary navigation.
 * Adding a future top-level section (Products, AI Platforms, Research,
 * Careers, Partners, Events…) is a config-only change.
 */
export const navigation: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Strategy & Advisory",
        href: "/solutions#strategy",
        description: "Growth strategy and transformation roadmaps.",
      },
      {
        label: "AI & Intelligent Automation",
        href: "/solutions#ai",
        description: "AI strategy, automation, and custom AI platforms.",
      },
      {
        label: "Technology & Engineering",
        href: "/solutions#technology",
        description: "Product engineering and platform modernization.",
      },
      {
        label: "Execution & Growth",
        href: "/solutions#execution",
        description: "Go-to-market, growth, and performance execution.",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Financial Services",
        href: "/industries#financial-services",
        description: "Digital banking, compliance, and risk operations.",
      },
      {
        label: "Healthcare & Life Sciences",
        href: "/industries#healthcare-life-sciences",
        description: "Patient operations and clinical excellence.",
      },
      {
        label: "Manufacturing & Industrials",
        href: "/industries#manufacturing",
        description: "Smart operations and supply resilience.",
      },
      {
        label: "Retail & Consumer",
        href: "/industries#retail-consumer",
        description: "Commerce growth and customer intelligence.",
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const footerNavigation = [
  {
    heading: "Solutions",
    links: [
      { label: "Strategy & Advisory", href: "/solutions#strategy" },
      { label: "AI & Intelligent Automation", href: "/solutions#ai" },
      { label: "Technology & Engineering", href: "/solutions#technology" },
      { label: "Execution & Growth", href: "/solutions#execution" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Financial Services", href: "/industries#financial-services" },
      {
        label: "Healthcare & Life Sciences",
        href: "/industries#healthcare-life-sciences",
      },
      { label: "Manufacturing & Industrials", href: "/industries#manufacturing" },
      { label: "Retail & Consumer", href: "/industries#retail-consumer" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

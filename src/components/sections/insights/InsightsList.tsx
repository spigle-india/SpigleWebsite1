"use client";

import { useMemo, useState } from "react";
import { insightCategories, insights } from "@/content/insights";
import { Container } from "@/components/ui/Container";
import { Tabs } from "@/components/ui/Tabs";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ArticleCard } from "../ArticleCard";
import { Button } from "@/components/ui/Button";

export function InsightsList() {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? insights
        : insights.filter((i) => i.category === category),
    [category],
  );

  const featured = category === "All" ? insights.find((i) => i.featured) : undefined;
  const rest = featured
    ? filtered.filter((i) => i.slug !== featured.slug)
    : filtered;

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Tabs
            label="Filter insights by category"
            items={insightCategories.map((c) => ({ id: c, label: c }))}
            active={category}
            onChange={setCategory}
          />
          <p className="text-sm text-faint">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </p>
        </div>

        <div
          id="insights-panel"
          role="tabpanel"
          aria-labelledby={`tab-${category}`}
          className="mt-12"
        >
          {featured ? <ArticleCard insight={featured} featured /> : null}
        </div>

        {rest.length > 0 ? (
          <Stagger className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((insight) => (
              <StaggerItem key={insight.slug}>
                <ArticleCard insight={insight} />
              </StaggerItem>
            ))}
          </Stagger>
        ) : null}

        {filtered.length === 0 ? (
          <p className="mt-12 text-muted">No articles in this category yet.</p>
        ) : null}

        <div className="mt-16 flex justify-center">
          <Button href="/contact" variant="secondary" withArrow>
            Talk to us about your problem
          </Button>
        </div>
      </Container>
    </section>
  );
}

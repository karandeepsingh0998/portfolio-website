"use client";

import { useState, useMemo } from "react";
import { siteContent } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";
import { ToolIcon } from "@/components/ToolIcon";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  ...Array.from(new Set(siteContent.tools.map((t) => t.category))),
];

export function Tools() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = useMemo(() => {
    if (activeCategory === "All") return siteContent.tools;
    return siteContent.tools.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <SectionWrapper
      id="tools"
      title="Tools I Use"
      subtitle="Product, code, and marketing tools I use to ship and scale"
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === cat
                ? "bg-accent text-white"
                : "bg-surface text-muted hover:text-foreground border border-border"
            )}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {filteredTools.map((tool, i) => (
          <FadeIn key={tool.name} delay={i * 0.03}>
            <div
              className="group flex flex-col items-center gap-2 rounded-lg border border-border bg-surface p-4 transition-all hover:border-accent/50 hover:shadow-glow"
              title={tool.name}
            >
              <ToolIcon slug={tool.icon} name={tool.name} />
              <span className="text-xs text-muted group-hover:text-foreground text-center transition-colors">
                {tool.name}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

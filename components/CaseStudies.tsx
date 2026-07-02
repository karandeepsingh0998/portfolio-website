"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteContent, type CaseStudyType } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const typeBadgeVariant = {
  "case-study": { label: "Case Study", variant: "default" as const },
  teardown: { label: "Teardown", variant: "secondary" as const },
  "product-sense": { label: "Product Sense", variant: "success" as const },
};

const typeTabLabels: Record<string, string> = {
  "case-study": "Case Studies",
  teardown: "Teardowns",
  "product-sense": "Product Sense",
};

function getTabs(): { label: string; filter: CaseStudyType | "all" }[] {
  const types = Array.from(
    new Set(siteContent.caseStudies.map((cs) => cs.type))
  );
  return [
    { label: "All", filter: "all" },
    ...types.map((type) => ({
      label: typeTabLabels[type],
      filter: type,
    })),
  ];
}

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState<CaseStudyType | "all">("all");
  const tabs = getTabs();

  const filtered = useMemo(() => {
    if (activeTab === "all") return siteContent.caseStudies;
    return siteContent.caseStudies.filter((cs) => cs.type === activeTab);
  }, [activeTab]);

  return (
    <SectionWrapper
      id="case-studies"
      title="Case Studies & Teardowns"
      subtitle="Product thinking in action"
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.filter}
            type="button"
            onClick={() => setActiveTab(tab.filter)}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.filter
                ? "bg-accent text-white"
                : "bg-surface text-muted hover:text-foreground border border-border"
            )}
            aria-pressed={activeTab === tab.filter}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((study, i) => {
          const badge = typeBadgeVariant[study.type];
          const isPdf = study.link.endsWith(".pdf");
          const cardContent = (
            <Card className="h-full overflow-hidden">
              <div className="relative h-40 bg-background border-b border-border">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-surface">
                  <span className="font-heading text-3xl font-bold text-accent/20">
                    {study.title.charAt(0)}
                  </span>
                </div>
                <Image
                  src={study.thumbnail}
                  alt={`${study.title} thumbnail`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <Badge variant={badge.variant}>{badge.label}</Badge>
                  <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-accent transition-colors shrink-0" />
                </div>
                <CardTitle className="group-hover:text-accent-hover transition-colors">
                  {study.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {study.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );

          return (
            <FadeIn key={study.title} delay={i * 0.08}>
              {isPdf ? (
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  {cardContent}
                </a>
              ) : (
                <Link href={study.link} className="block h-full group">
                  {cardContent}
                </Link>
              )}
            </FadeIn>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

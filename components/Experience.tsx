"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Briefcase } from "lucide-react";
import { siteContent } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="Building products that drive impact"
      className="bg-surface/30"
    >
      <ol className="relative space-y-0">
        <div
          className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-border hidden sm:block"
          aria-hidden
        />

        {siteContent.experience.map((job, i) => {
          const isExpanded = expanded === i;
          const visibleHighlights = isExpanded
            ? job.highlights
            : job.highlights.slice(0, 2);

          return (
            <FadeIn key={`${job.company}-${job.period}`} delay={i * 0.1}>
              <li className="relative flex gap-6 pb-10 last:pb-0">
                <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background z-10">
                  <Briefcase className="h-4 w-4 text-accent" />
                </div>

                <article className="flex-1 rounded-lg border border-border bg-surface p-6 transition-shadow hover:shadow-glow">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-lg font-semibold">
                        {job.role}
                      </h3>
                      <p className="text-accent-hover font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{job.type}</Badge>
                      <p className="mt-1 text-sm text-muted">{job.period}</p>
                    </div>
                  </div>

                  <p className="mt-2 flex items-center gap-1 text-sm text-muted">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {visibleHighlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm text-muted leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {job.highlights.length > 2 && (
                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : i)}
                      className="mt-4 flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Show less" : "Show more"}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isExpanded && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </article>
              </li>
            </FadeIn>
          );
        })}
      </ol>
    </SectionWrapper>
  );
}

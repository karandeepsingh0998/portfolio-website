"use client";

import { Download } from "lucide-react";
import { siteContent } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

export function About() {
  const { about } = siteContent;

  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
        <FadeIn>
          <p className="text-lg leading-relaxed text-muted">{about.bio}</p>

          <Button variant="outline" className="mt-8" asChild>
            <a href={about.resumeUrl} download aria-label="Download resume PDF">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {about.highlights.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08} className="h-full">
              <div className="flex h-full min-h-[108px] flex-col justify-center rounded-lg border border-border bg-surface p-5 text-center shadow-sm lg:text-left">
                <p className="font-heading text-3xl font-bold leading-none text-accent-hover">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

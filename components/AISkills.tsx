"use client";

import { Sparkles } from "lucide-react";
import { siteContent } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";

export function AISkills() {
  const { aiSkills } = siteContent;

  return (
    <SectionWrapper
      id="ai-skills"
      title={aiSkills.title}
      subtitle={aiSkills.description}
      className="bg-surface/30"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aiSkills.skills.map((skill, i) => (
          <FadeIn key={skill.title} delay={i * 0.06}>
            <Card className="h-full">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-heading font-semibold">{skill.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {skill.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

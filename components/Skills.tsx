"use client";

import { siteContent } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";
import { cn } from "@/lib/utils";

function getCategoryGridClass(index: number, total: number) {
  const classes = ["xl:col-span-2"];

  if (total === 5) {
    if (index === 3) classes.push("xl:col-start-2");
    if (index === 4) {
      classes.push("sm:col-span-2 sm:max-w-md sm:justify-self-center sm:w-full");
    }
  }

  return classes.join(" ");
}

export function Skills() {
  const { skills } = siteContent;
  const total = skills.categories.length;

  return (
    <SectionWrapper
      id="skills"
      title={skills.title}
      subtitle={skills.subtitle}
      className="bg-surface/30"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-6 xl:gap-6">
        {skills.categories.map((category, i) => (
          <FadeIn
            key={category.name}
            delay={i * 0.06}
            className={cn("h-full", getCategoryGridClass(i, total))}
          >
            <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-glow">
              <h3 className="font-heading mb-4 border-b border-border pb-3 text-lg font-semibold leading-[1.5]">
                {category.name}
              </h3>
              <ul className="flex flex-1 flex-wrap content-start gap-2">
                {category.items.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center rounded-md border border-border bg-background/60 px-2.5 py-1.5 text-xs font-medium leading-normal text-muted transition-colors hover:border-accent/30 hover:text-foreground">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

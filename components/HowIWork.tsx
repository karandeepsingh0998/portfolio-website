"use client";

import { siteContent } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";

export function HowIWork() {
  const { howIWork } = siteContent;

  return (
    <SectionWrapper id="how-i-work" title={howIWork.title}>
      {/* Desktop: horizontal stepper */}
      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" aria-hidden />
          <ol className="grid grid-cols-5 gap-4">
            {howIWork.steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <li className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-background text-2xl">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 font-heading font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <ol className="lg:hidden space-y-0">
        {howIWork.steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.08}>
            <li className="relative flex gap-4 pb-8 last:pb-0">
              {i < howIWork.steps.length - 1 && (
                <div
                  className="absolute left-6 top-14 bottom-0 w-0.5 bg-border"
                  aria-hidden
                />
              )}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background text-xl">
                {step.icon}
              </div>
              <div className="pt-1">
                <h3 className="font-heading font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </SectionWrapper>
  );
}

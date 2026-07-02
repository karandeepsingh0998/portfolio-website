"use client";

import { Quote } from "lucide-react";
import { siteContent } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = siteContent.testimonials;
  if (!testimonials.length) return null;

  return (
    <SectionWrapper
      id="testimonials"
      title="What People Say"
      subtitle="Feedback from colleagues and leaders"
      className="bg-surface/30"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, i) => (
          <FadeIn key={testimonial.author} delay={i * 0.1}>
            <Card className="relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/20" />
              <blockquote className="text-muted leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic">
                  <p className="font-heading font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </cite>
              </footer>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

"use client";

import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";
import { siteContent } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";

export function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Continuous learning and professional development"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteContent.certifications.map((cert, i) => (
          <FadeIn key={cert.name} delay={i * 0.08}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group"
            >
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <div className="relative h-10 w-10">
                    <Image
                      src={cert.badge}
                      alt={`${cert.name} certification badge`}
                      fill
                      className="object-contain"
                      sizes="40px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    <Award className="h-10 w-10 text-accent absolute inset-0" />
                  </div>
                </div>
                <h3 className="font-heading text-sm font-semibold group-hover:text-accent-hover transition-colors">
                  {cert.name}
                </h3>
                <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
                <p className="mt-1 text-xs text-muted">{cert.year}</p>
                <ExternalLink className="mx-auto mt-3 h-4 w-4 text-muted group-hover:text-accent transition-colors" />
              </Card>
            </a>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

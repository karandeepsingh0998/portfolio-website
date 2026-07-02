"use client";

import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import { siteContent } from "@/data/content";
import { SectionWrapper, FadeIn } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects & Portfolio"
      subtitle="Products I've built and shipped"
      className="bg-surface/30"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {siteContent.projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.1}>
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 w-full bg-background border-b border-border">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-surface">
                  <span className="font-heading text-4xl font-bold text-accent/20">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <p className="text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-1 mb-6">
                  {project.metrics.map((metric) => (
                    <li
                      key={metric}
                      className="flex items-center gap-2 text-sm text-success"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      {metric}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3">
                  {project.links.caseStudy && (
                    <a
                      href={project.links.caseStudy}
                      className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      Case Study
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  )}
                  {project.links.notion && (
                    <a
                      href={project.links.notion}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      Notion
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}

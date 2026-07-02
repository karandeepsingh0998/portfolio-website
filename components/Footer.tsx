import Link from "next/link";
import { Linkedin, Mail, Github, FileText } from "lucide-react";
import { siteContent } from "@/data/content";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  const { hero, footer, nav } = siteContent;

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-bold">{hero.name}</p>
            <p className="mt-1 text-sm text-muted">{hero.tagline}</p>
            {nav.openToWork && (
              <Badge variant="success" className="mt-4">
                {footer.openToWork}
              </Badge>
            )}
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-medium mb-3">Navigation</p>
            <ul className="space-y-2">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-accent-hover transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-medium mb-3">Connect</p>
            <div className="flex items-center gap-3">
              <a
                href={hero.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted hover:text-accent-hover hover:bg-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${hero.socialLinks.email}`}
                className="rounded-md p-2 text-muted hover:text-accent-hover hover:bg-background transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={hero.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted hover:text-accent-hover hover:bg-background transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={hero.socialLinks.notion}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted hover:text-accent-hover hover:bg-background transition-colors"
                aria-label="Notion"
              >
                <FileText className="h-4 w-4" />
              </a>
            </div>
            <Link
              href={nav.resumeUrl}
              className="mt-4 inline-block text-sm text-accent hover:text-accent-hover transition-colors"
            >
              Download Resume →
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}

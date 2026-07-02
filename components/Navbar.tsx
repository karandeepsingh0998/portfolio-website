"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { siteContent } from "@/data/content";
import { useActiveSection } from "@/lib/hooks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const sectionIds = siteContent.nav.links.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleResumeClick = () => {
    if (typeof window !== "undefined") {
      const w = window as Window & {
        gtag?: (...args: unknown[]) => void;
      };
      w.gtag?.("event", "resume_download", {
        event_category: "engagement",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass shadow-lg" : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#"
          className="font-heading text-lg font-bold tracking-tight"
          onClick={() => setMobileOpen(false)}
        >
          Karandeep Singh
          {siteContent.nav.openToWork && (
            <Badge variant="success" className="ml-2 hidden sm:inline-flex">
              Open to Work
            </Badge>
          )}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {siteContent.nav.links.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors hover:text-accent-hover",
                    activeSection === id
                      ? "text-accent-hover"
                      : "text-muted"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" onClick={handleResumeClick}>
            <a href={siteContent.nav.resumeUrl} download aria-label="Download resume">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-muted hover:bg-surface md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="glass border-t border-border md:hidden">
          <ul className="flex flex-col px-4 py-4">
            {siteContent.nav.links.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "block rounded-md px-3 py-3 text-sm transition-colors",
                      activeSection === id
                        ? "text-accent-hover bg-accent/5"
                        : "text-muted"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="mt-2 pt-2 border-t border-border">
              <Button asChild className="w-full" onClick={handleResumeClick}>
                <a href={siteContent.nav.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

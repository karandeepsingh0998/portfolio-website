"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";
import { siteContent } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const { hero } = siteContent;
  const [roleIndex, setRoleIndex] = useState(0);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % hero.rotatingRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hero.rotatingRoles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center gradient-hero grid-pattern overflow-x-hidden"
      aria-label="Hero section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative h-44 w-44 sm:h-52 sm:w-52 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-surface">
                {!avatarError && (
                  <Image
                    src={hero.avatar}
                    alt="Professional headshot of Karandeep Singh, Product Manager"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 320px"
                    onError={() => setAvatarError(true)}
                  />
                )}
                {avatarError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 to-surface font-heading text-4xl lg:text-6xl font-bold text-accent/40">
                    Karandeep Singh
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 text-center lg:order-1 lg:text-left overflow-visible"
          >
            {siteContent.nav.openToWork && (
              <Badge variant="success" className="mb-6">
                Open to Work
              </Badge>
            )}

            <p className="text-muted text-lg mb-2">{hero.greeting}</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {hero.name}
            </h1>

            <div className="mt-4 min-h-[2.75rem] md:min-h-[2.5rem] overflow-hidden py-0.5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl md:text-2xl text-accent-hover font-medium leading-normal"
                >
                  {hero.rotatingRoles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="mt-2 text-muted">{hero.tagline}</p>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-muted leading-relaxed">
              {hero.subtext}
            </p>
            <p className="mt-4 text-sm text-muted">{hero.location}</p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {hero.cta.map((btn) => (
                <Button
                  key={btn.label}
                  variant={btn.href.startsWith("#") ? "default" : "outline"}
                  asChild
                >
                  <a href={btn.href}>
                    {btn.label}
                  </a>
                </Button>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <a
                href={hero.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted hover:text-accent-hover hover:bg-surface transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${hero.socialLinks.email}`}
                className="rounded-md p-2 text-muted hover:text-accent-hover hover:bg-surface transition-colors"
                aria-label="Send email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={hero.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted hover:text-accent-hover hover:bg-surface transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={hero.socialLinks.notion}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted hover:text-accent-hover hover:bg-surface transition-colors"
                aria-label="Notion workspace"
              >
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-muted hover:text-accent-hover transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

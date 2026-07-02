"use client";

import { useState } from "react";
import Image from "next/image";
import { cdnFallbackSlugs, getToolIcon } from "@/lib/tool-icons";
import { cn } from "@/lib/utils";

interface ToolIconProps {
  slug: string;
  name: string;
  className?: string;
}

export function ToolIcon({ slug, name, className }: ToolIconProps) {
  const icon = getToolIcon(slug);
  const [cdnFailed, setCdnFailed] = useState(false);

  if (icon) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`${name} logo`}
        className={cn("h-8 w-8 shrink-0", className)}
        fill="#F1F5F9"
      >
        <path d={icon.path} />
      </svg>
    );
  }

  if (cdnFallbackSlugs.has(slug) && !cdnFailed) {
    return (
      <Image
        src={`https://cdn.simpleicons.org/${slug}/F1F5F9`}
        alt={`${name} logo`}
        width={32}
        height={32}
        className={cn("h-8 w-8 object-contain", className)}
        unoptimized
        onError={() => setCdnFailed(true)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-background text-xs font-semibold text-muted",
        className
      )}
      aria-label={`${name} logo`}
    >
      {name.charAt(0)}
    </div>
  );
}

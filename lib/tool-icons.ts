import type { SimpleIcon } from "simple-icons";
import {
  siAmazon,
  siAnthropic,
  siConfluence,
  siFigma,
  siGoogleanalytics,
  siGoogleads,
  siJavascript,
  siJira,
  siLooker,
  siMeta,
  siMixpanel,
  siMiro,
  siNotion,
  siOpenai,
  siPerplexity,
  siPostgresql,
  siReact,
  siReplit,
  siSlack,
  siTableau,
} from "simple-icons";

export const toolIconMap: Record<string, SimpleIcon> = {
  jira: siJira,
  confluence: siConfluence,
  notion: siNotion,
  figma: siFigma,
  miro: siMiro,
  mixpanel: siMixpanel,
  googleanalytics: siGoogleanalytics,
  looker: siLooker,
  react: siReact,
  javascript: siJavascript,
  openai: siOpenai,
  anthropic: siAnthropic,
  perplexity: siPerplexity,
  replit: siReplit,
  googleads: siGoogleads,
  meta: siMeta,
  amazon: siAmazon,
  slack: siSlack,
  postgresql: siPostgresql,
  tableau: siTableau,
};

export function getToolIcon(slug: string): SimpleIcon | undefined {
  return toolIconMap[slug];
}

/** Slugs not in simple-icons package — fall back to CDN where allowed */
export const cdnFallbackSlugs = new Set(["cursor", "whimsical", "amplitude"]);

import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { siteContent } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
  adjustFontFallback: true,
});

const { meta } = siteContent;

export const metadata: Metadata = {
  metadataBase: new URL(meta.canonicalUrl),
  title: meta.title,
  description: meta.description,
  keywords: [...meta.keywords],
  authors: [{ name: "Karandeep Singh" }],
  creator: "Karandeep Singh",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: meta.canonicalUrl,
    title: meta.title,
    description: meta.description,
    siteName: "Karandeep Singh — Product Manager",
    images: [
      {
        url: meta.ogImage,
        width: 1200,
        height: 630,
        alt: "Karandeep Singh — Product Manager Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    creator: meta.twitterHandle,
    images: [meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: meta.canonicalUrl,
  },
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteContent.hero.name,
    jobTitle: "Product Manager",
    description: meta.description,
    url: meta.canonicalUrl,
    image: `${meta.canonicalUrl}${siteContent.hero.avatar}`,
    email: siteContent.hero.socialLinks.email,
    sameAs: [
      siteContent.hero.socialLinks.linkedin,
      siteContent.hero.socialLinks.github,
      siteContent.hero.socialLinks.notion,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "India",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Product Management",
      "Product Strategy",
      "Growth Strategy",
      "AI Product Development",
      "Agile Product Development",
      "User Research",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

# Karandeep Singh — Portfolio

Personal portfolio website for **Karandeep Singh**, an AI Product Manager and entrepreneur with 4.5+ years of experience. Built with Next.js 14, TypeScript, and Tailwind CSS.

Live site: [karandeep.pm](https://karandeep.pm)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| UI Primitives | Radix UI |
| Icons | Lucide React, Simple Icons |

---

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page (section composition)
│   ├── globals.css       # Global styles
│   ├── robots.ts         # SEO robots config
│   └── sitemap.ts        # Auto-generated sitemap
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── AISkills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── CaseStudies.tsx
│   ├── Tools.tsx
│   ├── Certifications.tsx
│   ├── Testimonials.tsx
│   ├── HowIWork.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ToolIcon.tsx
├── data/
│   └── content.ts        # All site copy — single source of truth
├── lib/
│   ├── hooks.ts          # Custom React hooks
│   ├── tool-icons.ts     # Icon mappings for tools section
│   └── utils.ts          # Utility functions
└── public/
    ├── avatar.png
    ├── resume.pdf
    └── og-image.svg
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The dev server runs at `http://localhost:3000`.

---

## Customization

All site content lives in [data/content.ts](data/content.ts). To update any section — bio, experience, projects, case studies, skills, tools, certifications, or contact details — edit that file. No other files need to change for content updates.

---

## Sections

- **Hero** — name, tagline, rotating roles, CTA buttons, social links
- **About** — bio and highlight stats
- **Skills** — PM skills across Strategy, AI & Data, Execution, Design Thinking, and Growth
- **AI Skills** — how AI is integrated into the product workflow
- **How I Work** — five-step product improvement process
- **Experience** — SellerOps (Co-Founder, AI PM), Zibell (Co-Founder, Growth PM), Mindtickle (SDE)
- **Projects** — featured product work with metrics
- **Case Studies** — product teardowns and sense exercises
- **Tools** — PM, design, analytics, AI, and dev tools used
- **Certifications** — CSPO, Product School, Google Analytics, AI for PMs
- **Testimonials** — peer recommendations
- **Contact** — inquiry form with role-type selector

---

## License

Private project. All rights reserved.

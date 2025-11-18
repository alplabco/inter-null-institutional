# InterNull Institutional Landing Page
## Technical Specification & Implementation Plan

**Document Version:** 1.0
**Date:** November 18, 2025
**Status:** Ready for Implementation
**Timeline:** Q4 2025 - Q1 2026

---

## Executive Summary

This document outlines the technical architecture for InterNull's institutional landing page. The site serves as a B2B conversion funnel for enterprise privacy infrastructure targeting:
- Custodians & Exchanges (Priority 1)
- Crypto Funds (Priority 2)
- Market Makers (Priority 3)
- DAOs (Priority 4)

**Core Requirements:**
- Enterprise-grade performance and reliability
- SEO-optimized for B2B institutional discovery
- Regulatory compliance messaging (clear positioning vs. privacy mixers)
- White-label positioning for institutional clients
- Fast load times and smooth animations for professional feel
- WCAG AA accessibility compliance
- Conversion-optimized for 6-18 month institutional sales cycles

---

## 1. TECHNOLOGY STACK

### 1.1 Framework: Next.js 14 (App Router)

**Rationale:**
- **Enterprise Credibility:** Next.js is trusted by institutional companies (Vercel clients include banks, fintech)
- **SEO Excellence:** Built-in SSR/SSG with automatic `sitemap.xml`, `robots.txt`, and Open Graph support
- **Performance:** Native image optimization, code splitting, ISR (Incremental Static Regeneration)
- **Type Safety:** TypeScript out-of-the-box supports enterprise development standards
- **API Routes:** Can serve as lightweight backend for lead capture, compliance data
- **Vercel Deployment:** Zero-config CI/CD with enterprise SLA support

**Alternative Considered & Rejected:**
- React SPA: Poor SEO for landing pages targeting institutional discovery
- Vue: Less institutional adoption mindshare
- Astro: Overkill for content-rich landing page; Next.js has better ecosystem

### 1.2 CSS Solution: Tailwind CSS + CSS Modules

**Rationale:**
- **Tailwind:** Rapid prototyping, consistent design system, built-in dark mode
- **CSS Modules:** For complex component styling isolation (prevents CSS conflicts)
- **Combination:** Tailwind for utility-first components, CSS Modules for page-specific layout

**Alternatives Considered & Rejected:**
- styled-components: Runtime performance hit; not ideal for institutional sites
- Pure CSS: Too slow for modern feature requirements
- CSS-in-JS: Bundle size overhead for static landing page

### 1.3 Animation Library: Framer Motion

**Rationale:**
- **GPU-Accelerated:** `transform` and `opacity` only for smooth 60fps animations
- **Performance:** Lazy-loads animation library (not blocking initial render)
- **Spring Physics:** Professional feel for institutional design
- **Ease of Use:** TypeScript support, declarative syntax

**Implementation:**
```typescript
// Only for key sections (hero, value props, CTAs)
// NOT for every element (reduce motion respects `prefers-reduced-motion`)
```

### 1.4 Build Tools & Optimization

**Package Manager:** pnpm (faster, strict dependency resolution)

**Development Tools:**
- ESLint + Prettier (code quality)
- TypeScript strict mode (type safety)
- Vitest (unit testing)
- Cypress (E2E testing for conversion flows)

**Production Optimization:**
- SWC (Rust-based transpiler, 3x faster than Babel)
- TurboPack (next-gen bundler in Next.js 15+)
- Compression: Brotli (30% smaller than gzip)

---

## 2. FILE STRUCTURE & ARCHITECTURE

### 2.1 Directory Organization

```
/inter-null-institutional
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml          # Vercel auto-deploy on main
│   │   ├── lighthouse.yml      # Performance audits
│   │   └── a11y-audit.yml      # Accessibility checks
│   └── PULL_REQUEST_TEMPLATE.md
│
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logos/          # InterNull logo, client logos
│   │   │   ├── heroes/         # Hero section backgrounds
│   │   │   └── illustrations/  # Custom SVG illustrations
│   │   ├── fonts/
│   │   │   ├── inter.woff2     # Primary sans-serif
│   │   │   └── jetbrains-mono.woff2
│   │   └── videos/
│   │       └── product-demo-compressed.mp4
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + metadata
│   │   ├── page.tsx            # Homepage
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── resources/
│   │   │   ├── page.tsx        # Blog/documentation hub
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx    # Individual articles
│   │   │   └── layout.tsx
│   │   ├── api/
│   │   │   ├── contact/route.ts        # Lead capture API
│   │   │   ├── newsletter/route.ts     # Newsletter signup
│   │   │   └── compliance/route.ts     # Audit data endpoint
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Navigation.tsx          # Header with mobile menu
│   │   │   ├── Footer.tsx              # Footer with links
│   │   │   ├── Button.tsx              # Reusable CTA buttons
│   │   │   └── Card.tsx                # Content card component
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Above the fold
│   │   │   ├── ValueProposition.tsx    # 4-5 key differentiators
│   │   │   ├── ComplianceSection.tsx   # Regulatory positioning
│   │   │   ├── UseCaseCards.tsx        # 4 customer segments
│   │   │   ├── ArchitectureOverview.tsx # Technical credibility
│   │   │   ├── CompetitiveComparison.tsx
│   │   │   ├── TrustIndicators.tsx     # Partners, funding, etc.
│   │   │   ├── CTASection.tsx          # Multiple CTAs
│   │   │   └── FAQSection.tsx
│   │   │
│   │   ├── interactive/
│   │   │   ├── SegmentSelector.tsx     # Interactive use case selector
│   │   │   ├── FeatureComparison.tsx   # Comparison table
│   │   │   └── PricingCalculator.tsx   # Commission-based pricing UI
│   │   │
│   │   └── analytics/
│   │       └── ConversionPixel.tsx     # Third-party tracking
│   │
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts  # Scroll animations
│   │   ├── useMediaQuery.ts            # Responsive queries
│   │   └── useScrollPosition.ts        # Parallax effects
│   │
│   ├── utils/
│   │   ├── seo.ts                      # Meta tag helpers
│   │   ├── analytics.ts                # Event tracking
│   │   ├── api-client.ts               # Lead capture client
│   │   └── constants.ts                # Copy, colors, config
│   │
│   ├── styles/
│   │   ├── globals.css                 # Tailwind imports + custom properties
│   │   ├── typography.css              # Font families, sizes
│   │   └── variables.css               # CSS custom properties (colors, spacing)
│   │
│   └── types/
│       ├── index.ts                    # Shared TypeScript interfaces
│       └── generated/                  # Auto-generated from API schema
│
├── scripts/
│   ├── generate-sitemap.js             # Dynamic sitemap generation
│   ├── optimize-images.js              # Batch image compression
│   └── validate-links.js               # Link checker for CI
│
├── tests/
│   ├── unit/                           # Component tests
│   ├── e2e/                            # Conversion flow tests
│   └── lighthouse/                     # Performance budgets
│
├── .env.local (GITIGNORED)
│   ├── NEXT_PUBLIC_ANALYTICS_ID
│   ├── SENDGRID_API_KEY (lead capture)
│   └── SLACK_WEBHOOK_URL (new leads)
│
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── .eslintrc.json
├── .prettierrc
├── package.json
├── pnpm-lock.yaml
├── README.md
└── DEPLOYMENT.md
```

### 2.2 Component Hierarchy

```
RootLayout
├── Navigation
├── Page Routes
│   ├── Home Page
│   │   ├── HeroSection
│   │   │   ├── Headline
│   │   │   ├── Subheadline
│   │   │   ├── CTA Primary
│   │   │   └── CTA Secondary
│   │   ├── ValueProposition
│   │   │   └── Card[] (4-5 cards)
│   │   ├── UseCaseSegments
│   │   │   ├── SegmentSelector (tabs/buttons)
│   │   │   └── SegmentDetails (with animation)
│   │   ├── ComplianceSection
│   │   │   ├── Regulatory Table
│   │   │   └── Legal Entity Diagram
│   │   ├── ArchitectureOverview
│   │   │   ├── Diagram (SVG)
│   │   │   └── Features Grid
│   │   ├── CompetitiveComparison
│   │   │   └── Feature Comparison Table
│   │   ├── TrustIndicators
│   │   │   ├── Investor logos
│   │   │   ├── Team highlights
│   │   │   └── Testimonials/Case studies
│   │   ├── FAQSection
│   │   │   └── Accordion[]
│   │   └── BottomCTA
│   │
│   ├── Pricing Page
│   │   ├── PricingCalculator
│   │   ├── PricingTable
│   │   └── CTAs
│   │
│   └── Resources Page
│       ├── Blog index
│       ├── Search/filter
│       └── [slug]/article detail
│
└── Footer
    ├── Links
    ├── Social
    └── Legal (Privacy, Terms)
```

### 2.3 Asset Management Strategy

**Images:**
- Hero images: 1440px width, WebP + JPEG fallback
- Icons: SVG (scalable, small)
- Logos: SVG with PNG fallback
- Product screenshots: Lazy-loaded below fold

**Fonts:**
- Primary: Inter (Google Fonts, variable font)
- Monospace: JetBrains Mono (for code snippets)
- Load strategy: `font-display: swap` to avoid layout shift

**Videos:**
- Product demo: H.264 codec, 1280x720, 2-3MB max
- Hosted on Cloudinary with adaptive bitrate streaming

---

## 3. KEY COMPONENTS & SPECIFICATIONS

### 3.1 Core Components

#### Hero Section
```typescript
interface HeroProps {
  headline: string;
  subheadline: string;
  ctaPrimary: {
    text: string;
    href: string;
    action: 'schedule-demo' | 'get-started' | 'read-docs';
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  animated?: boolean; // Entrance animation
}
```

**Features:**
- Full-width viewport height
- Gradient overlay on background
- Responsive typography (clamp() for fluid scaling)
- Accessible button focus states
- No autoplay video (respect user preference)

#### Value Proposition Cards
```typescript
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number; // For staggered animation
}
```

**Features:**
- 4-5 cards (one per key differentiator)
- Icons from Heroicons (open source)
- Hover effects (lift animation, subtle shadow)
- Lazy-loaded images below fold

#### Use Case Selector
```typescript
interface UseCaseSegment {
  id: 'custodians' | 'funds' | 'market-makers' | 'daos';
  name: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  implementation: string;
  timeline: string;
}
```

**Features:**
- Tab-based or button-based selector
- Smooth content transitions (fade + slide)
- Mobile: Collapse to accordion
- Selected state clearly indicated

#### Compliance Section
```typescript
interface ComplianceControl {
  name: string;
  implementation: string;
  reguLatoryBenefit: string;
  icon: React.ReactNode;
}
```

**Features:**
- Table of 7 architectural controls
- Color-coded by region (US, EU, etc.)
- Responsive: Scrollable on mobile
- Link to compliance whitepaper

#### Competitive Comparison Table
```typescript
interface CompetitorComparison {
  feature: string;
  internull: string;
  competitor1: string;
  competitor2: string;
  competitor3: string;
}
```

**Features:**
- Sticky column on left (feature names)
- Horizontal scroll on mobile
- Highlight InterNull advantages
- Link to detailed competitive analysis

#### FAQ Accordion
```typescript
interface FAQItem {
  question: string;
  answer: string;
  category: 'technical' | 'compliance' | 'pricing' | 'sales';
  relatedDocs?: string[];
}
```

**Features:**
- Searchable (client-side)
- Animated expand/collapse
- Keyboard navigation (arrow keys)
- Structured data schema for Google FAQs

### 3.2 Navigation Component

```typescript
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  target?: '_self' | '_blank';
}

const navItems: NavItem[] = [
  { label: 'Product', href: '/#product' },
  { label: 'Use Cases', href: '/#use-cases' },
  { label: 'Compliance', href: '/#compliance' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '#contact' },
];
```

**Features:**
- Sticky header on scroll
- Mobile hamburger menu with smooth animation
- Active state indicator
- Dark mode toggle
- Logo links to home

### 3.3 Footer Component

```typescript
interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}
```

**Sections:**
- Product (Pricing, Docs, GitHub)
- Company (Blog, Careers, About)
- Legal (Privacy, Terms, Compliance)
- Social (Twitter, LinkedIn, Discord)
- Newsletter signup

---

## 4. PERFORMANCE STRATEGY

### 4.1 Image Optimization

**Implementation:**
```typescript
// Use Next.js Image component for all images
import Image from 'next/image';

<Image
  src="/assets/hero.webp"
  alt="Institutional privacy middleware"
  width={1440}
  height={800}
  priority={true} // For above-fold LCP images
  placeholder="blur" // Blur-up loading
  quality={85} // Balance quality vs size
/>
```

**Formats:**
- WebP (primary, 50KB-150KB)
- JPEG fallback (100KB-200KB)
- AVIF for future (20% smaller than WebP)

**Optimization Targets:**
- Hero image: < 80KB (WebP)
- Illustration: < 30KB (SVG preferred)
- Screenshots: < 150KB (WebP)
- Icons: < 5KB (inline SVG or symbol sprite)

### 4.2 Code Splitting & Lazy Loading

**Route-based Code Splitting:**
```javascript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      '@headlessui/react',
    ],
  },
});
```

**Component-Level Lazy Loading:**
```typescript
// Lazy load below-fold sections
const CompetitiveComparison = dynamic(
  () => import('@/components/sections/CompetitiveComparison'),
  { loading: () => <SkeletonLoader />, ssr: false }
);

const PricingCalculator = dynamic(
  () => import('@/components/interactive/PricingCalculator'),
  { loading: () => <SkeletonLoader />, ssr: false }
);
```

**Third-Party Script Loading:**
```typescript
// Load analytics with `worker` strategy (doesn't block rendering)
<Script
  src="https://cdn.segment.com/analytics.js"
  strategy="worker"
/>
```

### 4.3 Critical CSS & Fonts

**Critical Path CSS:**
- Hero section styles (< 14KB gzipped)
- Navigation styles
- Typography baseline
- Color scheme

**Inline in `<head>`:**
```html
<style>{criticalCSS}</style>
```

**Font Loading Strategy:**
```typescript
// next/font (no external requests)
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});
```

### 4.4 Performance Targets & Monitoring

**Core Web Vitals (Target):**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **TTFB (Time to First Byte):** < 600ms

**Page Load Metrics:**
- **Total Bundle Size:** < 150KB (JS)
- **First Paint:** < 1.5s
- **Time to Interactive (TTI):** < 3.5s
- **Lighthouse Score:** > 90

**Monitoring Stack:**
```typescript
// app/layout.tsx
import { VercelWebAnalytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <VercelWebAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

**Continuous Monitoring:**
- Lighthouse CI in GitHub Actions (every PR)
- Sentry for error tracking (production)
- PostHog for conversion funnel analytics

---

## 5. SEO & METADATA STRATEGY

### 5.1 Meta Tags & Structured Data

**Root Metadata:**
```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: 'InterNull | Institutional Privacy Middleware',
  description:
    'Confidential, auditable, multi-chain settlements for market makers, crypto funds, DAOs, and custodians. Non-custodial infrastructure with compliance-by-design.',
  keywords: [
    'institutional privacy',
    'privacy middleware',
    'confidential settlement',
    'crypto compliance',
    'institutional infrastructure',
  ],
  openGraph: {
    title: 'InterNull | Institutional Privacy Middleware',
    description: 'Compliance-grade privacy infrastructure for institutions.',
    url: 'https://internull.io',
    siteName: 'InterNull',
    images: [
      {
        url: 'https://internull.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'InterNull - Institutional Privacy Middleware',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InterNull | Institutional Privacy Middleware',
    description: 'Privacy infrastructure for institutions. Compliant, auditable, multi-chain.',
    creator: '@InterNullIO',
    images: ['https://internull.io/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  canonical: 'https://internull.io',
};
```

### 5.2 Open Graph & Social Sharing

**Dynamic OG Images:**
```typescript
// app/og.tsx (Next.js dynamic OG image generation)
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'InterNull - Institutional Privacy Middleware';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0F1419 0%, #1E2139 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '40px',
        }}
      >
        <h1 style={{ fontSize: 72, color: '#FFFFFF', margin: 0 }}>
          InterNull
        </h1>
        <p style={{ fontSize: 40, color: '#A0AEC0' }}>
          Institutional Privacy Middleware
        </p>
      </div>
    ),
    size
  );
}
```

### 5.3 Structured Data (JSON-LD)

**Organization Schema:**
```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InterNull',
  url: 'https://internull.io',
  logo: 'https://internull.io/logo.png',
  description: 'Institutional privacy middleware for confidential settlements',
  sameAs: [
    'https://twitter.com/InterNullIO',
    'https://linkedin.com/company/internull',
  ],
};
```

**Product/Service Schema:**
```typescript
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'InterNull Institutional Privacy Infrastructure',
  description: 'Non-custodial middleware for confidential, auditable settlements',
  provider: {
    '@type': 'Organization',
    name: 'InterNull',
  },
  serviceType: 'Blockchain Infrastructure',
  areaServed: 'Global',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://internull.io/pricing',
  },
};
```

**Add to `<head>` in layout:**
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationSchema),
  }}
/>
```

### 5.4 SEO Content Strategy

**Keyword Targeting (B2B Institutional):**

| Audience | Keywords | Target Page |
|----------|----------|-------------|
| Custodians | institutional custody privacy, confidential settlement, privacy middleware | `/` + case study |
| Funds | alpha protection, trade privacy, portfolio confidentiality | `/resources/case-study-crypto-funds` |
| Market Makers | order flow privacy, MEV protection, institutional trading | `/resources/mev-protection-guide` |
| DAOs | DAO treasury privacy, grant confidentiality | `/resources/dao-governance-privacy` |

**Blog Content Calendar:**
- Week 1: "Regulatory Clarity in Institutional Privacy (August 2025 DOJ Memo)"
- Week 2: "Privacy vs Compliance: Why Institutions Choose Both"
- Week 3: "InterNull vs Tornado Cash: Why Institutional Architecture Matters"
- Week 4: "5 Privacy Use Cases for Crypto Custodians"

### 5.5 Performance Metrics for SEO

**Google Search Console Targets:**
- Avg position: < 10 for priority keywords
- Click-through rate: > 5%
- Impressions: 1,000+ per month (6-month target)

**Backlink Strategy:**
- Target mentions from Coindesk, The Block, Bankless
- Get linked from compliance/regulatory resources
- Guest posts on crypto institutional blogs

---

## 6. ANIMATION & INTERACTION STRATEGY

### 6.1 Animation Approach

**Principle:** Enhance credibility, not distract from conversion

**What to Animate:**
- Hero section entrance (fade + subtle translate)
- Section appearances (on scroll)
- Interactive elements (hover states)
- Loading states (skeleton screens)
- CTA buttons (bounce/scale on hover)

**What NOT to Animate:**
- Logo (always stable)
- Navigation (instant state changes)
- Text content (no text animations - accessibility)
- Everything simultaneously (prioritize above-fold only)

### 6.2 Animation Implementation

**Hero Section with Framer Motion:**
```typescript
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Institutional Privacy Middleware
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Confidential. Auditable. Multi-chain.
      </motion.p>
    </motion.section>
  );
}
```

**Scroll-Triggered Animations:**
```typescript
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export function ValuePropositionSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Cards appear in sequence */}
    </motion.section>
  );
}
```

**Hover Effects on Cards:**
```typescript
<motion.div
  whileHover={{
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  }}
  transition={{ type: 'spring', stiffness: 400 }}
>
  <Card />
</motion.div>
```

**CTA Button Interactions:**
```typescript
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 400 }}
  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
>
  Schedule Demo
</motion.button>
```

### 6.3 Accessibility Considerations

**Respect `prefers-reduced-motion`:**
```typescript
import { useReducedMotion } from 'framer-motion';

export function AnimatedSection() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: shouldReduce ? 0 : 0.6,
      }}
    />
  );
}
```

**Motion Constraints:**
- Max animation duration: 600ms (keep snappy)
- Avoid flashing/strobing (accessibility)
- Ensure keyboard navigation works without animations
- Test with screen readers (animations shouldn't interfere)

### 6.4 Performance Optimization for Animations

**Use CSS-in-Motion Transforms:**
```typescript
// GOOD: GPU-accelerated (transform, opacity)
whileHover={{ y: -8, opacity: 0.9 }}

// AVOID: CPU-intensive (width, height, margin)
whileHover={{ width: '120%', height: '120%' }}
```

**Lazy Load Framer Motion:**
```typescript
const HeroAnimation = dynamic(
  () => import('@/components/HeroAnimation'),
  { ssr: true, loading: () => <div /> }
);
```

**Monitor Animation Performance:**
```typescript
// In devtools: Disable JavaScript → animations should still render smoothly
// Test on Moto G4 (slow device simulator)
```

---

## 7. ACCESSIBILITY (WCAG AA COMPLIANCE)

### 7.1 Color Contrast & Visual Hierarchy

**Contrast Ratios (Target):**
- Body text: 4.5:1 (normal), 3:1 (large)
- UI components: 3:1 minimum
- Focus indicators: 3:1 with background

**Color Palette for Accessibility:**
```typescript
// CSS custom properties
:root {
  --color-text-primary: #0F1419;      // #1F2937 on light
  --color-text-secondary: #4B5563;    // #6B7280 on light
  --color-text-tertiary: #9CA3AF;
  --color-background: #FFFFFF;
  --color-surface: #F9FAFB;
  --color-border: #E5E7EB;
  --color-focus: #3B82F6;             // 3:1+ contrast on all backgrounds
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
}
```

### 7.2 Semantic HTML

**Navigation:**
```typescript
<nav aria-label="Main navigation">
  <ul>
    <li><a href="#product">Product</a></li>
    <li><a href="#compliance">Compliance</a></li>
  </ul>
</nav>
```

**Main Content:**
```typescript
<main id="main-content">
  {/* Page content */}
</main>

<aside aria-label="Related links">
  {/* Sidebar content */}
</aside>
```

**Forms:**
```typescript
<form>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    required
    aria-required="true"
    aria-describedby="email-hint"
  />
  <span id="email-hint">We'll never share your email.</span>
</form>
```

**Images:**
```typescript
<img
  src="/assets/architecture.png"
  alt="InterNull architecture: DKG cluster → Keypers → Settlement → Audit logs"
/>

{/* Decorative images */}
<img src="/icons/check.svg" alt="" aria-hidden="true" />
```

### 7.3 Keyboard Navigation

**Focus Management:**
```typescript
// Logo/links always focusable
<a href="/" className="focus:outline-2 focus:outline-offset-2 focus:outline-blue-600">
  InterNull
</a>

// Mobile menu focus trap
<Dialog open={menuOpen} onOpenChange={setMenuOpen}>
  {/* Focus automatically moves to first item */}
  {/* Press Escape to close + return focus */}
</Dialog>
```

**Skip Link:**
```typescript
<a
  href="#main-content"
  className="sr-only focus:not-sr-only"
>
  Skip to main content
</a>
```

### 7.4 Testing & Auditing

**Automated Checks (CI/CD):**
```json
// package.json
{
  "scripts": {
    "test:a11y": "pa11y-ci",
    "test:lighthouse": "lighthouse https://internull.io --view"
  }
}
```

**Manual Testing:**
- Keyboard navigation: Tab through entire page
- Screen readers: Test with NVDA (Windows) or VoiceOver (Mac)
- Color contrast: Use WebAIM Contrast Checker
- Mobile accessibility: Test on iPhone with VoiceOver

---

## 8. CONVERSION OPTIMIZATION

### 8.1 CTA Strategy (Multi-Stage Funnel)

**Stage 1: Awareness (Hero Section)**
```typescript
<Button primary href="/resources/institutional-privacy-guide">
  Read the Institutional Privacy Guide
</Button>
```

**Stage 2: Consideration (Mid-page)**
```typescript
<Button secondary href="#pricing">
  View Pricing & Commission Model
</Button>
```

**Stage 3: Decision (Bottom CTA)**
```typescript
<Button primary href="/schedule-demo">
  Schedule a 30-min Infrastructure Review
</Button>
```

**Stage 4: Follow-up (Retargeting)**
```typescript
<Button tertiary href="https://internull.io/newsletter">
  Subscribe to Institutional Privacy Updates
</Button>
```

### 8.2 Lead Capture Forms

**Hero Form (Lightweight):**
```typescript
<form onSubmit={handleHeroSignup}>
  <input
    type="email"
    placeholder="your@institution.com"
    required
    aria-label="Work email"
  />
  <button type="submit">Get Started</button>
</form>
```

**Schedule Demo Form (Detailed):**
```typescript
<form onSubmit={handleDemoBooking}>
  <input name="name" type="text" required />
  <input name="email" type="email" required />
  <input name="company" type="text" required />
  <select name="segment" required>
    <option value="">Select your segment</option>
    <option value="custodian">Custodian / Exchange</option>
    <option value="fund">Crypto Fund</option>
    <option value="market-maker">Market Maker</option>
    <option value="dao">DAO</option>
  </select>
  <textarea
    name="useCase"
    placeholder="Tell us about your privacy needs..."
  />
  <button type="submit">Schedule Demo</button>
</form>
```

### 8.3 Form Integration

**Lead Capture API:**
```typescript
// app/api/contact/route.ts
import sendgrid from '@sendgrid/mail';
import slack from '@slack/web-api';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const { email, name, company, segment, useCase } = await request.json();

  try {
    // Send to CRM (Pipedrive or HubSpot)
    await crm.leads.create({
      email,
      name,
      company,
      segment,
      source: 'website',
      notes: useCase,
    });

    // Notify team on Slack
    await slack.chat.postMessage({
      channel: '#new-leads',
      text: `New lead: ${name} from ${company} (${segment})`,
    });

    // Send confirmation email
    await sendgrid.send({
      to: email,
      from: 'hello@internull.io',
      subject: 'Welcome to InterNull',
      html: confirmationEmailHTML,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
```

### 8.4 Analytics & Conversion Tracking

**Segment Integration:**
```typescript
// lib/analytics.ts
import Analytics from 'analytics';

export const analytics = Analytics({
  app: 'internull-website',
  plugins: [
    {
      name: 'segment',
      config: {
        writeKey: process.env.NEXT_PUBLIC_SEGMENT_KEY,
      },
    },
  ],
});

// Track conversions
analytics.track('Hero CTA Clicked', {
  cta: 'read-guide',
  segment: 'custodian',
});

analytics.track('Demo Scheduled', {
  company,
  useCase,
  segment,
});
```

**Conversion Events:**
- Page views
- CTA clicks (which CTA, position)
- Form submissions (email, company, segment)
- Demo scheduled
- Newsletter signup
- Resource downloads

---

## 9. DEPLOYMENT & INFRASTRUCTURE

### 9.1 Deployment Pipeline

**Hosting:** Vercel (Next.js native)

**Environment Setup:**
```bash
# Development
pnpm run dev
# Runs on http://localhost:3000

# Build
pnpm run build
# Generates .next/

# Production
vercel deploy --prod
```

**Environment Variables:**
```
NEXT_PUBLIC_ANALYTICS_ID=seg_xxxxx
SENDGRID_API_KEY=SG_xxxxx
SLACK_WEBHOOK_URL=https://hooks.slack.com/xxxxx
NEXT_PUBLIC_SITE_URL=https://internull.io
```

### 9.2 CI/CD Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Lint
        run: pnpm lint

      - name: Type check
        run: pnpm type-check

      - name: Test
        run: pnpm test

      - name: Lighthouse CI
        run: pnpm test:lighthouse

      - name: Accessibility audit
        run: pnpm test:a11y

      - name: Deploy to Vercel
        uses: vercel/action@v4
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

### 9.3 Content Delivery & Caching

**Edge Caching (Vercel CDN):**
```typescript
// next.config.js
module.exports = {
  headers: async () => [
    {
      source: '/api/contact',
      headers: [
        { key: 'Cache-Control', value: 'no-cache' },
      ],
    },
    {
      source: '/assets/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
  ],
};
```

**ISR (Incremental Static Regeneration):**
```typescript
// Generate static pages at build time, revalidate on-demand
export const revalidate = 3600; // 1 hour

export default function Page() {
  return <div>Page content</div>;
}
```

### 9.4 Security Headers

```typescript
// next.config.js
module.exports = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.segment.com; img-src 'self' data: https:;",
        },
      ],
    },
  ],
};
```

---

## 10. IMPLEMENTATION TIMELINE & PHASES

### Phase 1: Foundation (Weeks 1-2)
- [ ] Repository setup (Next.js 14, TypeScript, Tailwind)
- [ ] Design system in code (colors, typography, spacing)
- [ ] Layout shell (Navigation, Footer)
- [ ] Deployment to Vercel (staging environment)

**Deliverable:** Working homepage skeleton with nav/footer

### Phase 2: Core Content (Weeks 3-5)
- [ ] Hero section + copy
- [ ] Value proposition cards
- [ ] Use case selector
- [ ] Compliance section
- [ ] Architecture diagram (SVG)

**Deliverable:** Above-fold conversion funnel complete

### Phase 3: Advanced Sections (Weeks 6-7)
- [ ] Competitive comparison table
- [ ] Trust indicators (partners, team, testimonials)
- [ ] FAQ accordion
- [ ] Bottom CTA
- [ ] Lead capture forms

**Deliverable:** Full homepage complete (all sections)

### Phase 4: Optimization & Launch (Weeks 8-9)
- [ ] Image optimization & CDN setup
- [ ] Framer Motion animations (hero, scroll)
- [ ] SEO audit (meta tags, structured data, Open Graph)
- [ ] Accessibility audit (WCAG AA compliance)
- [ ] Lighthouse testing (90+ score target)
- [ ] Form integration (Sendgrid, Slack, CRM)
- [ ] Analytics setup (Segment, Vercel Web Analytics)

**Deliverable:** Production-ready site ready for launch

### Phase 5: Secondary Pages (Weeks 10-11)
- [ ] `/pricing` page with commission calculator
- [ ] `/resources` blog hub
- [ ] Individual resource pages
- [ ] Legal pages (Privacy, Terms)

**Deliverable:** Full site ready for institutional outreach

### Phase 6: Post-Launch (Ongoing)
- [ ] Blog publishing (regulatory updates, use cases)
- [ ] Lead nurturing email sequences
- [ ] Customer testimonials & case studies
- [ ] Competitive updates to comparison table
- [ ] Core Web Vitals monitoring

---

## 11. TECHNOLOGY DEPENDENCIES

### Core Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "tailwindcss": "^3.3.0",
    "@headlessui/react": "^1.7.0",
    "heroicons": "^2.0.0",
    "clsx": "^2.0.0",
    "zustand": "^4.4.0",
    "@sendgrid/mail": "^7.7.0",
    "@slack/web-api": "^6.9.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "vitest": "^0.34.0",
    "cypress": "^13.0.0",
    "@axe-core/react": "^4.7.0",
    "pa11y-ci": "^3.0.0"
  }
}
```

---

## 12. FINAL CHECKLIST

### Before Launch:
- [ ] All links tested (internal and external)
- [ ] Forms tested (all fields working)
- [ ] Mobile responsive tested (iOS + Android)
- [ ] Lighthouse score > 90 on all pages
- [ ] WCAG AA accessibility audit passed
- [ ] SEO meta tags validated
- [ ] Analytics tracking configured
- [ ] Error tracking (Sentry) operational
- [ ] SSL certificate valid
- [ ] DNS configured (internull.io → Vercel)
- [ ] Email deliverability tested (SendGrid)
- [ ] Slack notifications functional
- [ ] Privacy policy and terms published
- [ ] 404 page designed
- [ ] Favicon and app icons set
- [ ] Open Graph images optimized
- [ ] PDF resources downloadable
- [ ] Video encoding tested (demo)
- [ ] Backup strategy documented
- [ ] Update github README.md with deployment instructions

---

## RATIONALE SUMMARY

### Why Next.js?
- Enterprise-grade framework with institutional credibility
- Best-in-class SEO for landing pages (SSR, ISR, auto-sitemaps)
- Native image optimization (crucial for fast load times)
- Vercel integration (zero-config deployment)
- Strong TypeScript support

### Why Tailwind + CSS Modules?
- Rapid development (utility-first)
- Component isolation (CSS Modules prevent conflicts)
- Built-in accessibility utilities
- Dark mode support
- No runtime overhead

### Why Framer Motion?
- Spring physics feel (professional animations)
- GPU-accelerated (60fps on slower devices)
- Easy `prefers-reduced-motion` integration
- Large community, well-documented

### Why Commission-Based Positioning?
- Avoids regulatory "transmission service" classification
- Aligns incentives with institutional clients
- Scales with network health
- Clearer compliance story for CTOs/compliance teams

---

## APPENDIX A: RESPONSIVE DESIGN BREAKPOINTS

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '640px',   // Mobile
      md: '768px',   // Tablet
      lg: '1024px',  // Desktop
      xl: '1280px',  // Wide desktop
      '2xl': '1536px', // Ultra-wide
    },
  },
};
```

**Mobile-First Approach:**
```typescript
// Start with mobile styles, add desktop with @md, @lg, etc.
<div className="text-sm @md:text-base @lg:text-lg">
  Responsive text
</div>
```

---

## APPENDIX B: BRAND MESSAGING REFERENCE

**Positioning Statement:**
"InterNull is institutional privacy middleware. Not a mixer. Not anonymous. Compliant."

**Key Messages:**
- Confidential, auditable, multi-chain settlements
- Preserve alpha. Protect strategy. Enable compliance.
- Full control. Full compliance. Zero exposure.
- Transparency internally. Privacy externally.

**Target Audience Language:**
- Custodians: "Reduce transfer risk and regulatory exposure"
- Funds: "Protect your treasury, preserve your alpha"
- Market Makers: "Eliminate traceable portfolio flows"
- DAOs: "Confidential disbursements with full audit trail"

---

## APPENDIX C: PERFORMANCE BUDGET

| Asset | Budget | Format |
|-------|--------|--------|
| JavaScript (main) | 120KB | Gzipped |
| CSS (critical) | 14KB | Gzipped |
| Hero image | 80KB | WebP |
| Fonts | 40KB | woff2 |
| Icons | 5KB | SVG sprite |
| Total initial load | < 150KB | Combined |

---

**Document prepared for Q4 2025 launch**
**Architecture designed for 18-month roadmap with 10+ institutional customers**

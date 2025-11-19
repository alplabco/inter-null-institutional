# InterNull Landing Page - Implementation Guide

## Quick Start (30 minutes)

### 1. Initialize Next.js Project
```bash
pnpm create next-app@latest . --typescript --tailwind --app
```

### 2. Install Core Dependencies
```bash
pnpm add \
  framer-motion \
  @headlessui/react \
  heroicons \
  clsx \
  zustand \
  @sendgrid/mail
```

### 3. Set Up Development Environment
```bash
pnpm add -D \
  @types/node \
  typescript \
  eslint \
  prettier \
  @axe-core/react \
  vitest \
  cypress
```

---

## File Structure Setup (10 minutes)

```bash
# Create directory structure
mkdir -p src/components/{shared,sections,interactive,analytics}
mkdir -p src/hooks src/utils src/types src/styles
mkdir -p public/assets/{images,fonts,videos}
mkdir -p scripts tests/{unit,e2e}

# Create core files
touch src/components/shared/Navigation.tsx
touch src/components/shared/Footer.tsx
touch src/components/sections/HeroSection.tsx
touch src/hooks/useIntersectionObserver.ts
touch src/utils/seo.ts
touch src/utils/analytics.ts
```

---

## Configuration Files

### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['internull.io'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp', 'image/avif'],
  },

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
      ],
    },
    {
      source: '/api/.*',
      headers: [
        { key: 'Cache-Control', value: 'no-cache' },
      ],
    },
    {
      source: '/assets/.*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],

  redirects: async () => [
    {
      source: '/old-page',
      destination: '/',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
```

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        // Dark mode primary palette
        slate: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          900: '#0F1419',
          950: '#030712',
        },
        blue: {
          600: '#2563EB',
          700: '#1D4ED8',
        },
        emerald: {
          500: '#10B981',
          600: '#059669',
        },
      },

      typography: {
        DEFAULT: {
          css: {
            color: '#4B5563',
            h1: { color: '#0F1419' },
            h2: { color: '#0F1419' },
            h3: { color: '#0F1419' },
            strong: { color: '#0F1419' },
            a: {
              color: '#2563EB',
              '&:hover': { color: '#1D4ED8' },
            },
          },
        },
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      fontSize: {
        // Fluid typography using clamp()
        xs: ['0.75rem', { lineHeight: '1.5rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '2rem' }],
        xl: ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
        '3xl': ['clamp(1.5rem, 5vw, 2rem)', { lineHeight: '2.5rem' }],
        '4xl': ['clamp(2rem, 7vw, 3rem)', { lineHeight: '3.5rem' }],
        '5xl': ['clamp(2.5rem, 9vw, 3.75rem)', { lineHeight: '4.5rem' }],
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },

      backgroundImage: {
        'gradient-dark':
          'linear-gradient(135deg, #0F1419 0%, #1E2139 100%)',
        'gradient-accent':
          'linear-gradient(135deg, #2563EB 0%, #059669 100%)',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "strict": true,
    "skipLibCheck": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Environment Setup

### `.env.local` (Git ignored)
```env
# Analytics
NEXT_PUBLIC_SEGMENT_KEY=sn_xxxxx
NEXT_PUBLIC_ANALYTICS_ID=gtm_xxxxx

# Email & CRM
SENDGRID_API_KEY=SG_xxxxx
PIPEDRIVE_API_TOKEN=xxxxx

# Notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxxxx

# Site configuration
NEXT_PUBLIC_SITE_URL=https://internull.io
NEXT_PUBLIC_SITE_NAME=InterNull
```

### `.env.production` (Vercel secrets)
```env
# Same as .env.local but managed via Vercel dashboard
# Settings → Environment Variables
```

---

## Core Component Examples

### `src/components/shared/Navigation.tsx`
```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Product', href: '/#product' },
    { label: 'Use Cases', href: '/#use-cases' },
    { label: 'Compliance', href: '/#compliance' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Resources', href: '/resources' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-slate-900 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
          >
            InterNull
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600">
            Schedule Demo
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-slate-600 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
```

### `src/components/sections/HeroSection.tsx`
```typescript
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight"
            >
              Institutional Privacy Middleware
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Confidential, auditable, multi-chain settlements for market
              makers, crypto funds, DAOs, and custodians.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
              >
                Schedule Demo
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-slate-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
              >
                Read Whitepaper
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative h-96 md:h-full"
          >
            <Image
              src="/assets/hero-architecture.png"
              alt="InterNull Architecture"
              fill
              priority
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

### `src/app/layout.tsx`
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'InterNull | Institutional Privacy Middleware',
  description:
    'Confidential, auditable, multi-chain settlements for market makers, crypto funds, DAOs, and custodians.',
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
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InterNull | Institutional Privacy Middleware',
    creator: '@InterNullIO',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'InterNull',
              url: 'https://internull.io',
              description: 'Institutional privacy middleware',
              sameAs: ['https://twitter.com/InterNullIO'],
            }),
          }}
        />
      </head>

      <body className="bg-white text-slate-900">
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## Testing Setup

### `tests/lighthouse.test.ts`
```typescript
describe('Lighthouse Performance', () => {
  it('should achieve 90+ Lighthouse score', async () => {
    // Run lighthouse-ci in GitHub Actions
    // This test is handled by workflow, not vitest
    expect(true).toBe(true);
  });
});
```

### GitHub Actions Workflow (`.github/workflows/lighthouse.yml`)
```yaml
name: Lighthouse CI

on: [pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v10
        with:
          serverBaseUrl: http://localhost:3000
          uploadArtifacts: true
```

---

## Deployment Checklist

### Pre-Deployment (Local)
- [ ] `pnpm lint` passes
- [ ] `pnpm type-check` passes
- [ ] `pnpm test` passes
- [ ] All images optimized
- [ ] Environment variables configured
- [ ] Meta tags validated

### Deployment Commands
```bash
# Staging deployment
vercel deploy

# Production deployment
vercel deploy --prod

# View analytics
vercel analytics
```

### Post-Deployment
- [ ] Site loads at internull.io
- [ ] All links work
- [ ] Forms submit successfully
- [ ] Analytics events fire
- [ ] Lighthouse score > 90
- [ ] WCAG AA audit passed
- [ ] No console errors

---

## Ongoing Maintenance

### Weekly
- [ ] Check Sentry for errors
- [ ] Monitor Core Web Vitals
- [ ] Review new leads in CRM

### Monthly
- [ ] Update blog content
- [ ] Refresh competitive comparison
- [ ] Run accessibility audit
- [ ] Check link health

### Quarterly
- [ ] Update case studies
- [ ] Review and optimize conversion funnel
- [ ] Benchmark against competitors
- [ ] Plan content calendar

---

## Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Lighthouse CLI:** https://github.com/GoogleChrome/lighthouse
- **WCAG AA:** https://www.w3.org/WAI/WCAG2AA-Conformance


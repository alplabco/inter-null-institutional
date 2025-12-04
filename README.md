# InterNull - Institutional Confidentiality Middleware

**Privacy + Compliance + Multi-Chain**

Non-custodial privacy infrastructure for institutional digital assets. Built for market makers, crypto funds, custodians, and DAOs.

## Overview

InterNull is institutional confidentiality middleware—NOT a privacy mixer. We provide compliant, auditable, multi-chain settlement infrastructure that enables:

- **Strategic Privacy**: Protect portfolio moves without competitive exposure
- **Full Auditability**: Selective disclosure for regulators and auditors
- **Zero Custody Risk**: Non-custodial architecture, you maintain control
- **Multi-Chain**: Deploy across 15+ EVM chains with single integration
- **Regulatory Alignment**: MiCA, FinCEN, and FATF compliant

## Key Differentiators

| Feature | Privacy Mixers | InterNull |
|---------|----------------|-----------|
| Architecture | Shared public pools | Per-client isolated deployments |
| Compliance | No tools | Built-in OFAC screening, audit logs |
| Custody | Variable | Always non-custodial |
| Regulatory Risk | High | Low (compliance-by-design) |

## Market

- **TAM**: $1.525B across 4 institutional segments
- **Target**: Market Makers ($250M), Crypto Funds ($675M), Custodians ($562M), DAOs ($37M)
- **Competitive Advantage**: Only solution combining privacy + compliance + multi-chain + no custody risk

## Tech Stack

This is a **Next.js 14** application with:

- **Framework**: Next.js 14 with App Router (static export)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: React with Lucide icons
- **Animations**: Framer Motion (planned)
- **Deployment**: Vercel / Static hosting

## Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build

# Output will be in /out directory for static hosting
```

## Project Structure

```
/src
  /app
    layout.tsx          # Root layout with metadata
    page.tsx            # Homepage with all sections
    globals.css         # Tailwind + custom styles
  /components           # (future) Reusable components
```

## Design System

### Color Palette

- **Deep Slate** (#0F172A): Primary text, institutional gravitas
- **Precision Blue** (#0F52BA): Primary CTAs, enterprise trust
- **Institutional Indigo** (#4F46E5): Sophisticated accents
- **Cool Gray Scale**: Backgrounds and hierarchy
- **Semantic Colors**: Success, warning, error, info

### Typography

- **Font**: Inter (sans-serif)
- **Hierarchy**: H1 (48-56px) → H6 (14px uppercase)
- **Body**: 16-18px, 1.6 line-height

## Key Sections

1. **Hero**: Confidential Settlement Infrastructure positioning
2. **Problem Statement**: Alpha leakage, regulatory risk, operational friction
3. **Positioning**: "NOT a privacy mixer" - institutional middleware
4. **Value Proposition**: 6 key differentiators
5. **Use Cases**: Market Makers, Funds, Custodians, DAOs (tabbed interface)
6. **Compliance**: U.S., EU, FATF regulatory alignment
7. **Pricing**: Starter, Professional, Enterprise tiers
8. **CTAs**: Multiple conversion points throughout

## Messaging Principles

### ✅ ALWAYS USE:
- "Confidential settlement" (not "anonymous")
- "Compliance-grade privacy" (not "untraceable")
- "Institutional middleware" (not "mixer")
- "Selective disclosure"
- "Non-custodial"
- "Regulatory-aligned"

### ❌ NEVER USE:
- Mixer, tumbler, anonymity
- Untraceable, untrackable
- Privacy coin
- Permissionless anonymity

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Static Hosting

```bash
# Build static export
npm run build

# Deploy /out directory to:
# - Netlify
# - AWS S3 + CloudFront
# - GitHub Pages
# - Any static host
```

## Performance Targets

- **Lighthouse Score**: >90
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3.5s
- **Core Web Vitals**: All passing

## SEO

- Institutional keywords optimized
- Structured data (JSON-LD) for enterprise SaaS
- Open Graph + Twitter Card metadata
- Semantic HTML with proper heading hierarchy

## License

Proprietary - © 2025 InterNull

## Contact

- **Website**: https://internull.xyz
- **Email**: institutional@internull.io
- **Sales**: sales@internull.io

---

**Built for institutions. Not anonymous. Compliant.**

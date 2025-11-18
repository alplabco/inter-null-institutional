# InterNull Deployment Guide

## Quick Start

### 1. Install Dependencies

```bash
# Using npm
npm install

# Using pnpm (recommended - faster)
pnpm install

# Using yarn
yarn install
```

### 2. Run Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Visit **http://localhost:3000** to view the site.

### 3. Build for Production

```bash
npm run build

# Output will be in /out directory (static export)
```

---

## Deployment Options

### Option 1: Vercel (Recommended - Zero Config)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs
- Built-in analytics

**Steps:**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

**Or use Vercel GitHub Integration:**
1. Visit [vercel.com/new](https://vercel.com/new)
2. Import `AramidFinance/inter-null-institutional`
3. Vercel auto-detects Next.js
4. Click "Deploy"

**Custom Domain:**
1. Go to Vercel project settings
2. Add `internull.xyz` domain
3. Configure DNS (Vercel provides instructions)

---

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --dir=out --prod
```

**Or use Netlify UI:**
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`
4. Deploy

---

### Option 3: AWS S3 + CloudFront

```bash
# Build
npm run build

# Sync to S3
aws s3 sync out/ s3://internull-website --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**Setup Steps:**
1. Create S3 bucket (enable static website hosting)
2. Create CloudFront distribution pointing to S3
3. Configure SSL certificate (AWS Certificate Manager)
4. Point internull.xyz DNS to CloudFront

---

### Option 4: GitHub Pages

```bash
# Add to package.json scripts:
"export": "next build && next export",
"deploy": "gh-pages -d out"

# Install gh-pages
npm install --save-dev gh-pages

# Build and deploy
npm run export
npm run deploy
```

**Configure GitHub Pages:**
1. Repository Settings → Pages
2. Source: `gh-pages` branch
3. Custom domain: `internull.xyz`

---

### Option 5: Docker (Self-Hosted)

**Dockerfile:**

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Build and Run:**

```bash
# Build image
docker build -t internull-website .

# Run container
docker run -p 80:80 internull-website
```

---

## Custom Domain Setup

### DNS Configuration (for internull.xyz)

**For Vercel:**
- Add CNAME record: `www` → `cname.vercel-dns.com`
- Add A record: `@` → Vercel IP (provided in dashboard)

**For Netlify:**
- Add CNAME record: `www` → `YOUR_SITE.netlify.app`
- Add ALIAS/ANAME record: `@` → Netlify load balancer

**For CloudFront:**
- Add A record with ALIAS to CloudFront distribution
- Add AAAA record (IPv6) with ALIAS to CloudFront

---

## Environment Variables (If Needed)

Create `.env.local` for local development:

```bash
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API endpoints (future)
NEXT_PUBLIC_API_URL=https://api.internull.xyz

# Deployment environment
NEXT_PUBLIC_ENV=production
```

**Add to Vercel:**
- Project Settings → Environment Variables
- Add each variable with appropriate scope (Production/Preview/Development)

---

## Performance Checklist

Before deployment, verify:

- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] All images optimized
- [ ] No console errors
- [ ] Mobile responsive (test on real devices)
- [ ] All links work
- [ ] Forms submit correctly
- [ ] SEO metadata present on all pages

---

## Post-Deployment Checklist

- [ ] Verify site loads at internull.xyz
- [ ] Test all CTAs ("Schedule Demo", "Talk to Sales")
- [ ] Verify mobile menu works
- [ ] Test tabbed use case switcher
- [ ] Check all anchor links (navigation)
- [ ] Verify robots.txt accessible
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics / Vercel Analytics
- [ ] Configure uptime monitoring (UptimeRobot, Pingdom)
- [ ] Test page speed with real users (WebPageTest)

---

## Monitoring & Analytics

### Google Analytics 4

```tsx
// Add to src/app/layout.tsx <head>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### Vercel Analytics

```bash
npm install @vercel/analytics

# Add to src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Verify images are in `/public` directory
- Check `next.config.js` has `images: { unoptimized: true }`
- Use relative paths: `/image.png` not `./image.png`

### Styles Not Applying

```bash
# Rebuild Tailwind
npx tailwindcss -i ./src/app/globals.css -o ./dist/output.css

# Verify tailwind.config.js includes all content paths
```

### 404 on Deployment

- For static export, ensure trailing slashes
- Check `next.config.js` has `trailingSlash: true`
- Verify hosting provider supports client-side routing

---

## Support

For deployment issues:
- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com
- **Next.js**: https://nextjs.org/docs

For InterNull-specific questions:
- Email: support@internull.io
- Repository: https://github.com/AramidFinance/inter-null-institutional

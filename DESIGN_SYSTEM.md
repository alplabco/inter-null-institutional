# InterNull Design System & Component Specifications

## Color Palette

### Primary Colors
```css
/* Light Mode */
--color-slate-900: #0F1419;    /* Primary text, headings */
--color-slate-700: #374151;    /* Secondary text */
--color-slate-600: #4B5563;    /* Body text */
--color-slate-500: #6B7280;    /* Muted text */

/* Accent */
--color-blue-600: #2563EB;     /* Primary CTA, links */
--color-blue-700: #1D4ED8;     /* Hover state */
--color-emerald-500: #10B981;  /* Success, checkmarks */
--color-emerald-600: #059669;  /* Hover state */

/* Backgrounds */
--color-white: #FFFFFF;        /* Primary background */
--color-slate-50: #F9FAFB;     /* Secondary background */
--color-slate-100: #F3F4F6;    /* Tertiary background */
--color-slate-900-light: rgba(15, 20, 25, 0.05);

/* Borders */
--color-slate-200: #E5E7EB;    /* Default border */
--color-slate-300: #D1D5DB;    /* Hover border */

/* Status Colors */
--color-red-600: #DC2626;      /* Danger/Error */
--color-amber-500: #F59E0B;    /* Warning */
--color-green-500: #10B981;    /* Success */

/* Gradients */
--gradient-dark: linear-gradient(135deg, #0F1419 0%, #1E2139 100%);
--gradient-accent: linear-gradient(135deg, #2563EB 0%, #059669 100%);
```

### Dark Mode (Future)
```css
--color-slate-50-dark: #F9FAFB;
--color-slate-900-dark: #0F1419;
--color-blue-500-dark: #3B82F6;
```

---

## Typography System

### Font Families
```typescript
// Primary: Inter (clean, institutional, trustworthy)
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-feature-settings: "cv11" on, "cv02" on; // Stylistic variants

// Monospace: JetBrains Mono (code blocks, technical content)
font-family: 'JetBrains Mono', 'Courier New', monospace;
```

### Type Scale (Fluid Typography)

| Name | Size (Mobile) | Size (Desktop) | Line Height | Weight | Use Case |
|------|---------------|----------------|------------|--------|----------|
| H1 | 28px | 48px | 1.2 | 700 | Page titles, hero |
| H2 | 24px | 36px | 1.3 | 700 | Section headings |
| H3 | 20px | 28px | 1.4 | 600 | Subsections |
| H4 | 18px | 24px | 1.5 | 600 | Card titles |
| Body Large | 16px | 18px | 1.75 | 400 | Main content |
| Body | 14px | 16px | 1.75 | 400 | Body text |
| Small | 12px | 14px | 1.5 | 400 | Labels, captions |
| Tiny | 11px | 12px | 1.5 | 400 | Footer text |

### Implementation (Tailwind)
```typescript
// tailwind.config.js
theme: {
  fontSize: {
    h1: ['clamp(1.75rem, 5vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
    h2: ['clamp(1.5rem, 4vw, 2.25rem)', { lineHeight: '1.3', fontWeight: '700' }],
    h3: ['clamp(1.25rem, 3vw, 1.75rem)', { lineHeight: '1.4', fontWeight: '600' }],
    'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
    body: ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
    sm: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
    xs: ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
  },
}
```

---

## Spacing System

```css
/* Based on 4px baseline grid */
0px    /* 0 */
4px    /* 1 */
8px    /* 2 */
12px   /* 3 */
16px   /* 4 */
20px   /* 5 */
24px   /* 6 */
28px   /* 7 */
32px   /* 8 */
36px   /* 9 */
40px   /* 10 */
48px   /* 12 */
56px   /* 14 */
64px   /* 16 */
80px   /* 20 */
96px   /* 24 */
128px  /* 32 */
```

### Common Patterns
- **Padding inside cards:** 24px (6)
- **Margin between sections:** 48px (12)
- **Margin on mobile:** 16px (4)
- **Gap between columns:** 24px (6)
- **Gap between buttons:** 12px (3)

---

## Component Library

### Buttons

#### Primary Button
```typescript
<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 transition-colors">
  Primary Action
</button>
```

**Specs:**
- Padding: 12px horizontal, 12px vertical (6x button)
- Border-radius: 8px
- Font-weight: 600
- Transition: 150ms (color only)
- Focus: 2px outline with 2px offset
- Disabled: 50% opacity, cursor-not-allowed

#### Secondary Button
```typescript
<button className="px-6 py-3 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600">
  Secondary Action
</button>
```

**Specs:**
- Border: 2px solid
- Background on hover: Subtle gray
- Same sizing as primary

#### Text Button (Links)
```typescript
<button className="text-blue-600 font-medium hover:text-blue-700 underline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600">
  Text Link
</button>
```

---

### Cards

#### Value Prop Card
```typescript
<div className="p-6 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group">
  {/* Icon */}
  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200">
    <CheckIcon className="w-6 h-6 text-blue-600" />
  </div>

  {/* Title */}
  <h3 className="text-xl font-semibold text-slate-900 mb-2">
    Card Title
  </h3>

  {/* Description */}
  <p className="text-slate-600 mb-4">
    Card description text.
  </p>

  {/* Features List */}
  <ul className="space-y-2 text-sm text-slate-600">
    <li className="flex items-start gap-2">
      <CheckIcon className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" />
      Feature one
    </li>
  </ul>
</div>
```

**Specs:**
- Padding: 24px
- Border: 1px solid slate-200
- Border-radius: 8px
- Hover: Subtle lift (y -2px), shadow-lg
- Transition: 200ms

---

### Input Fields

#### Email Input
```typescript
<form onSubmit={handleSubmit}>
  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
    Work Email
  </label>

  <input
    id="email"
    type="email"
    placeholder="your@institution.com"
    required
    aria-describedby="email-hint"
    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
  />

  <p id="email-hint" className="mt-1 text-xs text-slate-500">
    We'll never share your email.
  </p>
</form>
```

**Specs:**
- Padding: 8px (vertical), 12px (horizontal)
- Border: 1px solid slate-300
- Border-radius: 6px
- Focus: Ring-2 blue-600 (no outline)
- Placeholder: slate-400, 400 weight
- Font-size: 16px (prevents mobile zoom)

---

### Table Component

#### Responsive Comparison Table
```typescript
<div className="overflow-x-auto">
  <table className="w-full">
    <thead>
      <tr className="border-b-2 border-slate-300">
        <th className="text-left py-3 px-4 font-semibold text-slate-900 sticky left-0 bg-white">
          Feature
        </th>
        <th className="text-left py-3 px-4 font-semibold text-blue-600">
          InterNull
        </th>
        <th className="text-left py-3 px-4 font-semibold text-slate-600">
          Competitor A
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-slate-200 hover:bg-slate-50">
        <td className="py-3 px-4 font-medium text-slate-900 sticky left-0 bg-white">
          Feature Name
        </td>
        <td className="py-3 px-4 text-slate-600">
          <CheckIcon className="w-5 h-5 text-emerald-500" />
        </td>
        <td className="py-3 px-4 text-slate-600">
          <XIcon className="w-5 h-5 text-slate-400" />
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

**Specs:**
- Sticky left column (feature names) on scroll
- Alternating row hover state (slate-50)
- Feature column: left-aligned, bold
- Data columns: centered checkmarks/X icons
- Border-bottom on header: 2px, data rows: 1px

---

### Accordion/Disclosure

```typescript
<details className="group border border-slate-200 rounded-lg">
  <summary className="flex justify-between items-center w-full p-4 font-medium text-slate-900 cursor-pointer hover:bg-slate-50">
    <span>Accordion Title</span>
    <ChevronDownIcon className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
  </summary>

  <div className="px-4 pb-4 text-slate-600 border-t border-slate-200">
    Accordion content goes here. Can include formatted text, lists, etc.
  </div>
</details>
```

**Specs:**
- Padding: 16px (summary), 16px bottom (content)
- Background on hover: slate-50
- Icon rotates 180deg on open
- Smooth transition: 200ms

---

## Layout Components

### Hero Section Layout
```typescript
<section className="pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      <div className="space-y-8">
        <h1 className="text-h1 font-bold">Headline</h1>
        <p className="text-body-lg text-slate-600">Subheadline</p>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Buttons */}
        </div>
      </div>

      {/* Right: Visual */}
      <div className="relative h-96 md:h-[500px]">
        <Image fill {...} />
      </div>
    </div>
  </div>
</section>
```

**Specs:**
- Max-width: 1280px (80rem)
- Padding: 128px (32 * 4) responsive
- Gap between columns: 48px
- Image height: 400px mobile, 500px desktop

### Section with Grid
```typescript
<section className="py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-h2 font-bold mb-4">Section Title</h2>
      <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
        Section description
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Cards */}
    </div>
  </div>
</section>
```

**Specs:**
- Vertical padding: 96px (24 * 4)
- Grid gap: 24px
- Max cards per row: 4 on desktop, 2 on tablet, 1 on mobile

---

## Icons & SVG

### Icon System
- **Source:** Heroicons (free, MIT licensed)
- **Sizes:** 16px (tiny), 20px (default), 24px (large), 32px (hero)
- **Style:** Outline (2px stroke)
- **Color:** Inherited from text color

```typescript
import { CheckIcon, ExclamationIcon } from '@heroicons/react/24/outline';

<CheckIcon className="w-6 h-6 text-emerald-500" />
<ExclamationIcon className="w-5 h-5 text-amber-500" />
```

### Custom SVG Logos
```typescript
// Logo variants
- Light mode, full (1200x300)
- Light mode, mark only (300x300)
- Dark mode, full
- Dark mode, mark only
- Favicon (32x32, SVG)
- App icon (180x180, PNG)

// All SVGs optimized with SVGO:
svgo logo.svg --multipass
```

---

## Interaction Patterns

### Hover States

**Cards:**
- Lift: translateY(-8px)
- Shadow: shadow-lg (0 20px 40px rgba(0,0,0,0.1))
- Duration: 200ms

**Links:**
- Color: Change to blue-700
- Underline: Appear/fade
- Duration: 150ms

**Buttons:**
- Primary: Darken to blue-700
- Secondary: Border lighten + BG appear
- Duration: 150ms

### Focus States (Keyboard Navigation)

**All interactive elements:**
- Outline: 2px solid blue-600
- Offset: 2px
- Border-radius: Inherit from element

```css
focus:outline-2 focus:outline-offset-2 focus:outline-blue-600
```

### Active/Selected States

**Tabs:**
- Underline: 3px solid blue-600
- Color: blue-600
- Duration: 150ms

**Toggle/Radio:**
- Background: blue-600
- Color: white
- Icon: Visible

---

## Responsive Design

### Breakpoints (Tailwind)
```
sm: 640px  (mobile landscape)
md: 768px  (tablet)
lg: 1024px (desktop)
xl: 1280px (large desktop)
2xl: 1536px (ultra-wide)
```

### Mobile-First Approach
```typescript
// Start mobile, enhance for larger screens
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* Single column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

### Responsive Type
```typescript
// Fluid typography (scales between viewport sizes)
<h1 className="text-h1">
  {/* Mobile: 28px, Tablet: 36px, Desktop: 48px */}
</h1>

<h2 className="text-h2">
  {/* Mobile: 24px, Tablet: 32px, Desktop: 36px */}
</h2>
```

---

## Dark Mode (Future Implementation)

```typescript
// Tailwind dark mode
<html className="dark">
  <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
    {/* Content automatically inverts */}
  </body>
</html>
```

**CSS Custom Properties for Dark Mode:**
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: #F3F4F6;
    --color-text-secondary: #D1D5DB;
    --color-background: #0F1419;
    --color-surface: #1E2139;
    --color-border: #374151;
  }
}
```

---

## Animation Library

### Framer Motion Presets

**Entrance Animation:**
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

<motion.div initial="hidden" animate="visible" variants={fadeInUp} />
```

**Stagger Effect (cards appearing in sequence):**
```typescript
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

**Hover Effects:**
```typescript
<motion.button
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 400 }}
/>
```

**Scroll Animations:**
```typescript
const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

<motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={fadeInUp}
/>
```

### Reduced Motion Support
```typescript
const prefersReducedMotion = useReducedMotion();

<motion.div
  transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
/>
```

---

## Performance Constraints

### CSS Bundle Size
- **Critical CSS (above fold):** < 14KB gzipped
- **Total CSS:** < 40KB gzipped
- **JavaScript (app):** < 120KB gzipped

### Animation Performance
- **Only animate transform & opacity** (GPU-accelerated)
- **Max animation duration:** 600ms (keep snappy)
- **Frame rate target:** 60fps (no jank)

### Image Optimization
- **Hero images:** < 80KB (WebP)
- **Card images:** < 50KB (WebP)
- **Icons:** < 1KB each (SVG)
- **Total image load:** < 200KB

---

## Accessibility Features

### Color Contrast
- **Normal text:** 4.5:1 contrast ratio
- **Large text (18px+):** 3:1 contrast ratio
- **UI components:** 3:1 minimum

### Touch Targets
- **Minimum size:** 44x44px (mobile)
- **Minimum gap:** 8px between targets
- **Focus visible:** Always visible (min 2px outline)

### Semantic HTML
```typescript
// DO
<nav aria-label="Main navigation">...</nav>
<main id="main-content">...</main>
<aside aria-label="Related links">...</aside>

// DON'T
<div className="nav">...</div>
<div className="main">...</div>
```

### Alt Text
```typescript
// DO
<img alt="InterNull architecture: DKG cluster, Keypers, Settlement layer" />

// DON'T
<img alt="diagram" />
<img alt="" /> {/* unless truly decorative */}
```

---

## Brand Spacing Examples

### Hero Section
```
Top padding: 128px (2xl: 96px)
Bottom padding: 96px
Content max-width: 640px
Button group gap: 16px
```

### Value Props Grid
```
Section padding: 96px vertical, 16-32px horizontal
Grid gap: 24px
Card padding: 24px
Card border-radius: 8px
```

### Footer
```
Padding: 64px vertical, 16px horizontal
Columns gap: 48px
Links gap: 8px vertical
Border-top: 1px solid slate-200
```

---

## Export Checklist

- [ ] All colors defined in Tailwind config
- [ ] All typography sizes standardized
- [ ] Spacing uses 4px grid consistently
- [ ] All buttons have focus states
- [ ] All inputs have error states
- [ ] Form validation messages visible
- [ ] Icons are SVG or Heroicons
- [ ] Images optimized (WebP, <150KB)
- [ ] No hardcoded colors (use CSS custom props)
- [ ] Component library documented
- [ ] Accessibility audit passed (WCAG AA)
- [ ] Tested on iOS Safari + Android Chrome
- [ ] Dark mode variants ready (future)

---

## Design Tokens (CSS Custom Properties)

```css
:root {
  /* Colors */
  --color-primary: #2563EB;
  --color-primary-dark: #1D4ED8;
  --color-success: #10B981;
  --color-error: #DC2626;
  --color-warning: #F59E0B;
  --color-text-primary: #0F1419;
  --color-text-secondary: #4B5563;
  --color-border: #E5E7EB;
  --color-background: #FFFFFF;

  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms;
  --transition-normal: 200ms;
  --transition-slow: 300ms;
}
```


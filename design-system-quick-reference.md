# InterNull Design System - Quick Reference

## Color Usage Guide

### When to Use Each Color

| Color | Usage | Example |
|-------|-------|---------|
| **Precision Blue** (#0F52BA) | Primary CTAs, links, brand accents | "Schedule Demo" button, active nav links |
| **Deep Slate** (#0F172A) | Headings, primary text | H1, H2, important copy |
| **Cool Gray** (#64748B) | Body text, descriptions | Paragraph text, card descriptions |
| **Success Green** (#16A34A) | Compliance passed, verified states | "OFAC Compliant" badge, successful transactions |
| **Warning Amber** (#D97706) | Attention required, caution | KYC reminders, pending approvals |
| **Error Red** (#DC2626) | Failed states, violations | Sanctions alerts, transaction failures |
| **Privacy Purple** (#7C3AED) | Encryption, confidentiality UI | "Encrypted" badges, privacy indicators |
| **Audit Gold** (#CA8A04) | Premium features, compliance | Audit trail features, enterprise tier |

### Color Combinations

**High Contrast (Accessible)**
- White (#FFFFFF) + Slate 900 (#0F172A) = 16.9:1 ✓
- White + Precision 600 (#0F52BA) = 7.2:1 ✓
- Gray 50 (#F8FAFC) + Gray 900 = 16.2:1 ✓

**Brand Pairings**
- Precision Blue + White (primary buttons)
- Slate 900 + Gray 50 (text on light backgrounds)
- Indigo 600 + White (accent elements)

---

## Typography Quick Reference

### Heading Sizes

```css
H1: 48px / Bold / -0.02em       /* Page titles */
H2: 36px / Bold / -0.015em      /* Section headers */
H3: 30px / Semibold / -0.01em   /* Subsections */
H4: 24px / Semibold             /* Card titles */
H5: 20px / Semibold             /* Small headings */
H6: 14px / Bold / UPPERCASE     /* Labels */
```

### Body Text Sizes

```css
Lead:    20px / Regular / 1.7   /* Hero subtext */
Large:   18px / Regular / 1.7   /* Feature descriptions */
Default: 16px / Regular / 1.6   /* Standard UI text */
Small:   14px / Regular / 1.6   /* Helper text */
Tiny:    12px / Regular / 1.5   /* Metadata */
```

### Font Weight Decision Tree

- **400 (Normal):** All body text, descriptions, paragraphs
- **500 (Medium):** Links, labels, subtle emphasis
- **600 (Semibold):** Buttons, H3-H5, card titles
- **700 (Bold):** H1-H2, strong emphasis, data values

---

## Component Patterns

### Button Hierarchy

**Priority 1: Primary Button**
```html
<button class="btn btn-primary">Schedule Demo</button>
```
- Use for: Main CTA, form submissions, critical actions
- Limit: 1 per section (max 2 per page)

**Priority 2: Secondary Button**
```html
<button class="btn btn-secondary">Learn More</button>
```
- Use for: Alternative actions, navigation, secondary CTAs
- Placement: Next to primary, or standalone when no primary

**Priority 3: Tertiary Button**
```html
<button class="btn btn-tertiary">Cancel</button>
```
- Use for: Destructive actions, dismissals, low-priority options

### Card Types

**Standard Card** - General content
```html
<div class="card">
  <h3 class="card-title">Title</h3>
  <p class="card-description">Description</p>
</div>
```

**Feature Card** - Marketing features
```html
<div class="feature-card">
  <div class="feature-icon">🔒</div>
  <h3>Per-Client Privacy</h3>
  <p>Isolated DKG clusters...</p>
</div>
```

**Stat Card** - Data/metrics
```html
<div class="stat-card">
  <div class="stat-label">Total Value</div>
  <div class="stat-value">$847M</div>
  <div class="stat-change positive">↑ 12.4%</div>
</div>
```

### Form Patterns

**Standard Input**
```html
<div class="form-group">
  <label class="form-label">Company Name</label>
  <input type="text" class="form-input" placeholder="Acme Corp">
</div>
```

**Input States**
- Default: Gray 300 border
- Hover: Gray 400 border
- Focus: Precision 600 border + blue glow
- Error: Error 600 border + red glow

---

## Spacing Patterns

### Component Spacing (Internal)

```css
Buttons:     12px vertical, 24px horizontal
Cards:       24px padding (all sides)
Inputs:      12px vertical, 16px horizontal
Icons:       12px from adjacent text
```

### Section Spacing (External)

```css
Between sections:     80px vertical (var(--spacing-20))
Between cards:        24px gap (var(--spacing-6))
Heading → content:    16px margin (var(--spacing-4))
Paragraph → button:   32px margin (var(--spacing-8))
```

### Responsive Spacing

```css
Mobile:   Reduce section padding to 48px (var(--spacing-12))
Tablet:   Use standard 80px (var(--spacing-20))
Desktop:  Use 96px-128px for hero sections (var(--spacing-24/32))
```

---

## Layout Patterns

### Hero Section

```html
<section style="padding: 96px 0; text-align: center;">
  <div class="container container-narrow">
    <h1>Value Proposition</h1>
    <p class="lead">Supporting description</p>
    <div style="display: flex; gap: 16px; justify-content: center;">
      <button class="btn btn-primary btn-lg">Primary CTA</button>
      <button class="btn btn-secondary btn-lg">Secondary CTA</button>
    </div>
  </div>
</section>
```

### Feature Grid (3-Column)

```html
<section style="padding: 80px 0;">
  <div class="container">
    <div class="grid grid-cols-3" style="gap: 32px;">
      <div class="feature-card">...</div>
      <div class="feature-card">...</div>
      <div class="feature-card">...</div>
    </div>
  </div>
</section>
```

### Two-Column Content + Image

```html
<section style="padding: 80px 0;">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;">
      <div>
        <h2>Feature Title</h2>
        <p>Description...</p>
      </div>
      <div>
        <img src="..." alt="...">
      </div>
    </div>
  </div>
</section>
```

---

## Icon Usage

### When to Use Icons

**DO Use Icons:**
- Navigation items (with text labels)
- Feature cards (visual anchor)
- Alert/notification types
- Status indicators
- Button actions (download, external link)

**DON'T Use Icons:**
- Without accompanying text (accessibility)
- Decoratively (must have purpose)
- Inconsistently (mixing styles)

### Icon Sizes

```css
16px (icon-xs):   Inline with small text
20px (icon-sm):   Inline with body text
24px (icon-md):   Navigation, buttons (default)
32px (icon-lg):   Feature cards
48px (icon-xl):   Hero sections
```

### Recommended Icon Library

**Primary:** Heroicons (outline style)
- Consistent stroke weight (1.5px)
- Professional, technical aesthetic
- Matches Inter font weight

**Alternative:** Lucide Icons
- Similar style to Heroicons
- Slightly more detailed

---

## Animation Guidelines

### Transition Timing

```css
Instant:  100ms  - Icon color changes
Fast:     150ms  - Button hover, link hover
Base:     200ms  - Card hover, input focus
Slow:     300ms  - Modal open, dropdown appear
Slower:   500ms  - Page transitions
```

### What to Animate

**DO Animate:**
- Hover states (transform, shadow, border)
- Focus states (glow, border color)
- Loading states (shimmer, pulse)
- Modal/dropdown entry (opacity + transform)

**DON'T Animate:**
- Page load (text should appear instantly)
- Data values (numbers should snap, not count)
- Critical user feedback (errors appear immediately)

### Animation Examples

**Button Hover:**
```css
transition: all 150ms ease-out;
transform: translateY(-1px);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
```

**Card Hover:**
```css
transition: all 200ms ease-out;
border-color: var(--color-precision-600);
box-shadow: 0 8px 24px rgba(15, 82, 186, 0.12);
```

**Input Focus:**
```css
transition: all 150ms ease-out;
border-color: var(--color-precision-600);
box-shadow: 0 0 0 3px rgba(15, 82, 186, 0.1);
```

---

## Accessibility Checklist

### Color Contrast

- [ ] Text on white: Minimum 4.5:1 (WCAG AA)
- [ ] Large text (18px+): Minimum 3:1
- [ ] UI elements: Minimum 3:1
- [ ] Test with contrast checker tools

### Focus States

- [ ] All interactive elements have visible focus
- [ ] Focus ring is 2px solid Precision Blue
- [ ] Focus ring has 2px offset
- [ ] Focus ring visible on all backgrounds

### Keyboard Navigation

- [ ] Tab order follows visual order
- [ ] All buttons/links reachable via keyboard
- [ ] Modals trap focus when open
- [ ] Escape key closes modals/dropdowns

### Screen Readers

- [ ] All images have alt text
- [ ] Form inputs have associated labels
- [ ] Buttons have descriptive text
- [ ] Status messages are announced
- [ ] Use semantic HTML (nav, main, footer)

### Reduced Motion

- [ ] Animations disabled with `prefers-reduced-motion`
- [ ] Essential animations still function (reduced)
- [ ] No auto-play videos/carousels

---

## Common Mistakes to Avoid

### Color Mistakes

❌ Using neon green/pink/cyan (crypto stereotype)
✅ Use deep slate, precision blue, cool grays

❌ Gradient backgrounds everywhere
✅ Solid colors, subtle gradients for data viz only

❌ Low contrast text (gray 400 on white)
✅ Gray 700+ on white for body text

### Typography Mistakes

❌ Using multiple font families (>2)
✅ Inter for UI/body, JetBrains Mono for code only

❌ Font size below 16px for body text
✅ 16px minimum for accessibility

❌ Line length over 80 characters
✅ Max 65-70 characters for readability

### Spacing Mistakes

❌ Inconsistent spacing (13px, 19px, 23px)
✅ Use 8px grid (8, 16, 24, 32, 48, 64)

❌ Cramped cards (8px padding)
✅ Generous padding (24px minimum)

❌ No white space around sections
✅ 80px+ vertical spacing between sections

### Component Mistakes

❌ Multiple primary buttons in one section
✅ One primary CTA per section max

❌ Buttons without hover states
✅ All interactive elements must have hover feedback

❌ Form inputs without labels
✅ Every input needs visible label (not just placeholder)

---

## Responsive Breakpoints

### Mobile (< 640px)

- Stack all columns vertically
- Reduce heading sizes by 25%
- Reduce section padding to 48px
- Full-width buttons
- Hide less critical content

### Tablet (640px - 1024px)

- 2-column grids for features
- Standard font sizes
- 64px section padding
- Show all content

### Desktop (1024px+)

- 3-column grids
- Full spacing scale
- 80-96px section padding
- Hover states active

### Large Desktop (1280px+)

- Max-width containers (1280px)
- Increased section padding (96-128px)
- Larger hero text

---

## Brand Voice Alignment

### Messaging Tone

**What InterNull Is:**
- Institutional
- Compliance-ready
- Professional
- Technical
- Trustworthy

**What InterNull Is NOT:**
- Retail/consumer
- Anonymous
- Crypto-hype
- Speculative
- Unregulated

### Visual Equivalents

| Brand Voice | Visual Expression |
|-------------|-------------------|
| Institutional | Clean layouts, generous white space |
| Compliance-ready | Success badges, checkmarks, verified states |
| Professional | Conservative colors, serif-free typography |
| Technical | Code examples, diagrams, data visualizations |
| Trustworthy | High contrast, accessible, no tricks |

---

## Design System Maintenance

### Adding New Components

1. Check if existing component can be modified
2. Ensure new component uses design tokens
3. Test accessibility (keyboard, screen reader)
4. Document usage and examples
5. Add to component library

### Updating Colors

1. Verify contrast ratios (4.5:1 minimum)
2. Update all instances in codebase
3. Test dark mode (if applicable)
4. Update design documentation

### Version Control

- **Major version:** Breaking changes to token names
- **Minor version:** New components, new tokens
- **Patch version:** Bug fixes, documentation updates

---

## Quick Copy-Paste Snippets

### Enterprise-Appropriate Messaging

```
❌ "To the moon!" / "HODL" / "Diamond hands"
✅ "Institutional-grade privacy infrastructure"

❌ "Anonymous transactions"
✅ "Confidential, auditable settlement"

❌ "Decentralized mixer protocol"
✅ "Compliance-ready privacy middleware"
```

### Button Text

```
Primary CTAs:
- "Schedule Demo"
- "Start Pilot Program"
- "Request Enterprise Access"
- "Contact Sales"

Secondary CTAs:
- "View Documentation"
- "Learn More"
- "Explore Platform"
- "See Pricing"

Tertiary:
- "Cancel"
- "Go Back"
- "Skip for Now"
```

### Microcopy

```
Form Placeholders:
- "you@company.com" (not "Enter email")
- "Acme Corp" (not "Company name")

Success Messages:
- "Privacy cluster activated successfully"
- "Compliance verification complete"

Error Messages:
- "This address is sanctioned and cannot receive funds"
- "KYC verification required to proceed"
```

---

## Resources

### Design Tools

- **Figma:** Use Inter font (Google Fonts)
- **Color Contrast:** WebAIM Contrast Checker
- **Icons:** Heroicons, Lucide Icons
- **Accessibility:** axe DevTools

### Reference Sites

- **Stripe.com** - Enterprise elegance
- **Chainalysis.com** - Institutional blockchain
- **Plaid.com** - Developer-focused fintech
- **Coinbase.com/institutional** - Institutional crypto
- **ModernTreasury.com** - Fintech professionalism

### Further Reading

- [Stripe Design System](https://stripe.com/docs/design)
- [a16z Crypto Portfolio](https://a16z.com/crypto/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated:** November 18, 2025
**Version:** 1.0
**Maintained by:** InterNull Design Team

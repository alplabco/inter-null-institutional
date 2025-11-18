const safeRequire = (name) => {
  try {
    return require(name)
  } catch (error) {
    return null
  }
}

const tailwindForms = safeRequire('@tailwindcss/forms')
const tailwindTypography = safeRequire('@tailwindcss/typography')

const rgbColor = (hex) => {
  const normalized = hex.replace('#', '')
  const r = parseInt(normalized.slice(0, 2), 16)
  const g = parseInt(normalized.slice(2, 4), 16)
  const b = parseInt(normalized.slice(4, 6), 16)
  return `rgb(${r} ${g} ${b} / <alpha-value>)`
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'deep-slate': {
          50: rgbColor('#F8FAFC'),
          100: rgbColor('#F1F5F9'),
          200: rgbColor('#E2E8F0'),
          300: rgbColor('#CBD5E1'),
          400: rgbColor('#94A3B8'),
          500: rgbColor('#64748B'),
          600: rgbColor('#475569'),
          700: rgbColor('#334155'),
          800: rgbColor('#1E293B'),
          900: rgbColor('#0F172A'),
          950: rgbColor('#020617'),
        },
        'precision-blue': rgbColor('#0F52BA'),
        'precision-blue-hover': rgbColor('#0C408E'),
        'institutional-indigo': rgbColor('#4F46E5'),
        'cool-gray': {
          50: rgbColor('#F9FAFB'),
          100: rgbColor('#F3F4F6'),
          200: rgbColor('#E5E7EB'),
          300: rgbColor('#D1D5DB'),
          400: rgbColor('#9CA3AF'),
          500: rgbColor('#6B7280'),
          600: rgbColor('#4B5563'),
          700: rgbColor('#374151'),
          800: rgbColor('#1F2937'),
          900: rgbColor('#111827'),
        },
        success: {
          50: rgbColor('#F0FDF4'),
          100: rgbColor('#DCFCE7'),
          600: rgbColor('#16A34A'),
          700: rgbColor('#15803D'),
          800: rgbColor('#166534'),
        },
        warning: {
          50: rgbColor('#FFFBEB'),
          100: rgbColor('#FEF3C7'),
          600: rgbColor('#D97706'),
          700: rgbColor('#B45309'),
          800: rgbColor('#92400E'),
        },
        error: {
          50: rgbColor('#FEF2F2'),
          100: rgbColor('#FEE2E2'),
          600: rgbColor('#DC2626'),
          700: rgbColor('#B91C1C'),
          800: rgbColor('#991B1B'),
        },
        info: {
          50: rgbColor('#EFF6FF'),
          100: rgbColor('#DBEAFE'),
          600: rgbColor('#2563EB'),
          700: rgbColor('#1D4ED8'),
          800: rgbColor('#1E40AF'),
        },
        privacy: {
          400: rgbColor('#A78BFA'),
          500: rgbColor('#8B5CF6'),
          600: rgbColor('#7C3AED'),
        },
        audit: {
          400: rgbColor('#FACC15'),
          500: rgbColor('#EAB308'),
          600: rgbColor('#CA8A04'),
        },
      },

      fontFamily: {
        primary: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'SF Mono',
          'Monaco',
          'Cascadia Code',
          'Consolas',
          'Courier New',
          'monospace',
        ],
      },

      fontSize: {
        // Custom type scale
        'xs': ['0.75rem', { lineHeight: '1.5' }],       // 12px
        'sm': ['0.875rem', { lineHeight: '1.6' }],      // 14px
        'base': ['1rem', { lineHeight: '1.6' }],        // 16px
        'lg': ['1.125rem', { lineHeight: '1.7' }],      // 18px
        'xl': ['1.25rem', { lineHeight: '1.7' }],       // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4' }],       // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3' }],     // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }],      // 36px
        '5xl': ['3rem', { lineHeight: '1.1' }],         // 48px
      },

      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      spacing: {
        // 8px grid system
        '0': '0',
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
      },

      borderRadius: {
        'none': '0',
        'sm': '0.25rem',      // 4px
        'DEFAULT': '0.5rem',  // 8px
        'md': '0.75rem',      // 12px
        'lg': '1rem',         // 16px
        'xl': '1.5rem',       // 24px
        'full': '9999px',
      },

      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'DEFAULT': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)',
        'md': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'lg': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        'xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
      },

      maxWidth: {
        'container': '1280px',
        'container-wide': '1536px',
        'container-narrow': '768px',
        'text': '65ch',
      },

      transitionDuration: {
        'instant': '100ms',
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
        'slower': '500ms',
      },

      transitionTimingFunction: {
        'out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      zIndex: {
        'base': 0,
        'dropdown': 10,
        'sticky': 20,
        'header': 30,
        'overlay': 40,
        'modal': 50,
        'popover': 60,
        'tooltip': 70,
      },

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.015em',
        normal: '0',
        wide: '0.01em',
        wider: '0.05em',
      },
    },
  },
  plugins: [tailwindForms, tailwindTypography].filter(Boolean),
}

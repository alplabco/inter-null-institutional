const safeRequire = (name) => {
  try {
    return require(name)
  } catch (error) {
    return null
  }
}

const tailwindForms = safeRequire('@tailwindcss/forms')
const tailwindTypography = safeRequire('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Glass Palette
        background: '#020617', // Deepest slate/black
        surface: '#0F172A',    // Card background
        'surface-highlight': '#1E293B', // Hover states
        
        // Retaining your semantic colors but mapping them to the new theme
        primary: {
          DEFAULT: '#0F52BA', // Precision Blue
          glow: '#3B82F6',    // Lighter blue for effects
          dark: '#0a3d8f',
        },
        accent: {
          DEFAULT: '#4F46E5', // Institutional Indigo
          glow: '#818cf8',
        },
        success: '#10B981', 
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' },
        },
      },
    },
  },
  plugins: [tailwindForms, tailwindTypography].filter(Boolean),
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-family-inter)', 'sans-serif'],
      },
      fontWeight: {
        regular: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        extrabold: 'var(--font-weight-extrabold)',
      },
      fontSize: {
        // Display sizes keep their original keys
        'display-3xl': [
          'var(--text-display-3xl)',
          {
            lineHeight: 'var(--text-display-3xl-line-height)',
            letterSpacing: 'var(--text-display-3xl-letter-spacing)',
          },
        ],
        'display-2xl': [
          'var(--text-display-2xl)',
          {
            lineHeight: 'var(--text-display-2xl-line-height)',
            letterSpacing: 'var(--text-display-2xl-letter-spacing)',
          },
        ],
        'display-xl': [
          'var(--text-display-xl)',
          {
            lineHeight: 'var(--text-display-xl-line-height)',
            letterSpacing: 'var(--text-display-xl-letter-spacing)',
          },
        ],
        'display-lg': [
          'var(--text-display-lg)',
          {
            lineHeight: 'var(--text-display-lg-line-height)',
            letterSpacing: 'var(--text-display-lg-letter-spacing)',
          },
        ],
        'display-md': [
          'var(--text-display-md)',
          {
            lineHeight: 'var(--text-display-md-line-height)',
            letterSpacing: 'var(--text-display-md-letter-spacing)',
          },
        ],
        'display-sm': [
          'var(--text-display-sm)',
          {
            lineHeight: 'var(--text-display-sm-line-height)',
            letterSpacing: 'var(--text-display-sm-letter-spacing)',
          },
        ],
        'display-xs': [
          'var(--text-display-xs)',
          {
            lineHeight: 'var(--text-display-xs-line-height)',
            letterSpacing: 'var(--text-display-xs-letter-spacing)',
          },
        ],

        // Text sizes use raw keys (no leading "text-")
        xs: [
          'var(--text-xs)',
          {
            lineHeight: 'var(--text-xs-line-height)',
            letterSpacing: 'var(--text-xs-letter-spacing)',
          },
        ],
        sm: [
          'var(--text-sm)',
          {
            lineHeight: 'var(--text-sm-line-height)',
            letterSpacing: 'var(--text-sm-letter-spacing)',
          },
        ],
        md: [
          'var(--text-md)',
          {
            lineHeight: 'var(--text-md-line-height)',
            letterSpacing: 'var(--text-md-letter-spacing)',
          },
        ],
        lg: [
          'var(--text-lg)',
          {
            lineHeight: 'var(--text-lg-line-height)',
            letterSpacing: 'var(--text-lg-letter-spacing)',
          },
        ],
        xl: [
          'var(--text-xl)',
          {
            lineHeight: 'var(--text-xl-line-height)',
            letterSpacing: 'var(--text-xl-letter-spacing)',
          },
        ],
      },
      colors: {
        neutral: {
          25: 'var(--neutral-25)',
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
          950: 'var(--neutral-950)',
        },
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
        },
        base: {
          white: 'var(--base-white)',
          black: 'var(--base-black)',
        },
      },
      borderRadius: {
        none: 'var(--radius-none)',
        xxs: 'var(--radius-xxs)',
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        full: 'var(--radius-full)',
      },
      spacing: {
        none: 'var(--spacing-none)',
        xxs: 'var(--spacing-xxs)',
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)',
        '10xl': 'var(--spacing-10xl)',
        '11xl': 'var(--spacing-11xl)',
      },
    },
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
};

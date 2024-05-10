import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */

const colors = {
  brand: {
    black: '#1a1a1a',
    white: '#fefefe',
    primary: '#65a7df',
    secondary: `rgb(200 230 255)`,
    darkblue: '#1f2d3d',
    dark: '#a0b5c8',
    light: '#d0d8e0',
    darkest: '#010b1c',
  },
  neutral: {
    DEFAULT: '#666666',
    black: '#000000',
    white: '#ffffff',
    lightest: '#eeeeee',
    lighter: '#cccccc',
    light: '#aaaaaa',
    dark: '#444444',
    darker: '#222222',
    darkest: '#111111',
  },
  system: {
    'success-green': '#027a48',
    'success-green-light': '#ecfdf3',
    'error-red': '#b42318',
    'error-red-light': '#fef3f2',
  },
};

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [formsPlugin, typographyPlugin],
  theme: {
    fontSize: {
      // | px   | no-break                                | md                    | lg
      xs: ['0.75rem', {lineHeight: '1.5'}], // | 12px | text-size-tiny                          | text-size-tiny        | text-size-tiny
      sm: ['0.875rem', {lineHeight: '1.5'}], // | 14px | text-size-small                         | text-size-small       | text-size-small
      base: ['1rem', {lineHeight: '1.5'}], // | 16px | text-size-medium, text-size-regular, p  | text-size-regular, p  | text-size-regular, p
      md: ['1.125rem', {lineHeight: '1.5'}], // | 18px | text-size-large, h6                     | text-size-medium      | text-size-medium
      lg: ['1.25rem', {lineHeight: '1.5'}], // | 20px |                                         | text-size-large       | text-size-large
      xl: ['1.25rem', {lineHeight: '1.4'}], // | 20px | h5                                      | h6                    | h6
      '2xl': ['1.5rem', {lineHeight: '1.4'}], // | 24px | h4                                      | h5                    | h5
      '3xl': ['1.75rem', {lineHeight: '1.4'}], // | 28px |                                         | h4                    |
      '4xl': ['2rem', {lineHeight: '1.3'}], // | 32px | h3                                      |                       | h4
      '5xl': ['2.25rem', {lineHeight: '1.2'}], // | 36px | h2                                      | h3                    |
      '6xl': ['2.5rem', {lineHeight: '1.2'}], // | 40px | h1                                      |                       | h3
      '7xl': ['2.75rem', {lineHeight: '1.2'}], // | 40px |                                         | h2                    |
      '8xl': ['3rem', {lineHeight: '1.2'}], // | 48px |                                         |                       | h2
      '9xl': ['3.25rem', {lineHeight: '1.2'}], // | 52px |                                         | h1                    |
      '10xl': ['3.5rem', {lineHeight: '1.2'}], // | 56px |                                         |                       | h1
    },
    extend: {
      colors: {
        ...colors,
        background: {
          DEFAULT: colors.neutral.white, // bg-background, text-background, border-background,
          primary: colors.neutral.white, // bg-background-primary, text-background-primary, border-background-primary,
          secondary: colors.neutral.lightest,
          tertiary: colors.neutral,
          alternative: colors.neutral.black,
          success: colors.system['success-green-light'],
          error: colors.system['error-red-light'],
        },
        border: {
          DEFAULT: colors.neutral.black,
          primary: colors.neutral.black,
          secondary: colors.neutral.light,
          tertiary: colors.neutral.dark,
          alternative: colors.neutral.white,
          success: colors.system['success-green'],
          error: colors.system['error-red'],
        },
        text: {
          DEFAULT: colors.neutral.black,
          primary: colors.neutral.black,
          secondary: colors.neutral.light,
          alternative: colors.neutral.white,
          success: colors.system['success-green'],
          error: colors.system['error-red'],
        },
        link: {
          DEFAULT: colors.neutral.black,
          primary: colors.neutral.black,
          secondary: colors.neutral,
          alternative: colors.neutral.white,
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: colors.neutral.black,
            lineHeight: '1.5',
            maxWidth: '100%',
            p: {
              marginTop: '0',
              marginBottom: '1rem',
            },
          },
        },
      },

      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
        '3xl': '9px 9px 0 0 #000',
        '4xl': '9px 9px 0 0 #2be1e4',
        '5px': '-5px 5px 0px black',
      },
    },
    keyframes: {
      'accordion-down': {
        from: {height: '0px'},
        to: {height: 'var(--radix-accordion-content-height)'},
      },
      'accordion-up': {
        from: {height: 'var(--radix-accordion-content-height)'},
        to: {height: '0px'},
      },
      'loop-horizontally': {
        from: {transform: 'translateX(0)'},
        to: {transform: 'translateX(-100%)'},
      },
      'loop-vertically': {
        from: {transform: 'translateY(0)'},
        to: {transform: 'translateY(-50%)'},
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'loop-horizontally': 'loop-horizontally 20s linear infinite',
      'loop-vertically': 'loop-vertically 30s linear infinite',
    },
  },
};

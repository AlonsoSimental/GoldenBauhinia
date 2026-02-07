/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: 'rgb(var(--color-base) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        neutral: 'rgb(var(--color-neutral) / <alpha-value>)',
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 30px rgba(33, 24, 16, 0.18)',
      },
    },
  },
  plugins: [],
};

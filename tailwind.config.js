/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        nss: {
          blue: {
            DEFAULT: '#193366',
            dark: '#0f2042',
            navy: '#0d1b2a',
            light: '#254b8c',
            soft: '#eff6ff',
          },
          orange: {
            DEFAULT: '#f97316',
            hover: '#ea580c',
            dark: '#c2410c',
            light: '#fdba74',
            soft: '#fff7ed',
          },
          gold: {
            DEFAULT: '#eab308',
            accent: '#f59e0b',
            light: '#fef08a',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      boxShadow: {
        none: 'none',
      }
    },
  },
  plugins: [],
}

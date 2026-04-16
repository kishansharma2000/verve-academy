/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        display: ['Figtree', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0A0A0A',
        muted: '#666666',
        border: '#E5E5E5',
        'off-white': '#F7F7F5',
        aviation: '#0066CC',
        'aviation-light': '#E6F0FA',
      },
    },
  },
  plugins: [],
}

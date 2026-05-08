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
        body: ['Figtree', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Vervve Brand Palette
        navy: '#0B1F45',
        'sky-brand': '#1A6CB4',
        gold: '#E8A020',
        'off-white': '#F4F7FC',
        'light-gray': '#E8EDF5',
        'mid-gray': '#8A97AD',
        'dark-gray': '#2C3A52',

        // Semantic aliases — keep existing class names working, remapped to brand
        ink: '#0B1F45',           // Deep Navy → headings, primary text
        muted: '#5A6779',         // Navy-tinted body gray
        border: '#E8EDF5',        // Light gray
        aviation: '#1A6CB4',      // Sky Blue → CTAs / interactive
        'aviation-light': '#E8EDF5',
      },
    },
  },
  plugins: [],
}

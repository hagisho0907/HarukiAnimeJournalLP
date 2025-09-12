import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#ED1C24',
          cream: '#F5E6D3',
          gold: '#D4A017',
          yellow: '#FFD700',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero-title': ['48px', { lineHeight: '1.2' }],
        'hero-subtitle': ['72px', { lineHeight: '1', fontWeight: '800' }],
      },
    },
  },
  plugins: [],
};
export default config;
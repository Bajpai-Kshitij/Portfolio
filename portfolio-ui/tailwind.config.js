/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#0B0F19",
        secondaryBg: "#111827",
        accent: "#38BDF8",
        accentSecondary: "#8B5CF6",
      },
    },
  },
  plugins: [],
}
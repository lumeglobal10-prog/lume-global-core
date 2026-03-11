/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lume: {
          white: "#FFFFFF",
          black: "#000000",
        }
      },
    },
  },
  plugins: [],
};

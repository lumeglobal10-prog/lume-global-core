/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 📐 ELIMINACIÓN DE CURVATURA: ESTÁNDAR RECTO MANDATORIO
      borderRadius: {
        'none': '0',
        'sm': '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        '3xl': '0',
        'full': '0',
      },
      // 🎨 PALETA DE CONTRASTE ABSOLUTO LUME
      colors: {
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      // 🚫 ELIMINACIÓN DE SUAVIZADO: CERO SOMBRAS
      boxShadow: {
        'none': '0 0 #0000',
      },
    },
  },
  plugins: [
    // INYECCIÓN DE UTILIDAD PARA PLACEHOLDERS EN MAYÚSCULAS
    function({ addUtilities }) {
      addUtilities({
        '.placeholder-uppercase::placeholder': {
          'text-transform': 'uppercase',
        },
      })
    },
  ],
};

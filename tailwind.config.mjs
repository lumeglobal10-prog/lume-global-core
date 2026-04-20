/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
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
        legal: '#333333', // Inyección de Contraste Operativo para Footer/Legales
      },
      fontFamily: {
        // IDENTIDAD FINAL V5.1: PLAYFAIR DISPLAY SOBERANA
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      // 🚫 ELIMINACIÓN DE SUAVIZADO: CERO SOMBRAS Y TRANSICIONES
      boxShadow: {
        'none': 'none',
      },
      transitionProperty: {
        'none': 'none',
      },
      letterSpacing: {
        'lume': '0.2em',
        'lume-wide': '0.5em',
      }
    },
  },
  plugins: [
    // INYECCIÓN DE UTILIDAD PARA PLACEHOLDERS Y TEXTO MANDATORIO LUME
    function({ addUtilities }) {
      addUtilities({
        '.placeholder-uppercase::placeholder': {
          'text-transform': 'uppercase',
        },
        '.lume-stiff': {
          'transition': 'none !important',
          'border-radius': '0 !important',
          'box-shadow': 'none !important',
          'text-transform': 'uppercase !important',
          'font-family': 'var(--font-playfair), serif !important',
          'font-weight': '300 !important',
          'letter-spacing': '0.2em !important',
        },
      })
    },
  ],
};

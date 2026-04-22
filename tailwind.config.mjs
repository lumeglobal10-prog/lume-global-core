/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 📐 ELIMINACIÓN DE CURVATURA: ESTÁNDAR RECTO MANDATORIO V5.2.5
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
        legal: '#333333', 
      },
      fontFamily: {
        // IDENTIDAD V5.2.5: PLAYFAIR DISPLAY SOBERANA
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      // 🚫 ELIMINACIÓN DE SUAVIZADO Y PERSISTENCIA DE VIEWPORT
      boxShadow: {
        'none': 'none',
      },
      transitionProperty: {
        'none': 'none',
      },
      height: {
        'screen-v5': '100vh', // Soporte para Viewport Zero-Scroll
      },
      letterSpacing: {
        'lume': '0.2em',
        'lume-wide': '0.5em',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.placeholder-uppercase::placeholder': {
          'text-transform': 'uppercase',
        },
        // 🏛️ UTILIDAD SOBERANA RECTIFICADA V5.2.5
        '.lume-stiff': {
          'transition': 'none !important',
          'border-radius': '0 !important',
          'box-shadow': 'none !important',
          'text-transform': 'uppercase !important',
          'font-family': 'var(--font-playfair), serif !important',
          'font-weight': '300 !important',
          'letter-spacing': '0.2em !important',
        },
        // INYECCIÓN DE RESTRICCIÓN DE SCROLL
        '.zero-scroll': {
          'height': '100vh !important',
          'overflow': 'hidden !important',
        },
        // 🛡️ FILTRO DINÁMICO ISOTIPO MAESTRO
        '.lume-logo-adaptativo': {
          'filter': 'brightness(0) invert(1)',
        }
      })
    },
  ],
};

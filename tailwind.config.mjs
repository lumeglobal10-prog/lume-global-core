/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 📐 RECTIFICACIÓN V5.2.5: SE RESTAURAN CURVATURAS ESPECÍFICAS PARA BOTONES Y CAMPOS
      borderRadius: {
        'none': '0',
        'DEFAULT': '0',
        'lg': '15px',    // Para Inputs
        'xl': '20px',    // Para Pop-ups / Contenedores
        'full': '50px',  // Para Botones (Estilo Lume V5.2.5)
      },
      // 🎨 PALETA DE CONTRASTE ABSOLUTO LUME
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        legal: '#333333', 
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'none': 'none',
      },
      transitionProperty: {
        'none': 'none',
      },
      height: {
        'screen-v5': '100vh',
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
        '.lume-stiff': {
          'transition': 'none !important',
          'text-transform': 'uppercase !important',
          'font-family': 'var(--font-playfair), serif !important',
          'font-weight': '300 !important',
          'letter-spacing': '0.2em !important',
        },
        '.zero-scroll': {
          'height': '100vh !important',
          'overflow': 'hidden !important',
        },
        // 🛡️ FILTRO DINÁMICO ISOTIPO MAESTRO (PNG COMPATIBLE)
        '.lume-logo-adaptativo': {
          'filter': 'brightness(0) invert(1)',
        }
      })
    },
  ],
};

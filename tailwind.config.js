/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nevoa: '#FCE8EE',    // Rosa pastel clarinho (Fundo secundário)
        marfim: '#FFFCFD',   // Branco com toque quente (Fundo principal)
        vinho: '#9E1B51',    // Rosa Berry / Vinho Forte (Botões e destaques - Alto Contraste)
        verde: '#2A0820',    // Beringela Super Escuro (Textos e Títulos - Excelente Contraste)
        rosa: '#D65E87',     // Rosa Queimado Vivo (Apenas para ícones e bordas)
        cinza: '#553B4B',    // Ameixa Mudo Escuro (Texto de parágrafos - Leitura confortável)
        borda: '#E8CCD5'     // Borda suave
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'floaty 4s ease-in-out infinite',
        'float-delayed': 'floaty 5s ease-in-out -2s infinite',
        'fade-in-up': 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          'neon-cyan': '#00f3ff',
          'neon-purple': '#bc13fe',
          'dark-bg': '#0a0a0a',
          'dark-surface': '#1a1a1a',
          'glass-white': 'rgba(255, 255, 255, 0.1)',
        },
        backdropBlur: {
          xs: '2px',
        },
        borderOpacity: {
          15: '0.15',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'gradient-x': 'gradient-x 8s ease infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          'gradient-x': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            }
          }
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require("tailwind-scrollbar")
    ],
  }
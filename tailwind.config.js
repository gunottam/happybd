/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        babyPink: "#FFC0CB",
        babyBlue: "#BFE7FF",
        lavender: "#E9D7FF",
        pearl: "#FFF8F9",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 192, 203, 0.4)",
      },
      backdropBlur: {
        12: "12px",
      },
      borderRadius: {
        '2xl': '1rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        confetti: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(110%) rotate(360deg)', opacity: '0' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        confetti: 'confetti 12s linear infinite',
      },
    },
  },
  plugins: [],
};



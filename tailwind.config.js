/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      fontFamily: {
        signature: ["Raleway"],
      },
      colors: {
        primary: '#F1AD00',
        dark: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#1f2937'
        },
        light: {
          DEFAULT: '#ffffff',
          dark: '#f3f4f6',
          darker: '#e5e7eb'
        }
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--card-bg)'
      },
      textColor: {
        primary: 'var(--text-primary)'
      },
      borderColor: {
        primary: 'var(--border-color)'
      }
    },
  },
  plugins: [],
}; 
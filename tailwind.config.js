/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif']
      },
      keyframes: {
        slideleft: {
          from: {
            transform: "translateX(2.25rem)",
          },
          to: {
            transform: "translateX(-1rem)",
          },
        },
        fadeout: {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
        fadein: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
          
        }
      },
      animation: {
        fadeout: "fadeout 2s ease-in var(--fadeout-delay, 0) forwards",
        fadein: "fadein 1s ease-in var(--fadein-delay, 0) forwards",
        slideleft: "slideleft 1s ease-in-out var(--slideleft-delay, 0) forwards",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["corporate"],
  },

}
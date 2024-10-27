/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif']
      },
      width: {
        '128': '32rem',
        '256': '64rem',
      },
      keyframes: {
        slideleft: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-3.25rem)",
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
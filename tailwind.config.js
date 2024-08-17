/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
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
        slidein: "slidein 2s ease var(--slidein-delay, 0) forwards",
        fadeout: "fadeout 2s ease-in forwards",
        fadein: "fadein 2s ease-in forwards",
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
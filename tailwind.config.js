/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryB: "#000",
        secondaryW: "#fff",
        tertiaryBTN: "#90e0ef",
        typingText: "#f8ce96",
      },

      // animation: {
      //   rightL: "right 1.2s infinite alternate",
      // },

      // keyframes: {
      //   right: {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(10px)" },
      //   },
      // },

      // keyframes: {
      //   topdown: {
      //     "0%": { transform: "translateY(0)" },
      //     "100%": { transform: "translateY(-10px)" },
      //   },
      // },

      // animation: {
      //   topdown1: "topdown 1.2s infinite alternate",
      // },

      animation: {
        text: "text 5s ease infinite",
      },

      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },

      boxShadow: {
        card: "0px 0px 10px 2px rgba(90, 100, 229, 1)",
      },
    },
  },
  plugins: [],
};

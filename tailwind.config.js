/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "soon-image": "url('@/public/images/logo/bg.png)'",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cairo: ["Cairo"],
        Nunito: ["Nunito", "Sans"],

        sans: ["Nunito", "Roboto", "sans-serif"],
        cursive: ["Roboto", "Sriracha", "cursive"],
        cursive2: ["Roboto", "cursive"],
      },
      colors: {
        blueColor: "#008080",
        grayColor: "#212529",
        bgGrayColor: "#333132",
        secondary: "#ffffff",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          // sm: "1.5rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};

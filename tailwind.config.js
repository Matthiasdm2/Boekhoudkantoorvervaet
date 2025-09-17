/******** Tailwind Config ********/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F3D9E", // hoofdtoon
          light: "#5B7CFA",   // gebruikt in gradients / componenten
          dark: "#14246B"      // diepe accentkleur
        },
        brand: {
          50: "#EEF2FF",
          100: "#E0EAFF",
          200: "#C7D7FE",
          300: "#A4BCFD",
          400: "#8098F9",
          500: "#5B7CFA",
          600: "#3E5FE0",
          700: "#2F49B8",
          800: "#1F338F",
          900: "#14246B"
        }
      },

      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(1000px 600px at 10% 10%, rgba(59,130,246,.25), transparent 60%), radial-gradient(800px 500px at 90% 20%, rgba(59,130,246,.25), transparent 60%), radial-gradient(600px 500px at 50% 100%, rgba(59,130,246,.25), transparent 60%)"
      },
      boxShadow: {
        "soft": "0 10px 30px rgba(2,6,23,0.08)",
        "elevate": "0 20px 40px rgba(2,6,23,0.12)"
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
}
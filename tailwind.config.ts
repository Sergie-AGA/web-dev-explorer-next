/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "skeleton-loading":
          "1.2s ease-in-out 0s infinite normal none running skeletonLoading",
      },
      backgroundImage: {
        "gradient-skeleton":
          "linear-gradient(110deg, rgba(0, 0, 0, 0), rgb(255, 255, 255), rgba(0, 0, 0, 0));",
      },
      keyframes: {
        skeletonLoading: {
          "0%": { backgroundPosition: "-20% 0px" },
          "100%": { backgroundPosition: "200% 0px" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
    fontFamily: {
      mono: ["Source Code Pro", "monospace"],
      sans: ["Open Sans", "sans-serif"],
    },
    screens: {
      sm: "400px",
      // => @media (min-width: 400px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    plugins: [
      require("tailwindcss-animate"),
      require("postcss-import"),
      require("tailwindcss/nesting"),
      require("postcss-nesting"),
      require("autoprefixer"),
      require("tailwindcss"),
    ],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        md: "1.125rem",
        xxs: "0.625rem",
      },
      colors: {
        "theme-color": "var(--theme-text)",
      },
      backgroundColor: {
        "theme-color": "var(--theme-background)",
      },
    },
  },
  plugins: [],
};

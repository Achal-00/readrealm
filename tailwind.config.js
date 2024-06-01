/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#FFFEEC",
        "light-black": "#3B3B36",
        "light-white": "#bcbcbc",
        "header-text": "#BFAC97",
        "light-gray": "#00000047",
        "cta-border": "#0C0C0C",
      },
      fontFamily: {
        header: ["Noto Serif", "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Important: includes .ts and .tsx files
  ],
  theme: {
    extend: {
      // You can customize your theme here, e.g., add custom colors, fonts
      colors: {
        // Example custom color (adjust as needed to match the reference site)
        "primary-blue": "#1a73e8",
        "dark-gray": "#333333",
        "light-gray": "#f5f5f5",
        "accent-green": "#28a745", // Example, if you find one
      },
      fontFamily: {
        // Example custom font (you'll need to import it via Google Fonts or similar)
        sans: ["Inter", "sans-serif"], // Or whatever font the reference site uses
      },
    },
  },
  plugins: [],
};

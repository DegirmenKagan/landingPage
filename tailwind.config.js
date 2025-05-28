// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This array tells Tailwind CSS where to look for your utility classes.
    // It scans HTML files at the root, and all JavaScript, TypeScript,
    // JSX, and TSX files within the 'src' directory and its subdirectories.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom colors matching the reference site's aesthetic
      colors: {
        "primary-blue": "#1a73e8", // A strong blue for primary actions/branding
        "dark-gray": "#333333", // Used for darker backgrounds or text
        "light-gray": "#f5f5f5", // Used for light backgrounds
        "accent-green": "#28a745", // An example accent color, if needed
      },
      // Custom font family - ensure 'Inter' is imported in public/index.html
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

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

        // --- Banner Card Specific Colors ---
        "buyapar-blue": "#4a90e2",
        "buyapar-dark-blue": "#357abd",
        "badge-red": "#e74c3c",
        "chart-orange": "#ff6b35",
        "chart-bar-1": "#8b4513",
        "chart-bar-2": "#ff6b35",
        "chart-bar-3": "#ffa500",
        "chart-bar-4": "#dc143c",
        "chart-bar-5": "#20b2aa",
        "chart-bar-6": "#ff1493",
        "chart-bar-7": "#32cd32",
        "chart-bar-8": "#ff69b4",
        "chart-bar-9": "#4169e1",
        "chart-bar-10": "#ffd700",
        "cabinet-gold": "#b8860b",
        "cabinet-dark-gold": "#daa520",
        "cabinet-detail": "#8b7355",
        "file-blue": "#87ceeb",
        "file-green": "#98fb98",
        "file-yellow": "#ffd700",
        // --- End Banner Card Specific Colors ---
      },
      // Custom font family - ensure 'Inter' is imported in public/index.html
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      // --- Banner Card Specific Extensions ---
      // --- Banner Card Specific Extensions ---
      keyframes: {
        "float-file": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "card-pulse": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "float-file": "float-file 3s ease-in-out infinite",
        "card-pulse": "card-pulse 2s infinite",
      },
      transitionDuration: {
        800: "800ms",
      },
      backgroundImage: {
        "radial-gradient-white-transparent":
          "radial-gradient(circle, white 2px, transparent 2px)",
      },
      // KRİTİK EKLENTİLER BURADA!
      transformStyle: {
        // Bu kısım eklenmeli
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        // Bu kısım eklenmeli
        hidden: "hidden",
      },
      // --- END KRİTİK EKLENTİLER ---
      animationDelay: {
        // Bu kısım da eklenmeli
        500: "0.5s",
        1000: "1s",
      },
      // --- End Banner Card Specific Extensions ---
    },
  },
  plugins: [],
};

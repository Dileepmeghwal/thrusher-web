/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./*.html"], // Adjust the paths based on your file structure
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#5CA3FF", // Light blue
          DEFAULT: "#2567FF", // Default blue
          dark: "#1D0B67", // Dark blue
        },
        secondary: {
          light: "#f9a8d4", // Light pink
          DEFAULT: "#AAAFBA", // Default pink
          dark: "#be185d", // Dark pink
        },
        neutral: {
          light: "#f3f4f6", // Light gray
          DEFAULT: "#9ca3af", // Default gray
          dark: "#374151", // Dark gray
        },
        accent: {
          green: "#10b981", // Vibrant green
          red: "#ef4444", // Vibrant red
        },
        stroke: "rgba(170, 175, 186, 0.13)",
      },
      fontFamily: {
        // sans: ["DM Sans", "sans-serif"], // Add DM Sans here
        sans: ["Roboto", 'serif'],
      },

      typography: {
        DEFAULT: {
          css: {
            color: "#AAAFBA",
          },
        },
      },

      fontSize: {
        xs: "12px", // Extra small
        sm: "14px", // Small
        base: "16px", // Base size
        lg: "18px", // Large
        xl: "20px", // Extra large
        "2xl": "24px", // 2x Extra large
        "3xl": "30px", // 3x Extra large
        "4xl": "36px", // 4x Extra large
        "5xl": "48px", // 5x Extra large
        "6xl": "60px", // 6x Extra large
        "7xl": "72px", // 7x Extra large
        "8xl": "96px", // 8x Extra large
        "9xl": "128px", // 9x Extra large
      },
      fontWeight: {
        extraBold: "800", // Add custom font weight
        extraLight: "200",
        bold: "700",
        semiBold: "600",
        medium: "500",
      },
      boxShadow: {
        DEFAULT: "rgba(0, 0, 0, 0.09) 0px 3px 12px;",
        soft: "rgba(100, 100, 111, 0.25) 0px 7px 29px 0px;", // Add soft shadow
        hard: "0 10px 15px rgba(0, 0, 0, 0.2)", // Add a hard shadow
        spread: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
      borderRadius: {
        DEFAULT: "8px",
        "custom-sm": "0.25rem", // Small custom radius
        "custom-lg": "1rem", // Large custom radius
        circle: "50%", // Full-circle radius
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

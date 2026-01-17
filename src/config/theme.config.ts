import type { AppConfig } from "./types";

export const themeConfig: AppConfig["theme"] = {
  current: "dark",

  themes: {
    dark: {
      colors: {
        primary: "#00C2FF",
        secondary: "#A855F7",
        background: "#050A12",
        surface: "#0B1220",
        text: "#F8FAFC",
        textSecondary: "#94A3B8",
        border: "rgba(255,255,255,0.12)",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
      },
    },

    light: {
      colors: {
        primary: "#0077FF",
        secondary: "#7C3AED",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        text: "#0F172A",
        textSecondary: "#475569",
        border: "rgba(15,23,42,0.12)",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
      },
    },
  },
};

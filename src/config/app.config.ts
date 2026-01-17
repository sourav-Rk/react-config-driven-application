import { homePage } from "./pages/home.page";
import { productsPage } from "./pages/products.page";
import { profilePage } from "./pages/profile.page";
import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  theme: {
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
  pages: {
    home: homePage,
    products: productsPage,
    profile: profilePage,
  },
  navigation: {
    items: [
      { label: "Home", route: "/" },
      { label: "Products", route: "/products" },
      { label: "Profile", route: "/profile" },
    ],
  },
};

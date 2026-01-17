import { homePage } from "./pages/home.page";
import { productsPage } from "./pages/products.page";
import { profilePage } from "./pages/profile.page";
import { themeConfig } from "./theme.config";
import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  theme: themeConfig,
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

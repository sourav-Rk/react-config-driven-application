import type { ComponentConfig } from "./components";

export interface LayoutConfig {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "sm" | "md" | "lg";
}

export interface PageConfig {
  route: string;
  title: string;
  components: ComponentConfig[];
  layout?: LayoutConfig;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

export interface NavigationItem {
  label: string;
  route: string;
}

export interface AppConfig {
  theme: ThemeConfig;
  pages: Record<string, PageConfig>;
  navigation: {
    items: NavigationItem[];
  };
}

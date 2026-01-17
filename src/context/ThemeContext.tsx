import React, { createContext, useEffect, useMemo, useState } from "react";
import type { ThemeConfig } from "../config/types";
import { useAppConfig } from "../hooks/useAppConfig";

type ThemeName = "dark" | "light";

interface ThemeContextValue {
  themeName: ThemeName;
  theme: ThemeConfig;
  setThemeName: (name: ThemeName) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "APP_THEME";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const config = useAppConfig();

  const defaultTheme = config.theme.current as ThemeName;

  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null;
    return saved ?? defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, themeName);
  }, [themeName]);

  const theme = useMemo(() => {
    return config.theme.themes[themeName];
  }, [config.theme.themes, themeName]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({
      themeName,
      theme,
      setThemeName,
      toggleTheme,
    }),
    [themeName, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

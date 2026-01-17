import { useCallback, useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  const { theme, themeName, toggleTheme, setThemeName } = ctx;

  const applyTheme = useCallback(() => {
    const root = document.documentElement;

    // colors
    root.style.setProperty("--color-primary", theme.colors.primary);
    root.style.setProperty("--color-secondary", theme.colors.secondary);
    root.style.setProperty("--color-background", theme.colors.background);
    root.style.setProperty("--color-surface", theme.colors.surface);
    root.style.setProperty("--color-text", theme.colors.text);
    root.style.setProperty("--color-text-secondary", theme.colors.textSecondary);
    root.style.setProperty("--color-border", theme.colors.border);

    // spacing
    root.style.setProperty("--spacing-xs", theme.spacing.xs);
    root.style.setProperty("--spacing-sm", theme.spacing.sm);
    root.style.setProperty("--spacing-md", theme.spacing.md);
    root.style.setProperty("--spacing-lg", theme.spacing.lg);
    root.style.setProperty("--spacing-xl", theme.spacing.xl);

    // radius
    root.style.setProperty("--radius-sm", theme.borderRadius.sm);
    root.style.setProperty("--radius-md", theme.borderRadius.md);
    root.style.setProperty("--radius-lg", theme.borderRadius.lg);
  }, [theme]);

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  return {
    theme,
    themeName,
    toggleTheme,
    setThemeName,
    applyTheme,
  };
}

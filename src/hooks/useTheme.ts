import { useState, useEffect, useMemo, useCallback } from 'react';
import { useAppConfig } from './useAppConfig';
import type{ ThemeConfig } from '../config/types';

interface UseThemeReturn {
  theme: ThemeConfig;
  applyTheme: () => void;
}

export function useTheme(): UseThemeReturn {
  const config = useAppConfig();
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(config.theme);

  // Update theme when config changes
  useEffect(() => {
    setCurrentTheme(config.theme);
  }, [config.theme]);

  // Apply theme to CSS variables
  const applyTheme = useCallback((): void => {
    const root = document.documentElement;
    const theme = currentTheme;

    // Apply colors
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-surface', theme.colors.surface);
    root.style.setProperty('--color-text', theme.colors.text);
    root.style.setProperty('--color-text-secondary', theme.colors.textSecondary);
    root.style.setProperty('--color-border', theme.colors.border);

    // Apply spacing
    root.style.setProperty('--spacing-xs', theme.spacing.xs);
    root.style.setProperty('--spacing-sm', theme.spacing.sm);
    root.style.setProperty('--spacing-md', theme.spacing.md);
    root.style.setProperty('--spacing-lg', theme.spacing.lg);
    root.style.setProperty('--spacing-xl', theme.spacing.xl);

    // Apply border radius
    root.style.setProperty('--radius-sm', theme.borderRadius.sm);
    root.style.setProperty('--radius-md', theme.borderRadius.md);
    root.style.setProperty('--radius-lg', theme.borderRadius.lg);
  }, [currentTheme]);

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  const theme = useMemo(() => currentTheme, [currentTheme]);

  return {
    theme,
    applyTheme,
  };
}


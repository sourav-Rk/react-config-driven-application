import { useAppConfigContext } from '../context/AppConfigContext';
import type { AppConfig, PageConfig } from '../config/types';

export function useAppConfig(): AppConfig {
  const { config } = useAppConfigContext();
  return config;
}

export function usePageConfig(pageId: string): PageConfig | undefined {
  const config = useAppConfig();
  return config.pages[pageId];
}


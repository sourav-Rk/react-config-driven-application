import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { AppConfig } from '../config/types';
import { appConfig } from '../config/app.config';

interface AppConfigContextType {
  config: AppConfig;
}

const AppConfigContext = createContext<AppConfigContextType | null>(null);

interface AppConfigProviderProps {
  children: ReactNode;
}

export function AppConfigProvider({ children }: AppConfigProviderProps) {
  return (
    <AppConfigContext.Provider value={{ config: appConfig }}>
      {children}
    </AppConfigContext.Provider>
  );
}

export function useAppConfigContext(): AppConfigContextType {
  const context = useContext(AppConfigContext);
  if (!context) {
    throw new Error('useAppConfigContext must be used within AppConfigProvider');
  }
  return context;
}


import type{ ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';
import type{ LayoutConfig } from '../../config/types';

interface PageLayoutProps {
  children: ReactNode;
  layout?: LayoutConfig;
}

export function PageLayout({ children, layout }: PageLayoutProps) {
  const { theme } = useTheme();

  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const maxWidth = layout?.maxWidth || 'full';
  const padding = layout?.padding || 'md';

  return (
    <div
      className={`min-h-screen ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} mx-auto`}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      {children}
    </div>
  );
}


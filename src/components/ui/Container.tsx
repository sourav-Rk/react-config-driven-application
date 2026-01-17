import type{ ContainerConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';
import { ComponentResolver } from '../resolver/ComponentResolver';

interface ContainerProps extends Omit<ContainerConfig, 'type'> {
  className?: string;
}

export function Container({
  children,
  maxWidth = 'xl',
  className = '',
}: ContainerProps) {
  const { theme } = useTheme();

  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={`mx-auto px-4 py-6 ${maxWidthClasses[maxWidth]} ${className}`}
      style={{
        padding: theme.spacing.lg,
      }}
    >
      {children.map((child, index) => (
        <ComponentResolver key={child.id || index} config={child} />
      ))}
    </div>
  );
}


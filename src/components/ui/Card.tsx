import type{ CardConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';
import { ComponentResolver } from '../resolver/ComponentResolver';

interface CardProps extends Omit<CardConfig, 'type'> {
  className?: string;
}

export function Card({
  title,
  content,
  children,
  className = '',
}: CardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-lg shadow-md p-6 ${className}`}
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        borderWidth: '1px',
        borderRadius: theme.borderRadius.md,
      }}
    >
      {title && (
        <h3
          className="text-xl font-semibold mb-2"
          style={{ color: theme.colors.text }}
        >
          {title}
        </h3>
      )}
      {content && (
        <p
          className=""
          style={{ color: theme.colors.textSecondary }}
        >
          {content}
        </p>
      )}
      {children &&
        children.map((child, index) => (
          <ComponentResolver key={child.id || index} config={child} />
        ))}
    </div>
  );
}


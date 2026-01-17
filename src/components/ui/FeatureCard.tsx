import type { FeatureCardConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface FeatureCardProps extends Omit<FeatureCardConfig, 'type'> {
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className = '',
}: FeatureCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg border transition-all duration-300 hover:scale-105 ${className}`}
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        boxShadow: `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.primary}10`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 8px 12px rgba(0,0,0,0.4), 0 0 30px ${theme.colors.primary}20`;
        e.currentTarget.style.borderColor = theme.colors.primary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.primary}10`;
        e.currentTarget.style.borderColor = theme.colors.border;
      }}
    >
      {icon && (
        <div
          className="text-4xl mb-4"
          style={{ color: theme.colors.primary }}
        >
          {icon}
        </div>
      )}
      <h3
        className="text-xl font-semibold mb-2"
        style={{ color: theme.colors.text }}
      >
        {title}
      </h3>
      <p
        className="leading-relaxed"
        style={{ color: theme.colors.textSecondary }}
      >
        {description}
      </p>
    </div>
  );
}


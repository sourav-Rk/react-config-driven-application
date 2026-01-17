import type { StatsGridConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface StatsGridProps extends Omit<StatsGridConfig, 'type'> {
  className?: string;
}

export function StatsGrid({
  stats,
  columns = 4,
  className = '',
}: StatsGridProps) {
  const { theme } = useTheme();

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div
      className={`grid ${gridClasses[columns]} gap-6 ${className}`}
      style={{ gap: theme.spacing.lg }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-6 rounded-lg border transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          style={{
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
            borderWidth: '1px',
            borderRadius: theme.borderRadius.md,
            boxShadow: `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.primary}05`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = theme.colors.primary;
            e.currentTarget.style.boxShadow = `0 8px 12px rgba(0,0,0,0.4), 0 0 30px ${theme.colors.primary}20`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = theme.colors.border;
            e.currentTarget.style.boxShadow = `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.primary}05`;
          }}
        >
          {stat.icon && (
            <div
              className="text-3xl mb-3"
              style={{ color: theme.colors.primary }}
            >
              {stat.icon}
            </div>
          )}
          <div
            className="text-3xl font-bold mb-2"
            style={{
              color: theme.colors.primary,
              textShadow: `0 0 10px ${theme.colors.primary}40`,
            }}
          >
            {stat.value}
          </div>
          <div
            className="text-sm"
            style={{ color: theme.colors.textSecondary }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}


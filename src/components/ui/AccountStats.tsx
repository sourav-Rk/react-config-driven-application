import type { AccountStatsConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface AccountStatsProps extends Omit<AccountStatsConfig, 'type'> {
  className?: string;
}

export function AccountStats({
  stats,
  columns = 4,
  className = '',
}: AccountStatsProps) {
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
          className="p-6 rounded-lg border transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
            borderWidth: '1px',
            borderRadius: theme.borderRadius.md,
            boxShadow: `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.secondary}05`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = theme.colors.secondary;
            e.currentTarget.style.boxShadow = `0 8px 12px rgba(0,0,0,0.4), 0 0 30px ${theme.colors.secondary}20`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = theme.colors.border;
            e.currentTarget.style.boxShadow = `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.secondary}05`;
          }}
        >
          {stat.icon && (
            <div
              className="text-2xl mb-3"
              style={{ color: theme.colors.secondary }}
            >
              {stat.icon}
            </div>
          )}
          <div
            className="text-2xl font-bold mb-1"
            style={{
              color: theme.colors.secondary,
              textShadow: `0 0 10px ${theme.colors.secondary}40`,
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


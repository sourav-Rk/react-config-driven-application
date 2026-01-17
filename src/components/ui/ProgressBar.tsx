import type { ProgressBarConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface ProgressBarProps extends Omit<ProgressBarConfig, 'type'> {
  className?: string;
}

export function ProgressBar({
  label,
  value,
  max = 100,
  showPercentage = true,
  className = '',
}: ProgressBarProps) {
  const { theme } = useTheme();
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <span
          className="font-semibold"
          style={{ color: theme.colors.text }}
        >
          {label}
        </span>
        {showPercentage && (
          <span
            className="text-sm font-bold"
            style={{
              color: theme.colors.primary,
              textShadow: `0 0 10px ${theme.colors.primary}40`,
            }}
          >
            {Math.round(percentage)}%
          </span>
        )}
      </div>
      <div
        className="h-3 rounded-full overflow-hidden"
        style={{
          backgroundColor: theme.colors.background,
          borderRadius: theme.borderRadius.sm,
        }}
      >
        <div
          className="h-full transition-all duration-500 rounded-full relative"
          style={{
            width: `${percentage}%`,
            backgroundColor: theme.colors.primary,
            boxShadow: `0 0 15px ${theme.colors.primary}50, inset 0 0 10px ${theme.colors.primary}30`,
          }}
        >
          {/* Animated shine effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              animation: 'shimmer 2s infinite',
            }}
          />
        </div>
      </div>
    </div>
  );
}


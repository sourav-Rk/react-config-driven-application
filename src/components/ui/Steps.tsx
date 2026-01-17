import type { StepsConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface StepsProps extends Omit<StepsConfig, 'type'> {
  className?: string;
}

export function Steps({ steps, className = '' }: StepsProps) {
  const { theme } = useTheme();

  return (
    <div className={`space-y-8 ${className}`}>
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex gap-6 items-start relative"
        >
          {/* Step Number Circle */}
          <div
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg relative z-10"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
              boxShadow: `0 0 20px ${theme.colors.primary}50`,
            }}
          >
            {step.number}
          </div>

          {/* Connecting Line (except last) */}
          {index < steps.length - 1 && (
            <div
              className="absolute left-6 top-12 w-0.5"
              style={{
                height: 'calc(100% + 2rem)',
                backgroundColor: theme.colors.border,
              }}
            />
          )}

          {/* Step Content */}
          <div
            className="flex-1 pb-8"
            style={{
              paddingTop: theme.spacing.xs,
            }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: theme.colors.text }}
            >
              {step.title}
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: theme.colors.textSecondary }}
            >
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}


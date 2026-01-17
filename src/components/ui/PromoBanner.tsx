import type { PromoBannerConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';
import { useNavigate } from 'react-router-dom';

interface PromoBannerProps extends Omit<PromoBannerConfig, 'type'> {
  className?: string;
}

export function PromoBanner({
  title,
  description,
  buttonText,
  buttonRoute,
  className = '',
}: PromoBannerProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleButtonClick = (): void => {
    if (buttonRoute) {
      navigate(buttonRoute);
    }
  };

  return (
    <div
      className={`p-8 md:p-12 rounded-lg border text-center relative overflow-hidden ${className}`}
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.primary,
        borderWidth: '2px',
        borderRadius: theme.borderRadius.lg,
        boxShadow: `0 8px 16px rgba(0,0,0,0.4), 0 0 40px ${theme.colors.primary}20, inset 0 0 60px ${theme.colors.primary}05`,
      }}
    >
      {/* Animated background glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at center, ${theme.colors.primary} 0%, transparent 70%)`,
          animation: 'pulse 3s ease-in-out infinite',
        }}
      />

      <div className="relative z-10">
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{
            color: theme.colors.text,
            textShadow: `0 0 20px ${theme.colors.primary}40`,
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="text-lg mb-6 max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            {description}
          </p>
        )}
        {buttonText && (
          <button
            onClick={handleButtonClick}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
              boxShadow: `0 0 20px ${theme.colors.primary}40, 0 0 40px ${theme.colors.primary}20`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px ${theme.colors.primary}60, 0 0 60px ${theme.colors.primary}30`;
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 20px ${theme.colors.primary}40, 0 0 40px ${theme.colors.primary}20`;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}


import type { CtaCardConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';
import { useNavigate } from 'react-router-dom';

interface CtaCardProps extends Omit<CtaCardConfig, 'type'> {
  className?: string;
}

export function CtaCard({
  text,
  buttonText,
  buttonRoute,
  buttonVariant = 'primary',
  className = '',
}: CtaCardProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleButtonClick = (): void => {
    if (buttonRoute) {
      navigate(buttonRoute);
    }
  };

  return (
    <div
      className={`p-8 md:p-12 rounded-lg border text-center ${className}`}
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        boxShadow: `0 8px 16px rgba(0,0,0,0.4), 0 0 40px ${theme.colors.primary}15`,
      }}
    >
      <p
        className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
        style={{ color: theme.colors.text }}
      >
        {text}
      </p>
      {buttonText && (
        <button
          onClick={handleButtonClick}
          className={`
            px-8 py-3 rounded-lg font-semibold transition-all duration-300
            ${
              buttonVariant === 'outline' || buttonVariant === 'secondary'
                ? 'border-2'
                : ''
            }
          `}
          style={{
            backgroundColor:
              buttonVariant === 'primary'
                ? theme.colors.primary
                : buttonVariant === 'secondary'
                ? theme.colors.secondary
                : 'transparent',
            borderColor:
              buttonVariant === 'outline'
                ? theme.colors.primary
                : buttonVariant === 'secondary'
                ? theme.colors.secondary
                : theme.colors.primary,
            color:
              buttonVariant === 'outline'
                ? theme.colors.primary
                : buttonVariant === 'secondary'
                ? theme.colors.text
                : theme.colors.background,
            boxShadow:
              buttonVariant === 'primary'
                ? `0 0 20px ${theme.colors.primary}40, 0 0 40px ${theme.colors.primary}20`
                : buttonVariant === 'secondary'
                ? `0 0 20px ${theme.colors.secondary}40, 0 0 40px ${theme.colors.secondary}20`
                : 'none',
          }}
          onMouseEnter={(e) => {
            if (buttonVariant === 'outline') {
              e.currentTarget.style.backgroundColor = theme.colors.primary + '20';
            }
          }}
          onMouseLeave={(e) => {
            if (buttonVariant === 'outline') {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}


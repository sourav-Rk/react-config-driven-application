import type{ ButtonConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface ButtonProps extends Omit<ButtonConfig, 'type'> {
  className?: string;
  onClick?: () => void;
}

export function Button({
  text,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md font-medium transition-colors
        ${variant === 'outline' || variant === 'secondary' ? 'border-2' : ''}
        ${className}
      `}
      style={{
        backgroundColor:
          variant === 'primary'
            ? theme.colors.primary
            : variant === 'secondary'
            ? theme.colors.secondary
            : 'transparent',
        borderColor: variant === 'outline' ? theme.colors.primary : variant === 'secondary' ? theme.colors.secondary : undefined,
        color:
          variant === 'outline'
            ? theme.colors.primary
            : variant === 'secondary'
            ? theme.colors.text
            : theme.colors.background,
        boxShadow:
          variant === 'primary'
            ? `0 0 10px ${theme.colors.primary}30`
            : variant === 'secondary'
            ? `0 0 10px ${theme.colors.secondary}30`
            : 'none',
      }}
      onMouseEnter={(e) => {
        if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = theme.colors.primary + '20';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {text}
    </button>
  );
}


import type { HeroConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';
import { useNavigate } from 'react-router-dom';
import { ComponentResolver } from '../resolver/ComponentResolver';

interface HeroProps extends Omit<HeroConfig, 'type'> {
  className?: string;
}

export function Hero({
  title,
  subtitle,
  buttons,
  className = '',
}: HeroProps) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleButtonClick = (route?: string): void => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div
      className={`py-16 md:py-24 text-center ${className}`}
      style={{
        background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.surface} 100%)`,
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text"
          style={{
            color: theme.colors.text,
            textShadow: `0 0 20px ${theme.colors.primary}40`,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            {subtitle}
          </p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {buttons.map((button, index) => {
              const isPrimary = button.variant === 'primary';
              return (
                <button
                  key={index}
                  onClick={() => handleButtonClick(button.route)}
                  className={`
                    relative px-8 py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden
                    ${
                      button.variant === 'outline' || button.variant === 'secondary'
                        ? 'border-2'
                        : ''
                    }
                    ${isPrimary ? 'moving-rails-button' : ''}
                  `}
                  style={{
                    backgroundColor:
                      button.variant === 'primary'
                        ? theme.colors.primary
                        : button.variant === 'secondary'
                        ? theme.colors.secondary
                        : 'transparent',
                    borderColor:
                      button.variant === 'outline'
                        ? theme.colors.primary
                        : button.variant === 'secondary'
                        ? theme.colors.secondary
                        : theme.colors.primary,
                    color:
                      button.variant === 'outline'
                        ? theme.colors.primary
                        : button.variant === 'secondary' && button.variant !== 'primary'
                        ? theme.colors.text
                        : theme.colors.background,
                    boxShadow:
                      button.variant === 'primary'
                        ? `0 0 20px ${theme.colors.primary}40, 0 0 40px ${theme.colors.primary}20`
                        : button.variant === 'secondary'
                        ? `0 0 20px ${theme.colors.secondary}40, 0 0 40px ${theme.colors.secondary}20`
                        : 'none',
                    '--primary-color': theme.colors.primary,
                    '--secondary-color': theme.colors.secondary,
                  } as React.CSSProperties & { '--primary-color': string; '--secondary-color': string }}
                  onMouseEnter={(e) => {
                    if (button.variant === 'outline') {
                      e.currentTarget.style.backgroundColor = theme.colors.primary + '20';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (button.variant === 'outline') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {isPrimary && (
                    <>
                      {/* Top rail */}
                      <span
                        className="absolute top-0 left-0 h-0.5 moving-rail-top"
                        style={{
                          background: `linear-gradient(90deg, transparent, var(--primary-color), transparent)`,
                          width: '100%',
                        }}
                      />
                      {/* Right rail */}
                      <span
                        className="absolute top-0 right-0 w-0.5 moving-rail-right"
                        style={{
                          background: `linear-gradient(180deg, transparent, var(--primary-color), transparent)`,
                          height: '100%',
                        }}
                      />
                      {/* Bottom rail */}
                      <span
                        className="absolute bottom-0 left-0 h-0.5 moving-rail-bottom"
                        style={{
                          background: `linear-gradient(90deg, transparent, var(--primary-color), transparent)`,
                          width: '100%',
                        }}
                      />
                      {/* Left rail */}
                      <span
                        className="absolute top-0 left-0 w-0.5 moving-rail-left"
                        style={{
                          background: `linear-gradient(180deg, transparent, var(--primary-color), transparent)`,
                          height: '100%',
                        }}
                      />
                    </>
                  )}
                  <span className="relative z-10">{button.text}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}


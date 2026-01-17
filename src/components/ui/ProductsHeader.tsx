import type { ProductsHeaderConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface ProductsHeaderProps extends Omit<ProductsHeaderConfig, 'type'> {
  className?: string;
}

export function ProductsHeader({
  title,
  subtitle,
  className = '',
}: ProductsHeaderProps) {
  const { theme } = useTheme();

  return (
    <div className={`text-center mb-8 ${className}`}>
      <h1
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{
          color: theme.colors.text,
          textShadow: `0 0 20px ${theme.colors.primary}40`,
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto"
          style={{ color: theme.colors.textSecondary }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}


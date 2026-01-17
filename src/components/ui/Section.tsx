import type { SectionConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';
import { ComponentResolver } from '../resolver/ComponentResolver';

interface SectionProps extends Omit<SectionConfig, 'type'> {
  className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
  const { theme } = useTheme();

  return (
    <section
      className={`py-12 md:py-16 ${className}`}
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ color: theme.colors.text }}
          >
            {title}
          </h2>
        )}
        {children.map((child, index) => (
          <ComponentResolver key={child.id || index} config={child} />
        ))}
      </div>
    </section>
  );
}


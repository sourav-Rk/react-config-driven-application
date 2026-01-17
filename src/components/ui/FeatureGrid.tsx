import type { FeatureGridConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';
import { FeatureCard } from './FeatureCard';

interface FeatureGridProps extends Omit<FeatureGridConfig, 'type'> {
  className?: string;
}

export function FeatureGrid({
  features,
  columns = 3,
  className = '',
}: FeatureGridProps) {
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
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}


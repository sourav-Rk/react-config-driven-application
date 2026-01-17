import type{ HeadingConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface HeadingProps extends Omit<HeadingConfig, 'type'> {
  className?: string;
}

export function Heading({ text, level, className = '' }: HeadingProps) {
  const { theme } = useTheme();
  const levelClasses = {
    1: 'text-4xl mb-4',
    2: 'text-3xl mb-3',
    3: 'text-2xl mb-2',
    4: 'text-xl mb-2',
    5: 'text-lg mb-1',
    6: 'text-base mb-1',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`font-bold ${levelClasses[level]} ${className}`}
      style={{ color: theme.colors.text }}
    >
      {text}
    </Tag>
  );
}


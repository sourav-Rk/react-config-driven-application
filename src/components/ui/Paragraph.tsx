import type{ ParagraphConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface ParagraphProps extends Omit<ParagraphConfig, 'type'> {
  className?: string;
}

export function Paragraph({ text, className = '' }: ParagraphProps) {
  const { theme } = useTheme();
  
  return (
    <p
      className={`leading-relaxed ${className}`}
      style={{ color: theme.colors.text }}
    >
      {text}
    </p>
  );
}


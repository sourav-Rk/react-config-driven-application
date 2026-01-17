import { useState } from 'react';
import type { FaqAccordionConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface FaqAccordionProps extends Omit<FaqAccordionConfig, 'type'> {
  className?: string;
}

export function FaqAccordion({ items, className = '' }: FaqAccordionProps) {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`} style={{ gap: theme.spacing.md }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-lg border overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: theme.colors.surface,
              borderColor: isOpen ? theme.colors.primary : theme.colors.border,
              borderWidth: '1px',
              borderRadius: theme.borderRadius.md,
              boxShadow: isOpen
                ? `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.primary}15`
                : `0 2px 4px rgba(0,0,0,0.2)`,
            }}
          >
            {/* Question */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left p-5 flex items-center justify-between transition-colors"
              style={{
                color: theme.colors.text,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.background;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span className="font-semibold pr-4">{item.question}</span>
              <span
                className="text-xl transition-transform duration-300 flex-0"
                style={{
                  color: theme.colors.primary,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                ▼
              </span>
            </button>

            {/* Answer */}
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isOpen ? '500px' : '0',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div
                className="p-5 pt-0"
                style={{
                  color: theme.colors.textSecondary,
                  borderTopColor: theme.colors.border,
                  borderTopWidth: '1px',
                  paddingTop: theme.spacing.md,
                }}
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


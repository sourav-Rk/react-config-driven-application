import type { TestimonialGridConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface TestimonialGridProps extends Omit<TestimonialGridConfig, 'type'> {
  className?: string;
}

export function TestimonialGrid({
  testimonials,
  columns = 3,
  className = '',
}: TestimonialGridProps) {
  const { theme } = useTheme();

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div
      className={`grid ${gridClasses[columns]} gap-6 ${className}`}
      style={{ gap: theme.spacing.lg }}
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="p-6 rounded-lg border transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
            borderWidth: '1px',
            borderRadius: theme.borderRadius.lg,
            boxShadow: `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.secondary}05`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = theme.colors.secondary;
            e.currentTarget.style.boxShadow = `0 8px 12px rgba(0,0,0,0.4), 0 0 30px ${theme.colors.secondary}20`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = theme.colors.border;
            e.currentTarget.style.boxShadow = `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.secondary}05`;
          }}
        >
          {/* Rating */}
          {testimonial.rating && (
            <div className="mb-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="text-lg"
                  style={{
                    color: i < testimonial.rating! ? theme.colors.secondary : theme.colors.border,
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          )}

          {/* Message */}
          <p
            className="mb-4 italic leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            "{testimonial.message}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: theme.colors.border }}>
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
                style={{ borderColor: theme.colors.primary, borderWidth: '2px' }}
              />
            ) : (
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.background,
                }}
              >
                {testimonial.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <div
                className="font-semibold"
                style={{ color: theme.colors.text }}
              >
                {testimonial.name}
              </div>
              <div
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                {testimonial.role}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


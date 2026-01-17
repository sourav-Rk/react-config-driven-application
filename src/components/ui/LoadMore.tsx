import { useState } from 'react';
import type { LoadMoreConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface LoadMoreProps extends Omit<LoadMoreConfig, 'type'> {
  className?: string;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export function LoadMore({
  buttonText = 'Load More',
  className = '',
  onLoadMore,
  hasMore = true,
}: LoadMoreProps) {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);

  const handleClick = async (): Promise<void> => {
    if (loading || !hasMore) return;
    setLoading(true);
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    onLoadMore?.();
    setLoading(false);
  };

  if (!hasMore) {
    return (
      <div
        className={`text-center py-4 ${className}`}
        style={{ color: theme.colors.textSecondary }}
      >
        No more products to load
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <button
        onClick={handleClick}
        disabled={loading}
        className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
        style={{
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
          boxShadow: `0 0 15px ${theme.colors.primary}40`,
          borderColor: theme.colors.primary,
          borderWidth: '2px',
          borderRadius: theme.borderRadius.md,
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.boxShadow = `0 0 25px ${theme.colors.primary}60`;
            e.currentTarget.style.transform = 'scale(1.05)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 15px ${theme.colors.primary}40`;
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {loading ? 'Loading...' : buttonText}
      </button>
    </div>
  );
}


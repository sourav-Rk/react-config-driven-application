import { useState, useMemo } from 'react';
import type { ProductListConfig } from '../../config/types';
import { useProducts } from '../../hooks/useProducts';
import { useTheme } from '../../hooks/useTheme';
import { useProductFilters } from '../../hooks/useProductFilters';
import { ProductCard } from './ProductCard';
import type { Product } from '../../data/mockProducts';

interface ProductListProps extends Omit<ProductListConfig, 'type'> {
  className?: string;
}

export function ProductList({
  itemsPerRow = 3,
  className = '',
}: ProductListProps) {
  const { products, loading, error } = useProducts();
  const { theme } = useTheme();
  const { searchQuery, categoryFilter, sortBy } = useProductFilters();
  const [displayCount, setDisplayCount] = useState(6);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (categoryFilter && categoryFilter !== 'all') {
      filtered = filtered.filter(
        (product) => product.category === categoryFilter
      );
    }

    // Apply sorting
    if (sortBy) {
      switch (sortBy) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [products, searchQuery, categoryFilter, sortBy]);

  // Get displayed products
  const displayedProducts = filteredAndSortedProducts.slice(0, displayCount);
  const hasMore = displayedProducts.length < filteredAndSortedProducts.length;

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  if (loading) {
    return (
      <div className="text-center py-8" style={{ color: theme.colors.text }}>
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8" style={{ color: theme.colors.primary }}>
        Error: {error}
      </div>
    );
  }

  if (displayedProducts.length === 0) {
    return (
      <div className="text-center py-8" style={{ color: theme.colors.textSecondary }}>
        No products found matching your criteria.
      </div>
    );
  }

  return (
    <>
      <div
        className={`grid ${gridClasses[itemsPerRow]} gap-6 ${className}`}
        style={{ gap: theme.spacing.lg }}
      >
        {displayedProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setDisplayCount((prev) => prev + 6)}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
              boxShadow: `0 0 15px ${theme.colors.primary}40`,
              borderRadius: theme.borderRadius.md,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 25px ${theme.colors.primary}60`;
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 15px ${theme.colors.primary}40`;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

import { useState, useEffect, useMemo } from 'react';
import type { SearchFiltersConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';
import { useProductFilters } from '../../hooks/useProductFilters';
import { useProducts } from '../../hooks/useProducts';

interface SearchFiltersProps extends Omit<SearchFiltersConfig, 'type'> {
  className?: string;
}

export function SearchFilters({
  placeholder = 'Search products...',
  categories: configCategories = [],
  sortOptions = [
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Name: A to Z', value: 'name-asc' },
  ],
  className = '',
}: SearchFiltersProps) {
  const { theme } = useTheme();
  const { products } = useProducts();
  const {
    searchQuery,
    categoryFilter,
    sortBy,
    setSearchQuery,
    setCategoryFilter,
    setSortBy,
  } = useProductFilters();
  const [localSearch, setLocalSearch] = useState(searchQuery);

  // Get unique categories from products if not provided in config
  const categories = useMemo(() => {
    if (configCategories.length > 0) {
      return configCategories;
    }
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    return uniqueCategories;
  }, [configCategories, products]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(localSearch);
    }, 300);
    return () => clearTimeout(timer);
  }, [localSearch, setSearchQuery]);

  return (
    <div
      className={`flex flex-col md:flex-row gap-4 mb-8 ${className}`}
      style={{ gap: theme.spacing.md }}
    >
      {/* Search Input */}
      <div className="flex-1">
        <input
          type="text"
          placeholder={placeholder}
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none"
          style={{
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
            borderWidth: '1px',
            color: theme.colors.text,
            borderRadius: theme.borderRadius.md,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = theme.colors.primary;
            e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.primary}20`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = theme.colors.border;
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
      </div>

      {/* Category Tabs */}
      {categories.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setCategoryFilter('all')}
            className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
            style={{
              backgroundColor: categoryFilter === 'all' ? theme.colors.primary : theme.colors.surface,
              color: categoryFilter === 'all' ? theme.colors.background : theme.colors.text,
              borderColor: theme.colors.border,
              borderWidth: '1px',
              borderRadius: theme.borderRadius.md,
            }}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
              style={{
                backgroundColor: categoryFilter === category ? theme.colors.primary : theme.colors.surface,
                color: categoryFilter === category ? theme.colors.background : theme.colors.text,
                borderColor: theme.colors.border,
                borderWidth: '1px',
                borderRadius: theme.borderRadius.md,
              }}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Sort Dropdown */}
      {sortOptions.length > 0 && (
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none"
          style={{
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
            borderWidth: '1px',
            color: theme.colors.text,
            borderRadius: theme.borderRadius.md,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = theme.colors.primary;
            e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.colors.primary}20`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = theme.colors.border;
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <option value="">Sort by...</option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}


import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface ProductFiltersContextType {
  searchQuery: string;
  categoryFilter: string;
  sortBy: string;
  setSearchQuery: (query: string) => void;
  setCategoryFilter: (category: string) => void;
  setSortBy: (sort: string) => void;
  resetFilters: () => void;
}

const ProductFiltersContext = createContext<ProductFiltersContextType | null>(null);

interface ProductFiltersProviderProps {
  children: ReactNode;
}

export function ProductFiltersProvider({ children }: ProductFiltersProviderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('');

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setCategoryFilter('all');
    setSortBy('');
  }, []);

  return (
    <ProductFiltersContext.Provider
      value={{
        searchQuery,
        categoryFilter,
        sortBy,
        setSearchQuery,
        setCategoryFilter,
        setSortBy,
        resetFilters,
      }}
    >
      {children}
    </ProductFiltersContext.Provider>
  );
}

export function useProductFiltersContext(): ProductFiltersContextType {
  const context = useContext(ProductFiltersContext);
  if (!context) {
    throw new Error('useProductFiltersContext must be used within ProductFiltersProvider');
  }
  return context;
}


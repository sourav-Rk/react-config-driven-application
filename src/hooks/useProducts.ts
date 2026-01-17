import { useState, useEffect } from 'react';
import { mockProducts,type Product } from '../data/mockProducts';

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  getProductById: (id: number) => Product | undefined;
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setProducts(mockProducts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductById = (id: number): Product | undefined => {
    return products.find((product) => product.id === id);
  };

  return {
    products,
    loading,
    error,
    getProductById,
  };
}


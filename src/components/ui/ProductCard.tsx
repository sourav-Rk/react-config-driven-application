import type { Product } from '../../data/mockProducts';
import { useTheme } from '../../hooks/useTheme';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { theme } = useTheme();

  return (
    <div
      className="group rounded-lg border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        borderWidth: '1px',
        borderRadius: theme.borderRadius.lg,
        boxShadow: `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.primary}05`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = theme.colors.primary;
        e.currentTarget.style.boxShadow = `
          0 8px 16px rgba(0,0,0,0.5),
          0 0 30px ${theme.colors.primary}30,
          0 0 60px ${theme.colors.primary}15
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = theme.colors.border;
        e.currentTarget.style.boxShadow = `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.primary}05`;
      }}
    >
      {/* Image Container with Category Badge */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: theme.colors.background }}
          >
            <span style={{ color: theme.colors.textSecondary }}>No Image</span>
          </div>
        )}
        
        {/* Category Badge Overlay */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
          style={{
            backgroundColor: `${theme.colors.primary}20`,
            color: theme.colors.primary,
            borderWidth: '1px',
            borderColor: `${theme.colors.primary}50`,
            boxShadow: `0 0 10px ${theme.colors.primary}30`,
          }}
        >
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5" style={{ padding: theme.spacing.lg }}>
        {/* Product Name */}
        <h3
          className="text-xl font-bold mb-2 transition-colors duration-300"
          style={{
            color: theme.colors.text,
          }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm mb-4 line-clamp-2"
          style={{
            color: theme.colors.textSecondary,
            minHeight: '2.5rem',
          }}
        >
          {product.description}
        </p>

        {/* Price and CTA Row */}
        <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: theme.colors.border }}>
          {/* Price */}
          <div className="flex flex-col">
            <span
              className="text-2xl font-bold"
              style={{
                color: theme.colors.primary,
                textShadow: `0 0 10px ${theme.colors.primary}40`,
              }}
            >
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            className="px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
              boxShadow: `0 0 15px ${theme.colors.primary}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 25px ${theme.colors.primary}60, 0 0 50px ${theme.colors.primary}30`;
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 15px ${theme.colors.primary}40`;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

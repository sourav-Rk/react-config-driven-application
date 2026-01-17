import { Link, useLocation } from 'react-router-dom';
import { useAppConfig } from '../../hooks/useAppConfig';
import { useTheme } from '../../hooks/useTheme';

export function Navigation() {
  const config = useAppConfig();
  const { theme } = useTheme();
  const location = useLocation();

  const isActive = (route: string): boolean => {
    return location.pathname === route;
  };

  return (
    <nav
      className="border-b"
      style={{
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.surface,
      }}
    >
      <div
        className="container mx-auto px-4 py-4"
        style={{
          padding: theme.spacing.md,
        }}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold"
            style={{ color: theme.colors.primary }}
          >
            Config-Driven App
          </Link>
          <ul className="flex space-x-6">
            {config.navigation.items.map((item) => (
              <li key={item.route}>
                <Link
                  to={item.route}
                  className="font-medium transition-colors"
                  style={{
                    color: isActive(item.route)
                      ? theme.colors.primary
                      : theme.colors.textSecondary,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.route)) {
                      e.currentTarget.style.color = theme.colors.primary;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.route)) {
                      e.currentTarget.style.color = theme.colors.textSecondary;
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}


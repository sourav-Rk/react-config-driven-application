import type { ProfileHeaderConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';
import { useUserProfile } from '../../hooks/useUserProfile';

interface ProfileHeaderProps extends Omit<ProfileHeaderConfig, 'type'> {
  className?: string;
}

export function ProfileHeader({
  showEditButton = true,
  badge,
  className = '',
}: ProfileHeaderProps) {
  const { theme } = useTheme();
  const { user } = useUserProfile();

  if (!user) {
    return null;
  }

  return (
    <div
      className={`p-6 rounded-lg border ${className}`}
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        borderWidth: '1px',
        borderRadius: theme.borderRadius.lg,
        boxShadow: `0 4px 6px rgba(0,0,0,0.3), 0 0 20px ${theme.colors.primary}10`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Avatar */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
            boxShadow: `0 0 30px ${theme.colors.primary}50`,
          }}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>

        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-3">
            <h2
              className="text-3xl font-bold"
              style={{ color: theme.colors.text }}
            >
              {user.name}
            </h2>
            {badge && (
              <span
                className="px-3 py-1 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.background,
                  boxShadow: `0 0 15px ${theme.colors.secondary}40`,
                }}
              >
                {badge}
              </span>
            )}
          </div>
          <p
            className="text-lg mb-4"
            style={{ color: theme.colors.textSecondary }}
          >
            {user.email}
          </p>
          {user.role && (
            <p
              className="text-sm"
              style={{ color: theme.colors.textSecondary }}
            >
              {user.role}
            </p>
          )}
        </div>

        {/* Edit Button */}
        {showEditButton && (
          <button
            className="px-6 py-2 rounded-lg font-semibold transition-all duration-300"
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
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}


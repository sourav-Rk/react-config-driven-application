import { useUserProfile } from '../../hooks/useUserProfile';
import { useTheme } from '../../hooks/useTheme';

export function ProfileCard() {
  const { user, loading, error } = useUserProfile();
  const { theme } = useTheme();

  if (loading) {
    return (
      <div className="text-center py-8" style={{ color: theme.colors.text }}>
        Loading profile...
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

  if (!user) {
    return (
      <div className="text-center py-8" style={{ color: theme.colors.text }}>
        No user data available
      </div>
    );
  }

  return (
    <div
      className="rounded-lg shadow-md p-8"
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        borderWidth: '1px',
        borderRadius: theme.borderRadius.lg,
      }}
    >
      <div className="flex items-center mb-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mr-4"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
          }}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2
            className="text-2xl font-bold"
            style={{ color: theme.colors.text }}
          >
            {user.name}
          </h2>
          <p
            className="text-sm"
            style={{ color: theme.colors.textSecondary }}
          >
            {user.email}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3
            className="font-semibold mb-1"
            style={{ color: theme.colors.text }}
          >
            Role
          </h3>
          <p style={{ color: theme.colors.textSecondary }}>{user.role}</p>
        </div>

        {user.bio && (
          <div>
            <h3
              className="font-semibold mb-1"
              style={{ color: theme.colors.text }}
            >
              Bio
            </h3>
            <p style={{ color: theme.colors.textSecondary }}>{user.bio}</p>
          </div>
        )}

        <div>
          <h3
            className="font-semibold mb-1"
            style={{ color: theme.colors.text }}
          >
            Member Since
          </h3>
          <p style={{ color: theme.colors.textSecondary }}>{user.joinDate}</p>
        </div>
      </div>
    </div>
  );
}


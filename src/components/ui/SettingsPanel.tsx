import { useState } from 'react';
import type { SettingsPanelConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface SettingsPanelProps extends Omit<SettingsPanelConfig, 'type'> {
  className?: string;
}

const defaultSettings = [
  { label: 'Email Notifications', type: 'toggle' as const, defaultValue: true },
  { label: 'Push Notifications', type: 'toggle' as const, defaultValue: false },
  { label: 'SMS Notifications', type: 'toggle' as const, defaultValue: false },
  { label: 'Dark Mode', type: 'toggle' as const, defaultValue: true },
];

export function SettingsPanel({
  settings = defaultSettings,
  className = '',
}: SettingsPanelProps) {
  const { theme } = useTheme();
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>(
    settings.reduce((acc, setting) => {
      if (setting.type === 'toggle') {
        acc[setting.label] = setting.defaultValue ?? false;
      }
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleToggle = (label: string): void => {
    setToggleStates((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleButtonClick = (action?: string): void => {
    if (action === 'logout') {
      // Handle logout logic
      console.log('Logout clicked');
    }
  };

  return (
    <div
      className={`p-6 rounded-lg border ${className}`}
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        borderWidth: '1px',
        borderRadius: theme.borderRadius.lg,
      }}
    >
      <h3
        className="text-xl font-bold mb-6"
        style={{ color: theme.colors.text }}
      >
        Settings
      </h3>
      <div className="space-y-4">
        {settings.map((setting, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b"
            style={{ borderColor: theme.colors.border }}
          >
            <span
              className="font-medium"
              style={{ color: theme.colors.text }}
            >
              {setting.label}
            </span>
            {setting.type === 'toggle' ? (
              <button
                onClick={() => handleToggle(setting.label)}
                className="relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  backgroundColor: toggleStates[setting.label]
                    ? theme.colors.primary
                    : theme.colors.background,
                  borderColor: theme.colors.border,
                  borderWidth: '2px',
                }}
              >
                <span
                  className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: theme.colors.background,
                    transform: toggleStates[setting.label]
                      ? 'translateX(24px)'
                      : 'translateX(0)',
                    boxShadow: toggleStates[setting.label]
                      ? `0 0 10px ${theme.colors.primary}50`
                      : 'none',
                  }}
                />
              </button>
            ) : (
              <button
                onClick={() => handleButtonClick(setting.action)}
                className="px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                style={{
                  backgroundColor:
                    setting.action === 'logout'
                      ? theme.colors.secondary
                      : theme.colors.primary,
                  color: theme.colors.background,
                  borderRadius: theme.borderRadius.md,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {setting.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


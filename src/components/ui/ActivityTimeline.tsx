import type { ActivityTimelineConfig } from '../../config/types';
import { useTheme } from '../../hooks/useTheme';

interface ActivityTimelineProps extends Omit<ActivityTimelineConfig, 'type'> {
  className?: string;
}

const defaultActivities = [
  {
    title: 'Order Placed',
    description: 'You placed an order for Laptop Pro',
    time: '2 hours ago',
    icon: '📦',
  },
  {
    title: 'Profile Updated',
    description: 'You updated your profile information',
    time: '1 day ago',
    icon: '✏️',
  },
  {
    title: 'Product Reviewed',
    description: 'You reviewed Wireless Mouse',
    time: '3 days ago',
    icon: '⭐',
  },
  {
    title: 'Account Created',
    description: 'You joined our platform',
    time: '1 month ago',
    icon: '🎉',
  },
];

export function ActivityTimeline({
  activities = defaultActivities,
  className = '',
}: ActivityTimelineProps) {
  const { theme } = useTheme();

  return (
    <div className={`space-y-6 ${className}`}>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex gap-4 items-start relative"
        >
          {/* Icon Circle */}
          <div
            className="flex-0 w-12 h-12 rounded-full flex items-center justify-center text-xl relative z-10"
            style={{
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.secondary,
              borderWidth: '2px',
              boxShadow: `0 0 20px ${theme.colors.secondary}30`,
            }}
          >
            {activity.icon || '•'}
          </div>

          {/* Connecting Line (except last) */}
          {index < activities.length - 1 && (
            <div
              className="absolute left-6 top-12 w-0.5"
              style={{
                height: 'calc(100% + 1.5rem)',
                backgroundColor: theme.colors.border,
              }}
            />
          )}

          {/* Activity Content */}
          <div
            className="flex-1 pb-6"
            style={{
              paddingTop: theme.spacing.xs,
            }}
          >
            <div className="flex items-start justify-between mb-1">
              <h3
                className="font-semibold"
                style={{ color: theme.colors.text }}
              >
                {activity.title}
              </h3>
              <span
                className="text-xs ml-4"
                style={{ color: theme.colors.textSecondary }}
              >
                {activity.time}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: theme.colors.textSecondary }}
            >
              {activity.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}


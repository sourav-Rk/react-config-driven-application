import type { AppConfig } from "../types";

export const profilePage: AppConfig["pages"]["profile"] = {
  route: "/profile",
  title: "Profile",
  components: [
    {
      type: "container",
      children: [
        {
          type: "profileHeader",
          showEditButton: true,
          badge: "Pro User",
        },
        {
          type: "section",
          title: "Account Statistics",
          children: [
            {
              type: "accountStats",
              stats: [
                {
                  label: "Orders",
                  value: "12",
                  icon: "📦",
                },
                {
                  label: "Wishlist",
                  value: "8",
                  icon: "❤️",
                },
                {
                  label: "Wallet Balance",
                  value: "$1,250",
                  icon: "💰",
                },
                {
                  label: "Reviews",
                  value: "24",
                  icon: "⭐",
                },
              ],
              columns: 4,
            },
          ],
        },
        {
          type: "section",
          title: "Profile Completion",
          children: [
            {
              type: "progressBar",
              label: "Profile Completion",
              value: 85,
              max: 100,
              showPercentage: true,
            },
          ],
        },
        {
          type: "section",
          title: "Recent Activity",
          children: [
            {
              type: "activityTimeline",
            },
          ],
        },
        {
          type: "section",
          title: "Settings",
          children: [
            {
              type: "settingsPanel",
              settings: [
                {
                  label: "Email Notifications",
                  type: "toggle",
                  defaultValue: true,
                },
                {
                  label: "Push Notifications",
                  type: "toggle",
                  defaultValue: false,
                },
                {
                  label: "SMS Notifications",
                  type: "toggle",
                  defaultValue: false,
                },
                { label: "Logout", type: "button", action: "logout" },
              ],
            },
          ],
        },
      ],
      maxWidth: "lg",
    },
  ],
};

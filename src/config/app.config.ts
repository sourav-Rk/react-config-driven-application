import type{ AppConfig } from './types';

export const appConfig: AppConfig = {
  theme: {
    colors: {
      primary: '#00C2FF',
      secondary: '#A855F7',
      background: '#050A12',
      surface: '#0B1220',
      text: '#F8FAFC',
      textSecondary: '#94A3B8',
      border: 'rgba(255,255,255,0.12)',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
    },
  },
  pages: {
    home: {
      route: '/',
      title: 'Home',
      components: [
        {
          type: 'hero',
          title: 'Build UI Faster with Config-Driven React',
          subtitle: 'Create dynamic, maintainable user interfaces where structure, content, and styling are controlled through configuration. No hardcoded layouts, no page-specific components—just clean, reusable architecture.',
          buttons: [
            {
              text: 'Explore Products',
              variant: 'primary',
              route: '/products',
            },
            {
              text: 'View Profile',
              variant: 'outline',
              route: '/profile',
            },
          ],
        },
        {
          type: 'section',
          title: 'Features',
          children: [
            {
              type: 'featureGrid',
              features: [
                {
                  title: 'Config Driven Pages',
                  description: 'Define entire page structures through configuration. Add new pages without writing a single line of component code.',
                  icon: '📄',
                },
                {
                  title: 'Reusable Components',
                  description: 'Build once, use everywhere. Generic components that adapt to any configuration and page context.',
                  icon: '🧩',
                },
                {
                  title: 'Theme Controlled Styling',
                  description: 'Centralized theme management with support for dynamic color schemes, spacing, and design tokens.',
                  icon: '🎨',
                },
              ],
              columns: 3,
            },
          ],
        },
        {
          type: 'section',
          title: 'How it Works',
          children: [
            {
              type: 'steps',
              steps: [
                {
                  number: 1,
                  title: 'Define config',
                  description: 'Create your page structure, components, and content in a single configuration file. No JSX needed.',
                },
                {
                  number: 2,
                  title: 'Resolver renders components',
                  description: 'The ComponentResolver automatically maps config types to React components using a registry pattern.',
                },
                {
                  number: 3,
                  title: 'Theme applies styles',
                  description: 'All colors, spacing, and styling come from your theme configuration, ensuring consistency across the application.',
                },
              ],
            },
          ],
        },
        {
          type: 'section',
          title: 'By The Numbers',
          children: [
            {
              type: 'statsGrid',
              stats: [
                {
                  label: 'Reusable Components',
                  value: '50+',
                  icon: '🧩',
                },
                {
                  label: 'Config-Driven Pages',
                  value: '3',
                  icon: '📄',
                },
                {
                  label: 'Theme Controlled',
                  value: '100%',
                  icon: '🎨',
                },
                {
                  label: 'Hardcoded UI',
                  value: '0',
                  icon: '✅',
                },
              ],
              columns: 4,
            },
          ],
        },
        {
          type: 'section',
          title: 'What Our Users Say',
          children: [
            {
              type: 'testimonialGrid',
              testimonials: [
                {
                  name: 'Sarah Johnson',
                  role: 'Frontend Developer',
                  message: 'This config-driven approach has revolutionized how we build UIs. No more hardcoded components!',
                  rating: 5,
                },
                {
                  name: 'Michael Chen',
                  role: 'Tech Lead',
                  message: 'The theme system is incredibly flexible. We can switch entire color schemes with a single config change.',
                  rating: 5,
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'Product Designer',
                  message: 'As a designer, I love being able to modify the UI without touching code. Pure configuration magic!',
                  rating: 5,
                },
              ],
              columns: 3,
            },
          ],
        },
        {
          type: 'section',
          title: 'Frequently Asked Questions',
          children: [
            {
              type: 'faqAccordion',
              items: [
                {
                  question: 'How do I add a new page?',
                  answer: 'Simply add a new page configuration object to app.config.ts with route, title, and components. The PageRenderer will automatically create the route and render the page.',
                },
                {
                  question: 'Can I customize the theme?',
                  answer: 'Yes! All theme values (colors, spacing, border radius) are defined in app.config.ts. Change them there and the entire app updates automatically.',
                },
                {
                  question: 'Are components reusable?',
                  answer: 'Absolutely! All components are generic and reusable. They accept props from config and adapt to any context. No page-specific hardcoding.',
                },
                {
                  question: 'How does the ComponentResolver work?',
                  answer: 'The ComponentResolver uses a registry pattern to map config component types to React components. When it encounters a config type like "hero", it renders the corresponding Hero component with the config props.',
                },
              ],
            },
          ],
        },
        {
          type: 'section',
          children: [
            {
              type: 'ctaCard',
              text: 'Add new pages by editing config only',
              buttonText: 'Get Started',
              buttonRoute: '/products',
              buttonVariant: 'primary',
            },
          ],
        },
      ],
    },
    products: {
      route: '/products',
      title: 'Products',
      components: [
        {
          type: 'container',
          children: [
            {
              type: 'productsHeader',
              title: 'Our Products',
              subtitle: 'Discover amazing products with powerful search and filtering',
            },
            {
              type: 'searchFilters',
              placeholder: 'Search products...',
              categories: ['Electronics', 'Accessories', 'Furniture'],
              sortOptions: [
                { label: 'Price: Low to High', value: 'price-asc' },
                { label: 'Price: High to Low', value: 'price-desc' },
                { label: 'Name: A to Z', value: 'name-asc' },
              ],
            },
            {
              type: 'productList',
              itemsPerRow: 3,
            },
            {
              type: 'promoBanner',
              title: 'Special Offer!',
              description: 'Get 20% off on all electronics. Limited time only!',
              buttonText: 'Shop Now',
              buttonRoute: '/products',
            },
          ],
          maxWidth: 'xl',
        },
      ],
    },
    profile: {
      route: '/profile',
      title: 'Profile',
      components: [
        {
          type: 'container',
          children: [
            {
              type: 'profileHeader',
              showEditButton: true,
              badge: 'Pro User',
            },
            {
              type: 'section',
              title: 'Account Statistics',
              children: [
                {
                  type: 'accountStats',
                  stats: [
                    {
                      label: 'Orders',
                      value: '12',
                      icon: '📦',
                    },
                    {
                      label: 'Wishlist',
                      value: '8',
                      icon: '❤️',
                    },
                    {
                      label: 'Wallet Balance',
                      value: '$1,250',
                      icon: '💰',
                    },
                    {
                      label: 'Reviews',
                      value: '24',
                      icon: '⭐',
                    },
                  ],
                  columns: 4,
                },
              ],
            },
            {
              type: 'section',
              title: 'Profile Completion',
              children: [
                {
                  type: 'progressBar',
                  label: 'Profile Completion',
                  value: 85,
                  max: 100,
                  showPercentage: true,
                },
              ],
            },
            {
              type: 'section',
              title: 'Recent Activity',
              children: [
                {
                  type: 'activityTimeline',
                },
              ],
            },
            {
              type: 'section',
              title: 'Settings',
              children: [
                {
                  type: 'settingsPanel',
                  settings: [
                    { label: 'Email Notifications', type: 'toggle', defaultValue: true },
                    { label: 'Push Notifications', type: 'toggle', defaultValue: false },
                    { label: 'SMS Notifications', type: 'toggle', defaultValue: false },
                    { label: 'Logout', type: 'button', action: 'logout' },
                  ],
                },
              ],
            },
          ],
          maxWidth: 'lg',
        },
      ],
    },
  },
  navigation: {
    items: [
      { label: 'Home', route: '/' },
      { label: 'Products', route: '/products' },
      { label: 'Profile', route: '/profile' },
    ],
  },
};


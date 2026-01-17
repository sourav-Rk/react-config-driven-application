// Base component configuration type
export type ComponentType =
  | 'button'
  | 'heading'
  | 'paragraph'
  | 'card'
  | 'container'
  | 'productList'
  | 'profileCard'
  | 'navigation'
  | 'hero'
  | 'section'
  | 'featureGrid'
  | 'featureCard'
  | 'steps'
  | 'ctaCard'
  | 'statsGrid'
  | 'testimonialGrid'
  | 'faqAccordion'
  | 'productsHeader'
  | 'searchFilters'
  | 'promoBanner'
  | 'loadMore'
  | 'profileHeader'
  | 'accountStats'
  | 'activityTimeline'
  | 'progressBar'
  | 'settingsPanel';

// Base component config interface
export interface BaseComponentConfig {
  type: ComponentType;
  id?: string;
  className?: string;
}

// Heading component config
export interface HeadingConfig extends BaseComponentConfig {
  type: 'heading';
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

// Paragraph component config
export interface ParagraphConfig extends BaseComponentConfig {
  type: 'paragraph';
  text: string;
}

// Button component config
export interface ButtonConfig extends BaseComponentConfig {
  type: 'button';
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: string; // Action identifier
}

// Card component config
export interface CardConfig extends BaseComponentConfig {
  type: 'card';
  title?: string;
  content?: string;
  children?: ComponentConfig[];
}

// Container component config
export interface ContainerConfig extends BaseComponentConfig {
  type: 'container';
  children: ComponentConfig[];
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

// Product List component config
export interface ProductListConfig extends BaseComponentConfig {
  type: 'productList';
  itemsPerRow?: 1 | 2 | 3 | 4;
}

// Profile Card component config
export interface ProfileCardConfig extends BaseComponentConfig {
  type: 'profileCard';
}

// Navigation component config
export interface NavigationConfig extends BaseComponentConfig {
  type: 'navigation';
}

// Hero component config
export interface HeroConfig extends BaseComponentConfig {
  type: 'hero';
  title: string;
  subtitle?: string;
  buttons?: Array<{
    text: string;
    variant?: 'primary' | 'secondary' | 'outline';
    route?: string;
  }>;
}

// Section component config (wrapper for sections)
export interface SectionConfig extends BaseComponentConfig {
  type: 'section';
  title?: string;
  children: ComponentConfig[];
}

// Feature Grid component config
export interface FeatureGridConfig extends BaseComponentConfig {
  type: 'featureGrid';
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  columns?: 1 | 2 | 3 | 4;
}

// Feature Card component config
export interface FeatureCardConfig extends BaseComponentConfig {
  type: 'featureCard';
  title: string;
  description: string;
  icon?: string;
}

// Steps component config (timeline/steps)
export interface StepsConfig extends BaseComponentConfig {
  type: 'steps';
  steps: Array<{
    number: number | string;
    title: string;
    description: string;
  }>;
}

// CTA Card component config
export interface CtaCardConfig extends BaseComponentConfig {
  type: 'ctaCard';
  text: string;
  buttonText?: string;
  buttonRoute?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline';
}

// Stats Grid component config
export interface StatsGridConfig extends BaseComponentConfig {
  type: 'statsGrid';
  stats: Array<{
    label: string;
    value: string;
    icon?: string;
  }>;
  columns?: 1 | 2 | 3 | 4;
}

// Testimonial Grid component config
export interface TestimonialGridConfig extends BaseComponentConfig {
  type: 'testimonialGrid';
  testimonials: Array<{
    name: string;
    role: string;
    message: string;
    rating?: number;
    avatar?: string;
  }>;
  columns?: 1 | 2 | 3;
}

// FAQ Accordion component config
export interface FaqAccordionConfig extends BaseComponentConfig {
  type: 'faqAccordion';
  items: Array<{
    question: string;
    answer: string;
  }>;
}

// Products Header component config
export interface ProductsHeaderConfig extends BaseComponentConfig {
  type: 'productsHeader';
  title: string;
  subtitle?: string;
}

// Search Filters component config
export interface SearchFiltersConfig extends BaseComponentConfig {
  type: 'searchFilters';
  placeholder?: string;
  categories?: string[];
  sortOptions?: Array<{
    label: string;
    value: string;
  }>;
}

// Promo Banner component config
export interface PromoBannerConfig extends BaseComponentConfig {
  type: 'promoBanner';
  title: string;
  description?: string;
  buttonText?: string;
  buttonRoute?: string;
}

// Load More component config
export interface LoadMoreConfig extends BaseComponentConfig {
  type: 'loadMore';
  buttonText?: string;
  itemsPerLoad?: number;
}

// Profile Header component config
export interface ProfileHeaderConfig extends BaseComponentConfig {
  type: 'profileHeader';
  showEditButton?: boolean;
  badge?: string;
}

// Account Stats component config
export interface AccountStatsConfig extends BaseComponentConfig {
  type: 'accountStats';
  stats: Array<{
    label: string;
    value: string;
    icon?: string;
  }>;
  columns?: 1 | 2 | 3 | 4;
}

// Activity Timeline component config
export interface ActivityTimelineConfig extends BaseComponentConfig {
  type: 'activityTimeline';
  activities?: Array<{
    title: string;
    description: string;
    time: string;
    icon?: string;
  }>;
}

// Progress Bar component config
export interface ProgressBarConfig extends BaseComponentConfig {
  type: 'progressBar';
  label: string;
  value: number;
  max?: number;
  showPercentage?: boolean;
}

// Settings Panel component config
export interface SettingsPanelConfig extends BaseComponentConfig {
  type: 'settingsPanel';
  settings?: Array<{
    label: string;
    type: 'toggle' | 'button';
    defaultValue?: boolean;
    action?: string;
  }>;
}

// Union type for all component configs
export type ComponentConfig =
  | HeadingConfig
  | ParagraphConfig
  | ButtonConfig
  | CardConfig
  | ContainerConfig
  | ProductListConfig
  | ProfileCardConfig
  | NavigationConfig
  | HeroConfig
  | SectionConfig
  | FeatureGridConfig
  | FeatureCardConfig
  | StepsConfig
  | CtaCardConfig
  | StatsGridConfig
  | TestimonialGridConfig
  | FaqAccordionConfig
  | ProductsHeaderConfig
  | SearchFiltersConfig
  | PromoBannerConfig
  | LoadMoreConfig
  | ProfileHeaderConfig
  | AccountStatsConfig
  | ActivityTimelineConfig
  | ProgressBarConfig
  | SettingsPanelConfig;

// Layout configuration
export interface LayoutConfig {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg';
}

// Page configuration
export interface PageConfig {
  route: string;
  title: string;
  components: ComponentConfig[];
  layout?: LayoutConfig;
}

// Theme configuration
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

// Navigation item
export interface NavigationItem {
  label: string;
  route: string;
}

// Application configuration
export interface AppConfig {
  theme: ThemeConfig;
  pages: Record<string, PageConfig>;
  navigation: {
    items: NavigationItem[];
  };
}


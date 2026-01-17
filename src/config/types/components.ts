import type {
  BaseComponentConfig,
  Columns,
  Variant,
  StatItem,
  CtaButton,
} from "./shared";

// Component configs
export interface HeadingConfig extends BaseComponentConfig {
  type: "heading";
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface ParagraphConfig extends BaseComponentConfig {
  type: "paragraph";
  text: string;
}

export interface ButtonConfig extends BaseComponentConfig {
  type: "button";
  text: string;
  variant?: Variant;
  onClick?: string; // Action identifier
}

export interface CardConfig extends BaseComponentConfig {
  type: "card";
  title?: string;
  content?: string;
  children?: ComponentConfig[];
}

export interface ContainerConfig extends BaseComponentConfig {
  type: "container";
  children: ComponentConfig[];
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

export interface ProductListConfig extends BaseComponentConfig {
  type: "productList";
  itemsPerRow?: 1 | 2 | 3 | 4;
}

export interface ProfileCardConfig extends BaseComponentConfig {
  type: "profileCard";
}

export interface NavigationConfig extends BaseComponentConfig {
  type: "navigation";
}

export interface HeroConfig extends BaseComponentConfig {
  type: "hero";
  title: string;
  subtitle?: string;
  buttons?: Array<{
    text: string;
    variant?: Variant;
    route?: string;
  }>;
}

export interface SectionConfig extends BaseComponentConfig {
  type: "section";
  title?: string;
  children: ComponentConfig[];
}

export interface FeatureGridConfig extends BaseComponentConfig {
  type: "featureGrid";
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  columns?: Columns;
}

export interface FeatureCardConfig extends BaseComponentConfig {
  type: "featureCard";
  title: string;
  description: string;
  icon?: string;
}

export interface StepsConfig extends BaseComponentConfig {
  type: "steps";
  steps: Array<{
    number: number | string;
    title: string;
    description: string;
  }>;
}

export interface CtaCardConfig extends BaseComponentConfig, CtaButton {
  type: "ctaCard";
  text: string;
}

export interface StatsGridConfig extends BaseComponentConfig {
  type: "statsGrid";
  stats: StatItem[];
  columns?: Columns;
}

export interface TestimonialGridConfig extends BaseComponentConfig {
  type: "testimonialGrid";
  testimonials: Array<{
    name: string;
    role: string;
    message: string;
    rating?: number;
    avatar?: string;
  }>;
  columns?: 1 | 2 | 3;
}

export interface FaqAccordionConfig extends BaseComponentConfig {
  type: "faqAccordion";
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ProductsHeaderConfig extends BaseComponentConfig {
  type: "productsHeader";
  title: string;
  subtitle?: string;
}

export interface SearchFiltersConfig extends BaseComponentConfig {
  type: "searchFilters";
  placeholder?: string;
  categories?: string[];
  sortOptions?: Array<{
    label: string;
    value: string;
  }>;
}

export interface PromoBannerConfig extends BaseComponentConfig, CtaButton {
  type: "promoBanner";
  title: string;
  description?: string;
}

export interface LoadMoreConfig extends BaseComponentConfig {
  type: "loadMore";
  buttonText?: string;
  itemsPerLoad?: number;
}

export interface ProfileHeaderConfig extends BaseComponentConfig {
  type: "profileHeader";
  showEditButton?: boolean;
  badge?: string;
}

export interface AccountStatsConfig extends BaseComponentConfig {
  type: "accountStats";
  stats: StatItem[];
  columns?: Columns;
}

export interface ActivityTimelineConfig extends BaseComponentConfig {
  type: "activityTimeline";
  activities?: Array<{
    title: string;
    description: string;
    time: string;
    icon?: string;
  }>;
}

export interface ProgressBarConfig extends BaseComponentConfig {
  type: "progressBar";
  label: string;
  value: number;
  max?: number;
  showPercentage?: boolean;
}

export interface SettingsPanelConfig extends BaseComponentConfig {
  type: "settingsPanel";
  settings?: Array<{
    label: string;
    type: "toggle" | "button";
    defaultValue?: boolean;
    action?: string;
  }>;
}


export interface ComponentMap {
  heading: HeadingConfig;
  paragraph: ParagraphConfig;
  button: ButtonConfig;
  card: CardConfig;
  container: ContainerConfig;
  productList: ProductListConfig;
  profileCard: ProfileCardConfig;
  navigation: NavigationConfig;
  hero: HeroConfig;
  section: SectionConfig;
  featureGrid: FeatureGridConfig;
  featureCard: FeatureCardConfig;
  steps: StepsConfig;
  ctaCard: CtaCardConfig;
  statsGrid: StatsGridConfig;
  testimonialGrid: TestimonialGridConfig;
  faqAccordion: FaqAccordionConfig;
  productsHeader: ProductsHeaderConfig;
  searchFilters: SearchFiltersConfig;
  promoBanner: PromoBannerConfig;
  loadMore: LoadMoreConfig;
  profileHeader: ProfileHeaderConfig;
  accountStats: AccountStatsConfig;
  activityTimeline: ActivityTimelineConfig;
  progressBar: ProgressBarConfig;
  settingsPanel: SettingsPanelConfig;
}

export type ComponentType = keyof ComponentMap;
export type ComponentConfig = ComponentMap[keyof ComponentMap];

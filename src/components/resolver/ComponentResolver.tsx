import React from 'react';
import type{ ComponentConfig } from '../../config/types';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { ProductList } from '../ui/ProductList';
import { ProfileCard } from '../ui/ProfileCard';
import { Hero } from '../ui/Hero';
import { Section } from '../ui/Section';
import { FeatureGrid } from '../ui/FeatureGrid';
import { FeatureCard } from '../ui/FeatureCard';
import { Steps } from '../ui/Steps';
import { CtaCard } from '../ui/CtaCard';
import { StatsGrid } from '../ui/StatsGrid';
import { TestimonialGrid } from '../ui/TestimonialGrid';
import { FaqAccordion } from '../ui/FaqAccordion';
import { ProductsHeader } from '../ui/ProductsHeader';
import { SearchFilters } from '../ui/SearchFilters';
import { PromoBanner } from '../ui/PromoBanner';
import { LoadMore } from '../ui/LoadMore';
import { ProfileHeader } from '../ui/ProfileHeader';
import { AccountStats } from '../ui/AccountStats';
import { ActivityTimeline } from '../ui/ActivityTimeline';
import { ProgressBar } from '../ui/ProgressBar';
import { SettingsPanel } from '../ui/SettingsPanel';
import type{
  HeadingConfig,
  ParagraphConfig,
  ButtonConfig,
  CardConfig,
  ContainerConfig,
  ProductListConfig,
  ProfileCardConfig,
  HeroConfig,
  SectionConfig,
  FeatureGridConfig,
  FeatureCardConfig,
  StepsConfig,
  CtaCardConfig,
  StatsGridConfig,
  TestimonialGridConfig,
  FaqAccordionConfig,
  ProductsHeaderConfig,
  SearchFiltersConfig,
  PromoBannerConfig,
  LoadMoreConfig,
  ProfileHeaderConfig,
  AccountStatsConfig,
  ActivityTimelineConfig,
  ProgressBarConfig,
  SettingsPanelConfig,
} from '../../config/types';

interface ComponentResolverProps {
  config: ComponentConfig;
}

// Component registry type
type ComponentRegistry = {
  [K in ComponentConfig['type']]: (props: ExtractComponentProps<K>) => React.ReactElement;
};

// Extract component props based on type
type ExtractComponentProps<T extends ComponentConfig['type']> = 
  T extends 'heading' ? Omit<HeadingConfig, 'type'> :
  T extends 'paragraph' ? Omit<ParagraphConfig, 'type'> :
  T extends 'button' ? Omit<ButtonConfig, 'type'> & { onClick?: () => void } :
  T extends 'card' ? Omit<CardConfig, 'type'> :
  T extends 'container' ? Omit<ContainerConfig, 'type'> :
  T extends 'productList' ? Omit<ProductListConfig, 'type'> :
  T extends 'profileCard' ? Omit<ProfileCardConfig, 'type'> :
  T extends 'hero' ? Omit<HeroConfig, 'type'> :
  T extends 'section' ? Omit<SectionConfig, 'type'> :
  T extends 'featureGrid' ? Omit<FeatureGridConfig, 'type'> :
  T extends 'featureCard' ? Omit<FeatureCardConfig, 'type'> :
  T extends 'steps' ? Omit<StepsConfig, 'type'> :
  T extends 'ctaCard' ? Omit<CtaCardConfig, 'type'> :
  T extends 'statsGrid' ? Omit<StatsGridConfig, 'type'> :
  T extends 'testimonialGrid' ? Omit<TestimonialGridConfig, 'type'> :
  T extends 'faqAccordion' ? Omit<FaqAccordionConfig, 'type'> :
  T extends 'productsHeader' ? Omit<ProductsHeaderConfig, 'type'> :
  T extends 'searchFilters' ? Omit<SearchFiltersConfig, 'type'> :
  T extends 'promoBanner' ? Omit<PromoBannerConfig, 'type'> :
  T extends 'loadMore' ? Omit<LoadMoreConfig, 'type'> :
  T extends 'profileHeader' ? Omit<ProfileHeaderConfig, 'type'> :
  T extends 'accountStats' ? Omit<AccountStatsConfig, 'type'> :
  T extends 'activityTimeline' ? Omit<ActivityTimelineConfig, 'type'> :
  T extends 'progressBar' ? Omit<ProgressBarConfig, 'type'> :
  T extends 'settingsPanel' ? Omit<SettingsPanelConfig, 'type'> :
  never;

// Helper to handle Button onClick - ButtonConfig.onClick is string, but Button expects function
const handleButtonProps = (props: Omit<ButtonConfig, 'type'>): Omit<ButtonConfig, 'type'> & { onClick?: () => void } => {
  if (props.onClick && typeof props.onClick === 'string') {
    const { onClick, ...rest } = props;
    return rest;
  }
  return props as Omit<ButtonConfig, 'type'> & { onClick?: () => void };
};

// Component registry mapping config types to React components
const componentRegistry: ComponentRegistry = {
  heading: (props) => <Heading {...(props as Omit<HeadingConfig, 'type'>)} />,
  paragraph: (props) => <Paragraph {...(props as Omit<ParagraphConfig, 'type'>)} />,
  button: (props) => <Button {...handleButtonProps(props as Omit<ButtonConfig, 'type'>)} />,
  card: (props) => <Card {...(props as Omit<CardConfig, 'type'>)} />,
  container: (props) => <Container {...(props as Omit<ContainerConfig, 'type'>)} />,
  productList: (props) => <ProductList {...(props as Omit<ProductListConfig, 'type'>)} />,
  profileCard: () => <ProfileCard />,
  navigation: () => <></>, // Navigation is handled separately in layout
  hero: (props) => <Hero {...(props as Omit<HeroConfig, 'type'>)} />,
  section: (props) => <Section {...(props as Omit<SectionConfig, 'type'>)} />,
  featureGrid: (props) => <FeatureGrid {...(props as Omit<FeatureGridConfig, 'type'>)} />,
  featureCard: (props) => <FeatureCard {...(props as Omit<FeatureCardConfig, 'type'>)} />,
  steps: (props) => <Steps {...(props as Omit<StepsConfig, 'type'>)} />,
  ctaCard: (props) => <CtaCard {...(props as Omit<CtaCardConfig, 'type'>)} />,
  statsGrid: (props) => <StatsGrid {...(props as Omit<StatsGridConfig, 'type'>)} />,
  testimonialGrid: (props) => <TestimonialGrid {...(props as Omit<TestimonialGridConfig, 'type'>)} />,
  faqAccordion: (props) => <FaqAccordion {...(props as Omit<FaqAccordionConfig, 'type'>)} />,
  productsHeader: (props) => <ProductsHeader {...(props as Omit<ProductsHeaderConfig, 'type'>)} />,
  searchFilters: (props) => <SearchFilters {...(props as Omit<SearchFiltersConfig, 'type'>)} />,
  promoBanner: (props) => <PromoBanner {...(props as Omit<PromoBannerConfig, 'type'>)} />,
  loadMore: (props) => <LoadMore {...(props as Omit<LoadMoreConfig, 'type'>)} />,
  profileHeader: (props) => <ProfileHeader {...(props as Omit<ProfileHeaderConfig, 'type'>)} />,
  accountStats: (props) => <AccountStats {...(props as Omit<AccountStatsConfig, 'type'>)} />,
  activityTimeline: (props) => <ActivityTimeline {...(props as Omit<ActivityTimelineConfig, 'type'>)} />,
  progressBar: (props) => <ProgressBar {...(props as Omit<ProgressBarConfig, 'type'>)} />,
  settingsPanel: (props) => <SettingsPanel {...(props as Omit<SettingsPanelConfig, 'type'>)} />,
};

export function ComponentResolver({ config }: ComponentResolverProps) {
  const Component = componentRegistry[config.type];
  
  if (!Component) {
    console.warn(`Unknown component type: ${config.type}`);
    return null;
  }

  // Extract props excluding 'type' from config
  const { type: _type, ...props } = config;
  
  // Type assertion needed because TypeScript can't narrow union of function types
  const ComponentWithProps = Component as (props: ExtractComponentProps<typeof config.type>) => React.ReactElement;
  
  return <ComponentWithProps {...(props as ExtractComponentProps<typeof config.type>)} />;
}

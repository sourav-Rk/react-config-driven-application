import React from "react";
import type { ComponentConfig } from "../../config/types";

import { Heading } from "../ui/Heading";
import { Paragraph } from "../ui/Paragraph";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { ProductList } from "../ui/ProductList";
import { ProfileCard } from "../ui/ProfileCard";
import { Hero } from "../ui/Hero";
import { Section } from "../ui/Section";
import { FeatureGrid } from "../ui/FeatureGrid";
import { FeatureCard } from "../ui/FeatureCard";
import { Steps } from "../ui/Steps";
import { CtaCard } from "../ui/CtaCard";
import { StatsGrid } from "../ui/StatsGrid";
import { TestimonialGrid } from "../ui/TestimonialGrid";
import { FaqAccordion } from "../ui/FaqAccordion";
import { ProductsHeader } from "../ui/ProductsHeader";
import { SearchFilters } from "../ui/SearchFilters";
import { PromoBanner } from "../ui/PromoBanner";
import { LoadMore } from "../ui/LoadMore";
import { ProfileHeader } from "../ui/ProfileHeader";
import { AccountStats } from "../ui/AccountStats";
import { ActivityTimeline } from "../ui/ActivityTimeline";
import { ProgressBar } from "../ui/ProgressBar";
import { SettingsPanel } from "../ui/SettingsPanel";

const actionMap: Record<string, () => void> = {};

type  ConfigOf<T extends ComponentConfig["type"]> = Extract<ComponentConfig, { type: T }>;
type PropsOf<T extends ComponentConfig["type"]> = Omit<ConfigOf<T>, "type">;

type Registry = {
  [T in ComponentConfig["type"]]: React.ComponentType<PropsOf<T>>;
};

const registry: Registry = {
  heading: Heading,
  paragraph: Paragraph,

  button: (props) => {
    const resolvedOnClick =
      typeof props.onClick === "string"
        ? actionMap[props.onClick]
        : props.onClick;

    return <Button {...props} onClick={resolvedOnClick} />;
  },

  card: Card,
  container: Container,
  productList: ProductList,

  profileCard: () => <ProfileCard />,

  navigation: () => <></>, 

  hero: Hero,
  section: Section,
  featureGrid: FeatureGrid,
  featureCard: FeatureCard,
  steps: Steps,
  ctaCard: CtaCard,
  statsGrid: StatsGrid,
  testimonialGrid: TestimonialGrid,
  faqAccordion: FaqAccordion,
  productsHeader: ProductsHeader,
  searchFilters: SearchFilters,
  promoBanner: PromoBanner,
  loadMore: LoadMore,
  profileHeader: ProfileHeader,
  accountStats: AccountStats,
  activityTimeline: ActivityTimeline,
  progressBar: ProgressBar,
  settingsPanel: SettingsPanel,
};

interface ComponentResolverProps {
  config: ComponentConfig;
}

function render<T extends ComponentConfig["type"]>(config: ConfigOf<T>) {
  const { type, ...props } = config;
  const Component = registry[type];

  return React.createElement(Component, props);
}

export function ComponentResolver({ config }: ComponentResolverProps) {
  return render(config);
}

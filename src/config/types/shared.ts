export type Variant = "primary" | "secondary" | "outline";

export type Columns = 1 | 2 | 3 | 4;

export interface BaseComponentConfig {
  id?: string;
  className?: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon?: string;
}

export interface CtaButton {
  buttonText?: string;
  buttonRoute?: string;
  buttonVariant?: Variant;
}

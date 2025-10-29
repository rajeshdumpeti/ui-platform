import { iconSet } from "./iconSet";

export type IconName = keyof typeof iconSet;

export interface IconCategory {
  name: string;
  icons: IconName[];
  description?: string;
}

// Common size variants
export type Size = "xs" | "sm" | "md" | "lg" | "xl";

// Common color variants
export type ColorVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info";

// Common state variants
export type InputState = "default" | "error" | "disabled" | "readonly";

// Tooltip positions
export type TooltipPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end";

// Avatar shapes
export type AvatarShape = "circle" | "square";

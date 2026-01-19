import React from "react";
import { cn } from "../lib";
import type { Size } from "../types";
import { Icon } from "./Icon";

export type SplitButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "success";

export interface SplitButtonProps {
  label: React.ReactNode;
  onClick?: () => void;
  onToggle?: () => void;
  disabled?: boolean;
  size?: Size;
  variant?: SplitButtonVariant;
  toggleAriaLabel?: string;
}

const variantClasses: Record<SplitButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary:
    "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500",
  ghost:
    "bg-transparent text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 border border-secondary-300",
  danger: "bg-error-600 text-white hover:bg-error-700 focus:ring-error-500",
  success:
    "bg-success-600 text-white hover:bg-success-700 focus:ring-success-500",
};

const sizeClasses: Record<Size, string> = {
  xs: "px-3 py-1.5 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

const toggleSizeClasses: Record<Size, string> = {
  xs: "px-2 py-1.5",
  sm: "px-2.5 py-2",
  md: "px-3 py-3",
  lg: "px-3.5 py-4",
  xl: "px-4 py-5",
};

export const SplitButton: React.FC<SplitButtonProps> = ({
  label,
  onClick,
  onToggle,
  disabled = false,
  size = "md",
  variant = "primary",
  toggleAriaLabel = "Open menu",
}) => (
  <div className="inline-flex">
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-ring",
        "rounded-l-lg",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-ring",
        "rounded-r-lg border-l border-white/20",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        toggleSizeClasses[size]
      )}
      onClick={onToggle}
      disabled={disabled}
      aria-label={toggleAriaLabel}
    >
      <Icon name="expand_more" size="sm" />
    </button>
  </div>
);

SplitButton.displayName = "SplitButton";

import React from "react";
import { cn } from "../lib";
import type { ColorVariant, Size } from "../types";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: ColorVariant;
  size?: Size;
  dot?: boolean;
}

const variantClasses: Record<ColorVariant, string> = {
  default: "bg-secondary-50 text-secondary-700 border-secondary-200",
  primary: "bg-primary-50 text-primary-700 border-primary-200",
  secondary: "bg-secondary-100 text-secondary-700 border-secondary-200",
  success: "bg-success-50 text-success-700 border-success-200",
  warning: "bg-warning-50 text-warning-700 border-warning-200",
  error: "bg-error-50 text-error-700 border-error-200",
  info: "bg-info-50 text-info-700 border-info-200",
};

const dotClasses: Record<ColorVariant, string> = {
  default: "bg-secondary-500",
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  error: "bg-error-500",
  info: "bg-info-500",
};

const sizeClasses: Record<Size, string> = {
  xs: "text-xs px-2 py-0.5",
  sm: "text-xs px-2.5 py-1",
  md: "text-sm px-3 py-1.5",
  lg: "text-base px-4 py-2",
  xl: "text-base px-5 py-2.5",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "sm", dot = false, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className={cn("h-2 w-2 rounded-full", dotClasses[variant])} />
      )}
      {props.children}
    </span>
  )
);

Badge.displayName = "Badge";

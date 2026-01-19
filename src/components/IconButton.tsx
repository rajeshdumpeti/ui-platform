import React from "react";
import { cn } from "../lib";
import type { Size } from "../types";

export type IconButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "link"
  | "danger"
  | "success";

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: React.ReactNode;
  ariaLabel: string;
  variant?: IconButtonVariant;
  size?: Size;
  isLoading?: boolean;
}

const variantClasses: Record<IconButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
  secondary:
    "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500",
  ghost:
    "bg-transparent text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 border border-secondary-300",
  link:
    "bg-transparent text-primary-600 hover:text-primary-700 focus:ring-primary-500",
  danger: "bg-error-600 text-white hover:bg-error-700 focus:ring-error-500",
  success:
    "bg-success-600 text-white hover:bg-success-700 focus:ring-success-500",
};

const sizeClasses: Record<Size, string> = {
  xs: "h-7 w-7 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
  xl: "h-14 w-14 text-xl",
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon,
      ariaLabel,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-all duration-200 focus-ring",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      aria-label={ariaLabel}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        icon
      )}
    </button>
  )
);

IconButton.displayName = "IconButton";

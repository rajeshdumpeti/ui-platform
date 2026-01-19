import React from "react";
import { cn } from "../lib";
import { motion, MotionProps, HTMLMotionProps } from "framer-motion";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

// Common props for both branches
type CommonButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "link" | "danger" | "success";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

// Motion branch (extends HTMLMotionProps with common)
type MotionButtonProps = CommonButtonProps &
  Omit<HTMLMotionProps<"button">, "children" | "className" | "disabled"> & {
    animated?: true;
  };

// Static branch (extends ComponentPropsWithoutRef with common)
type StaticButtonProps = CommonButtonProps &
  Omit<
    ComponentPropsWithoutRef<"button">,
    "children" | "className" | "disabled"
  > & {
    animated?: false;
  };

export type ButtonProps = MotionButtonProps | StaticButtonProps;

const variantClasses = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm hover-lift",
  secondary:
    "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-sm hover-lift",
  ghost:
    "bg-transparent text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 border border-secondary-300",
  link: "bg-transparent text-primary-600 hover:text-primary-700 hover:underline focus:ring-primary-500 p-0",
  danger:
    "bg-error-600 text-white hover:bg-error-700 focus:ring-error-500 shadow-sm hover-lift",
  success:
    "bg-success-600 text-white hover:bg-success-700 focus:ring-success-500 shadow-sm hover-lift",
} as const;

const sizeClasses = {
  xs: "px-3 py-1.5 text-xs rounded-md",
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-lg",
  xl: "px-10 py-5 text-xl rounded-xl",
} as const;

const linkSizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
} as const;

export const Button = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      animated = true,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none";

    const currentVariantClasses =
      variantClasses[variant as keyof typeof variantClasses];

    const finalSizeClasses =
      variant === "link"
        ? linkSizeClasses[size as keyof typeof linkSizeClasses]
        : sizeClasses[size as keyof typeof sizeClasses];

    const conditionalClasses = cn(
      (isLoading || disabled) && "cursor-not-allowed",
      isLoading && "opacity-70",
    );

    const spinnerClasses = cn(
      "animate-spin -ml-1 mr-2",
      size === "xs" && "h-3 w-3",
      (size === "sm" || size === "md") && "h-4 w-4",
      size === "lg" && "h-5 w-5",
      size === "xl" && "h-6 w-6",
      Boolean(children) && "mr-2",
    );

    const leftIconClasses = cn(
      (["xs", "sm", "md"] as readonly string[]).includes(size as string) &&
        "mr-2",
      (["lg", "xl"] as readonly string[]).includes(size as string) && "mr-3",
    );

    const rightIconClasses = cn(
      (["xs", "sm", "md"] as readonly string[]).includes(size as string) &&
        "ml-2",
      (["lg", "xl"] as readonly string[]).includes(size as string) && "ml-3",
    );

    // Motion props only if animated
    const motionProps: Partial<MotionProps> = animated
      ? {
          whileHover: !disabled ? { scale: 1.02 } : {},
          whileTap: !disabled ? { scale: 0.98 } : {},
        }
      : {};

    // Narrow based on animated flag
    const isAnimated = animated === true;

    if (isAnimated) {
      return (
        <motion.button
          ref={ref}
          className={cn(
            baseClasses,
            currentVariantClasses,
            finalSizeClasses,
            conditionalClasses,
            className,
          )}
          disabled={disabled || isLoading}
          {...motionProps}
          {...(props as Omit<
            HTMLMotionProps<"button">,
            "ref" | "children" | "className" | "disabled" | "animated"
          >)}
        >
          {isLoading && (
            <svg
              className={spinnerClasses}
              fill="none"
              viewBox="0 0 24 24"
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
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {!isLoading && leftIcon && (
            <span className={leftIconClasses}>{leftIcon}</span>
          )}
          {children}
          {!isLoading && rightIcon && (
            <span className={rightIconClasses}>{rightIcon}</span>
          )}
        </motion.button>
      );
    }

    // Static button
    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          currentVariantClasses,
          finalSizeClasses,
          conditionalClasses,
          className,
        )}
        disabled={disabled || isLoading}
        {...(props as Omit<
          ComponentPropsWithoutRef<"button">,
          "ref" | "children" | "className" | "disabled" | "animated"
        >)}
      >
        {isLoading && (
          <svg
            className={spinnerClasses}
            fill="none"
            viewBox="0 0 24 24"
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
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && (
          <span className={leftIconClasses}>{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className={rightIconClasses}>{rightIcon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

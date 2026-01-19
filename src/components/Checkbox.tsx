import React from "react";
import { cn } from "../lib";
import type { Size } from "../types";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  size?: Size;
}

const boxSizeClasses: Record<Size, string> = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7",
};

const textSizeClasses: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      description,
      size = "md",
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const autoId = React.useId();
    const inputId = id || autoId;

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "flex cursor-pointer items-start gap-3",
          disabled && "cursor-not-allowed opacity-60"
        )}
      >
        <span className="relative flex items-center">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            className={cn(
              "peer absolute h-full w-full cursor-pointer opacity-0",
              disabled && "cursor-not-allowed"
            )}
            disabled={disabled}
            {...props}
          />
          <span
            className={cn(
              "flex items-center justify-center rounded-md border border-neutral-300 bg-white text-white transition-all",
              "peer-checked:border-primary-500 peer-checked:bg-primary-500",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2",
              boxSizeClasses[size],
              className
            )}
          >
            <svg
              className="h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100"
              viewBox="0 0 12 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M1 5.5L4.5 9L11 1" />
            </svg>
          </span>
        </span>
        {(label || description) && (
          <span className="space-y-1">
            {label && (
              <span className={cn("block font-medium text-neutral-900", textSizeClasses[size])}>
                {label}
              </span>
            )}
            {description && (
              <span className="block text-xs text-neutral-500">
                {description}
              </span>
            )}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

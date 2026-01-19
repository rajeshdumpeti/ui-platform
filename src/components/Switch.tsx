import React from "react";
import { cn } from "../lib";
import type { Size } from "../types";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  size?: Size;
}

const trackClasses: Record<Size, string> = {
  xs: "h-4 w-7",
  sm: "h-5 w-9",
  md: "h-6 w-11",
  lg: "h-7 w-14",
  xl: "h-8 w-16",
};

const thumbClasses: Record<Size, string> = {
  xs: "h-3 w-3 translate-x-0.5",
  sm: "h-4 w-4 translate-x-0.5",
  md: "h-5 w-5 translate-x-0.5",
  lg: "h-6 w-6 translate-x-0.5",
  xl: "h-7 w-7 translate-x-0.5",
};

const thumbCheckedTranslate: Record<Size, string> = {
  xs: "peer-checked:translate-x-3",
  sm: "peer-checked:translate-x-4",
  md: "peer-checked:translate-x-5",
  lg: "peer-checked:translate-x-7",
  xl: "peer-checked:translate-x-8",
};

const textSizeClasses: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
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
            className="peer sr-only"
            disabled={disabled}
            {...props}
          />
          <span
            className={cn(
              "flex items-center rounded-full border border-neutral-300 bg-neutral-200 transition-colors",
              "peer-checked:border-primary-500 peer-checked:bg-primary-500",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2",
              trackClasses[size]
            )}
          >
            <span
              className={cn(
                "rounded-full bg-white shadow-sm transition-transform",
                thumbClasses[size],
                thumbCheckedTranslate[size],
                className
              )}
            />
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

Switch.displayName = "Switch";

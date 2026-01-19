import React from "react";
import { cn } from "../lib";
import type { Size } from "../types";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  size?: Size;
}

const dotSizeClasses: Record<Size, string> = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7",
};

const innerDotClasses: Record<Size, string> = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2.5 w-2.5",
  lg: "h-3 w-3",
  xl: "h-3.5 w-3.5",
};

const textSizeClasses: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
            type="radio"
            className={cn(
              "peer absolute h-full w-full cursor-pointer opacity-0",
              disabled && "cursor-not-allowed"
            )}
            disabled={disabled}
            {...props}
          />
          <span
            className={cn(
              "flex items-center justify-center rounded-full border border-neutral-300 bg-white transition-all",
              "peer-checked:border-primary-500 peer-checked:bg-primary-500",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2",
              dotSizeClasses[size],
              className
            )}
          >
            <span
              className={cn(
                "rounded-full bg-white opacity-0 transition-opacity peer-checked:opacity-100",
                innerDotClasses[size]
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

Radio.displayName = "Radio";

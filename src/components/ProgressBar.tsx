import React from "react";
import { cn } from "../lib";
import type { ColorVariant } from "../types";

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: ColorVariant;
  showLabel?: boolean;
}

const barClasses: Record<ColorVariant, string> = {
  default: "bg-secondary-400",
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
  error: "bg-error-500",
  info: "bg-info-500",
};

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      value,
      max = 100,
      variant = "primary",
      showLabel = false,
      ...props
    },
    ref
  ) => {
    const clamped = Math.min(Math.max(value, 0), max);
    const percentage = Math.round((clamped / max) * 100);

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {showLabel && (
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <span>Progress</span>
            <span>{percentage}%</span>
          </div>
        )}
        <div className="h-2 w-full rounded-full bg-secondary-100">
          <div
            className={cn("h-2 rounded-full transition-all", barClasses[variant])}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

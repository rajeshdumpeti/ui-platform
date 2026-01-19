import React from "react";
import { cn } from "../lib";
import type { ColorVariant, Size } from "../types";

export interface SpinnerProps extends React.SVGAttributes<SVGElement> {
  size?: Size | number;
  variant?: ColorVariant;
  withRing?: boolean;
}

const sizeMap: Record<Size, number> = {
  xs: 16,
  sm: 24,
  md: 40,
  lg: 56,
  xl: 72,
};

const colorClasses: Record<ColorVariant, string> = {
  default: "text-gray-600",
  primary: "text-blue-600",
  secondary: "text-indigo-600",
  success: "text-emerald-600",
  warning: "text-amber-600",
  error: "text-rose-600",
  info: "text-sky-600",
};

export const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  (
    { className, size = "md", variant = "primary", withRing = true, ...props },
    ref,
  ) => {
    const dimension = typeof size === "number" ? size : sizeMap[size];

    return (
      <div className={cn("relative", withRing && "p-4")}>
        {withRing && (
          <div className="absolute inset-0 rounded-full border-[6px] border-gray-200"></div>
        )}
        <svg
          ref={ref}
          className={cn(
            "animate-spin",
            colorClasses[variant],
            "drop-shadow-sm",
            withRing && "scale-90",
            className,
          )}
          width={dimension}
          height={dimension}
          viewBox="0 0 24 24"
          fill="none"
          aria-label="Loading"
          {...props}
        >
          {/* Thicker, modern spinner */}
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            strokeOpacity="0.3"
            fill="none"
          />
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 1.6.36 3.12 1 4.5"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    );
  },
);

Spinner.displayName = "Spinner";

import React from "react";
import { cn } from "../lib";
import type { Size } from "../types";
import { Icon } from "./Icon";

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: Size;
  options?: SelectOption[];
  fullWidth?: boolean;
}

const sizeClasses: Record<Size, string> = {
  xs: "px-3 py-1.5 text-sm h-8",
  sm: "px-3 py-2 text-sm h-9",
  md: "px-4 py-2.5 text-base h-10",
  lg: "px-4 py-3 text-lg h-11",
  xl: "px-5 py-3.5 text-xl h-12",
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      size = "md",
      options,
      children,
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => (
    <div className={cn("relative", fullWidth && "w-full")}>
      <select
        ref={ref}
        className={cn(
          "block w-full appearance-none rounded-lg border border-gray-300 bg-white text-gray-900 transition-all duration-200",
          "focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
          sizeClasses[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {options
          ? options.map((option) => (
              <option
                key={`${option.value}`}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))
          : children}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
        <Icon name="expand_more" size="sm" />
      </span>
    </div>
  )
);

Select.displayName = "Select";

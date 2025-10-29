import React from "react";
import { cn } from "../lib";
import { Size, InputState } from "../types";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  state?: InputState;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const sizeClasses: Record<Size, string> = {
  xs: "px-3 py-1.5 text-sm h-8",
  sm: "px-3 py-2 text-sm h-9",
  md: "px-4 py-2.5 text-base h-10",
  lg: "px-4 py-3 text-lg h-11",
  xl: "px-5 py-3.5 text-xl h-12",
};

const stateClasses: Record<InputState, string> = {
  default:
    "border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
  error:
    "border-red-500 bg-white text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20",
  disabled:
    "border-gray-200 bg-gray-50 text-gray-500 placeholder-gray-400 cursor-not-allowed",
  readonly:
    "border-gray-200 bg-gray-50 text-gray-700 placeholder-gray-500 cursor-not-allowed",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = "md",
      state = "default",
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      readOnly,
      ...props
    },
    ref
  ) => {
    const finalState = disabled ? "disabled" : readOnly ? "readonly" : state;

    return (
      <div className={cn("relative", fullWidth && "w-full")}>
        {leftIcon && (
          <div
            className={cn(
              "absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400",
              size === "xs" && "pl-2",
              size === "sm" && "pl-2.5",
              size === "md" && "pl-3",
              size === "lg" && "pl-3",
              size === "xl" && "pl-3.5"
            )}
          >
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            // Base styles
            "block w-full border rounded-lg transition-all duration-200",
            "focus:outline-none focus:shadow-sm",
            "disabled:cursor-not-allowed",

            // Size and state
            sizeClasses[size],
            stateClasses[finalState],

            // Icon padding
            leftIcon && [
              size === "xs" && "pl-8",
              size === "sm" && "pl-9",
              size === "md" && "pl-10",
              size === "lg" && "pl-11",
              size === "xl" && "pl-12",
            ],
            rightIcon && [
              size === "xs" && "pr-8",
              size === "sm" && "pr-9",
              size === "md" && "pr-10",
              size === "lg" && "pr-11",
              size === "xl" && "pr-12",
            ],

            fullWidth && "w-full",
            className
          )}
          disabled={disabled || finalState === "disabled"}
          readOnly={readOnly || finalState === "readonly"}
          {...props}
        />
        {rightIcon && (
          <div
            className={cn(
              "absolute inset-y-0 right-0 flex items-center pointer-events-none text-gray-400",
              size === "xs" && "pr-2",
              size === "sm" && "pr-2.5",
              size === "md" && "pr-3",
              size === "lg" && "pr-3",
              size === "xl" && "pr-3.5"
            )}
          >
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

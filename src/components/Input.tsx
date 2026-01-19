import React from "react";
import { cn } from "../lib";
import { Size, InputState } from "../types";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  size?: Size;
  state?: InputState;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
}

const sizeClasses: Record<Size, string> = {
  xs: "px-3 py-1.5 text-sm h-8 rounded-lg",
  sm: "px-3.5 py-2 text-sm h-9 rounded-lg",
  md: "px-4 py-2.5 text-base h-10 rounded-xl",
  lg: "px-4 py-3 text-lg h-11 rounded-xl",
  xl: "px-5 py-3.5 text-xl h-12 rounded-xl",
};

const stateClasses: Record<InputState, string> = {
  default:
    "border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
  error:
    "border-red-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20",
  disabled:
    "border-gray-100 bg-gray-50 text-gray-400 placeholder:text-gray-400 cursor-not-allowed",
  readonly:
    "border-gray-100 bg-gray-50 text-gray-700 placeholder:text-gray-500 cursor-not-allowed",
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
      label,
      helperText,
      id,
      ...props
    },
    ref,
  ) => {
    const finalState = disabled ? "disabled" : readOnly ? "readonly" : state;
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    // Before the return statement, add these variables:
    const leftPadding = leftIcon
      ? size === "xs"
        ? "pl-9"
        : size === "sm"
          ? "pl-10"
          : size === "md"
            ? "pl-11"
            : size === "lg"
              ? "pl-12"
              : size === "xl"
                ? "pl-14"
                : ""
      : undefined;

    const rightPadding = rightIcon
      ? size === "xs"
        ? "pr-9"
        : size === "sm"
          ? "pr-10"
          : size === "md"
            ? "pr-11"
            : size === "lg"
              ? "pr-12"
              : size === "xl"
                ? "pr-14"
                : ""
      : undefined;

    return (
      <div className={cn("space-y-2", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "block text-sm font-medium text-gray-700 transition-colors",
              finalState === "disabled" && "text-gray-400",
              finalState === "error" && "text-red-600",
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <div
                className={cn(
                  "text-gray-400 transition-colors",
                  size === "xs" && "text-xs",
                  size === "sm" && "text-sm",
                  size === "md" && "text-base",
                  size === "lg" && "text-lg",
                  size === "xl" && "text-xl",
                  finalState === "error" && "text-red-500",
                  finalState === "disabled" && "text-gray-300",
                )}
              >
                {leftIcon}
              </div>
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              // Base styles
              "block w-full border-2 bg-white/95 backdrop-blur-sm",
              "transition-all duration-200",
              "focus:outline-none focus:shadow-sm",
              "disabled:cursor-not-allowed",
              "placeholder:text-gray-400",
              "shadow-sm",
              leftPadding,
              rightPadding,

              // Size and state
              sizeClasses[size],
              stateClasses[finalState],

              // Additional styles
              fullWidth && "w-full",
              className,
            )}
            disabled={disabled || finalState === "disabled"}
            readOnly={readOnly || finalState === "readonly"}
            {...props}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
              <div
                className={cn(
                  "text-gray-400 transition-colors",
                  size === "xs" && "text-xs",
                  size === "sm" && "text-sm",
                  size === "md" && "text-base",
                  size === "lg" && "text-lg",
                  size === "xl" && "text-xl",
                  finalState === "error" && "text-red-500",
                  finalState === "disabled" && "text-gray-300",
                )}
              >
                {rightIcon}
              </div>
            </div>
          )}
        </div>

        {helperText && (
          <p
            className={cn(
              "text-sm transition-colors",
              finalState === "error" ? "text-red-600" : "text-gray-500",
              finalState === "disabled" && "text-gray-400",
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

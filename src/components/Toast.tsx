import React from "react";
import { cn } from "../lib";
import type { ColorVariant } from "../types";
import { Icon } from "./Icon";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: React.ReactNode;
  variant?: Exclude<ColorVariant, "default">;
  action?: React.ReactNode;
}

const variantStyles: Record<Exclude<ColorVariant, "default">, string> = {
  primary: "border-primary-200 bg-primary-50 text-primary-800",
  secondary: "border-secondary-200 bg-secondary-50 text-secondary-800",
  success: "border-success-200 bg-success-50 text-success-800",
  warning: "border-warning-200 bg-warning-50 text-warning-800",
  error: "border-error-200 bg-error-50 text-error-800",
  info: "border-info-200 bg-info-50 text-info-800",
};

const variantIcons: Record<Exclude<ColorVariant, "default">, string> = {
  primary: "info",
  secondary: "info",
  success: "check_circle",
  warning: "warning",
  error: "error",
  info: "info",
};

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      title,
      description,
      variant = "info",
      action,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex w-full items-start gap-3 rounded-xl border px-4 py-3 shadow-sm",
        variantStyles[variant],
        className
      )}
      role="status"
      {...props}
    >
      <Icon name={variantIcons[variant]} size="sm" />
      <div className="flex-1 space-y-1">
        {title && <p className="text-sm font-semibold">{title}</p>}
        {description && (
          <div className="text-sm text-current">{description}</div>
        )}
      </div>
      {action && <div className="pl-2">{action}</div>}
    </div>
  )
);

Toast.displayName = "Toast";

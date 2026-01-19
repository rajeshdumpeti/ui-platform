import React from "react";
import { cn } from "../lib";
import type { ColorVariant } from "../types";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: React.ReactNode;
  variant?: Exclude<ColorVariant, "default">;
  icon?: React.ReactNode;
}

const variantClasses: Record<Exclude<ColorVariant, "default">, string> = {
  primary: "border-primary-200 bg-primary-50 text-primary-700",
  secondary: "border-secondary-200 bg-secondary-50 text-secondary-700",
  success: "border-success-200 bg-success-50 text-success-700",
  warning: "border-warning-200 bg-warning-50 text-warning-700",
  error: "border-error-200 bg-error-50 text-error-700",
  info: "border-info-200 bg-info-50 text-info-700",
};

const defaultIcon: Record<Exclude<ColorVariant, "default">, IconName> = {
  primary: "info",
  secondary: "info",
  success: "check_circle",
  warning: "warning",
  error: "error",
  info: "info",
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      title,
      description,
      variant = "info",
      icon,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex gap-3 rounded-xl border px-4 py-3",
        variantClasses[variant],
        className
      )}
      role="alert"
      {...props}
    >
      <div className="mt-0.5 text-current">
        {icon ?? <Icon name={defaultIcon[variant]} size="sm" />}
      </div>
      <div className="space-y-1">
        {title && <p className="text-sm font-semibold">{title}</p>}
        {description && <div className="text-sm text-current">{description}</div>}
      </div>
    </div>
  )
);

Alert.displayName = "Alert";

import React from "react";
import { cn } from "../lib";
import { Card } from "./Card";
import { Badge } from "./Badge";
import type { ColorVariant } from "../types";

export interface StatCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  icon?: React.ReactNode;
  badgeLabel?: string;
  badgeVariant?: ColorVariant;
  helperText?: string;
}

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      className,
      title,
      value,
      icon,
      badgeLabel,
      badgeVariant = "success",
      helperText,
      ...props
    },
    ref
  ) => (
    <Card
      ref={ref}
      padding="none"
      className={cn("p-6", className)}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              {icon}
            </div>
          )}
          <div>
            <p className="text-body-small text-neutral-500">{title}</p>
            <p className="text-heading-medium font-semibold text-neutral-900">
              {value}
            </p>
          </div>
        </div>
        {badgeLabel && (
          <Badge size="xs" variant={badgeVariant}>
            {badgeLabel}
          </Badge>
        )}
      </div>
      {helperText && (
        <p className="mt-3 text-caption text-neutral-500">{helperText}</p>
      )}
    </Card>
  )
);

StatCard.displayName = "StatCard";

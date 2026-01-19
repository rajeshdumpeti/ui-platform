import React from "react";
import { cn } from "../lib";

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white",
        className
      )}
      {...props}
    />
  )
);

export interface ListItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  leading?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  meta?: React.ReactNode;
  trailing?: React.ReactNode;
}

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, leading, title, subtitle, meta, trailing, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-start gap-4 p-4", className)}
      {...props}
    >
      {leading && (
        <div className="flex h-10 w-10 items-center justify-center">
          {leading}
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-body-medium font-semibold text-neutral-900">
              {title}
            </p>
            {subtitle && (
              <p className="text-body-small text-neutral-500">{subtitle}</p>
            )}
          </div>
          {meta && <div className="text-caption text-neutral-400">{meta}</div>}
        </div>
        {trailing && <div className="mt-3">{trailing}</div>}
      </div>
    </div>
  )
);

List.displayName = "List";
ListItem.displayName = "ListItem";

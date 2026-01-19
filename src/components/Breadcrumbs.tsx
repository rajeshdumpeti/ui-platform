import React from "react";
import { cn } from "../lib";
import { Icon } from "./Icon";

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps
  extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, items, separator, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={cn("text-sm text-neutral-500", className)}
      {...props}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const content = item.href ? (
            <a
              href={item.href}
              className="text-neutral-600 hover:text-neutral-900"
              onClick={item.onClick}
            >
              {item.label}
            </a>
          ) : (
            <span className={cn(isLast ? "text-neutral-900" : "text-neutral-600")}>
              {item.label}
            </span>
          );

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {content}
              {!isLast && (
                <span className="text-neutral-300">
                  {separator || <Icon name="chevron_right" size="sm" />}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  )
);

Breadcrumbs.displayName = "Breadcrumbs";

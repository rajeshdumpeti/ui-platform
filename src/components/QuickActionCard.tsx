import React from "react";
import { cn } from "../lib";

export interface QuickActionCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export const QuickActionCard = React.forwardRef<
  HTMLButtonElement,
  QuickActionCardProps
>(({ className, title, description, icon, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      "w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-4">
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          {icon}
        </div>
      )}
      <div>
        <p className="text-body-medium font-semibold text-neutral-900">
          {title}
        </p>
        {description && (
          <p className="text-body-small text-neutral-500">{description}</p>
        )}
      </div>
    </div>
  </button>
));

QuickActionCard.displayName = "QuickActionCard";

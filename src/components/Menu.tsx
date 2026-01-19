import React from "react";
import { cn } from "../lib";

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl border border-neutral-200 bg-white p-2", className)}
      {...props}
    />
  )
);

export interface MenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  active?: boolean;
  badge?: React.ReactNode;
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ className, icon, active = false, badge, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-primary-50 text-primary-700"
          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
        className
      )}
      {...props}
    >
      {icon && (
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
          {icon}
        </span>
      )}
      <span className="flex-1 text-left">{children}</span>
      {badge && <span className="text-xs text-neutral-400">{badge}</span>}
    </button>
  )
);

Menu.displayName = "Menu";
MenuItem.displayName = "MenuItem";

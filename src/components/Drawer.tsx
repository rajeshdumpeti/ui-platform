import React from "react";
import { cn } from "../lib";

export type DrawerSide = "left" | "right";
export type DrawerSize = "sm" | "md" | "lg";

export interface DrawerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  side?: DrawerSide;
  size?: DrawerSize;
}

const sizeClasses: Record<DrawerSize, string> = {
  sm: "w-72",
  md: "w-96",
  lg: "w-[28rem]",
};

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      className,
      open,
      onClose,
      title,
      footer,
      side = "right",
      size = "md",
      children,
      ...props
    },
    ref
  ) => {
    React.useEffect(() => {
      if (!open) return;
      const handleKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKey);
      return () => document.removeEventListener("keydown", handleKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex">
        <div
          className="absolute inset-0 bg-black/30"
          onClick={onClose}
          aria-hidden="true"
        />
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(
            "relative ml-auto h-full bg-white shadow-xl",
            side === "left" && "ml-0 mr-auto",
            sizeClasses[size],
            className
          )}
          onClick={(event) => event.stopPropagation()}
          {...props}
        >
          {title && (
            <div className="border-b border-neutral-200 px-6 py-4">
              <h2 className="text-heading-small text-neutral-900">{title}</h2>
            </div>
          )}
          <div className="px-6 py-5">{children}</div>
          {footer && (
            <div className="border-t border-neutral-200 px-6 py-4">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Drawer.displayName = "Drawer";

import React from "react";
import { cn } from "../lib";

export type ModalSize = "sm" | "md" | "lg" | "xl";

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  size?: ModalSize;
}

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    { className, open, onClose, title, description, footer, size = "md", children, ...props },
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
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className="absolute inset-0 bg-black/40"
          onClick={onClose}
          aria-hidden="true"
        />
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(
            "relative w-full rounded-2xl bg-white shadow-xl",
            sizeClasses[size],
            className
          )}
          onClick={(event) => event.stopPropagation()}
          {...props}
        >
          {(title || description) && (
            <div className="border-b border-neutral-200 px-6 py-4">
              {title && (
                <h2 className="text-heading-small text-neutral-900">{title}</h2>
              )}
              {description && (
                <p className="text-body-small text-neutral-500">{description}</p>
              )}
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

Modal.displayName = "Modal";

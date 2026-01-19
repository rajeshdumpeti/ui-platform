import React from "react";
import { cn } from "../lib";
import type { TooltipPosition } from "../types";

export interface TooltipProps {
  content: React.ReactNode;
  position?: TooltipPosition;
  children: React.ReactNode;
  className?: string;
}

const positionClasses: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 -translate-y-2",
  bottom: "top-full left-1/2 -translate-x-1/2 translate-y-2",
  left: "right-full top-1/2 -translate-y-1/2 -translate-x-2",
  right: "left-full top-1/2 -translate-y-1/2 translate-x-2",
  "top-start": "bottom-full left-0 -translate-y-2",
  "top-end": "bottom-full right-0 -translate-y-2",
  "bottom-start": "top-full left-0 translate-y-2",
  "bottom-end": "top-full right-0 translate-y-2",
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  children,
  className,
}) => (
  <span className="relative inline-flex group">
    {children}
    <span
      className={cn(
        "pointer-events-none absolute z-20 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity",
        "group-hover:opacity-100 group-focus-within:opacity-100",
        positionClasses[position],
        className
      )}
      role="tooltip"
    >
      {content}
    </span>
  </span>
);

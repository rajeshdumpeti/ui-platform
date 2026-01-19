import React from "react";
import { cn } from "../lib";
import type { TooltipPosition } from "../types";

export interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  position?: TooltipPosition;
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

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  open,
  defaultOpen = false,
  onOpenChange,
  position = "bottom",
  className,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isOpen = open ?? internalOpen;
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const setOpen = (nextOpen: boolean) => {
    if (open === undefined) {
      setInternalOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  React.useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="relative inline-flex">
      <span onClick={() => setOpen(!isOpen)}>{trigger}</span>
      {isOpen && (
        <div
          className={cn(
            "absolute z-30 min-w-[12rem] rounded-xl border border-neutral-200 bg-white p-4 shadow-lg",
            positionClasses[position],
            className
          )}
          role="dialog"
        >
          {content}
        </div>
      )}
    </div>
  );
};

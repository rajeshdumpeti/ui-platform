import React from "react";
import { cn } from "../lib";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}

const roundedClasses: Record<NonNullable<SkeletonProps["rounded"]>, string> = {
  none: "rounded-none",
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
};

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, rounded = "md", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "animate-pulse bg-secondary-100",
        roundedClasses[rounded],
        className
      )}
      {...props}
    />
  )
);

Skeleton.displayName = "Skeleton";

import React from "react";
import { cn } from "../lib";
import type { AvatarShape, Size } from "../types";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: Size;
  shape?: AvatarShape;
}

const sizeClasses: Record<Size, string> = {
  xs: "h-6 w-6 text-[10px]",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

const shapeClasses: Record<AvatarShape, string> = {
  circle: "rounded-full",
  square: "rounded-lg",
};

const getInitials = (value?: string) => {
  if (!value) return "";
  const parts = value.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return `${first}${last}`.toUpperCase();
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    { className, src, alt, name, size = "md", shape = "circle", ...props },
    ref
  ) => {
    const initials = getInitials(name || alt);

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center overflow-hidden bg-secondary-100 text-secondary-700 font-semibold",
          sizeClasses[size],
          shapeClasses[shape],
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt || name || "Avatar"}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{initials || "?"}</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

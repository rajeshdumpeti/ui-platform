import React from "react";
import { cn } from "../lib";
import { iconSet } from "./iconSet";
import "material-icons/iconfont/material-icons.css";

export type IconName = keyof typeof iconSet;

export interface IconProps {
  name: IconName;
  size?: "sm" | "md" | "lg" | number;
  color?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const sizeMap = {
  sm: 18,
  md: 24,
  lg: 32,
} as const;

export const Icon: React.FC<IconProps> = ({
  name,
  size = "md",
  color = "currentColor",
  className,
  onClick,
  disabled = false,
  style = {},
}) => {
  const iconName = iconSet[name];

  if (!iconName) {
    console.warn(`Icon "${name}" not found in icon set`);
    return null;
  }

  const sizeValue =
    typeof size === "string" ? sizeMap[size as keyof typeof sizeMap] : size;
  const isClickable = !!onClick && !disabled;

  return (
    <span
      className={cn(
        "material-icons",
        "inline-flex items-center justify-center",
        "select-none align-middle leading-none",
        "font-normal normal-case",
        // Flattened clickable classes (ternary to avoid array inference issues)
        isClickable ? "cursor-pointer" : false,
        isClickable ? "transition-all duration-200" : false,
        isClickable ? "rounded-md p-1" : false,
        isClickable ? "hover:bg-gray-100 hover:scale-105" : false,
        isClickable ? "active:scale-95" : false,
        isClickable
          ? "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          : false,
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{
        fontSize: sizeValue,
        width: sizeValue,
        height: sizeValue,
        color,
        ...style,
      }}
      onClick={isClickable ? onClick : undefined}
      role={isClickable ? "button" : "img"}
      aria-label={name}
      tabIndex={isClickable ? 0 : -1}
    >
      {iconName}
    </span>
  );
};

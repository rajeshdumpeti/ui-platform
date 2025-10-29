import { iconSet } from "./components/iconSet";

export type IconName = keyof typeof iconSet;

export interface IconCategory {
  name: string;
  icons: IconName[];
  description?: string;
}

// Utility function for merging Tailwind classes
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Design Tokens
export * from "./tokens";

// Components
export { Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export { Icon } from "./components/Icon";
export type { IconProps, IconName } from "./components/Icon";

export { Input } from "./components/Input";
export type { InputProps } from "./components/Input";

// Animation
export { motion } from "framer-motion";

// Icon utilities
export const getAllIconNames = (): IconName[] =>
  Object.keys(iconSet) as IconName[];

export const searchIcons = (query: string): IconName[] => {
  if (typeof query !== "string") return getAllIconNames();
  return getAllIconNames().filter((icon) =>
    icon.toLowerCase().includes(query.toLowerCase())
  );
};

// Icon categories for organization
export const iconCategories = {
  navigation: [
    "home",
    "menu",
    "close",
    "expand_more",
    "expand_less",
    "arrow_back",
    "arrow_forward",
    "arrow_upward",
    "arrow_downward",
    "chevron_left",
    "chevron_right",
    "chevron_up",
    "chevron_down",
  ],
  actions: [
    "add",
    "remove",
    "create",
    "edit",
    "delete",
    "save",
    "cancel",
    "refresh",
    "download",
    "upload",
    "cloud_upload",
    "cloud_download",
    "print",
    "share",
  ],
  communication: [
    "mail",
    "mail_outline",
    "mark_email_read",
    "mark_email_unread",
    "chat",
    "chat_bubble",
    "chat_bubble_outline",
    "comment",
    "forum",
  ],
  user: [
    "person",
    "person_outline",
    "group",
    "account_circle",
    "login",
    "logout",
    "manage_accounts",
  ],
  files: [
    "folder",
    "folder_open",
    "insert_drive_file",
    "description",
    "article",
    "note",
    "list",
    "grid_view",
    "view_list",
    "view_module",
  ],
  status: [
    "check",
    "check_circle",
    "check_circle_outline",
    "cancel",
    "info",
    "help",
    "help_outline",
    "warning",
    "error",
    "error_outline",
  ],
  system: ["settings", "tune", "build", "engineering", "refresh", "autorenew"],
  media: [
    "image",
    "photo",
    "photo_library",
    "camera_alt",
    "videocam",
    "mic",
    "headset",
  ],
  toggle: [
    "visibility",
    "visibility_off",
    "favorite",
    "favorite_border",
    "star",
    "star_border",
    "star_half",
    "grade",
  ],
  commerce: [
    "shopping_cart",
    "shopping_bag",
    "payment",
    "credit_card",
    "receipt",
    "attach_money",
  ],
  time: [
    "schedule",
    "calendar_today",
    "event",
    "event_available",
    "event_busy",
    "access_time",
    "timer",
  ],
  data: ["analytics", "bar_chart", "show_chart", "timeline", "dashboard"],
  security: [
    "lock",
    "lock_open",
    "security",
    "verified_user",
    "admin_panel_settings",
  ],
} as const;

export const getIconsByCategory = (
  category: keyof typeof iconCategories
): IconName[] => iconCategories[category] as IconName[];

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
export type { IconProps } from "./components/Icon"; // Remove IconName from here

export { Input } from "./components/Input";
export type { InputProps } from "./components/Input";

export { Checkbox } from "./components/Checkbox";
export type { CheckboxProps } from "./components/Checkbox";

export { Radio } from "./components/Radio";
export type { RadioProps } from "./components/Radio";

export { Select } from "./components/Select";
export type { SelectProps, SelectOption } from "./components/Select";

export { Switch } from "./components/Switch";
export type { SwitchProps } from "./components/Switch";

export { DatePicker } from "./components/DatePicker";
export type { DatePickerProps } from "./components/DatePicker";

export { Slider } from "./components/Slider";
export type { SliderProps } from "./components/Slider";

export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/Tabs";
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from "./components/Tabs";

export { Breadcrumbs } from "./components/Breadcrumbs";
export type { BreadcrumbsProps, BreadcrumbItem } from "./components/Breadcrumbs";

export { Menu, MenuItem } from "./components/Menu";
export type { MenuProps, MenuItemProps } from "./components/Menu";

export { Alert } from "./components/Alert";
export type { AlertProps } from "./components/Alert";

export { ProgressBar } from "./components/ProgressBar";
export type { ProgressBarProps } from "./components/ProgressBar";

export { Spinner } from "./components/Spinner";
export type { SpinnerProps } from "./components/Spinner";

export { Skeleton } from "./components/Skeleton";
export type { SkeletonProps } from "./components/Skeleton";

export { Toast } from "./components/Toast";
export type { ToastProps } from "./components/Toast";

export { Tooltip } from "./components/Tooltip";
export type { TooltipProps } from "./components/Tooltip";

export { IconButton } from "./components/IconButton";
export type { IconButtonProps, IconButtonVariant } from "./components/IconButton";

export { LoadingButton } from "./components/LoadingButton";
export type { LoadingButtonProps } from "./components/LoadingButton";

export { SplitButton } from "./components/SplitButton";
export type { SplitButtonProps, SplitButtonVariant } from "./components/SplitButton";

export { Modal } from "./components/Modal";
export type { ModalProps, ModalSize } from "./components/Modal";

export { Drawer } from "./components/Drawer";
export type { DrawerProps, DrawerSide, DrawerSize } from "./components/Drawer";

export { Popover } from "./components/Popover";
export type { PopoverProps } from "./components/Popover";

export { Dialog } from "./components/Dialog";
export type { DialogProps } from "./components/Dialog";

export { Container, Box, Stack, Grid, Divider } from "./components/Layout";
export type {
  ContainerProps,
  BoxProps,
  StackProps,
  GridProps,
  DividerProps,
} from "./components/Layout";

export { Badge } from "./components/Badge";
export type { BadgeProps } from "./components/Badge";

export { Avatar } from "./components/Avatar";
export type { AvatarProps } from "./components/Avatar";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/Card";
export type {
  CardProps,
  CardPadding,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
} from "./components/Card";

export { StatCard } from "./components/StatCard";
export type { StatCardProps } from "./components/StatCard";

export { QuickActionCard } from "./components/QuickActionCard";
export type { QuickActionCardProps } from "./components/QuickActionCard";

export { List, ListItem } from "./components/List";
export type { ListProps, ListItemProps } from "./components/List";

export {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from "./components/Table";
export type {
  TableProps,
  TableHeadProps,
  TableBodyProps,
  TableRowProps,
  TableHeaderCellProps,
  TableCellProps,
} from "./components/Table";

export { Pagination } from "./components/Pagination";
export type { PaginationProps } from "./components/Pagination";

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
): IconName[] => iconCategories[category] as unknown as IconName[];

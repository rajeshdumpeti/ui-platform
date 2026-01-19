import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { Plus, ArrowRight, Check, Trash2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost", "link", "danger", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Size variants
export const ExtraSmall: Story = {
  args: {
    size: "xs",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
    children: "Button",
  },
};

// Style variants
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success Button",
  },
};

// States
export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Loading...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

// With icons
export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Plus className="w-4 h-4" />,
    children: "Add Item",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ArrowRight className="w-4 h-4" />,
    children: "Continue",
  },
};

export const DeleteButton: Story = {
  args: {
    variant: "danger",
    leftIcon: <Trash2 className="w-4 h-4" />,
    children: "Delete",
  },
};

export const SuccessWithIcon: Story = {
  args: {
    variant: "success",
    leftIcon: <Check className="w-4 h-4" />,
    children: "Completed",
  },
};

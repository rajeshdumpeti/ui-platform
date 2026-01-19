import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "square"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "Aarav Sharma",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="AS" size="xs" />
      <Avatar name="AS" size="sm" />
      <Avatar name="Aarav Sharma" size="md" />
      <Avatar name="Aarav Sharma" size="lg" />
      <Avatar name="Aarav Sharma" size="xl" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Rahul Sharma" shape="circle" />
      <Avatar name="Rahul Sharma" shape="square" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex items-center -space-x-2">
      <Avatar name="Aarav Patel" />
      <Avatar name="Diya Sharma" />
      <Avatar name="Rohan Gupta" />
      <Avatar name="Ananya Singh" />
      <div className="h-10 w-10 rounded-full bg-secondary-100 text-secondary-700 flex items-center justify-center text-xs font-semibold border border-white">
        +4
      </div>
    </div>
  ),
};

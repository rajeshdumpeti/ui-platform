import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../components/Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gray",
      values: [
        { name: "gray", value: "#f9fafb" },
        { name: "dark", value: "#111827" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "info",
      ],
    },
    className: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "primary",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "lg",
  },
  parameters: {
    backgrounds: { default: "white" },
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "lg",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    size: "lg",
  },
};

export const WithBackgroundRing: Story = {
  render: (args) => (
    <div className="relative p-8">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200"></div>
      <Spinner {...args} />
    </div>
  ),
  args: {
    size: "xl",
    variant: "primary",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8 p-8 rounded-2xl bg-white shadow-lg border border-gray-200">
      <div className="flex flex-col items-center gap-3">
        <Spinner variant="primary" size="lg" />
        <span className="text-sm font-medium text-gray-700">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Spinner variant="secondary" size="lg" />
        <span className="text-sm font-medium text-gray-700">Secondary</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Spinner variant="success" size="lg" />
        <span className="text-sm font-medium text-gray-700">Success</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Spinner variant="error" size="lg" />
        <span className="text-sm font-medium text-gray-700">Error</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Spinner variant="warning" size="lg" />
        <span className="text-sm font-medium text-gray-700">Warning</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Spinner variant="info" size="lg" />
        <span className="text-sm font-medium text-gray-700">Info</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Spinner variant="default" size="lg" />
        <span className="text-sm font-medium text-gray-700">Default</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="rounded-lg bg-gray-900 p-4">
          <Spinner variant="primary" size="lg" className="text-white" />
        </div>
        <span className="text-sm font-medium text-gray-700">Dark BG</span>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: "gray" },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 rounded-2xl bg-white shadow-lg border border-gray-200">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 w-24">
          Extra Small
        </span>
        <Spinner size="xs" />
        <code className="text-xs text-gray-500">size="xs"</code>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 w-24">Small</span>
        <Spinner size="sm" />
        <code className="text-xs text-gray-500">size="sm"</code>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 w-24">Medium</span>
        <Spinner size="md" />
        <code className="text-xs text-gray-500">size="md"</code>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 w-24">Large</span>
        <Spinner size="lg" />
        <code className="text-xs text-gray-500">size="lg"</code>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 w-24">
          Extra Large
        </span>
        <Spinner size="xl" />
        <code className="text-xs text-gray-500">size="xl"</code>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 w-24">
          Custom (60px)
        </span>
        <Spinner size={60} />
        <code className="text-xs text-gray-500">size={"{60}"}</code>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: "gray" },
  },
};

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-8 p-8 rounded-2xl bg-white shadow-lg border border-gray-200">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="xl" variant="primary" />
        <p className="text-lg font-medium text-gray-900">Loading data...</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Spinner size="xl" variant="success" />
        <p className="text-lg font-medium text-gray-900">Processing request</p>
        <p className="text-sm text-gray-600">Please wait a moment</p>
      </div>
    </div>
  ),
};

export const InteractivePlayground: Story = {
  args: {
    size: "lg",
    variant: "primary",
  },
  parameters: {
    backgrounds: { default: "gray" },
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../components/Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
    defaultChecked: true,
  },
};

export const Variations: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Attendance alerts" defaultChecked />
      <Switch label="Weekly summary" />
      <Switch label="Disabled switch" disabled />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch size="xs" label="Extra small" />
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium" />
      <Switch size="lg" label="Large" />
      <Switch size="xl" label="Extra large" />
    </div>
  ),
};

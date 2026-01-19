import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Send me product updates",
  },
};

export const Variations: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Active students only" defaultChecked />
      <Checkbox
        label="Include archived records"
        description="Archived data will be read-only."
      />
      <Checkbox label="Disabled option" disabled />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox size="xs" label="Extra small" />
      <Checkbox size="sm" label="Small" />
      <Checkbox size="md" label="Medium" />
      <Checkbox size="lg" label="Large" />
      <Checkbox size="xl" label="Extra large" />
    </div>
  ),
};

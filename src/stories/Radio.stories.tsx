import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../components/Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
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
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => (
    <div className="space-y-3">
      <Radio name="status" label="Active" defaultChecked />
      <Radio name="status" label="Inactive" />
      <Radio name="status" label="On Leave" />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-3">
      <Radio
        name="delivery"
        label="Email"
        description="Notifications will be sent via email."
        defaultChecked
      />
      <Radio
        name="delivery"
        label="SMS"
        description="Messages may incur carrier charges."
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3">
      <Radio name="size" size="xs" label="Extra small" />
      <Radio name="size" size="sm" label="Small" />
      <Radio name="size" size="md" label="Medium" />
      <Radio name="size" size="lg" label="Large" />
      <Radio name="size" size="xl" label="Extra large" />
    </div>
  ),
};

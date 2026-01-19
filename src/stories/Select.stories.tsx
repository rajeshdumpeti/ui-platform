import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components/Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
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
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { label: "All Classes", value: "all" },
      { label: "Class 10-A", value: "10a" },
      { label: "Class 9-B", value: "9b" },
      { label: "Class 8-C", value: "8c" },
    ],
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3">
      <Select size="xs" options={[{ label: "XS", value: "xs" }]} />
      <Select size="sm" options={[{ label: "SM", value: "sm" }]} />
      <Select size="md" options={[{ label: "MD", value: "md" }]} />
      <Select size="lg" options={[{ label: "LG", value: "lg" }]} />
      <Select size="xl" options={[{ label: "XL", value: "xl" }]} />
    </div>
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <Select>
      <option value="">Select status</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
      <option value="leave">On Leave</option>
    </Select>
  ),
};

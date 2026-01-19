import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../components/DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    size: "md",
  },
};

export const Range: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <DatePicker size="sm" />
      <DatePicker size="md" />
      <DatePicker size="lg" />
    </div>
  ),
};

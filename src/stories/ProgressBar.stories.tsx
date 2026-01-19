import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "../components/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 68,
    showLabel: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <ProgressBar value={92} variant="success" />
      <ProgressBar value={68} variant="primary" />
      <ProgressBar value={45} variant="warning" />
      <ProgressBar value={22} variant="error" />
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: "Heads up!",
    description: "Student records will sync after approval.",
    variant: "info",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      <Alert title="Success" description="Attendance updated." variant="success" />
      <Alert title="Warning" description="Sync delayed." variant="warning" />
      <Alert title="Error" description="Save failed." variant="error" />
      <Alert title="Info" description="New policy applied." variant="info" />
    </div>
  ),
};

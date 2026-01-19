import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../components/Toast";
import { Button } from "../components/Button";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: "Message sent",
    description: "Parents were notified successfully.",
    variant: "success",
  },
};

export const WithAction: Story = {
  render: () => (
    <div className="max-w-md">
      <Toast
        title="Export ready"
        description="Attendance report is ready to download."
        variant="info"
        action={<Button size="sm">Download</Button>}
      />
    </div>
  ),
};

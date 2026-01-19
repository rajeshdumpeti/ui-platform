import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "../components/Dialog";
import { Button } from "../components/Button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>
          Delete Student
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Delete student record?"
          description="This action cannot be undone."
          confirmText="Delete"
          cancelText="Cancel"
        />
      </>
    );
  },
};

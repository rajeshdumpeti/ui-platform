import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Edit Student"
          description="Update student details and save."
          footer={
            <div className="flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button>Save</Button>
            </div>
          }
        >
          <p className="text-body-medium text-neutral-600">
            Add form controls inside the modal content area.
          </p>
        </Modal>
      </>
    );
  },
};

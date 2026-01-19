import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "../components/Drawer";
import { Button } from "../components/Button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Filters"
          footer={
            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Reset
              </Button>
              <Button>Apply</Button>
            </div>
          }
        >
          <div className="space-y-3 text-body-small text-neutral-600">
            <p>Class level</p>
            <p>Status</p>
            <p>Sort order</p>
          </div>
        </Drawer>
      </>
    );
  },
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SplitButton } from "../components/SplitButton";
import { Menu, MenuItem } from "../components/Menu";
import { Icon } from "../components/Icon";

const meta: Meta<typeof SplitButton> = {
  title: "Components/SplitButton",
  component: SplitButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="relative inline-flex flex-col items-start gap-3">
        <SplitButton
          label="Export"
          onClick={() => alert("Primary action")}
          onToggle={() => setOpen((prev) => !prev)}
        />
        {open && (
          <Menu className="w-40">
            <MenuItem icon={<Icon name="download" size="sm" />}>
              Download CSV
            </MenuItem>
            <MenuItem icon={<Icon name="description" size="sm" />}>
              Download PDF
            </MenuItem>
          </Menu>
        )}
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <SplitButton label="Primary" />
      <SplitButton label="Secondary" variant="secondary" />
      <SplitButton label="Danger" variant="danger" />
      <SplitButton label="Success" variant="success" />
    </div>
  ),
};

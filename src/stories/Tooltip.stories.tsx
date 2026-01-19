import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "../components/Tooltip";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Tooltip content="Edit profile">
        <Button size="sm">Hover me</Button>
      </Tooltip>
      <Tooltip content="More actions" position="right">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200">
          <Icon name="more_vert" size="sm" />
        </span>
      </Tooltip>
    </div>
  ),
};

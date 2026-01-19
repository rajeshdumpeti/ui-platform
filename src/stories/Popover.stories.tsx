import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "../components/Popover";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover
      trigger={<Button size="sm">Open Popover</Button>}
      content={
        <div className="space-y-2">
          <p className="text-sm font-semibold text-neutral-900">Quick Filters</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" size="xs">
              Active
            </Badge>
            <Badge variant="secondary" size="xs">
              Inactive
            </Badge>
            <Badge variant="success" size="xs">
              Good
            </Badge>
          </div>
        </div>
      }
    />
  ),
};

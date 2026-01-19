import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../components/IconButton";
import { Icon } from "../components/Icon";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost", "link", "danger", "success"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    ariaLabel: "Search",
    icon: <Icon name="search" size="sm" />,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <IconButton ariaLabel="Add" icon={<Icon name="add" size="sm" />} />
      <IconButton
        ariaLabel="Edit"
        variant="secondary"
        icon={<Icon name="edit" size="sm" />}
      />
      <IconButton
        ariaLabel="Delete"
        variant="danger"
        icon={<Icon name="delete" size="sm" />}
      />
      <IconButton
        ariaLabel="Success"
        variant="success"
        icon={<Icon name="check" size="sm" />}
      />
      <IconButton
        ariaLabel="Ghost"
        variant="ghost"
        icon={<Icon name="more_vert" size="sm" />}
      />
    </div>
  ),
};

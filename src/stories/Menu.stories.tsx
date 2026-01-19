import type { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuItem } from "../components/Menu";
import { Icon } from "../components/Icon";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu className="w-64">
      <MenuItem icon={<Icon name="dashboard" size="sm" />} active>
        Dashboard
      </MenuItem>
      <MenuItem icon={<Icon name="group" size="sm" />}>Students</MenuItem>
      <MenuItem icon={<Icon name="person" size="sm" />}>Teachers</MenuItem>
      <MenuItem icon={<Icon name="event" size="sm" />}>Attendance</MenuItem>
      <MenuItem icon={<Icon name="grade" size="sm" />}>Marks</MenuItem>
      <MenuItem icon={<Icon name="notifications" size="sm" />} badge="2">
        Notifications
      </MenuItem>
      <MenuItem icon={<Icon name="settings" size="sm" />}>Settings</MenuItem>
    </Menu>
  ),
};

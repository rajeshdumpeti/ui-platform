import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "../components/List";
import { Icon } from "../components/Icon";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof List>;

export const SystemNotices: Story = {
  render: () => (
    <List className="max-w-3xl">
      <ListItem
        leading={
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning-100 text-warning-600">
            <Icon name="build" size="sm" />
          </div>
        }
        title="System Maintenance"
        subtitle="Scheduled for Friday, 10:00 PM - 12:00 AM EST."
        meta="2h ago"
      />
      <ListItem
        leading={
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            <Icon name="person" size="sm" />
          </div>
        }
        title="New Teacher Accounts"
        subtitle="3 new teacher accounts are pending your approval."
        meta="5h ago"
      />
      <ListItem
        leading={
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success-100 text-success-600">
            <Icon name="check_circle" size="sm" />
          </div>
        }
        title="Attendance Report Generated"
        subtitle="Weekly student attendance report is ready for download."
        meta="1d ago"
      />
    </List>
  ),
};

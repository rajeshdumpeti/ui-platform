import type { Meta, StoryObj } from "@storybook/react";
import { QuickActionCard } from "../components/QuickActionCard";
import { Icon } from "../components/Icon";

const meta: Meta<typeof QuickActionCard> = {
  title: "Components/QuickActionCard",
  component: QuickActionCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof QuickActionCard>;

export const Default: Story = {
  args: {
    title: "Manage Students",
    description: "View and update records",
    icon: <Icon name="group" size="sm" />,
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-4">
      <QuickActionCard
        title="Manage Students"
        description="Student records"
        icon={<Icon name="group" size="sm" />}
      />
      <QuickActionCard
        title="Manage Teachers"
        description="Teacher profiles"
        icon={<Icon name="person" size="sm" />}
      />
      <QuickActionCard
        title="Reports"
        description="Attendance reports"
        icon={<Icon name="article" size="sm" />}
      />
      <QuickActionCard
        title="Academic"
        description="Marks & grades"
        icon={<Icon name="bar_chart" size="sm" />}
      />
    </div>
  ),
};

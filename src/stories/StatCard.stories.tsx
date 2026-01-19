import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "../components/StatCard";
import { Icon } from "../components/Icon";

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    title: "Total Students",
    value: "1,240",
    badgeLabel: "+12%",
    badgeVariant: "success",
    icon: <Icon name="school" size="sm" />,
    helperText: "Last 30 days",
  },
};

export const Variations: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Total Students"
        value="1,240"
        badgeLabel="+12%"
        badgeVariant="success"
        icon={<Icon name="school" size="sm" />}
      />
      <StatCard
        title="Total Teachers"
        value="85"
        badgeLabel="Stable"
        badgeVariant="info"
        icon={<Icon name="person" size="sm" />}
      />
      <StatCard
        title="Attendance Today"
        value="92%"
        badgeLabel="Good"
        badgeVariant="success"
        icon={<Icon name="check_circle" size="sm" />}
      />
    </div>
  ),
};

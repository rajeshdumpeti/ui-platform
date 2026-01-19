import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "../components/StatCard";
import { QuickActionCard } from "../components/QuickActionCard";
import { List, ListItem } from "../components/List";
import { Icon } from "../components/Icon";

const meta: Meta = {
  title: "Patterns/Dashboard Overview",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

export const Overview: StoryObj = {
  render: () => (
    <div className="space-y-10">
      <section className="grid gap-4 md:grid-cols-3">
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
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-heading-small">Quick Actions</h2>
          <span className="text-caption text-neutral-400">4 actions</span>
        </div>
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
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-heading-small">System Status & Notices</h2>
          <button className="text-sm font-medium text-primary-600">
            View All
          </button>
        </div>
        <List>
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
      </section>
    </div>
  ),
};

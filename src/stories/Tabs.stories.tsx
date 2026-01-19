import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs";
import { Button } from "../components/Button";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="academic">Academic</TabsTrigger>
        <TabsTrigger value="attendance">Attendance</TabsTrigger>
        <TabsTrigger value="remarks">Remarks</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="space-y-4">
          <p className="text-body-medium text-neutral-600">
            Student performance summary and recent activity.
          </p>
          <Button size="sm">View Report</Button>
        </div>
      </TabsContent>
      <TabsContent value="academic">
        <p className="text-body-medium text-neutral-600">
          Academic scores and subject-wise breakdown.
        </p>
      </TabsContent>
      <TabsContent value="attendance">
        <p className="text-body-medium text-neutral-600">
          Attendance trends and monthly status.
        </p>
      </TabsContent>
      <TabsContent value="remarks">
        <p className="text-body-medium text-neutral-600">
          Recent teacher remarks and notes.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/Card";
import { Button } from "../components/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Student Profile</CardTitle>
        <CardDescription>Latest attendance summary</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-body-small text-neutral-500">Attendance</span>
          <span className="text-heading-small font-semibold text-neutral-900">
            92%
          </span>
        </div>
        <div className="h-2 rounded-full bg-secondary-100">
          <div className="h-2 w-4/5 rounded-full bg-primary-500" />
        </div>
      </CardContent>
      <CardFooter>
        <span className="text-caption text-neutral-500">Updated 2h ago</span>
        <Button size="sm">View</Button>
      </CardFooter>
    </Card>
  ),
};

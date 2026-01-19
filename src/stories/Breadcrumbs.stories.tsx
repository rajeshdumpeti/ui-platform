import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../components/Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Students", href: "#" },
      { label: "All Students" },
    ],
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "#" },
      { label: "Students", href: "#" },
      { label: "Student Directory", href: "#" },
      { label: "Aarav Sharma" },
    ],
  },
};

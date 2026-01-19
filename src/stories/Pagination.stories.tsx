import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    currentPage: { control: { type: "number", min: 1 } },
    totalPages: { control: { type: "number", min: 1 } },
    siblingCount: { control: { type: "number", min: 0, max: 2 } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1,
  },
};

export const Interactive: Story = {
  render: () => {
    const [page, setPage] = React.useState(3);
    return (
      <div className="space-y-3">
        <Pagination
          currentPage={page}
          totalPages={12}
          onPageChange={setPage}
        />
        <div className="text-sm text-neutral-600">
          Page {page} of 12
        </div>
      </div>
    );
  },
};

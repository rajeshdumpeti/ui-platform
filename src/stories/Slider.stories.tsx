import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "../components/Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 60,
    label: "Attendance threshold",
    helperText: "Set the minimum attendance percentage.",
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState(75);
    return (
      <div className="w-72 space-y-2">
        <Slider
          min={0}
          max={100}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          label={`Score: ${value}`}
        />
        <div className="text-sm text-neutral-500">Current value: {value}</div>
      </div>
    );
  },
};

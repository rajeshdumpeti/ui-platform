import type { Meta, StoryObj } from "@storybook/react";
import { LoadingButton } from "../components/LoadingButton";
import { Icon } from "../components/Icon";

const meta: Meta<typeof LoadingButton> = {
  title: "Components/LoadingButton",
  component: LoadingButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoadingButton>;

export const Default: Story = {
  args: {
    children: "Send Message",
  },
};

export const Loading: Story = {
  args: {
    children: "Send Message",
    isLoading: true,
    loadingText: "Sending...",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Download",
    rightIcon: <Icon name="download" size="sm" />,
  },
};

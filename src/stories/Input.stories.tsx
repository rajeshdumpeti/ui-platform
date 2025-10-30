import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";
import { Icon } from "../components/Icon";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Enterprise-grade input field with multiple sizes, states, and icon support for professional applications.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    state: {
      control: { type: "select" },
      options: ["default", "error", "disabled", "readonly"],
    },
    leftIcon: {
      control: { type: "boolean" },
    },
    rightIcon: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter your information...",
    size: "md",
    state: "default",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8 max-w-md">
      <div className="grid gap-6">
        <h3 className="text-lg font-semibold text-gray-900">Input Sizes</h3>
        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
          <div key={size} className="flex flex-col gap-3">
            <label className="text-sm font-medium text-gray-700 capitalize">
              {size} Size - Height:{" "}
              {size === "xs"
                ? "32px"
                : size === "sm"
                  ? "36px"
                  : size === "md"
                    ? "40px"
                    : size === "lg"
                      ? "44px"
                      : "48px"}
            </label>
            <Input
              size={size}
              placeholder={`Placeholder for ${size} input field...`}
            />
            <div className="flex gap-4">
              <Input
                size={size}
                leftIcon={<Icon name="search" size="sm" />}
                placeholder={`With left icon...`}
                className="flex-1"
              />
              <Input
                size={size}
                rightIcon={
                  <Icon
                    name="check_circle"
                    size="sm"
                    className="text-green-500"
                  />
                }
                placeholder={`With right icon...`}
                className="flex-1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <h3 className="text-lg font-semibold text-gray-900">Input States</h3>
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Default State
          </label>
          <Input state="default" placeholder="Normal input field..." />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Error State
          </label>
          <Input
            state="error"
            placeholder="Invalid input value..."
            defaultValue="wrong@email"
          />
          <p className="text-xs text-red-600">
            Please enter a valid email address
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Disabled State
          </label>
          <Input state="disabled" placeholder="This input is disabled..." />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Readonly State
          </label>
          <Input
            state="readonly"
            defaultValue="This value cannot be modified"
          />
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <h3 className="text-lg font-semibold text-gray-900">Input with Icons</h3>
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Search Input
          </label>
          <Input
            leftIcon={<Icon name="search" size="sm" />}
            placeholder="Search documents, files, and more..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Email with Validation
          </label>
          <Input
            leftIcon={<Icon name="mail" size="sm" />}
            rightIcon={
              <Icon name="check_circle" size="sm" className="text-green-500" />
            }
            placeholder="name@company.com"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Password with Toggle
          </label>
          <Input
            leftIcon={<Icon name="lock" size="sm" />}
            rightIcon={
              <Icon name="visibility" size="sm" className="text-gray-400" />
            }
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Currency Input
          </label>
          <Input
            leftIcon={<Icon name="attach_money" size="sm" />}
            placeholder="0.00"
            type="number"
            step="0.01"
          />
        </div>
      </div>
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <h3 className="text-lg font-semibold text-gray-900">Input Types</h3>
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Text</label>
          <Input type="text" placeholder="Full name" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <Input type="email" placeholder="name@company.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <Input type="password" placeholder="••••••••" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Number</label>
          <Input type="number" placeholder="Age" min="0" max="120" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Telephone</label>
          <Input type="tel" placeholder="+1 (555) 000-0000" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">URL</label>
          <Input type="url" placeholder="https://company.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Date</label>
          <Input type="date" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Time</label>
          <Input type="time" />
        </div>
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Full Width Inputs</h3>
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Default Full Width
          </label>
          <Input
            fullWidth
            placeholder="This input spans the full container width"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Search Full Width
          </label>
          <Input
            fullWidth
            leftIcon={<Icon name="search" size="sm" />}
            placeholder="Search across all content..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Full Width with Validation
          </label>
          <Input
            fullWidth
            leftIcon={<Icon name="mail" size="sm" />}
            rightIcon={<Icon name="error" size="sm" className="text-red-500" />}
            placeholder="Enter valid email address"
            state="error"
          />
          <p className="text-xs text-red-600">Please check your email format</p>
        </div>
      </div>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <h3 className="text-lg font-semibold text-gray-900">
        Real World Examples
      </h3>

      <div className="grid gap-6 p-6 border border-gray-200 rounded-lg">
        <h4 className="font-medium text-gray-900">User Registration Form</h4>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                First Name
              </label>
              <Input placeholder="John" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Last Name
              </label>
              <Input placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="john.doe@company.com"
              leftIcon={<Icon name="mail" size="sm" />}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Input
              type="tel"
              placeholder="+1 (555) 000-0000"
              size="md" // Use custom Size prop (overridden from HTML; defaults to "md")
              leftIcon={<Icon name="smartphone" size="sm" />}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 p-6 border border-gray-200 rounded-lg">
        <h4 className="font-medium text-gray-900">Payment Information</h4>
        <div className="grid gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Card Number
            </label>
            <Input
              placeholder="1234 5678 9012 3456"
              leftIcon={<Icon name="credit_card" size="sm" />}
              rightIcon={
                <Icon
                  name="check_circle"
                  size="sm"
                  className="text-green-500"
                />
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <Input placeholder="MM/YY" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">CVV</label>
              <Input
                placeholder="123"
                rightIcon={
                  <Icon name="help" size="sm" className="text-gray-400" />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    placeholder: "Experiment with different configurations...",
    size: "md",
    state: "default",
    fullWidth: false,
  },
  argTypes: {
    leftIcon: {
      mapping: {
        false: undefined,
        true: <Icon name="search" size="sm" />,
      },
    },
    rightIcon: {
      mapping: {
        false: undefined,
        true: <Icon name="check_circle" size="sm" />,
      },
    },
  },
};

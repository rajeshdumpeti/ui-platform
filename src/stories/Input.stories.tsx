import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";
import {
  Search,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Calendar,
  Phone,
} from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    state: {
      control: "select",
      options: ["default", "error", "disabled", "readonly"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter your email...",
    size: "md",
    label: "Email Address",
  },
};

export const ModernSizes: Story = {
  render: () => (
    <div className="w-[420px] space-y-8 p-8 rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 shadow-sm">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Input Sizes</h3>
        <div className="space-y-6">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <div key={size} className="space-y-2">
              <div className="text-sm font-medium text-gray-700">
                {size === "xs" && "Extra Small"}
                {size === "sm" && "Small"}
                {size === "md" && "Medium"}
                {size === "lg" && "Large"}
                {size === "xl" && "Extra Large"}
              </div>
              <div className="flex items-center gap-4">
                <Input
                  size={size}
                  placeholder="Type here..."
                  className="flex-1"
                />
                <div className="text-xs text-gray-400 w-16 text-right">
                  {size === "xs" && "32px"}
                  {size === "sm" && "36px"}
                  {size === "md" && "40px"}
                  {size === "lg" && "44px"}
                  {size === "xl" && "48px"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const ModernStates: Story = {
  render: () => (
    <div className="w-[420px] space-y-8 p-8 rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 shadow-sm">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Input States</h3>
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Default</div>
            <Input
              placeholder="Enter your information..."
              helperText="This is a regular input field"
            />
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Error State</div>
            <Input
              state="error"
              placeholder="Invalid input"
              helperText="Please enter a valid value"
              rightIcon={<AlertCircle className="h-4 w-4" />}
            />
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Disabled</div>
            <Input
              state="disabled"
              placeholder="Cannot interact with this field"
              helperText="This field is disabled"
            />
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Read Only</div>
            <Input
              state="readonly"
              value="Pre-filled information"
              helperText="This value is read-only"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="w-[420px] space-y-8 p-8 rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50/50 shadow-sm">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Icon Variants</h3>
        <div className="space-y-4">
          <Input
            label="Search"
            leftIcon={<Search className="h-4 w-4" />}
            placeholder="Search for anything..."
            helperText="Type to search"
          />

          <Input
            label="Email"
            leftIcon={<Mail className="h-4 w-4" />}
            rightIcon={<CheckCircle className="h-4 w-4 text-green-500" />}
            placeholder="name@example.com"
            helperText="Valid email format"
          />

          <Input
            label="Password"
            leftIcon={<Lock className="h-4 w-4" />}
            rightIcon={<EyeOff className="h-4 w-4 text-gray-400" />}
            type="password"
            placeholder="Enter password"
            helperText="At least 8 characters"
          />

          <Input
            label="Phone"
            leftIcon={<Phone className="h-4 w-4" />}
            placeholder="+1 (555) 123-4567"
            helperText="Include country code"
          />
        </div>
      </div>
    </div>
  ),
};

export const RegistrationForm: Story = {
  render: () => (
    <div className="w-[480px] space-y-8">
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50/50 p-8 shadow-sm">
        <div className="space-y-2 mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Create Account
          </h3>
          <p className="text-sm text-gray-600">Fill in your details below</p>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              placeholder="John"
              leftIcon={<User className="h-4 w-4" />}
            />
            <Input
              label="Last Name"
              placeholder="Doe"
              leftIcon={<User className="h-4 w-4" />}
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            placeholder="john.doe@example.com"
            leftIcon={<Mail className="h-4 w-4" />}
            helperText="We'll send important updates here"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a strong password"
            leftIcon={<Lock className="h-4 w-4" />}
            rightIcon={<EyeOff className="h-4 w-4 text-gray-400" />}
          />

          <Input
            label="Date of Birth"
            type="date"
            leftIcon={<Calendar className="h-4 w-4" />}
          />
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  ),
};

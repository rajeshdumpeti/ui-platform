import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../components/Icon";
import {
  getAllIconNames,
  searchIcons,
  iconCategories,
  getIconsByCategory,
  type IconName,
} from "../lib";

// Story metadata
const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A comprehensive set of Material Icons for SmartGate applications. Search, browse by category, or copy icon names for use in your components.",
      },
    },
  },
  argTypes: {
    name: {
      control: "select",
      options: getAllIconNames(),
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "color",
    },
    disabled: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    name: "home",
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Icon name="home" size={size} />
          <span className="text-sm text-gray-600">
            {size} ({size === "sm" ? 18 : size === "md" ? 24 : 32}px)
          </span>
        </div>
      ))}
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-6">
      <div className="flex flex-col items-center gap-2">
        <Icon
          name="add_circle"
          size="lg"
          onClick={() => alert("Clicked!")}
          className="text-green-600"
        />
        <span className="text-sm text-gray-600">Clickable</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="settings" size="lg" disabled />
        <span className="text-sm text-gray-600">Disabled</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="download" size="lg" className="text-blue-600" />
        <span className="text-sm text-gray-600">Colored</span>
      </div>
    </div>
  ),
};

export const Categories: Story = {
  render: () => (
    <div className="p-6 max-w-7xl">
      {Object.entries(iconCategories).map(([category, icons]) => (
        <div key={category} className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize border-b pb-2">
            {category.replace(/_/g, " ")} ({icons.length})
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
            {icons.map((iconName) => (
              <div
                key={iconName}
                className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
                onClick={() => navigator.clipboard.writeText(iconName)}
              >
                <Icon
                  name={iconName}
                  size="md"
                  className="text-gray-700 group-hover:text-gray-900"
                />
                <span className="mt-2 text-xs font-mono text-center text-gray-600 group-hover:text-gray-800">
                  {iconName}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const IconGrid: Story = {
  render: () => {
    const featuredIcons: IconName[] = [
      "home",
      "search",
      "settings",
      "person",
      "notifications",
      "mail",
      "dashboard",
      "edit",
      "delete",
      "add_circle",
      "check_circle",
      "cancel",
      "info",
      "help",
      "visibility",
      "download",
      "upload",
      "link",
      "more_vert",
    ];

    return (
      <div className="p-6 max-w-4xl">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {featuredIcons.map((name) => (
            <div
              key={name}
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <Icon
                name={name}
                size="md"
                className="text-gray-700 group-hover:text-gray-900"
              />
              <span className="mt-2 text-xs font-mono text-center text-gray-600">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const AllIconsSearch: Story = {
  render: () => {
    const [search, setSearch] = React.useState("");
    const [copiedIcon, setCopiedIcon] = React.useState<IconName | null>(null);

    const filteredIcons = searchIcons(search);

    const handleCopy = async (iconName: IconName) => {
      await navigator.clipboard.writeText(iconName);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(null), 2000);
    };

    return (
      <div className="p-6 max-w-7xl">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search 150+ icons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-2 text-sm text-gray-500">
            {filteredIcons.length} of {getAllIconNames().length} icons found
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-3">
          {filteredIcons.map((iconName) => (
            <div
              key={iconName}
              className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => handleCopy(iconName)}
            >
              <Icon
                name={iconName}
                size="md"
                className={
                  copiedIcon === iconName ? "text-green-600" : "text-gray-700"
                }
              />
              <span
                className={`mt-1 text-xs font-mono text-center ${
                  copiedIcon === iconName
                    ? "text-green-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {copiedIcon === iconName ? "Copied!" : iconName}
              </span>
            </div>
          ))}
        </div>

        {filteredIcons.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Icon
              name="search"
              size="lg"
              className="mx-auto mb-4 text-gray-400"
            />
            <p>No icons found matching "{search}"</p>
            <p className="text-sm mt-2">Try a different search term</p>
          </div>
        )}
      </div>
    );
  },
};

// Utility story for development
export const IconUtilities: Story = {
  render: () => (
    <div className="p-6 max-w-4xl">
      <div className="grid gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Available Icons</h3>
          <code className="text-sm text-blue-700">
            Total: {getAllIconNames().length} icons
          </code>
        </div>

        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {Object.keys(iconCategories).map((category) => (
              <span
                key={category}
                className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded capitalize"
              >
                {category.replace(/_/g, " ")} (
                {iconCategories[category as keyof typeof iconCategories].length}
                )
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

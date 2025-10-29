import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { Plus, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

const meta: Meta = {
  title: "Design System/Overview",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

export const DesignSystemShowcase: StoryObj = {
  render: () => (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="container-token py-6">
          <h1 className="text-display-large text-neutral-900">Design System</h1>
          <p className="text-body-large text-neutral-600 mt-2">
            A comprehensive design system built with Tailwind CSS and React
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-token section-spacing">
        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-heading-large mb-8">Buttons</h2>

          {/* Variants */}
          <div className="mb-8">
            <h3 className="text-heading-medium mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <h3 className="text-heading-medium mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          {/* States */}
          <div className="mb-8">
            <h3 className="text-heading-medium mb-4">States</h3>
            <div className="flex flex-wrap gap-4">
              <Button isLoading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button animated={false}>No Animation</Button>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h3 className="text-heading-medium mb-4">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button leftIcon={<Plus className="w-4 h-4" />}>Add Item</Button>
              <Button rightIcon={<ArrowRight className="w-4 h-4" />}>
                Continue
              </Button>
              <Button
                variant="success"
                leftIcon={<CheckCircle className="w-4 h-4" />}
              >
                Success
              </Button>
              <Button
                variant="danger"
                leftIcon={<AlertTriangle className="w-4 h-4" />}
              >
                Warning
              </Button>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-heading-large mb-8">Typography</h2>
          <div className="space-y-6">
            <div>
              <h1 className="text-display-large text-neutral-900">
                Display Large
              </h1>
              <p className="text-caption text-neutral-600">
                text-display-large
              </p>
            </div>
            <div>
              <h2 className="text-heading-large text-neutral-900">
                Heading Large
              </h2>
              <p className="text-caption text-neutral-600">
                text-heading-large
              </p>
            </div>
            <div>
              <h3 className="text-heading-medium text-neutral-900">
                Heading Medium
              </h3>
              <p className="text-caption text-neutral-600">
                text-heading-medium
              </p>
            </div>
            <div>
              <p className="text-body-large text-neutral-700">
                Body Large - The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-caption text-neutral-600">text-body-large</p>
            </div>
            <div>
              <p className="text-body-medium text-neutral-700">
                Body Medium - The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-caption text-neutral-600">text-body-medium</p>
            </div>
            <div>
              <p className="text-caption text-neutral-600">
                Caption - Used for helper text and labels
              </p>
              <p className="text-caption text-neutral-600">text-caption</p>
            </div>
          </div>
        </section>

        {/* Color Palette Preview */}
        <section>
          <h2 className="text-heading-large mb-8">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Primary */}
            <div className="text-center">
              <div className="w-full h-20 bg-primary-500 rounded-lg mb-2" />
              <p className="text-body-small font-medium">Primary 500</p>
              <p className="text-caption text-neutral-600">#0ea5e9</p>
            </div>
            {/* Success */}
            <div className="text-center">
              <div className="w-full h-20 bg-success-500 rounded-lg mb-2" />
              <p className="text-body-small font-medium">Success 500</p>
              <p className="text-caption text-neutral-600">#22c55e</p>
            </div>
            {/* Error */}
            <div className="text-center">
              <div className="w-full h-20 bg-error-500 rounded-lg mb-2" />
              <p className="text-body-small font-medium">Error 500</p>
              <p className="text-caption text-neutral-600">#ef4444</p>
            </div>
            {/* Secondary */}
            <div className="text-center">
              <div className="w-full h-20 bg-secondary-500 rounded-lg mb-2" />
              <p className="text-body-small font-medium">Secondary 500</p>
              <p className="text-caption text-neutral-600">#64748b</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  ),
};

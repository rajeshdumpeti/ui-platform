import type { Meta, StoryObj } from "@storybook/react";
import { Container, Box, Stack, Grid, Divider } from "../components/Layout";
import { Card } from "../components/Card";

const meta: Meta<typeof Container> = {
  title: "Components/Layout",
  component: Container,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const ContainerSizes: Story = {
  render: () => (
    <div className="space-y-6">
      {(["sm", "md", "lg", "xl", "full"] as const).map((size) => (
        <Container key={size} size={size}>
          <Card className="p-4">
            <p className="text-sm text-neutral-600">Container size: {size}</p>
          </Card>
        </Container>
      ))}
    </div>
  ),
};

export const StackExample: Story = {
  render: () => (
    <Stack direction="row" gap="md" align="center">
      <Box className="h-12 w-12 rounded-lg bg-primary-100" />
      <Box className="h-12 w-12 rounded-lg bg-success-100" />
      <Box className="h-12 w-12 rounded-lg bg-warning-100" />
    </Stack>
  ),
};

export const GridExample: Story = {
  render: () => (
    <Grid cols={3} gap="md">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="p-4 text-sm text-neutral-500">
          Grid item {index + 1}
        </Card>
      ))}
    </Grid>
  ),
};

export const DividerExample: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-neutral-600">Section one</p>
      <Divider />
      <p className="text-sm text-neutral-600">Section two</p>
    </div>
  ),
};

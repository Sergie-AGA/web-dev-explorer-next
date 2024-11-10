import type { Meta, StoryObj } from "@storybook/react";

import SimpleBadge from "./SimpleBadge";

const meta = {
  title: "Global/SimpleBadge",
  component: SimpleBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    badge: { control: "select" },
    showTitle: { control: "boolean" },
    className: { control: "text" },
  },
} satisfies Meta<typeof SimpleBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: "tool",
    showTitle: true,
  },
};

export const WithoutTitle: Story = {
  args: {
    badge: "tool",
    showTitle: false,
  },
};

export const CustomClass: Story = {
  args: {
    badge: "tool",
    showTitle: true,
    className: "bg-emerald-700",
  },
};

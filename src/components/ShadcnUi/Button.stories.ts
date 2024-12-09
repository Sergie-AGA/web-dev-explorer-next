import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Shadcn UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
    asChild: { control: "boolean" },
    className: { control: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Default Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Destructive Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Ghost Button",
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "Large Button",
  },
};

export const IconButton: Story = {
  args: {
    variant: "default",
    size: "icon",
    children: "🔍",
  },
};

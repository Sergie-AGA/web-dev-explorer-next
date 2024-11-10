import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta = {
  title: "ShadcnUI/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["default", "sm", "lg"] },
    className: { control: "text" },
    pressed: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    pressed: false,
    children: "Toggle",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    pressed: false,
    children: "Outline Toggle",
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
    pressed: false,
    children: "Small Toggle",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
    pressed: false,
    children: "Large Toggle",
  },
};

export const Pressed: Story = {
  args: {
    variant: "default",
    size: "default",
    pressed: true,
    children: "Pressed Toggle",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import GlitchText from "./GlitchText";

const meta = {
  title: "World of CSS Effects/Components/Glitch Text",
  component: GlitchText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
    },
    text: { control: "text" },
    className: { control: "text" },
    fixed: { control: "boolean" },
  },
} satisfies Meta<typeof GlitchText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: "h1",
    text: "Glitch Effect",
    fixed: true,
  },
};

export const Paragraph: Story = {
  args: {
    tag: "p",
    text: "This is a glitchy paragraph!",
    fixed: true,
  },
};

export const NonFixedGlitch: Story = {
  args: {
    tag: "h2",
    text: "Non-Fixed Glitch Effect",
    fixed: false,
  },
};

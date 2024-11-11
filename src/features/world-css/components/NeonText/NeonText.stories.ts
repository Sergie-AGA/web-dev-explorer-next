import type { Meta, StoryObj } from "@storybook/react";
import NeonText from "@/features/world-css/components/NeonText/NeonText";

const meta = {
  title: "World of CSS Effects/Components/Neon Text",
  component: NeonText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    flickerEffect: { control: "boolean" },
    tag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
    },
  },
} satisfies Meta<typeof NeonText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tag: "h1",
    text: "Neon Effect",
    flickerEffect: false,
  },
};

export const FlickerEffect: Story = {
  args: {
    tag: "h2",
    text: "Flickering Neon Text",
    flickerEffect: true,
  },
};

export const Paragraph: Story = {
  args: {
    tag: "p",
    text: "This is neon text in a paragraph.",
    flickerEffect: false,
  },
};

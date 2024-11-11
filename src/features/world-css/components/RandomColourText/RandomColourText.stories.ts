import type { Meta, StoryObj } from "@storybook/react";
import RandomColourText from "@/features/world-css/components/RandomColourText/RandomColourText";

const meta = {
  title: "World of CSS Effects/Components/Random Colour Text",
  component: RandomColourText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
} satisfies Meta<typeof RandomColourText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hover over each letter!",
  },
};

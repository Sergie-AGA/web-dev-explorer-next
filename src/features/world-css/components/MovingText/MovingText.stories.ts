import type { Meta, StoryObj } from "@storybook/react";
import MovingText from "@/features/world-css/components/MovingText/MovingText";

const meta = {
  title: "World of CSS Effects/Components/Moving Text",
  component: MovingText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
} satisfies Meta<typeof MovingText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hover to Move Me!",
  },
};

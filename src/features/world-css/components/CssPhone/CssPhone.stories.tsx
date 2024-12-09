import type { Meta, StoryObj } from "@storybook/react";
import CssPhone from "@/features/world-css/components/CssPhone/CssPhone";

const meta = {
  title: "World of CSS Effects/Components/CSS Phone",
  component: CssPhone,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    sentMessages: { control: "object" },
  },
} satisfies Meta<typeof CssPhone>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sentMessages: [
      { text: "Hello! How can I help you?", sender: "bot" },
      { text: "Can you give me a recommendation?", sender: "user" },
      { text: "Of course! Here's one for you.", sender: "bot" },
    ],
  },
};

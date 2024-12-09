import type { Meta, StoryObj } from "@storybook/react";
import SwitchingText from "@/features/world-css/components/SwitchingText/SwitchingText";

const meta = {
  title: "World of CSS Effects/Components/Switching Text",
  component: SwitchingText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: { type: "object" } },
  },
} satisfies Meta<typeof SwitchingText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <span key="1">First Message</span>,
      <span key="2">Second Message</span>,
      <span key="3">Third Message</span>,
    ],
  },
};

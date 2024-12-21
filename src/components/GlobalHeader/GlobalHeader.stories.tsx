import { Meta, StoryObj } from "@storybook/react";
import GlobalHeader from "./GlobalHeader";

const meta: Meta = {
  title: "Global/Components/Global Header",
  component: GlobalHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof GlobalHeader>;

export const Default: Story = {
  args: {
    title: "Web Dev Explorer",
    children: <button className="btn">Action</button>,
  },
};

export const WithCustomTitle: Story = {
  args: {
    title: "Custom Title",
    children: <button className="btn">Custom Action</button>,
  },
};

export const NoTitle: Story = {
  args: {
    title: "",
    children: <button className="btn">Another Action</button>,
  },
};

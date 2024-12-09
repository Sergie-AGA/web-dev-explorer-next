import type { Meta, StoryObj } from "@storybook/react";
import SimpleTabs from "./SimpleTabs";

const meta = {
  title: "Global/Components/Simple Tabs",
  component: SimpleTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tabData: { control: "object" },
    initialTab: { control: "text" },
    className: { control: "text" },
  },
} satisfies Meta<typeof SimpleTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabData: [
      { value: "tab1", title: "Tab 1" },
      { value: "tab2", title: "Tab 2" },
      { value: "tab3", title: "Tab 3" },
    ],
    initialTab: "tab1",
    children: [
      <div key="tab1">Content for Tab 1</div>,
      <div key="tab2">Content for Tab 2</div>,
      <div key="tab3">Content for Tab 3</div>,
    ],
  },
};

export const WithInitialTab: Story = {
  args: {
    tabData: [
      { value: "tab1", title: "Tab 1" },
      { value: "tab2", title: "Tab 2" },
    ],
    initialTab: "tab2",
    children: [
      <div key="tab1">Content for Tab 1</div>,
      <div key="tab2">Content for Tab 2</div>,
    ],
  },
};

export const CustomClass: Story = {
  args: {
    tabData: [
      { value: "tab1", title: "Tab 1" },
      { value: "tab2", title: "Tab 2" },
    ],
    initialTab: "tab1",
    className: "bg-blue-100",
    children: [
      <div key="tab1">Content for Tab 1</div>,
      <div key="tab2">Content for Tab 2</div>,
    ],
  },
};

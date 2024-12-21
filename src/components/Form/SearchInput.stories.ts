import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";

const meta: Meta = {
  title: "Global/Components/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    searchValue: { control: "text" },
    handleSearch: { action: "search" },
    placeholder: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    searchValue: "",
    placeholder: "Search...",
    handleSearch: (text) => console.log("Search:", text),
  },
};

export const WithText: Story = {
  args: {
    searchValue: "Hello",
    placeholder: "Search for items...",
    handleSearch: (text) => console.log("Search:", text),
  },
};

export const CustomPlaceholder: Story = {
  args: {
    searchValue: "",
    placeholder: "Type here to search...",
    handleSearch: (text) => console.log("Search:", text),
  },
};

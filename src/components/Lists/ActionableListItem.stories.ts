import { Meta, StoryObj } from "@storybook/react";
import ActionableListItem, {
  IActionableListItemProps,
} from "./ActionableListItem";
import { IconInfoCircle, IconLink } from "@tabler/icons-react";

const meta: Meta = {
  title: "Global/Components/ActionableListItem",
  component: ActionableListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    link: { control: "text" },
    icon: { control: "object" },
    label: { control: "text" },
    labelType: { control: { type: "select", options: ["green", "blue"] } },
    buttonText: { control: "text" },
    buttonIcon: { control: "object" },
    isButtonDisabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<IActionableListItemProps>;

export const Default: Story = {
  args: {
    title: "Learn More",
    description:
      "This is a sample item description providing additional context.",
    link: "#",
    icon: IconInfoCircle,
    label: "Informational",
    labelType: "green",
    buttonText: "Go to Link",
    buttonIcon: IconLink,
    isButtonDisabled: false,
  },
};

export const DisabledButton: Story = {
  args: {
    ...Default.args,
    buttonText: "Disabled",
    isButtonDisabled: true,
  },
};

export const BlueLabel: Story = {
  args: {
    ...Default.args,
    label: "External",
    labelType: "blue",
  },
};

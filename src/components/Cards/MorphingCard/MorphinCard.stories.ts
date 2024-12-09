import { Meta, StoryObj } from "@storybook/react";
import MorphingCard, { ICardProps } from "./MorphingCard";
import { IProject } from "@/config/projects";

const mockProjectData: IProject = {
  title: "Sample Project",
  description:
    "A description of the project showcasing its features and tech stack.",
  image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
  frontend: ["React", "Next.js"],
  backend: ["Node.js", "Express"],
  other: ["Supabase", "Stripe"],
  type: "exploration",
  path: "/sample-project",
  showProject: true,
  showLink: true,
};

const meta: Meta = {
  title: "Global/Components/MorphingCard",
  component: MorphingCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<ICardProps>;

export const Default: Story = {
  args: {
    data: mockProjectData,
  },
};

export const ConceptProject: Story = {
  args: {
    data: {
      ...mockProjectData,
      title: "Concept Design",
      type: "concept",
    },
  },
};

export const ToolProject: Story = {
  args: {
    data: {
      ...mockProjectData,
      title: "Developer Tool",
      type: "tool",
    },
  },
};

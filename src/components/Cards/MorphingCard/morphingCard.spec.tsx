import { render, screen, fireEvent } from "@testing-library/react";
import MorphingCard from "./MorphingCard";
import { IProject } from "@/config/projects";

describe("MorphingCard Component", () => {
  const mockProjectData: IProject = {
    title: "Sample Project",
    description: "A description of the sample project",
    image: "sample-image.jpg",
    frontend: ["React", "Next.js"],
    backend: ["Node.js", "Express"],
    apis: ["Open AI"],
    type: "exploration",
    path: "/sample-path",
    showProject: true,
    showLink: true,
  };

  it("renders project title, badge, and image", () => {
    render(<MorphingCard data={mockProjectData} />);

    expect(screen.getByText("Sample Project")).toBeInTheDocument();
    expect(screen.getByText("Explore")).toBeInTheDocument();
  });

  it("calls onClick when card is clicked", () => {
    const onClick = jest.fn();
    render(<MorphingCard data={mockProjectData} onClick={onClick} />);

    fireEvent.click(screen.getByAltText("Project image"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders the badge with the correct type", () => {
    render(<MorphingCard data={mockProjectData} />);

    expect(screen.getByText("exploration")).toBeInTheDocument();
  });
});

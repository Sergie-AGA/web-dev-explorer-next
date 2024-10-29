import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectModal from "@/features/homepage/components/ProjectModal/ProjectModal";
import { useUIStore } from "@/features/homepage/store/useUIStore";
import { IProject } from "@/config/projects";

jest.mock("@/features/homepage/store/useUIStore", () => ({
  useUIStore: jest.fn(),
}));

const mockToggleModal = jest.fn();
const mockSetActiveTech = jest.fn();

const mockProject: IProject = {
  title: "Test Project",
  description: "Test project description",
  image: "test-image.jpg",
  frontend: ["React", "Tailwind"],
  backend: ["Node.js"],
  apis: ["REST API"],
  showLink: true,
  path: "/test-project",
  type: "exploration",
  showProject: true,
};

describe("ProjectModal Component", () => {
  beforeEach(() => {
    (useUIStore as jest.MockedFunction<typeof useUIStore>).mockReturnValue({
      toggleModal: mockToggleModal,
      setActiveTech: mockSetActiveTech,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders project title and description", () => {
    render(
      <ProjectModal project={mockProject}>
        <button>Open Modal</button>
      </ProjectModal>
    );
    act(() => {
      fireEvent.click(screen.getByText("Open Modal"));
    });
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Test project description")).toBeInTheDocument();
  });

  it('displays "Coming soon..." when showLink is false', () => {
    const projectWithoutLink = { ...mockProject, showLink: false };
    render(
      <ProjectModal project={projectWithoutLink}>
        <button>Open Modal</button>
      </ProjectModal>
    );
    act(() => {
      fireEvent.click(screen.getByText("Open Modal"));
    });
    expect(screen.getByText("Coming soon...")).toBeInTheDocument();
  });

  it("renders project link when showLink is true", () => {
    render(
      <ProjectModal project={mockProject}>
        <button>Open Modal</button>
      </ProjectModal>
    );
    act(() => {
      fireEvent.click(screen.getByText("Open Modal"));
    });
    const link = screen.getByText("See Project");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/test-project");
  });
});

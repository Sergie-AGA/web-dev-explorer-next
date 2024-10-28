import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import ProjectGrid from "@/features/homepage/components/ProjectGrid";
import { projects } from "@/config/projects";
import "@testing-library/jest-dom";
import { useURLState } from "@/hooks/useURLState";

const mockRouterReplace = jest.fn();
const mockRouterRefresh = jest.fn();
const mockRouterPush = jest.fn();

jest.mock("next/navigation", () => {
  const originalModule = jest.requireActual("next/navigation");
  return {
    __esModule: true,
    ...originalModule,
    useRouter: jest.fn().mockImplementation(() => ({
      push: mockRouterPush,
      replace: mockRouterReplace,
      refresh: mockRouterRefresh,
    })),
    useSearchParams: jest
      .fn()
      .mockImplementation(() => new URLSearchParams(window.location.search)),
    usePathname: jest.fn().mockImplementation((pathArg) => pathArg),
  };
});

jest.mock("@/hooks/useURLState");

const mockUseURLState = useURLState as jest.MockedFunction<typeof useURLState>;

describe("ProjectGrid Component", () => {
  beforeEach(() => {
    mockUseURLState.mockReturnValue({
      frontend: ["React JS"],
    });
    mockRouterPush.mockClear();
  });

  it("renders the ProjectGrid with default project list", async () => {
    await act(async () => {
      render(<ProjectGrid />);
    });
    const displayedProjects = projects.filter((project) => project.showProject);
    displayedProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it("displays active filters section when filters are applied", async () => {
    await act(async () => {
      render(<ProjectGrid />);
    });
    expect(screen.getByText(/filters applied:/i)).toBeInTheDocument();
    expect(screen.getByText("Frontend:")).toBeInTheDocument();
    expect(screen.getByText("React JS")).toBeInTheDocument();
  });

  it("Calls the router when a specific filter badge is clicked", async () => {
    await act(async () => {
      render(<ProjectGrid />);
    });

    const removeIcon = screen.getByTestId("remove-icon");

    await act(async () => {
      fireEvent.click(removeIcon);
    });

    expect(mockRouterPush).toHaveBeenCalled();
  });

  it("displays filtered projects based on active filters", async () => {
    await act(async () => {
      render(<ProjectGrid />);
    });
    const filteredProjects = projects.filter(
      (project) =>
        project.showProject &&
        (project.frontend as string[]).includes("React JS")
    );

    filteredProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it("shows a message when no projects match the filters", async () => {
    mockUseURLState.mockReturnValueOnce({
      frontend: ["Nonexistent Tech"],
    });

    await act(async () => {
      render(<ProjectGrid />);
    });

    expect(
      screen.getByText(/no projects found with the applied filters/i)
    ).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { technologies } from "@/config/technologies";
import "@testing-library/jest-dom";
import FilterModal from "./FilterModal";

// mockRouter.js
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

describe("FilterModal Component", () => {
  it("renders the FilterModal with all filter categories and technologies", () => {
    render(<FilterModal />);

    expect(screen.getAllByText(/filters/i)[0]).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search by title or description/i)
    ).toBeInTheDocument();

    technologies.frontend.forEach((tech) => {
      expect(screen.getAllByText(tech.title)[0]).toBeInTheDocument();
    });
    technologies.backend.forEach((tech) => {
      expect(screen.getAllByText(tech.title)[0]).toBeInTheDocument();
    });
    technologies.other.forEach((tech) => {
      expect(screen.getAllByText(tech.title)[0]).toBeInTheDocument();
    });
  });

  it("updates search input correctly", () => {
    render(<FilterModal />);
    const searchInput = screen.getByPlaceholderText(
      /search by title or description/i
    );

    fireEvent.change(searchInput, { target: { value: "React" } });
    expect(searchInput).toHaveValue("React");
  });

  it("toggles tech badge selection when clicked", () => {
    render(<FilterModal />);
    const techBadge = screen.getByText(technologies.frontend[0].title);

    fireEvent.click(techBadge);
    expect(techBadge).toHaveClass("bg-cyan-600");

    fireEvent.click(techBadge);
    expect(techBadge).not.toHaveClass("bg-cyan-600");
  });

  it('clears all selected techs when "Clear Tech Filters" button is clicked', () => {
    render(<FilterModal />);
    const techBadge = screen.getByText(technologies.frontend[0].title);

    fireEvent.click(techBadge);
    expect(techBadge).toHaveClass("bg-cyan-600");

    fireEvent.click(screen.getByText(/clear tech filters/i));
    expect(techBadge).not.toHaveClass("bg-cyan-600");
  });

  it('does not apply filters or perform actions when "Apply Filters" is clicked without selections', () => {
    render(<FilterModal />);

    const applyFiltersButton = screen.getByText(/apply filters/i);
    fireEvent.click(applyFiltersButton);

    technologies.frontend.forEach((tech) => {
      expect(screen.getAllByText(tech.title)[0]).not.toHaveClass("bg-cyan-600");
    });
    const searchInput = screen.getByPlaceholderText(
      /search by title or description/i
    );
    expect(searchInput).toHaveValue("");
  });
});

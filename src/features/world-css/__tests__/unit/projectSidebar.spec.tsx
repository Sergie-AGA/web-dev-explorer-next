import { render, screen, fireEvent } from "@testing-library/react";
import { useSidebarStore } from "../../store/useUIChange";
import { componentData } from "../../components/componentData";
import ProjectSidebar from "../../components/Sidebar/ProjectSidebar";
import "@testing-library/jest-dom";

const resetSidebarStore = () => {
  useSidebarStore.setState({
    activeSidebar: "tsfx",
    activeSection: "tsfx",
    activeComponent: "glitch",
  });
};

describe("ProjectSidebar", () => {
  beforeEach(() => {
    resetSidebarStore();
    window.innerWidth = 500;
    window.dispatchEvent(new Event("resize"));
  });

  it("renders the sidebar with the project logo", () => {
    render(<ProjectSidebar />);
    expect(screen.getByAltText("Project Logo")).toBeInTheDocument();
  });

  it("toggles the mobile sidebar visibility on menu icon click", () => {
    render(<ProjectSidebar />);
    const menuIcon = screen.getByTestId("iconMenu");
    const sidebar = screen.getByRole("complementary");

    expect(sidebar).toHaveClass("translate-x-0");
    expect(menuIcon).toHaveClass("opacity-0");

    fireEvent.click(menuIcon);

    expect(sidebar).not.toHaveClass("translate-x-0");
    expect(menuIcon).not.toHaveClass("opacity-0");
  });

  it("toggles the mobile sidebar visibility on close icon click", () => {
    render(<ProjectSidebar />);
    const closeIcon = screen.getByTestId("iconX");
    const sidebar = screen.getByRole("complementary");

    expect(sidebar).toHaveClass("translate-x-0");

    fireEvent.click(closeIcon);

    expect(sidebar).not.toHaveClass("translate-x-0");
  });

  it("displays sidebar items based on componentData", () => {
    render(<ProjectSidebar />);
    componentData.forEach((component) => {
      expect(screen.getByText(component.title)).toBeInTheDocument();
    });
  });

  it("calls changeActiveSidebar when a sidebar item is clicked", () => {
    const changeActiveSidebarSpy = jest.spyOn(
      useSidebarStore.getState(),
      "changeActiveSidebar"
    );
    render(<ProjectSidebar />);
    const firstItem = screen.getByText(componentData[0].title);
    fireEvent.click(firstItem);
    expect(changeActiveSidebarSpy).toHaveBeenCalledWith(componentData[0].value);
  });
});

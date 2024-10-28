import { render, screen, fireEvent, act } from "@testing-library/react";
import GlobalMenu from "./GlobalMenu";
import "@testing-library/jest-dom";
import { useUIStore } from "@/features/homepage/store/useUIStore";

describe("GlobalMenu Component", () => {
  beforeEach(() => {
    act(() => {
      useUIStore.setState({
        openModal: jest.fn(),
      });
    });
  });

  it("renders the GlobalMenu with all menu items", () => {
    render(
      <div data-testid="menu-toggle">
        <GlobalMenu />
      </div>
    );

    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("Techs")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("toggles menu visibility when the toggle button is clicked", () => {
    render(
      <div data-testid="menu-toggle">
        <GlobalMenu />
      </div>
    );

    const toggleButton = screen.getByTestId("menu-toggle");

    // Initial state: Check the wrapper classes, not span text
    expect(screen.getByText("Filters").closest("button")).toHaveClass(
      "translate-x-[300%] opacity-0"
    );
    expect(screen.getByText("Techs").closest("button")).toHaveClass(
      "translate-x-[200%] opacity-0"
    );
    expect(screen.getByText("About").closest("button")).toHaveClass(
      "translate-x-[100%] opacity-0"
    );

    // Click to open menu
    fireEvent.click(toggleButton);
    expect(screen.getByText("Filters").closest("button")).not.toHaveClass(
      "opacity-0"
    );
    expect(screen.getByText("Techs").closest("button")).not.toHaveClass(
      "opacity-0"
    );
    expect(screen.getByText("About").closest("button")).not.toHaveClass(
      "opacity-0"
    );

    // Click to close menu
    fireEvent.click(toggleButton);
    expect(screen.getByText("Filters").closest("button")).toHaveClass(
      "translate-x-[300%] opacity-0"
    );
    expect(screen.getByText("Techs").closest("button")).toHaveClass(
      "translate-x-[200%] opacity-0"
    );
    expect(screen.getByText("About").closest("button")).toHaveClass(
      "translate-x-[100%] opacity-0"
    );
  });

  it("opens the correct modal when each menu item is clicked", () => {
    render(<GlobalMenu />);
    const openModalMock = useUIStore.getState().openModal;

    fireEvent.click(screen.getByText("Filters"));
    expect(openModalMock).toHaveBeenCalledWith("filter");

    fireEvent.click(screen.getByText("Techs"));
    expect(openModalMock).toHaveBeenCalledWith("tech");
  });

  it("displays the correct icon based on the menu open state", () => {
    render(
      <div data-testid="menu-toggle">
        <GlobalMenu />
      </div>
    );

    const toggleButton = screen.getByTestId("menu-toggle");

    expect(screen.getByTestId("icon-menu")).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.queryByTestId("icon-menu")).not.toBeInTheDocument();
    expect(screen.getByTestId("icon-close")).toBeInTheDocument();
  });
});

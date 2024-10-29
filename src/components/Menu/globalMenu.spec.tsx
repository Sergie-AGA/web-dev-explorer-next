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
    render(<GlobalMenu />);

    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByText("Techs")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("opens the correct modal when each menu item is clicked", () => {
    render(<GlobalMenu />);
    const openModalMock = useUIStore.getState().openModal;

    act(() => fireEvent.click(screen.getByText("Filters")));
    expect(openModalMock).toHaveBeenCalledWith("filter");

    act(() => fireEvent.click(screen.getByText("Techs")));
    expect(openModalMock).toHaveBeenCalledWith("tech");
  });
});

import { render, fireEvent, act, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GlobalModal from "./GlobalModal";
import { useUIStore } from "@/features/homepage/store/useUIStore";

describe("GlobalModal Component", () => {
  beforeEach(() => {
    act(() => {
      useUIStore.setState({
        globalModal: { isOpen: true, type: "tech" },
        toggleModal: jest.fn(),
      });
    });
  });

  it("renders the modal when isOpen is true", () => {
    render(<GlobalModal hasOverlay={true} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    act(() => {
      useUIStore.setState({ globalModal: { isOpen: false, type: "tech" } });
    });
    const { container } = render(<GlobalModal hasOverlay={true} />);
    expect(container.firstChild).toBeNull();
  });

  it("calls toggleModal when the overlay or close button is clicked", () => {
    const toggleModalMock = useUIStore.getState().toggleModal;
    render(<GlobalModal hasOverlay={true} />);

    const overlay = document.querySelector(".bg-overlay");
    const closeButton = screen.getByRole("button");

    if (overlay) {
      fireEvent.click(overlay);
      expect(toggleModalMock).toHaveBeenCalledTimes(1);
    }

    fireEvent.click(closeButton);
    expect(toggleModalMock).toHaveBeenCalledTimes(2);
  });
});

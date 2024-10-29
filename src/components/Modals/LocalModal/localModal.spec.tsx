import { render, screen, fireEvent } from "@testing-library/react";
import LocalModal from "./LocalModal";
import "@testing-library/jest-dom";

describe("LocalModal Component", () => {
  const closeModalMock = jest.fn();

  beforeEach(() => {
    closeModalMock.mockClear();
  });

  it("renders the modal with overlay by default", () => {
    render(
      <LocalModal closeModal={closeModalMock}>
        <div data-testid="modal-content">Modal Content</div>
      </LocalModal>
    );

    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    expect(screen.getByText(/Modal Content/i)).toBeInTheDocument();
    expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
  });

  it("does not close when overlay is clicked if modal is persistent", () => {
    render(
      <LocalModal closeModal={closeModalMock} persistent={true}>
        <div data-testid="modal-content">Persistent Modal Content</div>
      </LocalModal>
    );

    const overlay = screen.getByTestId("modal-overlay");
    fireEvent.click(overlay);
    expect(closeModalMock).not.toHaveBeenCalled();
  });

  it("closes the modal when overlay is clicked if not persistent", () => {
    render(
      <LocalModal closeModal={closeModalMock} persistent={false}>
        <div data-testid="modal-content">Non-Persistent Modal Content</div>
      </LocalModal>
    );

    const overlay = screen.getByTestId("modal-overlay");
    fireEvent.click(overlay);
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });

  it("closes the modal when the close button is clicked if not persistent", () => {
    render(
      <LocalModal closeModal={closeModalMock} persistent={false}>
        <div data-testid="modal-content">Non-Persistent Modal Content</div>
      </LocalModal>
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(closeModalMock).toHaveBeenCalledTimes(1);
  });

  it("does not render close button when modal is persistent", () => {
    render(
      <LocalModal closeModal={closeModalMock} persistent={true}>
        <div data-testid="modal-content">Persistent Modal Content</div>
      </LocalModal>
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});

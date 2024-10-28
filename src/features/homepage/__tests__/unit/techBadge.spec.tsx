import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TechBadge from "../../components/TechBadge";

describe("TechBadge Component", () => {
  const mockOnClick = jest.fn();

  it("renders the TechBadge title", () => {
    render(<TechBadge title="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<TechBadge title="React" className="custom-class" />);
    const badge = screen.getByText("React");
    expect(badge).toHaveClass("custom-class");
  });

  it("calls onClick when clicked and removable is false", () => {
    render(<TechBadge title="React" onClick={mockOnClick} removable={false} />);
    fireEvent.click(screen.getByText("React"));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("does not call onClick when main span is clicked if removable is true", () => {
    render(<TechBadge title="React" onClick={mockOnClick} removable />);
    fireEvent.click(screen.getByText("React"));
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("renders remove icon when removable is true", () => {
    render(<TechBadge title="React" removable />);
    const removeIcon = screen.getByTestId("remove-icon");
    expect(removeIcon).toBeInTheDocument();
  });

  it("calls onClick when remove icon is clicked if removable is true", () => {
    render(<TechBadge title="React" onClick={mockOnClick} removable />);
    const removeIcon = screen.getByTestId("remove-icon");
    fireEvent.click(removeIcon);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("does not render remove icon when removable is false", () => {
    render(<TechBadge title="React" />);
    const removeIcon = screen.queryByTestId("remove-icon");
    expect(removeIcon).not.toBeInTheDocument();
  });
});

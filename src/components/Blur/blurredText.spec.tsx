import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlurredText from "./BlurredText";

describe("BlurredText Component", () => {
  it("renders text with blur effect", () => {
    render(<BlurredText text="Hidden Text" />);

    expect(screen.getByText("Hidden Text")).toBeInTheDocument();
    const blurredOverlay = screen.getByText("Hidden Text").nextSibling;
    expect(blurredOverlay).toHaveClass("blur-[2px]");
    expect(blurredOverlay).not.toHaveClass("opacity-0");
  });

  it("applies blur from the specified direction", () => {
    render(<BlurredText text="Hidden Text" from="right" />);

    const blurredOverlay = screen.getByText("Hidden Text").nextSibling;
    expect(blurredOverlay).toHaveClass("right-0");
  });

  it("toggles visibility when hasToggle is true", () => {
    render(<BlurredText text="Hidden Text" hasToggle />);

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    const blurredOverlay = screen.getByText("Hidden Text").nextSibling;
    expect(blurredOverlay).toHaveClass("opacity-0");

    fireEvent.click(toggleButton);
    expect(blurredOverlay).not.toHaveClass("opacity-0");
  });

  it("applies custom className", () => {
    render(<BlurredText text="Hidden Text" className="custom-class" />);

    const blurredOverlay = screen.getByText("Hidden Text").nextSibling;
    expect(blurredOverlay).toHaveClass("custom-class");
  });
});

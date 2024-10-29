import { render, screen } from "@testing-library/react";
import GlitchText from "./GlitchText";
import "@testing-library/jest-dom";

describe("GlitchText", () => {
  it("renders without errors with default props", () => {
    render(<GlitchText tag="h3" text="Glitch Test" />);
    const glitchContainers = screen.getAllByText(/./, { exact: false });
    expect(glitchContainers).toHaveLength(
      "Glitch Test".replace(" ", "").length * 3
    );
  });

  it("renders each letter as a separate GlitchLetter component with three spans per letter", () => {
    render(<GlitchText tag="h3" text="Test" />);

    const glitchContainers = screen.getAllByTestId(/key-/);

    expect(glitchContainers).toHaveLength(4);

    glitchContainers.forEach((container) => {
      const spans = container.querySelectorAll("span");
      expect(spans).toHaveLength(3);
    });
  });

  it("applies the correct tag around the text", () => {
    render(<GlitchText tag="h2" text="Heading Test" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it("applies the given className to each GlitchLetter span", () => {
    render(<GlitchText tag="h3" text="Style Test" className="custom-class" />);
    const glitchContainers = screen.getAllByText(/./, { exact: false });

    glitchContainers.forEach((container) => {
      const spans = container.querySelectorAll("span");
      spans.forEach((span) => {
        expect(span).toHaveClass("custom-class");
      });
    });
  });
});

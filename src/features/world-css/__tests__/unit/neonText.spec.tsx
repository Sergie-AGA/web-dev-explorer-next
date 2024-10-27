import { render, screen } from "@testing-library/react";
import NeonText from "../../components/NeonText/NeonText";
import "@testing-library/jest-dom";

describe("NeonText", () => {
  it("renders the text with the correct tag", () => {
    render(<NeonText tag="h2" text="Neon Test" />);
    const heading = screen.getByText("Neon Test");
    expect(heading.tagName).toBe("H2");
  });

  it("applies flicker effect when flickerEffect is true", () => {
    render(<NeonText tag="h1" text="Flicker Test" flickerEffect />);
    const title = screen.getByText("Flicker Test");
    expect(title).toHaveClass("neon-flicker");
  });

  it("does not apply flicker effect when flickerEffect is false", () => {
    render(<NeonText tag="h1" text="No Flicker" flickerEffect={false} />);
    const title = screen.getByText("No Flicker");
    expect(title).not.toHaveClass("neon-flicker");
  });
});

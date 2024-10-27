import { render, screen, fireEvent } from "@testing-library/react";
import RandomColourText from "../../components/RandomColourText/RandomColourText";
import "@testing-library/jest-dom";

describe("RandomColourText", () => {
  it("renders the provided text", () => {
    render(<RandomColourText text="Colour Test" />);
    expect(screen.getByText("C")).toBeInTheDocument();
    expect(screen.getByText("T")).toBeInTheDocument();
  });

  it("changes color on mouse enter", () => {
    render(<RandomColourText text="Hover" />);
    const firstChar = screen.getByText("H");
    const initialColor = firstChar.style.color;

    fireEvent.mouseEnter(firstChar);

    expect(firstChar.style.color).not.toBe(initialColor);
  });

  it("applies random colors individually to each character", () => {
    render(<RandomColourText text="Colour" />);
    const chars = screen.getAllByTestId("random-colour-char");

    chars.forEach((char) => {
      fireEvent.mouseEnter(char);
      const colorStyle = char.style.color;

      expect(colorStyle).toMatch(/^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/);
    });
  });
});

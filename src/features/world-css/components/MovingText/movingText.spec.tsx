import { render, screen, fireEvent, act } from "@testing-library/react";
import MovingText from "./MovingText";
import "@testing-library/jest-dom";

describe("MovingText", () => {
  it("renders the provided text", () => {
    render(<MovingText text="Sample Text" />);
    expect(screen.getByText("S")).toBeInTheDocument();
    expect(screen.getByText("T")).toBeInTheDocument();
  });

  it("changes position on mouse enter", () => {
    render(<MovingText text="Hover" />);
    const firstChar = screen.getByText("H");
    fireEvent.mouseEnter(firstChar);

    const transform = window.getComputedStyle(firstChar).transform;
    expect(transform).toMatch(
      /translate\([-]?\d+(\.\d+)?px, [-]?\d+(\.\d+)?px\)/
    );
  });

  it("resets position after mouse leave and timeout", () => {
    jest.useFakeTimers();
    render(<MovingText text="Reset" />);
    const firstChar = screen.getByText("R");

    fireEvent.mouseEnter(firstChar);

    fireEvent.mouseLeave(firstChar);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const transform = window.getComputedStyle(firstChar).transform;
    expect(transform).toBe("translate(0px, 0px)");

    jest.useRealTimers();
  });
});

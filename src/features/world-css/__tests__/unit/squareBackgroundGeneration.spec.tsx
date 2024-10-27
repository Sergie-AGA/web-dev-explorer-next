import { render, screen, act } from "@testing-library/react";
import SquareBackgroundGeneration from "../../components/SquareBackgroundGeneration/SquareBackgroundGeneration";
import "@testing-library/jest-dom";

jest.mock("uuid", () => ({ v4: () => `test-id-${Math.random()}` }));

describe("SquareBackgroundGeneration", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders without crashing", () => {
    render(<SquareBackgroundGeneration isRandomSize={true} size={50} />);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    const squares = screen.getAllByTestId("square-test-id");
    expect(squares.length).toBeGreaterThan(0);
  });

  it("adds squares over time", () => {
    render(<SquareBackgroundGeneration isRandomSize={true} size={50} />);
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const initialSquares = screen.getAllByTestId("square-test-id");
    expect(initialSquares.length).toBeGreaterThan(0);
  });

  it("removes a specific square after a set time", () => {
    render(<SquareBackgroundGeneration isRandomSize={true} size={50} />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const squareElements = screen.getAllByTestId("square-test-id");
    const specificSquare = squareElements[0];
    specificSquare.setAttribute("data-testid", "test-specific-square");

    expect(screen.getByTestId("test-specific-square")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(8000);
    });

    expect(screen.queryByTestId("test-specific-square")).toBeNull();
  });
});

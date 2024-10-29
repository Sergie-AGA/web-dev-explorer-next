import { render, screen, fireEvent, act } from "@testing-library/react";
import IconBackgroundGeneration from "./IconBackgroundGeneration";
import "@testing-library/jest-dom";

jest.mock("uuid", () => ({ v4: () => `test-id-${Math.random()}` }));

describe("IconBackgroundGeneration", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders without crashing", () => {
    render(<IconBackgroundGeneration size={24} />);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    const icons = screen.getAllByTestId("floating-icon");
    expect(icons.length).toBeGreaterThan(0);
  });

  it("adds icons over time", () => {
    render(<IconBackgroundGeneration size={24} />);
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const initialIcons = screen.getAllByTestId("floating-icon");
    expect(initialIcons.length).toBeGreaterThan(0);
  });

  it("removes an icon on click", () => {
    render(<IconBackgroundGeneration size={24} />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const iconToRemove = screen.getAllByTestId("floating-icon")[0];
    const iconId = iconToRemove.getAttribute("id");

    if (iconId) {
      fireEvent.click(iconToRemove);
      act(() => {
        jest.advanceTimersByTime(2000);
      });
      expect(document.getElementById(iconId)).toBeNull();
    }
  });
});

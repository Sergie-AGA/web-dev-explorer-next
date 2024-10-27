import { render, screen, act } from "@testing-library/react";
import SwitchingText from "../../components/SwitchingText/SwitchingText";
import "@testing-library/jest-dom";

describe("SwitchingText", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("renders the first child initially as visible", () => {
    render(
      <SwitchingText>
        <span>First</span>
        <span>Second</span>
        <span>Third</span>
      </SwitchingText>
    );

    const firstChildContainer = screen.getByText("First").parentElement;
    const secondChildContainer = screen.getByText("Second").parentElement;
    const thirdChildContainer = screen.getByText("Third").parentElement;

    expect(firstChildContainer).toHaveClass("visible");
    expect(secondChildContainer).toHaveClass("hidden");
    expect(thirdChildContainer).toHaveClass("hidden");
  });

  it("cycles through children at the correct interval", () => {
    render(
      <SwitchingText>
        <span>First</span>
        <span>Second</span>
        <span>Third</span>
      </SwitchingText>
    );

    act(() => {
      jest.advanceTimersByTime(8000);
    });
    expect(screen.getByText("Second").parentElement).toHaveClass("visible");
    expect(screen.getByText("First").parentElement).toHaveClass("hidden");

    act(() => {
      jest.advanceTimersByTime(8000);
    });
    expect(screen.getByText("Third").parentElement).toHaveClass("visible");
    expect(screen.getByText("Second").parentElement).toHaveClass("hidden");

    act(() => {
      jest.advanceTimersByTime(8000);
    });
    expect(screen.getByText("First").parentElement).toHaveClass("visible");
    expect(screen.getByText("Third").parentElement).toHaveClass("hidden");
  });

  it("clears the interval on unmount", () => {
    const clearIntervalSpy = jest.spyOn(global, "clearInterval");
    const { unmount } = render(
      <SwitchingText>
        <span>First</span>
        <span>Second</span>
        <span>Third</span>
      </SwitchingText>
    );

    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});

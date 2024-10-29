import { useKeyPress } from "@/hooks/useKeyPress";
import { fireEvent, renderHook } from "@testing-library/react";

describe("useKeyPress", () => {
  it("calls the callback when the specified keys are pressed", () => {
    const callback = jest.fn();
    const keyCombos = [{ keys: ["Control", "a"], callback }];

    renderHook(() => useKeyPress(keyCombos));

    fireEvent.keyDown(document, { key: "Control", ctrlKey: true });
    fireEvent.keyDown(document, { key: "a", ctrlKey: true });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("does not call the callback if the keys do not match", () => {
    const callback = jest.fn();
    const keyCombos = [{ keys: ["Shift", "b"], callback }];

    renderHook(() => useKeyPress(keyCombos));

    fireEvent.keyDown(document, { key: "Control", ctrlKey: true });
    fireEvent.keyDown(document, { key: "b", ctrlKey: true });

    expect(callback).not.toHaveBeenCalled();
  });

  it("supports multiple key combinations", () => {
    const callbackA = jest.fn();
    const callbackB = jest.fn();
    const keyCombos = [
      { keys: ["Control", "a"], callback: callbackA },
      { keys: ["Shift", "b"], callback: callbackB },
    ];

    renderHook(() => useKeyPress(keyCombos));

    fireEvent.keyDown(document, { key: "Control", ctrlKey: true });
    fireEvent.keyDown(document, { key: "a", ctrlKey: true });
    expect(callbackA).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(document, { key: "Shift", shiftKey: true });
    fireEvent.keyDown(document, { key: "b", shiftKey: true });
    expect(callbackB).toHaveBeenCalledTimes(1);
  });

  it("cleans up event listeners on unmount", () => {
    const callback = jest.fn();
    const keyCombos = [{ keys: ["Control", "a"], callback }];

    const { unmount } = renderHook(() => useKeyPress(keyCombos));

    unmount();

    fireEvent.keyDown(document, { key: "Control", ctrlKey: true });
    fireEvent.keyDown(document, { key: "a", ctrlKey: true });

    expect(callback).not.toHaveBeenCalled();
  });
});

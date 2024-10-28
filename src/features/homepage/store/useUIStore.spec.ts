import { renderHook, act } from "@testing-library/react";
import { ITechTypes } from "@/config/technologies";
import { useUIStore } from "./useUIStore";

describe("useUIStore", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useUIStore());
    expect(result.current.globalModal.isOpen).toBe(false);
    expect(result.current.globalModal.type).toBe("tech");
    expect(result.current.activeTech).toBeNull();
  });

  it("should toggle modal state and set type correctly", () => {
    const { result } = renderHook(() => useUIStore());

    act(() => {
      result.current.toggleModal("filter");
    });
    expect(result.current.globalModal.isOpen).toBe(true);
    expect(result.current.globalModal.type).toBe("filter");

    act(() => {
      result.current.toggleModal("filter");
    });
    expect(result.current.globalModal.isOpen).toBe(false);
  });

  it("should open modal with specified type", () => {
    const { result } = renderHook(() => useUIStore());

    act(() => {
      result.current.openModal("tech");
    });
    expect(result.current.globalModal.isOpen).toBe(true);
    expect(result.current.globalModal.type).toBe("tech");
  });

  it("should set activeTech with provided tech and type", () => {
    const { result } = renderHook(() => useUIStore());
    const mockTech: ITechTypes = "frontend";
    const mockTechName = "React";

    act(() => {
      result.current.setActiveTech(mockTechName, mockTech);
    });
    expect(result.current.activeTech).toEqual({
      type: mockTech,
      tech: mockTechName,
    });
  });
});

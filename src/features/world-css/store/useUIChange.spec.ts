import { useSidebarStore } from "./useUIChange";

describe("useSidebarStore", () => {
  afterEach(() => {
    useSidebarStore.setState({
      activeSidebar: "tsfx",
      activeSection: "tsfx",
      activeComponent: "glitch",
    });
  });

  it("should change activeSidebar correctly", () => {
    useSidebarStore.getState().changeActiveSidebar("art");
    expect(useSidebarStore.getState().activeSidebar).toBe("art");
  });

  it("should change activeSection correctly", () => {
    useSidebarStore.getState().changeActiveSection("background");
    expect(useSidebarStore.getState().activeSection).toBe("background");
  });

  it("should change activeComponent correctly", () => {
    useSidebarStore.getState().changeActiveComponent("neon");
    expect(useSidebarStore.getState().activeComponent).toBe("neon");
  });
});

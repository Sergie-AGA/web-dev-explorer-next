import { create } from "zustand";

export type TSectionType = "sfx" | "art" | "background" | null;
export type TComponentType = "glitch" | "neon" | "fade" | "phone";

interface ISidebarState {
  activeSection: TSectionType;
  changeActiveSection: (section: TSectionType) => void;
  activeSidebar: TSectionType;
  changeActiveSidebar: (section: TSectionType) => void;
  activeComponent: TComponentType;
  changeActiveComponent: (comp: TComponentType) => void;
}

export const useSidebarStore = create<ISidebarState>()((set) => ({
  activeSection: "sfx",

  changeActiveSection: (section) => {
    set({ activeSection: section });
  },

  activeSidebar: "sfx",

  changeActiveSidebar: (sidebar) => {
    set({ activeSidebar: sidebar });
  },

  activeComponent: "glitch",

  changeActiveComponent: (comp) => {
    set({ activeComponent: comp });
  },
}));

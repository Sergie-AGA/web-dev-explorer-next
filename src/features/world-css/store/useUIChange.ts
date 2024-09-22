import { create } from "zustand";

export type TSectionType = "tsfx" | "art" | "background" | null;
export type TComponentType =
  | "glitch"
  | "neon"
  | "fade"
  | "phone"
  | "ranCol"
  | "bIcons"
  | "bSquares";

interface ISidebarState {
  activeSection: TSectionType;
  changeActiveSection: (section: TSectionType) => void;
  activeSidebar: TSectionType;
  changeActiveSidebar: (section: TSectionType) => void;
  activeComponent: TComponentType;
  changeActiveComponent: (comp: TComponentType) => void;
}

export const useSidebarStore = create<ISidebarState>()((set) => ({
  activeSection: "tsfx",

  changeActiveSection: (section) => {
    set({ activeSection: section });
  },

  activeSidebar: "tsfx",

  changeActiveSidebar: (sidebar) => {
    set({ activeSidebar: sidebar });
  },

  activeComponent: "glitch",

  changeActiveComponent: (comp) => {
    set({ activeComponent: comp });
  },
}));

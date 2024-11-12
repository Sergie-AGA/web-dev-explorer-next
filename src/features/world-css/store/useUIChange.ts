import { create } from "zustand";

export type TSectionType = "tsfx" | "art" | "background";
export type TComponentType =
  | "glitch"
  | "neon"
  | "fade"
  | "phone"
  | "ranCol"
  | "bIcons"
  | "bSquares";

export interface ISidebarState {
  activeSidebar: TSectionType;
  changeActiveSidebar: (section: TSectionType) => void;
  activeSection: TSectionType;
  changeActiveSection: (section: TSectionType) => void;
  activeComponent: TComponentType;
  changeActiveComponent: (comp: TComponentType) => void;
}

export const useSidebarStore = create<ISidebarState>()((set) => ({
  activeSidebar: "tsfx",

  changeActiveSidebar: (sidebar) => {
    set({ activeSidebar: sidebar });
  },

  activeSection: "tsfx",

  changeActiveSection: (section) => {
    set({ activeSection: section });
  },

  activeComponent: "glitch",

  changeActiveComponent: (comp) => {
    set({ activeComponent: comp });
  },
}));

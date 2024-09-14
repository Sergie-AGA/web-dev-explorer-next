import { create } from "zustand";

export type TSectionType = "sfx" | "art" | "background" | null;
type TComponentType = "glitch" | "neon" | "fade" | "phone";

interface ISidebarState {
  activeSection: TSectionType;
  changeActiveSection: (section: TSectionType) => void;
  activeComponent: TComponentType;
  changeActiveComponent: (comp: TComponentType) => void;
}

export const useSidebarStore = create<ISidebarState>()((set) => ({
  activeSection: "sfx",

  changeActiveSection: (section) => {
    set({ activeSection: section });
  },

  activeComponent: "glitch",

  changeActiveComponent: (comp) => {
    set({ activeComponent: comp });
  },
}));

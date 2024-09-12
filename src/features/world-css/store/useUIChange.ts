import { create } from "zustand";

export type TSidebarType = "sfx" | "art" | "background" | null;

interface ISidebarState {
  activeSidebar: TSidebarType;
  changeActiveSidebar: (sidebar: TSidebarType) => void;
  activeSection: string;
  changeActiveSection: (section: string) => void;
}

export const useSidebarStore = create<ISidebarState>()((set) => ({
  activeSection: "SFX",

  changeActiveSection: (section) => {
    set({ activeSection: section });
  },

  activeSidebar: null,

  changeActiveSidebar: (sidebar) => {
    set({ activeSidebar: sidebar });
  },
}));

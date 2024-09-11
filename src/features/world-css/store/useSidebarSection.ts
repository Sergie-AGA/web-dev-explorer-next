import { create } from "zustand";

interface ISidebarState {
  activeSection: string;
  changeActiveSection: (section: string) => void;
}

export const useSidebarStore = create<ISidebarState>()((set) => ({
  activeSection: "SFX",

  changeActiveSection: (section) => {
    set({ activeSection: section });
  },
}));

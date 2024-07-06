import { ITechTypes } from "@/config/technologies";
import { create } from "zustand";

interface IUIState {
  globalModal: {
    isOpen: Boolean;
    type: modalType;
  };
  toggleModal: (type?: modalType) => void;
  openModal: (type?: modalType) => void;
  activeTech: {
    type: ITechTypes;
    tech: string;
  } | null;
  setActiveTech: (tech: string, type: ITechTypes) => void;
}

export type modalType = "tech" | "filter";

export const useUIStore = create<IUIState>()((set, get) => ({
  globalModal: {
    isOpen: false,
    type: "tech",
  },

  toggleModal(type: modalType = "tech") {
    const { globalModal } = get();
    globalModal.isOpen = !globalModal.isOpen;
    globalModal.type = type;

    set((state) => ({
      globalModal,
    }));
  },

  openModal(type: modalType = "tech") {
    const { globalModal } = get();
    globalModal.isOpen = true;
    globalModal.type = type;

    set((state) => ({
      globalModal,
    }));
  },

  activeTech: null,

  setActiveTech(tech, type) {
    set((state) => ({
      activeTech: {
        type,
        tech,
      },
    }));
  },
}));

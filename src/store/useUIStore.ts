import { create } from "zustand";

interface IUIState {
  globalModal: {
    isOpen: Boolean;
    type: modalType;
  };
  toggleModal: (type?: modalType) => void;
  openModal: (type?: modalType) => void;
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
}));

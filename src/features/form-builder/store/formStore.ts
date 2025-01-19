import { create, StateCreator } from "zustand";
import zukeeper from "zukeeper";

export type SurveyElement = {
  id: string;
  type: string;
  title: string;
  properties?: Record<string, any>;
  choices?: string[];
};

interface ISurveyEditorState {
  elements: SurveyElement[];
  editingElementId: string | null;

  addElement: (element: SurveyElement) => void;
  updateElement: (
    id: string,
    updatedProperties: Partial<SurveyElement>
  ) => void;
  removeElement: (id: string) => void;
  clearElements: () => void;

  setEditingElement: (id: string | null) => void;
}

const surveyEditorStore: StateCreator<ISurveyEditorState> = (set) => ({
  elements: [],
  editingElementId: null,

  addElement: (element) =>
    set((state) => ({
      elements: [...state.elements, element],
    })),

  updateElement: (id, updatedProperties) =>
    set((state) => ({
      elements: state.elements.map((element) =>
        element.id === id ? { ...element, ...updatedProperties } : element
      ),
    })),

  removeElement: (id) =>
    set((state) => ({
      elements: state.elements.filter((element) => element.id !== id),
    })),

  clearElements: () =>
    set(() => ({
      elements: [],
    })),

  setEditingElement: (id) =>
    set(() => ({
      editingElementId: id,
    })),
});

export const useFormBuilderStore = create<ISurveyEditorState>(
  zukeeper(surveyEditorStore)
);

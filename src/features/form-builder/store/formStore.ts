import { create, StateCreator } from "zustand";
import zukeeper from "zukeeper";

export type SurveyElement = {
  id: string;
  type: string;
  title: string;
  properties?: Record<string, any>;
};

interface ISurveyEditorState {
  elements: SurveyElement[];

  addElement: (element: SurveyElement) => void;

  updateElement: (
    id: string,
    updatedProperties: Partial<SurveyElement>
  ) => void;

  removeElement: (id: string) => void;

  clearElements: () => void;
}

const surveyEditorStore: StateCreator<ISurveyEditorState> = (set) => ({
  elements: [],

  addElement: (element) =>
    set((state) => ({
      elements: [...state.elements, element],
    })),

  updateElement: (id, updatedProperties) =>
    set((state) => ({
      elements: state.elements.map((element) =>
        element.id === id
          ? {
              ...element,
              ...updatedProperties,
            }
          : element
      ),
    })),

  removeElement: (id) =>
    set((state) => ({
      elements: state.elements.filter((element) => element.id !== id),
    })),

  clearElements: () => set(() => ({ elements: [] })),
});

export const useFormBuilderStore = create<ISurveyEditorState>()(
  zukeeper(surveyEditorStore)
);

if (typeof window !== "undefined") {
  (window as any).surveyStore = useFormBuilderStore;
}

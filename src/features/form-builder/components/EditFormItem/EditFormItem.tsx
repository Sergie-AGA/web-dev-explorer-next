"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ShadcnUi/Sheet";
import { Input } from "@/components/ShadcnUi/Input";
import { useFormBuilderStore } from "@/features/form-builder/store/formStore";
import { IconX } from "@tabler/icons-react";

export default function EditFormItem({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const editingElementId = useFormBuilderStore(
    (state) => state.editingElementId
  );
  const elements = useFormBuilderStore((state) => state.elements);
  const updateElement = useFormBuilderStore((state) => state.updateElement);

  const editingElement =
    elements.find((element) => element.id === editingElementId) || null;

  const handleTitleBlur = (newTitle: string) => {
    if (!editingElement) return;
    updateElement(editingElement.id, { title: newTitle });
  };

  const handleChoiceBlur = (index: number, newValue: string) => {
    if (!editingElement) return;
    const updatedChoices = [...(editingElement.choices || [])];
    updatedChoices[index] = newValue;
    updateElement(editingElement.id, { choices: updatedChoices });
  };

  const handleAddChoice = () => {
    if (!editingElement) return;
    const updatedChoices = [...(editingElement.choices || []), ""];
    updateElement(editingElement.id, { choices: updatedChoices });
  };

  const handleDeleteChoice = (index: number) => {
    if (!editingElement) return;
    const updatedChoices = (editingElement.choices || []).filter(
      (_: any, i: number) => i !== index
    );
    updateElement(editingElement.id, { choices: updatedChoices });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Form Element</SheetTitle>
        </SheetHeader>
        {editingElement ? (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">
              Title
            </label>
            <Input
              defaultValue={editingElement.title}
              onBlur={(e) => handleTitleBlur(e.target.value)}
              className="w-full"
            />
            {["checkbox", "radiogroup", "dropdown"].includes(
              editingElement.type
            ) && (
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Choices
                </label>
                {(editingElement.choices || []).map((choice, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <Input
                      defaultValue={choice}
                      onBlur={(e) => handleChoiceBlur(index, e.target.value)}
                      className="w-full"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteChoice(index)}
                      className="ml-2 text-red-500"
                    >
                      <IconX size={20} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddChoice}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Add Choice
                </button>
              </div>
            )}
            <pre className="bg-gray-800 p-4 rounded text-gray-100">
              {JSON.stringify(editingElement, null, 2)}
            </pre>
          </div>
        ) : (
          <p>No element selected for editing</p>
        )}
      </SheetContent>
    </Sheet>
  );
}

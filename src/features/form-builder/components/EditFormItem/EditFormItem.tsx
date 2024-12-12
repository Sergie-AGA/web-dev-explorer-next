"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ShadcnUi/Sheet";
import { Input } from "@/components/ShadcnUi/Input";
import { useFormBuilderStore } from "@/features/form-builder/store/formStore";

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

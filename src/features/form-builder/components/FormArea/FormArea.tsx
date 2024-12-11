"use client";

import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Survey, Model } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { BorderlessDark } from "survey-core/themes";
import { useFormBuilderStore } from "@/features/form-builder/store/formStore";
import { cn } from "@/utils/utils";
import { Question } from "survey-core";
import EditFormItem from "../EditFormItem/EditFormItem";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ShadcnUi/Dialog";

export default function FormArea() {
  const { setNodeRef } = useDroppable({ id: "form-area" });
  const elements = useFormBuilderStore((state) => state.elements);
  const setEditingElement = useFormBuilderStore(
    (state) => state.setEditingElement
  );

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const surveyJson = {
    elements: elements.map((element) => ({
      name: element.id,
      type: element.type,
      title: element.title,
      ...element.properties,
    })),
  };

  const survey = new Model(surveyJson);
  survey.applyTheme(BorderlessDark);
  survey.completeText = "View Form JSON";

  survey.onAfterRenderQuestion.add(
    (_, options: { question: Question; htmlElement: HTMLElement }) => {
      const { question, htmlElement } = options;

      htmlElement.onclick = () => {
        const elementJson = question.toJSON();
        setEditingElement(elementJson.name);
        setIsSheetOpen(true);
      };
    }
  );

  survey.onComplete.add((sender: Model) => {
    setIsDialogOpen(true);
  });

  return (
    <div ref={setNodeRef}>
      {elements.length === 0 ? (
        <p className={cn("p-4 rounded-md m-4 border-2 border-dashed")}>
          Drag your form elements from the sidebar and drop them here
        </p>
      ) : (
        <Survey model={survey} />
      )}

      <EditFormItem
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Form JSON</DialogTitle>
          </DialogHeader>
          <pre className="bg-card border border-border p-4 rounded">
            {elements && JSON.stringify(elements, null, 2)}
          </pre>
        </DialogContent>
      </Dialog>
    </div>
  );
}

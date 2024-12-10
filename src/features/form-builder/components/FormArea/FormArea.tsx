"use client";

import { useDroppable } from "@dnd-kit/core";
import { Survey, Model, SurveyModel } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { BorderlessDark } from "survey-core/themes";
import { useFormBuilderStore } from "@/features/form-builder/store/formStore";
import { cn } from "@/utils/utils";
import { Question } from "survey-core";

export default function FormArea() {
  const { setNodeRef } = useDroppable({ id: "form-area" });
  const elements = useFormBuilderStore((state) => state.elements);

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

  survey.onElementClick?.add(
    (sender: SurveyModel, options: { question: Question }) => {
      const clickedElement = options.question;
      console.log("Clicked element JSON:", clickedElement.toJSON());
      alert(
        `Element clicked:\n${JSON.stringify(clickedElement.toJSON(), null, 2)}`
      );
    }
  );

  return (
    <div ref={setNodeRef}>
      {elements.length === 0 ? (
        <p className={cn("p-4 rounded-md m-4 border-2 border-dashed")}>
          Drop your form elements here
        </p>
      ) : (
        <Survey model={survey} />
      )}
    </div>
  );
}

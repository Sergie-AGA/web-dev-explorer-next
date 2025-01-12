import React from "react";
import { Survey, Model } from "survey-react-ui";
import { BorderlessDark } from "survey-core/themes";
import "survey-core/defaultV2.css";
import {
  formExamples,
  TFormExampleKey,
  calculateTotalScore,
} from "../FormExampleSidebar/formExamples";

interface SurveyElement {
  type: string;
  name: string;
  title: string;
  isRequired?: boolean;
  rateMin?: number;
  rateMax?: number;
}

interface SurveyPage {
  name: string;
  elements: SurveyElement[];
}

interface SurveyJson {
  title: string;
  description: string;
  pages: SurveyPage[];
}

interface IFormExampleProps {
  formID: TFormExampleKey;
}

export default function FormExampleArea({ formID }: IFormExampleProps) {
  const formData = formExamples[formID];
  const survey = new Model(formData);

  survey.applyTheme(BorderlessDark);

  if (formID === "scoredSurvey") {
    survey.onComplete.add((sender) => {
      const { totalScore, maxScore } = calculateTotalScore(survey, sender.data);
      sender.completedHtml = `<h4>Thank you for completing the scored survey. Your total score is <b>${totalScore}</b> out of <b>${maxScore}</b>.</h4>`;
    });
  }

  return (
    <section className="m-4 p-4">
      <Survey model={survey} />
    </section>
  );
}

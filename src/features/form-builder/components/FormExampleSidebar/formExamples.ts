import { SurveyModel, QuestionCheckboxModel } from "survey-core";

const basicSurvey = {
  title: "Customer Feedback Survey",
  description:
    "We value your feedback. Please take a moment to complete this survey.",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "customerName",
          title: "What is your name?",
          isRequired: true,
        },
        {
          type: "rating",
          name: "satisfaction",
          title: "How satisfied are you with our service?",
          isRequired: true,
          rateMin: 1,
          rateMax: 5,
        },
        {
          type: "comment",
          name: "suggestions",
          title: "Do you have any suggestions for us?",
        },
      ],
    },
  ],
};
const quizSurvey = {
  title: "Advanced JavaScript Quiz",
  description:
    "Test your advanced JavaScript knowledge with this comprehensive quiz.",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          title: "Which company developed JavaScript?",
          choices: ["Microsoft", "Apple", "Netscape", "Google"],
          correctAnswer: "Netscape",
        },
        {
          type: "radiogroup",
          name: "question2",
          title: "Which of the following is a JavaScript framework?",
          choices: ["React", "Laravel", "Django", "Rails"],
          correctAnswer: "React",
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "checkbox",
          name: "question4",
          title: "Which of the following are JavaScript data types?",
          choices: ["String", "Number", "Boolean", "Character"],
          correctAnswer: ["String", "Number", "Boolean"],
        },
        {
          type: "dropdown",
          name: "question5",
          title:
            "Which method is used to parse a JSON string into a JavaScript object?",
          choices: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.toObject()",
            "JSON.fromString()",
          ],
          correctAnswer: "JSON.parse()",
        },
      ],
    },
  ],
  completedHtml:
    "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
};

const scoredSurvey = {
  title: "Scored Survey",
  description:
    "Test your knowledge with this scored survey. Each question has different point values.",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "checkbox",
          name: "question1",
          title: "Which of the following are programming languages?",
          choices: [
            { value: "JavaScript", text: "JavaScript", score: 2 },
            { value: "HTML", text: "HTML", score: 0 },
            { value: "CSS", text: "CSS", score: 0 },
            { value: "Python", text: "Python", score: 2 },
          ],
        },
        {
          type: "checkbox",
          name: "question2",
          title: "Which of the following are JavaScript frameworks?",
          choices: [
            { value: "React", text: "React", score: 2 },
            { value: "Angular", text: "Angular", score: 2 },
            { value: "Vue", text: "Vue", score: 2 },
            { value: "Django", text: "Django", score: 0 },
          ],
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "checkbox",
          name: "question3",
          title: "Which of the following are databases?",
          choices: [
            { value: "MySQL", text: "MySQL", score: 2 },
            { value: "MongoDB", text: "MongoDB", score: 2 },
            { value: "SQLite", text: "SQLite", score: 2 },
            { value: "Express", text: "Express", score: 0 },
          ],
        },
        {
          type: "checkbox",
          name: "question4",
          title: "Which of the following are cloud service providers?",
          choices: [
            { value: "AWS", text: "AWS", score: 2 },
            { value: "Azure", text: "Azure", score: 2 },
            { value: "Google Cloud", text: "Google Cloud", score: 2 },
            { value: "Heroku", text: "Heroku", score: 0 },
          ],
        },
      ],
    },
  ],
  completedHtml: `<h4>Thank you for completing the scored survey.</h4>`,
};

export const formExamples = { basicSurvey, quizSurvey, scoredSurvey };

export const calculateTotalScore = (formData: SurveyModel, data: any) => {
  let totalScore = 0;

  formData.pages.forEach((page) => {
    page.elements.forEach((element) => {
      if (element.getType() === "checkbox" && data[element.name]) {
        data[element.name].forEach((answer: string) => {
          const choice = (element as QuestionCheckboxModel).choices.find(
            (choice) => choice.value === answer
          );
          if (choice && choice.jsonObj.score) {
            totalScore += choice.jsonObj.score;
          }
        });
      }
    });
  });

  const maxScore = formData.pages.reduce((acc, page) => {
    return (
      acc +
      page.elements.reduce((acc, element) => {
        if (element.getType() === "checkbox") {
          return (
            acc +
            (element as QuestionCheckboxModel).choices.reduce(
              (acc, choice) => acc + (choice.jsonObj.score || 0),
              0
            )
          );
        }
        return acc;
      }, 0)
    );
  }, 0);

  return { totalScore, maxScore };
};

export type TFormExampleKey = keyof typeof formExamples;

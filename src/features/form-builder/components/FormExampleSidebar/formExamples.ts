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
  title: "JavaScript Quiz",
  description: "Test your JavaScript knowledge with this quiz.",
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
  ],
  completedHtml:
    "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
};

const scoredSurvey = {
  title: "Personality Test",
  description: "Answer the questions to find out your personality type.",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          title: "Do you prefer to work in a team or alone?",
          choices: [
            { value: "team", text: "In a team", score: 10 },
            { value: "alone", text: "Alone", score: 5 },
          ],
        },
        {
          type: "radiogroup",
          name: "question2",
          title: "Do you like to take risks?",
          choices: [
            { value: "yes", text: "Yes", score: 10 },
            { value: "no", text: "No", score: 5 },
          ],
        },
      ],
    },
  ],
  completedHtml: "<h4>Your total score is <b>{totalScore}</b>.</h4>",
};

export const formExamples = { basicSurvey, quizSurvey, scoredSurvey };

export type TFormExampleKey = keyof typeof formExamples;

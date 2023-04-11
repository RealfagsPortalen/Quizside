export type QuizType = {
  id: string;
  title: string;
  description: string;
  questions: QuestionType[];
};

export type QuestionType = {
  id: string;
  questionText: string;
  answerOptions: AnswerType[];
  solution: string;
};

export type AnswerType = {
  optionText: string;
  isCorrect: boolean;
};

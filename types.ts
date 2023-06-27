export interface User {
  id: string;
  email: string;
  learnWorldsUserId: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  hasMadeFirstPurchase: boolean;

  recruitedById?: string;
}

export type QuizType = {
  id: number;
  name: string;
  description: string;
  questions: QuestionType[];
  userStatistics: {
    totalQuestions: number;
    totalAnswered: number;
    totalCorrectlyAnswered: number;
  };
};

export type QuestionType = {
  quizId: string;
  question: string;
  options: OptionType[];
  solution: string;
  answered: boolean;
  answeredCorrectly: boolean;
  id: number;
};

export type OptionType = {
  id: number;
  option: string;
  questionId: number;
  isCorrect: boolean;
};

export type ChapterType = {
  id: number;
  name: string;
  courseId: number;
};

export type ChapterUserStatisticsType = {
  totalQuestions: number;
  totalAnswered: number;
  totalCorrectlyAnswered: number;
};

export type CourseType = {
  id: number;
  name: string;
  learnWorldsCourseId: string;
  userStatistics: {
    totalQuestions: number;
    totalAnswered: number;
    totalCorrectlyAnswered: number;
  };
};

export type TopicType = {
  id: number;
  name: string;
  chapterId: number;
  quizzes: QuizType[];
};

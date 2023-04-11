import { useReducer } from "react";
import { Quiz } from "../../mockData";
import { QuizType } from "@types";

export type QuizState = {
  questionNumber: number;
  selectedAnswer: number | undefined;
  showAnswer: boolean;
  answers: { questionID: string; correct: boolean }[];
  quiz: QuizType;
  finished: boolean;
};

const initialState = {
  questionNumber: 0,
  showAnswer: false,
  selectedAnswer: undefined,
  finished: false,
  answers: [],
};

export type QuizActions =
  | { type: "UP" }
  | { type: "DOWN" }
  | { type: "SELECT_ANSWER"; answer: number }
  | { type: "NEXT" }
  | { type: "PREVIOUS" }
  | { type: "CHECK_ANSWER" }
  | { type: "SHOW_ANSWER"; show: boolean }
  | { type: "RESTART" };

export const useQuizReducer = (quiz: Quiz) => {
  const reducer = (state: QuizState, action: QuizActions) => {
    const hasAnswered = state.answers[state.questionNumber] !== undefined;
    switch (action.type) {
      case "NEXT":
        if (state.questionNumber >= quiz.questions.length - 1) {
          return { ...state, finished: true };
        }
        return {
          ...state,
          questionNumber: state.questionNumber + 1,
          showAnswer: false,
          selectedAnswer: undefined,
        };
      case "PREVIOUS":
        if (state.questionNumber <= 0) return state;
        return {
          questionNumber: state.questionNumber - 1,
          showAnswer: false,
          selectedAnswer: undefined,
          answers: state.answers,
        };

      case "SHOW_ANSWER":
        return { ...state, showAnswer: action.show };

      case "CHECK_ANSWER":
        if (state.selectedAnswer === undefined || hasAnswered) return state;
        const answers = [...state.answers];
        answers[state.questionNumber] = {
          questionID: quiz.questions[state.questionNumber].id,
          correct:
            quiz.questions[state.questionNumber].answerOptions[
              state.selectedAnswer
            ].isCorrect,
        };

        return {
          ...state,
          answers,
        };

      case "SELECT_ANSWER":
        if (hasAnswered) return state;
        if (action.answer < 0 || action.answer > quiz.questions.length) {
          return state;
        }
        return { ...state, selectedAnswer: action.answer };
      case "UP":
        if (hasAnswered) return state;
        return {
          ...state,
          selectedAnswer:
            (state.selectedAnswer != undefined &&
              Math.max(state.selectedAnswer - 1, 0)) ||
            0,
        };
      case "DOWN":
        if (hasAnswered) return state;
        return {
          ...state,
          selectedAnswer:
            (state.selectedAnswer != undefined &&
              Math.min(
                state.selectedAnswer + 1,
                quiz.questions[state.questionNumber].answerOptions.length - 1
              )) ||
            0,
        };

      case "RESTART":
        return { ...initialState, quiz };

      default:
        throw new Error("Invalid action");
    }
  };

  return useReducer(reducer, { ...initialState, quiz });
};

import { useReducer } from "react";
import { QuizType } from "@types";
import { getUserID } from "../../lib/user";
import { useRouter } from "next/router";

export type QuizState = {
  questionNumber: number;
  selectedAnswer: number | undefined;
  showAnswer: boolean;
  checkAnswer: boolean;
  answers: { questionID: number; correct: boolean }[];
  finished: boolean;
  quiz: QuizType;
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

export const useQuizReducer = (quiz: QuizType) => {
  const initialState: QuizState = {
    questionNumber: 0,
    selectedAnswer: undefined,
    showAnswer: false,
    checkAnswer: false,
    answers: Array(quiz.questions.length).fill(undefined),
    finished: false,
    quiz,
  };

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
          ...state,
          questionNumber: state.questionNumber - 1,
          showAnswer: false,
          selectedAnswer: undefined,
          checkAnswer: false,
        };

      case "SHOW_ANSWER":
        return { ...state, showAnswer: action.show };

      case "CHECK_ANSWER":
        if (state.selectedAnswer === undefined || hasAnswered) return state;
        const answers = [...state.answers];
        answers[state.questionNumber] = {
          questionID: quiz.questions[state.questionNumber].id,
          correct:
            quiz.questions[state.questionNumber].options[state.selectedAnswer]
              .isCorrect,
        };

        fetch(`/api/answer`, {
          method: "POST",
          body: JSON.stringify({
            userId: getUserID(useRouter().query),
            questionId: quiz.questions[state.questionNumber].id,
            isCorrect: answers[state.questionNumber].correct,
          }),
        })
          .then((res) => res.json())
          .catch((err) => console.log(err));

        return {
          ...state,
          answers,
        };

      case "SELECT_ANSWER":
        if (hasAnswered) return state;
        if (action.answer < 0 || action.answer > 1 + quiz.questions.length) {
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
                quiz.questions[state.questionNumber].options.length - 1
              )) ||
            0,
        };

      case "RESTART":
        return { ...initialState };

      default:
        throw new Error("Invalid action");
    }
  };

  return useReducer(reducer, initialState);
};

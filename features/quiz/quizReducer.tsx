import { useReducer } from "react";
import { Quiz } from "../../mockData";

type State = {
  questionNumber: number;
  selectedAnswer: number | undefined;
  showAnswer: boolean;
  answers: (number | undefined)[];
};

const initialState: State = {
  questionNumber: 0,
  showAnswer: false,
  selectedAnswer: undefined,
  answers: [],
};

type QuizActions =
  | { type: "UP" }
  | { type: "DOWN" }
  | { type: "SELECT_ANSWER"; answer: number }
  | { type: "NEXT" }
  | { type: "PREVIOUS" }
  | { type: "CHECK_ANSWER" };

export const useQuizReducer = (quiz: Quiz) => {
  const reducer = (state: State, action: QuizActions) => {
    switch (action.type) {
      case "NEXT":
        state.answers[state.questionNumber] = state.selectedAnswer;
        return {
          questionNumber: state.questionNumber + 1,
          showAnswer: false,
          selectedAnswer: undefined,
          answers: state.answers,
        };
      case "PREVIOUS":
        return {
          questionNumber: state.questionNumber - 1,
          showAnswer: false,
          selectedAnswer: undefined,
          answers: state.answers,
        };
      case "SELECT_ANSWER":
        return { ...state, selectedAnswer: action.answer };
      case "CHECK_ANSWER":
        return { ...state, showAnswer: true };
      case "UP":
        return {
          ...state,
          selectedAnswer:
            (state.selectedAnswer != undefined &&
              Math.max(state.selectedAnswer - 1, 0)) ||
            0,
        };
      case "DOWN":
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

      default:
        throw new Error();
    }
  };

  return useReducer(reducer, initialState);
};

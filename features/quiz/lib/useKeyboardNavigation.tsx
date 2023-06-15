import * as React from "react";
import { QuizActions } from "../quizReducer";

export const useKeyboardNavigation = (
  dispatch: React.Dispatch<QuizActions>,
  hasAnswered: boolean
) => {
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          dispatch({ type: "UP" });
          break;
        case "ArrowDown":
          dispatch({ type: "DOWN" });
          break;
        case "1":
          dispatch({ type: "SELECT_ANSWER", answer: 0 });
          break;
        case "2":
          dispatch({ type: "SELECT_ANSWER", answer: 1 });
          break;
        case "3":
          dispatch({ type: "SELECT_ANSWER", answer: 2 });
          break;
        case "4":
          dispatch({ type: "SELECT_ANSWER", answer: 3 });
          break;
        case "5":
          dispatch({ type: "SELECT_ANSWER", answer: 4 });
          break;
        case "6":
          dispatch({ type: "SELECT_ANSWER", answer: 5 });
          break;
        case "Enter":
          dispatch({ type: hasAnswered ? "NEXT" : "CHECK_ANSWER" });
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dispatch, hasAnswered]);
};

import * as React from "react";
import { QuestionCounter } from "./QuestionCounter";
import { LatexText } from "@ui/LatexText";
import { QuestionAnswerOptionsContainer } from "./QuestionAnswerOptionsContainer";
import { QuestionButtonRow } from "./QuestionButtonRow";
import { QuestionSolution } from "./QuestionSolution";
import { QuizActions, QuizState } from "../quizReducer";
import { QuestionType } from "@types";
import { useKeyboardNavigation } from "../lib/useKeyboardNavigation";

interface QuestionProps {
  state: QuizState;
  dispatch: React.Dispatch<QuizActions>;
  question: QuestionType;
}

export const QuizQuestion: React.FC<QuestionProps> = ({
  state,
  dispatch,
  question,
}) => {
  const hasAnswered = state.answers[state.questionNumber] !== undefined;

  useKeyboardNavigation(dispatch, hasAnswered);

  return (
    <main css={{ maxWidth: "40rem", margin: "0 20%", padding: "4rem 0" }}>
      <QuestionCounter
        questionCount={state.quiz.questions.length}
        questionNumber={state.questionNumber}
      />
      <div css={{ margin: "3rem 0" }}>
        <h1>
          <LatexText latex={question.question} />
        </h1>
      </div>
      <QuestionAnswerOptionsContainer
        options={question.options}
        state={state}
        dispatch={dispatch}
        questionID={question.id}
        hasAnswered={hasAnswered}
      />
      <QuestionButtonRow
        state={state}
        dispatch={dispatch}
        hasAnswered={hasAnswered}
      />
      {state.showAnswer && <QuestionSolution solution={question.solution} />}
    </main>
  );
};

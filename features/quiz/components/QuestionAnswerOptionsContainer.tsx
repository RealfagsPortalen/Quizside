import * as React from "react";
import { QuestionAnswerOption } from "./QuestionAnswerOption";
import { QuizActions, QuizState } from "../quizReducer";

interface QuestionAnswerOptionsContainerProps {
  questionID: string;
  answerOptions: {
    optionText: string;
    isCorrect: boolean;
  }[];
  state: QuizState;
  dispatch: React.Dispatch<QuizActions>;
  hasAnswered: boolean;
}

export const QuestionAnswerOptionsContainer: React.FC<
  QuestionAnswerOptionsContainerProps
> = ({ questionID, state, dispatch, answerOptions, hasAnswered }) => {
  return (
    <div
      css={{
        padding: "1rem",
        backgroundColor: "var(--color-gray-100)",
        borderRadius: "var(--rounded)",
      }}
    >
      <h3>Velg et svar</h3>
      <p>Du kan også bruke tallene på tatstaturet for å velge.</p>
      <div css={{ marginTop: "1rem" }}>
        {answerOptions.map((answerOption, i) => {
          return (
            <QuestionAnswerOption
              questionID={questionID}
              id={`question-${state.questionNumber}-answer-${i}`}
              key={i}
              onChange={() => dispatch({ type: "SELECT_ANSWER", answer: i })}
              label={answerOption.optionText}
              checked={state.selectedAnswer === i}
              hasAnswered={hasAnswered}
              correct={answerOption.isCorrect}
            />
          );
        })}
      </div>
    </div>
  );
};
